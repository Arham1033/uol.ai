import Image from "next/image";

// Renders the typed content blocks stored in data/subjects.js.
// This is a Server Component: no JavaScript is sent to the browser for it.

const CALLOUT_STYLES = {
  note: "border-navy-200 border-l-4 border-l-navy-500 bg-navy-50 text-navy-900",
  tip: "border-emerald-200 border-l-4 border-l-emerald-600 bg-emerald-50 text-emerald-900",
  warning: "border-accent-200 border-l-4 border-l-accent-500 bg-accent-50 text-accent-700",
};


// Turns small markers inside a text into styled pieces:
//   ^{2}        a raised power, so n^{2} shows as n with a small 2 above it
//   _{x}        a lowered subscript, so f_{x} shows as f with a small x below
//   **word**    a highlighted key word
// Everything else is plain text. Markers can be nested, e.g. A^{B^{C}}.
function Rich({ text }) {
  if (typeof text !== "string" || (!text.includes("^{") && !text.includes("_{") && !text.includes("**"))) {
    return text;
  }
  const parts = [];
  let i = 0;
  let buffer = "";
  const flush = () => {
    if (buffer) parts.push(buffer);
    buffer = "";
  };
  while (i < text.length) {
    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end !== -1) {
        flush();
        parts.push(
          <mark
            key={parts.length}
            className="rounded bg-accent-100 px-1 py-px font-semibold text-navy-900 [box-decoration-break:clone]"
          >
            <Rich text={text.slice(i + 2, end)} />
          </mark>,
        );
        i = end + 2;
        continue;
      }
    }
    if (text.startsWith("^{", i)) {
      let depth = 1;
      let j = i + 2;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth += 1;
        if (text[j] === "}") depth -= 1;
        j += 1;
      }
      if (depth === 0) {
        flush();
        parts.push(
          <sup key={parts.length} className="text-[0.7em] leading-none">
            <Rich text={text.slice(i + 2, j - 1)} />
          </sup>,
        );
        i = j;
        continue;
      }
    }
    if (text.startsWith("_{", i)) {
      let depth = 1;
      let j = i + 2;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth += 1;
        if (text[j] === "}") depth -= 1;
        j += 1;
      }
      if (depth === 0) {
        flush();
        parts.push(
          <sub key={parts.length} className="text-[0.7em] leading-none">
            <Rich text={text.slice(i + 2, j - 1)} />
          </sub>,
        );
        i = j;
        continue;
      }
    }
    buffer += text[i];
    i += 1;
  }
  flush();
  return <>{parts}</>;
}

// ---------------------------------------------------------------------------
// Example boxes: a fixed-height area that scrolls on its own, so a long
// example never makes the page huge.
//   slides  { type: "slides", title, label?, hint?, pages: [{ src, alt, width, height }] }  (label: "Slide" by default)
//   scrollbox { type: "scrollbox", title, blocks: [...] }  any blocks inside a scrolling box
//   steps   { type: "steps", title, indexes?, steps: [{ text, groups }] }
// In a step, each group is a row of boxes. A box is "5" or "5:c" where the
// letter after the colon is its state (see CELL_STATES).
// ---------------------------------------------------------------------------
const CELL_STATES = {
  c: { label: "being compared", box: "border-accent-500 bg-accent-100 text-navy-950" },
  s: { label: "in its final place", box: "border-emerald-500 bg-emerald-100 text-emerald-950" },
  f: { label: "found", box: "border-emerald-600 bg-emerald-200 text-emerald-950" },
  p: { label: "pivot or smallest", box: "border-navy-600 bg-navy-100 text-navy-950" },
  m: { label: "moving (key)", box: "border-accent-600 bg-accent-200 text-navy-950" },
  d: { label: "ruled out", box: "border-slate-200 bg-slate-100 text-slate-400" },
};

function ExampleBox({ title, hint, children }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-sm">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2 border-b border-navy-100 bg-navy-50 px-4 py-2.5">
        <span className="font-semibold text-navy-900"><Rich text={title} /></span>
        {hint && <span className="text-xs text-slate-500">{hint}</span>}
      </figcaption>
      <div
        className="max-h-[28rem] space-y-4 overflow-y-auto overscroll-contain p-4"
        tabIndex={0}
        role="region"
        aria-label={String(title).replace(/[\^_]\{([^}]*)\}/g, "$1")}
      >
        {children}
      </div>
    </figure>
  );
}

function StepsBlock({ block }) {
  const used = new Set();
  for (const step of block.steps) {
    for (const group of step.groups) {
      for (const cell of group) {
        const state = String(cell).split(":")[1];
        if (state) used.add(state);
      }
    }
  }
  return (
    <ExampleBox title={block.title}>
      {used.size > 0 && (
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600" aria-label="Colour key">
          {Object.keys(CELL_STATES)
            .filter((key) => used.has(key))
            .map((key) => (
              <li key={key} className="flex items-center gap-1.5">
                <span className={`h-3.5 w-3.5 rounded border ${CELL_STATES[key].box}`} aria-hidden="true" />
                {CELL_STATES[key].label}
              </li>
            ))}
        </ul>
      )}
      <ol className="space-y-4">
        {block.steps.map((step, stepIndex) => (
          <li key={stepIndex} className="rounded-xl border border-slate-200 bg-paper p-3.5">
            <p className="text-sm text-slate-700">
              <span className="mr-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-navy-900 px-1.5 text-xs font-semibold text-white">
                {stepIndex + 1}
              </span>
              <Rich text={step.text} />
            </p>
            <div className="mt-3 flex flex-wrap items-start gap-x-5 gap-y-3">
              {step.groups.map((group, groupIndex) => (
                <div key={groupIndex} className="flex gap-1.5">
                  {group.map((cell, cellIndex) => {
                    const [value, state] = String(cell).split(":");
                    const look = CELL_STATES[state]?.box ?? "border-slate-300 bg-white text-navy-900";
                    return (
                      <div key={cellIndex} className="text-center">
                        <div
                          className={`flex h-11 min-w-11 items-center justify-center rounded-lg border-2 px-1 text-base font-semibold ${look}`}
                        >
                          {value}
                        </div>
                        {block.indexes && (
                          <div className="mt-0.5 text-xs text-slate-400">{cellIndex}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </ExampleBox>
  );
}

// A worked example: a scrolling box of numbered steps. Each step has a short
// sentence (text) and optional lines of working (lines) shown like a formula.
//   { type: "worked", title, given?, steps: [{ text, lines: ["..."] }], answer? }
function WorkedBlock({ block }) {
  return (
    <ExampleBox title={block.title}>
      {block.given && (
        <p className="rounded-xl border border-navy-100 bg-navy-50 px-3.5 py-2.5 text-[0.95rem] text-navy-900">
          <Rich text={block.given} />
        </p>
      )}
      <ol className="space-y-3">
        {block.steps.map((step, stepIndex) => (
          <li key={stepIndex} className="rounded-xl border border-slate-200 bg-paper p-3.5">
            <p className="text-sm text-slate-700">
              <span className="mr-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-navy-900 px-1.5 text-xs font-semibold text-white">
                {stepIndex + 1}
              </span>
              <Rich text={step.text} />
            </p>
            {step.lines && (
              <div className="mt-2 overflow-x-auto rounded-lg border border-navy-100 bg-white px-3 py-2 font-mono text-[0.9rem] leading-7 text-navy-900">
                {step.lines.map((line, lineIndex) => (
                  <div key={lineIndex} className="whitespace-pre">
                    <Rich text={line} />
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
      {block.answer && (
        <p className="rounded-xl border border-emerald-200 border-l-4 border-l-emerald-600 bg-emerald-50 px-3.5 py-2.5 text-[0.95rem] font-medium text-emerald-900">
          <Rich text={block.answer} />
        </p>
      )}
    </ExampleBox>
  );
}

function SlidesBlock({ block }) {
  return (
    <ExampleBox
      title={block.title}
      hint={block.hint}
    >
      <ol className="space-y-4">
        {block.pages.map((page, pageIndex) => (
          <li key={page.src}>
            <p className="mb-1 text-xs font-medium text-slate-500">
              {block.label ?? "Slide"} {pageIndex + 1} of {block.pages.length}
            </p>
            <Image
              src={page.src}
              alt={page.alt}
              width={page.width}
              height={page.height}
              sizes="(min-width: 1024px) 700px, 100vw"
              className="h-auto w-full rounded-lg border border-slate-200 bg-white"
            />
          </li>
        ))}
      </ol>
    </ExampleBox>
  );
}

// Blocks marked rtl: true (Urdu) are written right to left in an Urdu font.
const rtlAttrs = (block) => (block.rtl ? { dir: "rtl", lang: "ur" } : {});
const rtlClass = (block) => (block.rtl ? " font-urdu leading-[2.2]" : "");

function renderBlock(block, key) {
  switch (block.type) {
    case "heading":
      return (
        <h4
          key={key}
          {...rtlAttrs(block)}
          className={`mt-4 border-b border-slate-200 pb-2 pt-4 font-serif text-2xl font-semibold text-navy-900${rtlClass(block)}`}
        >
          <Rich text={block.text} />
        </h4>
      );

    case "subheading":
      return (
        <h5 key={key} {...rtlAttrs(block)} className={`pt-2 font-serif text-lg font-semibold text-navy-700${rtlClass(block)}`}>
          <Rich text={block.text} />
        </h5>
      );

    case "paragraph":
      return (
        <p key={key} {...rtlAttrs(block)} className={rtlClass(block).trim()}>
          <Rich text={block.text} />
        </p>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          key={key}
          className={`ml-6 space-y-1.5 marker:text-accent-600 ${
            block.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}><Rich text={item} /></li>
          ))}
        </ListTag>
      );
    }

    case "code":
      if (block.language === "pseudocode") {
        return (
          <figure
            key={key}
            className="overflow-hidden rounded-xl border border-accent-200 bg-accent-50/60"
          >
            <figcaption className="border-b border-accent-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
              Pseudocode
            </figcaption>
            <pre className="overflow-x-auto p-4 font-mono text-sm leading-6 text-navy-900">
              <code>{block.code}</code>
            </pre>
          </figure>
        );
      }
      return (
        <figure
          key={key}
          className="overflow-hidden rounded-xl bg-navy-950 text-slate-100 shadow-md ring-1 ring-navy-800"
        >
          {block.language && (
            <figcaption className="border-b border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-navy-300">
              {block.language}
            </figcaption>
          )}
          <pre className="overflow-x-auto p-4 text-sm leading-6">
            <code>{block.code}</code>
          </pre>
        </figure>
      );

    case "math":
      return (
        <figure key={key}>
          <div className="overflow-x-auto rounded-xl border border-navy-100 bg-navy-50 px-4 py-3 font-mono text-[0.95rem] leading-7 text-navy-900">
            {block.lines.map((line, lineIndex) => (
              <div key={lineIndex} className="whitespace-pre">
                <Rich text={line} />
              </div>
            ))}
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-sm text-slate-500">
              <Rich text={block.caption} />
            </figcaption>
          )}
        </figure>
      );

    case "table":
      return (
        <figure key={key}>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-max border-collapse text-left text-[0.95rem]">
              <thead className="border-b border-navy-200 bg-navy-100 text-navy-900">
                <tr>
                  {block.headers.map((header, headerIndex) => (
                    <th
                      key={headerIndex}
                      scope="col"
                      className="px-4 py-2.5 font-semibold"
                    >
                      <Rich text={header} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 [&>tr:nth-child(even)]:bg-paper">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) =>
                      cellIndex === 0 ? (
                        <th
                          key={cellIndex}
                          scope="row"
                          className="px-4 py-2.5 font-medium text-navy-900"
                        >
                          <Rich text={cell} />
                        </th>
                      ) : (
                        <td key={cellIndex} className="px-4 py-2.5">
                          <Rich text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-sm text-slate-500">
              <Rich text={block.caption} />
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <aside
          key={key}
          {...rtlAttrs(block)}
          className={`rounded-xl border px-4 py-3.5${rtlClass(block)} ${
            CALLOUT_STYLES[block.variant] ?? CALLOUT_STYLES.note
          }`}
        >
          {block.title && (
            <p className="font-semibold">
              <Rich text={block.title} />
            </p>
          )}
          <p className="text-[0.95rem]"><Rich text={block.text} /></p>
        </aside>
      );

    case "steps":
      return <StepsBlock key={key} block={block} />;

    case "slides":
      return <SlidesBlock key={key} block={block} />;

    case "worked":
      return <WorkedBlock key={key} block={block} />;

    case "pairs": {
      // Arabic on the right, Urdu translation on the left (a row reads right to left).
      // On a tablet or desktop screen two pairs sit side by side in one row, in a smaller font.
      // A long sentence takes the whole row.
      const headers = block.headers ?? ["عربی", "اردو ترجمہ"];
      const isLong = (row) => row[0].length > 38 || row[1].length > 60;
      return (
        <div
          key={key}
          dir="rtl"
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="hidden grid-cols-2 border-b border-navy-200 bg-navy-100 text-sm font-semibold text-navy-900 sm:grid md:grid-cols-4">
            <div lang="ur" className="border-e border-navy-200 px-4 py-2.5">
              {headers[0]}
            </div>
            <div lang="ur" className="px-4 py-2.5 md:border-e md:border-navy-200">
              {headers[1]}
            </div>
            <div lang="ur" className="hidden border-e border-navy-200 px-4 py-2.5 md:block">
              {headers[0]}
            </div>
            <div lang="ur" className="hidden px-4 py-2.5 md:block">
              {headers[1]}
            </div>
          </div>
          <ul className="md:grid md:grid-cols-2">
            {block.rows.map((row, rowIndex) => (
              <li
                key={rowIndex}
                className={`grid border-b border-slate-100 sm:grid-cols-2 [&:nth-child(even)]:bg-paper md:[&:nth-child(even)]:bg-transparent ${
                  isLong(row)
                    ? "md:col-span-2"
                    : "md:[&:nth-child(odd)]:border-e md:[&:nth-child(odd)]:border-slate-200"
                }`}
              >
                <p
                  lang="ar"
                  className="px-4 pb-1 pt-3 font-arabic text-2xl leading-[2.1] text-navy-900 sm:border-e sm:border-slate-100 sm:py-3 md:py-2 md:text-xl md:leading-[1.9]"
                >
                  {row[0]}
                </p>
                <p
                  lang="ur"
                  className="px-4 pb-3 font-urdu text-[1.05rem] leading-[2.3] text-slate-700 sm:py-3 md:py-2 md:text-[0.9rem] md:leading-[2]"
                >
                  {row[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case "qa":
      return (
        <div
          key={key}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="px-5 pb-3 pt-4">
            <p className="font-semibold text-navy-900">
              <Rich text={block.question} />
            </p>
            {block.code && (
              <pre className="mt-3 overflow-x-auto rounded-lg bg-navy-950 p-3 text-sm leading-6 text-slate-100">
                <code>{block.code}</code>
              </pre>
            )}
          </div>
          <div className="border-t border-accent-200 border-l-4 border-l-accent-500 bg-accent-50 px-5 py-3.5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-700">
              Answer
            </p>
            <p className="mt-1 text-[0.95rem] text-navy-900">
              <Rich text={block.answer} />
            </p>
          </div>
        </div>
      );

    case "scrollbox":
      return (
        <ExampleBox key={key} title={block.title}>
          {block.blocks.map((inner, i) => renderBlock(inner, i))}
        </ExampleBox>
      );

    case "image":
      return (
        <figure key={key}>
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width ?? 1200}
            height={block.height ?? 800}
            sizes="(min-width: 1024px) 768px, 100vw"
            className="h-auto w-full rounded-xl border border-slate-200 bg-white"
          />
          {block.caption && (
            <figcaption className="mt-2 text-sm text-slate-500">
              <Rich text={block.caption} />
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

export default function TheoryContent({ blocks }) {
  return (
    <div className="space-y-4 text-[1.0625rem] leading-relaxed text-slate-700">
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
