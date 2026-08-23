# AptLayer — project handoff

Last updated: 2026-08-23 (Europe/Warsaw)

## Objective

Launch a bilingual, premium website for AptLayer: a founder-led AI engineering studio focused on production AI, MCP integrations, agentic workflows, agent-ready products, audits, and LLM cost/reliability optimization.

## Decisions already made

- Brand: **AptLayer**.
- Do not use **AppFront** or **Gwizdala AI**.
- Krystian Gwizdała's name must appear on the site as founder credibility, but never in the hero heading or subheading.
- English is the default language at `/`; Polish is available at `/pl/`.
- Initial hosting: a free GitHub organization named `aptlayer`, repository `aptlayer.github.io`, GitHub Pages.
- Do not buy or configure a custom domain yet.
- Initial contact email: `gwizdala.kr@gmail.com`.

## Current implementation

Project directory:

`/Users/kgwizdal/projects/aptlayer.github.io`

Implemented:

- Premium dark visual system with an AptLayer layered mark, restrained acid-lime/violet/cyan palette, motion, agent execution trace, and responsive layouts.
- Complete English and Polish landing pages.
- Service positioning around AI product engineering, MCP, agent-ready products, agentic workflows, and AI architecture/economics.
- Signature offer: Agent-Ready Product Sprint.
- Public case studies: Agent Rynku, Let Agents In, Meet Live Assist.
- Founder section containing Krystian Gwizdała's name, portfolio, and GitHub links.
- Contact calls to action using `gwizdala.kr@gmail.com`.
- Static export compatible with GitHub Pages.
- GitHub Actions Pages deployment workflow.
- SEO metadata, canonical URLs, hreflang, Organization/ProfessionalService JSON-LD, sitemap, robots.txt, favicon, and `llms.txt`.
- Generated AptLayer social preview image at `public/og.png`.
- Reduced-motion handling and responsive desktop/mobile layouts.

## Important files

- `app/LandingPage.tsx` — all EN/PL page content and structure.
- `app/globals.css` — complete design system and responsive styling.
- `app/layout.tsx` — site-wide metadata and social preview configuration.
- `app/page.tsx` — English route.
- `app/pl/page.tsx` — Polish route.
- `public/llms.txt` — machine-readable studio and service overview.
- `public/robots.txt` and `public/sitemap.xml` — discovery and indexing.
- `public/og.png` — generated social preview.
- `.github/workflows/pages.yml` — GitHub Pages deployment.
- `tests/rendered-html.test.mjs` — static output and discovery checks.

## Verification status

Completed successfully:

- `npm run lint`
- `npm test`
- `npm run build:pages`
- English page returns HTTP 200 locally.
- Polish page returns HTTP 200 locally.
- `npm audit --omit=dev --audit-level=high` reports zero production vulnerabilities.

Local preview:

- English: `http://localhost:3000/`
- Polish: `http://localhost:3000/pl/`

If the development server is not running:

```bash
cd /Users/kgwizdal/projects/aptlayer.github.io
npm run dev
```

## Git state

- Repository is initialized locally on branch `main`.
- Initial commit: `a49b87b Launch AptLayer studio site`.
- No GitHub remote exists yet.

## Publishing blocker and exact next step

GitHub's organization creation form is prepared for the free plan, but creating an organization is an external account action and GitHub requires account verification/CAPTCHA.

Before submitting, obtain explicit user confirmation for:

- organization name: `aptlayer`
- free GitHub plan
- owner: personal account `krystiangw`
- contact email: `gwizdala.kr@gmail.com`
- acceptance of GitHub Terms of Service
- permission to complete GitHub's CAPTCHA/account verification

After confirmation:

1. Create the `aptlayer` GitHub organization.
2. Create the public repository `aptlayer/aptlayer.github.io`.
3. Add it as `origin` and push branch `main`.
4. Configure Pages to use GitHub Actions if it is not selected automatically.
5. Wait for the Pages workflow to succeed.
6. Verify `https://aptlayer.github.io/`, `/pl/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and the Open Graph image.
7. Update this handoff with the organization, repository, workflow run, and published URL.

## Deferred work

- No custom domain purchase or DNS changes.
- No branded `@aptlayer` email yet.
- No Search Console setup until publication is live.
- Service-specific SEO landing pages can follow after the initial launch.
- A formal EUIPO/trademark screening for AptLayer remains advisable before investing heavily in the brand.

## Image generation record

The social preview was created with the built-in image generation tool as one project-bound asset. The prompt requested a 1200×630 premium near-black AptLayer card with layered agent-system geometry and the exact text “AptLayer” and “Production AI & Agent Systems”. The generated file was saved to `public/og.png`.
