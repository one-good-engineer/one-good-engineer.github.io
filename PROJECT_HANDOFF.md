# One Good Engineer & Co., project handoff

Last updated: 2026-08-24 (Europe/Warsaw)

## What this is

The bilingual site for a software delivery studio of one. The thesis: you no longer need a software house, because one senior engineer running a crew of AI agents can deliver the whole project, with a human accountable for every change that ships.

## Decisions in force

- Brand: **One Good Engineer**, wordmark **One Good Engineer & Co.** The "& Co." is the agents, and it is what turns a description of one person into the name of a firm.
- Voice is **first person**. Krystian Gwizdała speaks on the page and is named in the hero paragraph, not in the hero heading.
- Positioning is the **delivery model**, not a list of AI technologies. The page sells "one engineer instead of a team", and the AI and MCP work is the proof, not the pitch.
- English is the default at `/`, Polish lives at `/pl/`.
- GitHub organisation **`one-good-engineer`**, created 2026-08-24. Repository `one-good-engineer.github.io`, GitHub Pages.
- Contact email: `gwizdala.kr@gmail.com`.
- No em dashes anywhere in the copy. A test enforces this.

## Naming, settled 2026-08-24

Roughly 190 domains were checked across four rounds. `onegoodengineer.com` is verified free by whois and has no company collision. **`onegoodengineer` on GitHub is taken**: a dormant organisation created in 2014, two repositories, last push January 2020, no site, no followers. Hence the hyphenated org handle, which also matches the existing convention of `krystian-gwizdala`.

What the audit ruled out, with reasons:

- The orchestration metaphor is exhausted. `orchestraofone.com`, `onemanorchestra.com`, `agentorchestra.com`, `firstchair.com`, `baton`, `rostrum`, `maestro`, `conducted`, `showrunner`, `atelier`, `coxswain` are all taken.
- The descriptive agent space is closed and legally crowded: Thoughtworks holds `Agent/works™`, CrowdStrike ships Charlotte AI AgentWorks, Salesforce has Agentforce, and `agentworks.software` sells production AI agents. `AgentLayer` and `AILayer` are taken everywhere and carry a crypto token association.
- `Spoina` had the best metaphor but no `.com`, no `.pl`, and an English reading ("SPOY-na") that sits next to *spoil*.
- `Osnowa` collides with Grupa Osnowa, a Polish IT agency. `Azymut` collides with OSDW Azymut.
- `tenengineers.com` is free and memorable but implies a ten-person team, which contradicts the entire pitch.

Do not put "agent", "vibe" or "AI" in the name. Those are words of the season, and the name has to outlive them. Positioning belongs in the copy, where it can be changed in five minutes.

Open and non-blocking: `onegoodengineer.com` is not bought yet. Buying it makes the org handle invisible, since a custom domain replaces `one-good-engineer.github.io` entirely. Switching is a one-line change of `metadataBase` plus a `CNAME` file plus the three URL strings in `robots.txt`, `sitemap.xml` and `llms.txt`.

## Current implementation

Project directory: `/Users/kgwizdal/projects/aptlayer.github.io` (still named after the old brand; rename it to `one-good-engineer.github.io` when you push, it breaks nothing but the local static server).

- Dark visual system, acid-lime accent, responsive desktop and mobile layouts.
- New mark: a two by two grid with one filled cell and three outlined. One leads, three work. Rendered in CSS in the page and as SVG in `favicon.svg`.
- Hero states the thesis in two moves: a short bright headline and a muted sub-headline, so the call to action stays above the fold in both languages.
- The hero diagram is now the **delivery loop**, not fabricated telemetry: brief, agents, independent model review, human review, gates, handover. The human step is the highlighted one, because it is the differentiator.
- Method section answers the vibe-coding objection directly, and the studio section answers the bus-factor objection ("one person is the whole supplier") head on.
- Evidence instead of decoration: four case studies with **real screenshots of the live products**, in `public/work/*.webp`, roughly 50 KB each.
- Claims are countable and checkable: four public products built solo, four open-source MCP servers, 177 products measured by Let Agents In, ten years shipping software before the agents existed. Agent Rynku's card cites the 92 tools its MCP server exposes.
- Open Graph card at 1200x630, 153 KB.
- The "about" section carries a facts block (location, languages, experience, contact) instead of the decorative framed logo it inherited from the old design. A portrait photo belongs there and is the single biggest thing still missing: the section answers "can I trust one person", and a face answers that better than anything else on the page.
- Analytics: GoatCounter, the same account as the portfolio (`krystiangw.goatcounter.com`). Cookieless, so no consent banner, which matters because a banner would block the agent-readiness story. Paths are prefixed with `oge` in `app/layout.tsx` so this site's `/` does not collide with the portfolio's `/` in the same account. Move it to its own site code by changing the one `data-goatcounter` URL.
- Static export for GitHub Pages, deployment workflow, SEO metadata, canonicals, hreflang, JSON-LD, sitemap, robots.txt, favicon and `llms.txt`.

## Important files

- `app/LandingPage.tsx`, all EN and PL copy plus page structure. The brand string is the `brand` constant near the top.
- `app/globals.css`, the design system.
- `app/layout.tsx`, site metadata, `metadataBase` and the social preview.
- `app/page.tsx` and `app/pl/page.tsx`, the two routes.
- `public/work/*.webp`, product screenshots used as case evidence.
- `public/llms.txt`, `public/robots.txt`, `public/sitemap.xml`, `public/og.png`, `public/favicon.svg`.
- `.github/workflows/pages.yml`, Pages deployment.
- `tests/rendered-html.test.mjs`, output checks.

## Two CSS traps this repo has already hit twice

Both were the same mistake: a child-combinator selector on `span` catching the logo, because `Mark` renders a `<span>`.

1. `.studio-mark > span` absolutely positioned the mark into the corner instead of the caption.
2. `.brand > span` overrode the mark's `display: grid`, collapsing it to four dots.

The rule now is that anything selecting inside `.brand` or `.studio-mark` uses an explicit class (`.brand-name`, `.studio-mark-label`), never a bare element selector. Also note the mark needs `grid-template-rows` as well as columns, or its rows collapse to the border width.

## Repository cleanup

The starter template left a Cloudflare D1 stack that the static site never used: `db/`, `drizzle/`, `examples/`, `drizzle.config.ts`, the `db:generate` script and the `drizzle-orm` and `drizzle-kit` dependencies. All removed. The site now has two runtime dependencies, react and react-dom.

`worker/index.ts` stays. It looks like scaffolding, but `vite.config.ts` points at it as the Cloudflare worker entry, so it is part of the build.

Known gap: `tsc --noEmit` reports two errors in `worker/index.ts` (`Fetcher`, `D1Database`), because `@cloudflare/workers-types` is not installed. Nothing in `lint`, `test` or `build` runs `tsc`, so this is latent rather than breaking.

## Verification status

`npm run lint`, `npm test`, `npm run build:pages` and `npm audit --omit=dev --audit-level=high` all pass, the last with zero vulnerabilities. Both pages were rendered and inspected visually at 1440 and 390 px wide, in both languages.

The eight rendered-output tests guard what regresses silently: the new brand is present and the old one is gone anywhere in the output, every canonical and sitemap entry points at the live host, every case study references a screenshot file that exists, the delivery diagram keeps its human review step and carries no fabricated numbers, the copy contains no em dashes (this caught real ones hiding in page titles), and the Open Graph dimensions stay 1200x630.

The agent-discoverability blocker check passes with zero failures on the local build, except one expected item: the link check reports `https://one-good-engineer.github.io/pl/` as a 404, because the site is not published yet. **Re-run it against the live URL after publishing:**

```bash
python3 ~/.claude/skills/agent-discoverability/scripts/check.py https://one-good-engineer.github.io/
```

`/.well-known/ai-catalog.json` is deliberately absent. ARD describes tools and APIs an agent can execute, and this is a services page with no endpoint of its own.

Local preview after `npm run build:pages`:

```bash
cd dist/client && python3 -m http.server 4599
```

## Regenerating the product screenshots

They age as the products change. Taken with Playwright at 1280x800, device scale 2, converted with `cwebp -q 82 -resize 1200 0`. For Agent Rynku use a viewport of 1280x1250 and clip the top 800 px, otherwise the cookie banner, pinned to the bottom of the viewport, lands in the frame.

## Publishing, next steps

The organisation exists. What remains:

1. Create the public repository `one-good-engineer/one-good-engineer.github.io`, empty.
2. Add it as `origin` and push `main`.
3. Set Pages to deploy from GitHub Actions if it is not selected automatically.
4. Verify `/`, `/pl/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt` and the Open Graph image.
5. Re-run the discoverability check against the live URL.

Note: the local `gh` token has scopes `gist, read:org, repo, workflow`. Creating a repository inside the organisation may need `gh auth refresh -s admin:org`.

## Deferred

- `onegoodengineer.com` not bought. Buying it retires the hyphenated Pages URL.
- No branded email yet.
- Search Console after publication.
- Service-specific SEO landing pages after launch.
- EUIPO screening. "One Good Engineer" is a laudatory descriptive phrase, which makes for a weak trademark; expect it to be hard to register and plan to rely on the domain and reputation rather than on a registration.
