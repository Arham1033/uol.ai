"use client";

// Client Component: live subject search on the homepage.
// `subjects` is the list of summaries produced on the server by
// getSubjectSummaries() in lib/library.js, so search always uses the real data.

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  filterSubjects,
  formatInstructors,
  getAvailability,
} from "@/lib/helpers";

const MAX_RESULTS = 6;

export default function HomeSearch({ subjects }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const trimmed = query.trim();
  const matches = trimmed ? filterSubjects(subjects, trimmed) : [];
  const visible = matches.slice(0, MAX_RESULTS);

  function handleSubmit(event) {
    event.preventDefault();
    // Pressing Enter opens the best (first) match.
    if (visible.length > 0) {
      router.push(`/semester/${visible[0].semester}/${visible[0].slug}`);
    }
  }

  return (
    <div className="relative">
      <form role="search" onSubmit={handleSubmit}>
        <label htmlFor="home-search" className="sr-only">
          Search subjects
        </label>
        <div className="relative">
          <FiSearch
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            id="home-search"
            type="search"
            value={query}
            autoComplete="off"
            placeholder="Search subjects, topics or instructors…"
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setQuery("");
            }}
            className="w-full rounded-full border-0 bg-white py-4 pl-12 pr-4 text-base text-slate-900 shadow-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
        </div>
      </form>

      {trimmed && (
        <div className="menu-enter absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl bg-white text-left text-slate-800 shadow-xl ring-1 ring-slate-200">
          {matches.length === 0 ? (
            <p className="px-4 py-4 text-sm text-slate-600" role="status">
              No subjects match &ldquo;{trimmed}&rdquo;. Try a different word.
            </p>
          ) : (
            <>
              <p className="sr-only" role="status">
                {matches.length} matching subjects
              </p>
              <ul className="max-h-96 divide-y divide-slate-100 overflow-auto">
                {visible.map((subject) => {
                  const availability = getAvailability(subject.status);
                  return (
                    <li key={`${subject.semester}-${subject.slug}`}>
                      <Link
                        href={`/semester/${subject.semester}/${subject.slug}`}
                        className="flex items-start justify-between gap-3 px-4 py-3 hover:bg-slate-50 focus-visible:bg-slate-50"
                      >
                        <span>
                          <span className="block font-medium text-navy-900">
                            {subject.name}
                          </span>
                          <span className="block text-sm text-slate-500">
                            Semester {subject.semester} ·{" "}
                            {formatInstructors(subject.instructors)}
                          </span>
                        </span>
                        <span
                          className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${availability.classes}`}
                        >
                          {availability.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {matches.length > MAX_RESULTS && (
                <p className="border-t border-slate-100 bg-slate-50 px-4 py-2 text-xs text-slate-500">
                  Showing {MAX_RESULTS} of {matches.length} matches. Type more
                  to narrow the list.
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
