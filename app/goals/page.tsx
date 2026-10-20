import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArtifactStage, artifacts } from "@/components/Artifacts";
import { orgName } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Goals",
  description:
    "The goals that guide how HEAL spends its time and funding, the four focus areas our members work in, and how we measure whether a chapter is succeeding.",
  openGraph: {
    title: `Our Goals | ${orgName}`,
    description:
      "What HEAL is working toward, the four focus areas, and how we measure progress.",
  },
};

const goals = [
  {
    title: "Open chapters where students have no project-based option",
    body: "Many schools have students who are interested in medicine and no organized way for them to work on it. We want to reach those schools and give one motivated student what they need to start a chapter there.",
  },
  {
    title: "Make sure every member finishes a project",
    body: "We judge a chapter by its finished work rather than its attendance, so we ask each member to end the year with a project that can be demonstrated, submitted, or reported, along with a record of what they contributed to it.",
  },
  {
    title: "Keep cost from deciding who takes part",
    body: "Materials, hardware, and entry fees can quietly limit which students participate, so we cover those costs through chapter micro-grants wherever we are able to.",
  },
  {
    title: "Connect students with experienced mentors",
    body: "Student projects improve quickly with good feedback, so we pair teams with researchers, physicians, and graduate students who can review their methods and point out problems early.",
  },
  {
    title: "Build chapters that outlast their founders",
    body: "Student clubs often fade once their founders graduate, so every chapter receives governing documents and transition materials that make it easier to hand leadership to the next group of students.",
  },
];

const focusAreas = [
  {
    key: "technology" as const,
    name: "Technology",
    lede: "For members who want to design and build the tools themselves.",
    body: "Technology teams take a specific problem in health and build something that addresses it, using software, hardware, machine learning, or the data systems that help a clinic or program run. No prior experience is required, since many members learn the tools while building their first project.",
    examples: [
      "A medication reminder app designed for older patients",
      "A low-cost sensor for measuring posture or tremor",
      "A tool that explains test results in plain language",
      "A data dashboard for a local health nonprofit",
    ],
    finished:
      "A working product that has been deployed, documented, and shown at the showcase.",
  },
  {
    key: "research" as const,
    name: "Research",
    lede: "For members who are drawn to the science and the evidence behind it.",
    body: "Research teams design original studies or write structured literature reviews with guidance from mentors who do research professionally. Members learn to frame a question, review the existing evidence, collect and analyze data, and write up their findings to an academic standard.",
    examples: [
      "A survey study of health habits among teenagers",
      "A systematic review of a treatment or intervention",
      "An analysis of a publicly available health dataset",
      "A paper prepared for a student journal or conference",
    ],
    finished:
      "A paper that has been submitted to a journal, conference, or symposium.",
  },
  {
    key: "competition" as const,
    name: "Competition",
    lede: "For members who do their best work against a deadline and an outside judge.",
    body: "Competition teams prepare work for the science fairs and competitions where student projects in health are judged, including regional and state science fairs, the Conrad Challenge, HOSA competitive events, BioGENEius, and Synopsys. We cover registration costs and help teams prepare their submissions and presentations.",
    examples: [
      "A Conrad Challenge entry in a health category",
      "A team entering HOSA competitive events",
      "A science fair project advancing to the state level",
      "A biotechnology research submission to BioGENEius",
    ],
    finished:
      "An entry that was submitted and judged, with feedback the team can use the following season.",
  },
  {
    key: "community" as const,
    name: "Community health",
    lede: "For members who want their work to reach people in their own community.",
    body: "Community health teams design and run programs where they live, such as education workshops, patient support efforts, and work that improves access to care. These projects are judged by the people they reached and the difference they made for them.",
    examples: [
      "A health literacy workshop series for younger students",
      "A companionship program run with a local care home",
      "A blood drive or health screening event",
      "A guide connecting families to low-cost care nearby",
    ],
    finished:
      "A program that ran, with a partner organization, documented participants, and results the chapter can report.",
  },
];

const measures = [
  {
    name: "Project completion",
    body: "The share of members who finish the year with a documented project rather than partial work.",
  },
  {
    name: "External submissions",
    body: "Papers, competition entries, and applications sent to organizations outside the school.",
  },
  {
    name: "People served",
    body: "Participants reached by community health programs, counted directly rather than estimated.",
  },
  {
    name: "Chapter continuity",
    body: "Whether a chapter hands leadership to new students and keeps running after its founders graduate.",
  },
];

export default function GoalsPage() {
  return (
    <>
      <PageHero
        title="Our goals"
        intro={
          <p>
            These goals guide how we spend our time and our funding. We have
            written them plainly so that students, advisors, and donors can see
            exactly what we are trying to do and hold us to it.
          </p>
        }
      />

      {/* Goals */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="display text-[2.21rem] text-ink sm:text-[2.89rem]">
                Five goals
              </h2>
            </Reveal>
          </div>
          <ol>
            {goals.map((goal, i) => (
              <Reveal
                as="li"
                key={goal.title}
                className="grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr]"
              >
                <span className="font-display font-medium text-[2.72rem] leading-none text-fern">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-medium text-[1.61rem] leading-tight text-ink">
                    {goal.title}
                  </h3>
                  <p className="mt-4 text-[1.05rem] leading-relaxed text-faint">
                    {goal.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Focus areas */}
      <section className="grain border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
          <Reveal>
            <h2 className="display max-w-4xl text-[2.21rem] text-ink sm:text-[3.06rem]">
              Focus areas
            </h2>
            <p className="mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-faint">
              Members choose the problem they want to address, and the focus
              area decides what a finished project should look like. Whatever
              the area, the work has to exist in a form that someone outside the
              club can see.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-7xl space-y-24 px-5 py-20 sm:px-8 sm:py-28">
          {focusAreas.map((area, i) => {
            const Artifact = artifacts[area.key];
            const flip = i % 2 === 1;
            return (
              <div
                key={area.key}
                id={area.key}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <ArtifactStage className="min-h-[30rem] bg-sage">
                    <Artifact />
                  </ArtifactStage>
                </Reveal>
                <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
                  <p className="label text-fern">
                    0{i + 1} · Focus area
                  </p>
                  <h3 className="display mt-4 text-[2.21rem] text-ink sm:text-[2.72rem]">
                    {area.name}
                  </h3>
                  <p className="mt-4 font-display text-[1.25rem] leading-snug text-ink/85">
                    {area.lede}
                  </p>
                  <p className="mt-5 leading-relaxed text-faint">{area.body}</p>

                  <h4 className="label mt-8 text-faint">Example projects</h4>
                  <ul className="mt-3 divide-y divide-line border-y border-line">
                    {area.examples.map((example) => (
                      <li key={example} className="py-3 text-[0.98rem] text-ink/85">
                        {example}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-2xl bg-paper p-5">
                    <h4 className="label text-fern">What finished looks like</h4>
                    <p className="mt-2 leading-relaxed text-ink">{area.finished}</p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Measures */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display text-[2.21rem] text-ink sm:text-[3.06rem]">
                How we measure progress
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[1.05rem] leading-relaxed text-faint">
                Attendance is easy to count but says little about whether a
                chapter is working, so these are the measures we track and share
                with advisors and donors.
              </p>
            </Reveal>
          </div>
          <dl className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {measures.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06} className="bg-paper p-7">
                <p className="label text-fern">0{i + 1}</p>
                <dt className="mt-8 font-display font-medium text-[1.4rem] leading-tight text-ink">
                  {m.name}
                </dt>
                <dd className="mt-3 text-[0.97rem] leading-relaxed text-faint">
                  {m.body}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
