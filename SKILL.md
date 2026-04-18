---
name: teeopticals-design
description: Use this skill to generate well-branded interfaces and assets for Teeopticals, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Teeopticals is a complete eyecare brand in Usa River, Arusha, Tanzania, combining Tee Optometry Clinic (medical) and Tee Opticals Retail (eyewear). The brand voice is warm, bilingual (Swahili + English), and human.
user-invocable: true
---

Read the `README.md` file within this skill first — it contains Content Fundamentals, Visual Foundations, and Iconography sections. Then explore:

- `colors_and_type.css` — all CSS tokens (colors, type, spacing, radii, elevation, motion). Import this in every artifact.
- `assets/logo.png` — the official Teeopticals logo (eye mark + wordmark).
- `reviews.json` — 23 real bilingual patient reviews; use these verbatim in any testimonials section.
- `ui_kits/website/` — modernized marketing-site components (Nav, Hero, Services, Booking, Reviews, Footer) to remix.
- `preview/` — design-system specimen cards for reference.

## Quick rules of thumb

- **Colors:** Iris Green `#0E6B53` primary, warm `#FAF6EF` cream ground, `#F26E56` coral as a one-per-screen accent. Never reintroduce the old `#fed136` yellow or generic Bootstrap blue.
- **Type:** Instrument Serif (display, italic welcomed) + Geist (body/UI). JetBrains Mono for codes. Don't use Inter, Roboto, Montserrat.
- **Voice:** Sentence case (not UPPERCASE). Short. Second person. Bilingual Swahili + English when natural. Sparing emoji — prefer Lucide icons.
- **Shape language:** 14px card radius, 999px pill buttons. Soft blurred "iris halos" behind section headers. Breathing-logo motion (6s scale loop) is the brand's alive tell.
- **Never invent:** new SVG illustrations, stock-photo doctors, bluish-purple gradients, left-border-accent cards.

## Working on artifacts

If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy assets out (`assets/logo.png` + needed review data) and create static HTML files that import `colors_and_type.css`.

If working on **production code**, lift tokens from `colors_and_type.css` into your framework's design-token system and follow the components in `ui_kits/website/` as reference implementations.

If the user invokes this skill with no other guidance, ask them what they want to build or design, ask a few focused questions (audience, surface, what existing Teeopticals material they want to reference), then act as an expert designer who outputs HTML artifacts or production code.
