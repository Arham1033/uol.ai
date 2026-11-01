// Server-side helpers that read the central data files.
// Pages import from here instead of touching data/*.js directly, so the
// data files can stay short and easy to edit.
//
// Do NOT import this file from a Client Component ("use client").
// Pass the plain objects from getSubjectSummaries() as props instead.

import { semesters } from "@/data/semesters";
import { subjects } from "@/data/subjects";

// Fill in anything omitted in data/subjects.js so pages never crash on a
// missing field. This is why a new subject only needs a few lines.
function withChapterDefaults(chapters = []) {
  return chapters.map((chapter, index) => ({
    id: `chapter-${index + 1}`,
    summary: "",
    theory: [],
    pages: [],
    pagesKind: "handwritten", // or "slides"
    ...chapter,
  }));
}

function withDefaults(subject) {
  // A big subject can be split into units (see data/subjects.js). Each unit
  // has its own list of chapters (lessons). `chapters` then holds all of them
  // together, which is what search and the material labels read.
  const units = (subject.units ?? []).map((unit) => ({
    summary: "",
    pages: null,
    ...unit,
    chapters: withChapterDefaults(unit.chapters),
  }));

  return {
    code: null,
    instructors: [],
    description: "",
    totalChapters: null,
    topics: [],
    pdfUrl: null,
    contributor: null,
    isSample: false,
    status: "coming-soon",
    updatedAt: null,
    ...subject,
    units,
    chapters:
      units.length > 0
        ? units.flatMap((unit) => unit.chapters)
        : withChapterDefaults(subject.chapters),
  };
}

export const allSubjects = subjects.map(withDefaults);

export function getSemesters() {
  return semesters;
}

// `value` comes from the URL, so it is a string such as "3".
export function getSemester(value) {
  return semesters.find((s) => String(s.number) === String(value)) ?? null;
}

export function getSubjectsForSemester(number) {
  return allSubjects.filter((s) => s.semester === number);
}

export function getSubject(semesterValue, slug) {
  return (
    allSubjects.find(
      (s) => String(s.semester) === String(semesterValue) && s.slug === slug,
    ) ?? null
  );
}

// Works out which kinds of material a subject really contains.
export function getMaterialTypes(subject) {
  const types = [];
  const { chapters } = subject;

  if (chapters.some((c) => c.theory.length > 0)) types.push("Typed notes");
  if (chapters.some((c) => c.pages.length > 0 && c.pagesKind !== "slides")) {
    types.push("Handwritten pages");
  }
  if (chapters.some((c) => c.pages.length > 0 && c.pagesKind === "slides")) {
    types.push("Lecture slides");
  }
  if (chapters.some((c) => c.theory.some((block) => block.type === "image"))) {
    types.push("Diagrams");
  }
  if (subject.pdfUrl) types.push("PDF");

  return types;
}

// A small, serialisable version of a subject for cards and search.
// It deliberately leaves out the long notes content.
export function toSummary(subject) {
  return {
    slug: subject.slug,
    semester: subject.semester,
    name: subject.name,
    code: subject.code,
    instructors: subject.instructors,
    description: subject.description,
    status: subject.status,
    isSample: subject.isSample,
    updatedAt: subject.updatedAt,
    materials: getMaterialTypes(subject),
    totalChapters: subject.totalChapters,
    chaptersAdded: subject.chapters.length,
    topics: [...subject.topics, ...subject.chapters.map((c) => c.title)],
  };
}

export function getSubjectSummaries(list = allSubjects) {
  return list.map(toSummary);
}

// Subjects that have real material, newest first.
export function getRecentSubjects(limit = 4) {
  return allSubjects
    .filter((s) => s.updatedAt && getMaterialTypes(s).length > 0)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, limit);
}

export function hasSampleData(list = allSubjects) {
  return list.some((s) => s.isSample);
}
