import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Microscope,
  Trophy,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { orgName, STATS } from "@/lib/config";

export const metadata: Metadata = {
  title: `${orgName} | Student-Led Health Innovation Nonprofit`,
  description:
    "HEAL is a student-led health innovation nonprofit. Our chapters give high school students the funding, mentorship, and structure to develop health technology, conduct original research, compete in national programs, and deliver community health initiatives.",
  openGraph: {
    title: `${orgName} | Student-Led Health Innovation Nonprofit`,
    description:
      "A student-led nonprofit supporting high school chapters in health technology, research, competition, and community health work.",
  },
};

const focusAreas = [
  {
    icon: Cpu,
    name: "Technology",
    description:
      "Members design applications, devices, and data tools that address a documented need in patient care or public health.",
  },
  {
    icon: Microscope,
    name: "Research",
    description:
      "Teams conduct original studies and structured literature reviews under the guidance of practicing researchers.",
  },
  {
    icon: Trophy,
    name: "Competition",
    description:
      "Members prepare entries for science fairs and national programs, with registration costs covered by the organization.",
  },
  {
    icon: HeartHandshake,
    name: "Community Health",
    description:
      "Chapters design and deliver education, access, and patient support programs within their own communities.",
  },
];

const stats = [
  { value: STATS.chapters, label: "Chapters" },
  { value: STATS.members, label: "Student members" },
  { value: STATS.projects, label: "Projects in progress" },
];

const glance = [
  { label: "Founded", value: "2026, San Jose, California" },
  { label: "Structure", value: "Student-led chapters, national support" },
  { label: "Status", value: "501(c)(3) fiscally sponsored nonprofit" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Students advancing health through technology, research, and
              service.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
              {orgName} is a student-led health innovation nonprofit. Our
              chapters give high school students the funding, mentorship, and
              structure to complete substantive work in health and medicine
              before they graduate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start-a-chapter"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-forest-dark"
              >
                Start a Chapter
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-line bg-white px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-forest hover:text-forest"
              >
                Learn about HEAL
              </Link>
            </div>
          </div>

          <aside className="lg:pt-3">
            <div className="rounded-lg border border-line bg-white p-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-faint">
                At a glance
              </h2>
              <dl className="mt-5 divide-y divide-line">
                {glance.map((item) => (
                  <div key={item.label} className="py-3.5 first:pt-0 last:pb-0">
                    <dt className="text-xs uppercase tracking-wide text-faint">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium leading-relaxed text-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <p className="text-center text-sm text-faint">
            A 501(c)(3)-sponsored nonprofit · Student-led · Founded at Leland
            High School in San Jose, California
          </p>
        </div>
      </div>

      {/* Why HEAL exists */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest">
              Why we exist
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Interest in medicine deserves somewhere to go.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink/85">
            <p>
              Most high school health organizations are built around meetings.
              Members attend presentations, participate in awareness campaigns,
              and reach the end of the year with very little evidence of what
              they produced. The interest students bring is genuine, but the
              structure gives them nowhere to apply it.
            </p>
            <p>
              {orgName} is built around projects instead. Every member joins a
              team, selects a problem in health or medicine, and works toward a
              defined outcome across the school year. That outcome may be a
              functioning application, a submitted research paper, a
              competition entry, or a community program with documented
              results. Meetings exist to support that work rather than to
              replace it.
            </p>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-t border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                Focus areas
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Where our members do their work
              </h2>
            </div>
            <Link
              href="/goals"
              className="inline-flex items-center gap-1 text-sm font-semibold text-forest hover:text-forest-dark"
            >
              See our goals and focus areas
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <Link
                key={area.name}
                href="/goals"
                className="group rounded-lg border border-line bg-white p-6 transition-colors hover:border-forest"
              >
                <span className="inline-flex rounded-md bg-mist p-2.5 text-forest">
                  <area.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink group-hover:text-forest">
                  {area.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-faint">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statement band */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <blockquote className="border-l-4 border-fern pl-6 sm:pl-8">
          <p className="max-w-3xl font-serif text-2xl font-medium leading-snug text-ink sm:text-3xl">
            A student who has completed a study, built a working tool, or run a
            health program has done something a transcript cannot summarize.
            Our purpose is to make that outcome available at any school that
            wants it.
          </p>
        </blockquote>
      </section>

      {/* Impact statistics */}
      <section className="border-y border-line bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <dl className="grid gap-10 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1.5">
                <dt className="text-sm uppercase tracking-wide text-faint">
                  {stat.label}
                </dt>
                <dd className="font-serif text-5xl font-semibold text-forest">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Bring {orgName} to your school
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-faint">
          Founding a chapter takes one student who is willing to organize it.
          We provide the nonprofit infrastructure, the funding, and the
          materials, and we stay involved through your first full semester.
        </p>
        <Link
          href="/start-a-chapter"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-forest px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-forest-dark"
        >
          Start a Chapter
          <ArrowRight size={18} aria-hidden />
        </Link>
      </section>
    </>
  );
}
