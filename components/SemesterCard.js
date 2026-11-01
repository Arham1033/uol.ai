import Link from "next/link";
import { pluralize } from "@/lib/helpers";

export default function SemesterCard({ semester, subjectCount, withNotesCount }) {
  return (
    <Link
      href={`/semester/${semester.number}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[7rem] font-semibold leading-none text-navy-50 transition group-hover:text-accent-100"
      >
        {semester.number}
      </span>
      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 font-serif text-xl font-semibold text-accent-200 ring-1 ring-accent-500/40 transition group-hover:bg-navy-800">
        {semester.number}
      </span>

      <h3 className="relative mt-5 font-serif text-lg font-semibold text-navy-900">
        Semester {semester.number}
      </h3>
      <p className="relative text-sm text-slate-500">{semester.focus}</p>

      <div className="relative mt-auto flex items-end justify-between gap-2 pt-5 text-sm">
        <div>
          <p className="font-medium text-slate-700">
            {pluralize(subjectCount, "subject")}
          </p>
          <p className="text-slate-500">{withNotesCount} with notes</p>
        </div>
        <span
          aria-hidden="true"
          className="text-navy-400 transition group-hover:translate-x-0.5 group-hover:text-navy-700"
        >
          →
        </span>
      </div>
    </Link>
  );
}
