import type { Metadata } from "next";
import {
  Landmark,
  PiggyBank,
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
    "Found a Health Tech Club chapter at your school. Get 501(c)(3) fiscal sponsorship, micro-grants, a complete launch kit, a mentor network, and the title of Founding Chapter Director.",
  openGraph: {
    title: `Start a Chapter | ${orgName}`,
    description:
      "Nonprofit status, funding, a launch kit, mentors, and a network of chapter leads. Found the chapter your school doesn't have yet.",
  },
};

const benefits = [
  {
    icon: Landmark,
    title: "Nonprofit status you can't get on your own",
    description:
      "Your chapter operates under our 501(c)(3) fiscal sponsorship from day one, which means you can accept tax-deductible donations and apply for grants without spending a year on paperwork.",
  },
  {
    icon: PiggyBank,
    title: "Funding",
    description:
      "Micro-grants for project materials and hardware, plus coverage for competition entry fees, so money never kills a good project.",
  },
  {
    icon: FolderOpen,
    title: "A complete Chapter Launch Kit",
    description:
      "The kit includes a constitution, an advisor pitch, recruitment scripts, meeting agendas, and project worksheets, which covers everything you need to run a serious first semester.",
  },
  {
    icon: Users,
    title: "A real mentor network",
    description:
      "Access to researchers, physicians, and graduate students who review your teams' work and help them through the hard parts.",
  },
  {
    icon: Network,
    title: "A cross-chapter community",
    description:
      "A network of chapter leads at other schools to trade tactics with, plus a network-wide showcase where your chapter's work gets seen.",
  },
  {
    icon: Award,
    title: "A title that means something",
    description:
      "You will be your school's Founding Chapter Director, and when you graduate you will have a recommendation letter documenting what you actually built.",
  },
];

const steps = [
  {
    title: "Reach out",
    description:
      "Email us with your name, your school, and why you want to bring the club to your campus. A short paragraph is all we need to get things moving.",
  },
  {
    title: "15-minute call",
    description:
      "We will talk through your school, your goals, and what launching looks like, and we will answer anything you want to know.",
  },
  {
    title: "Get the Launch Kit and training",
    description:
      "You'll get the full Chapter Launch Kit and a working session with us on recruiting members and pitching your faculty advisor.",
  },
  {
    title: "Launch your chapter",
    description:
      "Run your first meeting, form project teams, and get to work. We stay with you the whole first semester.",
  },
];

const faqs = [
  {
    q: "Do I need my own nonprofit?",
    a: "No, and that is the point. Your chapter operates under our 501(c)(3) fiscal sponsorship through The Hack Foundation, so you can accept tax-deductible donations and apply for grants without incorporating anything yourself.",
  },
  {
    q: "What if my school already has a health club?",
    a: "That's usually fine. Most existing health clubs are lecture- and awareness-focused; we're a project organization, so schools generally treat us as a distinct activity. On your intro call we'll help you position the chapter so it complements what already exists rather than competing with it.",
  },
  {
    q: "How much time does it take?",
    a: "Plan on roughly 3 to 5 hours a week as a chapter lead, spent running meetings, keeping project teams on their milestones, and coordinating with us. It is a real commitment, comparable to a varsity sport or a part-time job, and it reads that way on your record.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. Build is only one of our four tracks, and the Research, Competition, and Community Impact tracks do not require any programming at all. Chapter leads are organizers first anyway, since your job is making sure teams finish rather than writing their code.",
  },
  {
    q: "What if my school won't approve it?",
    a: "Tell us, because administrators usually say no to vague ideas rather than organized ones. We will provide our fiscal sponsorship agreement, our nonprofit documentation, and a one-page advisor pitch, and we are happy to email or call your administration directly to answer their questions.",
  },
];

export default function StartAChapterPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-dark">
          Start a chapter
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Your school doesn&rsquo;t have this yet. Be the one who founds it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
          Founding a chapter means running a real organization: recruiting a
          team, managing projects to completion, and operating with a national
          nonprofit behind you. It is probably the hardest club job at your
          school, and that is exactly what makes it worth having.
        </p>
        <a
          href={chapterMailtoHref}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-clay-dark px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-clay-deeper"
        >
          <Mail size={18} aria-hidden />
          Email us to get started
        </a>
      </section>

      {/* What you get */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What you get
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border border-line bg-white p-6"
              >
                <span className="inline-flex rounded-md bg-teal-tint p-2.5 text-teal-dark">
                  <benefit.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-faint">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How it works
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col">
              <span
                aria-hidden
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal font-serif text-lg font-semibold text-white"
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

      {/* What we look for */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What we look for
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-ink/85">
              <p>
                We want to be straight with you. This is not a passive club,
                and founding a chapter is not a line you add to a résumé and
                then forget about. Here is what it actually takes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                  />
                  A faculty advisor at your school. Most schools require one,
                  and we will help you pitch them.
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                  />
                  Roughly 3 to 5 hours a week to lead meetings and keep
                  project teams moving.
                </li>
                <li className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                  />
                  A willingness to actually ship: projects finished, papers
                  submitted, programs run.
                </li>
              </ul>
              <p>
                That is more responsibility than most clubs ask of anyone,
                which is exactly why holding the role means something.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ready to found your chapter?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-faint">
          Email us and we will take it from there. A short paragraph about you
          and your school is all it takes to start the conversation.
        </p>
        <a
          href={chapterMailtoHref}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-clay-dark px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-clay-deeper"
        >
          <Mail size={18} aria-hidden />
          {contactEmail}
        </a>
        <p className="mt-3 text-xs text-faint">
          The subject line is prefilled, so just swap in your school&rsquo;s
          name.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Questions you probably have
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
