import { notFound } from "next/navigation";
import SubjectView from "@/components/SubjectView";
import { allSubjects, getSemester, getSubject } from "@/lib/library";

// Only subjects in data/subjects.js exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allSubjects.map((s) => ({
    semester: String(s.semester),
    subject: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { semester, subject: slug } = await params;
  const subject = getSubject(semester, slug);
  if (!subject) return { title: "Subject not found" };
  return {
    title: `${subject.name} (Semester ${subject.semester})`,
    description: subject.description,
  };
}

export default async function SubjectPage({ params }) {
  const { semester: semesterValue, subject: slug } = await params;
  const semester = getSemester(semesterValue);
  const subject = getSubject(semesterValue, slug);
  if (!semester || !subject) notFound();

  return <SubjectView semester={semester} subject={subject} />;
}
