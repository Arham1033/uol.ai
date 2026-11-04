// Figures about the library, worked out from the real data every time the site is built.
// Used by the About page (charts) and the home page. Server-side only.

import { allSubjects } from "@/lib/library";
import { semesters } from "@/data/semesters";

const SKIP_KEYS = new Set(["type", "src", "alt", "variant", "language", "width", "height", "rtl", "label", "hint", "indexes", "groups"]);

function collectText(value, out) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => collectText(v, out));
  else if (value && typeof value === "object") {
    for (const [key, v] of Object.entries(value)) if (!SKIP_KEYS.has(key)) collectText(v, out);
  }
}

function countWords(blocks) {
  const parts = [];
  collectText(blocks, parts);
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

const GROUPS = {
  heading: "Text", subheading: "Text", paragraph: "Text", list: "Text", callout: "Text",
  table: "Tables", code: "Code and maths", math: "Code and maths",
  image: "Pictures", slides: "Pictures",
  qa: "Questions and answers", worked: "Worked examples", steps: "Worked examples",
  pairs: "Arabic and Urdu",
};

function walk(blocks, acc) {
  for (const block of blocks) {
    if (block.type === "scrollbox") {
      walk(block.blocks, acc);
      continue;
    }
    const group = GROUPS[block.type];
    if (!group) continue;
    const weight = block.type === "slides" ? block.pages.length : 1;
    acc.groups[group] = (acc.groups[group] ?? 0) + weight;
    if (block.type === "qa") acc.qa += 1;
    if (block.type === "worked") acc.qa += 1;
    if (block.type === "image") acc.pictures += 1;
    if (block.type === "slides") acc.pictures += block.pages.length;
  }
}

export function getLibraryStats() {
  const real = allSubjects.filter((s) => !s.isSample);
  const withNotes = real.filter((s) => s.chapters.some((c) => c.theory.length > 0 || c.pages.length > 0));

  const acc = { groups: {}, qa: 0, pictures: 0 };
  let words = 0;
  let chapters = 0;
  let handwrittenPages = 0;

  const perSubject = withNotes.map((subject) => {
    let subjectWords = 0;
    const before = acc.qa;
    for (const chapter of subject.chapters) {
      chapters += 1;
      walk(chapter.theory, acc);
      subjectWords += countWords(chapter.theory);
      handwrittenPages += chapter.pages.length;
    }
    words += subjectWords;
    return {
      name: subject.name,
      semester: subject.semester,
      chapters: subject.chapters.length,
      words: subjectWords,
      solved: acc.qa - before,
    };
  });

  const perSemester = semesters.map((semester) => {
    const list = withNotes.filter((s) => s.semester === semester.number);
    return {
      semester: semester.number,
      subjects: list.length,
      chapters: list.reduce((sum, s) => sum + s.chapters.length, 0),
    };
  });

  const groupOrder = ["Text", "Tables", "Questions and answers", "Pictures", "Code and maths", "Worked examples", "Arabic and Urdu"];
  const mix = groupOrder
    .filter((name) => acc.groups[name])
    .map((name) => ({ name, value: acc.groups[name] }));

  return {
    semesters: semesters.length,
    subjects: withNotes.length,
    chapters,
    words,
    readingHours: Math.max(1, Math.round(words / 200 / 60)),
    solved: acc.qa,
    pictures: acc.pictures + handwrittenPages,
    perSubject: perSubject.sort((a, b) => b.words - a.words),
    perSemester,
    mix,
  };
}
