# Carbon Data Hub

An English-language research data portal for the Scope3Trace and GHGBench carbon datasets.

## MVP

- responsive one-page dataset catalog
- individual Scope3Trace and GHGBench dataset records
- downloadable machine-readable metadata in `public/data/`
- release-readiness framework for future data packages, documentation, and citations

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Create the production build with:

```bash
npm run build
```

## Adding dataset files

Place release assets under `public/data/`, update the matching JSON metadata record, and replace the pre-release labels and links in `app/page.tsx`.
