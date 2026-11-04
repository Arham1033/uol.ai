import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiBookOpen,
  FiCheckCircle,
  FiChevronRight,
  FiEdit3,
  FiFileText,
  FiGlobe,
  FiHelpCircle,
  FiImage,
  FiLayers,
  FiPieChart,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import AnimatedNumber from "@/components/AnimatedNumber";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BarList, ColumnChart, DonutChart } from "@/components/charts";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { getLibraryStats } from "@/lib/stats";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
  description: "What the AI Notes Library is, how it is organised and how much it contains, with charts and diagrams drawn from the real data.",
};

const steps = [
  { Icon: FiFileText, title: "Course material", text: "Lecture slides, textbook chapters, handouts and lab files for the subject." },
  { Icon: FiEdit3, title: "Typed notes", text: "Rewritten in plain language and arranged chapter by chapter, with the original diagrams." },
  { Icon: FiHelpCircle, title: "Solved questions", text: "Every exercise and discussion question is answered, and scenarios are added to explain the key topics." },
  { Icon: FiGlobe, title: "Published free", text: "Put online by semester and subject, free for anyone to read and share." },
];

const levels = [
  { name: "Library", detail: "One website" },
  { name: "Semesters", detail: "8 semesters" },
  { name: "Subjects", detail: "Each with its instructor" },
  { name: "Chapters or units", detail: "In teaching order" },
  { name: "Notes", detail: "Text, tables, code, diagrams, Q&A" },
];

const principles = [
  { Icon: FiTarget, title: "Clear and focused", text: "Only subject content: no filler, no repeated material." },
  { Icon: FiCheckCircle, title: "Questions answered", text: "Questions come with worked answers, so you can check your own." },
  { Icon: FiUsers, title: "Open to everyone", text: "No account and no fee. Anyone may read, print and share." },
  { Icon: FiShield, title: "Honest about limits", text: "These are student notes. Check important details with your instructor." },
];

export default function AboutPage() {
  const stats = getLibraryStats();

  const cards = [
    { Icon: FiBookOpen, value: stats.subjects, label: "Subjects with notes" },
    { Icon: FiLayers, value: stats.chapters, label: "Chapters and lessons" },
    { Icon: FiHelpCircle, value: stats.solved, label: "Solved questions and scenarios" },
    { Icon: FiImage, value: stats.pictures, label: "Pictures and diagrams" },
    { Icon: FiFileText, value: stats.words, label: "Words of notes" },
    { Icon: FiBarChart2, value: stats.readingHours, label: "Hours of reading", suffix: "+" },
  ];

  const perSemester = stats.perSemester.map((s) => ({ label: `S${s.semester}`, value: s.subjects }));
  const solvedBySubject = [...stats.perSubject].filter((s) => s.solved > 0).sort((a, b) => b.solved - a.solved).map((s) => ({ label: s.name, value: s.solved }));
  const perSubject = stats.perSubject.map((s) => ({ label: s.name, value: s.words }));
  const totalMix = stats.mix.reduce((sum, m) => sum + m.value, 0);

  return (
    <>
      {/* Header */}
      <section className="hero-bg relative overflow-hidden border-b border-accent-500/30 text-white">
        <div className="hero-orb -left-16 top-0 h-64 w-64 bg-navy-500/40" aria-hidden="true" />
        <div className="hero-orb -right-16 -top-10 h-72 w-72 bg-accent-500/25" style={{ animationDelay: "-5s" }} aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="[&_nav_ol]:text-navy-300 [&_a]:text-navy-200 [&_span]:text-white">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          </div>
          <div className="mt-6 flex items-center gap-5">
            <Logo variant="dark" className="hidden h-24 w-24 shrink-0 sm:block" />
            <div>
              <h1 className="font-serif text-3xl font-semibold sm:text-5xl">About the library</h1>
              <p className="mt-3 max-w-2xl text-lg text-navy-200">
                {site.name} is a student-made collection of study notes for Artificial Intelligence students. Everything on this
                page is counted from the notes themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6">
        {/* Why */}
        <section aria-labelledby="why">
          <div className="grid gap-8 md:grid-cols-5">
            <Reveal className="md:col-span-3">
              <h2 id="why" className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
                Why this library exists
              </h2>
              <span className="gold-rule mt-3" aria-hidden="true" />
              <p className="mt-4 leading-relaxed text-slate-700">
                Good notes are scattered across phones, notebooks and chat groups. This library brings them together, organised
                by semester and subject, so you can find what you need and read it comfortably, especially on a phone.
              </p>
              <p className="mt-3 leading-relaxed text-slate-700">
                It grows every semester. Each subject follows its course in teaching order, with the original diagrams, solved
                questions and short scenarios that explain the important topics.
              </p>
              <p className="mt-3 flex items-start gap-2 leading-relaxed text-slate-700">
                <FiShield className="mt-1 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
                <span>
                  It is an independent project by {site.maintainerName}. It is <strong>not</strong> an official website of the
                  University of Layyah. The notes are free for anyone to use.
                </span>
              </p>
            </Reveal>
            <Reveal variant="right" className="md:col-span-2">
              <ul className="grid grid-cols-2 gap-3">
                {principles.map(({ Icon, title, text }) => (
                  <li key={title} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-lg">
                    <span className="icon-pop flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-accent-200">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-navy-900">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Numbers */}
        <section aria-labelledby="numbers">
          <Reveal>
            <h2 id="numbers" className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
              The library in numbers
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {cards.map(({ Icon, value, label, suffix }, i) => (
              <Reveal as="li" key={label} delay={(i % 3) * 90}>
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl hover:shadow-navy-900/10">
                  <span className="icon-pop flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-200 ring-1 ring-accent-500/40">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-serif text-3xl font-semibold leading-none text-navy-900">
                      <AnimatedNumber value={value} suffix={suffix ?? ""} />
                    </span>
                    <span className="mt-1.5 block text-sm text-slate-500">{label}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Charts */}
        <section aria-labelledby="charts" className="space-y-6">
          <Reveal>
            <h2 id="charts" className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
              What the notes contain
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-navy-900">
                <FiBarChart2 className="h-5 w-5 text-accent-600" aria-hidden="true" />
                Subjects with notes in each semester
              </h3>
              <p className="mb-6 mt-1 text-sm text-slate-500">Later semesters will fill in as their notes are added.</p>
              <ColumnChart items={perSemester} />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-navy-900">
                <FiPieChart className="h-5 w-5 text-accent-600" aria-hidden="true" />
                What the notes are made of
              </h3>
              <p className="mb-6 mt-1 text-sm text-slate-500">Share of each kind of content block.</p>
              <DonutChart items={stats.mix} centerValue={totalMix.toLocaleString("en-US")} centerLabel="content blocks" />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-navy-900">
              <FiFileText className="h-5 w-5 text-accent-600" aria-hidden="true" />
              Length of the typed notes by subject
            </h3>
            <p className="mb-6 mt-1 text-sm text-slate-500">Number of words in each subject&rsquo;s notes.</p>
            <BarList items={perSubject} unit=" words" />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-navy-900">
              <FiHelpCircle className="h-5 w-5 text-accent-600" aria-hidden="true" />
              Solved questions and scenarios by subject
            </h3>
            <p className="mb-6 mt-1 text-sm text-slate-500">Questions, worked examples and scenarios that come with an answer.</p>
            <BarList items={solvedBySubject} />
          </div>
        </section>

        {/* Diagrams */}
        <section aria-labelledby="diagrams" className="space-y-8">
          <Reveal>
            <h2 id="diagrams" className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
              How the notes are made
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
          </Reveal>

          <ol className="grid gap-4 md:grid-cols-4">
            {steps.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 120} className="relative">
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="icon-pop flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-accent-200 ring-1 ring-accent-500/40">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-serif text-3xl font-semibold text-navy-100">{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-accent-500 text-navy-950 shadow md:flex">
                    <FiChevronRight className="h-4 w-4" />
                  </span>
                )}
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy-900">How the library is organised</h3>
              <p className="mt-1 text-sm text-slate-500">Every note can be reached in a few taps, from the semester down to the chapter.</p>
              <ol className="mt-6 grid gap-3 md:grid-cols-5">
                {levels.map((level, i) => (
                  <li key={level.name} className="relative">
                    <div
                      className="rounded-2xl p-4 text-center text-white shadow-md"
                      style={{ background: `linear-gradient(135deg, #131e36, ${["#1c2b48", "#283a5f", "#35497a", "#976d1a"][Math.min(i, 3)]})` }}
                    >
                      <p className="font-serif text-lg font-semibold">{level.name}</p>
                      <p className="mt-1 text-xs text-navy-100">{level.detail}</p>
                    </div>
                    {i < levels.length - 1 && (
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="mx-auto mt-2 h-6 w-6 rotate-90 text-accent-500 md:absolute md:-right-4 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:rotate-0">
                        <path className="flow-line" d="M3 12h16m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

        {/* Call to action */}
        <Reveal variant="scale">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-6 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy-900">Found a mistake, or want to help?</h2>
              <p className="mt-2 max-w-xl text-slate-700">
                Tell me what is wrong or missing, or send your own notes. If you are not satisfied with something here, I want to hear about it.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-shine group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-700"
            >
              Contact me
              <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
