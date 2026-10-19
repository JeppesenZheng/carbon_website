# Carbon Data Hub

An English-language Data Cruiser research initiative for the Scope3Trace and GHGBench carbon datasets.

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

## GitHub Pages

The GitHub repository is `https://github.com/JeppesenZheng/carbon_website`.
The site URL is `https://jeppesenzheng.github.io/carbon_website/`.

1. Push the project to the repository's `main` branch.
2. In the repository, open **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages → Run workflow** for the first
   deployment. Later pushes to `main` deploy automatically.

To verify the static export locally (Node.js 22.13 or newer):

```bash
npm ci
npm run build:pages
```

This creates `out/` with the HTML, styles, JavaScript, favicon, and downloadable
metadata. The Pages build defaults to `/carbon_website`; the workflow takes the
actual path from GitHub Pages. Set `NEXT_PUBLIC_BASE_PATH` to an empty string
when building for a root domain. Public asset links use the same prefix.

The existing `npm run dev` and `npm run build` commands retain the original
Vinext/Cloudflare workflow. GitHub Pages serves the static export and does not
run server-side authentication or database features.
