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
 * for example "https://healclubs.org".
 */
export const siteUrl = "https://healclubs.org";

/** Honest placeholder numbers. Update these as the organization grows. */
export const STATS = {
  chapters: 1,
  members: 25,
  projects: 6,
};

export const fiscalSponsorshipStatement =
  "HEAL is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit, EIN 81-2908499. Donations are tax-deductible to the extent allowed by law.";

/**
 * Chapter applications submitted at /apply.
 *
 * While googleFormAction is empty, submitting the application opens the
 * applicant's email app with their answers filled in, addressed to
 * contactEmail. To collect applications in a Google Sheet instead, create a
 * Google Form with the questions listed in the README, then paste its
 * response URL and entry IDs below.
 */
export const applicationForm = {
  /** Looks like https://docs.google.com/forms/d/e/FORM_ID/formResponse */
  googleFormAction: "",
  /** Each value looks like "entry.123456789" */
  entries: {
    name: "",
    email: "",
    school: "",
    location: "",
    grade: "",
    advisor: "",
    motivation: "",
    areas: "",
    referral: "",
  },
};

/** Shown on the privacy policy and terms of service pages. */
export const legalLastUpdated = "October 19, 2026";

/** State whose law governs the terms of service. */
export const governingState = "California";
