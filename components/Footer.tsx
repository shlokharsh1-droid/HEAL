import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import {
  contactEmail,
  chapterMailtoHref,
  fiscalSponsorshipStatement,
  orgName,
} from "@/lib/config";

const columns = [
  {
    heading: "Organization",
    links: [
      { href: "/about", label: "About" },
      { href: "/goals", label: "Our Goals" },
      { href: "/support", label: "Support" },
    ],
  },
  {
    heading: "Get involved",
    links: [
      { href: "/start-a-chapter", label: "Start a Chapter" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="grain overflow-hidden border-t border-line bg-cream">
      {/* Closing invitation shown at the end of every page */}
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="display max-w-2xl text-[2.6rem] text-ink sm:text-[3.6rem]">
              Start a chapter
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-faint">
              If you would like to start a chapter, write to us with your name,
              your school, and a few sentences about why, and we will reply with
              the next steps and the materials to get started.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={chapterMailtoHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-medium text-white transition-colors hover:bg-forest-dark"
              >
                Email us about a chapter
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="break-all px-2 text-[0.95rem] text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:pt-12">
            {columns.map((col) => (
              <div key={col.heading}>
                <h2 className="label text-faint">{col.heading}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.98rem] text-ink/80 transition-colors hover:text-forest"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Oversized wordmark with the heartbeat running through it */}
      <div aria-hidden className="relative mx-auto max-w-7xl select-none px-5 sm:px-8">
        <p className="whitespace-nowrap font-serif text-[calc((100vw-2.5rem)*0.555)] leading-[0.78] tracking-[-0.02em] text-forest/[0.09] sm:text-[calc((100vw-4rem)*0.555)] xl:text-[42rem]">
          HEAL
        </p>
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="absolute inset-x-5 top-1/2 h-1/2 w-[calc(100%-2.5rem)] -translate-y-1/2 text-fern/40 sm:inset-x-8 sm:w-[calc(100%-4rem)]"
        >
          <path
            d="M0 110 H430 L455 110 L470 92 L485 110 L505 110 L525 20 L548 175 L566 110 L605 110 L630 82 L660 110 H1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Logo />
            <p className="mt-4 text-xs leading-relaxed text-faint">
              {fiscalSponsorshipStatement}
            </p>
          </div>
          <p className="text-xs text-faint">
            Copyright {new Date().getFullYear()} {orgName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
