# Obed Gaiya — Portfolio

Static portfolio for a Senior Full-Stack / Backend & Fintech Systems Engineer.
React 19, TypeScript (strict), Vite, Tailwind CSS v4, Framer Motion, Lucide.
No backend: it builds to plain static files.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run check      # lint + type-check + production build
npm run preview    # serve the production build locally
```

Requires Node 20+.

## Where to edit content

All copy lives in `src/data/`. Components contain no portfolio content.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, headline, hero copy, proof points, contact details, social links, portrait |
| `projects.ts` | Featured projects (problem, role, architecture, challenges, solutions, results, links, thumbnail) |
| `experience.ts` | Timeline, earlier experience, education |
| `expertise.ts`, `stack.ts`, `philosophy.ts` | Expertise cards, tech stack, principles |
| `fintech.ts` | Fintech topics and the architecture diagram (nodes, edges, walkthrough steps) |

**Projects:** add an object to `projects.ts`. Put a 16:10 screenshot in `public/projects/` and set `image`.
Leave `impact` empty until you have verified results; empty sections are hidden. Do not add numbers you cannot defend.

## Configuration

Copy `.env.example` to `.env` if you want a hosted contact form.

| Variable | Purpose |
| --- | --- |
| `VITE_FORM_ENDPOINT` | Form endpoint, e.g. a [Formspree](https://formspree.io) URL. Receives a JSON POST with `name`, `email`, `subject`, `message`. |

Without it, the form validates, then opens the visitor's email app with the message prefilled.
The UI says plainly that nothing has been sent until they send it from their mail client.

**Domain:** the site assumes `https://gaiyaobed.com.ng`. If that changes, update it in
`index.html` (canonical, Open Graph, Twitter, JSON-LD), `public/sitemap.xml`, `public/robots.txt`, and `siteUrl` in `src/data/site.ts`.

**X (Twitter):** set `links.x` in `src/data/site.ts`. The icon is hidden until a URL is set.

## Deployment

The output is the `dist/` folder.

### Vercel
1. Import the repository. Framework preset: **Vite**.
2. Build command `npm run build`, output directory `dist` (the defaults).
3. Add `VITE_FORM_ENDPOINT` under Environment Variables if you use a form service.
4. `vercel.json` already sets security headers, long-term caching for `/assets`, and an `index.html` rewrite.

### Netlify
1. New site from Git. Build command `npm run build`, publish directory `dist`.
2. Add `VITE_FORM_ENDPOINT` under Site settings → Environment variables if needed.
3. `public/_redirects` serves the custom 404 page, with a 404 status, for unknown paths.

## Project structure

```
src/
  components/ui/       Button, Badge, Card, Section, Reveal, BackToTop, icons
  components/layout/   Navbar, Footer
  features/<section>/  One folder per page section (hero, projects, fintech, ...)
  data/                All content and types
  hooks/               useTheme, useActiveSection
  pages/               Home, NotFound
```

Design tokens (colors, light/dark themes) are CSS variables at the top of `src/index.css`.

## Quality notes

- Lighthouse (mobile and desktop, production build): 100 / 100 / 100 / 100.
- Fonts (Geist) and brand icons are bundled: no third-party requests at runtime.
- The tech-stack section is code-split and prefetched when the browser is idle.
- Respects `prefers-reduced-motion`. Keyboard navigable, with visible focus states, a skip link, and a focus-trapped project dialog.
- `npm audit --omit=dev` reports 0 vulnerabilities. A moderate advisory in a dev-only linter dependency (`minimatch`) does not ship to visitors.
- TypeScript is pinned to 6.0 because `typescript-eslint` does not yet support TypeScript 7.
