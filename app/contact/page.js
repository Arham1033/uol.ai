import InfoPage from "@/components/InfoPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact"
      intro="Found a mistake, or want to contribute notes? Get in touch."
    >
      <p className="rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-700">
        <strong>Placeholder:</strong> these contact details are examples.
        Replace them in <code className="font-mono">data/site.js</code> before
        publishing the website.
      </p>

      <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        <div className="px-5 py-4">
          <dt className="text-sm text-slate-500">Maintainer</dt>
          <dd className="mt-0.5 font-medium text-slate-900">
            {site.maintainerName}
          </dd>
        </div>
        <div className="px-5 py-4">
          <dt className="text-sm text-slate-500">Email</dt>
          <dd className="mt-0.5 font-medium text-slate-900">
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-navy-600 underline hover:text-navy-800"
            >
              {site.contactEmail}
            </a>
          </dd>
        </div>
        {site.githubUrl && (
          <div className="px-5 py-4">
            <dt className="text-sm text-slate-500">GitHub</dt>
            <dd className="mt-0.5 font-medium text-slate-900">
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 underline hover:text-navy-800"
              >
                {site.githubUrl}
              </a>
            </dd>
          </div>
        )}
      </dl>

      <p className="text-sm text-slate-600">
        Please include the semester, subject and page number when you report a
        problem with a note.
      </p>
    </InfoPage>
  );
}
