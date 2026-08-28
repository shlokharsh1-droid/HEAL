import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { orgName } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Health Tech Club is a student-founded health innovation nonprofit from San Jose, CA. Learn how our project teams, mentors, and chapter structure turn students into builders.",
  openGraph: {
    title: `About | ${orgName}`,
    description:
      "Health Tech Club was founded by students in San Jose, CA. Learn how project teams, mentors, milestones, and an end-of-year showcase make the club actually work.",
  },
};

const typicalClub = [
  "Weekly lectures and slide presentations",
  "Awareness campaigns and poster drives",
  "Attendance is the main metric",
  "Officers plan meetings",
  "Ends the year with a memory",
];

const usClub = [
  "Project teams that build, research, and compete",
  "Real deliverables: apps, papers, programs",
  "Shipped work is the main metric",
  "Officers lead teams toward milestones",
  "Ends the year with a showcase of finished work",
];

const howItWorks = [
  {
    title: "Project teams",
    description:
      "Every member joins a small team organized around one problem in one of our four tracks. Teams own their project from the first idea to the finished result.",
  },
  {
    title: "Mentors",
    description:
      "Teams are matched with mentors from our network of researchers, physicians, and graduate students, who review their work and help them get through the hard parts.",
  },
  {
    title: "Milestones",
    description:
      "Projects run on a milestone calendar: scope by fall, prototype or draft by winter, finished work by spring. Deadlines are what separate projects from ideas.",
  },
  {
    title: "End-of-year showcase",
    description:
      "Every chapter presents its finished projects to peers, advisors, families, and the wider chapter network at a year-end showcase.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-dark">
          Our mission
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Give students the structure, funding, and mentorship to do real work
          in health while they are still in high school.
        </h1>
      </section>

      {/* Founding story */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Founded by students, for students
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-ink/85">
              <p>
                {orgName} was founded in 2026 by students at Leland High School
                in San Jose, California, who kept noticing the same thing:
                schools were full of students who cared about health and
                medicine, and clubs that gave them nothing real to do about it.
              </p>
              <p>
                So we built the club we wished existed, one where a sophomore
                can prototype a medical device, submit a research paper, or run
                a health program for their community, with a nonprofit behind
                them providing funding, mentors, and structure. Then we made it
                something any school can start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the club works */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How the club actually works
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {howItWorks.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-line bg-white p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-faint">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Compare */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What makes us different
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-7">
              <h3 className="font-serif text-xl font-semibold text-faint">
                A typical health club
              </h3>
              <ul className="mt-5 space-y-3">
                {typicalClub.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <X
                      size={18}
                      aria-hidden
                      className="mt-0.5 shrink-0 text-faint"
                    />
                    <span className="text-faint">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-teal bg-white p-7">
              <h3 className="font-serif text-xl font-semibold text-teal-dark">
                {orgName}
              </h3>
              <ul className="mt-5 space-y-3">
                {usClub.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      aria-hidden
                      className="mt-0.5 shrink-0 text-teal"
                    />
                    <span className="text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How we&rsquo;re structured
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink/85">
            <p>
              Local chapters run their own project teams, recruit their own
              members, and choose their own problems. Chapter leads make the
              decisions that matter at their school.
            </p>
            <p>
              The national organization provides what a school club can&rsquo;t
              build alone: nonprofit infrastructure through our 501(c)(3)
              fiscal sponsorship, funding for projects and competitions, a
              mentor network, and the materials to run a chapter well.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Sound like your kind of club?
          </h2>
          <Link
            href="/start-a-chapter"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-clay-dark px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-clay-deeper"
          >
            Start a Chapter
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
