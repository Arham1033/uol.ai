import Link from "next/link";
import {
  FiCheckCircle,
  FiDatabase,
  FiEdit3,
  FiEye,
  FiGlobe,
  FiLock,
  FiMessageCircle,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import PolicyPage from "@/components/PolicyPage";
import { emailLink, site, whatsappLink } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How the AI Notes Library treats your information: it collects none and has no accounts, forms or tracking.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    Icon: FiShield,
    body: (
      <>
        <p>
          The {site.name} is a free website of study notes. Your privacy matters, and the site is designed to need as little
          information about you as possible. In short: <strong>there are no accounts, no sign-up, no forms, no advertising and no
          tracking tools on this website.</strong>
        </p>
        <p>
          This policy explains what happens when you read the notes, what third parties are involved, and what happens if you
          choose to contact {site.maintainerName}.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "Information we collect",
    Icon: FiDatabase,
    body: (
      <>
        <p>
          The website does not ask you for your name, email address, phone number or any other personal detail, and it has no
          comment boxes or upload forms. Nothing you read or search for is saved to a user profile.
        </p>
        <p>The only technical information involved is described in the next sections: standard server logs kept by the hosting provider, and the requests your browser makes to load fonts.</p>
      </>
    ),
  },
  {
    id: "search",
    title: "Search and reading",
    Icon: FiSearch,
    body: (
      <p>
        The search boxes work inside your own browser, on the list of subjects that is already loaded with the page. What you
        type into a search box is not sent to us or stored. The notes are served as ordinary pages and images.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and local storage",
    Icon: FiEye,
    body: (
      <p>
        This website does not set cookies and does not store information about you in your browser&rsquo;s local storage. It
        does not use analytics, advertising or tracking cookies. If this ever changes, this policy will be updated first.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    Icon: FiGlobe,
    body: (
      <>
        <p>A few outside services are involved in showing you the website:</p>
        <ul>
          <li>
            <strong>Hosting provider.</strong> The site is delivered by a hosting company, which may keep standard server logs
            (for example IP address, browser type and the pages requested) for security and reliability.
          </li>
          <li>
            <strong>Google Fonts.</strong> The Arabic and Urdu fonts are loaded from Google Fonts. Your browser contacts Google
            to download them, so Google may receive your IP address and browser details under its own privacy policy.
          </li>
          <li>
            <strong>WhatsApp and your email app.</strong> The contact buttons open WhatsApp or your email program. Those
            services are run by other companies and follow their own privacy policies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contacting",
    title: "When you contact me",
    Icon: FiMessageCircle,
    body: (
      <>
        <p>
          If you send a message by WhatsApp or email, {site.maintainerName} receives your phone number or email address and
          whatever you write. This is used only to read your message, reply to you and, where relevant, correct or improve the
          notes. It is not sold, shared for marketing or added to any list.
        </p>
        <p>
          You can ask for your messages to be deleted at any time by writing to{" "}
          <a href={emailLink("Delete my messages")}>{site.contactEmail}</a>.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Students and children",
    Icon: FiUsers,
    body: (
      <p>
        The notes are meant for university students, but nobody is asked for personal information, so the website can be used
        safely by readers of any age. Parents and guardians who have a concern can contact me using the details below.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    Icon: FiLock,
    body: (
      <p>
        Because the site holds no accounts or personal records, there is no personal database that could be exposed. The
        pages are served over a secure (HTTPS) connection by the hosting provider. No method of transmission over the internet
        is perfectly secure, but there is very little here to protect.
      </p>
    ),
  },
  {
    id: "corrections",
    title: "Content, corrections and removal",
    Icon: FiEdit3,
    body: (
      <>
        <p>
          Notes are shared for study and may contain mistakes. If you find an error, or if you are the author of material
          shown here and want it credited, changed or removed, please get in touch and it will be handled promptly.
        </p>
        <p>
          <strong>If you are not satisfied with the notes</strong> (for example something is wrong, unclear or missing), please{" "}
          <Link href="/contact">contact me</Link> or message on{" "}
          <a href={whatsappLink("Assalam o Alaikum, I have some feedback about the notes on the AI Notes Library.")} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          . Your feedback is the quickest way to make the notes better for everyone.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    Icon: FiRefreshCw,
    body: (
      <p>
        This policy may be updated from time to time, for example if a new feature is added to the website. The date at the top of
        the page shows when it was last changed. Continued use of the website after a change means you accept the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    Icon: FiCheckCircle,
    body: (
      <>
        <p>
          {site.maintainerName}
          <br />
          Email: <a href={emailLink("Privacy question")}>{site.contactEmail}</a>
          <br />
          WhatsApp:{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            {site.whatsappDisplay}
          </a>
        </p>
        <p className="text-sm text-slate-500">
          This is an independent student project. It is not operated or endorsed by the University of Layyah.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      Icon={FiShield}
      intro="What this website does, and does not do, with your information."
      sections={sections}
    />
  );
}
