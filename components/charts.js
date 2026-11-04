// Small charts for the About page. They are drawn with plain HTML and SVG (no chart library)
// and animate when scrolled into view (the Reveal wrapper adds the "is-visible" class).

import Reveal from "@/components/Reveal";

export const CHART_COLORS = ["#131e36", "#c29a3a", "#25b07a", "#485f8f", "#976d1a", "#6b7eaa", "#16805a"];

// Horizontal bars: items = [{ label, value, note? }]
export function BarList({ items, unit = "" }) {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <Reveal>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={item.label}>
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span className="font-medium text-slate-800">{item.label}</span>
              <span className="tabular-nums text-slate-500">
                {item.value.toLocaleString("en-US")}
                {unit}
              </span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-navy-50">
              <div
                className="bar-fill h-full rounded-full bg-gradient-to-r from-navy-700 to-accent-500"
                style={{ width: `${Math.max(3, (item.value / max) * 100)}%`, "--bar-delay": `${i * 90}ms` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

// Vertical columns: items = [{ label, value }]
export function ColumnChart({ items, height = 190 }) {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-2 sm:gap-3" style={{ height }}>
        {items.map((item, i) => (
          <div key={item.label} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1.5">
            <span className="text-xs font-semibold tabular-nums text-slate-600">{item.value}</span>
            <div className="flex w-full flex-1 items-end">
              <div
                className="col-fill w-full rounded-t-lg bg-gradient-to-t from-navy-800 to-navy-500"
                style={{
                  height: item.value === 0 ? "3px" : `${Math.max(6, (item.value / max) * 100)}%`,
                  opacity: item.value === 0 ? 0.25 : 1,
                  "--bar-delay": `${i * 80}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between gap-2 sm:gap-3 border-t border-slate-200 pt-2">
        {items.map((item) => (
          <span key={item.label} className="min-w-0 flex-1 text-center text-xs text-slate-500">
            {item.label}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

// Donut: items = [{ name, value }]
export function DonutChart({ items, centerLabel, centerValue }) {
  const total = items.reduce((sum, i) => sum + i.value, 0) || 1;
  const r = 70;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <Reveal>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
        <div className="relative h-48 w-48 shrink-0">
          <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90" role="img" aria-label="Share of each kind of content">
            <circle cx="90" cy="90" r={r} fill="none" stroke="#e3e8f2" strokeWidth="22" />
            {items.map((item, i) => {
              const len = (item.value / total) * circ;
              const dash = Math.max(0, len - 2);
              const el = (
                <circle
                  key={item.name}
                  className="donut-seg"
                  cx="90"
                  cy="90"
                  r={r}
                  fill="none"
                  stroke={CHART_COLORS[i % CHART_COLORS.length]}
                  strokeWidth="22"
                  strokeDashoffset={-offset}
                  style={{ "--len": `${dash}px`, "--circ": `${circ}px`, "--seg-delay": `${i * 110}ms` }}
                />
              );
              offset += len;
              return el;
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-serif text-3xl font-semibold text-navy-900">{centerValue}</span>
            <span className="text-xs text-slate-500">{centerLabel}</span>
          </div>
        </div>
        <ul className="w-full space-y-2.5 text-sm">
          {items.map((item, i) => (
            <li key={item.name} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2.5 text-slate-700">
                <span className="h-3 w-3 rounded-sm" style={{ background: CHART_COLORS[i % CHART_COLORS.length] }} />
                {item.name}
              </span>
              <span className="tabular-nums text-slate-500">
                {item.value.toLocaleString("en-US")} · {Math.round((item.value / total) * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
