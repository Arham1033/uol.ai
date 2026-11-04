import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiHelpCircle,
  FiImage,
  FiInfo,
  FiLayers,
  FiShield,
  FiSmartphone,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import AnimatedNumber from "@/components/AnimatedNumber";
import HeroNetwork from "@/components/HeroNetwork";
import HomeSearch from "@/components/HomeSearch";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import SemesterCard from "@/components/SemesterCard";
import SubjectCard from "@/components/SubjectCard";
import {
  getMaterialTypes,
  getRecentSubjects,
  getSemesters,
  getSubjectSummaries,
  getSubjectsForSemester,
  hasSampleData,
  toSummary,
} from "@/lib/library";
import { getLibraryStats } from "@/lib/stats";
import { site } from "@/data/site";

// Each hero line fades up one after the other.
const rise = (delay) => ({ animation: "fade-up 0.8s cubic-bezier(0.22,0.7,0.2,1) both", animationDelay: `${delay}ms` });

const features = [
  { Icon: FiSmartphone, title: "Made for your phone", text: "Notes are laid out to read comfortably on a small screen, with search and a sidebar for chapters." },
  { Icon: FiHelpCircle, title: "Questions solved", text: "Exercises, discussion questions and scenarios come with answers, so you can check your own." },
  { Icon: FiImage, title: "Original diagrams", text: "Models, cycles and screenshots are shown as they appear in the course material." },
  { Icon: FiUsers, title: "Free for everyone", text: "No sign-up and no fee. Read, share and print the notes for your studies." },
];

export default function HomePage() {
  const semesters = getSemesters();
  const searchable = getSubjectSummaries();
  const recent = getRecentSubjects(4).map(toSummary);
  const stats = getLibraryStats();

  const statItems = [
    { Icon: FiBookOpen, value: stats.subjects, label: "Subjects with notes" },
    { Icon: FiLayers, value: stats.chapters, label: "Chapters and lessons" },
    { Icon: FiHelpCircle, value: stats.solved, label: "Solved questions" },
    { Icon: FiImage, value: stats.pictures, label: "Pictures and diagrams" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden border-b border-accent-500/30 text-white">
        <div className="hero-orb -left-24 top-10 h-72 w-72 bg-navy-500/40" aria-hidden="true" />
        <div className="hero-orb -right-20 -top-10 h-80 w-80 bg-accent-500/25" style={{ animationDelay: "-6s" }} aria-hidden="true" />
        <HeroNetwork className="hero-float pointer-events-none absolute -right-10 top-8 hidden h-[26rem] w-[34rem] opacity-70 lg:block" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          <p style={rise(0)} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">
            <span className="gold-rule" aria-hidden="true" />
            University of Layyah · Artificial Intelligence
          </p>
          <div style={rise(120)} className="mt-6 flex items-center gap-5">
            <Logo variant="dark" className="hidden h-24 w-24 shrink-0 sm:block" />
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] sm:text-6xl">{site.name}</h1>
          </div>
          <p style={rise(240)} className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">
            Free study notes organised by semester and subject: typed theory, solved questions and diagrams, comfortable to
            read on your phone.
          </p>

          <div style={rise(360)} className="mt-8 max-w-2xl">
            <HomeSearch subjects={searchable} />
          </div>

          <div style={rise(480)} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#semesters"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-accent-200"
            >
              Choose your semester
              <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              <FiInfo className="h-4 w-4" aria-hidden="true" />
              About this library
            </Link>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section aria-label="The library in numbers" className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-navy-900/10 sm:p-5 lg:grid-cols-4">
          {statItems.map(({ Icon, value, label }, i) => (
            <Reveal as="li" key={label} delay={i * 90} className="flex items-center gap-3 rounded-xl px-2 py-1 sm:px-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-200 ring-1 ring-accent-500/40">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-serif text-2xl font-semibold leading-none text-navy-900">
                  <AnimatedNumber value={value} />
                </span>
                <span className="mt-1 block text-xs text-slate-500">{label}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      {hasSampleData() && (
        <div className="mt-10 border-y border-accent-200 bg-accent-50">
          <p className="mx-auto max-w-6xl px-4 py-3 text-sm text-accent-700 sm:px-6">
            <strong>Sample data:</strong> the subjects, course codes and instructor names shown here are examples only and
            are not the official University of Layyah curriculum.
          </p>
        </div>
      )}

      {/* Semesters */}
      <section id="semesters" aria-labelledby="semesters-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 id="semesters-heading" className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
            Select your semester
          </h2>
          <span className="gold-rule mt-3" aria-hidden="true" />
          <p className="mt-2 text-slate-600">Choose a semester to see its subjects and notes.</p>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {semesters.map((semester, i) => {
            const list = getSubjectsForSemester(semester.number);
            return (
              <Reveal as="li" key={semester.number} delay={(i % 4) * 90}>
                <SemesterCard
                  semester={semester}
                  subjectCount={list.length}
                  withNotesCount={list.filter((s) => getMaterialTypes(s).length > 0).length}
                />
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* Recently added */}
      <section aria-labelledby="recent-heading" className="border-y border-slate-200 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal>
            <h2 id="recent-heading" className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
              Recently added materials
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
            <p className="mt-2 text-slate-600">Subjects with notes you can start reading today.</p>
          </Reveal>

          {recent.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recent.map((subject, i) => (
                <Reveal as="li" key={`${subject.semester}-${subject.slug}`} delay={i * 90}>
                  <SubjectCard subject={subject} showSemester />
                </Reveal>
              ))}
            </ul>
          ) : (
            <p className="mt-8 rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
              No notes available yet.
            </p>
          )}
        </div>
      </section>

      {/* Why use it */}
      <section aria-labelledby="why-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 id="why-heading" className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
            Built for revision
          </h2>
          <span className="gold-rule mt-3" aria-hidden="true" />
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl hover:shadow-navy-900/10">
                <span className="icon-pop flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 group-hover:bg-navy-900 group-hover:text-accent-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <Reveal variant="scale">
          <div className="grid gap-8 rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-6 sm:p-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 id="about-heading" className="font-serif text-2xl font-semibold text-navy-900">
                About the library
              </h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                This library collects notes for Artificial Intelligence students at the University of Layyah in one calm,
                searchable place. It grows semester by semester as new notes are written and shared, so every student can
                revise from the same organised source.
              </p>
              <p className="mt-3 flex items-start gap-2 leading-relaxed text-slate-700">
                <FiShield className="mt-1 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
                It is an independent student project, not an official university website. Anyone may use the notes.
              </p>
            </div>
            <div className="flex items-start gap-3 md:flex-col md:items-end md:justify-start">
              <Link
                href="/about"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-700"
              >
                Read more
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-2.5 text-sm font-semibold text-navy-800 transition hover:-translate-y-0.5 hover:border-navy-400 hover:bg-white"
              >
                <FiZap className="h-4 w-4 text-accent-600" aria-hidden="true" />
                Contact
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
