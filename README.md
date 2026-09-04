# HEAL Website

The public website for HEAL, a student-led health innovation nonprofit.
Built with Next.js (App Router), TypeScript, and Tailwind CSS. The site is
fully static, with no database, no authentication, and no environment
variables.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edits reload automatically.

To confirm everything compiles for production:

```bash
npm run build
```

## Editing site content: start with `lib/config.ts`

Every value you are likely to change lives in one file:
[`lib/config.ts`](lib/config.ts)

| Constant | What it controls |
| --- | --- |
| `orgName` | The organization name shown in the header, footer, and page titles. |
| `tagline` | The short descriptive line used in metadata. |
| `contactEmail` | Used in every mailto link, the footer, and the contact page. |
| `donationUrl` | The HCB donation page link used by the Support page. |
| `siteUrl` | Your production domain, used for link previews. Update after deploying. |
| `STATS` | The chapters, members, and projects figures on the home page. |
| `fiscalSponsorshipStatement` | The 501(c)(3) statement in the footer and on the Support page. |

Page copy lives in the individual page files under `app/`, for example
`app/start-a-chapter/page.tsx`.

## Deploying to Vercel

1. **Push to GitHub.** From this folder:

   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```

2. **Import in Vercel.** Go to [vercel.com/new](https://vercel.com/new), sign
   in with GitHub, and select this repository. Vercel detects Next.js
   automatically. No settings need to be changed and no environment variables
   are required.

3. **Deploy.** Click Deploy. The site is live about a minute later.

Every later push to `main` redeploys the site automatically.

### Changing the site address

The `.vercel.app` address is editable. In Vercel, open the project, go to
**Settings**, then **Domains**. Edit the existing `.vercel.app` entry to
choose a different subdomain, or add a custom domain you own. After changing
it, update `siteUrl` in `lib/config.ts` so that link previews point at the
correct address.

## Project structure

```
app/
  layout.tsx                Shared header and footer, fonts, default metadata
  page.tsx                  Home
  about/page.tsx            About
  goals/page.tsx            Our Goals, including the four focus areas
  start-a-chapter/page.tsx  Start a Chapter
  support/page.tsx          Support and donations
  contact/page.tsx          Contact
  globals.css               Colour tokens and base styles
  icon.svg                  Favicon
components/
  Header.tsx                Navigation and mobile menu
  Footer.tsx                Footer and fiscal sponsorship statement
lib/
  config.ts                 All editable values
```
