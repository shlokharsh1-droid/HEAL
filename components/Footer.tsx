import Link from "next/link";
import { Mail } from "lucide-react";
import { orgName, contactEmail, fiscalSponsorshipStatement } from "@/lib/config";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/goals", label: "Our Goals" },
  { href: "/start-a-chapter", label: "Start a Chapter" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-sage">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-forest font-serif text-sm font-semibold text-paper"
              >
                H
              </span>
              <span className="font-serif text-lg font-semibold text-ink">
                {orgName}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-faint">
              A student-led health innovation nonprofit supporting high school
              chapters that develop health technology, conduct research, and
              deliver community health programs.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-faint">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/80 hover:text-forest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-faint">
              Contact
            </h2>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink/80 hover:text-forest"
            >
              <Mail size={16} aria-hidden />
              {contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-faint">
            {fiscalSponsorshipStatement}
          </p>
          <p className="mt-2 text-xs text-faint">
            Copyright {new Date().getFullYear()} {orgName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
