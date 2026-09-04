import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { orgName } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "HEAL was founded by high school students in San Jose, California. Learn how our chapters operate, how the national organization supports them, and what distinguishes HEAL from a conventional health club.",
  openGraph: {
    title: `About | ${orgName}`,
    description:
      "Founded by students in San Jose, California. How HEAL chapters operate, and what the national organization provides.",
  },
};

const typicalClub = [
  "Weekly presentations and guest lectures",
  "Awareness campaigns and poster drives",
  "Attendance recorded as the primary outcome",
  "Officers responsible for planning meetings",
  "The year concludes without a deliverable",
];

const healClub = [
  "Project teams in technology, research, competition, and community health",
  "Documented outcomes including applications, papers, and programs",
  "Completed projects recorded as the primary outcome",
  "Officers responsible for advancing teams toward milestones",
  "The year concludes with a showcase of finished work",
];

const operations = [
  {
    title: "Project teams",
    description:
      "Members join small teams organized around a single problem within one focus area. Each team is responsible for its project from the initial question through to the finished result.",
  },
  {
    title: "Mentorship",
    description:
      "Teams are matched with mentors drawn from our network of researchers, physicians, and graduate students, who review their work and advise them through the more difficult stages of a project.",
  },
  {
    title: "Milestones",
    description:
      "Projects follow a scheduled calendar. Scope is defined in the fall, a prototype or draft is expected by winter, and completed work is due in the spring. Deadlines are what separate a project from an intention.",
  },
  {
    title: "Annual showcase",
    description:
      "Each chapter presents its completed projects to members, advisors, families, and the wider chapter network at a showcase held at the end of the academic year.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          Our mission
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          To give students the structure, funding, and mentorship required to
          contribute to health and medicine while they are still in high
          school.
        </h1>
      </section>

      {/* Founding story */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                Our origin
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Founded by students who wanted more from a club
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-ink/85">
              <p>
                {orgName} was founded in 2026 by students at Leland High School
                in San Jose, California. They kept encountering the same
                pattern. Their school had no shortage of students interested in
                health and medicine, and no organization that asked those
                students to produce anything.
              </p>
              <p>
                So they built the organization they wanted to join, one in
                which a sophomore could prototype a medical device, prepare a
                research paper, or deliver a health program for their community
                with a nonprofit providing the funding, the mentorship, and the
                structure behind them. The next step was making that model
                available to any school willing to run it.
              </p>
              <p>
                {orgName} now operates as a national organization built to be
                started elsewhere. Every element of a chapter, from its
                governing documents to its project calendar, exists so that a
                student at another school can open one without repeating the
                founding work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How chapters operate */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          How it works
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How a chapter operates
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {operations.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-line bg-white p-7"
            >
              <h3 className="font-serif text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-faint">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="border-y border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
            The difference
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How we differ from a conventional health club
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-7">
              <h3 className="font-serif text-xl font-semibold text-faint">
                A conventional health club
              </h3>
              <ul className="mt-5 space-y-3">
                {typicalClub.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <X
                      size={18}
                      aria-hidden
                      className="mt-0.5 shrink-0 text-faint"
                    />
                    <span className="leading-relaxed text-faint">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-forest bg-white p-7">
              <h3 className="font-serif text-xl font-semibold text-forest">
                A {orgName} chapter
              </h3>
              <ul className="mt-5 space-y-3">
                {healClub.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      aria-hidden
                      className="mt-0.5 shrink-0 text-forest"
                    />
                    <span className="leading-relaxed text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest">
              Structure
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              How the organization is structured
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink/85">
            <p>
              Local chapters operate their own project teams, recruit their own
              members, and select the problems they want to address. Chapter
              leads hold genuine authority over the decisions that affect their
              school.
            </p>
            <p>
              The national organization provides what an individual school club
              cannot assemble on its own. That includes nonprofit
              infrastructure through our 501(c)(3) fiscal sponsorship, funding
              for projects and competition entry, access to the mentor network,
              and the documents and training required to operate a chapter
              well.
            </p>
            <p>
              This division is deliberate. Administrative work belongs to the
              organization so that students can spend their time on the work
              they joined to do.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Interested in founding a chapter?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-faint">
            We are actively working with students who want to open {orgName} at
            their school this academic year.
          </p>
          <Link
            href="/start-a-chapter"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-forest px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-forest-dark"
          >
            Start a Chapter
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
