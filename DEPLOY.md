# Deploying nickmay.ca

- **Code:** https://github.com/nickwmay/nickmay.ca (pushing to `main` redeploys)
- **Host:** Cloudflare Pages. Build command `npm run build`, output folder `dist`
- **Domain registrar:** GoDaddy (renews 2027-03-24). Registration stays at GoDaddy; only the nameservers move.

## DNS records to keep (snapshot, Oct 28 2026)

Email for nick@nickmay.ca runs on Google (Gmail). These **must** exist in Cloudflare before
the nameservers switch, or email stops arriving.

| Type | Name | Value | Priority |
|---|---|---|---|
| MX | @ | aspmx.l.google.com | 1 |
| MX | @ | alt1.aspmx.l.google.com | 5 |
| MX | @ | alt2.aspmx.l.google.com | 5 |
| MX | @ | alt3.aspmx.l.google.com | 10 |
| MX | @ | alt4.aspmx.l.google.com | 10 |
| TXT | @ | `v=spf1 include:dc-aa8e722993._spfm.nickmay.ca ~all` | |
| TXT | dc-aa8e722993._spfm | `v=spf1 include:_spf.google.com ~all` | |
| TXT | @ | `google-site-verification=A5lZrB1NMOAjH5FR4UKe-Snte6vAyLX0_vpLEgJ0lz4` | |

Records being **replaced** (old Shopify site):

| Type | Name | Old value |
|---|---|---|
| A | @ | 23.227.38.32 (Shopify) |
| CNAME | www | nickmay.myshopify.com |

## Switch-over steps

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → `nickwmay/nickmay.ca`.
   Framework preset Astro, build `npm run build`, output `dist`. Deploy and check the `*.pages.dev` URL.
2. Cloudflare → Add a domain → `nickmay.ca` (Free plan). Check the scanned records against the table above.
3. GoDaddy → nickmay.ca → Nameservers → change to the two Cloudflare nameservers.
4. When the zone is active, Pages project → Custom domains → add `nickmay.ca` and `www.nickmay.ca`.
5. Send a test email to nick@nickmay.ca. Then remove the domain from Shopify (Settings → Domains).
