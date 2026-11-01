import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <InfoPage
      title="About"
      intro={`${site.name} is a student-made collection of study notes for Artificial Intelligence students.`}
    >
      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          Why this library exists
        </h2>
        <p className="mt-2">
          Good notes are scattered across phones, notebooks and chat groups.
          This library brings them together, organised by semester and
          subject, so you can find what you need and read it comfortably,
          especially on a phone.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          What you will find
        </h2>
        <ul className="mt-2 ml-6 list-disc space-y-1.5 marker:text-accent-600">
          <li>Handwritten notes, photographed and readable page by page.</li>
          <li>Typed theory with headings, lists, code and worked examples.</li>
          <li>Subjects grouped under eight semesters, with search.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          Independent project
        </h2>
        <p className="mt-2">
          This website is created and maintained by a student. It is{" "}
          <strong>not</strong> an official website of the University of Layyah
          and is not endorsed by the university. Notes may contain mistakes,
          so always confirm important details with your instructor and your
          official course material.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          Get involved
        </h2>
        <p className="mt-2">
          Spotted a mistake or want to contribute notes? Visit the{" "}
          <Link
            href="/contact"
            className="font-medium text-navy-600 underline hover:text-navy-800"
          >
            contact page
          </Link>
          .
        </p>
      </section>
    </InfoPage>
  );
}
