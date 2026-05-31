# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Personal portfolio website for **Ismail El Jamiy**, PhD candidate in AI at the University of Toulouse (IRIT / IMT / CLLE). PhD topic: Handwritten Text Recognition of medieval Arabic scientific manuscripts and dedicated LLMs.

The full plan lives at `PLAN.md` — read it before suggesting changes to architecture or scope.

## Owner

- Name: Ismail El Jamiy
- Email: eljamiy.ismail@gmail.com
- GitHub: `@ismailjm`
- Location: Toulouse, France
- Languages: Arabic (native), French (C1, bilingual), English (advanced)

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npx astro check   # TypeScript type-check the Astro project
```

There is no test suite. TypeScript is in strict mode (`astro/tsconfigs/strict`).

## Architecture

**Stack:** Astro 6 + Tailwind CSS v4 + MDX + Astro Content Collections. Hosted on Vercel.

### Routing / i18n

Pages are **physically duplicated** across three locale directories — there is no dynamic locale routing:

- `src/pages/` → English (no URL prefix)
- `src/pages/fr/` → French (`/fr/…`)
- `src/pages/ar/` → Arabic (`/ar/…`, RTL)

The helpers in `src/i18n/utils.ts` are used at runtime within components:
- `getLangFromUrl(url)` — detects locale from the URL pathname
- `useTranslations(lang)` → returns a `t(key)` function backed by `src/i18n/{en,fr,ar}.json`
- `localizePath(path, lang)` — prepends `/fr` or `/ar` for non-English links

When adding a new page, you must create it in all three locale directories. When adding a new translatable string, add the key to all three JSON files.

### Content Collections

Defined in `src/content.config.ts`. Four typed collections:

| Collection | Schema highlights |
|---|---|
| `projects` | title, date, summary, stack[], links?, cover?, featured |
| `publications` | title, authors[], venue, date (YYYY-MM), type, status, pdf?, doi?, arxiv? |
| `events` | title, date, role, location, type |
| `blog` | title, date, tags[], summary, lang |

Content lives in `src/content/{projects,publications,events,blog}/` as Markdown files.

### Theme system

Theme is stored as `data-theme` on `<html>` with values `light` (default), `parchment`, `dark`. An inline script in `BaseLayout.astro` reads localStorage before first paint to avoid flash. CSS variables (`--bg`, `--fg`, `--accent`, etc.) are semantic aliases defined in `global.css` and overridden per theme using `[data-theme="…"]` selectors.

Design tokens are declared in the `@theme {}` block at the top of `src/styles/global.css` (Tailwind CSS v4 syntax — no `tailwind.config.js`).

### BaseLayout

`src/layouts/BaseLayout.astro` handles: canonical URL, hreflang alternates for all three locales, Open Graph tags, JSON-LD Person schema (English home only), RTL direction for Arabic, and the theme flash-prevention script. Every page wraps its content in this layout.

### Photography data

`src/data/photos.ts` is the single source of truth for the photo gallery. It exports a `photos` array and a `photoImages` record (built via `import.meta.glob`) that Astro uses for image optimisation at build time. All three locale photography pages import from this file so data never drifts.

## Locked decisions (do not re-litigate without asking)

- **Stack:** Astro 6 + Tailwind CSS v4 + MDX + Astro Content Collections
- **Hosting:** Vercel (free subdomain initially; custom domain deferred)
- **Languages:** English (default, no prefix) + French (`/fr/`) + Arabic (`/ar/`, RTL)
- **Aesthetic:** Manuscript-inspired scholarly — parchment textures, drop-caps, Arabic calligraphy as identity motif
- **Palette:** Ivory + olive green + terracotta (Andalusian / Maghrebi nod). Tokens in `global.css` `@theme` block.
- **Typography:** Cormorant Garamond (serif), Inter (sans), Amiri + Reem Kufi (Arabic), JetBrains Mono (code)
- **Tone:** First-person + warm on Home/About; precise + scholarly on Research/Publications
- **Reading modes:** light (ivory), parchment (sepia), dark (night) — toggle persisted in localStorage
- **Hero signature:** SVG stroke-drawn animation of `إسماعيل الجامعي` in Arabic calligraphy

## Out of scope for v1

- Live Arabic HTR demo widget — deferred to v2 (Ismail does not yet have a deployable model)
- Custom domain + DNS
- CMS / admin UI (content stays in Markdown, edited via Git)
- Newsletter, comments, analytics
- Blog — nav link commented out until posts exist

## Assets in repo

- `public/Resume.pdf` — Ismail's current resume. Source of truth for Experience / Projects / Skills content.
- `PLAN.md` — full implementation plan, site map, schemas, phases, verification steps.
- `src/assets/photography/` — optimised by Astro at build time via `src/data/photos.ts`.

## Working preferences

- Ismail prefers thorough scoping conversations with concrete previews before implementation.
- When offering choices, give him side-by-side examples (he found preview-based comparisons most useful).
- Default first-person voice on personal pages; never put emojis in code or copy unless he asks.
- Do not start implementation without confirming the plan again — he may have refined preferences.
