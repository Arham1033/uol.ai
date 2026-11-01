import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotesReader from "@/components/NotesReader";
import TheoryContent from "@/components/TheoryContent";
import { getMaterialTypes } from "@/lib/library";
import {
  formatDate,
  formatInstructors,
  getAvailability,
  pluralize,
} from "@/lib/helpers";

// ---------------------------------------------------------------------------
// PER-SUBJECT LOOK AND LABELS
// Every subject can override these in its own entry in data/subjects.js, inside
// a `ui: { ... }` object, so changing one subject never changes the others.
// A class string you give REPLACES the default below (it is not added to it).
//
//   ui: {
//     materialLabels: { "Typed notes": "Lecture notes" },  // rename a capsule
//     notesHeading: "Typed notes",   // heading above the notes; null hides it
//     notesSubheading: null,         // optional second heading, e.g. "Diagram Examples"
//     sidebarClass: "...tailwind classes...",
//     capsuleClass: "...",
//     articleClass: "...",
//     headingClass: "...",
//   }
// ---------------------------------------------------------------------------
const DEFAULT_UI = {
  materialLabels: {},
  notesHeading: "Typed notes",
  notesSubheading: null,
  sidebarClass:
    "space-y-6 bg-[#f1ece5] px-4 py-6 sm:px-6 lg:sticky lg:top-16 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none",
  capsuleClass:
    "rounded-md bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-700",
  articleClass: "min-w-0 px-4 py-6 sm:px-6",
  headingClass:
    "mb-4 border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-500",
};

// The whole subject page. Used for a subject (/semester/3/data-structure) and,
// when a subject is split into units, for one unit of it
// (/semester/3/islamiyat-fehm-ul-quran/unit-4).
//   subject  a subject from lib/library.js
//   unit     optional: one entry of subject.units
export default function SubjectView({ semester, subject, unit = null }) {
  const availability = getAvailability(subject.status);
  const materials = getMaterialTypes(subject);
  const ui = { ...DEFAULT_UI, ...(subject.ui ?? {}) };
  const hasUnits = subject.units.length > 0 && !unit;
  const chapters = unit ? unit.chapters : hasUnits ? [] : subject.chapters;
  const hasChapters = chapters.length > 0;
  const subjectHref = `/semester/${semester.number}/${subject.slug}`;
  const itemWord = unit ? "lesson" : "chapter";

  return (
    <>
      {/* Header */}
      <section className="border-b border-slate-200 bg-linear-to-b from-white to-navy-50/60">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: `Semester ${semester.number}`, href: `/semester/${semester.number}` },
              unit
                ? { label: subject.name, href: subjectHref }
                : { label: subject.name },
              ...(unit ? [{ label: unit.title }] : []),
            ]}
          />

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {subject.code && (
              <span className="text-sm font-medium uppercase tracking-wide text-slate-500">
                {subject.code}
              </span>
            )}
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${availability.classes}`}
            >
              {availability.label}
            </span>
          </div>

          {unit && (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              {unit.title}
            </p>
          )}
          <h1 className="mt-2 font-serif text-4xl font-semibold text-navy-900 sm:text-5xl">
            {subject.name}
          </h1>
          {subject.description && (
            <p className="mt-3 max-w-3xl text-lg text-slate-600">
              {subject.description}
            </p>
          )}

          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-slate-500">Semester</dt>
              <dd className="mt-0.5 font-medium text-slate-800">
                <Link
                  href={`/semester/${semester.number}`}
                  className="hover:text-navy-600 hover:underline"
                >
                  Semester {semester.number}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">
                {subject.instructors.length > 1 ? "Instructors" : "Instructor"}
              </dt>
              <dd className="mt-0.5 font-medium text-slate-800">
                {formatInstructors(subject.instructors)}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">
                {hasUnits ? "Units" : unit ? "Lessons" : "Chapters"}
              </dt>
              <dd className="mt-0.5 font-medium text-slate-800">
                {hasUnits
                  ? `${pluralize(subject.units.length, "unit")} added`
                  : subject.totalChapters && !unit
                    ? `${chapters.length} of ${subject.totalChapters} added`
                    : chapters.length > 0
                      ? `${pluralize(chapters.length, itemWord)} added`
                      : "None added yet"}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Last updated</dt>
              <dd className="mt-0.5 font-medium text-slate-800">
                {subject.updatedAt ? formatDate(subject.updatedAt) : "Not yet"}
              </dd>
            </div>
          </dl>

          {subject.isSample && (
            <p className="mt-6 rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-700">
              <strong>Sample data:</strong> this subject, its code, instructor
              and notes are examples and not the official University of Layyah
              curriculum.
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl ">
        <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className={ui.sidebarClass}>
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="text-sm font-semibold uppercase tracking-wide text-slate-500"
              >
                Overview
              </h2>

              <p className="mt-3 text-sm font-medium text-slate-800">
                Available materials
              </p>
              {materials.length > 0 ? (
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {materials.map((material) => (
                    <li
                      key={material}
                      className={ui.capsuleClass}
                    >
                      {ui.materialLabels[material] ?? material}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-sm text-slate-500">
                  Nothing added yet
                </p>
              )}

              {subject.pdfUrl && (
                <a
                  href={subject.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-navy-300 hover:bg-navy-50"
                >
                  Open PDF version
                </a>
              )}

              {subject.contributor && (
                <p className="mt-4 text-xs text-slate-500">
                  Contributor / source: {subject.contributor}
                </p>
              )}
            </section>

            {hasUnits && (
              <nav aria-label="Units">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Units
                </h2>
                <ol className="mt-3 space-y-1">
                  {subject.units.map((u) => (
                    <li key={u.slug}>
                      <Link
                        href={`${subjectHref}/${u.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-800"
                      >
                        {u.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {hasChapters && (
              <nav aria-label={unit ? "Lessons" : "Chapters"}>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {unit ? "Lessons" : "Chapters"}
                </h2>
                <ol className="mt-3 space-y-1">
                  {chapters.map((chapter, index) => (
                    <li key={chapter.id}>
                      <a
                        href={`#${chapter.id}`}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-navy-50 hover:text-navy-800"
                      >
                        <span className="font-medium text-navy-700">
                          {index + 1}.
                        </span>{" "}
                        <span dir="auto">{chapter.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {unit && (
              <Link
                href={subjectHref}
                className="block text-sm font-medium text-navy-600 hover:underline"
              >
                ← All units of {subject.name}
              </Link>
            )}
            <Link
              href={`/semester/${semester.number}`}
              className="inline-block text-sm font-medium text-navy-600 hover:underline"
            >
              ← Back to Semester {semester.number}
            </Link>
          </aside>

          {/* Chapters */}
          <div className="min-w-0 space-y-2">
            {hasUnits && (
              <div className="px-4 py-6 sm:px-6">
                <h2 className="font-serif text-2xl font-semibold text-navy-900">
                  Choose a unit
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {subject.units.map((u) => (
                    <li key={u.slug}>
                      <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl hover:shadow-navy-900/10 focus-within:border-accent-500">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                          {u.chapters.length > 0
                            ? pluralize(u.chapters.length, "lesson")
                            : "Coming soon"}
                          {u.pages ? ` · pages ${u.pages}` : ""}
                        </p>
                        <h3 className="mt-3 font-serif text-xl font-semibold text-navy-900">
                          <Link
                            href={`${subjectHref}/${u.slug}`}
                            className="after:absolute after:inset-0 after:rounded-2xl"
                          >
                            {u.title}
                          </Link>
                        </h3>
                        {u.summary && (
                          <p dir="auto" className="mt-2 text-sm leading-relaxed text-slate-600">
                            {u.summary}
                          </p>
                        )}
                        <span
                          aria-hidden="true"
                          className="mt-auto pt-4 text-sm font-medium text-navy-600 transition group-hover:translate-x-0.5"
                        >
                          Open unit →
                        </span>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!hasChapters && !hasUnits && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <p className="font-serif text-lg font-semibold text-navy-900">
                  Notes for this subject haven't been added yet
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                  Notes for this subject will be available soon.
                </p>
                <Link
                  href={`/semester/${semester.number}`}
                  className="mt-5 inline-block rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-700"
                >
                  Browse Semester {semester.number}
                </Link>
              </div>
            )}

            {chapters.map((chapter, index) => {
              const previous = chapters[index - 1];
              const next = chapters[index + 1];
              return (
                <article
                  key={chapter.id}
                  id={chapter.id}
                  aria-labelledby={`${chapter.id}-title`}
                  className={ui.articleClass}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                    {unit ? "Lesson" : "Chapter"} {index + 1}
                    {subject.totalChapters && !unit ? ` of ${subject.totalChapters}` : ""}
                  </p>
                  <h2
                    id={`${chapter.id}-title`}
                    className="mt-1 font-serif text-2xl font-semibold text-navy-900 sm:text-3xl"
                  >
                    <span dir="auto" className="block">{chapter.title}</span>
                  </h2>
                  {chapter.summary && (
                    <p dir="auto" className="mt-2 text-slate-600">{chapter.summary}</p>
                  )}

                  {chapter.theory.length > 0 && (
                    <div className="mt-6">
                      {ui.notesHeading && (
                        <h3 className={ui.headingClass}>{ui.notesHeading}</h3>
                      )}
                      {ui.notesSubheading && (
                        <h3 className={ui.headingClass}>{ui.notesSubheading}</h3>
                      )}
                      <TheoryContent blocks={chapter.theory} />
                    </div>
                  )}

                  {chapter.pages.length > 0 && (
                    <div className="mt-8">
                      <h3 className="mb-4 border-b border-slate-200 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                        {chapter.pagesKind === "slides"
                          ? "Lecture slides"
                          : "Handwritten notes"}
                      </h3>
                      <NotesReader
                        pages={chapter.pages}
                        title={`${subject.name}: ${chapter.title}`}
                        label={
                          chapter.pagesKind === "slides"
                            ? "lecture slides"
                            : "handwritten notes"
                        }
                      />
                    </div>
                  )}

                  {chapter.theory.length === 0 && chapter.pages.length === 0 && (
                    <p className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-6 text-center text-sm text-slate-500">
                      Notes for this chapter haven't been added yet.
                    </p>
                  )}

                  {chapters.length > 1 && (
                    <nav
                      aria-label={`Chapter navigation after ${chapter.title}`}
                      className="mt-8 grid gap-3 sm:grid-cols-2"
                    >
                      {previous ? (
                        <a
                          href={`#${previous.id}`}
                          className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-accent-500/60 hover:shadow-md"
                        >
                          <span className="block text-xs text-slate-500">
                            ← Previous chapter
                          </span>
                          <span className="mt-0.5 block font-medium text-navy-900">
                            {previous.title}
                          </span>
                        </a>
                      ) : (
                        <span className="hidden sm:block" />
                      )}
                      {next && (
                        <a
                          href={`#${next.id}`}
                          className="rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-accent-500/60 hover:shadow-md sm:text-right"
                        >
                          <span className="block text-xs text-slate-500">
                            Next chapter →
                          </span>
                          <span className="mt-0.5 block font-medium text-navy-900">
                            {next.title}
                          </span>
                        </a>
                      )}
                    </nav>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
