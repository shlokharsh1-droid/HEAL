import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { orgName, contactEmail, instagramUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Health Tech Club. Students, advisors, administrators, and sponsors can email us directly, and we answer everything ourselves.",
  openGraph: {
    title: `Contact | ${orgName}`,
    description:
      "Email us about starting a chapter, sponsoring one, or verifying our nonprofit documentation.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-dark">
          Contact
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Email us and a real person will answer.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
          Whether you are a student thinking about founding a chapter, an
          advisor with questions, or a sponsor who wants to help, the best way
          to reach us is email. We read and answer everything ourselves.
        </p>

        <div className="mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          <a
            href={`mailto:${contactEmail}`}
            className="group rounded-lg border border-line bg-white p-6 transition-colors hover:border-teal"
          >
            <span className="inline-flex rounded-md bg-teal-tint p-2.5 text-teal-dark">
              <Mail size={22} aria-hidden />
            </span>
            <h2 className="mt-4 font-serif text-lg font-semibold text-ink group-hover:text-teal-dark">
              Email
            </h2>
            <p className="mt-1 text-sm text-faint">{contactEmail}</p>
          </a>
          <a
            href={instagramUrl}
            className="group rounded-lg border border-line bg-white p-6 transition-colors hover:border-teal"
          >
            <span className="inline-flex rounded-md bg-teal-tint p-2.5 text-teal-dark">
              <InstagramIcon size={22} />
            </span>
            <h2 className="mt-4 font-serif text-lg font-semibold text-ink group-hover:text-teal-dark">
              Instagram
            </h2>
            <p className="mt-1 text-sm text-faint">
              Follow along with chapter projects
            </p>
          </a>
        </div>
      </section>

      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex max-w-3xl items-start gap-4">
            <span className="inline-flex shrink-0 rounded-md bg-teal-tint p-2.5 text-teal-dark">
              <ShieldCheck size={22} aria-hidden />
            </span>
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                For school administrators
              </h2>
              <p className="mt-2 text-base leading-relaxed text-ink/85">
                Reviewing a chapter application at your school? Email us and
                we will be happy to provide our fiscal sponsorship agreement
                and nonprofit documentation, along with answers to any
                questions about how chapters operate.
              </p>
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent("Nonprofit documentation request for chapter application review")}`}
                className="mt-4 inline-block font-semibold text-teal-dark underline underline-offset-2 hover:text-teal"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
