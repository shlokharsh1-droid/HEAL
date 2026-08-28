import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Microscope,
  Trophy,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { orgName, tagline, STATS } from "@/lib/config";

export const metadata: Metadata = {
  title: `${orgName} | Student-Run Health Innovation Nonprofit`,
  description:
    "A student-run health innovation nonprofit where members build health technology, conduct research, enter competitions, and run community health programs. Start a chapter at your school.",
  openGraph: {
    title: `${orgName} | Student-Run Health Innovation Nonprofit`,
    description:
      "Most clubs end with meetings. We end with something real. Build health technology, conduct research, enter competitions, and run community health programs.",
  },
};

const tracks = [
  {
    icon: Wrench,
    name: "Build",
    description:
      "Apps, devices, AI tools, and data systems that solve real health problems.",
  },
  {
    icon: Microscope,
    name: "Research",
    description:
      "Original studies and literature reviews, submitted to journals and conferences.",
  },
  {
    icon: Trophy,
    name: "Competition",
    description:
      "Science fairs, the Conrad Challenge, HOSA, BioGENEius, and Synopsys.",
  },
  {
    icon: HeartHandshake,
    name: "Community Impact",
    description:
      "Health education, patient support programs, and health access initiatives.",
  },
];

const stats = [
  { value: STATS.chapters, label: "Chapters" },
  { value: STATS.members, label: "Members" },
  { value: STATS.projects, label: "Active projects" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
            {orgName} is a student-run health innovation nonprofit. Members
            build health technology, conduct research, enter competitions, and
            run community health programs, and they finish the year with work
            they can actually show people.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/start-a-chapter"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-clay-dark px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-clay-deeper"
            >
              Start a Chapter
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-line bg-white px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <p className="text-center text-sm text-faint">
            A 501(c)(3)-sponsored nonprofit · Student-led · Founded at Leland
            High School, San Jose, CA
          </p>
        </div>
      </div>

      {/* The problem we're solving */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The problem we&rsquo;re solving
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink/85">
            <p>
              Most health clubs run on lectures and awareness campaigns.
              Students show up, listen for an hour, maybe hang a poster, and go
              home. By the end of the year they have a good attendance record
              and not much else to show for it.
            </p>
            <p>
              We are built the opposite way. Every member joins a project team,
              picks a real problem in health, and spends the year working
              toward something finished, whether that turns out to be a working
              app, a submitted paper, a competition entry, or a program that
              served real people. The meetings exist to support the projects,
              not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Four tracks preview */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Four ways to do real work
            </h2>
            <Link
              href="/tracks"
              className="inline-flex items-center gap-1 text-sm font-semibold text-teal-dark hover:text-teal"
            >
              Explore the tracks
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track) => (
              <Link
                key={track.name}
                href="/tracks"
                className="group rounded-lg border border-line bg-white p-6 transition-colors hover:border-teal"
              >
                <span className="inline-flex rounded-md bg-teal-tint p-2.5 text-teal-dark">
                  <track.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink group-hover:text-teal-dark">
                  {track.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-faint">
                  {track.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <dl className="grid gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm uppercase tracking-wide text-faint">
                {stat.label}
              </dt>
              <dd className="font-serif text-5xl font-semibold text-teal">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Bring {orgName} to your school
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-faint">
            Found a chapter, lead a team, and leave your school with something
            it did not have before you got there. We will help you through
            every step of the launch.
          </p>
          <Link
            href="/start-a-chapter"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-clay-dark px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-clay-deeper"
          >
            Start a Chapter
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
