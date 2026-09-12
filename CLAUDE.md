# One Good Engineer & Co., site

Static bilingual site for a one-person software delivery studio, live at `https://onegoodengineer.pl`
(the host lives once, in `app/site.ts`; `one-good-engineer.github.io` redirects there). Polish at
`/`, English at `/en/`, plus the productised websites-and-shops offer at `/strony/` and
`/en/websites/` (`app/OfferPage.tsx`). Built with vinext (Vite + Next-compatible), exported statically, deployed to
GitHub Pages by `.github/workflows/pages.yml`. Header, footer and the mark live in
`app/SiteChrome.tsx` and are shared by both pages.

vinext exports each route as `<route>.html`; `scripts/pages-export.mjs` turns every one into
`<route>/index.html` after the build and writes `sitemap.xml` from that list, with `lastmod` taken
from the last commit touching the route's sources. A new route needs one line in `routeSources`
there (the script refuses to build without it) and nothing in `package.json` or `public/`.

Every lead form posts JSON to the one Formspree address in `app/lead/formspree.ts` (a public form
id, not a secret). Per-form payload builders sit next to their form and have a node test each.
Cross-module `.ts` imports carry the `.ts` extension so node's type stripping can run those tests
without a bundler; `allowImportingTsExtensions` is on for that reason.

Full history, decisions and the naming audit live in `PROJECT_HANDOFF.md`. Read it before any
change to positioning or branding.

## Commands

```bash
npm run dev          # local dev
npm run build:pages  # static export into dist/client
npm test             # builds first, then asserts the rendered HTML
npm run lint
```

Preview the real artefact, not the dev server, when checking anything about output:

```bash
cd dist/client && python3 -m http.server 4599
```

## What this page sells

The delivery model, not a technology list. The thesis is "you do not need a software house, because
one senior engineer running a crew of agents delivers the whole project, and a human is accountable
for every change that ships". An earlier version sold "production AI and MCP", which pitched a
technical service to people who buy projects. Do not drift back to it.

The AI and MCP work is the **proof**, not the pitch.

## Rules that a test enforces

- **No em dashes or en dashes anywhere in the copy.** Restructure, or use a comma, a colon or a
  single ASCII hyphen. This caught real ones hiding in page titles, so check metadata too.
- **Every claim must be countable and checkable.** The proof row and case results cite numbers a
  reader can verify by opening the linked product. The hero diagram is a labelled description of the
  delivery loop; it must never present invented telemetry as measured data, which is what the first
  version did with `quality 0.96` and `€0.014`.
- **Case studies carry real screenshots**, in `public/work/*.webp`, not abstract decoration.
- **The offer prices live in three places and must agree**: `OfferPage.tsx` (both languages),
  `public/llms.txt` and the JSON-LD the page emits. A test compares them, so change all three.

## Traps this repo has already sprung twice

Both were the same mistake: a child-combinator selector on `span` also matching the logo, because
`Mark` renders a `<span>`.

1. `.studio-mark > span` absolutely positioned the mark into the corner instead of the caption.
2. `.brand > span` overrode the mark's `display: grid` and collapsed it to four dots.

Inside `.brand` and `.studio-mark`, select with an explicit class (`.brand-name`,
`.studio-mark-label`), never a bare element selector. The mark also needs `grid-template-rows`, not
just columns, or its rows collapse to the border width.

## Domain

`onegoodengineer.pl` is registered at OVH (renews Sep 2027) with OVH's own DNS: four `A` and four
`AAAA` records to GitHub Pages at the apex, `www` as a CNAME to `one-good-engineer.github.io`,
and `v=spf1 -all` because nothing sends mail from it. The custom domain is set in the Pages
settings (via `gh api .../pages`), which is what makes GitHub issue the certificate and redirect
the github.io host. Setting it before the DNS delegation is public takes the site offline, because
the redirect starts immediately; that happened once on 2026-09-11.

## Things that look like cruft but are not

- **`worker/index.ts`** looks like leftover scaffolding. `vite.config.ts` points at it as the
  Cloudflare worker entry, so removing it breaks the build. `tsc --noEmit` reports two type errors
  in it (`Fetcher`, `D1Database`) because `@cloudflare/workers-types` is not installed. No CI step
  runs `tsc`, so this is latent. Fix by adding the types package, not by deleting the file.
- **The `oge` path prefix in the GoatCounter snippet** in `app/layout.tsx` is deliberate. This site
  shares an analytics account with the portfolio, and both have a `/` path, so without the prefix
  their stats merge into one row.

## Regenerating the product screenshots

They age as the products change. Playwright at 1280x800, device scale 2, then
`cwebp -q 82 -resize 1200 0`. For Agent Rynku use a viewport of 1280x1250 and clip the top 800 px,
otherwise the cookie banner, which is pinned to the bottom of the viewport, lands in the frame.

## Before calling anything done

`npm run lint`, `npm test`, then a visual check at 1440 and 390 px wide **in both languages**, then
an independent review of the diff (`codex review --uncommitted`). Publishing is a separate decision:
never push without Krystian saying so.
