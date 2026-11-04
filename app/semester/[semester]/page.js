import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SubjectBrowser from "@/components/SubjectBrowser";
import {
  getSemester,
  getSemesters,
  getSubjectSummaries,
  getSubjectsForSemester,
  hasSampleData,
} from "@/lib/library";
import { pluralize } from "@/lib/helpers";

// Only the semesters in data/semesters.js exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getSemesters().map((s) => ({ semester: String(s.number) }));
}

export async function generateMetadata({ params }) {
  const { semester: value } = await params;
  const semester = getSemester(value);
  if (!semester) return { title: "Semester not found" };
  return {
    title: `Semester ${semester.number}`,
    description: semester.description,
  };
}

export default async function SemesterPage({ params }) {
  const { semester: value } = await params;
  const semester = getSemester(value);
  if (!semester) notFound();

  const subjects = getSubjectsForSemester(semester.number);
  const summaries = getSubjectSummaries(subjects);
  const semesters = getSemesters();

  return (
    <>
      <section className="border-b border-slate-200 bg-linear-to-b from-white to-navy-50/60">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: `Semester ${semester.number}` },
            ]}
          />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
            {semester.focus}
          </p>
          <h1 className="mt-1 font-serif text-4xl font-semibold text-navy-900 sm:text-5xl">
            Semester {semester.number}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            {semester.description}
          </p>
          <p className="mt-4 inline-block rounded-full bg-navy-50 px-3 py-1 text-sm font-medium text-navy-700">
            {pluralize(subjects.length, "subject")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {hasSampleData(subjects) && (
          <p className="mb-6 rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-700">
            <strong>Sample data:</strong> subject names, codes and instructors
            on this page are examples and not the official curriculum.
          </p>
        )}

        <SubjectBrowser subjects={summaries} />

        <nav
          aria-label="Other semesters"
          className="mt-14 border-t border-slate-200 pt-8"
        >
          <p className="text-sm font-semibold text-navy-900">
            Other semesters
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {semesters.map((s) => (
              <li key={s.number}>
                <Link
                  href={`/semester/${s.number}`}
                  aria-current={s.number === semester.number ? "page" : undefined}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition ${
                    s.number === semester.number
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-navy-300 hover:bg-navy-50"
                  }`}
                >
                  {s.number}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="mt-6 inline-block text-sm font-medium text-navy-600 hover:underline"
          >
            ← Back to homepage
          </Link>
        </nav>
      </div>
    </>
  );
}
