"use client";

// Client Component: search box and filter for the subjects of one semester.
// `subjects` is a list of summaries from getSubjectSummaries() (lib/library.js).

import { useState } from "react";
import SubjectCard from "@/components/SubjectCard";
import { filterSubjects, pluralize } from "@/lib/helpers";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "with-notes", label: "With notes" },
  { id: "coming-soon", label: "Coming soon" },
];

export default function SubjectBrowser({ subjects }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  if (subjects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
        <p className="font-serif text-lg font-semibold text-navy-900">
          No subjects added yet
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Subjects and notes for this semester haven't been added yet. Please
          check back soon.
        </p>
      </div>
    );
  }

  const byFilter = subjects.filter((subject) => {
    if (filter === "with-notes") return subject.materials.length > 0;
    if (filter === "coming-soon") return subject.materials.length === 0;
    return true;
  });
  const visible = filterSubjects(byFilter, query);

  function clearAll() {
    setQuery("");
    setFilter("all");
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <label htmlFor="semester-search" className="sr-only">
            Search subjects in this semester
          </label>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="m14 14 4 4" />
          </svg>
          <input
            id="semester-search"
            type="search"
            value={query}
            autoComplete="off"
            placeholder="Search subjects in this semester…"
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-200"
          />
        </div>

        <div
          role="group"
          aria-label="Filter subjects"
          className="flex gap-1 rounded-xl bg-slate-200/60 p-1"
        >
          {FILTERS.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
              className={`flex-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition sm:flex-none ${
                filter === option.id
                  ? "bg-white text-navy-900 shadow-sm"
                  : "text-slate-600 hover:text-navy-900"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500" aria-live="polite">
        Showing {visible.length} of {pluralize(subjects.length, "subject")}
      </p>

      {visible.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <p className="font-medium text-slate-800">
            No subjects match your search
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Try a different word or change the filter.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-navy-300 hover:bg-navy-50"
          >
            Clear search and filter
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((subject) => (
            <li key={subject.slug}>
              <SubjectCard subject={subject} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
