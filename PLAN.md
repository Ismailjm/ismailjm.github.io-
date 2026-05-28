# Portfolio Website — Ismail El Jamiy

## Context

Ismail is a PhD candidate (Université de Toulouse, IRIT/IMT/CLLE) working on Handwritten Text Recognition of medieval Arabic scientific manuscripts and dedicated LLMs. The current `/home/ieljamiy/Documents/PhD/code/portfolio/` directory contains only `Resume.pdf` — this is a greenfield build.

The site has two jobs:

1. **Academic credibility** — collaborators, supervisors, conference contacts arriving at the link in an email signature should immediately see research substance (PhD topic, publications, CV).
2. **Personal identity** — recruiters, fellow students, and the broader community should walk away with a sense of *who* Ismail is: a researcher whose work lives at the intersection of modern AI and Arabic scientific heritage, and who also takes photographs and cares about craft.

The design language explicitly mirrors the research subject: a manuscript-inspired scholarly portfolio with parchment textures, drop-cap initials, and Arabic calligraphy — the site becomes a small artifact of the heritage the research preserves.

## Decisions (locked in earlier)

| Area | Decision |
|---|---|
| Aesthetic | Manuscript-inspired scholarly |
| Stack | Astro + Tailwind CSS |
| Languages | English (default) + French + Arabic (RTL) |
| Hosting | Vercel (free subdomain initially; custom domain later) |
| Palette | Ivory + olive green + terracotta (Andalusian / Maghrebi nod) |
| Tone | Blend — first-person warmth on Home/About, scholarly precision on Research/Publications |
| Hero calligraphy | Animated stroke of `إسماعيل الجامعي` |
| HTR live demo | Deferred to v2 |
| Publications | Ismail will supply titles/links during implementation |

## Site map

```
/                        Home (hero + brief intro + featured cards)
/about                   Longer bio, narrative, personality, hobbies
/research                PhD topic deep-dive, methods, vision
/publications            Papers, preprints, posters (with BibTeX + PDF)
/projects                Footvision, Marathon Photo Finder, etc.
/projects/[slug]         Per-project case study (markdown)
/experience              CV timeline + PDF resume download
/events                  Hackathons (MiaThon), workshops (GDG), conferences
/photography             Image gallery (lightbox)
/blog                    Markdown posts (research notes, tutorials)
/blog/[slug]             Individual post
/contact                 Email, LinkedIn, GitHub, Scholar; optional form
```

All routes available under `/`, `/fr/`, `/ar/` via Astro i18n. `/ar/` switches `<html dir="rtl" lang="ar">`.

## Design system

### Color tokens (Tailwind theme extension)

```
ivory      #F6F1E4   page background (light mode)
parchment  #EFE4CB   panel / card background (parchment mode)
ink        #2A2118   primary text
olive      #556B2F   primary accent (links, borders, nav active)
terracotta #C65D2E   secondary accent (CTAs, illuminated initials)
gold       #B8860B   highlight on calligraphy stroke
charcoal   #1B1A17   text on dark mode
night      #14130F   dark mode background
```

Three reading modes: **light** (ivory), **parchment** (warm sepia), **dark** (night). Persist user choice in `localStorage`; system preference as default.

### Typography

- **Latin serif (headings, body):** Cormorant Garamond or EB Garamond — both have manuscript pedigree.
- **Latin sans (UI, labels):** Inter — restrained, neutral counterpoint.
- **Arabic:** Amiri (for body, traditional naskh feel) + Reem Kufi (for display/calligraphy).
- **Monospace (code, captions):** JetBrains Mono.

### Manuscript motifs (used sparingly, not as kitsch)

- Drop-cap initial on the first paragraph of long-form pages (About, Research, blog posts) — terracotta, ~5× line-height, hand-drawn SVG.
- Subtle parchment SVG noise texture on `parchment` mode panels (~3% opacity).
- Section dividers: thin olive double-rule with a small geometric ornament (8-point star, common to Maghrebi manuscripts).
- Footnote-style citations on Research page — superscript numbers, hover reveals reference.

### Signature touches

1. **Hero calligraphy animation** — `إسماعيل الجامعي` rendered as SVG paths, stroke-drawn on first load (≈1.5s) with `stroke-dasharray` animation. After it completes, the strokes fill with the gold token. Reduced-motion users see the static final state.
2. **Reading-mode toggle** — fixed top-right, three-state toggle (sun / parchment-leaf / moon icons) with smooth color transitions.
3. **Parchment textures + drop-caps** — described above.

## Tech architecture

### Stack

- **Astro 4.x** with `@astrojs/tailwind` and `@astrojs/sitemap`.
- **Astro i18n** built-in routing (`src/i18n/` with `en.json`, `fr.json`, `ar.json`).
- **Content Collections** (`src/content/`) for projects, publications, blog posts, events. Each entry a frontmatter-rich Markdown / MDX file.
- **MDX** for blog posts and project case studies (lets Ismail embed code/figures).
- **Vercel** for hosting (auto-deploy on `main` push; preview deploys for branches).

### Repo layout

```
portfolio/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   ├── Resume.pdf                 (move existing file here)
│   ├── fonts/                      (self-hosted webfonts)
│   └── images/
│       ├── photography/
│       └── projects/
├── src/
│   ├── components/
│   │   ├── Layout.astro
│   │   ├── Nav.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ReadingModeToggle.astro
│   │   ├── HeroCalligraphy.astro
│   │   ├── DropCap.astro
│   │   ├── ProjectCard.astro
│   │   ├── PublicationItem.astro
│   │   ├── Timeline.astro
│   │   └── PhotoGallery.astro
│   ├── content/
│   │   ├── config.ts               (collection schemas)
│   │   ├── projects/
│   │   ├── publications/
│   │   ├── events/
│   │   └── blog/
│   ├── i18n/
│   │   ├── en.json
│   │   ├── fr.json
│   │   ├── ar.json
│   │   └── utils.ts                (t() helper, locale detection)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── research.astro
│   │   ├── publications.astro
│   │   ├── projects/
│   │   ├── experience.astro
│   │   ├── events.astro
│   │   ├── photography.astro
│   │   ├── blog/
│   │   ├── contact.astro
│   │   ├── fr/                     (mirrored French routes)
│   │   └── ar/                     (mirrored Arabic routes)
│   └── styles/
│       └── global.css
```

### Content schemas (sketch)

```ts
// src/content/config.ts
projects:     { title, slug, date, summary, stack[], links{github,demo}, cover, body }
publications: { title, authors[], venue, year, type, pdf, bibtex, links{doi,arxiv} }
events:       { title, date, role, location, type: hackathon|workshop|conference|talk, summary }
blog:         { title, date, tags[], lang, summary, body }
```

### i18n strategy

- Default locale `en`, additional locales `fr`, `ar`. `astro.config.mjs` `i18n.routing = { prefixDefaultLocale: false }` → English at `/`, others at `/fr/`, `/ar/`.
- UI strings in JSON dictionaries; long-form content (About, Research, blog posts) authored per-locale in separate Markdown files.
- Arabic: set `<html dir="rtl" lang="ar">`; mirror layout via Tailwind `rtl:` variants; load Arabic font subset only on AR pages.
- Language switcher preserves current path across locales.

## Build phases

1. **Scaffold** — `npm create astro@latest`, add Tailwind, configure i18n, set up Vercel deploy from day one (deploy a "hello world" first to confirm pipeline).
2. **Design system** — tokens in `tailwind.config.mjs`, base typography, reading-mode toggle, parchment noise SVG.
3. **Layout shell** — `BaseLayout.astro`, Nav, footer, LanguageSwitcher, ReadingModeToggle.
4. **Hero calligraphy** — convert `إسماعيل الجامعي` to SVG paths (one-time, using a calligraphic Arabic font like Reem Kufi at a large size, exported via FontForge or Inkscape), then animate via `stroke-dasharray`.
5. **Pages (English first):** Home → About → Research → Experience → Projects (list + per-project) → Publications → Events → Photography → Blog → Contact.
6. **French translations** — duplicate content files; translate (Ismail authors, since he's bilingual C1).
7. **Arabic translations + RTL polish** — translate, then walk every page in `/ar/` to fix RTL edge cases.
8. **Photography gallery** — lightbox component (e.g. `medium-zoom` or a small custom one); responsive image pipeline via Astro's `<Image />`.
9. **Polish** — accessibility audit (axe), Lighthouse run, social cards (Open Graph image generation), favicon, robots.txt, sitemap.
10. **Deploy** — point Vercel at GitHub repo; verify all three locales render.

## Reused / existing assets

- `Resume.pdf` (already in working directory) → move to `public/Resume.pdf`, link from Experience page.
- Resume content drives initial population of About, Experience, Projects, Events, Skills.
- Ismail's GitHub `@ismailjm` → linked Footvision & Marathon Photo Finder project repos.
- LinkedIn profile → linked in footer + contact.

## What Ismail needs to supply during implementation

- Publications list (titles, authors, venues, year, PDFs/links).
- Profile photo (1–2 high-resolution shots).
- Photography selection (~10–20 images, optimized JPEG/WebP).
- Headshots / project thumbnails for Footvision, Marathon Photo Finder.
- Optional: French and Arabic translations for long-form pages (or we generate drafts for him to revise).
- Optional: a short tagline/manifesto for the About page.

## Verification

- `npm run dev` → walk every page in all three locales; check RTL on `/ar/`.
- `npm run build && npm run preview` → confirm static output renders without hydration warnings.
- Lighthouse (Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95).
- axe DevTools or `astro check` → zero critical accessibility violations.
- Cross-browser smoke test: Chrome, Firefox, Safari, mobile Safari.
- Reduced-motion preference respected (hero calligraphy + scroll animations).
- View site on Vercel preview URL → share with one or two friends for read-through before announcing.

## Out of scope (v2)

- Live Arabic HTR demo widget (will revisit once Ismail has a deployable model).
- Custom domain purchase + DNS (defer until content is stable).
- CMS / admin UI (content stays in markdown, edited via Git for now).
- Newsletter signup, comments, analytics dashboards.
