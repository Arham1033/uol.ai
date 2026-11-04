// The sections of COAL (Computer Organization and Assembly Language), in the order shown on the subject page.
// Each section lives in its own file in this folder.
// Lectures are in lectures.js and labs in labs.js. To add more labs, add a lab const to labs.js and put it in `labLessons`.
//   slug      the section's web address: /semester/3/coal/<slug>
//   chapters  the lessons of that section

import { lectureLessons } from "./lectures";
import { labLessons } from "./labs";

export const coalUnits = [
  {
    slug: "lectures",
    title: "Lectures",
    summary: "Lectures 1 to 4: introduction, number systems, 8086 registers and addressing modes.",
    chapters: lectureLessons,
  },
  {
    slug: "labs",
    title: "Labs",
    summary: "Labs 1 to 4: registers and MOV/ADD/SUB, number systems and arithmetic, MUL and DIV, and data-segment variables.",
    chapters: labLessons,
  },
];
