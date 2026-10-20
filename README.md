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
| `STATS` | Chapter, member, and project counts. Not shown on the site yet. |
| `fiscalSponsorshipStatement` | The 501(c)(3) statement in the footer and on the Support page. |
| `applicationForm` | Where chapter applications are sent. See "Chapter applications" below. |

Page copy lives in the individual page files under `app/`, for example
`app/start-a-chapter/page.tsx`.

## Chapter applications

The application at `/apply` works in two modes, controlled by
`applicationForm` in `lib/config.ts`:

- **Not connected (the default).** Submitting opens the applicant's email app
  with their answers filled in, addressed to `contactEmail`.
- **Connected to a Google Form.** Submissions go straight into the form, and
  you can read them in Google Forms or its linked Google Sheet.

### Connecting a Google Form

1. Create a new Google Form with these questions, in any order. The option
   text must match exactly, or Google will drop the answer.

   | Question | Type | Options |
   | --- | --- | --- |
   | Full name | Short answer | |
   | Email | Short answer | |
   | School | Short answer | |
   | City and state or country | Short answer | |
   | Grade | Multiple choice | `9th grade`, `10th grade`, `11th grade`, `12th grade` |
   | Faculty advisor | Multiple choice | `Yes, a teacher has agreed`, `I have someone in mind but have not asked yet`, `Not yet` |
   | Why do you want to start a chapter? | Paragraph | |
   | Focus areas | Checkboxes | `Technology`, `Research`, `Competition`, `Community health` |
   | How did you hear about HEAL? | Short answer | |

2. In the form's **Settings**, turn off "Collect email addresses" and make sure
   the form does not require signing in to Google.
3. Click the three-dot menu, choose **Get pre-filled link**, type any answer
   into every question (tick every checkbox), and click **Get link**.
4. The copied link contains one `entry.NUMBER=` per question. Put each
   `entry.NUMBER` into the matching slot in `applicationForm.entries`.
5. Set `googleFormAction` to the form's URL with `/viewform...` replaced by
   `/formResponse`, for example
   `https://docs.google.com/forms/d/e/FORM_ID/formResponse`.
6. Click **Responses → Link to Sheets** in the form to read applications in a
   spreadsheet.

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
  apply/page.tsx            Chapter application
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
