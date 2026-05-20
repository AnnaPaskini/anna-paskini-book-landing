# 01 — Implementation Plan

This document describes **what to build, in what order, and why**. It does not describe how to build any single piece — for that, consult the other three spec files.

The plan is organized into four phases. Each phase is gated: do not start phase N+1 until phase N is complete. This is a soft rule — you can prepare materials for later phases in parallel, but the launch checklist for each phase must be satisfied before moving on.

---

## Phase 0 — Foundations (week 1)

**Goal:** Set up the infrastructure that everything else depends on. No content yet, no design yet, just plumbing.

### Tasks

1. **Register domain.** Use Cloudflare Registrar. Primary candidate: `annapaskini.com`. Fallbacks if unavailable: `paskinibooks.com`, `annapaskinibooks.com`. Avoid `.blog`, `.author` and other novelty TLDs — they cost more on renewal and signal lower trust.

2. **Set up MailerLite account.** Free tier. Create one mailing list called `playbook-subscribers`. Create one automation: `Welcome + Deliver Playbook PDF`. Set up double opt-in. Configure unsubscribe footer.

3. **Initialize GitHub repository.** Private repo. Name: `paskini-web` or `annapaskini-com`. Standard Next.js 15 `.gitignore`. Add the four spec files to a `docs/` folder so they live with the code.

4. **Create Vercel project.** Connect to the GitHub repo. Configure environment variables (placeholders for now — MailerLite API key will be added in Phase 2). Set up custom domain (will not resolve until DNS is pointed).

5. **Cloudflare DNS setup.** Point the domain to Vercel via two records (Vercel will provide the exact values during connection):
   - `A` record on apex (`@`) pointing to Vercel's IP
   - `CNAME` record on `www` pointing to `cname.vercel-dns.com`
   - Enable HTTPS (Vercel handles certificate automatically via Let's Encrypt)

6. **Cloudflare Web Analytics.** Add the site to Cloudflare Web Analytics (free, privacy-friendly, no cookie banner needed). Get the beacon snippet for later inclusion in the site's `<head>`.

### Phase 0 launch checklist

- [ ] Domain registered and visible in Cloudflare dashboard
- [ ] MailerLite account created with one list and one automation
- [ ] GitHub repo created with initial `README.md` and `docs/` folder
- [ ] Vercel project created and linked to repo
- [ ] DNS records configured (site can be empty, but DNS resolves)
- [ ] HTTPS working when visiting the domain (will show Vercel placeholder page)

**Estimated time:** 3–4 hours, mostly waiting for DNS propagation.

---

## Phase 1 — Landing page MVP (weeks 2–3)

**Goal:** A working landing page at the domain. No blog yet. Captures emails and delivers the PDF (PDF can be a placeholder for now — see decision flag below).

### Tasks

1. **Scaffold the Next.js project.** Use `create-next-app` with TypeScript, Tailwind, App Router, ESLint. Configure Tailwind v4. Install shadcn/ui CLI and add the components listed in `04-webdesign.md` (Button, Form, Accordion, Card).

2. **Implement the design system.** Create `app/globals.css` with the CSS custom properties (color tokens, spacing scale, typography scale) as specified in `04-webdesign.md`. Create `tailwind.config.ts` mapping the tokens.

3. **Build the landing page.** Implement the 7 blocks specified in `04-webdesign.md` Section 5. Use real copy from the design spec (Section 5 contains final approved copy for every block — do not write new copy). Implement responsive behavior per the breakpoints in `04-webdesign.md` Section 7.

4. **Wire up the email form.** Connect to MailerLite API. On successful subscribe, trigger the `Welcome + Deliver Playbook PDF` automation. Show inline success state. Handle errors gracefully (specific error messages: invalid email, already subscribed, network failure).

5. **Add metadata and SEO basics.** Page `<title>`, `<meta description>`, Open Graph tags, Twitter Card tags, favicon, `robots.txt`, `sitemap.xml` (with just the homepage for now). Schema.org JSON-LD: `WebPage` + `FAQPage` for the FAQ block.

6. **Performance optimization.** Achieve PageSpeed Insights mobile ≥ 90, desktop ≥ 95. Lazy-load all images below the fold. Use `next/image` for the PDF mockup and book covers. No render-blocking resources.

### Phase 1 launch checklist

- [ ] Landing page loads at `https://annapaskini.com` (or chosen domain)
- [ ] All 7 blocks render correctly on mobile, tablet, desktop
- [ ] Email form completes the round trip: enter email → see success state → receive PDF in inbox within 60 seconds
- [ ] Page passes Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] PageSpeed Insights mobile ≥ 90, desktop ≥ 95
- [ ] All links in FAQ Q5 (Amazon) work and open in a new tab with UTM params
- [ ] Social share preview verified on at least one platform (LinkedIn or X)

### `[BERRY DECISION NEEDED]` — PDF Playbook content

The PDF must be ready by end of Phase 1 to make the email form deliver real value. Two options:

- **Option A (recommended):** Spend 1 week between Phase 0 and Phase 1 writing the actual PDF content (8–12 pages: 15-minute visit protocol + 15 conversation questions). This adds time but the launch is honest.
- **Option B:** Launch with a placeholder "early preview" PDF (3–4 pages, brief) and update it to the full version within 4 weeks. This is faster but requires emailing early subscribers with the updated version.

Decision needed before Phase 1 begins.

**Estimated time:** 12–18 hours of focused implementation, assuming the spec is followed and not re-discussed.

---

## Phase 2 — Blog launch (weeks 4–8)

**Goal:** Five GEO-optimized articles published, each independently capable of ranking in search and being cited by LLMs.

### Tasks

1. **Build the blog template.** A single article page template, parameterized. Follows the structure in `03-geo-spec.md` Section 3 (one H1, 8–12 H2s with 50% question-format, breadcrumbs, TOC, FAQ block, Author Box, Read Also block). Schema markup: `BlogPosting` + `BreadcrumbList` + `FAQPage`.

2. **Build the blog index page.** Simple listing of all articles with title, excerpt, hero image, publish date. Pagination if more than 12 articles (not relevant for launch).

3. **Write Article 1** per `03-geo-spec.md` Article 1 spec. This is the first published article and sets the editorial tone for everything that follows. Allow 2–3 days for writing + 1 day for QA against the GEO checklist.

4. **Write Articles 2–5** per their specs in `03-geo-spec.md`. Pace: one article per week. Each article goes through the QA checklist in `03-geo-spec.md` Section 5 before publishing.

5. **Internal linking pass.** Once all 5 are published, do a single pass to add cross-links: each article should link to 2–3 others where contextually relevant. Each article should link to the landing page from the Author Box.

6. **Update sitemap.xml.** Add all 5 articles. Resubmit to Google Search Console.

7. **Submit to Bing Webmaster Tools.** Bing's index feeds ChatGPT search — submitting here improves citation chances.

### Phase 2 launch checklist

- [ ] 5 articles published, each scoring against the GEO checklist (Section 5 of `03-geo-spec.md`)
- [ ] Each article uses schema markup: `BlogPosting` + `BreadcrumbList` + `FAQPage`
- [ ] Internal linking pass complete (each article links to 2–3 others + the landing page)
- [ ] Sitemap submitted to Google Search Console and Bing Webmaster Tools
- [ ] Each article has been manually queried in Google to verify it's indexed (search `site:annapaskini.com "exact H1"`)
- [ ] Author Box appears on each article with link to landing page and Amazon

**Estimated time:** 5 weeks at one article per week. Writing time: 6–10 hours per article including research, QA, and screenshot prep.

---

## Phase 3 — Optimization and growth (ongoing, month 3+)

**Goal:** Iterate based on real data. Add more articles. Maintain.

### Tasks

1. **Monitor Search Console weekly.** Track impressions, clicks, average position for each article. Identify articles that rank but get low CTR — usually a title/meta description issue.

2. **Monitor LLM citations.** Periodically (monthly) query ChatGPT, Perplexity, Claude, and Gemini with the target search queries for each article. Note which articles get cited. If an article ranks well in Google but never gets cited by LLMs, audit its schema markup and answer-first structure.

3. **Update Amazon Author Page.** Add link to `annapaskini.com`. Ensure book descriptions on Amazon match the language and tone of the landing page so visitors don't feel a context shift.

4. **Add Articles 6–10** from the GEO backlog in `03-geo-spec.md` Section 4.2. Pace: one article every 2 weeks. Quality over speed.

5. **Re-evaluate the H1.** After 90 days of real analytics: if a significant fraction (>30%) of landing-page visitors come from blog articles (warm traffic), consider A/B testing the mirror-style H1 (*"When you don't know what to say during a dementia visit"*) against the current keyword-forward H1.

6. **Build out the email list.** When the subscriber list reaches 50+, send one event email announcing Vol.3 release (whenever that is). Do not send anything before that — the welcome email is enough.

### Phase 3 has no fixed checklist

This is the long-tail. The project is in growth mode. Specific KPIs to watch:

- Monthly organic search impressions (Google Search Console)
- Number of articles ranking in top 10 for their target query
- Number of LLM citations per month (manual sampling)
- Email signup conversion rate on the landing page (MailerLite stats)
- Amazon book sales attributable to the site (UTM tracking)

---

## Dependency graph (visual)

```
Phase 0 (Foundations)
  ├── Domain registration  ──┐
  ├── MailerLite setup       ├──→ Phase 1 (Landing page MVP)
  ├── GitHub + Vercel        │     ├── Scaffold project
  └── DNS + Analytics  ──────┘     ├── Build design system
                                   ├── Implement 7 blocks
                                   ├── Wire email form ────┐
                                   └── SEO/perf basics     │
                                                            ├──→ Phase 2 (Blog launch)
                          [BERRY] PDF Playbook content ────┘     ├── Blog template
                                                                 ├── Article 1
                                                                 ├── Articles 2–5
                                                                 ├── Internal linking
                                                                 └── Sitemap submission
                                                                          │
                                                                          ↓
                                                                Phase 3 (Optimization)
```

---

## Open decisions (full list)

This is the consolidated list of `[BERRY DECISION NEEDED]` flags across all spec files. Resolve these before the corresponding phase begins.

1. **PDF Playbook content strategy** (blocks Phase 1)
   - Option A: write full PDF (8–12 pages) before Phase 1
   - Option B: launch with placeholder, update within 4 weeks

2. **Domain confirmation** (blocks Phase 0)
   - Verify `annapaskini.com` availability
   - If unavailable, choose fallback from: `paskinibooks.com`, `annapaskinibooks.com`

3. **Amazon KDP international shipping fact** (blocks publishing of FAQ Q5)
   - Confirm exact list of countries Amazon KDP ships to
   - Update FAQ Q5 wording accordingly

4. **Author Bio for blog Author Box** (blocks Phase 2)
   - One paragraph (3–4 sentences) suitable for end of every article
   - Should mention methodology references (Validation Therapy, Positive Approach to Care)
   - Should not claim credentials that don't exist

5. **Article 1 publish date target** (blocks Phase 2 kickoff)
   - Set a real calendar date so Phase 2 has a clear deadline

---

## Why this order, not some other

A reader might ask: why not write the blog articles first, since they bring the traffic? The answer is structural.

The landing page is the **destination** for every other piece of the system. The blog Author Box links to it. The Amazon Author Page links to it. The email form lives on it. If the landing page doesn't exist, none of the other pieces have anywhere to point.

So even though the blog brings the traffic, the landing page must be built first. The PDF must exist (even as a draft) so the email form has something to deliver. Only then does it make sense to write articles that funnel readers into this system.

The phases are designed so that at the end of each one, the system is **complete enough to be useful**, even if not yet complete enough to be great. End of Phase 1: a single landing page that converts cold visitors. End of Phase 2: a five-article funnel that attracts cold visitors. End of Phase 3: an ongoing growth engine.
