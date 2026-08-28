/**
 * Every editable site value lives here. Update this file and the whole
 * site picks up the change, with no hunting through components.
 */

export const orgName = "Health Tech Club";

export const tagline =
  "Most clubs end with meetings. We end with something real.";

/** Replace with your real contact email. */
export const contactEmail = "hello@healthtechclub.org";

/** Replace "#" with your Instagram profile URL, e.g. "https://instagram.com/healthtechclub" */
export const instagramUrl = "#";

export const donationUrl =
  "https://hcb.hackclub.com/donations/start/health-tech-club";

/**
 * Used for Open Graph / link-preview metadata. Replace with your real
 * production domain after you deploy (e.g. "https://healthtechclub.org").
 */
export const siteUrl = "https://healthtechclub.org";

/** Honest placeholder numbers. Update these as the organization grows. */
export const STATS = {
  chapters: 1,
  members: 25,
  projects: 6,
};

export const fiscalSponsorshipStatement =
  "Health Tech Club is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit, EIN 81-2908499. Donations are tax-deductible to the extent allowed by law.";

/** Subject line prefilled into the "Start a Chapter" mailto link. */
export const chapterMailtoSubject = "Starting a Chapter at [My School]";

export const chapterMailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  chapterMailtoSubject
)}`;
