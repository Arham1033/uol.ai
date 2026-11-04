"use client";

// Client Component: it needs state for the mobile menu, the current
// path to highlight the active link, and the scroll position for the shadow.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiBookOpen, FiHome, FiInfo, FiLayers, FiMail, FiMenu, FiX } from "react-icons/fi";
import Logo from "@/components/Logo";
import { site } from "@/data/site";
import { semesters } from "@/data/semesters";

const navLinks = [
  { href: "/", label: "Home", Icon: FiHome },
  { href: "/#semesters", label: "Semesters", Icon: FiLayers },
  { href: "/about", label: "About", Icon: FiInfo },
  { href: "/contact", label: "Contact", Icon: FiMail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // The menu counts as open only on the page where it was opened, so it
  // closes by itself after the visitor navigates somewhere else.
  const [openOn, setOpenOn] = useState(null);
  const menuOpen = openOn === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-accent-500/30 bg-navy-950/95 text-white backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
          <Logo
            variant="dark"
            className="h-11 w-11 transition duration-300 group-hover:scale-105 group-hover:-rotate-3"
          />
          <span className="leading-tight">
            <span className="block font-serif text-base font-semibold">{site.shortName}</span>
            <span className="block text-xs text-navy-200">University of Layyah</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label, Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                  active ? "bg-white/10 text-white" : "text-navy-100"
                }`}
              >
                <Icon className="h-4 w-4 text-accent-200 transition group-hover:scale-110" aria-hidden="true" />
                {label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-px h-0.5 origin-left rounded bg-accent-500 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
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
          {menuOpen ? <FiX className="h-6 w-6" aria-hidden="true" /> : <FiMenu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="menu-enter border-t border-white/10 md:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-6xl space-y-4 px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {navLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-navy-100 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-accent-200" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-wide text-navy-300">
                <FiBookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                Jump to semester
              </p>
              <ul className="mt-2 grid grid-cols-4 gap-2">
                {semesters.map((semester) => (
                  <li key={semester.number}>
                    <Link
                      href={`/semester/${semester.number}`}
                      aria-label={`Semester ${semester.number}`}
                      className="block rounded-lg bg-white/10 py-2 text-center text-sm font-semibold text-white transition hover:bg-accent-500 hover:text-navy-950"
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
