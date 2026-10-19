import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Check, Plus } from "lucide-react";
import PageHero from "@/components/PageHero";
import PulseTimeline from "@/components/PulseTimeline";
import Reveal from "@/components/Reveal";
import { orgName, chapterMailtoHref, contactEmail } from "@/lib/config";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description:
    "Start a HEAL chapter at your school. Chapters receive 501(c)(3) fiscal sponsorship, project funding, a complete launch kit, mentorship for their teams, and a documented leadership role for the founder.",
  openGraph: {
    title: `Start a Chapter | ${orgName}`,
    description:
      "What HEAL chapters receive, how to start one, and what we ask of chapter leaders.",
  },
};

const benefits = [
  {
    title: "Nonprofit status from the first week",
    body: "Your chapter operates under our 501(c)(3) fiscal sponsorship, so it can accept tax-deductible donations and apply for grants without incorporating or filing anything with the IRS.",
  },
  {
    title: "Funding for projects and competitions",
    body: "Chapters receive micro-grants for materials and hardware, and we pay competition registration fees directly, so a team's budget does not limit what it can attempt.",
  },
  {
    title: "A complete launch kit",
    body: "The kit includes a chapter constitution, a pitch for your faculty advisor, recruitment materials, meeting agendas, and project worksheets, which together cover what you need for a strong first semester.",
  },
  {
    title: "Mentorship for your teams",
    body: "Your teams are paired with researchers, physicians, and graduate students who review their work, advise on methods, and help them through the parts of a project where students usually get stuck.",
  },
  {
    title: "Other chapter leaders to learn from",
    body: "You join a group of student leaders at other schools who share what has worked for recruiting members, running teams, and finishing projects.",
  },
  {
    title: "A documented leadership role",
    body: "You hold the title of Founding Chapter Director, and when you graduate we provide a recommendation letter describing the chapter you built and the projects it completed.",
  },
];

const steps = [
  {
    label: "Email",
    title: "Send an introduction",
    body: "Email us with your name, your school, and why you want to start a chapter there. A short paragraph is enough to begin.",
  },
  {
    label: "Prepare",
    title: "Receive the launch kit",
    body: "We send the full Chapter Launch Kit and work with you on recruiting members and approaching a faculty advisor.",
  },
  {
    label: "Launch",
    title: "Open your chapter",
    body: "Hold your first meeting, form project teams, and begin work, with our support throughout your first semester.",
  },
];

const requirements = [
  {
    title: "A faculty advisor",
    body: "Most schools require one before approving a club, and the launch kit includes materials to help you ask.",
  },
  {
    title: "Three to five hours a week",
    body: "Time for running meetings and keeping project teams on schedule through the year.",
  },
  {
    title: "A commitment to finishing",
    body: "Projects delivered, papers submitted, and programs that take place rather than staying on paper.",
  },
];

const faqs = [
  {
    q: "Do I need to set up my own nonprofit?",
    a: "No. Your chapter operates under our 501(c)(3) fiscal sponsorship through The Hack Foundation, which lets it accept tax-deductible donations and apply for grants without incorporating separately or applying for federal recognition.",
  },
  {
    q: "What if my school already has a health club?",
    a: "That is usually not a problem. Most existing health clubs focus on presentations and awareness events, while a HEAL chapter focuses on projects, so schools tend to treat them as separate activities. We can help you describe the chapter in a way that complements the club that already exists.",
  },
  {
    q: "How much time does it take?",
    a: "Plan on about three to five hours a week for running meetings, keeping teams on schedule, and staying in touch with us. The commitment is similar to a varsity sport or a part-time job, and your leadership record reflects that.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. Technology is one of four focus areas, and research, competition, and community health projects involve no programming. As a chapter leader your main job is organizing teams and helping them finish, so the technical work belongs to the members who choose it.",
  },
  {
    q: "What if my school does not approve the chapter?",
    a: "Let us know, since administrators are usually more willing to approve a proposal that arrives organized and documented. We can provide our fiscal sponsorship agreement, our nonprofit documentation, and a one-page advisor pitch, and we are glad to answer questions from your administration directly.",
  },
];

export default function StartAChapterPage() {
  return (
    <>
      <PageHero
        title="Start a chapter"
        intro={
          <p>
            Founding a chapter means leading an organization at your school,
            which involves recruiting members, organizing them into project
            teams, and seeing those projects through to the end of the year. You
            will have our nonprofit status, funding, and materials behind you,
            along with people to ask when something goes wrong.
          </p>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={chapterMailtoHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-medium text-white transition-colors hover:bg-forest-dark"
          >
            Email us to begin
            <ArrowUpRight
              size={18}
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#questions"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium text-ink transition-colors hover:border-forest hover:bg-white hover:text-forest"
          >
            Common questions
            <ArrowDown size={17} aria-hidden />
          </a>
        </div>
      </PageHero>

      {/* What chapters receive */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">
                What chapters receive
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[1.05rem] leading-relaxed text-faint">
                Every chapter gets the same support from its first week, so a
                new founder can focus on recruiting a team rather than on
                paperwork.
              </p>
            </Reveal>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal
                as="li"
                key={b.title}
                delay={(i % 3) * 0.06}
                className="flex flex-col bg-paper p-8 transition-colors hover:bg-white"
              >
                <span className="font-serif text-[2.4rem] leading-none text-fern">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 font-serif text-[1.6rem] leading-tight text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 leading-relaxed text-faint">{b.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* How it works */}
      <section className="grain border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">
              How it works
            </h2>
          </Reveal>
          <div className="mt-14">
            <PulseTimeline phases={steps} />
          </div>
        </div>
      </section>

      {/* What we ask */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">
              What we ask of chapter leaders
            </h2>
            <p className="mt-7 text-[1.08rem] leading-relaxed text-faint">
              We would rather be clear about the commitment now than have a
              chapter open and stall halfway through the fall. Leading a chapter
              takes more than most clubs ask of their officers, and that is also
              why the role carries weight with the people who read about it
              later.
            </p>
          </Reveal>
          <ul className="space-y-4">
            {requirements.map((r, i) => (
              <Reveal
                as="li"
                key={r.title}
                delay={i * 0.08}
                className="flex gap-5 rounded-2xl border border-line bg-white p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
                  <Check size={17} aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-[1.5rem] leading-tight text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-faint">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Questions */}
      <section
        id="questions"
        className="grain scroll-mt-16 border-t border-line bg-cream"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">
              Common questions
            </h2>
            <p className="mt-6 leading-relaxed text-faint">
              Anything not answered here can go to{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="break-all text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                {contactEmail}
              </a>
              .
            </p>
          </Reveal>
          <div className="divide-y divide-line-strong/30 border-y border-line-strong/30">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq group">
                <summary className="flex items-center justify-between gap-6 py-6 font-serif text-[1.5rem] leading-snug text-ink transition-colors hover:text-forest">
                  {faq.q}
                  <span className="chevron flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-forest">
                    <Plus size={16} aria-hidden />
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 leading-relaxed text-faint">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
