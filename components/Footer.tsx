import Link from "next/link";
import { Mail } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import {
  orgName,
  contactEmail,
  instagramUrl,
  fiscalSponsorshipStatement,
} from "@/lib/config";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/tracks", label: "Tracks" },
  { href: "/start-a-chapter", label: "Start a Chapter" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-lg font-semibold text-ink">
              {orgName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-faint">
              {orgName} is a student-run health innovation nonprofit whose
              members build health technology, conduct research, enter
              competitions, and run community health programs.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/80 hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-sm text-ink/80 hover:text-teal"
            >
              <Mail size={16} aria-hidden />
              {contactEmail}
            </a>
            <a
              href={instagramUrl}
              className="inline-flex items-center gap-2 text-sm text-ink/80 hover:text-teal"
            >
              <InstagramIcon size={16} />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-faint">
            {fiscalSponsorshipStatement}
          </p>
          <p className="mt-2 text-xs text-faint">
            © {new Date().getFullYear()} {orgName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
