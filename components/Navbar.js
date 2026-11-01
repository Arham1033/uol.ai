"use client";

// Client Component: it needs state for the mobile menu and the current
// path to highlight the active link.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import { semesters } from "@/data/semesters";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#semesters", label: "Semesters" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  // The menu counts as open only on the page where it was opened, so it
  // closes by itself after the visitor navigates somewhere else.
  const [openOn, setOpenOn] = useState(null);
  const menuOpen = openOn === pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-accent-500/30 bg-navy-950/95 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/15 text-accent-200 ring-1 ring-accent-500/40">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
              <path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-base font-semibold">
              {site.shortName}
            </span>
            <span className="block text-xs text-navy-200">
              University of Layyah
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                  active ? "bg-white/10 text-white" : "text-navy-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setOpenOn(menuOpen ? null : pathname)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-white/10 md:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto max-w-6xl space-y-4 px-4 py-4 sm:px-6"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-100 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="px-3 text-xs font-semibold uppercase tracking-wide text-navy-300">
                Jump to semester
              </p>
              <ul className="mt-2 grid grid-cols-4 gap-2">
                {semesters.map((semester) => (
                  <li key={semester.number}>
                    <Link
                      href={`/semester/${semester.number}`}
                      aria-label={`Semester ${semester.number}`}
                      className="block rounded-lg bg-white/10 py-2 text-center text-sm font-semibold text-white hover:bg-white/20"
                    >
                      {semester.number}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
