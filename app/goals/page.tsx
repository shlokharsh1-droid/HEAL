import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Microscope,
  Trophy,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { orgName } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Goals",
  description:
    "The objectives HEAL is working toward, the four areas our members focus their projects in, and the standards we hold every chapter to.",
  openGraph: {
    title: `Our Goals | ${orgName}`,
    description:
      "What HEAL is working toward, where members focus their projects, and how we measure whether a chapter is succeeding.",
  },
};

const goals = [
  {
    title: "Establish chapters where no project-based health program exists",
    description:
      "Thousands of schools have students interested in medicine and no organized way for them to contribute to it. Our first objective is to reach those schools and give one motivated student everything required to open a chapter there.",
  },
  {
    title: "Ensure every member completes a documented project each year",
    description:
      "Participation is not our measure of success. We hold chapters to a clear standard: each member should finish the year with a project that can be demonstrated, submitted, or reported, along with a written record of what they contributed to it.",
  },
  {
    title: "Remove cost as a barrier to student work in health",
    description:
      "Materials, hardware, and competition registration fees quietly determine which students get to participate. We fund those costs directly through chapter micro-grants so that a student's budget never decides the scope of their project.",
  },
  {
    title: "Connect students with professional mentorship",
    description:
      "Independent work has a ceiling without guidance. We match project teams with researchers, physicians, and graduate students who review their work, correct their methods, and help them navigate the parts of a project that are genuinely difficult.",
  },
  {
    title: "Build a network that outlasts any graduating class",
    description:
      "Student organizations usually collapse when their founders leave. We provide governing documents, transition materials, and a network of chapter leads so that leadership transfers deliberately and each chapter continues past its founding year.",
  },
];

const focusAreas = [
  {
    id: "technology",
    icon: Cpu,
    name: "Technology",
    lede: "For members who want to design and build the tools themselves.",
    body: "Technology teams take a documented problem in health and engineer a working response to it. Projects may involve software, hardware, machine learning, or the data infrastructure that allows a clinic or program to operate more effectively. No prior experience is required to join a technology team, since every project is structured as an opportunity to learn the tools while producing something of use.",
    examples: [
      "A medication adherence application designed for elderly patients",
      "A low-cost sensor device for posture or tremor measurement",
      "An artificial intelligence tool for patient education or triage support",
      "A data dashboard built for a local health nonprofit",
    ],
    finished:
      "A completed technology project is a functioning product that has been deployed, documented, and presented at the annual showcase.",
  },
  {
    id: "research",
    icon: Microscope,
    name: "Research",
    lede: "For members drawn to the underlying science and the evidence behind it.",
    body: "Research teams design and conduct original studies or produce rigorous literature reviews under the supervision of mentors who do this work professionally. Members learn to frame a question, survey the existing evidence, collect and analyze data, and write their findings to an academic standard rather than a classroom one.",
    examples: [
      "An original survey study examining adolescent health behaviors",
      "A systematic literature review of a treatment or intervention",
      "A data analysis project using publicly available health datasets",
      "A manuscript prepared for a student research journal or conference",
    ],
    finished:
      "A completed research project is a written paper that has been submitted to a journal, conference, or symposium rather than left unfinished.",
  },
  {
    id: "competition",
    icon: Trophy,
    name: "Competition",
    lede: "For members who work best against an external deadline and an outside evaluation.",
    body: "Competition teams prepare their work for the science fairs and national programs where student health innovation is formally judged, including regional and state science fairs, the Conrad Challenge, HOSA competitive events, BioGENEius, and Synopsys. The national organization covers registration costs and helps teams prepare their submissions and presentations.",
    examples: [
      "A Conrad Challenge entry in the health and nutrition category",
      "A HOSA competitive events team",
      "A science fair project advancing to the Synopsys or state level",
      "A BioGENEius biotechnology research submission",
    ],
    finished:
      "A completed competition project is an entry that was submitted and evaluated, producing feedback and results the team can build on in the following season.",
  },
  {
    id: "community",
    icon: HeartHandshake,
    name: "Community Health",
    lede: "For members whose work is intended to reach people in their own community.",
    body: "Community health teams design and deliver programs that improve health where their members live, including education workshops, patient support initiatives, and efforts to widen access to care. These projects are evaluated on the honest measure of how many people they served and what changed as a result.",
    examples: [
      "A health literacy workshop series delivered to middle school students",
      "A patient companionship program run with a local care organization",
      "A blood drive, screening event, or vaccination outreach campaign",
      "A resource guide connecting families to low-cost care in their area",
    ],
    finished:
      "A completed community health project is a program that was delivered, with documented participants, a partner organization, and outcomes the chapter can report.",
  },
];

const standards = [
  {
    metric: "Project completion rate",
    detail:
      "The share of members who finish the year with a documented project rather than partial work.",
  },
  {
    metric: "External submissions",
    detail:
      "Papers, competition entries, and applications submitted to organizations outside the school.",
  },
  {
    metric: "People served",
    detail:
      "Participants reached by community health programs, counted directly rather than estimated.",
  },
  {
    metric: "Chapter continuity",
    detail:
      "Whether a chapter successfully transfers leadership and continues operating after its founding class graduates.",
  },
];

export default function GoalsPage() {
  return (
    <>
      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          Our goals
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          What {orgName} is working toward.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
          These are the objectives that determine how we spend our funding and
          our time. They are written plainly so that students, advisors, and
          supporters can judge whether we are meeting them.
        </p>
      </section>

      {/* Numbered goals */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line">
            {goals.map((goal, i) => (
              <li
                key={goal.title}
                className="grid gap-4 bg-white p-7 sm:grid-cols-[auto_1fr] sm:gap-7 sm:p-9"
              >
                <span
                  aria-hidden
                  className="font-serif text-3xl font-semibold leading-none text-fern sm:w-14"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif text-xl font-semibold leading-snug text-ink sm:text-2xl">
                    {goal.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-faint">
                    {goal.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Focus areas */}
      <section className="mx-auto max-w-6xl px-5 pb-4 pt-20 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          Focus areas
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Every project belongs to one of four areas.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-faint">
          Members select the problem they want to address, and the focus area
          determines what a completed project is expected to look like. In
          every case the standard is the same: the work should exist in a form
          that can be shown to someone outside the club.
        </p>
      </section>

      {focusAreas.map((area, i) => (
        <section
          key={area.id}
          id={area.id}
          className={i % 2 === 0 ? "" : "border-y border-line bg-sage"}
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-flex rounded-md bg-mist p-3 text-forest">
                  <area.icon size={26} aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {area.name}
                </h3>
                <p className="mt-3 text-lg font-medium leading-relaxed text-ink/85">
                  {area.lede}
                </p>
                <p className="mt-4 text-base leading-relaxed text-faint">
                  {area.body}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="rounded-lg border border-line bg-white p-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-faint">
                    Example projects
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {area.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/85"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fern"
                        />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border-l-4 border-forest bg-mist p-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-dark">
                    What a completed project looks like
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">
                    {area.finished}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Standards */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest">
              Accountability
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              How we measure progress
            </h2>
            <p className="mt-5 text-base leading-relaxed text-faint">
              Attendance is easy to report and tells you almost nothing. These
              are the figures we track internally and share with advisors and
              supporters.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {standards.map((item) => (
              <div key={item.metric} className="py-5">
                <dt className="font-serif text-lg font-semibold text-ink">
                  {item.metric}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-faint">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Lead this work at your school
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-faint">
            Chapters choose their own projects within these four areas. The
            organization provides the funding, the mentorship, and the
            standards.
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
