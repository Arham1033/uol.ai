// Small helpers that do NOT import the notes data.
// Client Components import from this file, so keep it free of data imports;
// otherwise the whole notes database would be shipped to the browser.

// Label and colour for each availability status used in data/subjects.js.
export const AVAILABILITY = {
  available: {
    label: "Notes available",
    classes: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  },
  "in-progress": {
    label: "In progress",
    classes: "bg-accent-50 text-accent-700 ring-accent-200",
  },
  "coming-soon": {
    label: "Coming soon",
    classes: "bg-slate-100 text-slate-600 ring-slate-200",
  },
};

export function getAvailability(status) {
  return AVAILABILITY[status] ?? AVAILABILITY["coming-soon"];
}

export function formatInstructors(instructors) {
  return instructors && instructors.length > 0
    ? instructors.join(", ")
    : "Not added yet";
}

export function formatDate(isoDate) {
  if (!isoDate) return "";
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function pluralize(count, singular, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}

// Case-insensitive search over subject summaries. Every word typed must
// appear somewhere in the subject's name, code, instructors, description,
// topics or semester label ("semester 3").
export function filterSubjects(subjects, query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return subjects;

  return subjects.filter((subject) => {
    const haystack = [
      subject.name,
      subject.code ?? "",
      subject.instructors.join(" "),
      subject.description,
      subject.topics.join(" "),
      `semester ${subject.semester}`,
    ]
      .join(" ")
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}
