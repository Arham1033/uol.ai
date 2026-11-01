import Link from "next/link";
import HomeSearch from "@/components/HomeSearch";
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
import { site } from "@/data/site";

export default function HomePage() {
  const semesters = getSemesters();
  const searchable = getSubjectSummaries();
  const recent = getRecentSubjects(4).map(toSummary);

  return (
    <>
      {/* Hero */}
      <section className="hero-bg border-b border-accent-500/30 text-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">
            <span className="gold-rule" aria-hidden="true" />
            University of Layyah · Artificial Intelligence
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">
            Read study notes organised by semester and subject: handwritten
            pages and typed theory, right in your browser and comfortable on
            your phone.
          </p>

          <div className="mt-8 max-w-2xl">
            <HomeSearch subjects={searchable} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#semesters"
              className="rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-black/20 transition hover:bg-accent-200"
            >
              Choose your semester
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              About this library
            </Link>
          </div>
        </div>
      </section>

      {hasSampleData() && (
        <div className="border-b border-accent-200 bg-accent-50">
          <p className="mx-auto max-w-6xl px-4 py-3 text-sm text-accent-700 sm:px-6">
            <strong>Sample data:</strong> the subjects, course codes and
            instructor names shown here are examples only and are not the
            official University of Layyah curriculum.
          </p>
        </div>
      )}

      {/* Semesters */}
      <section
        id="semesters"
        aria-labelledby="semesters-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      >
        <h2
          id="semesters-heading"
          className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl"
        >
          Select your semester
        </h2>
        <span className="gold-rule mt-3" aria-hidden="true" />
        <p className="mt-2 text-slate-600">
          Choose a semester to see its subjects and notes.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {semesters.map((semester) => {
            const list = getSubjectsForSemester(semester.number);
            return (
              <li key={semester.number}>
                <SemesterCard
                  semester={semester}
                  subjectCount={list.length}
                  withNotesCount={
                    list.filter((s) => getMaterialTypes(s).length > 0).length
                  }
                />
              </li>
            );
          })}
        </ul>
      </section>

      {/* Recently added */}
      <section
        aria-labelledby="recent-heading"
        className="border-y border-slate-200 bg-white/70"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2
            id="recent-heading"
            className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            Recently added materials
          </h2>
          <span className="gold-rule mt-3" aria-hidden="true" />
          <p className="mt-2 text-slate-600">
            Subjects with notes you can start reading today.
          </p>

          {recent.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recent.map((subject) => (
                <li key={`${subject.semester}-${subject.slug}`}>
                  <SubjectCard subject={subject} showSemester />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
              No notes available yet.
            </p>
          )}
        </div>
      </section>

      {/* About */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      >
        <div className="grid gap-8 rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-6 sm:p-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2
              id="about-heading"
              className="font-serif text-2xl font-semibold text-navy-900"
            >
              About the library
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              This library collects notes for Artificial Intelligence students
              at the University of Layyah in one calm, searchable place. It
              grows semester by semester as new notes are written and shared,
              so every student can revise from the same organised source.
            </p>
            <p className="mt-3 leading-relaxed text-slate-700">
              It is an independent student project, not an official university
              website.
            </p>
          </div>
          <div className="flex items-start md:justify-end">
            <Link
              href="/about"
              className="rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-700"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
