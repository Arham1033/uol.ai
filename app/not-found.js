import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

// Shown for unknown URLs, invalid semesters and unknown subjects.
export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Error 404
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
        We couldn't find that page
      </h1>
      <p className="mt-4 text-slate-600">
        The semester or subject you are looking for doesn't exist, or its
        address may have changed. Check the link, or start again from the
        homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-700"
        >
          Go to homepage
        </Link>
        <Link
          href="/#semesters"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-navy-300 hover:bg-navy-50"
        >
          Browse semesters
        </Link>
      </div>
    </div>
  );
}
