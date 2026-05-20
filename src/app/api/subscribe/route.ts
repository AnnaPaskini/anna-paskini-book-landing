import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

// Naive in-memory rate limit. Replace with Vercel KV / edge config for production.
const ipHits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const LIMIT = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || entry.resetAt < now) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  entry.count += 1;
  return entry.count <= LIMIT;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }
  const { email } = parsed.data;

  const apiKey = process.env.MAILERLITE_API_KEY;
  const listId = process.env.MAILERLITE_LIST_ID;

  if (!apiKey || !listId) {
    // Dev / preview mode: accept without forwarding.
    console.warn(
      "[subscribe] MailerLite env vars not set - accepting email without forwarding:",
      email
    );
    return NextResponse.json({ success: true, dev: true });
  }

  try {
    const res = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          groups: [listId],
          status: "unconfirmed",
        }),
      }
    );

    if (res.ok) {
      return NextResponse.json({ success: true });
    }

    if (res.status === 422) {
      const data = await res.json().catch(() => null);
      const msg = JSON.stringify(data || "").toLowerCase();
      if (msg.includes("already")) {
        return NextResponse.json(
          { error: "You’re already subscribed - check your inbox." },
          { status: 409 }
        );
      }
    }

    console.error("[subscribe] MailerLite error:", res.status, await res.text());
    return NextResponse.json(
      { error: "Something went wrong, please try again." },
      { status: 500 }
    );
  } catch (err) {
    console.error("[subscribe] network error:", err);
    return NextResponse.json(
      { error: "Something went wrong, please try again." },
      { status: 500 }
    );
  }
}
