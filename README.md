# nickmay.ca

Personal site for Nick May: a theatre programme with two views, **Front of House** and **Backstage**
(toggle in the header, or press `B`). Built with [Astro](https://astro.build).

| Path | What it is |
|---|---|
| `src/data/show.ts` | All the copy: acts, productions, beliefs, contact. Edit this to update the site. |
| `src/pages/index.astro` | The page structure. |
| `src/styles/global.css` | Both looks. Backstage overrides live under `html[data-mode='backstage']`. |
| `public/images/` | Posters and photos. |
| `CONTENT.md` | Research brief and facts to double-check. |

## Run it

```bash
npm install
npm run dev
```

## Deploy (planned)

Push to GitHub, connect the repo to Cloudflare Pages (or Vercel/Netlify): build command `npm run build`,
output folder `dist`. Then point nickmay.ca's DNS at the new host and remove the domain from Shopify.
A future coaching shop can live at `coaching.nickmay.ca` on Shopify.
