import { notFound } from "next/navigation";
import SubjectView from "@/components/SubjectView";
import { allSubjects, getSemester, getSubject } from "@/lib/library";

// Only units listed in a subject's `units` exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allSubjects.flatMap((s) =>
    s.units.map((u) => ({
      semester: String(s.semester),
      subject: s.slug,
      unit: u.slug,
    })),
  );
}

export async function generateMetadata({ params }) {
  const { semester, subject: slug, unit: unitSlug } = await params;
  const subject = getSubject(semester, slug);
  const unit = subject?.units.find((u) => u.slug === unitSlug);
  if (!unit) return { title: "Unit not found" };
  return {
    title: `${unit.title}: ${subject.name} (Semester ${subject.semester})`,
    description: subject.description,
  };
}

export default async function UnitPage({ params }) {
  const { semester: semesterValue, subject: slug, unit: unitSlug } = await params;
  const semester = getSemester(semesterValue);
  const subject = getSubject(semesterValue, slug);
  const unit = subject?.units.find((u) => u.slug === unitSlug);
  if (!semester || !subject || !unit) notFound();

  return <SubjectView semester={semester} subject={subject} unit={unit} />;
}
