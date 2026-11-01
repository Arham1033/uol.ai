# University of Layyah AI Notes Library

A static-first Next.js (App Router, JavaScript, Tailwind CSS v4) website for reading AI course notes by semester and subject. No database, no login, no backend: all content lives in two data files.

> All subjects, course codes and instructors in `data/subjects.js` are **sample data** (`isSample: true`). They are not the official University of Layyah curriculum. Replace them with your own.

---

## 1. Project structure

```
layyah-ai-notes/
├── app/
│   ├── layout.js                        # navbar + footer shell, site metadata
│   ├── page.js                          # homepage
│   ├── globals.css                      # Tailwind import + colour theme
│   ├── not-found.js                     # 404 page (bad URLs, semesters, subjects)
│   ├── about/page.js
│   ├── contact/page.js
│   ├── privacy/page.js                  # editable template, not legal advice
│   └── semester/
│       └── [semester]/
│           ├── page.js                  # /semester/1 ... /semester/8
│           └── [subject]/page.js        # /semester/1/calculus ...
├── components/
│   ├── Navbar.js  Footer.js  Breadcrumbs.js
│   ├── SemesterCard.js  SubjectCard.js
│   ├── NotesReader.js                   # handwritten page viewer (client)
│   ├── TheoryContent.js                 # renders typed content blocks
│   ├── HomeSearch.js  SubjectBrowser.js # search boxes (client)
│   └── InfoPage.js                      # layout shared by About/Contact/Privacy
├── data/
│   ├── site.js                          # site name, contact placeholders
│   ├── semesters.js                     # the 8 semesters
│   ├── subjects.js                      # ALL subjects (short ones keep their notes here)
│   ├── notePages.js                     # notePages() and slidePages() helpers
│   └── notes/                           # ONE file per long subject
│       └── semester-3/              # one folder per semester, one .js per subject
│           ├── data-structure.js
│           ├── pakistan-studies.js
│           └── islamiyat.js
├── lib/
│   ├── library.js                       # server-side data lookups
│   └── helpers.js                       # search + formatting (safe for client)
├── public/notes/                        # your note images go here
├── next.config.js  postcss.config.js  jsconfig.json  package.json
```

Differences from the suggested structure: added `lib/` (two small helper files), `Breadcrumbs`, `TheoryContent`, `HomeSearch`, `SubjectBrowser` and `InfoPage`, each of which is used in more than one place or keeps a page readable.

## 2. Dependencies

Requires **Node.js 20.9 or newer**.

| Package | Type |
| --- | --- |
| `next`, `react`, `react-dom` | dependencies |
| `tailwindcss`, `@tailwindcss/postcss`, `postcss` | devDependencies |

They are already listed in `package.json`, so `npm install` installs everything. No other packages (no icon library) are used; icons are inline SVG.

## 3. Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run this before deploying)
npm start        # serve the production build
```

## 4. Replace the sample curriculum

1. Open `data/subjects.js`.
2. Edit or delete the sample subjects. For each real subject, change `name`, `code`, `instructors`, `description`, `topics` and `status`, and **delete the `isSample: true` line**. (The yellow "sample data" notices disappear once no subject has it.)
3. Leave `instructors: []` if you don't know the instructor: the site shows "Not added yet".
4. Edit `data/semesters.js` if you want different semester titles or descriptions. Those texts are also sample wording.
5. Edit `data/site.js` with your real name and contact email, and update the Privacy page text.

## 5. Add a new subject

Add an object to the `subjects` array in `data/subjects.js`. Only three fields are required:

```js
{
  slug: "machine-learning",        // becomes /semester/4/machine-learning
  semester: 4,
  name: "Machine Learning",
  instructors: ["Dr. Example"],    // optional
  description: "What this subject covers.",
  status: "in-progress",           // "available" | "in-progress" | "coming-soon"
  updatedAt: "2026-10-14",         // optional, drives "Recently added"
}
```

The slug must be lowercase letters, digits and hyphens, and unique within its semester. The subject appears on its semester page, in search, and gets its own URL automatically.

## 6. Add handwritten note images

1. Photograph, crop and compress each page, then save them as WebP (about 1200 px wide is a good size) with ordered names:

   ```
   public/notes/semester-4/machine-learning/page-01.webp
   public/notes/semester-4/machine-learning/page-02.webp
   ```

2. In the subject's entry, add a chapter and list the files with `notePages()` (defined in `data/notePages.js`, imported at the top of `data/subjects.js`):

   ```js
   chapters: [
     {
       title: "Introduction",
       pages: notePages(
         "semester-4/machine-learning",           // folder inside public/notes
         ["page-01.webp", "page-02.webp"],        // reading order
         "Machine Learning handwritten notes, introduction"  // alt text base
       ),
     },
   ],
   ```

3. **To reorder, add or remove pages, edit that list of file names.** The reader's "Page 1 of N" updates automatically.
4. Custom alt text for one page: use `{ file: "page-02.webp", alt: "Diagram of a decision tree" }` instead of a plain string.
5. If your photos are not 1200 × 1600, pass the size as the fourth argument: `notePages(folder, files, alt, { width: 1000, height: 1400 })`. Only the proportions matter. Pages with a different shape from the others are best put in their own chapter.

The sample `page-0X.webp` files are labelled placeholders. Delete or overwrite them when you add real pages. If a listed file doesn't exist, the reader shows a helpful "couldn't be loaded" message (with the expected path) instead of breaking.

Typed notes go in the chapter's `theory` list. The available block types (`heading`, `subheading`, `paragraph`, `list`, `code`, `math`, `table`, `callout`, `image`) are documented at the top of `data/subjects.js` with examples in the sample subjects. Equation or diagram images work with the `image` block.

### The Data Structures subject (semester 3)

`/semester/3/data-structure` has 11 chapters of typed notes with worked examples, tables and practice questions (answer shown under each question).

- **Where things are:** all chapters are in ONE file, `data/notes/semester-3/data-structure.js`. The list at the bottom sets the reading order. **To reorder chapters, reorder that list.**
- **Algorithms:** the search and sort chapters give each algorithm twice, as steps in plain words and as simple pseudocode, with a note to learn ONE of them.
- **Examples:** each worked example has a short explanation, a scrollable box of the lecture slides (`slides` block) where the lecture had example slides, and a scrollable box of small step-by-step boxes (`steps` block). Linear search, binary search and quick sort had no example slides in the files supplied, so they only have the step-by-step boxes. A step is written as `{ text: "...", groups: [["5:c", "1:c", "4"]] }`: each group is a row of boxes, and `:c` (compared), `:s` (final place), `:p` (pivot), `:m` (moving), `:f` (found), `:d` (ruled out) colour a box.
- **Programs:** only a few simple Python programs are included (a list/array demo, simple list methods and a short stack). The search and sort chapters and the three linked-list sections have an empty block marked `# Write your Python program here`; type your own program inside it.
- **Powers:** write a power as `n^{2}` in any text; it shows as a small raised 2. The same works in tables and lists.
- **Slide pictures:** `public/notes/semester-3/data-structure/examples/slides/`.
- **Practice questions:** add one with `{ type: "qa", question: "...", code: "optional code", answer: "..." }`.
- **Marked additions:** parts that your slides did not cover (quick sort, binary search, doubly and circular linked lists, space complexity, prefix) are marked "Added from standard textbooks".
- The instructor is not filled in ("Not added yet"). Add it in `data/subjects.js` with `instructors: ["Name"]`.

### The Pakistan Studies subject (semester 3)

`/semester/3/pakistan-studies` has 6 chapters in ONE file, `data/notes/semester-3/pakistan-studies.js`, built from a single typed lecture document: significance of Pakistan, political structure and parties, ideology, challenges since 1947, the Pakistan Movement (1857 to 1947) and the wars. Each chapter has exam tips. Key words are highlighted automatically: edit the `KEY_TERMS` list at the bottom of the file, or write `**word**` in any text to highlight it by hand.

- Facts in the source that looked doubtful are marked "Check this" in the text (the IMF programme count and the 56,000 sq km figure for 1971). Confirm them with your instructor and edit the callouts.
- The author's name and phone number in the source document were deliberately left out. Add an instructor in `data/subjects.js` with `instructors: ["Name"]`.

### Computer Organization and Assembly Language (CS-603), semester 3

Split into two sections in `data/notes/semester-3/coal/`: `lectures.js` (Lectures 1 to 4) and `labs.js` (Labs 1 to 4), listed in `index.js`. Lab screenshots live in `public/notes/semester-3/coal/labs/labN/` and are shown in scrolling boxes. To add a lab, add another `const lab5 = {...}` in `labs.js` and put it in `labLessons`.

### BBA (Entrepreneurship), semester 3

All six chapters are in one file, `data/notes/semester-3/entrepreneurship.js`, in teaching order: Ch 1 basics, Ch 2 entrepreneurial process, Ch 3 classifications and models, Ch 4 entrepreneur vs intrapreneur, Ch 5 legal issues, then the Airbnb case study. Questions from the source files are solved as Q&A blocks. The instructor is Mam Rida Najaf (set in `instructors` in `data/subjects.js`).

### The Islamiyat / Fehm-ul-Quran subject (semester 3)

This is a big book, so it is split into units. The subject page shows one card per unit, and each unit has its own page (`/semester/3/islamiyat-fehm-ul-quran/unit-4`), so no page gets too long.

- **Files:** `data/notes/semester-3/islamiyat/` has one file per unit (`unit-1.js` to `unit-6.js`, plus `unit-4-more.js`) and `index.js`, which lists the units in order. All six units are filled in. Instructor: Sir Syed Abbas Raza. Layout: Arabic on the right and Urdu on the left, two pairs per row on wide screens. The book gives only Arabic, so the Urdu meanings and all solved exercises were added by hand: check them with your teacher. Unit 4 lessons 1 to 5 come from the docx; the rest from the book. Some scanned pages were blurry (e.g. book p. 183).
- **Adding lessons:** open the unit's file, add one more `const` lesson and put it in the list at the bottom. **Adding a unit:** create `unit-5.js` the same way, then import it in `index.js` and add one line to the list.
- **Layout:** a `pairs` block is a list of `[arabic, urdu]` rows. The Arabic is on the right in a large Arabic font and the Urdu on the left. On a wide screen two pairs sit side by side in one row in a smaller font; long sentences take the whole row; on a phone each pair is stacked. Blocks with `rtl: true` are written right to left. Fonts (Amiri and Noto Nastaliq Urdu) load from Google Fonts at the top of `app/globals.css`.
- The instructor is not added yet (`instructors: []`). The student's name and roll number in the source document are not published.

### Design

Colours, fonts and the hero background are defined once in `app/globals.css` (navy ink, brass accent, warm ivory paper, serif headings). To re-colour the whole site, change the `--color-navy-*` and `--color-accent-*` values there.

## 7. Deploy to GitHub and Vercel

```bash
cd layyah-ai-notes
git init
git add .
git commit -m "Initial commit"
git branch -M main
# create an empty repository on github.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/layyah-ai-notes.git
git push -u origin main
```

Then at [vercel.com](https://vercel.com): **Add New → Project → import the GitHub repository → Deploy**. Vercel detects Next.js automatically; no settings need changing. Every later `git push` to `main` redeploys the site.

Note: GitHub rejects single files over 100 MB, and large image folders slow deployments, so keep each page image compressed (a few hundred KB each).

## 8. How the dynamic routes work

- `app/semester/[semester]/page.js`: the folder name `[semester]` is a placeholder. A visit to `/semester/3` gives the page `params.semester === "3"`. It looks that semester up in `data/semesters.js`, collects the subjects whose `semester` is 3, and renders them. One file serves all eight semesters.
- `app/semester/[semester]/[subject]/page.js`: the same idea with two placeholders. `/semester/1/calculus` becomes `{ semester: "1", subject: "calculus" }`, and the page finds the subject with that semester and slug.
- `generateStaticParams()` in both files lists every valid URL from the data files, so Next.js pre-builds each page at `npm run build`. `dynamicParams = false` means any other URL, and any lookup that fails, shows `not-found.js` (404).
- Adding a subject to `data/subjects.js` adds its page: no new files are needed.
- In Next.js 15 and 16, `params` is a Promise, which is why the pages `await params`.

Search: `HomeSearch` (homepage) and `SubjectBrowser` (semester pages) are the only interactive Client Components besides the navbar and the notes reader. They receive small summaries of the real data from the server page and filter them in the browser. Everything else renders on the server.
