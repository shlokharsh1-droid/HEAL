import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PulseMonitor from "@/components/PulseMonitor";
import PulseTimeline from "@/components/PulseTimeline";
import Reveal from "@/components/Reveal";
import { ArtifactStage, artifacts } from "@/components/Artifacts";
import { orgName } from "@/lib/config";

export const metadata: Metadata = {
  title: `${orgName} | Student-Led Health Innovation Nonprofit`,
  openGraph: {
    title: `${orgName} | Student-Led Health Innovation Nonprofit`,
    description:
      "HEAL chapters give high school students the funding, mentorship, and structure to build health technology, carry out research, enter competitions, and run community health programs.",
  },
};

const focusAreas = [
  {
    key: "technology" as const,
    name: "Technology",
    body: "Applications, devices, and data tools built around a specific need in patient care or public health.",
  },
  {
    key: "research" as const,
    name: "Research",
    body: "Original studies and structured literature reviews, written up carefully and submitted for review.",
  },
  {
    key: "competition" as const,
    name: "Competition",
    body: "Entries prepared for science fairs and national competitions, with the registration fees covered by us.",
  },
  {
    key: "community" as const,
    name: "Community health",
    body: "Workshops, outreach, and support programs that chapters run with partners in their own communities.",
  },
];

const phases = [
  {
    label: "Fall",
    title: "Define the project",
    body: "Teams form around problems their members care about, and each team writes down what a finished project will look like before the work begins.",
  },
  {
    label: "Winter",
    title: "Build a first version",
    body: "Teams produce a prototype, a draft paper, or a pilot session, and their mentors review it with them while there is still time to change course.",
  },
  {
    label: "Spring",
    title: "Finish and submit",
    body: "The work is completed and sent where it belongs, whether that is a journal, a competition, a partner organization, or the people it was built for.",
  },
  {
    label: "June",
    title: "Present at the showcase",
    body: "Each chapter presents its finished projects to members, advisors, and families at the end of the school year.",
  },
];

const founderSupport = [
  {
    title: "Nonprofit status",
    body: "Your chapter operates under our 501(c)(3) fiscal sponsorship from the first week, so it can accept tax-deductible donations and apply for grants without incorporating.",
  },
  {
    title: "Project funding",
    body: "Micro-grants for materials and hardware, along with coverage of competition entry fees.",
  },
  {
    title: "Launch kit",
    body: "A chapter constitution, an advisor pitch, recruitment materials, meeting agendas, and project worksheets.",
  },
  {
    title: "Mentorship",
    body: "Access to the researchers, physicians, and graduate students who advise HEAL project teams.",
  },
  {
    title: "Leadership record",
    body: "The title of Founding Chapter Director, and a recommendation letter at graduation describing what you built.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Landing: the heartbeat alone, filling the first screen */}
      <section className="relative h-[calc(100svh-4.25rem)] min-h-[30rem] overflow-hidden">
        <h1 className="sr-only">
          {orgName}, a student-led health innovation nonprofit
        </h1>
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 75% at 50% 45%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 75% at 50% 45%, black 55%, transparent 100%)",
          }}
        >
          <PulseMonitor centerRatio={0.46} ampRatio={0.26} maxAmp={190} />
        </div>

        <a
          href="#content"
          className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 rounded-full p-2 text-faint transition-colors hover:text-forest"
        >
          <span className="flex h-10 w-6 justify-center rounded-full border-2 border-current pt-2">
            <span className="scroll-dot h-2 w-1 rounded-full bg-current" />
          </span>
          <span className="label text-[0.62rem]">Scroll</span>
        </a>
      </section>

      {/* What HEAL is */}
      <section id="content" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.7fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="label text-fern">What {orgName} is</h2>
          </div>
          <div>
            <Reveal>
              <p className="font-serif text-[2rem] leading-[1.15] text-ink sm:text-[2.7rem]">
                {orgName} is a student-led nonprofit that helps high school
                students start chapters at their schools, where members work in
                teams on projects in health technology, research, competition,
                and community health.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-8 text-[1.1rem] leading-[1.75] text-ink/80 md:grid-cols-2 md:gap-12">
              <Reveal>
                <p>
                  We started {orgName} at Leland High School in San Jose in 2026.
                  Most of us had been in health clubs built around presentations
                  and awareness weeks, and although the people in those rooms
                  were curious and capable, the year usually ended without much
                  to show for their interest in medicine.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  We organized our club around projects instead, and once that
                  was working we set it up so that students at other schools
                  could do the same. Each chapter runs its own teams, while we
                  provide nonprofit status through our fiscal sponsor, funding
                  for materials and competitions, mentors, and the documents a
                  new chapter needs.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What members make */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">
                What members make
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[1.05rem] leading-relaxed text-faint">
                Members choose the problem they want to work on, and the focus
                area decides what a finished project looks like. The examples
                below show the kind of work each area tends to produce.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Artifact = artifacts[area.key];
              return (
                <Reveal key={area.key} delay={(i % 2) * 0.1} className="flex flex-col">
                  <ArtifactStage className="min-h-[25rem] flex-1">
                    <Artifact />
                  </ArtifactStage>
                  <div className="mt-5 flex gap-5 px-1">
                    <span className="label pt-1.5 text-fern">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-[1.8rem] leading-none text-ink">
                        {area.name}
                      </h3>
                      <p className="mt-2.5 max-w-md leading-relaxed text-faint">
                        {area.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12">
            <Link
              href="/goals"
              className="group inline-flex items-center gap-2 font-medium text-forest"
            >
              More about the focus areas
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* A chapter year */}
      <section className="grain border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display text-[2.6rem] text-ink sm:text-[3.6rem]">
                A chapter year
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[1.05rem] leading-relaxed text-faint">
                Every chapter follows the same calendar, which gives teams clear
                deadlines and means problems surface while there is still time to
                fix them.
              </p>
            </Reveal>
          </div>
          <div className="mt-14">
            <PulseTimeline phases={phases} />
          </div>
        </div>
      </section>

      {/* Starting a chapter */}
      <section
        className="on-night bg-night text-on-night"
        style={{
          backgroundImage:
            "radial-gradient(rgba(201, 226, 192, 0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="display text-[2.6rem] sm:text-[3.6rem]">
              Starting a chapter
            </h2>
            <p className="mt-7 max-w-lg text-[1.08rem] leading-relaxed text-on-night-faint">
              Founding a chapter means recruiting a team, keeping its projects on
              schedule, and working with a faculty advisor at your school. It
              takes about one to two hours a week, and we give founders the
              support listed here from the start so that their time goes toward
              their teams rather than paperwork.
            </p>
            <Link
              href="/start-a-chapter"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3.5 font-medium text-night transition-colors hover:bg-white"
            >
              How to start a chapter
              <ArrowUpRight
                size={18}
                aria-hidden
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>

          <ol>
            {founderSupport.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.06}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-night-line py-6 last:border-b"
              >
                <span className="label pt-1.5 text-leaf">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-[1.55rem] leading-tight text-on-night">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-on-night-faint">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
