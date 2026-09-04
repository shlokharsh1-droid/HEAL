/**
 * Every editable site value lives here. Update this file and the whole
 * site picks up the change, with no hunting through components.
 */

export const orgName = "HEAL";

export const tagline =
  "Students advancing health through technology, research, and service.";

export const contactEmail = "healclubs.international@gmail.com";

export const donationUrl =
  "https://hcb.hackclub.com/donations/start/health-tech-club";

/**
 * Used for Open Graph link previews. Replace with your production domain
 * once the site is deployed, for example "https://healclubs.org".
 */
export const siteUrl = "https://heal-website.vercel.app";

/** Honest placeholder numbers. Update these as the organization grows. */
export const STATS = {
  chapters: 1,
  members: 25,
  projects: 6,
};

export const fiscalSponsorshipStatement =
  "HEAL is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit, EIN 81-2908499. Donations are tax-deductible to the extent allowed by law.";

/** Subject line prefilled into the "Start a Chapter" mailto link. */
export const chapterMailtoSubject = "Starting a HEAL Chapter at [My School]";

export const chapterMailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  chapterMailtoSubject
)}`;
