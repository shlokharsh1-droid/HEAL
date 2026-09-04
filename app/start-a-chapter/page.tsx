import type { Metadata } from "next";
import {
  Landmark,
  Banknote,
  FolderOpen,
  Users,
  Network,
  Award,
  Mail,
  ChevronDown,
} from "lucide-react";
import { orgName, chapterMailtoHref, contactEmail } from "@/lib/config";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description:
    "Found a HEAL chapter at your school. Chapters receive 501(c)(3) fiscal sponsorship, project funding, a complete launch kit, access to our mentor network, and the position of Founding Chapter Director.",
  openGraph: {
    title: `Start a Chapter | ${orgName}`,
    description:
      "Nonprofit status, funding, a complete launch kit, professional mentorship, and a national network of chapter leads.",
  },
};

const benefits = [
  {
    icon: Landmark,
    title: "Nonprofit status from the first day",
    description:
      "Your chapter operates under our 501(c)(3) fiscal sponsorship, which means it can accept tax-deductible donations and apply for grants immediately, without incorporating anything or waiting on federal paperwork.",
  },
  {
    icon: Banknote,
    title: "Funding for projects and competitions",
    description:
      "Chapters receive micro-grants for project materials and hardware, and we cover competition registration fees directly, so that cost does not determine which projects a chapter can pursue.",
  },
  {
    icon: FolderOpen,
    title: "A complete Chapter Launch Kit",
    description:
      "The kit includes a chapter constitution, a faculty advisor pitch, recruitment scripts, meeting agendas, and project planning worksheets, which together cover everything required to run a credible first semester.",
  },
  {
    icon: Users,
    title: "Access to our mentor network",
    description:
      "Your project teams are matched with researchers, physicians, and graduate students who review their work, advise on methodology, and help them resolve the problems that stall student projects.",
  },
  {
    icon: Network,
    title: "A national community of chapter leads",
    description:
      "You join a group of student leaders at other schools who share recruitment tactics, project approaches, and solutions to the problems every chapter encounters, along with a network-wide showcase.",
  },
  {
    icon: Award,
    title: "A documented leadership record",
    description:
      "You hold the position of Founding Chapter Director at your school, and upon graduation we provide a recommendation letter documenting the organization you built and the projects it completed.",
  },
];

const steps = [
  {
    title: "Send an introduction",
    description:
      "Email us with your name, your school, and why you want to open a chapter there. A short paragraph is sufficient to begin the process.",
  },
  {
    title: "Introductory call",
    description:
      "We schedule a fifteen minute call to discuss your school, your goals, and what a launch involves, and to answer any questions you have about the organization.",
  },
  {
    title: "Launch kit and training",
    description:
      "You receive the complete Chapter Launch Kit along with a working session covering member recruitment and how to approach a prospective faculty advisor.",
  },
  {
    title: "Open your chapter",
    description:
      "You hold your first meeting, form project teams, and begin work. We remain closely involved throughout your first full semester of operation.",
  },
];

const expectations = [
  "A faculty advisor at your school. Most schools require one for club approval, and we provide materials to help you make that request.",
  "Approximately three to five hours each week to lead meetings and keep project teams progressing toward their milestones.",
  "A commitment to completing work, including projects delivered, papers submitted, and programs actually held.",
];

const faqs = [
  {
    q: "Do I need to establish my own nonprofit?",
    a: "No, and that is the central advantage of joining an existing organization. Your chapter operates under our 501(c)(3) fiscal sponsorship through The Hack Foundation, which allows it to accept tax-deductible donations and apply for grants without incorporating separately or filing for federal recognition.",
  },
  {
    q: "What if my school already has a health club?",
    a: "In most cases this is not an obstacle. Existing health clubs are typically organized around presentations and awareness activities, while HEAL is a project organization, so schools generally recognize the two as distinct activities. During your introductory call we help you position the chapter so that it complements what already exists rather than competing with it.",
  },
  {
    q: "How much time does leading a chapter require?",
    a: "Plan on approximately three to five hours each week, spent running meetings, keeping project teams on schedule, and coordinating with the national organization. The commitment is comparable to a varsity sport or a part-time job, and it is recorded that way in your leadership documentation.",
  },
  {
    q: "Do I need to know how to program?",
    a: "No. Technology is one of our four focus areas, and the research, competition, and community health areas involve no programming at all. Chapter leads function primarily as organizers, since the role centers on ensuring that teams complete their projects rather than on producing the technical work yourself.",
  },
  {
    q: "What if my school does not approve the chapter?",
    a: "Tell us, because administrators generally decline vague proposals rather than organized ones. We supply our fiscal sponsorship agreement, our nonprofit documentation, and a one page advisor pitch, and we are willing to correspond with your administration directly to answer their questions about how chapters operate.",
  },
];

export default function StartAChapterPage() {
  return (
    <>
      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          Start a chapter
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Found the {orgName} chapter at your school.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
          Opening a chapter means directing an organization. You recruit a
          team, manage projects through to completion, and operate with the
          backing of a national nonprofit. It asks considerably more of a
          student than most school activities, and that is precisely what makes
          the position worth holding.
        </p>
        <a
          href={chapterMailtoHref}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-forest px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-forest-dark"
        >
          <Mail size={18} aria-hidden />
          Email us to begin
        </a>
      </section>

      {/* What chapters receive */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
            What you receive
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What the organization provides
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border border-line bg-white p-6"
              >
                <span className="inline-flex rounded-md bg-mist p-2.5 text-forest">
                  <benefit.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-faint">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          The process
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Four steps from first email to first meeting
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col">
              <span
                aria-hidden
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest font-serif text-lg font-semibold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-faint">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Expectations */}
      <section className="border-y border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                Expectations
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                What we ask of chapter leads
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/85">
              <p>
                We would rather be direct about this than have a chapter open
                and stall in November. Founding a chapter is an ongoing
                responsibility rather than a title to be listed and set aside.
                Three things are required:
              </p>
              <ul className="space-y-3">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fern"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                That is a greater commitment than most school organizations ask
                of anyone, which is exactly why holding the position carries
                weight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary call to action */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Begin the conversation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-faint">
          Send us a short paragraph about yourself and your school, and we will
          take it from there. We respond to every message personally.
        </p>
        <a
          href={chapterMailtoHref}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-forest px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-forest-dark"
        >
          <Mail size={18} aria-hidden />
          {contactEmail}
        </a>
        <p className="mt-3 text-xs text-faint">
          The subject line is prefilled. Replace the bracketed text with your
          school&rsquo;s name.
        </p>
      </section>

      {/* Frequently asked questions */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="faq rounded-lg border border-line bg-white"
              >
                <summary className="flex items-center justify-between gap-4 p-5 font-semibold text-ink">
                  {faq.q}
                  <ChevronDown
                    size={18}
                    aria-hidden
                    className="chevron shrink-0 text-faint"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-faint">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
