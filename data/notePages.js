// Helpers that turn a list of image file names into the page objects the
// notes reader needs. Used by data/subjects.js and the files in data/notes/.

// Handwritten note pages for one chapter.
//   folder  folder inside /public/notes, e.g. "semester-1/calculus"
//   files   image file names IN READING ORDER. Reorder this list to reorder pages.
//           An entry can also be { file: "page-01.webp", alt: "Custom alt text" }.
//   altBase short description used to generate alt text
//   size    optional { width, height } of your images (defaults to 1200 x 1600)
export function notePages(folder, files, altBase, size = {}) {
  return files.map((entry, index) => {
    const file = typeof entry === "string" ? entry : entry.file;
    const alt =
      typeof entry === "string" || !entry.alt
        ? `${altBase}, page ${index + 1}`
        : entry.alt;

    return {
      src: `/notes/${folder}/${file}`,
      alt,
      width: size.width ?? 1200,
      height: size.height ?? 1600,
    };
  });
}

// Lecture slides saved as slide-01.webp, slide-02.webp, ...
//   folder   folder inside /public/notes
//   numbers  slide numbers IN READING ORDER, e.g. [2, 3, 5]
//   title    name of the lecture, used in the alt text ("<title>, slide 5")
//   size     { width, height } of the slide images
export function slidePages(folder, numbers, title, size = { width: 1000, height: 750 }) {
  return numbers.map((number) => ({
    src: `/notes/${folder}/slide-${String(number).padStart(2, "0")}.webp`,
    alt: `${title}, slide ${number}`,
    width: size.width,
    height: size.height,
  }));
}
