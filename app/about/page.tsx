import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { orgName } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "HEAL began in 2026 as one club at Leland High School in San Jose. Learn how our chapters work, how they differ from a typical school health club, and how the work is divided between chapters and HEAL.",
  openGraph: {
    title: `About | ${orgName}`,
    description:
      "How HEAL started, how a chapter works, and how the work is divided between chapters and HEAL.",
  },
};

const chapterParts = [
  {
    title: "Project teams",
    body: "Members work in small teams, each focused on a single problem in one focus area, and each team is responsible for its project from the first question through to the finished result.",
  },
  {
    title: "Mentors",
    body: "Teams are paired with mentors, such as researchers, physicians, and graduate students, who review the work as it develops and help when a team runs into something it cannot solve alone.",
  },
  {
    title: "Milestones",
    body: "Projects follow a shared calendar, with the scope set in the fall, a first version due by winter, and finished work expected in the spring, so that problems surface while there is still time to fix them.",
  },
  {
    title: "Showcase",
    body: "At the end of the school year, each chapter presents its finished projects to members, advisors, and families, which gives every team a clear deadline and an audience for what it made.",
  },
];

const comparison = [
  {
    aspect: "What meetings are for",
    typical: "Presentations and guest speakers",
    heal: "Planning and reviewing project work",
  },
  {
    aspect: "What members produce",
    typical: "Posters and awareness campaigns",
    heal: "Applications, papers, competition entries, and programs",
  },
  {
    aspect: "How success is measured",
    typical: "Attendance",
    heal: "Finished projects",
  },
  {
    aspect: "What officers do",
    typical: "Plan events",
    heal: "Keep teams on track toward their milestones",
  },
  {
    aspect: "How the year ends",
    typical: "A final meeting",
    heal: "A showcase of finished work",
  },
];

const chapterDecides = [
  "Recruiting members and choosing chapter officers",
  "Choosing which problems the teams work on",
  "Running meetings and managing project teams",
  "Working with the faculty advisor and the school",
];

const healProvides = [
  "Nonprofit status through our fiscal sponsor",
  "Funding for materials and competition fees",
  "Access to mentors for project teams",
  "The launch kit, training, and ongoing support",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About HEAL"
        intro={
          <p>
            {orgName} is a student-led nonprofit made up of school chapters.
            Each chapter organizes its members into small teams that build
            health technology, conduct research, prepare competition entries,
            or run community health programs, and we support those chapters
            with funding, mentorship, and the administrative work that a school
            club would struggle to handle by itself.
          </p>
        }
      />

      {/* How we started */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.7fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="label text-fern">How we started</h2>
          </div>
          <div>
            <Reveal>
              <p className="font-display text-[1.7rem] leading-[1.3] tracking-[-0.025em] text-ink sm:text-[2.2rem]">
                {orgName} began in 2026 as one club at Leland High School in San
                Jose, started by students who wanted the time they spent on
                health to add up to something by the end of the year.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-8 text-[1.1rem] leading-[1.75] text-ink/80 md:grid-cols-2 md:gap-12">
              <Reveal>
                <p>
                  Before {orgName}, most of us had belonged to health clubs that
                  met regularly and meant well. We listened to speakers, helped
                  with awareness campaigns, and enjoyed the people we met, but
                  the meetings rarely led anywhere beyond the meetings
                  themselves, and by June there was not much to show for a year
                  of interest in medicine.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  When we set up our first project teams, we learned quickly
                  what they needed in order to finish: a clear scope at the
                  start, someone experienced to check the work, a small budget
                  for materials, and deadlines the whole club took seriously.
                  Once that was working at our school, we wrote it down for
                  students elsewhere and arranged fiscal sponsorship through The
                  Hack Foundation so every chapter could operate as part of a
                  nonprofit.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How a chapter works */}
      <section className="grain border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display text-[2.21rem] text-ink sm:text-[3.06rem]">
                How a chapter works
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[1.05rem] leading-relaxed text-faint">
                Every chapter runs on the same basic structure, which keeps
                projects moving without asking each new chapter leader to invent
                a system from scratch.
              </p>
            </Reveal>
          </div>
          <ol className="mt-16 grid gap-x-12 md:grid-cols-2">
            {chapterParts.map((part, i) => (
              <Reveal
                as="li"
                key={part.title}
                delay={(i % 2) * 0.08}
                className="grid grid-cols-[3.5rem_1fr] border-t border-line-strong/40 py-9"
              >
                <span className="font-display font-medium text-[2.21rem] leading-none text-fern">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-medium text-[1.53rem] leading-tight text-ink">
                    {part.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-faint">{part.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* What we do differently */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2 className="display max-w-4xl text-[2.21rem] text-ink sm:text-[3.06rem]">
              How we differ from a typical health club
            </h2>
            <p className="mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-faint">
              Most school health clubs are built around meetings, while{" "}
              {orgName} chapters are built around projects, and that one
              difference changes nearly everything about how a chapter spends
              its year.
            </p>
          </Reveal>

          <Reveal className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <caption className="sr-only">
                Comparison of a typical school health club with a {orgName}{" "}
                chapter
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-1/4 pb-5 pr-6">
                    <span className="sr-only">Aspect</span>
                  </th>
                  <th scope="col" className="label w-[37.5%] pb-5 pr-6 font-normal text-faint">
                    A typical school health club
                  </th>
                  <th
                    scope="col"
                    className="label w-[37.5%] rounded-t-2xl bg-sage px-6 pb-5 pt-6 font-normal text-forest"
                  >
                    A {orgName} chapter
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.aspect}>
                    <th
                      scope="row"
                      className="border-t border-line py-6 pr-6 align-top font-display text-[1.15rem] font-medium leading-tight text-ink"
                    >
                      {row.aspect}
                    </th>
                    <td className="border-t border-line py-6 pr-6 align-top text-faint">
                      {row.typical}
                    </td>
                    <td
                      className={`border-t border-forest/15 bg-sage px-6 py-6 align-top font-medium text-ink ${
                        i === comparison.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                    >
                      {row.heal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* How the work is divided */}
      <section className="grain border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <h2 className="display max-w-4xl text-[2.21rem] text-ink sm:text-[3.06rem]">
              How the work is divided
            </h2>
            <p className="mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-faint">
              Chapters make the decisions that affect their own schools, and we
              take care of the work that would be difficult for a single club to
              manage, which leaves chapter leaders free to spend their time on
              their teams.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {[
              { heading: "Your chapter decides", items: chapterDecides, dark: false },
              { heading: `${orgName} provides`, items: healProvides, dark: true },
            ].map((panel, i) => (
              <Reveal key={panel.heading} delay={i * 0.1}>
                <div
                  className={`h-full rounded-[1.75rem] p-8 sm:p-10 ${
                    panel.dark
                      ? "on-night bg-night text-on-night"
                      : "border border-line bg-paper"
                  }`}
                >
                  <h3
                    className={`font-display font-medium text-[1.7rem] leading-tight ${
                      panel.dark ? "text-on-night" : "text-ink"
                    }`}
                  >
                    {panel.heading}
                  </h3>
                  <ul className="mt-7 space-y-4">
                    {panel.items.map((item) => (
                      <li key={item} className="flex items-start gap-3.5">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            panel.dark ? "bg-leaf text-night" : "bg-sage text-forest"
                          }`}
                        >
                          <Check size={13} aria-hidden />
                        </span>
                        <span
                          className={`leading-relaxed ${
                            panel.dark ? "text-on-night" : "text-ink/85"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <Link
              href="/goals"
              className="group inline-flex items-center gap-2 font-medium text-forest"
            >
              See what we are working toward
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
