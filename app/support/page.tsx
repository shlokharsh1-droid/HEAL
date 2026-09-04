import type { Metadata } from "next";
import { Cpu, Trophy, Banknote, Printer, Heart, Store } from "lucide-react";
import {
  orgName,
  donationUrl,
  contactEmail,
  fiscalSponsorshipStatement,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Donations to HEAL fund project materials, competition registration fees, chapter micro-grants, and outreach. Contributions are tax-deductible through our 501(c)(3) fiscal sponsor.",
  openGraph: {
    title: `Support | ${orgName}`,
    description:
      "Contributions fund student project materials, competition fees, and chapter micro-grants. Donations are tax-deductible.",
  },
};

const spending = [
  {
    icon: Cpu,
    title: "Project materials and hardware",
    description:
      "Sensors, electronic components, software licenses, and laboratory supplies requested by student technology and research teams.",
  },
  {
    icon: Trophy,
    title: "Competition registration",
    description:
      "Entry fees for science fairs, the Conrad Challenge, HOSA competitive events, BioGENEius, and Synopsys, so that cost never prevents a team from entering.",
  },
  {
    icon: Banknote,
    title: "Chapter micro-grants",
    description:
      "Small grants that allow new chapters to open and established chapters to take on projects of greater scope than their own fundraising would permit.",
  },
  {
    icon: Printer,
    title: "Printing and outreach",
    description:
      "Recruitment materials, event materials, and the printed guides included in every Chapter Launch Kit sent to a new school.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          Support
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Fund student work in health and medicine.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
          {orgName} operates on modest budgets and completed projects. Your
          contribution goes directly to the materials, registration fees, and
          grants that allow student teams to carry a health project through to
          completion.
        </p>
        <a
          href={donationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-forest px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-forest-dark"
        >
          <Heart size={18} aria-hidden />
          Donate
        </a>
        <p className="mt-3 text-xs text-faint">
          Secure donation page hosted by HCB, the nonprofit financial platform
          operated by Hack Club.
        </p>
      </section>

      {/* Allocation */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
            Allocation
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Where contributions are spent
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {spending.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-line bg-white p-6"
              >
                <span className="inline-flex rounded-md bg-mist p-2.5 text-forest">
                  <item.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-faint">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-faint">
            Our finances are administered through HCB, the nonprofit financial
            platform operated by Hack Club, which maintains a transparent
            record of every transaction.
          </p>
        </div>
      </section>

      {/* Tax deductibility */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="rounded-lg border-l-4 border-forest bg-mist p-7">
          <h2 className="font-serif text-xl font-semibold text-ink">
            Contributions are tax-deductible
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/85">
            {fiscalSponsorshipStatement}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/85">
            Donors who require documentation for their records may request our
            fiscal sponsorship agreement and nonprofit determination materials
            at any time.
          </p>
        </div>
      </section>

      {/* Sponsorship */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div>
              <span className="inline-flex rounded-md bg-mist p-2.5 text-forest">
                <Store size={22} aria-hidden />
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Sponsor a chapter
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-ink/85">
              <p>
                Local businesses and organizations can sponsor a chapter in
                their own community by funding a season of projects, a
                competition entry, or a community health program. Sponsors are
                recognized at the chapter&rsquo;s annual showcase and in its
                printed materials.
              </p>
              <p>
                Write to us at{" "}
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                    "Sponsoring a HEAL chapter"
                  )}`}
                  className="font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
                >
                  {contactEmail}
                </a>{" "}
                and we will prepare a sponsorship arrangement suited to your
                organization and its budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
