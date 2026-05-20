"use client";

import { useState, useId, FormEvent } from "react";

type Props = {
  label: string;
  microcopy?: string;
  ctaText: string;
  formId?: string;
};

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailForm({
  label,
  microcopy,
  ctaText,
  formId,
}: Props) {
  const reactId = useId();
  const id = formId || reactId;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value) {
      setErrorMsg("Please enter your email.");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(value)) {
      setErrorMsg("That doesn’t look like a valid email.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      if (res.ok) {
        setStatus("success");
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (res.status === 409) {
        setErrorMsg(
          data.error || "That email is already subscribed - check your inbox."
        );
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
      setStatus("error");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="email-form-success" role="status">
        <span className="check" aria-hidden="true">✓</span>
        <div>
          <h4>Check your inbox</h4>
          <p>
            The playbook is on its way to <strong>{email}</strong>. Delivery
            usually takes under a minute - check spam if you don’t see it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="email-form"
      aria-label={label}
      noValidate
      onSubmit={onSubmit}
    >
      <label htmlFor={`${id}-email`} className="email-form-label">
        {label}
      </label>
      <div className="email-form-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          className="input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          disabled={status === "loading"}
          aria-invalid={status === "error"}
          aria-describedby={microcopy ? `${id}-micro` : undefined}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <span className="spinner" aria-hidden="true" />
              <span>Sending…</span>
            </>
          ) : (
            ctaText
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="email-form-error" role="alert">
          {errorMsg}
        </p>
      )}
      {microcopy && (
        <p id={`${id}-micro`} className="email-form-microcopy">
          {microcopy}
        </p>
      )}
    </form>
  );
}
