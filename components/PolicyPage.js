import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiClock, FiMail } from "react-icons/fi";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { emailLink, site, whatsappLink } from "@/data/site";

// Shared layout for the Privacy Policy and the Terms and Conditions.
//   sections: [{ id, title, Icon, body: <JSX> }]
// A contents list sits beside the text on wide screens, and a "contact me" card closes the page.
export default function PolicyPage({ title, Icon, intro, sections }) {
  return (
    <>
      <section className="hero-bg relative overflow-hidden border-b border-accent-500/30 text-white">
        <div className="hero-orb -right-16 -top-16 h-64 w-64 bg-accent-500/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="[&_nav_ol]:text-navy-300 [&_a]:text-navy-200 [&_span]:text-white">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
          </div>
          <div className="mt-6 flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-200 ring-1 ring-accent-500/40">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h1 className="font-serif text-3xl font-semibold sm:text-5xl">{title}</h1>
              <p className="mt-3 max-w-2xl text-lg text-navy-200">{intro}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-navy-100">
                <FiClock className="h-3.5 w-3.5" aria-hidden="true" />
                Last updated {site.policiesUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">On this page</p>
            <ol className="mt-3 space-y-1 border-l border-slate-200 text-sm">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-slate-600 transition hover:border-accent-500 hover:text-navy-900"
                  >
                    {i + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="min-w-0 space-y-6">
          {sections.map((section, i) => (
            <Reveal as="section" key={section.id} id={section.id} aria-labelledby={`${section.id}-h`}>
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:border-accent-500/50 hover:shadow-lg hover:shadow-navy-900/5 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="icon-pop flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-200 ring-1 ring-accent-500/40">
                    <section.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 id={`${section.id}-h`} className="font-serif text-xl font-semibold text-navy-900 sm:text-2xl">
                    {i + 1}. {section.title}
                  </h2>
                </div>
                <div className="mt-4 space-y-3 leading-relaxed text-slate-700 [&_a]:font-medium [&_a]:text-navy-600 [&_a]:underline [&_a:hover]:text-navy-800 [&_li]:pl-1 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:marker:text-accent-600">
                  {section.body}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal variant="scale">
            <div className="rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50 to-white p-6 sm:p-8">
              <h2 className="font-serif text-xl font-semibold text-navy-900 sm:text-2xl">Questions or concerns?</h2>
              <p className="mt-2 text-slate-700">
                You can reach {site.maintainerName} directly. Messages are read personally and answered as soon as possible.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(`Assalam o Alaikum, I have a question about the ${title.toLowerCase()} of the AI Notes Library.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#128c4a] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f7a40]"
                >
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={emailLink(`Question about the ${title}`)}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 transition hover:-translate-y-0.5 hover:border-navy-400"
                >
                  <FiMail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold text-navy-700 hover:text-navy-900"
                >
                  Open the contact page
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
