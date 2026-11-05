import Breadcrumbs from "@/components/Breadcrumbs";

// Shared layout for the simple text pages: About, Contact and Privacy.
export default function InfoPage({ title, intro, children }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      <h1 className="mt-4 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
        {title}
      </h1>
      {intro && <p className="mt-3 text-lg text-slate-600">{intro}</p>}
      <div className="mt-8 space-y-6 leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  );
}
