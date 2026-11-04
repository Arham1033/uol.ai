import { FaWhatsapp } from "react-icons/fa";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiEdit3,
  FiHeart,
  FiMail,
  FiMessageCircle,
  FiSend,
  FiUser,
} from "react-icons/fi";
import Breadcrumbs from "@/components/Breadcrumbs";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { emailLink, site, whatsappLink } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Message Muhammad Arham on WhatsApp or email about a mistake, a question or notes you would like to share.",
};

const reasons = [
  { Icon: FiAlertCircle, title: "Report a mistake", text: "Tell me the semester, subject and chapter, and what looks wrong." },
  { Icon: FiEdit3, title: "Not satisfied with a note?", text: "If something is unclear or missing, say so. I will improve it." },
  { Icon: FiHeart, title: "Share your notes", text: "Have good notes for a subject? Send them and they can help other students." },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-bg relative overflow-hidden border-b border-accent-500/30 text-white">
        <div className="hero-orb -left-16 top-0 h-64 w-64 bg-navy-500/40" aria-hidden="true" />
        <div className="hero-orb -right-16 -top-10 h-72 w-72 bg-accent-500/25" style={{ animationDelay: "-5s" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="[&_nav_ol]:text-navy-300 [&_a]:text-navy-200 [&_span]:text-white">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          </div>
          <div className="mt-6 flex items-center gap-5">
            <Logo variant="dark" className="hidden h-20 w-20 shrink-0 sm:block" />
            <div>
              <h1 className="font-serif text-3xl font-semibold sm:text-5xl">Contact</h1>
              <p className="mt-3 max-w-2xl text-lg text-navy-200">
                Found a mistake, have a question or want to share notes? Message me directly. Tap a button and the app opens
                with the message ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Person */}
          <Reveal className="lg:col-span-1">
            <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-accent-200 ring-1 ring-accent-500/40">
                <FiUser className="h-8 w-8" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-navy-900">{site.maintainerName}</h2>
              <p className="mt-1 text-sm text-slate-600">{site.maintainerRole}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                I write and maintain these notes. The best way to reach me is WhatsApp; email works too.
              </p>
              <dl className="mt-auto space-y-3 border-t border-slate-100 pt-5 text-sm">
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="h-4 w-4 shrink-0 text-[#128c4a]" aria-hidden="true" />
                  <dt className="sr-only">WhatsApp</dt>
                  <dd className="font-medium text-slate-800">{site.whatsappDisplay}</dd>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
                  <dt className="sr-only">Email</dt>
                  <dd className="break-all font-medium text-slate-800">{site.contactEmail}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Channels */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            <Reveal delay={100}>
              <a
                href={whatsappLink("Assalam o Alaikum, I am messaging from the AI Notes Library website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f7a40] to-[#128c4a] p-7 text-white shadow-lg shadow-emerald-900/20 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-900/30"
              >
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <span className="ping-ring absolute inset-0 rounded-2xl bg-white/20" aria-hidden="true" />
                  <FaWhatsapp className="relative h-8 w-8" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-serif text-2xl font-semibold">Chat on WhatsApp</h2>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50">
                  Opens a chat with me, with a message already written. Just press send.
                </p>
                <p className="mt-5 text-lg font-semibold tracking-wide">{site.whatsappDisplay}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">
                  Open WhatsApp
                  <FiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <a
                href={emailLink("AI Notes Library", "Assalam o Alaikum,\n\nI am writing about the AI Notes Library.\n\nSemester / subject / chapter (if it is about a note):\n\nMy message:\n")}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-7 text-white shadow-lg shadow-navy-900/20 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/30"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent-200">
                  <FiSend className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-serif text-2xl font-semibold">Send an email</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
                  Opens your email app with my address and a short template filled in.
                </p>
                <p className="mt-5 break-all text-base font-semibold">{site.contactEmail}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent-200">
                  Write an email
                  <FiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            </Reveal>

            <Reveal className="sm:col-span-2" delay={300}>
              <p className="flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 px-5 py-4 text-sm leading-relaxed text-accent-700">
                <FiMessageCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  If a button does not open anything, copy the number or the email address above. On a computer,
                  WhatsApp opens in WhatsApp Web or the desktop app.
                </span>
              </p>
            </Reveal>
          </div>
        </div>

        {/* Reasons */}
        <section aria-labelledby="reasons-heading" className="mt-14">
          <Reveal>
            <h2 id="reasons-heading" className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
              What you can write to me about
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
          </Reveal>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {reasons.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl hover:shadow-navy-900/10">
                  <span className="icon-pop flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 group-hover:bg-navy-900 group-hover:text-accent-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-6 text-sm text-slate-600">
              When you report a problem with a note, please include the semester, subject and chapter so it can be found quickly.
            </p>
          </Reveal>
        </section>
      </div>
    </>
  );
}
