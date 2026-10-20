"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/goals", label: "Our Goals" },
  { href: "/start-a-chapter", label: "Start a Chapter" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // The bar is transparent at the top of the page and gains a background once
  // the visitor scrolls, so the hero reads as one uninterrupted surface.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="HEAL home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[0.92rem] transition-colors ${
                  active
                    ? "bg-sage font-medium text-forest"
                    : "text-ink/75 hover:bg-cream hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/start-a-chapter"
            className="group ml-3 inline-flex items-center gap-1.5 rounded-full bg-forest py-2 pl-4 pr-3 text-[0.92rem] font-medium text-white transition-colors hover:bg-forest-dark"
          >
            Start a Chapter
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full p-2.5 text-ink hover:bg-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-line bg-paper px-5 pb-7 pt-3 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="border-b border-line">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-4 font-display font-medium text-2xl ${
                      active ? "text-forest" : "text-ink"
                    }`}
                  >
                    {link.label}
                    {active && <span className="label text-fern">Current</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/start-a-chapter"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 font-medium text-white hover:bg-forest-dark"
          >
            Start a Chapter
            <ArrowUpRight size={18} aria-hidden />
          </Link>
        </nav>
      )}
    </header>
  );
}
