# One Good Engineer & Co.

Software delivery without a software house: one senior engineer running a crew of AI agents.

The bilingual studio site, statically generated for GitHub Pages. Polish at `/`, English at `/en/`.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build:pages
```

The GitHub Actions workflow publishes `dist/client` to GitHub Pages.

## Checks

```bash
npm run lint
npm test          # builds, then asserts the rendered output
```

The test suite guards the things that regress silently: every case study points at a screenshot
that exists, the delivery diagram stays honest, the copy stays free of em dashes, and the Open
Graph dimensions stay correct.
