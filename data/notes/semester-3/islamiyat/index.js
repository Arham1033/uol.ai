// The units of Islamiyat / Fehm-ul-Quran, in the order shown on the subject page.
// Each unit lives in its own file in this folder (unit-1.js, unit-2.js, ...).
// To add a unit: create unit-N.js, import it here and add one entry to the list.
//   slug      the unit's web address: /semester/3/islamiyat-fehm-ul-quran/<slug>
//   pages     optional: page numbers in the book, shown on the unit card
//   chapters  the lessons of that unit

import { unit1Lessons } from "./unit-1";
import { unit2Lessons } from "./unit-2";
import { unit3Lessons } from "./unit-3";
import { unit4Lessons } from "./unit-4";
import { unit4MoreLessons } from "./unit-4-more";
import { unit5Lessons } from "./unit-5";
import { unit6Lessons } from "./unit-6";

export const islamiyatUnits = [
  { slug: "unit-1", title: "Unit 1", pages: "13 to 50", summary: "آسان قرآنی الفاظ: سبق 1 تا 19۔", chapters: unit1Lessons },
  { slug: "unit-2", title: "Unit 2", pages: "51 to 74", summary: "سابقہ الفاظ: إِنَّ، لِ، فِي، عَلَى، مِنْ، إِلَى، بِ، لَا، إِلَّا، وَ، كَانَ، يَا (سبق 1 تا 12)۔", chapters: unit2Lessons },
  { slug: "unit-3", title: "Unit 3", pages: "75 to 102", summary: "قرآنی الفاظ اپنی خاصیت اور نسبت کے ساتھ (سبق 1 تا 10)۔", chapters: unit3Lessons },
  {
    slug: "unit-4",
    title: "Unit 4",
    pages: "104 to 140",
    summary: "سبق 1 تا 17: ضمائر (هُوَ، هِيَ، أَنْتَ، أَنَا) اور (ـهُ، ـكَ، ـهَا، ـي) والے الفاظ",
    chapters: [...unit4Lessons, ...unit4MoreLessons],
  },
  {
    slug: "unit-5",
    title: "Unit 5",
    pages: "141 to 212",
    summary: "سبق 1 تا 23: ضمائر جمع (هُمْ، أَنْتُمْ، نَحْنُ)، اشارے، قرآنی محاورے، مِنْ + نکرہ",
    chapters: unit5Lessons,
  },
  {
    slug: "unit-6",
    title: "Unit 6",
    pages: "213 to 291",
    summary: "فعل حال (مضارع): يَعْبُدُ، يُرْسِلُ، يَغْفِرُ اللهُ اور سیکڑوں قرآنی جملے",
    chapters: unit6Lessons,
  },
];
