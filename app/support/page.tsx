import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArtifactStage, LedgerArtifact } from "@/components/Artifacts";
import {
  orgName,
  donationUrl,
  contactEmail,
  fiscalSponsorshipStatement,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Donations to HEAL pay for project materials, competition registration, chapter micro-grants, and printing. Contributions are tax-deductible through our 501(c)(3) fiscal sponsor.",
  openGraph: {
    title: `Support | ${orgName}`,
    description:
      "Where donations to HEAL go, how they are recorded, and how businesses can sponsor a chapter.",
  },
};

const spending = [
  {
    title: "Project materials and hardware",
    body: "Sensors, components, software, and lab supplies requested by technology and research teams.",
  },
  {
    title: "Competition registration",
    body: "Entry fees for science fairs, the Conrad Challenge, HOSA, BioGENEius, and Synopsys, so that cost never keeps a team from entering.",
  },
  {
    title: "Chapter micro-grants",
    body: "Small grants that help new chapters launch and help established chapters take on larger projects.",
  },
  {
    title: "Printing and outreach",
    body: "Recruitment materials, event materials, and the printed guides in each Chapter Launch Kit.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Support HEAL"
        intro={
          <p>
            {orgName} runs on a small budget, and nearly all of it goes to the
            materials, fees, and grants that let student teams finish their
            projects. A donation of any size helps a chapter take on work it
            could not otherwise afford.
          </p>
        }
      >
        <a
          href={donationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-[1.05rem] font-medium text-white transition-colors hover:bg-forest-dark"
        >
          Donate to {orgName}
          <ArrowUpRight
            size={19}
            aria-hidden
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <p className="mt-4 text-sm text-faint">
          Donations are processed securely by HCB, the nonprofit finance
          platform run by Hack Club.
        </p>
      </PageHero>

      {/* Where donations go */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">
                Where donations go
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-faint">
                Our finances run through HCB, which records every transaction,
                so each dollar can be traced to the purchase or grant it paid
                for.
              </p>
            </Reveal>
            <ol className="mt-10 border-t border-line">
              {spending.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 0.06}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-6"
                >
                  <span className="label pt-1.5 text-fern">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-[1.55rem] leading-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-faint">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.1}>
            <ArtifactStage className="min-h-[32rem]">
              <LedgerArtifact />
            </ArtifactStage>
          </Reveal>
        </div>
      </section>

      {/* Tax deductibility */}
      <section className="grain border-t border-line bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-[2.6rem] text-ink sm:text-[3.4rem]">
              Tax deductibility
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-[1.6rem] leading-snug text-ink sm:text-[1.9rem]">
              {fiscalSponsorshipStatement}
            </p>
            <p className="mt-6 leading-relaxed text-faint">
              If you need documentation for your records, we can send our fiscal
              sponsorship agreement and the sponsor&rsquo;s nonprofit
              determination letter on request.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sponsor a chapter */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-[2.6rem] text-ink sm:text-[3.4rem]">
              Sponsor a chapter
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[1.1rem] leading-[1.75] text-ink/80">
              Local businesses and organizations can sponsor a chapter in their
              own community by funding a season of projects, a competition
              entry, or a community health program. Sponsors are recognized at
              the chapter&rsquo;s showcase and in its printed materials, and we
              will put together an arrangement that fits your budget.
            </p>
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                "Sponsoring a HEAL chapter"
              )}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium text-ink transition-colors hover:border-forest hover:bg-white hover:text-forest"
            >
              Write to us about sponsorship
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
