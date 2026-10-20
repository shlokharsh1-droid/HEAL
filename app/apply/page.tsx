import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplicationForm from "@/components/ApplicationForm";
import { orgName, contactEmail } from "@/lib/config";

export const metadata: Metadata = {
  title: "Chapter Application",
  description:
    "Apply to start a HEAL chapter at your school. The application takes about five minutes, and we reply to every applicant by email.",
  openGraph: {
    title: `Chapter Application | ${orgName}`,
    description:
      "Apply to start a HEAL chapter at your school. It takes about five minutes.",
  },
};

const nextSteps = [
  {
    title: "We read your application",
    body: "Every application is read by the students who run HEAL, not sorted by software.",
  },
  {
    title: "We reply by email",
    body: "We will write back with any questions and the next steps for opening a chapter.",
  },
  {
    title: "You receive the launch kit",
    body: "Once we agree to move forward, you get the Chapter Launch Kit and help approaching a faculty advisor.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Chapter application"
        intro={
          <p>
            Tell us about yourself and your school. The application takes about
            five minutes, and submitting it does not commit you to anything. It
            simply starts a conversation about bringing {orgName} to your school.
          </p>
        }
      />

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <ApplicationForm />

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="grain overflow-hidden rounded-[1.75rem] bg-cream p-8">
              <h2 className="label text-fern">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest font-mono text-xs text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.1rem] font-medium text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-faint">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-faint">
                Questions before you apply? Email{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all text-forest underline underline-offset-4"
                >
                  {contactEmail}
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
