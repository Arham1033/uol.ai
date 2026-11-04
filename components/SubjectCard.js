import Link from "next/link";
import { FiArrowRight, FiUser } from "react-icons/fi";
import { formatInstructors, getAvailability, pluralize } from "@/lib/helpers";

// `subject` is a summary object from toSummary() in lib/library.js.
export default function SubjectCard({ subject, showSemester = false }) {
  const availability = getAvailability(subject.status);
  const href = `/semester/${subject.semester}/${subject.slug}`;

  let chapterText = "";
  if (subject.totalChapters) {
    chapterText = `${subject.chaptersAdded} of ${subject.totalChapters} chapters added`;
  } else if (subject.chaptersAdded > 0) {
    chapterText = `${pluralize(subject.chaptersAdded, "chapter")} added`;
  }

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl hover:shadow-navy-900/10 focus-within:border-accent-500">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
          {showSemester && `Semester ${subject.semester}`}
          {showSemester && subject.code && " · "}
          {subject.code}
        </p>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${availability.classes}`}
        >
          {availability.label}
        </span>
      </div>

      <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-navy-900">
        {/* The ::after element stretches this link over the whole card. */}
        <Link
          href={href}
          className="after:absolute after:inset-0 after:rounded-2xl group-hover:text-navy-700"
        >
          {subject.name}
        </Link>
      </h3>

      <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
        <FiUser className="h-3.5 w-3.5 shrink-0 text-accent-600" aria-hidden="true" />
        {formatInstructors(subject.instructors)}
      </p>

      {subject.description && (
        <p className="mt-3 line-clamp-2 text-sm text-slate-600">
          {subject.description}
        </p>
      )}

      <div className="mt-auto pt-4">
        {subject.materials.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5" aria-label="Available materials">
            {subject.materials.map((material) => (
              <li
                key={material}
                className="rounded-md bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-700"
              >
                {material}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">No materials added yet</p>
        )}

        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
          <span>{chapterText}</span>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1 font-medium text-navy-600 transition group-hover:translate-x-0.5"
          >
            Open <FiArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
