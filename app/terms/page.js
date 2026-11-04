import Link from "next/link";
import {
  FiAlertTriangle,
  FiBookOpen,
  FiCheckCircle,
  FiCopy,
  FiExternalLink,
  FiFileText,
  FiHeart,
  FiInfo,
  FiRefreshCw,
  FiShield,
  FiSlash,
} from "react-icons/fi";
import PolicyPage from "@/components/PolicyPage";
import { emailLink, site } from "@/data/site";

export const metadata = {
  title: "Terms and Conditions",
  description: "The notes are free for anyone to read, share and print for study. These are the terms for using the AI Notes Library.",
};

const sections = [
  {
    id: "acceptance",
    title: "Accepting these terms",
    Icon: FiCheckCircle,
    body: (
      <p>
        By using the {site.name} you agree to these terms. If you do not agree with them, please do not use the website. The
        website is run by {site.maintainerName}, a student of Artificial Intelligence at the University of Layyah.
      </p>
    ),
  },
  {
    id: "free-use",
    title: "The notes are free for everyone",
    Icon: FiHeart,
    body: (
      <>
        <p>
          <strong>Anyone can use these notes.</strong> You do not need an account, a student ID or permission. You may:
        </p>
        <ul>
          <li>read the notes online as often as you like;</li>
          <li>print them, or save pages for your own offline study;</li>
          <li>share the link, or a copy of the notes, with classmates, friends and teachers, free of charge;</li>
          <li>use them as a starting point for your own revision notes.</li>
        </ul>
        <p>
          A mention of the {site.shortName} when you share is appreciated, but it is not required.
        </p>
      </>
    ),
  },
  {
    id: "acceptable",
    title: "Please do not",
    Icon: FiSlash,
    body: (
      <ul>
        <li>sell the notes, or charge others for access to them;</li>
        <li>present the notes as an official publication of the University of Layyah, or as your own research;</li>
        <li>copy the website&rsquo;s design, logo or code and present it as your own work;</li>
        <li>try to disturb the website, overload it with automated requests or interfere with how it works;</li>
        <li>use the website for anything unlawful or harmful.</li>
      </ul>
    ),
  },
  {
    id: "study-only",
    title: "For study, not as official material",
    Icon: FiBookOpen,
    body: (
      <>
        <p>
          The notes are a student&rsquo;s summary of lectures, slides and textbooks, with extra explanations, solved questions
          and scenarios. They are written to help you revise and understand. They are <strong>not</strong> the official course
          material and they do not replace your lectures, textbooks or instructor.
        </p>
        <p>
          Syllabus, assignments and exams are decided by your instructors and the university. Always confirm important details
          with them.
        </p>
      </>
    ),
  },
  {
    id: "accuracy",
    title: "Accuracy and disclaimer",
    Icon: FiAlertTriangle,
    body: (
      <>
        <p>
          Care is taken to make the notes accurate, but they may still contain mistakes, out-of-date information or missing
          topics. The website and its content are provided <strong>&ldquo;as is&rdquo;</strong>, without any promise of
          accuracy, completeness or fitness for a particular purpose, including exam results.
        </p>
        <p>
          To the fullest extent allowed by law, the maintainer is not liable for any loss or harm that results from using the
          website or relying on the notes. If you are not satisfied with a note, please <Link href="/contact">contact me</Link>{" "}
          and it will be looked at.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Source material and copyright",
    Icon: FiCopy,
    body: (
      <>
        <p>
          The notes are based on course lectures, slides, textbooks and handouts. The people who wrote those materials keep
          their rights in them, and the diagrams and figures shown remain the property of their respective owners. They are
          shown here for educational purposes only.
        </p>
        <p>
          If you are an author or rights holder and would like something credited, changed or removed, please write to{" "}
          <a href={emailLink("Copyright request")}>{site.contactEmail}</a> and it will be dealt with quickly.
        </p>
      </>
    ),
  },
  {
    id: "university",
    title: "The University of Layyah name and logo",
    Icon: FiInfo,
    body: (
      <p>
        This is an independent student project. It is not owned, operated, reviewed or endorsed by the University of Layyah.
        The university&rsquo;s name and logo belong to the university. The logo used on this website is an original, stylised
        design that refers to the university only to show which students the notes are written for.
      </p>
    ),
  },
  {
    id: "links",
    title: "Links to other services",
    Icon: FiExternalLink,
    body: (
      <p>
        The website links to WhatsApp, to your email program and, in some notes, to other websites. Those are outside the
        maintainer&rsquo;s control, and their content, safety and privacy practices are their own responsibility.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    Icon: FiShield,
    body: (
      <p>
        How information is handled is explained in the <Link href="/privacy">Privacy Policy</Link>, which forms part of these
        terms.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    Icon: FiRefreshCw,
    body: (
      <p>
        These terms may be updated as the website grows. The date at the top shows when they were last changed. If you keep
        using the website after a change, you accept the new terms.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and contact",
    Icon: FiFileText,
    body: (
      <>
        <p>These terms are governed by the laws of Pakistan.</p>
        <p>
          Questions about these terms: <a href={emailLink("Question about the terms")}>{site.contactEmail}</a>, or see the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms and Conditions"
      Icon={FiFileText}
      intro="The notes are free for anyone to use. These are the simple rules for using this website."
      sections={sections}
    />
  );
}
