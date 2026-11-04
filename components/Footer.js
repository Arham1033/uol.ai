import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiFileText, FiHeart, FiInfo, FiLayers, FiMail, FiShield } from "react-icons/fi";
import Logo from "@/components/Logo";
import { emailLink, site, whatsappLink } from "@/data/site";

const linkClass = "group inline-flex items-center gap-2 transition hover:text-white";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-accent-500/60 bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Logo variant="dark" className="h-14 w-14" />
            <p className="font-serif text-lg font-semibold leading-tight text-white">{site.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
            Free study notes for everyone. A student-made collection, not an official university website and not
            endorsed by the University of Layyah.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-[#25d366] hover:text-white"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={emailLink()}
              aria-label="Send an email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-accent-500 hover:text-navy-950"
            >
              <FiMail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Explore" className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-200">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/#semesters" className={linkClass}>
                <FiLayers className="h-4 w-4 text-accent-200" aria-hidden="true" />
                All semesters
              </Link>
            </li>
            <li>
              <Link href="/about" className={linkClass}>
                <FiInfo className="h-4 w-4 text-accent-200" aria-hidden="true" />
                About the library
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>
                <FiMail className="h-4 w-4 text-accent-200" aria-hidden="true" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal" className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-200">Policies</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/privacy" className={linkClass}>
                <FiShield className="h-4 w-4 text-accent-200" aria-hidden="true" />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkClass}>
                <FiFileText className="h-4 w-4 text-accent-200" aria-hidden="true" />
                Terms and Conditions
              </Link>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <FaWhatsapp className="h-4 w-4 text-accent-200" aria-hidden="true" />
                {site.whatsappDisplay}
                <FiArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-navy-300 sm:px-6">
          <span>
            © {new Date().getFullYear()} {site.shortName}. Notes may contain mistakes; always check with your instructor.
          </span>
          <span className="inline-flex items-center gap-1.5">
            Made with <FiHeart className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" /> by {site.maintainerName}
          </span>
        </p>
      </div>
    </footer>
  );
}
