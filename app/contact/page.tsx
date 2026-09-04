import type { Metadata } from "next";
import { Mail, ShieldCheck, GraduationCap, Store } from "lucide-react";
import { orgName, contactEmail, chapterMailtoHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HEAL by email. We correspond directly with students interested in founding a chapter, faculty advisors, school administrators, and prospective sponsors.",
  openGraph: {
    title: `Contact | ${orgName}`,
    description:
      "Write to us about founding a chapter, sponsoring one, or reviewing our nonprofit documentation.",
  },
};

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "If you are considering opening a chapter at your school, write to us with your name, your school, and a short note about why. We will arrange an introductory call.",
    subject: "Starting a HEAL Chapter at [My School]",
  },
  {
    icon: Store,
    title: "Sponsors and donors",
    description:
      "If you represent a business or organization interested in supporting a chapter, we will prepare an arrangement suited to your budget and provide documentation for your records.",
    subject: "Sponsoring a HEAL chapter",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          Contact
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Write to us directly.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
          Email is the best way to reach {orgName}. Messages are read and
          answered by the students and directors who operate the organization,
          and we reply to every one of them.
        </p>

        <div className="mt-10 max-w-2xl rounded-lg border border-line bg-white p-7">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-faint">
            General enquiries
          </h2>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-3 inline-flex items-center gap-2.5 font-serif text-xl font-semibold text-forest hover:text-forest-dark sm:text-2xl"
          >
            <Mail size={22} aria-hidden className="shrink-0" />
            <span className="break-all">{contactEmail}</span>
          </a>
        </div>
      </section>

      {/* Audiences */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Who we hear from
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-lg border border-line bg-white p-7"
              >
                <span className="inline-flex rounded-md bg-mist p-2.5 text-forest">
                  <audience.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
                  {audience.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-faint">
                  {audience.description}
                </p>
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                    audience.subject
                  )}`}
                  className="mt-4 inline-block text-sm font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
                >
                  Send a message
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrators */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex max-w-3xl items-start gap-5">
          <span className="inline-flex shrink-0 rounded-md bg-mist p-2.5 text-forest">
            <ShieldCheck size={22} aria-hidden />
          </span>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">
              For faculty advisors and school administrators
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/85">
              If you are reviewing a chapter application at your school, please
              write to us. We will provide our fiscal sponsorship agreement,
              our nonprofit documentation, and a written description of how
              chapters operate, including supervision, funding, and the
              responsibilities held by students. We are also available to speak
              with your administration directly.
            </p>
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                "Nonprofit documentation request for chapter application review"
              )}`}
              className="mt-4 inline-block font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
            >
              Request documentation
            </a>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Considering a chapter at your school?
          </h2>
          <a
            href={chapterMailtoHref}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-forest px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-forest-dark"
          >
            <Mail size={18} aria-hidden />
            Email us to begin
          </a>
        </div>
      </section>
    </>
  );
}
