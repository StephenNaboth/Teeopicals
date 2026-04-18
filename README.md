# Teeopticals Design System

> A modern, human eyecare brand system for **Teeopticals** — a complete eyecare brand in Usa River, Arusha, Tanzania, combining **Tee Optometry Clinic** (medical eye care) and **Tee Opticals Retail** (eyewear and lenses).

This design system is a fresh, modernized evolution of the Teeopticals brand. The original site uses the Start Bootstrap "Agency" template (yellow `#fed136` primary, dark navbar, Montserrat+Roboto Slab+Droid Serif+Kaushan Script, Font Awesome 4, particle background). The brief was to make the experience **more modern, alive, and highly user-friendly** — so this system intentionally diverges from that template while keeping the brand's two non-negotiables: the **eye-care green** used throughout the original and the **warm, bilingual (Swahili + English) voice** of real patient reviews.

## What's in the box

- **`README.md`** — this file. Read first. Includes Content Fundamentals, Visual Foundations, and Iconography sections.
- **`SKILL.md`** — entry point for agents / Claude Code. Use this skill to produce Teeopticals-branded interfaces and prototypes.
- **`colors_and_type.css`** — CSS variables for colors, type, spacing, radii, shadows, and semantic element styles.
- **`assets/`** — logos, icons, and brand imagery copied from the source repo.
- **`fonts/`** — web-font loader snippets (we substitute Google Fonts; see Type section).
- **`preview/`** — individual HTML cards registered in the Design System tab.
- **`ui_kits/website/`** — high-fidelity component library + click-through prototype for the modernized marketing site.
- **`reviews.json`** — real bilingual patient testimonials (names only, locations omitted per brief).

## Sources

- **Repository:** `StephenNaboth/Teeopicals` @ `main` — static Bootstrap 4 site built on the Start Bootstrap "Agency" template. Key files reviewed: `index.html`, `scss/_variables.scss`, `scss/_global.scss`, `scss/_mixins.scss`, `scss/_navbar.scss`, `scss/_masthead.scss`, `css/agency.css`, `optical/*.html`, `services/*.html`, `wellness/*.html`. The public site points to `https://www.teeopticals.com`.
- **Brand brief:** "design the website to be more modern in UX design and alive and highly user friendly."
- **Testimonials:** supplied inline by the user — 20+ bilingual (Swahili/English) patient reviews. Names preserved, addresses omitted per brief.
- **Logo source:** `img/logo/logo.png` (black-and-white eye icon with "Tee Optometry Clinic — Est. 2025" wordmark). Three additional variants exist in the repo and can be imported on request.
- **Locale:** Usa River / Arusha, Tanzania. Phone `+255 740 952 555`. Email `teeopticals@gmail.com`.

---

## Content Fundamentals

### Voice

Teeopticals speaks like a **trusted neighborhood optometrist who also happens to be your friend**. Warm, practical, low-ego. The original site leans slightly corporate-medical ("comprehensive vision solutions that prioritize..."); the modernized voice is **shorter, more human, and openly bilingual**.

- **Bilingual by default.** Real reviews freely code-switch Swahili ↔ English mid-sentence. Copy should mirror this where natural. Example (Kelvin S.): *"I had constant headaches especially jioni, but I didn't know it was eye related."* Don't translate reviews — present them as written.
- **Second person, never "we-we-we".** Address the patient directly: "Book your eye test", "Bring your current glasses", "Tell us what's blurry."
- **Concrete over abstract.** "Dry eyes from too much screen time" beats "digital eye strain management for modern lifestyle comfort."
- **Short sentences. Real specifics.** Times, prices, locations, what-to-bring.
- **No exclamation-mark fireworks.** One per page, max. Reviewers don't shout; neither do we.

### Casing

- **Sentence case** for headings, buttons, navigation. *(The original site uses `text-transform: uppercase` aggressively — we drop that.)*
- **Title Case** only for proper nouns: **Tee Optometry Clinic**, **Tee Opticals Retail**, **Teeopticals**.
- Never `ALL CAPS` except in micro-labels (badges, eyebrow text) ≤ 4 words, and then with generous letter-spacing (0.12em+).

### Punctuation & typographic niceties

- Curly quotes (`"` `'`) in body copy, straight quotes only in code.
- En-dash for ranges (`Mon–Fri`), em-dash for asides — like this one.
- Prices: `TZS 25,000` not `25000/=`.
- Phone numbers with non-breaking spaces: `+255 740 952 555`.

### Emoji

**Sparingly.** The original masthead uses a single `👁️` before "Welcome to Tee Opticals!" — that's the budget. Zero in body copy. Zero in testimonials. Zero in CTAs. If an eye-related icon is needed, use the Lucide `eye` glyph, not the emoji.

### Example copy

| Bad (old site) | Good (modernized) |
| --- | --- |
| "Our experienced team provides comprehensive vision solutions that prioritize both your eye health and personal style." | "Book an eye test, get a real conversation, leave with glasses that fit. That's it." |
| "THOROUGH EYE EXAMINATIONS USING STATE-OF-THE-ART EQUIPMENT" | "A full eye exam — vision, pressure, retina. About 30 minutes." |
| "Ready to schedule your eye exam or have questions about our services?" | "Macho yanakuchoka? Book an eye test — we'll figure it out together." |

---

## Visual Foundations

### Colors

The palette evolves the original site's `#2E8B57` "sea green" into a deeper, more modern **Iris Green** (`#0E6B53`), paired with a warm cream ground, a soft coral accent for CTAs, and near-black ink. This is warmer and more alive than the old yellow-on-dark Bootstrap template.

| Role | Token | Value | Notes |
| --- | --- | --- | --- |
| Brand primary | `--iris-600` | `#0E6B53` | Buttons, links, brand marks |
| Brand dark | `--iris-900` | `#0A3D30` | Hover states, deep backgrounds |
| Brand light | `--iris-100` | `#DCEFE7` | Tinted backgrounds, chips |
| Accent warm | `--coral-500` | `#F26E56` | Secondary CTAs, highlights (one per screen, max) |
| Ground | `--cream-50` | `#FAF6EF` | Default page background |
| Surface | `--paper` | `#FFFFFF` | Cards, panels |
| Ink | `--ink-900` | `#141414` | Body copy, headings |
| Muted | `--ink-500` | `#5B5B58` | Secondary text, captions |
| Hairline | `--line-200` | `#E6E0D4` | Borders, dividers |

Retired tokens (do not reintroduce): `#fed136` (old primary yellow), `#212529` (old navbar black), generic Bootstrap blues `#007bff`.

### Type

We substitute the original stack (Montserrat / Roboto Slab / Droid Serif / Kaushan Script) with a modern pairing better suited to an "alive & user-friendly" brief:

- **Display — Instrument Serif** (400/400 italic). Replaces Droid Serif + Kaushan Script. Optical, a little literary, slightly unexpected for healthcare.
- **Body / UI — Geist** (400/500/600). Replaces Montserrat. Modern, neutral, legible at small sizes.
- **Mono — JetBrains Mono** (400). Only for codes / reference numbers / prescriptions.

> ⚠️ **Font substitution flag.** The original repo loaded Montserrat + Roboto Slab + Droid Serif + Kaushan Script from Google Fonts. None of those were shipped as local `.ttf` / `.woff2` files. We've substituted the pairing above. **If you have brand-mandated licensed fonts, drop the `.woff2` files into `fonts/` and swap `@font-face` in `colors_and_type.css`.**

**Type scale** (1.25 major third, min 14px):

```
display-xl  72 / 76  Instrument Serif 400 italic
display-lg  56 / 60  Instrument Serif 400
h1          40 / 44  Instrument Serif 400
h2          30 / 36  Geist 600
h3          22 / 28  Geist 600
body-lg     18 / 28  Geist 400
body        16 / 26  Geist 400
small       14 / 20  Geist 500
micro       12 / 16  Geist 600 uppercase tracking 0.12em
```

### Spacing, radii, elevation

- **Spacing scale** (4-based): `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`. Section vertical rhythm is 96px desktop / 64px mobile — warmer and less aggressive than the original's 150px.
- **Corner radii:** `--r-sm 8px`, `--r-md 14px`, `--r-lg 22px`, `--r-pill 999px`. Cards are **14px** (distinct from Bootstrap 4's `0.25rem`). Images in hero are softly clipped at 22px. No sharp 0-radius except hairline dividers.
- **Shadows** — two systems:
  - **Ambient** (`--shadow-sm`, `--shadow-md`, `--shadow-lg`) — subtle, warm, for cards lifting off cream ground. Always `rgba(20,20,20,0.06)` range, never gray-blue.
  - **Halo** (`--shadow-halo`) — a signature soft green glow (`0 0 0 6px rgba(14,107,83,0.08)`) used **only** on the primary CTA hover state and on the hero iris image. This is the brand's "alive" tell.
- **No inner shadows**, no neumorphism, no frosted-glass overlays. The old site's 0.9 white overlays stacked on particle animations are replaced by clean flat backgrounds.

### Backgrounds, imagery, texture

- **Default:** flat cream (`--cream-50`). Never pure white full-bleed — white is reserved for cards and panels sitting on cream.
- **Hero:** full-bleed photographic imagery of people (patients, the clinic space) warmed with a subtle gradient scrim (`linear-gradient(180deg, rgba(250,246,239,0) 0%, rgba(250,246,239,0.75) 100%)`). Replaces the original's looping `lemon_water.mp4` background video — too off-brand for eyecare.
- **Accent shapes:** large soft blurred circles ("iris halos") in `--iris-100` or `--coral-500 @ 20%` float behind section headers. One per section, max.
- **Photography direction:** warm-skinned, natural-light, Tanzanian faces. Avoid stock "doctor in white coat holding clipboard."
- **No patterns, no textures, no gradients** except the iris halos and the hero scrim. No SVG illustrations invented on the fly.

### Motion

Alive, not bouncy.

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint) for entrances; `cubic-bezier(0.4, 0, 0.2, 1)` for UI state.
- **Durations:** `120ms` micro (hover color), `220ms` standard (button press, card lift), `420ms` scene (section reveal, hero image fade). Never 1s+.
- **Signature motion:** the brand logo's pupil has a slow 6s-loop `transform: scale(1,1.02,1)` "breathing" animation — only on the landing hero. Implements the "alive" brief without being cartoonish.
- **Reduced motion:** respected via `@media (prefers-reduced-motion)` — breathing stops, fades become instant.

### Interaction states

- **Hover (primary buttons):** background darkens to `--iris-900` + `--shadow-halo` appears. Duration 120ms.
- **Hover (secondary / ghost):** border color darkens to `--iris-600`, background fills to `--iris-100`. No scale, no translate.
- **Hover (cards):** `translateY(-2px)` + `--shadow-md` → `--shadow-lg`. No rotation.
- **Press:** `scale(0.98)` over 80ms, spring back 140ms. Buttons only.
- **Focus:** 2px outline `--iris-600` + 2px offset. Always visible. Never replaced with only a background color change.
- **Disabled:** 40% opacity, `cursor: not-allowed`, no hover response.

### Borders

- Most surfaces border-less, separated by elevation (shadow) or color (cream vs paper).
- When a border is needed: `1px solid var(--line-200)` for hairlines, `1.5px solid var(--iris-600)` for interactive emphasis (ghost buttons, input focus).
- No left-border-accent cards (the classic "AI slop" trope) — we use full-width top eyebrow labels instead.

### Transparency & blur

- **Transparency** is used only for the hero scrim gradient and the one iris-halo decorative element. Not on cards, nav, or any interactive surface.
- **Backdrop blur** is used **once**: the sticky top nav uses `backdrop-filter: blur(12px)` over `rgba(250,246,239,0.72)` when the page has scrolled. Everywhere else: solid fills.

### Layout rules

- **Max content width:** 1200px. Prose column caps at 64ch for readability.
- **Grid:** 12-col on desktop with 24px gutters, 4-col on mobile with 16px.
- **Sticky nav:** 72px tall, becomes 56px + blur on scroll.
- **CTA placement:** one primary per screen region. Never stack two primary buttons side-by-side (the original site does this in the hero — we split to primary + ghost).

---

## Iconography

**Approach:** stroke-based line icons, 1.75px weight, 24×24 viewbox, rounded caps & joins. Match the "alive & friendly" brief without looking like a children's app.

- **Primary set: Lucide** (MIT-licensed, CDN-available at `https://unpkg.com/lucide-static/icons/`). Use: `eye`, `glasses`, `calendar-check`, `map-pin`, `phone`, `mail`, `clock`, `heart-pulse`, `shield-check`, `sun`, `baby`, `monitor`, `sparkles`.
- **Logo mark:** the horizontal-eye mark from `assets/logo.png` is the **only** brand illustration. Can appear as a small monogram or with the "Tee Optometry Clinic — Est. 2025" wordmark underneath.
- **No Font Awesome.** The original repo uses Font Awesome 4 (the outdated `fa-circle-stack` icons on the services grid, `fa-glasses`, etc). We drop it.
- **No hand-rolled SVG illustrations** — if you need a concept drawing (eye cross-section, contact lens diagram), flag it and we source a real illustrator.
- **Unicode chars as icons:** avoid. The one exception is `→` and `←` for inline "read more" links, rendered in Geist at 0.9em.
- **Emoji:** as stated in Content Fundamentals — one `👁️` in the hero welcome string is the total budget, and we've debated removing even that. Prefer the Lucide `eye` icon instead.

### Iconography substitution flag

We **substitute** the original site's Font Awesome 4 icon set with Lucide because: (1) Font Awesome 4 is deprecated and loads ~440 KB of webfonts, (2) the stroke vs. solid-filled style of Lucide is more consistent with the modern "alive" brief, and (3) Lucide is tree-shakeable and CDN-available. **If FA is required for brand continuity, flag this and we'll revert.**

---

## UI Kits

- **`ui_kits/website/`** — a modernized Teeopticals marketing site. One interactive click-through `index.html` plus factored JSX components (`Nav`, `Hero`, `ServiceCard`, `ReviewCard`, `BookingForm`, `Footer`, etc.). Reads from real testimonial data.

There is no mobile-app product in the source repo, so no second kit exists. If a patient app is scoped later, add `ui_kits/app/`.

---

## Index — where to find things

| File | Contents |
| --- | --- |
| `README.md` | This document |
| `SKILL.md` | Agent entry point |
| `colors_and_type.css` | All CSS variables + semantic element styles |
| `assets/logo.png` | Teeopticals primary logo |
| `assets/*.svg` | Lucide icon subset (cached) |
| `reviews.json` | 20 bilingual patient reviews (names only) |
| `preview/*.html` | Design-system preview cards |
| `ui_kits/website/index.html` | Full modernized site prototype |
| `ui_kits/website/*.jsx` | Component library |
