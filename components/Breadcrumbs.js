import Link from "next/link";

// items: [{ label: "Home", href: "/" }, { label: "Semester 1", href: "/semester/1" }, { label: "Calculus" }]
// The last item is the current page and is not a link.
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-slate-300">
                  ›
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-navy-700 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "font-medium text-slate-700" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
