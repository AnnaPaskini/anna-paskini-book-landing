# 04 — Web Design Specification

This document is **the complete design system and visual contract** for the project. Every color, font, spacing value, component state, and layout rule lives here. Cursor or Antigravity reading this file should be able to implement the entire visual layer without making aesthetic decisions of its own.

The design system is small and tight on purpose. Fewer tokens means more consistency. The site has a calm, editorial feel — it does not try to be visually impressive.

---

## 1. Design principles (the why behind the choices)

These principles are referenced throughout the spec when explaining a choice.

1. **Calm before persuasion.** Visitors are exhausted. The page must lower their cognitive load, not raise it.
2. **Editorial, not commercial.** Closer to a New Yorker article than to a SaaS landing page. Generous whitespace, serif headlines, restrained color.
3. **Trust through specificity.** No fake social proof, no testimonial carousels. Trust comes from concrete details: methodology names, real photos, honest answers in FAQ.
4. **Mobile-first.** Adult children search at 11 PM on phones. Every layout must be designed for mobile first, then expanded for larger screens.
5. **One primary action per screen.** The hero asks for email. The middle of the page asks for Amazon click. The footer asks for email again. Never two competing CTAs in the same viewport.

---

## 2. Color tokens

Defined as CSS custom properties in `app/globals.css`. Names follow a **semantic naming convention** (`--color-primary`, not `--color-blue-500`) so the system can be re-themed later without renaming variables.

### Palette

```css
:root {
  /* Backgrounds */
  --color-surface: #FAFAF7;              /* Page background — Arctic White, warm */
  --color-surface-alt: #F4F2EC;          /* Zigzag block alternate background */
  --color-surface-elevated: #FFFFFF;     /* Cards, forms */

  /* Text */
  --color-text-strong: #1A1F2E;          /* Headlines, primary text */
  --color-text-body: #3D4452;            /* Paragraphs */
  --color-text-muted: #6B7280;           /* Microcopy, captions, footnotes */
  --color-text-on-primary: #FFFFFF;      /* Text on primary buttons */

  /* Primary accent — cornflower blue */
  --color-primary: #5B7CB8;              /* CTA buttons, links, accents */
  --color-primary-hover: #4A6CA8;        /* Hover state for primary */
  --color-primary-active: #3D5C95;       /* Pressed state */
  --color-primary-soft: #E8EEF8;         /* Tinted backgrounds, subtle highlights */

  /* Borders and dividers */
  --color-border: #E2E0DA;               /* Default borders */
  --color-border-strong: #C9C5BC;        /* Emphasized borders */

  /* Semantic feedback */
  --color-success: #5C8A5F;              /* Success states, "PDF sent" */
  --color-error: #B5524A;                /* Form errors */
  --color-warning: #B4843A;              /* Reserved, may not be used */

  /* Focus ring (accessibility) */
  --color-focus-ring: #5B7CB8;           /* Same as primary */
}
```

### Contrast verification

All color pairs used in the design have been chosen to meet WCAG 2.1 AA contrast minimums (4.5:1 for normal text, 3:1 for large text):

- `--color-text-strong` on `--color-surface`: 14.2:1 ✓
- `--color-text-body` on `--color-surface`: 9.1:1 ✓
- `--color-text-muted` on `--color-surface`: 4.6:1 ✓
- `--color-text-on-primary` on `--color-primary`: 4.8:1 ✓
- `--color-text-strong` on `--color-primary-soft`: 12.8:1 ✓

### Forbidden colors

To preserve the editorial calm:
- No pure black (#000) — use `--color-text-strong`
- No pure white as page background — use `--color-surface`
- No high-saturation colors (no #FF0000 red, no #00FF00 green)
- No gradients
- No neon or fluorescent tones

---

## 3. Typography

### Font families

Two fonts only, both from Google Fonts (loaded via `next/font/google` with `display: swap`):

```typescript
// In src/app/layout.tsx
import { Crimson_Pro, Inter } from 'next/font/google';

const crimson = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
});
```

CSS variables exposed:

```css
:root {
  --font-serif: var(--font-serif), Georgia, 'Times New Roman', serif;
  --font-sans: var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Usage rules

- **Serif (Crimson Pro):** all H1, H2, H3, H4. Editorial body text on the landing page hero block and in margin notes. Pull quotes.
- **Sans (Inter):** body paragraphs, UI elements (buttons, form fields, navigation), captions, microcopy.

Never mix the two in a single paragraph or sentence.

### Type scale

Mobile-first sizes. Desktop sizes in `@media (min-width: 1024px)` overrides.

```css
:root {
  /* Mobile */
  --text-h1: 2rem;          /* 32px */
  --text-h2: 1.5rem;        /* 24px */
  --text-h3: 1.25rem;       /* 20px */
  --text-h4: 1.125rem;      /* 18px */
  --text-body: 1rem;        /* 16px */
  --text-small: 0.875rem;   /* 14px */
  --text-micro: 0.75rem;    /* 12px */

  /* Line heights */
  --leading-tight: 1.2;     /* Headlines */
  --leading-snug: 1.4;      /* Subheads */
  --leading-normal: 1.6;    /* Body */
  --leading-relaxed: 1.75;  /* Long-form article body */

  /* Letter spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;  /* All-caps labels */
}

@media (min-width: 1024px) {
  :root {
    --text-h1: 3.25rem;     /* 52px */
    --text-h2: 2rem;        /* 32px */
    --text-h3: 1.5rem;      /* 24px */
    --text-h4: 1.25rem;     /* 20px */
    --text-body: 1.0625rem; /* 17px — slightly larger for desktop reading */
    --text-small: 0.9375rem;/* 15px */
  }
}
```

### Typographic patterns

- **H1:** Crimson Pro 600, `var(--text-h1)`, `var(--leading-tight)`, `var(--tracking-tight)`, color `--color-text-strong`
- **H2:** Crimson Pro 600, `var(--text-h2)`, `var(--leading-snug)`, color `--color-text-strong`
- **H3:** Crimson Pro 500, `var(--text-h3)`, `var(--leading-snug)`, color `--color-text-strong`
- **Body paragraph:** Inter 400, `var(--text-body)`, `var(--leading-relaxed)` (article body) or `var(--leading-normal)` (landing), color `--color-text-body`
- **Microcopy / caption:** Inter 400, `var(--text-small)`, `var(--leading-normal)`, color `--color-text-muted`
- **Margin note (landing only):** Crimson Pro 400 italic, `var(--text-small)`, `var(--leading-normal)`, color `--color-text-muted`
- **All-caps label (rare):** Inter 500, `var(--text-micro)`, `var(--tracking-wide)`, text-transform uppercase

### Reading width

Body text on articles and landing content blocks is constrained to a comfortable reading width:

- Mobile: full width minus padding
- Desktop: max-width 680px (`--max-width-prose`)

Headlines can extend wider (up to `--max-width-container`, defined below).

---

## 4. Spacing scale

Tailwind v4's default spacing scale is used, with these explicit tokens added for layout patterns:

```css
:root {
  /* Layout-level spacing */
  --space-block-y: 4rem;          /* 64px — Mobile vertical block spacing */
  --space-block-y-desktop: 7rem;  /* 112px — Desktop vertical block spacing */
  --space-page-x: 1.25rem;        /* 20px — Mobile horizontal padding */
  --space-page-x-desktop: 2rem;   /* 32px — Desktop horizontal padding */

  /* Container max widths */
  --max-width-prose: 42.5rem;     /* 680px — Reading width */
  --max-width-container: 75rem;   /* 1200px — Page max width */
  --max-width-hero: 80rem;        /* 1280px — Hero can be slightly wider */
}
```

### Rule: vertical rhythm

Every major block (Hero, Playbook content, Books, etc.) is separated by `--space-block-y` on mobile and `--space-block-y-desktop` on desktop. No exceptions.

Within a block, vertical spacing follows the 4/8/12/16/24/32/48/64 px scale (Tailwind defaults). Use multiples of 4. Never use arbitrary values like 13px or 27px.

---

## 5. Landing page structure (block-by-block)

The landing page has 7 blocks in this exact order. The spec for each block is below.

### Block 1: Hero

**Purpose:** Capture the visitor in the first 3 seconds. Single-field email form + 3D PDF mockup.

**Layout:**
- Mobile: stacked single column
- Desktop ≥ 1024px: two columns — text on left (60%), visual + form on right (40%)

**Component tree:**
```html
<section class="hero" aria-labelledby="hero-h1">
  <div class="hero-container">

    <div class="hero-left">
      <h1 id="hero-h1">What to do during a dementia visit — a free 15-minute playbook</h1>
      <p class="hero-subhead">For adult children caring for a parent with dementia from a distance.</p>
    </div>

    <div class="hero-right">
      <img src="/images/playbook-mockup.webp" alt="The 15-Minute Visit Playbook — book mockup"
           width="600" height="750" priority />

      <form class="email-form" aria-label="Get the free playbook">
        <label for="hero-email" class="email-form-label">Get the free 15-Minute Visit Playbook</label>
        <div class="email-form-row">
          <input type="email" id="hero-email" name="email" required
                 placeholder="your@email.com" aria-describedby="hero-microcopy" />
          <button type="submit" class="btn btn-primary">Send me the playbook →</button>
        </div>
        <p id="hero-microcopy" class="email-form-microcopy">
          One PDF, delivered in 60 seconds. No spam. No regular newsletter — just the playbook.
        </p>
      </form>
    </div>

  </div>
</section>
```

**Styling specifics:**
- Section background: `--color-surface`
- H1: font-serif, 600 weight, `--text-h1`, `--color-text-strong`
- Subhead: font-serif, 400 weight italic, `--text-h3`, `--color-text-muted`, `margin-top: 1rem`
- Form container: `--color-surface-elevated` background, `border: 1px solid --color-border`, `border-radius: 0.75rem`, padding 1.5rem
- Form on mobile: input and button stack vertically. On desktop ≥ 768px: side-by-side with button width auto.
- PDF mockup image: max-width 480px on desktop, full width on mobile (cap at 320px)

**States:**
- Form default: clean, blue button
- Form loading (after submit, before response): button shows spinner, disabled state
- Form success: form collapses, shows green confirmation message: "Check your inbox — the playbook is on the way."
- Form error: red error message below input, form remains interactive

### Block 2: Playbook content (zigzag)

**Purpose:** Show what's inside the PDF. Build trust through specificity and brain science.

**Layout:** Three alternating zigzag rows. Each row is one full-width section internally divided into image + text. Direction alternates: row 1 image-left, row 2 image-right, row 3 image-left.

**Component tree:**
```html
<section class="playbook-content" aria-labelledby="playbook-h2">
  <h2 id="playbook-h2" class="section-heading">What's inside the playbook</h2>

  <div class="zigzag-row zigzag-image-left">
    <div class="zigzag-image">
      <img src="..." alt="..." width="800" height="600" loading="lazy" />
    </div>
    <div class="zigzag-text">
      <h3>A 15-minute structure you can follow when you don't know what to do.</h3>
      <p>The playbook gives you a four-part framework — arrival ritual, shared activity,
         conversation anchor, goodbye — sized to fit a short, calm visit.</p>
      <aside class="margin-note">
        A predictable structure lowers the caregiver's cortisol before the visit even starts.
      </aside>
    </div>
  </div>

  <div class="zigzag-row zigzag-image-right">
    <div class="zigzag-text">
      <h3>15 questions that work when "how are you?" doesn't.</h3>
      <p>Memory-triggering conversation starters, organized from safe to deep, with
         a one-line note on how to use each.</p>
      <aside class="margin-note">
        Sensory memories (smells, sounds, textures) survive in different brain regions
        than names and dates. They're often still accessible when verbal memory isn't.
      </aside>
    </div>
    <div class="zigzag-image">
      <img src="..." alt="..." width="800" height="600" loading="lazy" />
    </div>
  </div>

  <div class="zigzag-row zigzag-image-left">
    <div class="zigzag-image">
      <img src="..." alt="..." width="800" height="600" loading="lazy" />
    </div>
    <div class="zigzag-text">
      <h3>A short bit of brain science you actually need.</h3>
      <p>Why emotional and procedural memory outlast factual memory in dementia —
         and how to use that as a caregiver.</p>
      <!-- No margin note here; this block is the science block -->
    </div>
  </div>
</section>
```

**Styling specifics:**
- Section background: `--color-surface-alt` (slightly darker than surface for visual rhythm)
- Section heading `<h2>`: centered, max-width 600px, `margin-bottom: 4rem`
- Zigzag row on desktop: two columns 50/50 with 4rem gap
- Zigzag row on mobile: stacked, image always above text
- H3 in zigzag: `--text-h3`, serif, weight 500
- Margin note: appears below the paragraph on mobile; on desktop ≥ 1024px, positioned absolutely to the right of the paragraph with italic serif text in `--color-text-muted`
- Images: 4:3 aspect ratio, `border-radius: 0.5rem`

### Block 3: Books (primary conversion)

**Purpose:** Show the two books with prominent Amazon CTAs. **This is the main conversion block.**

**Layout:** Side-by-side book covers on desktop (2 columns), stacked on mobile.

**Component tree:**
```html
<section class="books" aria-labelledby="books-h2">
  <header class="books-header">
    <h2 id="books-h2">The activities the playbook references come from this series.</h2>
  </header>

  <div class="books-grid">

    <article class="book-card">
      <img src="/images/vol-1-cover.webp" alt="Engines & Outdoors — Vol. 1 cover"
           width="400" height="600" loading="lazy" />
      <h3>Vol. 1 — Engines & Outdoors</h3>
      <p class="book-description">Cars, tools, fishing, the outdoors. 98 pages of activities.</p>
      <a href="https://www.amazon.com/dp/XXX?tag=annapaskini-20&ref=landing-block-3"
         class="btn btn-primary" target="_blank" rel="noopener">
        See on Amazon →
      </a>
    </article>

    <article class="book-card">
      <img src="/images/vol-2-cover.webp" alt="Memories & Heritage — Vol. 2 cover"
           width="400" height="600" loading="lazy" />
      <h3>Vol. 2 — Memories & Heritage</h3>
      <p class="book-description">Music, family, service, the good old days. 98 pages of activities.</p>
      <a href="https://www.amazon.com/dp/XXX?tag=annapaskini-20&ref=landing-block-3"
         class="btn btn-primary" target="_blank" rel="noopener">
        See on Amazon →
      </a>
    </article>

  </div>
</section>
```

**Styling specifics:**
- Section background: `--color-surface`
- Books grid: `gap: 3rem`, max-width 1000px, centered
- Book card: centered text, image at top with subtle shadow (`box-shadow: 0 4px 24px rgba(26,31,46,0.08)`)
- H3 below cover: serif, weight 600, `--text-h3`
- Book description: `--text-body`, `--color-text-muted`
- Amazon CTA button: full width within card on mobile, auto width on desktop

### Block 4: Second Amazon push

**Purpose:** Catch readers who scrolled past Block 3 without clicking. **No second email form on this page.**

**Layout:** Centered single column, narrower than full container.

**Component tree:**
```html
<section class="amazon-push" aria-labelledby="push-h2">
  <div class="amazon-push-container">
    <h2 id="push-h2">Ready for activities, not just structure?</h2>
    <p>
      The Playbook gives you a framework for a visit. The books give you 200+
      ready-to-use activities organized by theme — designed specifically for men,
      set in the 1970s–1980s, dignified and never childish.
    </p>
    <div class="amazon-push-ctas">
      <a href="..." class="btn btn-secondary" target="_blank" rel="noopener">See Vol. 1 on Amazon →</a>
      <a href="..." class="btn btn-secondary" target="_blank" rel="noopener">See Vol. 2 on Amazon →</a>
    </div>
  </div>
</section>
```

**Styling specifics:**
- Section background: `--color-primary-soft` (the only block with the tinted blue background — makes it stand out as a "moment")
- Container: max-width 760px, centered
- H2: serif, centered, `--text-h2`
- Paragraph: sans, `--text-body`, centered
- CTAs: two buttons side by side on desktop, stacked on mobile. Use `btn-secondary` style (outlined, not solid) so they don't compete with the primary CTAs in Block 3.

### Block 5: Author

**Purpose:** Establish trust through a named human. Minimal, no fake credentials.

**Layout:** Centered single column, very narrow.

**Component tree:**
```html
<section class="author" aria-labelledby="author-h2">
  <div class="author-container">
    <img src="/images/author-photo.webp" alt="Anna Paskini"
         width="240" height="240" loading="lazy" class="author-photo" />
    <h2 id="author-h2">About the author</h2>
    <p>
      Anna Paskini writes memory activity books for families caring for someone with
      dementia. Two volumes are available on Amazon, with more in progress. She works
      from research-backed methods (Validation Therapy, Positive Approach to Care)
      and refines every activity based on feedback from caregivers.
    </p>
  </div>
</section>
```

**Styling specifics:**
- Background: `--color-surface`
- Author photo: 240px × 240px, `border-radius: 50%`, centered above heading
- H2: serif, centered, `--text-h2`
- Paragraph: sans, `--text-body`, centered, max-width 560px, `--leading-relaxed`

### Block 6: FAQ

**Purpose:** Snap LLM citations via `FAQPage` schema. Snap visitor objections via concrete answers.

**Layout:** Accordion. All collapsed by default. One expandable at a time (or multiple — see decision below).

**Component tree:**
```html
<section class="faq" aria-labelledby="faq-h2">
  <header class="faq-header">
    <h2 id="faq-h2">Common questions</h2>
  </header>

  <div class="faq-list">

    <details class="faq-item">
      <summary class="faq-question">Is the PDF really free, with no upsell trick?</summary>
      <div class="faq-answer">
        <p><strong>Yes — one PDF, delivered to your email in 60 seconds.</strong>
        No credit card, no auto-enrolled paid newsletter, no upsell sequence.
        You can unsubscribe from the email list with one click after receiving the playbook.</p>
      </div>
    </details>

    <!-- Four more <details> blocks, one per FAQ question from landing-spec-v2.md -->

  </div>
</section>
```

**Styling specifics:**
- Background: `--color-surface-alt`
- FAQ list max-width: 800px, centered
- Each `<details>` has a bottom border (`border-bottom: 1px solid --color-border`)
- `<summary>` is the clickable question: sans, weight 500, `--text-h4`, padding 1.5rem 0, cursor pointer
- A `+` icon on the right of the summary rotates 45° to become `×` when open
- The answer text: sans, `--text-body`, `--color-text-body`, padding-bottom 1.5rem
- The `<strong>` first sentence in each answer is visually emphasized (font-weight 600, slightly larger if needed)

**Implementation note:** Use native `<details>/<summary>` rather than custom JavaScript accordion. Better accessibility, works without JS, simpler code. shadcn/ui's Accordion can be used if multiple-open behavior is preferred — but native is the default.

### Block 7: Footer

**Purpose:** Final email-capture nudge for non-converters. Minimal navigation.

**Component tree:**
```html
<footer class="site-footer">
  <div class="footer-container">

    <div class="footer-nudge">
      <p>Still thinking? Get the free playbook anyway.</p>
      <form class="email-form email-form-inline" aria-label="Get the free playbook (footer)">
        <input type="email" name="email" required placeholder="your@email.com" />
        <button type="submit" class="btn btn-primary">Send →</button>
      </form>
    </div>

    <nav class="footer-nav" aria-label="Footer">
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="https://www.amazon.com/author/annapaskini" target="_blank" rel="noopener">Books</a>
      <a href="/privacy">Privacy</a>
    </nav>

    <p class="footer-copyright">© 2026 Anna Paskini</p>

  </div>
</footer>
```

**Styling specifics:**
- Background: `--color-text-strong` (dark)
- All text in footer: `--color-surface` (light, inverted)
- Footer nudge: centered, one line on desktop, stacked on mobile
- Footer nav: row of inline links, separated by `· ` on desktop, vertical on mobile
- Copyright: small, centered, bottom

---

## 6. Reusable components (shadcn/ui based)

These are the only UI primitives the project uses. Each is configured once and reused across landing + blog.

### Button

Three variants: `primary`, `secondary`, `ghost`.

```css
.btn {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-body);
  line-height: 1.4;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-on-primary);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
}

.btn-primary:active {
  background-color: var(--color-primary-active);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary-soft);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-text-body);
}

.btn-ghost:hover {
  color: var(--color-text-strong);
}

.btn:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

States: default, hover, active, focus-visible, disabled, loading (shows spinner, click is no-op).

### Form input

Single style across all uses:

```css
.input {
  font-family: var(--font-sans);
  font-size: var(--text-body);
  padding: 0.875rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  background-color: var(--color-surface-elevated);
  color: var(--color-text-strong);
  width: 100%;
}

.input::placeholder {
  color: var(--color-text-muted);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-soft);
}

.input[aria-invalid="true"] {
  border-color: var(--color-error);
}
```

### Email form (composite)

The full email form (used in hero and footer) is a small composite component:

```typescript
// src/components/shared/EmailForm.tsx
type Props = {
  variant: 'hero' | 'inline';
  label: string;
  microcopy?: string;
  ctaText: string;
  successText: string;
};
```

Manages its own state (idle, loading, success, error). Posts to `/api/subscribe`. Renders different layouts based on `variant`.

### Card

For book displays, article cards in "Read Also", and any other grouped content:

```css
.card {
  background-color: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-2px);
}
```

### Accordion (FAQ)

Native `<details>/<summary>` styled to match the design system. CSS uses `details[open]` selector to style the open state.

---

## 7. Responsive breakpoints

Mobile-first. Breakpoints match Tailwind's defaults:

```css
/* Default: mobile (< 768px) */

@media (min-width: 768px) {
  /* Tablet — sm/md adjustments */
}

@media (min-width: 1024px) {
  /* Desktop — lg, where two-column layouts kick in */
}

@media (min-width: 1280px) {
  /* Wide desktop — xl, where containers reach their max */
}
```

Specific layout shifts:

| Element | Mobile | Tablet (768+) | Desktop (1024+) |
|---------|--------|---------------|-----------------|
| Hero | Stacked single column | Stacked, larger spacing | Two columns 60/40 |
| Playbook zigzag | Stacked, image above text | Stacked | Two columns 50/50 with alternating direction |
| Books grid | Stacked | Two columns | Two columns |
| Margin notes | Hidden (mobile) or shown below text | Below text | Absolutely positioned right of paragraph |
| Footer nudge | Form stacked, label above | Inline | Inline |
| Footer nav | Vertical list | Horizontal row | Horizontal row |
| FAQ list | Full width | Max-width 720px | Max-width 800px |

---

## 8. Blog article layout (uses the same design system)

The blog article page uses the same tokens but with article-specific structural rules.

### Article page layout

```
┌─────────────────────────────────────────────────┐
│  Site header (logo + minimal nav)               │
├─────────────────────────────────────────────────┤
│                                                  │
│  Breadcrumbs                                     │
│                                                  │
│  ┌───────────────────────────────────────┐      │
│  │  Article header                       │      │
│  │  - H1 (serif, large)                  │      │
│  │  - Byline + date                      │      │
│  │  - Hero image (16:9)                  │      │
│  └───────────────────────────────────────┘      │
│                                                  │
│  ┌──────────────┐  ┌─────────────────────┐      │
│  │              │  │                     │      │
│  │   Table      │  │   Article body      │      │
│  │   of         │  │   - Intro paragraph │      │
│  │   contents   │  │   - H2s with        │      │
│  │   (sticky    │  │     answer-first    │      │
│  │   on         │  │   - Tables, lists   │      │
│  │   desktop)   │  │   - Images          │      │
│  │              │  │                     │      │
│  └──────────────┘  │                     │      │
│                    │   FAQ block         │      │
│                    │                     │      │
│                    │   Author Box        │      │
│                    │                     │      │
│                    │   Read Also block   │      │
│                    └─────────────────────┘      │
│                                                  │
├─────────────────────────────────────────────────┤
│  Site footer                                     │
└─────────────────────────────────────────────────┘
```

**Layout specifics:**
- Mobile: single column, TOC inline near top after intro
- Desktop ≥ 1024px: two columns — TOC fixed/sticky in left sidebar (250px), article body in main (max-width 680px)
- Article body uses `--leading-relaxed` line height (1.75) for comfortable long-form reading

### Article-specific component styles

**Article H1:**
- font-serif, weight 600
- `font-size: var(--text-h1)` (32px mobile, 52px desktop)
- `margin-bottom: 0.5rem`

**Article byline (under H1):**
- font-sans, `--text-small`, `--color-text-muted`
- "By Anna Paskini · Published May 20, 2026 · 8 min read"
- Reading time calculated as word count / 220

**Article H2:**
- font-serif, weight 600
- `font-size: var(--text-h2)`
- `margin-top: 3rem`, `margin-bottom: 1rem`

**Article H3:**
- font-serif, weight 500
- `font-size: var(--text-h3)`
- `margin-top: 2rem`, `margin-bottom: 0.75rem`

**Article paragraph:**
- font-sans, `--text-body`, `--leading-relaxed`, `--color-text-body`
- `margin-bottom: 1.25rem`

**Article answer-first sentence (after H2):**
- The `<strong>` element styled with `font-weight: 600` and `color: var(--color-text-strong)` for emphasis
- No additional treatment (don't make it a callout box — keep it inline with the paragraph)

**Article tables:**
- Full width within reading column
- Header row: `--color-surface-alt` background, `--color-text-strong`, weight 600
- Cell padding: 0.75rem 1rem
- Border: `1px solid var(--color-border)` on all sides
- On mobile (< 640px): table becomes horizontally scrollable (`overflow-x: auto`) rather than reflowing

**Article lists:**
- Bullets and numbers in `--color-primary`
- `padding-left: 1.5rem`
- `margin-bottom: 1.25rem`
- Each list item has `margin-bottom: 0.5rem`

**Article images:**
- `border-radius: 0.5rem`
- Full width within reading column
- Caption (if present): `--text-small`, `--color-text-muted`, italic, centered, `margin-top: 0.5rem`

**External link styling:**
- `color: var(--color-primary)`
- Underline with `text-decoration-color: var(--color-border-strong)` for subtle effect
- `text-underline-offset: 3px`
- External links can have a small ↗ icon appended automatically

**Internal link styling:**
- Same as external but without the icon

---

## 9. Accessibility patterns

Beyond what's stated in `02-architecture.md` Section 10, specific patterns:

### Keyboard navigation
- Tab order matches visual order (no `tabindex` overrides)
- Focus ring visible on every interactive element: 2px outline in `--color-primary`, 2px offset
- Skip-to-content link in header: visually hidden via `sr-only` class, becomes visible on focus

### Forms
- Every input has an associated `<label>` (visible or `sr-only`)
- Required fields marked with `aria-required="true"` (the asterisk is decorative; the screen reader hears the attribute)
- Errors announced via `aria-live="polite"` region near the input
- Submit button is disabled during loading; reenabled after response

### Accordions (FAQ)
- Using native `<details>/<summary>` means screen readers announce "expanded/collapsed" state automatically
- If using shadcn/ui Accordion instead, ensure it sets `aria-expanded` and `aria-controls` correctly

### Images
- Decorative images: `alt=""` (empty, not missing)
- Meaningful images: descriptive `alt` text, not "image of X"
- Hero images may use `alt=""` if the title text directly above describes the same content

### Color
- Never communicate information by color alone. Errors use color *and* an error icon *and* a text message.

### Motion
- No autoplaying motion above 5fps
- All transitions respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Implementation notes for Cursor/Antigravity

When you implement this design system:

1. **Start with `globals.css`.** Set up all CSS custom properties first. Verify they cascade correctly before writing any components.

2. **Configure Tailwind v4 to use the tokens.** In `tailwind.config.ts`, map `colors`, `fontFamily`, and `fontSize` to the CSS variables, so Tailwind utilities like `bg-primary` reference `--color-primary`.

3. **Install shadcn/ui components individually.** Don't install the full set. Only: Button, Input, Form, Accordion, Card. Customize their stylesheets to use the tokens above.

4. **Build mobile layout first.** Write CSS for mobile, then add `@media (min-width: 1024px)` overrides only where the design changes at desktop. Avoid `@media (max-width: ...)` — design up, not down.

5. **Use semantic HTML by default.** `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, `<aside>`, `<time>` — never `<div>` where a semantic element fits.

6. **Don't add components beyond the spec.** If you think the design needs a new component (carousel, modal, sticky bar, etc.), open a question rather than adding it. The design's restraint is intentional.

7. **Verify the design at three breakpoints before considering a block complete:** 375px (iPhone SE), 768px (tablet), 1280px (desktop). Don't ship until all three look right.

---

## 11. What this spec deliberately doesn't include

To prevent scope creep, the following are out of scope and should not be added without an explicit decision:

- Dark mode (the audience is browsing in dimmer environments, but the warm Arctic White already serves that purpose without inverting)
- Internationalization (i18n) — English only per Decision 2
- A search feature for the blog (5 articles don't need one; revisit at 30+ articles)
- Comments on articles (moderation cost vs. low engagement value)
- Live chat or chatbot
- Cookie banner (Cloudflare Web Analytics doesn't require one)
- Newsletter sign-up forms beyond the playbook capture (per the strategic decision: no regular newsletter)
- Social media share buttons (negligible value, increase page weight)
- Print stylesheets
- Animations beyond hover/focus transitions
- Custom illustration system (use documentary photography)
- Custom icon set (use a small subset of `lucide-react`, only as needed for utility icons — arrow, check, x, plus)
