import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-accent-500/60 bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy-300">
            A student-made collection of study notes. This is not an official
            university website and is not endorsed by the University of Layyah.
          </p>
        </div>

        <nav aria-label="Explore">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-200">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-navy-200">
            <li>
              <Link href="/" className="hover:text-white hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#semesters"
                className="hover:text-white hover:underline"
              >
                All semesters
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Information">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-200">Information</p>
          <ul className="mt-3 space-y-2 text-sm text-navy-200">
            <li>
              <Link
                href="/about"
                className="hover:text-white hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-white hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-navy-300 sm:px-6">
          © {new Date().getFullYear()} {site.shortName}. Notes are shared for
          study purposes and may contain mistakes; always check with your
          instructor.
        </p>
      </div>
    </footer>
  );
}
