# CLAUDE.md

Project context for Claude Code working in this directory.

## What this project is

Personal portfolio website for **Ismail El Jamiy**, PhD candidate in AI at the University of Toulouse (IRIT / IMT / CLLE). PhD topic: Handwritten Text Recognition of medieval Arabic scientific manuscripts and dedicated LLMs.

The site is greenfield. Full plan lives at `PLAN.md` in this directory — read it before suggesting changes to architecture or scope.

## Owner

- Name: Ismail El Jamiy
- Email: eljamiy.ismail@gmail.com
- GitHub: `@ismailjm`
- Location: Toulouse, France
- Languages: Arabic (native), French (C1, bilingual), English (advanced)

## Locked decisions (do not re-litigate without asking)

- **Stack:** Astro 4.x + Tailwind CSS + MDX + Astro Content Collections
- **Hosting:** Vercel (free subdomain initially; custom domain deferred)
- **Languages:** English (default, no prefix) + French (`/fr/`) + Arabic (`/ar/`, RTL)
- **Aesthetic:** Manuscript-inspired scholarly — parchment textures, drop-caps, Arabic calligraphy as identity motif
- **Palette:** Ivory + olive green + terracotta (Andalusian / Maghrebi nod). Tokens defined in `PLAN.md`.
- **Typography:** Cormorant Garamond (serif), Inter (sans), Amiri + Reem Kufi (Arabic), JetBrains Mono (code)
- **Tone:** First-person + warm on Home/About; precise + scholarly on Research/Publications
- **Reading modes:** light (ivory), parchment (sepia), dark (night) — toggle persisted in localStorage
- **Hero signature:** SVG stroke-drawn animation of `إسماعيل الجامعي` in Arabic calligraphy

## Out of scope for v1

- Live Arabic HTR demo widget — deferred to v2 (Ismail does not yet have a deployable model)
- Custom domain + DNS
- CMS / admin UI (content stays in Markdown, edited via Git)
- Newsletter, comments, analytics

## Assets in repo

- `Resume.pdf` — Ismail's current resume. Will move to `public/Resume.pdf` on scaffold. Source of truth for initial Experience / Projects / Skills content.
- `PLAN.md` — full implementation plan, site map, schemas, phases, verification steps.

## Content Ismail needs to supply at implementation time

- Publication list (titles, authors, venues, year, PDFs / DOIs)
- Profile photo (high-res)
- Photography selection (~10–20 images)
- Project thumbnails (Footvision, Marathon Photo Finder)
- French + Arabic long-form translations (or accept AI drafts to revise)

## Working preferences

- Ismail prefers thorough scoping conversations with concrete previews before implementation.
- When offering choices, give him side-by-side examples (he found preview-based comparisons most useful).
- Default first-person voice on personal pages; never put emojis in code or copy unless he asks.
- Do not start implementation without confirming the plan again — he may have refined preferences.
