[README.md](https://github.com/user-attachments/files/27897921/README.md)
# Memory Activities Landing Project

**Author:** Anna Paskini
**Book series:** Memory Activities for Men with Dementia (Amazon KDP)
**Project goal:** Build a landing page + GEO-optimized blog to drive Amazon book sales
**Target audience:** Adult children (35–55) caring for a parent with dementia from a distance
**Language:** English only (KDP US audience)

---

## What this folder contains

This is the complete technical specification for the project. The four numbered files are designed to be self-contained — each one is enough for Cursor or Antigravity to generate working code without needing to read the others. Read them in order if you're new to the project; consult them individually when working on a specific layer.

| File | What it covers | When to read |
|------|----------------|--------------|
| **01-plan.md** | Implementation roadmap. Phases, dependencies, deadlines, what to build first and why. | Start here. Read once to understand the order of operations. |
| **02-architecture.md** | Technical architecture. Stack, hosting, domain, email service, file structure, deployment, analytics. | Read when setting up the project repo and infrastructure. |
| **03-geo-spec.md** | GEO/SEO specification for blog articles. Article template, schema markup, 5 launch articles, authority source whitelist. | Read when writing or generating any blog article. |
| **04-webdesign.md** | Complete design system. Color tokens, typography, spacing, components, page layouts, responsive rules, accessibility. | Read when implementing any visual layer. |

---

## Strategic foundation (the why)

The page exists to **sell the books on Amazon**. Everything else — the free PDF, the blog, the email list — is infrastructure that supports that goal.

Three concentric circles of conversion:

1. **Outer circle: blog articles.** GEO-optimized to be cited by Google, ChatGPT, Perplexity, Claude, Gemini. Each article answers a specific question caregivers search at 11 PM. Articles funnel readers to either the Amazon listings (via Author Box) or to the landing page (via internal links).

2. **Middle circle: landing page.** Captures email in exchange for a free PDF (*The 15-Minute Visit Playbook*) and displays the books with direct Amazon CTAs. The page does not try to do anything else.

3. **Inner circle: Amazon listings.** The books. This is where revenue happens. Vol.1 *Engines & Outdoors* and Vol.2 *Memories & Heritage* at $12.99 each.

Email plays a supporting role only. There is no regular newsletter. Subscribers receive one welcome email with the PDF, plus 4–6 event-based emails per year (new book releases, major PDF updates).

---

## Tech stack at a glance

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **UI components:** shadcn/ui (copied into project, not as dependency)
- **Email:** MailerLite (free up to 1,000 subscribers)
- **Hosting:** Vercel (free tier)
- **Domain registrar:** Cloudflare Registrar (wholesale pricing)
- **Domain (planned):** annapaskini.com — pending availability check
- **Analytics:** Cloudflare Web Analytics (privacy-friendly, free)
- **Repo:** GitHub private repository

Full rationale and setup instructions in `02-architecture.md`.

---

## Definition of done

The project is "launched" when:

- [ ] Domain registered and pointed to Vercel
- [ ] Landing page live, mobile-responsive, scoring ≥ 95 on PageSpeed Insights
- [ ] Email form working end-to-end (test signup → receive PDF in inbox)
- [ ] At least 3 blog articles published, each with full GEO compliance per spec
- [ ] Amazon Author Page updated with link to landing page
- [ ] Sitemap submitted to Google Search Console
- [ ] OpenGraph and Twitter Card images verified across one social share each
- [ ] All forms tracked in Cloudflare Web Analytics

---

## How to use this spec with Cursor or Antigravity

1. Open the project in Cursor/Antigravity with this entire `landing-project/` folder visible.
2. Start a new conversation. Paste the contents of `01-plan.md` as initial context.
3. Reference specific files as needed: *"Implement Block 3 of the landing page per `04-webdesign.md`"* or *"Generate the first article per `03-geo-spec.md` Article 1."*
4. When the AI asks a clarifying question already answered in the spec, point it to the relevant section. The spec is designed to be the single source of truth.

If the AI suggests something that contradicts the spec, the spec wins. Open an issue (in your wiki or a TODO list) rather than letting the implementation drift.

---

## Decisions marked as `[BERRY DECISION NEEDED]`

Search for this string across all spec files to find any open questions. As of writing, the spec is mostly closed, but a few minor decisions remain — they are flagged inline and listed at the end of `01-plan.md`.
