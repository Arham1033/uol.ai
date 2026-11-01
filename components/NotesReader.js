"use client";

// Client Component: it keeps track of the current page, zoom level and
// image loading state. Used for handwritten note pages.
//
// Props:
//   pages  [{ src, alt, width, height }]  built with notePages() in data/subjects.js
//   title  short label used for accessibility, e.g. "Calculus: Limits"
//   label  what the pages are, e.g. "handwritten notes" or "lecture slides"

import Image from "next/image";
import { useState } from "react";

const ZOOM_LEVELS = [1, 1.5, 2, 3];

const buttonClass =
  "inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-navy-300 hover:bg-navy-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-300 disabled:hover:bg-white";

export default function NotesReader({
  pages,
  title,
  label = "handwritten notes",
}) {
  const [index, setIndex] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [failed, setFailed] = useState({});

  if (!pages || pages.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
        No pages have been added yet.
      </p>
    );
  }

  const total = pages.length;
  const current = Math.min(index, total - 1);
  const page = pages[current];
  const zoom = ZOOM_LEVELS[zoomIndex];
  const hasFailed = Boolean(failed[page.src]);
  const hasLoaded = Boolean(loaded[page.src]);

  function goTo(next) {
    setIndex(Math.min(Math.max(next, 0), total - 1));
  }

  function handleKeyDown(event) {
    // Leave the arrow keys alone while the page selector is focused.
    if (event.target.tagName === "SELECT") return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(current + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(current - 1);
    }
  }

  return (
    <section
      aria-label={`${title}, ${label}`}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      onKeyDown={handleKeyDown}
    >
      {/* Top bar: page indicator, page selector, zoom */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <p className="text-sm font-medium text-slate-700" aria-live="polite">
          Page {current + 1} of {total}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {total > 1 && (
            <select
              aria-label="Jump to page"
              value={current}
              onChange={(event) => goTo(Number(event.target.value))}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-700"
            >
              {pages.map((_, pageIndex) => (
                <option key={pageIndex} value={pageIndex}>
                  Page {pageIndex + 1}
                </option>
              ))}
            </select>
          )}

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Zoom out"
              className={`${buttonClass} px-2.5`}
              disabled={zoomIndex === 0}
              onClick={() => setZoomIndex((value) => Math.max(value - 1, 0))}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 10h12" />
              </svg>
            </button>
            <span className="w-12 text-center text-sm tabular-nums text-slate-600">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              aria-label="Zoom in"
              className={`${buttonClass} px-2.5`}
              disabled={zoomIndex === ZOOM_LEVELS.length - 1}
              onClick={() =>
                setZoomIndex((value) =>
                  Math.min(value + 1, ZOOM_LEVELS.length - 1),
                )
              }
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 10h12M10 4v12" />
              </svg>
            </button>
          </div>

          <a
            href={page.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy-600 hover:text-navy-800 hover:underline"
          >
            Open full image
          </a>
        </div>
      </div>

      {/* Image area. Scrolls in both directions when zoomed in. */}
      <div
        tabIndex={0}
        aria-label="Page image. Use the left and right arrow keys to change page."
        className="max-h-[80vh] overflow-auto bg-slate-100 p-2 sm:p-4"
      >
        {hasFailed ? (
          <div className="mx-auto max-w-md rounded-xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
            <p className="font-medium text-slate-800">
              This page couldn't be loaded
            </p>
            <p className="mt-2 text-sm text-slate-500">
              The image file may be missing or the path may be wrong. Expected
              file:
            </p>
            <p className="mt-1 break-all font-mono text-xs text-slate-600">
              {page.src}
            </p>
            <button
              type="button"
              className={`${buttonClass} mt-4`}
              onClick={() =>
                setFailed((previous) => ({ ...previous, [page.src]: false }))
              }
            >
              Try again
            </button>
          </div>
        ) : (
          <div className="relative mx-auto" style={{ width: `${zoom * 100}%` }}>
            {!hasLoaded && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 flex animate-pulse items-center justify-center rounded-md bg-slate-200 text-sm text-slate-500"
              >
                Loading page…
              </div>
            )}
            <Image
              key={page.src}
              src={page.src}
              alt={page.alt}
              width={page.width}
              height={page.height}
              quality={90}
              sizes={`(min-width: 1024px) ${Math.round(900 * zoom)}px, ${Math.round(100 * zoom)}vw`}
              className="h-auto w-full rounded-md bg-white shadow"
              onLoad={() =>
                setLoaded((previous) => ({ ...previous, [page.src]: true }))
              }
              onError={() =>
                setFailed((previous) => ({ ...previous, [page.src]: true }))
              }
            />
          </div>
        )}
      </div>

      {/* Bottom bar: previous / next */}
      <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 p-3">
        <button
          type="button"
          className={buttonClass}
          disabled={current === 0}
          onClick={() => goTo(current - 1)}
        >
          <span aria-hidden="true">←</span> Previous
        </button>
        <span className="text-sm text-slate-500 sm:hidden">
          {current + 1} / {total}
        </span>
        <button
          type="button"
          className={buttonClass}
          disabled={current === total - 1}
          onClick={() => goTo(current + 1)}
        >
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
