import InfoPage from "@/components/InfoPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro="A plain-language summary of how this website treats your information."
    >
      <p className="rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-700">
        <strong>Editable template:</strong> this text is a starting point only.
        It has <strong>not</strong> been reviewed by a lawyer. Edit it so that
        it accurately describes your website before you publish, and update it
        if you add analytics, advertising, forms or accounts.
      </p>

      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          Information we collect
        </h2>
        <p className="mt-2">
          This website does not ask for accounts or personal details and does
          not include forms. The notes are served as static pages and images.
          The search boxes run in your browser and nothing you type is sent
          to us.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          Hosting and analytics
        </h2>
        <p className="mt-2">
          The website is hosted by a third-party provider, which may keep
          standard server logs (for example IP address, browser type and the
          pages requested) for security and reliability. [Edit this section:
          state which host you use, and mention any analytics tool if you add
          one.]
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          Cookies
        </h2>
        <p className="mt-2">
          The website itself does not set cookies. [Edit this section if you
          add a service that does.]
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          Content and corrections
        </h2>
        <p className="mt-2">
          Notes are shared for study purposes and may contain errors. If you
          are the author of material shown here and want it credited or
          removed, please use the contact details below.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-navy-900">
          Contact
        </h2>
        <p className="mt-2">
          Questions about this policy:{" "}
          <a
            href={`mailto:${site.contactEmail}`}
            className="font-medium text-navy-600 underline hover:text-navy-800"
          >
            {site.contactEmail}
          </a>{" "}
          (placeholder address).
        </p>
      </section>

      <p className="text-sm text-slate-500">
        This is an independent student project and is not operated or endorsed
        by the University of Layyah.
      </p>
    </InfoPage>
  );
}
