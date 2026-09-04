"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { orgName } from "@/lib/config";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/goals", label: "Our Goals" },
  { href: "/start-a-chapter", label: "Start a Chapter" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-forest font-serif text-sm font-semibold text-paper"
          >
            H
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            {orgName}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm transition-colors hover:text-forest ${
                pathname === link.href
                  ? "font-semibold text-forest"
                  : "text-ink/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/start-a-chapter"
            className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-forest-dark"
          >
            Start a Chapter
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-line bg-paper px-5 pb-6 pt-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-base ${
                    pathname === link.href
                      ? "bg-mist font-semibold text-forest-dark"
                      : "text-ink hover:bg-sage"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link
                href="/start-a-chapter"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-forest px-4 py-3 text-center text-base font-semibold text-white hover:bg-forest-dark"
              >
                Start a Chapter
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
