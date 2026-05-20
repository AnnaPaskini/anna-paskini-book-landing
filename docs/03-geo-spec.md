# 03 — GEO Specification for Blog Articles

This document is **the article template and the editorial program for the blog**. It expands Berry's original GEO/SEO technical brief into a complete specification: every required element, the rationale, the article template, the first 5 articles to write, and the authority source whitelist.

The original brief (Berry's `Техническое задание SEO-Архитектура`) is the authoritative source for technical requirements. This document does not override it — it elaborates it.

---

## 1. Why GEO, not just SEO

Traditional SEO optimizes for the Google ranking algorithm. GEO (Generative Engine Optimization) optimizes for **citation by large language models** — ChatGPT, Perplexity, Claude, Gemini, and Google's AI Overview.

The audience is increasingly searching with AI tools instead of Google. When an adult child asks ChatGPT *"how do I talk to my father with dementia,"* the LLM doesn't return a list of links — it returns an answer, sometimes citing 1–3 sources. The articles on this site exist to be those citations.

GEO is mostly a superset of SEO. Articles that GEO well also SEO well. But GEO adds specific structural demands:

1. **Schema markup is non-negotiable.** LLMs parse JSON-LD reliably. Without it, citations are unlikely.
2. **Answer-first structure matters more than length.** LLMs extract the first 1–2 sentences after each heading. Bury the answer in paragraph 4 and it won't be cited.
3. **Question-format headings get cited more.** "How to talk to a parent with dementia" as an H2 maps directly to a user query.
4. **Authority signals matter.** Bylines, dates, external citations to authoritative sources (`.gov`, `.org`, `.edu`) increase LLM trust.

Every article published on this site must meet the GEO checklist (Section 5). Articles that don't meet it are unfinished.

---

## 2. Article anatomy (full structural specification)

This is the structure every article must follow. The template is non-negotiable; the content varies.

```
┌─────────────────────────────────────────────────────────────┐
│  <head>                                                      │
│    <title>          55–60 chars, includes target keyword     │
│    <meta desc>      155–160 chars, keyword + number + CTA    │
│    <link canonical>                                          │
│    <meta og:*>      Open Graph tags                          │
│    <meta twitter:*> Twitter Card tags                        │
│    <script type="application/ld+json">                       │
│      BlogPosting + BreadcrumbList + FAQPage                  │
│    </script>                                                 │
│  </head>                                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  <article>                                                   │
│                                                              │
│    <nav>  Breadcrumbs: Home › Blog › Article title          │
│                                                              │
│    <header>                                                  │
│      <h1>  One H1 per page, includes target keyword         │
│      <time datetime="...">  Publish date                    │
│      Author byline (link to /about)                         │
│      Hero image (1200×675, alt text required)               │
│    </header>                                                 │
│                                                              │
│    Intro paragraph: 2–3 sentences                           │
│    - Direct answer to the article's main question           │
│    - Contains the target keyword                            │
│    - Contains at least one specific number or fact          │
│                                                              │
│    Table of Contents: anchor links to each H2               │
│                                                              │
│    <section>  Body sections, 8–12 H2 blocks                 │
│      <h2>     50% of H2s formatted as questions             │
│        <strong>Answer-first sentence in bold</strong>       │
│        Body content (paragraphs, lists, tables)             │
│        <h3>   2–4 H3 subsections per H2                     │
│      </h2>                                                  │
│    </section>                                               │
│                                                              │
│    Required content elements (somewhere in body):           │
│    - 1–2 tables (minimum 3×3) with H3 captions              │
│    - 4–6 lists (at least 1 <ol>, several <ul>)             │
│    - 3+ images with alt, width, height, loading="lazy"      │
│    - 5–7 internal links to other articles or landing page   │
│    - 2–3 external links to authority sources                │
│                                                              │
│    <section id="faq">                                       │
│      <h2>Frequently Asked Questions</h2>                    │
│      5–7 questions in <h3>                                  │
│      Each with bold answer-first sentence                   │
│    </section>                                               │
│                                                              │
│    <footer>                                                 │
│      Author Box (photo, name, bio, books CTA)              │
│      Read Also block (3–5 article cards)                    │
│    </footer>                                                │
│                                                              │
│  </article>                                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed requirements per element

### 3.1 `<head>` metadata

**`<title>`**
- Length: 55–60 characters (exact, not approximate)
- Must include the target keyword exactly as people search it
- Structure pattern: `[Target keyword]: [outcome or specifier] | Anna Paskini`
- Example: `What to do during a dementia visit: a 15-minute guide | Anna Paskini`
- The `| Anna Paskini` suffix is added automatically via the Next.js metadata template; the article only defines the lead portion

**`<meta name="description">`**
- Length: 155–160 characters
- Must include target keyword once
- Must include at least one number or concrete fact ("15 minutes", "5 questions", "200 activities")
- Must end with a call-to-action ("Read the full guide.", "Download the playbook.", "See the activity ideas.")
- Example: `What to do during a dementia visit: a 15-minute structure, 5 questions that work, and 3 sensory anchors. Read the full visit guide.`

**`<link rel="canonical">`**
- Always self-referential to the article's own URL
- Required even when there's no duplicate content risk (LLMs check it as an authority signal)

**Open Graph and Twitter Card tags**
- `og:type="article"`
- `og:title`, `og:description`, `og:url`, `og:image` (1200×630, ≤ 1 MB)
- `og:locale="en_US"`
- `article:published_time`, `article:modified_time`, `article:author`
- `twitter:card="summary_large_image"`

### 3.2 URL slug

- Latin alphanumeric and hyphens only, no underscores
- Maximum 75 characters
- Must contain the primary keyword
- No date prefix (timeless URLs)
- No query parameters

Examples:
- ✅ `/blog/what-to-do-during-a-dementia-visit`
- ✅ `/blog/dementia-conversation-starters-questions-that-work`
- ❌ `/blog/post?id=123`
- ❌ `/blog/2026/05/dementia_visit_guide`

### 3.3 Schema.org JSON-LD

Three schema types are mandatory on every article. Code lives in `src/components/schema/`.

**BlogPosting**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article H1 text",
  "image": "https://annapaskini.com/images/articles/[slug].jpg",
  "datePublished": "2026-05-20T08:00:00+00:00",
  "dateModified": "2026-05-20T08:00:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Anna Paskini",
    "url": "https://annapaskini.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Anna Paskini",
    "logo": {
      "@type": "ImageObject",
      "url": "https://annapaskini.com/images/logo.png"
    }
  },
  "description": "Same as meta description",
  "mainEntityOfPage": "https://annapaskini.com/blog/[slug]"
}
```

**BreadcrumbList**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://annapaskini.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://annapaskini.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Article title", "item": "https://annapaskini.com/blog/[slug]" }
  ]
}
```

**FAQPage** (from the FAQ block at the end of the article)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text from H3?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full answer text, can include HTML."
      }
    }
    // ... 4–6 more
  ]
}
```

### 3.4 Heading hierarchy

Strict rules. Cursor must not generate articles that violate these:

- **H1:** Exactly one per page. Contains the target keyword. Placed in `<header>` of `<article>`.
- **H2:** 8–12 total. **50% (4–6) must be formatted as questions** ending with `?`. Example mix:
  - "How long should a dementia visit last?" ✓
  - "Why short visits are better than long ones" ✓
  - "What if my parent doesn't recognize me?" ✓
  - "The 15-minute structure" ✓
- **H3:** 2–4 H3 subsections under each H2. No skipping levels (no H2 → H4).
- **H4 and below:** Allowed but not required. If used, only under H3, not under H2 directly.

### 3.5 Answer-first paragraphs

After every H2, the **first sentence must be in `<strong>` tags** and must directly answer the H2 question (if H2 is a question) or directly state the section's main point (if H2 is a statement).

Examples:

```markdown
## How long should a dementia visit last?

**A 15- to 20-minute visit is more effective than an hour-long one for early-to-mid stage dementia.** Shorter visits reduce sensory overload for the person with dementia and conserve the caregiver's energy. [rest of section continues...]
```

```markdown
## The 15-minute structure

**Break the visit into four parts: 3 minutes of arrival, 5 minutes of shared activity, 5 minutes of conversation anchored to a sensory object, and 2 minutes of goodbye.** This pacing matches the typical attention span for early-to-mid stage dementia and creates predictability. [rest of section continues...]
```

This is the single most important GEO element. **LLMs extract these answer-first sentences and use them as citation text.** Without them, the article will rarely be cited.

### 3.6 Tables

Each article must include **at least one table, minimum 3 rows × 3 columns**. Some articles benefit from two. Tables are highly extractable by LLMs.

Table format:
- Preceded by an H3 caption (not a sentence — a heading)
- HTML `<table>` with proper `<thead>` and `<tbody>`
- Each `<th>` has a scope attribute
- Not built with CSS grid — actual `<table>` semantics

Example structure:

```markdown
### Activities ranked by sensory engagement

| Activity | Sensory anchor | Best for |
|----------|----------------|----------|
| Looking through old photos | Visual | Visual memory still intact |
| Listening to a familiar song | Auditory | Emotional memory triggers |
| Holding a familiar tool | Tactile | Procedural memory access |
```

### 3.7 Lists

- 4–6 lists per article minimum
- At least one `<ol>` (ordered list, for steps or rankings)
- Multiple `<ul>` (unordered, for examples or considerations)
- Each list item: 1–2 sentences, not single words

### 3.8 Images

Minimum 3 images per article:
1. Hero image at the top (1200×675, after `<h1>`)
2. At least 2 inline images in body sections

All images:
- WebP format with PNG/JPEG fallback (handled by `next/image`)
- Required attributes: `alt`, `width`, `height`, `loading="lazy"` (except hero, which is `priority`)
- `alt` text describes the image's content, not "image of"
- File names in kebab-case matching content (`elderly-father-looking-out-window.webp`)

### 3.9 Internal linking

5–7 internal links per article, distributed throughout the body. Targets:

- 1–2 links to the landing page `/`
- 1–2 links to the "books" page or directly to Amazon listings
- 2–3 links to other articles (cross-linking)
- 1 link to `/about` from the author byline at top

Anchor text rules:
- Use descriptive anchors, not "click here" or "read more"
- Anchor text can include the target keyword of the destination page
- Example: "We cover [the 15-minute visit structure](/blog/what-to-do-during-a-dementia-visit) in detail elsewhere."

### 3.10 External linking

2–3 external links per article, to authority sources only.

- All external links: `target="_blank" rel="nofollow noopener"`
- Linked text describes the source's relevance, not just the URL
- Authority sources must come from the whitelist in Section 7 of this document
- Link only to specific pages, never to homepages of large organizations (deep links signal real reading)

### 3.11 FAQ block

At the end of every article, before the Author Box:

```html
<section id="faq">
  <h2>Frequently Asked Questions</h2>

  <h3>Question 1?</h3>
  <p><strong>One-sentence direct answer.</strong> Then 1–2 more sentences of context.</p>

  <h3>Question 2?</h3>
  <p><strong>One-sentence direct answer.</strong> Then 1–2 more sentences of context.</p>

  <!-- 5–7 questions total -->
</section>
```

The FAQ block matches the article topic. Questions should be **real questions people ask** about that topic — sourced from "People Also Ask" on Google, Quora threads, or Reddit r/dementia. The answers in the FAQ should not duplicate content elsewhere in the article — they cover questions tangential to the main topic.

The `FAQPage` schema is generated from this block automatically.

### 3.12 Author Box

After the FAQ, before the Read Also block:

```html
<footer class="author-box">
  <img src="/images/author-photo.jpg" alt="Anna Paskini" width="120" height="120">
  <h3>About Anna Paskini</h3>
  <p>
    Anna Paskini writes memory activity books for families caring for someone
    with dementia. Her series is grounded in established methodology — Validation
    Therapy, Positive Approach to Care — and refined through caregiver feedback.
    [BERRY DECISION NEEDED: confirm or revise this bio paragraph]
  </p>
  <div class="author-books">
    <a href="https://www.amazon.com/dp/XXX?tag=annapaskini-20">
      Vol. 1: Engines & Outdoors
    </a>
    <a href="https://www.amazon.com/dp/XXX?tag=annapaskini-20">
      Vol. 2: Memories & Heritage
    </a>
  </div>
</footer>
```

The Author Box is **the primary conversion point** of every article. Readers who finish an article are warm — the byline-to-Amazon path here is the funnel.

### 3.13 Read Also block

3–5 article cards, each with:
- Hero image (small, ~300px wide)
- H3 with article title
- One-sentence excerpt
- Link to the article

The 3–5 articles shown should be **topically related** to the current article, not random. Hand-curated per article during the internal linking pass.

---

## 4. The first 5 articles (launch cohort)

These are the articles to write during Phase 2 of the implementation plan. They are ordered by priority — Article 1 first, etc. Each article has a full specification.

### Article 1 — "What to do during a dementia visit"

**Target query:** "what to do during a dementia visit" / "how to visit a parent with dementia"

**URL slug:** `/blog/what-to-do-during-a-dementia-visit`

**H1:** What to do during a dementia visit: a 15-minute structure that works

**Meta description (154 chars):** What to do during a dementia visit: a 15-minute structure, 5 questions that always work, and the sensory anchors that bridge silence. Read the guide.

**Intro paragraph (target ~50 words):**
A short, structured visit is more effective than an unstructured long one. This guide gives you a 15-minute framework for visiting a parent with dementia — three minutes of arrival, five of shared activity, five of conversation anchored to a sensory object, and two of goodbye — plus 15 conversation starters that work even when the words don't.

**Section outline (H2s, ✓ = question format):**
1. ✓ How long should a dementia visit last?
2. The 15-minute structure
3. ✓ Why shorter visits work better
4. The arrival ritual: minutes 1–3
5. ✓ What activities work for the middle of the visit?
6. The conversation anchor: minutes 9–13
7. ✓ How do you say goodbye to a parent with dementia?
8. Common mistakes to avoid
9. ✓ When the visit doesn't go as planned

**Required elements:**
- Table: "The 15-minute visit at a glance" (4 rows: arrival, activity, conversation, goodbye × time/purpose/example)
- List (ol): "Five questions that work when 'how are you?' doesn't"
- List (ul): "Sensory anchors to bring with you"
- Internal links: to landing page, to Article 2 (conversation starters), to Vol.1 Amazon listing
- External links: NIA on caregiver communication, Teepa Snow's Positive Approach principles

**FAQ block (5 questions):**
1. How often should I visit a parent with dementia?
2. What if my parent gets agitated during the visit?
3. Should I correct my parent if they say something wrong?
4. Is it okay to leave early if the visit isn't going well?
5. Do video visits work as well as in-person?

**Target length:** 1,800–2,200 words

**Hero image:** An elderly man's hands holding a coffee cup, soft window light. Documentary, not posed. Source from Unsplash with terms "elderly hands coffee."

---

### Article 2 — "What to say when a parent with dementia doesn't recognize you"

**Target query:** "what to say when parent with dementia doesn't recognize me" / "my mom doesn't recognize me dementia"

**URL slug:** `/blog/what-to-say-when-parent-with-dementia-doesnt-recognize-you`

**H1:** What to say when a parent with dementia doesn't recognize you

**Meta description (157 chars):** When your parent with dementia doesn't recognize you, the goal isn't to correct them — it's to meet them where they are. Six sentences to start with.

**Intro paragraph:**
The moment your parent looks at you without recognition is one of the hardest in dementia caregiving. The instinct is to correct or remind. The better approach — supported by research on Validation Therapy — is to enter their reality with warmth and let recognition emerge through context, not insistence.

**Section outline:**
1. ✓ Why doesn't my parent with dementia recognize me?
2. The neuroscience: why face memory fails
3. ✓ Should I tell them who I am?
4. The "join their reality" approach
5. ✓ What if they think I'm someone else?
6. Six sentences to start with
7. ✓ How do I respond when they ask about a deceased relative?
8. Therapeutic fibbing: when a small untruth is the kind thing
9. What helps recognition come back, briefly

**Required elements:**
- Table: "How to respond to common confusions" (5 rows × 3 columns: confusion / what not to say / what to say)
- List (ol): "Six sentences to start with when recognition fails"
- List (ul): "Triggers that sometimes restore recognition"
- Internal links: to Article 1 (visit structure), to Article 3 (sensory triggers), to landing page
- External links: Alzheimer's Association on communication, a peer-reviewed paper on Validation Therapy (PubMed)

**FAQ block:**
1. Is it harmful to remind them who I am?
2. What if they get scared when they don't recognize me?
3. Should the rest of the family use the same approach?
4. Can recognition come back later in the visit?
5. How do I tell my children that grandma doesn't recognize them?

**Target length:** 1,800–2,200 words

**Hero image:** Two pairs of hands resting on a table, one older, one younger, slight contact. Source from Unsplash with terms "hands different ages quiet."

---

### Article 3 — "Memory activities for men with dementia"

**Target query:** "memory activities for men with dementia" / "activities for men with Alzheimer's"

**URL slug:** `/blog/memory-activities-for-men-with-dementia`

**H1:** Memory activities for men with dementia: ideas that respect who he was

**Meta description (160 chars):** Memory activities for men with dementia: 25 ideas grouped by interest — engines, tools, music, military service — that preserve dignity and trigger memory.

**Intro paragraph:**
Most dementia activity guides default to coloring books and counting exercises, which feel patronizing to men who spent their lives working with their hands, fixing things, and serving. The activities below are organized by lifelong interests, not by skill level — because dignity, not difficulty, is the right calibration.

**Section outline:**
1. ✓ Why do men with dementia need different activities?
2. The dignity principle: never childish
3. ✓ What activities work for early-stage dementia?
4. Engines, tools, and the outdoors: hands-on memory anchors
5. ✓ How do I find activities for a father who was in the military?
6. Music and radio from the 1950s–1970s
7. ✓ What if my father has limited mobility?
8. Sensory activities: textures, smells, weights
9. Adapting activities as dementia progresses

**Required elements:**
- Table: "25 activities by interest area" (5 interest areas × 5 activities each)
- List (ol): "How to introduce a new activity in 5 steps"
- List (ul): "Objects that often trigger memory in men of the 1970s–80s generation"
- Internal links: to landing page (mention free playbook), to Vol.1 and Vol.2 Amazon listings, to Article 1
- External links: Music & Memory non-profit, NIA on engagement and dementia

**FAQ block:**
1. Why do you focus only on men?
2. Will these activities work for women too?
3. Are the activities in your books safe for someone with mid-stage dementia?
4. How long should an activity session last?
5. What do I do when an activity doesn't engage him?

**Target length:** 2,000–2,400 words (this article supports the entire book series — give it room)

**Hero image:** An elderly man's hands on an old tool or steering wheel, in shallow focus. Source Unsplash with terms "elderly hands tools workshop."

---

### Article 4 — "Conversation starters for someone with dementia"

**Target query:** "conversation starters for dementia patients" / "questions to ask someone with dementia"

**URL slug:** `/blog/conversation-starters-for-someone-with-dementia`

**H1:** Conversation starters for someone with dementia: 30 questions that work

**Meta description (159 chars):** Conversation starters for someone with dementia: 30 questions organized from safe to deep, plus the structure that turns one question into a 10-minute talk.

**Intro paragraph:**
The right question can open a 10-minute conversation. The wrong question can end the visit. This list of 30 conversation starters is organized from safe (low cognitive load, easy to answer) to deeper (drawing on emotional and procedural memory) — so you can find the right entry point regardless of stage or mood.

**Section outline:**
1. ✓ What's the best way to start a conversation with someone with dementia?
2. The "safe to deep" gradient
3. ✓ Should I ask yes/no questions or open ones?
4. 10 safe-starter questions
5. ✓ How do I ask about their childhood?
6. 10 memory-anchor questions
7. ✓ What if they can't answer?
8. 10 emotional-anchor questions (no factual recall required)
9. How to keep the conversation going after the first answer

**Required elements:**
- Three lists (ol): the 10 safe, 10 memory-anchor, 10 emotional-anchor questions
- Table: "Questions that often fail and what to try instead" (5 rows × 2 columns)
- Internal links: to Article 2, to Article 1, to the landing page playbook
- External links: a paper on reminiscence therapy (PubMed), AARP caregiver communication guide

**FAQ block:**
1. What if my parent gives an answer that's clearly wrong?
2. Should I write down the answers?
3. Can I ask the same question every visit?
4. What do I do when they get stuck on one memory?
5. How do I avoid making them feel tested?

**Target length:** 1,600–2,000 words

**Hero image:** An older father and adult child sitting on a porch, mid-conversation, both looking outward not at each other. Unsplash terms "father daughter porch quiet."

---

### Article 5 — "Long-distance caregiving for a parent with dementia"

**Target query:** "long distance caregiving dementia" / "how to care for parent with dementia from far away"

**URL slug:** `/blog/long-distance-caregiving-parent-with-dementia`

**H1:** Long-distance caregiving for a parent with dementia: what to do between visits

**Meta description (159 chars):** Long-distance caregiving for a parent with dementia: how to stay connected, support local caregivers, and make the most of every visit. A practical guide.

**Intro paragraph:**
Most caregivers don't live with the person they care for. They live a state, a country, or a continent away — and they carry guilt about it daily. This guide is for them: the rituals that bridge distance, the visits that count more than frequency, and the systems that keep you involved without burning you out.

**Section outline:**
1. ✓ How often should I visit my parent with dementia if I live far away?
2. The "presence over frequency" principle
3. ✓ What can I do between visits to stay connected?
4. Phone calls, voice memos, and video calls that work
5. ✓ How do I support the local caregiver from far away?
6. Building a sustainable communication rhythm
7. ✓ What do I bring to a visit if I only see them every few months?
8. The "long visit" structure (3+ hours, not 15 minutes)
9. Caregiver guilt: a note about what you can and can't control

**Required elements:**
- Table: "Visit frequency vs. visit quality" (5 rows × 3 columns: frequency / what works at this rhythm / what fails)
- List (ol): "Five things to bring to a long visit"
- List (ul): "Phone-call openers when conversation is hard"
- Internal links: to all four prior articles, to landing page, to Vol.2 (Memories & Heritage — especially relevant to long-distance recall sessions)
- External links: Family Caregiver Alliance on long-distance caregiving, AARP guide on coordinating care

**FAQ block:**
1. Is it worse to visit rarely than not visit at all?
2. How do I handle a sibling who lives nearby and resents the distance?
3. Should I move closer?
4. What if my parent doesn't remember I visited?
5. Are video calls actually helpful or are they upsetting?

**Target length:** 2,000–2,400 words

**Hero image:** A landline phone or smartphone on a kitchen table, soft lighting, suggesting after-hours connection. Unsplash terms "phone kitchen table evening."

---

### 4.2 Backlog articles (write after the launch cohort)

These are next in line but not part of Phase 2:

6. "Why activities for men with dementia need to be different"
7. "How to handle dementia agitation during a visit"
8. "Therapeutic fibbing: when small untruths are the kind choice"
9. "Sundowning: what to do when evening visits go wrong"
10. "How to talk to a parent with dementia about moving to care"

Each will get the same full spec format when promoted from backlog.

---

## 5. Pre-publish QA checklist

Every article passes through this checklist before publishing. Cursor or whoever writes the article should self-check; Berry should sign off.

### Content checks
- [ ] H1 is unique on the page and includes the target keyword
- [ ] Title tag is 55–60 characters
- [ ] Meta description is 155–160 characters
- [ ] Intro paragraph contains target keyword and at least one number
- [ ] 8–12 H2s present, at least 4 in question format
- [ ] 2–4 H3s under each H2, no level skipping
- [ ] Answer-first sentence in `<strong>` after every H2
- [ ] At least 1 table (3×3 minimum) with H3 caption
- [ ] At least 4 lists (1+ `<ol>`, multiple `<ul>`)
- [ ] At least 3 images with full `alt`, `width`, `height`, `loading="lazy"`

### Linking checks
- [ ] 5–7 internal links to other articles or landing page
- [ ] 2–3 external links to whitelisted authority sources
- [ ] External links have `rel="nofollow noopener" target="_blank"`
- [ ] No anchor text says "click here" or "read more"

### Block checks
- [ ] Breadcrumbs visible at top
- [ ] Table of Contents present with working anchor links
- [ ] FAQ block at end with 5–7 H3 questions, each with bold answer-first
- [ ] Author Box present with photo, bio, two book CTAs
- [ ] Read Also block with 3–5 related articles

### Technical checks
- [ ] BlogPosting + BreadcrumbList + FAQPage schemas validate at schema.org validator
- [ ] OpenGraph and Twitter Card tags present and render correctly (test with metatags.io)
- [ ] Page loads under 2.5s on mobile (PageSpeed Insights)
- [ ] No console errors in browser DevTools
- [ ] All internal links resolve (no 404s)
- [ ] All Amazon links include `tag=annapaskini-20` and `ref=...` UTM

### Editorial checks
- [ ] Reading level appropriate for adult-child caregiver audience (Hemingway score grade 7–9)
- [ ] No medical claims without authority source citation
- [ ] No emotional manipulation ("you're failing your parent" style)
- [ ] No urgency widgets, countdowns, or fear-based copy
- [ ] Universal English (no US-specific cultural references unless clearly relevant)

If any item fails, the article is not ready to publish.

---

## 6. Editorial voice and tone

The voice across all articles is consistent:

**Warm but not effusive.** The reader is exhausted. Don't perform empathy with exclamation points and italics. Earn warmth through specificity.

- ✗ "You're amazing for being here for your parent!"
- ✓ "Most people who visit on weekends do so feeling guilty about not coming more often. That's worth saying out loud."

**Specific over general.** Numbers, durations, exact phrases. Vague advice is forgettable; specific advice is citeable.

- ✗ "Try to keep visits short."
- ✓ "Aim for 15 to 20 minutes for early-to-mid stage dementia. Longer visits often end with the person fatigued and the caregiver depleted, even when both started fresh."

**Plain language.** No jargon unless defined immediately. "Procedural memory" is fine if the next sentence says what it means.

**Honest about limits.** When something doesn't have a clean answer, say so. This builds trust.

- ✓ "Whether to correct your parent or join their reality is one of the most contested questions in dementia care. Validation Therapy says don't correct. Other approaches favor gentle reality orientation. In practice, the kindest choice usually depends on what your parent finds reassuring — which you'll learn by trying both."

**Author voice, not corporate voice.** The pronoun "we" is allowed but rare — usually "I" or no first-person at all. Articles read as if a single thoughtful person wrote them.

**No clichés.** Forbidden phrases that auto-disqualify a draft:
- "Caregiving journey"
- "You're not alone"
- "Be kind to yourself"
- "It takes a village"
- "Live in the moment"
- "Every person is different" (vague filler)

---

## 7. Authority source whitelist

External links from articles must come from this list. New sources can be added with Berry's approval — the gate is: does the source have demonstrable expertise in dementia, geriatrics, or family caregiving, and is it referenced widely by other authoritative sources?

### Highest authority (.gov, peer-reviewed, major institutions)

- **National Institute on Aging (NIA)** — `nia.nih.gov`
  - Primary US government resource on aging and dementia
  - Use for: research-backed claims, statistics, definitions
- **National Library of Medicine / PubMed** — `pubmed.ncbi.nlm.nih.gov`
  - For citing specific research papers (Validation Therapy, reminiscence therapy, sensory engagement studies)
- **Centers for Disease Control / Alzheimer's Disease section** — `cdc.gov/aging/aginginfo/alzheimers.htm`
- **NHS UK on dementia** — `nhs.uk/conditions/dementia/`
  - UK perspective; useful for international authority
- **World Health Organization on dementia** — `who.int/news-room/fact-sheets/detail/dementia`

### Major non-profits

- **Alzheimer's Association** — `alz.org`
  - The largest dementia non-profit in the US. Use for caregiver guides, statistics, support resources.
- **Family Caregiver Alliance** — `caregiver.org`
  - Specifically focused on caregiver support, including long-distance.
- **AARP Caregiving** — `aarp.org/caregiving`
  - Practical guides, well-trafficked, friendly to LLM citation.
- **Dementia UK** — `dementiauk.org`
  - UK-based, strong on practical guidance and Admiral Nurses.
- **Alzheimer's Society UK** — `alzheimers.org.uk`
- **Music & Memory** — `musicandmemory.org`
  - Specifically relevant for articles on music-based activities.

### Medical institutions

- **Mayo Clinic on dementia** — `mayoclinic.org`
- **Cleveland Clinic on dementia** — `clevelandclinic.org`
- **Johns Hopkins on dementia** — `hopkinsmedicine.org`

### Established practitioners (named experts with traceable credentials)

- **Teepa Snow / Positive Approach to Care** — `teepasnow.com`
  - Most-cited dementia educator in the practitioner space.
- **Dr. Natali Edmonds / Dementia Careblazers** — `careblazers.com`
  - Board-certified geropsychologist; high-quality, accessible content.

### Categorically excluded sources

Do **not** link to:
- Any source with an unclear author or institutional backing
- Sponsored content or sites with heavy advertising
- Forum posts or Quora answers (not authoritative)
- Wikipedia (allowed as a research starting point but never as an authority citation)
- Competitor authors' book sales pages (we don't promote competitors)
- AI-generated content sites (e.g., aggregator blogs)
- Social media posts (Instagram, TikTok, Twitter/X)

---

## 8. Periodic LLM citation audit

Monthly, manually query each of the following with the target keywords for our articles. Record which articles get cited:

- ChatGPT (with web browsing)
- Perplexity (default model)
- Claude (with web access)
- Gemini
- Google AI Overview (appears at top of regular Google search)

Track in a simple spreadsheet:

| Month | Query | ChatGPT | Perplexity | Claude | Gemini | Google AIO |
|-------|-------|---------|------------|--------|--------|------------|
| 2026-06 | "what to do during dementia visit" | ✗ | ✓ | ✗ | ✗ | ✗ |
| 2026-07 | "what to do during dementia visit" | ✗ | ✓ | ✓ | ✗ | ✓ |

When an article is cited, screenshot the citation context. When an article ranks well but isn't cited, audit:
1. Schema markup integrity
2. Answer-first sentence quality
3. External authority links
4. Page load speed (slow pages are less likely to be crawled deeply)

---

## 9. Image attribution and licensing

For every image used from Unsplash or Pexels:
- Verify license is permissive (Unsplash License or CC0)
- Credit photographer in an HTML comment near the image: `<!-- Photo: [name] on Unsplash, [url] -->`
- Optionally credit visibly at the bottom of articles

For book cover images (Vol.1, Vol.2): no attribution needed — these are Berry's own work.

For the author photo: Berry owns this.

Never use:
- AI-generated images of real-looking people
- Images of identifiable real people without explicit permission
- Images from search engines without verifying license
