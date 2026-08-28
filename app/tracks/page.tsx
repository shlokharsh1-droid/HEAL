import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Microscope,
  Trophy,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { orgName } from "@/lib/config";

export const metadata: Metadata = {
  title: "Tracks",
  description:
    "Every project at Health Tech Club runs on one of four tracks: building health technology, conducting research, entering competitions, or running community health programs.",
  openGraph: {
    title: `Tracks | ${orgName}`,
    description:
      "Members choose their own problem to work on and take it to a finished result in one of four tracks: Build, Research, Competition, or Community Impact.",
  },
};

const tracks = [
  {
    id: "build",
    icon: Wrench,
    name: "Build",
    lede: "For members who want to make things: apps, devices, AI tools, and data systems.",
    body: "Build teams take a health problem and engineer a working answer to it. That can mean software, hardware, machine learning, or the data plumbing that makes a clinic or program run better. No experience is required to join a build team, because every project is a chance to learn the tools while making something that matters.",
    examples: [
      "A medication-reminder app designed for elderly patients",
      "A low-cost sensor device for posture or tremor tracking",
      "An AI triage or symptom-education tool",
      "A data dashboard for a local health nonprofit",
    ],
    finished:
      "A finished Build project is a working product that has been deployed, documented, and presented at the showcase.",
  },
  {
    id: "research",
    icon: Microscope,
    name: "Research",
    lede: "For members drawn to the science itself: original studies and serious literature reviews.",
    body: "Research teams design and run original studies or conduct rigorous literature reviews, guided by mentors who do this professionally. Teams learn to frame a question, review what's known, collect and analyze data, and write it up to a real academic standard.",
    examples: [
      "An original survey study on teen health behaviors",
      "A systematic literature review on a treatment or intervention",
      "A data-analysis project using public health datasets",
      "A submission to a student research journal or conference",
    ],
    finished:
      "A finished Research project is a written paper that has been submitted to a journal, conference, or symposium instead of sitting in a folder.",
  },
  {
    id: "competition",
    icon: Trophy,
    name: "Competition",
    lede: "For members who do their best work with a deadline and a scoreboard.",
    body: "Competition teams enter their work into the science fairs and challenges where student health innovation gets judged for real: regional and state science fairs, the Conrad Challenge, HOSA competitive events, BioGENEius, and Synopsys. The national organization covers entry fees and helps teams prepare.",
    examples: [
      "A Conrad Challenge entry in the health and nutrition category",
      "A HOSA competitive event team",
      "A science fair project advancing to Synopsys or state level",
      "A BioGENEius biotech research submission",
    ],
    finished:
      "A finished Competition project is an entry that was actually submitted and judged, with feedback and results the team can build on next season.",
  },
  {
    id: "community",
    icon: HeartHandshake,
    name: "Community Impact",
    lede: "For members who want their work to reach people directly.",
    body: "Community Impact teams design and run programs that improve health where they live: education workshops, patient support programs, and initiatives that widen access to care. These projects are measured the honest way, by how many people they actually served.",
    examples: [
      "A health literacy workshop series for middle schoolers",
      "A patient companionship or support program with a local organization",
      "A blood drive, screening event, or vaccination outreach campaign",
      "A resource guide connecting families to low-cost care",
    ],
    finished:
      "A finished Community Impact project is a program that actually ran, with real participants, a partner organization, and outcomes you can count.",
  },
];

export default function TracksPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-dark">
          Tracks
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Every project runs on one of four tracks.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-faint">
          Members choose their own problem to work on, and the track simply
          shapes what a finished project looks like. Whatever the track, every
          project is expected to end the year as something you can demo,
          submit, or show to another person.
        </p>
      </section>

      {tracks.map((track, i) => (
        <section
          key={track.id}
          id={track.id}
          className={i % 2 === 0 ? "border-t border-line bg-sand" : ""}
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-flex rounded-md bg-teal-tint p-3 text-teal-dark">
                  <track.icon size={26} aria-hidden />
                </span>
                <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {track.name}
                </h2>
                <p className="mt-3 text-lg font-medium text-ink/85">
                  {track.lede}
                </p>
                <p className="mt-4 text-base leading-relaxed text-faint">
                  {track.body}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="rounded-lg border border-line bg-white p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-faint">
                    Example projects
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {track.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/85"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                        />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border-l-4 border-clay bg-clay-tint p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-clay-deeper">
                    What finished looks like
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">
                    {track.finished}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Pick your track at your own chapter
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
