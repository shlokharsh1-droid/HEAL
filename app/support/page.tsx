import type { Metadata } from "next";
import {
  Cpu,
  Trophy,
  PiggyBank,
  Megaphone,
  Heart,
  Store,
} from "lucide-react";
import {
  orgName,
  donationUrl,
  contactEmail,
  fiscalSponsorshipStatement,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support student health innovation. Donations fund project materials, competition fees, and chapter micro-grants, and they are tax-deductible through our 501(c)(3) fiscal sponsor.",
  openGraph: {
    title: `Support | ${orgName}`,
    description:
      "Every dollar goes to students finishing real health projects: materials, competition fees, and chapter micro-grants. Donations are tax-deductible.",
  },
};

const spending = [
  {
    icon: Cpu,
    title: "Project materials and hardware",
    description:
      "Sensors, components, software, and lab supplies for student build and research teams.",
  },
  {
    icon: Trophy,
    title: "Competition registration fees",
    description:
      "Entry fees for science fairs, the Conrad Challenge, HOSA, BioGENEius, and Synopsys, so cost never keeps a team out.",
  },
  {
    icon: PiggyBank,
    title: "Chapter micro-grants",
    description:
      "Small grants that let new chapters launch and existing chapters take on bigger projects.",
  },
  {
    icon: Megaphone,
    title: "Printing and outreach",
    description:
      "Recruitment materials, event flyers, and the printed guides in every Chapter Launch Kit.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-dark">
          Support
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Support students doing real work in health.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
          {orgName} runs on small budgets and finished projects. Your donation
          goes directly to the materials, fees, and grants that let student
          teams take a health project all the way to done.
        </p>
        <a
          href={donationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-clay-dark px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-clay-deeper"
        >
          <Heart size={18} aria-hidden />
          Donate
        </a>
        <p className="mt-3 text-xs text-faint">
          Secure donation page, hosted by HCB (Hack Club).
        </p>
      </section>

      {/* Where money goes */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Exactly where the money goes
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {spending.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-line bg-white p-6"
              >
                <span className="inline-flex rounded-md bg-teal-tint p-2.5 text-teal-dark">
                  <item.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-faint">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-faint">
            Our finances run on HCB, Hack Club&rsquo;s nonprofit financial
            platform, with transparent tracking of every transaction.
          </p>
        </div>
      </section>

      {/* Tax deductibility */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="rounded-lg border-l-4 border-teal bg-teal-tint p-7">
          <h2 className="font-serif text-xl font-semibold text-ink">
            Your donation is tax-deductible
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/85">
            {fiscalSponsorshipStatement}
          </p>
        </div>
      </section>

      {/* Sponsor a chapter */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <span className="inline-flex rounded-md bg-clay-tint p-2.5 text-clay-deeper">
                <Store size={22} aria-hidden />
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Sponsor a chapter
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-ink/85">
              <p>
                Local businesses can sponsor a chapter in their community by
                funding a season of projects, a competition run, or a community
                health program. Sponsors are recognized at the chapter&rsquo;s
                showcase and in its printed materials.
              </p>
              <p>
                Email us at{" "}
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent("Sponsoring a Health Tech Club chapter")}`}
                  className="font-semibold text-teal-dark underline underline-offset-2 hover:text-teal"
                >
                  {contactEmail}
                </a>{" "}
                and we will put together a sponsorship that fits your business
                and your budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
