# Health Tech Club Website

The public website for Health Tech Club, a student-run health innovation
nonprofit. Built with Next.js (App Router), TypeScript, and Tailwind CSS.
Fully static, with no database, no auth, and no environment variables.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edits hot-reload automatically.

To check that everything compiles for production:

```bash
npm run build
```

## Editing site content: start with `lib/config.ts`

Every value you'll routinely change lives in **one file**:
[`lib/config.ts`](lib/config.ts)

| Constant | What it is |
| --- | --- |
| `contactEmail` | Placeholder `hello@healthtechclub.org`. Replace with your real email. Used in every mailto link, the footer, and the contact page. |
| `instagramUrl` | Placeholder `"#"`. Replace with your Instagram profile URL. |
| `donationUrl` | The HCB donation page link. |
| `siteUrl` | Your production domain, used for Open Graph link previews. Update after deploying. |
| `STATS` | Chapters / members / projects numbers shown on the home page. |
| `orgName`, `tagline` | Organization name and hero headline. |
| `fiscalSponsorshipStatement` | The 501(c)(3) statement shown in the footer and on the Support page. |

Page copy lives in each page file under `app/` (e.g. `app/start-a-chapter/page.tsx`).

## Deploying to Vercel (free, ~5 minutes)

1. **Push to GitHub.** Create a new repository at github.com/new, then from
   this folder:

   ```bash
   git init
   git add .
   git commit -m "Health Tech Club website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/health-tech-club.git
   git push -u origin main
   ```

2. **Import in Vercel.** Go to [vercel.com/new](https://vercel.com/new),
   sign in with GitHub, and select the `health-tech-club` repository.
   Vercel auto-detects Next.js. Don't change any settings, and no
   environment variables are needed.

3. **Deploy.** Click **Deploy**. In about a minute you'll have a live URL
   like `health-tech-club.vercel.app`.

After that, every `git push` to `main` redeploys automatically. To use a
custom domain (e.g. `healthtechclub.org`), add it under
**Project → Settings → Domains** in Vercel, then update `siteUrl` in
`lib/config.ts` so link previews use the right address.

## Project structure

```
app/
  layout.tsx            Shared header/footer layout, fonts, default metadata
  page.tsx              Home
  about/page.tsx        About
  tracks/page.tsx       Tracks
  start-a-chapter/page.tsx  Start a Chapter (the conversion page)
  support/page.tsx      Support / donate
  contact/page.tsx      Contact
  icon.svg              Favicon
components/
  Header.tsx            Nav + mobile hamburger menu
  Footer.tsx            Footer with fiscal sponsorship statement
lib/
  config.ts             ← All editable values
```
