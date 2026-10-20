import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";
import { orgName, contactEmail } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HEAL by email. We reply to students interested in starting a chapter, faculty advisors and administrators reviewing a chapter, and sponsors.",
  openGraph: {
    title: `Contact | ${orgName}`,
    description:
      "Email HEAL about starting a chapter, reviewing a chapter proposal, or sponsoring a chapter.",
  },
};

const audiences = [
  {
    title: "Students",
    body: "If you are thinking about starting a chapter, the short chapter application is the best place to begin. It takes about five minutes, and we reply to every applicant by email.",
    href: "/apply",
    action: "Apply to start a chapter",
  },
  {
    title: "Advisors and administrators",
    body: "If you are reviewing a chapter proposal, we can send our fiscal sponsorship agreement, our nonprofit documentation, and a description of how chapters are supervised and funded. We are also glad to speak with your administration.",
    href: `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Documentation request for a HEAL chapter proposal"
    )}`,
    action: "Request documentation",
  },
  {
    title: "Sponsors and donors",
    body: "If your business or organization would like to support a chapter, we will put together an arrangement that fits your budget and provide documentation for your records.",
    href: `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Sponsoring a HEAL chapter"
    )}`,
    action: "Write about sponsorship",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        intro={
          <p>
            Email is the best way to reach {orgName}. Messages go directly to
            the students who run the organization, and we reply to every one.
          </p>
        }
      />

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="grain flex flex-col gap-6 overflow-hidden rounded-[1.75rem] bg-sage p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <h2 className="label text-fern">Email</h2>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-4 block break-all font-display font-medium text-[1.61rem] leading-tight text-ink transition-colors hover:text-forest sm:text-[2.55rem]"
                >
                  {contactEmail}
                </a>
              </div>
              <CopyEmail email={contactEmail} />
            </div>
          </Reveal>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 0.08}
                className="flex flex-col rounded-[1.75rem] border border-line bg-white p-8"
              >
                <h2 className="font-display font-medium text-[1.53rem] leading-tight text-ink">
                  {a.title}
                </h2>
                <p className="mt-4 flex-1 leading-relaxed text-faint">{a.body}</p>
                <Link
                  href={a.href}
                  className="group mt-8 inline-flex items-center gap-2 font-medium text-forest"
                >
                  {a.action}
                  <ArrowUpRight
                    size={17}
                    aria-hidden
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
