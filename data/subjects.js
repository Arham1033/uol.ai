import { notePages } from "@/data/notePages";
import { dataStructureChapters } from "@/data/notes/semester-3/data-structure";
import { multivariableCalculusChapters } from "@/data/notes/semester-3/multivariable-calculus";
import { coalUnits } from "@/data/notes/semester-3/coal";
import { entrepreneurshipChapters } from "@/data/notes/semester-3/entrepreneurship";
import { islamiyatUnits } from "@/data/notes/semester-3/islamiyat";
import { pakistanStudiesChapters } from "@/data/notes/semester-3/pakistan-studies";
import { softwareEngineeringChapters } from "@/data/notes/semester-3/software-engineering";

// ============================================================================
//  CENTRAL SUBJECT DATA
//  Every subject, chapter, typed note and handwritten-page path lives here.
// ============================================================================
//
//  IMPORTANT: subjects marked `isSample: true` are SAMPLE DATA.
//  Their names, codes and instructors are examples for testing the website.
//  They are NOT the official University of Layyah curriculum.
//  Replace them with your real subjects (see README.md). Once a subject no
//  longer has `isSample: true`, the "sample data" notice disappears for it.
//  (Data Structures in semester 3 is real content: its chapters live in
//  data/notes/semester-3/ because they are long. Islamiyat is split into units: data/notes/semester-3/islamiyat/unit-N.js.)
//
//  A subject only needs: slug, semester, name. Everything else is optional.
//
//  Fields
//  ------
//  slug          URL part, e.g. "calculus" -> /semester/1/calculus (unique, lowercase, hyphens)
//  semester      1 to 8
//  code          course code, or omit it
//  name          subject title
//  instructors   ["Name"], or [] / omit it to show "Not added yet"
//  description   one or two sentences
//  totalChapters planned number of chapters (optional, shown as "2 of 6 added")
//  topics        topics covered (also used by search)
//  status        "available" | "in-progress" | "coming-soon"
//  contributor   credit line, e.g. "Notes by Your Name"
//  pdfUrl        optional link to a PDF, e.g. "/pdfs/calculus.pdf"
//  updatedAt     "YYYY-MM-DD", used for "recently added" on the homepage
//  chapters      list of chapters (see below)
//
//  Chapter fields: title, summary (optional), theory (typed content blocks),
//  pages (note images; use notePages() or slidePages() from data/notePages.js),
//  pagesKind ("handwritten" by default, or "slides" for lecture-slide images).
//
//  A subject with a lot of content can keep its chapters in their own file
//  (see data/notes/semester-3/, one file per subject) and use `chapters: thatList`.
//
//  Typed content blocks (used inside `theory`)
//  -------------------------------------------
//  { type: "heading",    text: "..." }
//  { type: "subheading", text: "..." }
//  { type: "paragraph",  text: "..." }
//  { type: "list",       items: ["...", "..."], ordered: true }   // ordered is optional
//  { type: "code",       language: "python", code: "..." }
//  { type: "math",       lines: ["line 1", "line 2"], caption: "..." }   // caption optional
//  { type: "table",      headers: ["A", "B"], rows: [["1", "2"]], caption: "..." }   // caption optional
//  { type: "callout",    variant: "note" | "tip" | "warning", title: "...", text: "..." }
//  { type: "image",      src: "/notes/...", alt: "...", width: 1200, height: 800, caption: "..." }

export const subjects = [
  // ==========================================================================
  //  SEMESTER 1
  // ==========================================================================
  {
    slug: "programming-fundamentals",
    semester: 1,
    code: "SAMPLE-101",
    name: "Programming Fundamentals",
    instructors: ["Sample Instructor A"],
    description:
      "Sample subject: the basics of writing programs, from variables and data types to decisions and loops.",
    totalChapters: 2,
    topics: ["Variables", "Data types", "Conditions", "Loops"],
    status: "available",
    contributor: "Sample contributor (replace with your name)",
    updatedAt: "2026-10-12",
    isSample: true,
    chapters: [
      {
        title: "Introduction to Programming",
        summary:
          "What a program is, how data is stored in variables, and the basic data types.",
        theory: [
          { type: "heading", text: "What is a program?" },
          {
            type: "paragraph",
            text: "A program is a set of instructions that tells a computer how to carry out a task. However large it is, every program follows the same basic cycle:",
          },
          {
            type: "list",
            items: [
              "Input: data enters the program (keyboard, file, sensor).",
              "Processing: the program works on the data.",
              "Output: results are shown or saved.",
              "Storage: values are kept in memory while the program runs.",
            ],
          },
          { type: "heading", text: "Variables and data types" },
          {
            type: "paragraph",
            text: "A variable is a named place in memory that holds a value. The type of the value decides which operations you can perform on it.",
          },
          {
            type: "code",
            language: "python",
            code: `student_name = "Sample Student"
age = 19
gpa = 3.4
is_enrolled = True

print(student_name, age, gpa, is_enrolled)`,
          },
          {
            type: "callout",
            variant: "tip",
            title: "Naming tip",
            text: "Choose names that describe what the variable stores, such as total_marks instead of x. Your future self will thank you.",
          },
        ],
        pages: notePages(
          "semester-1/programming-fundamentals",
          ["page-01.webp", "page-02.webp", "page-03.webp"],
          "Programming Fundamentals handwritten notes, chapter 1",
        ),
      },
      {
        title: "Control Flow and Loops",
        summary: "Choosing between actions and repeating work.",
        theory: [
          { type: "heading", text: "Making decisions with if / else" },
          {
            type: "paragraph",
            text: "Conditions let a program choose what to do. Python checks each condition from top to bottom and runs the first block whose condition is true.",
          },
          {
            type: "code",
            language: "python",
            code: `marks = 72

if marks >= 80:
    grade = "A"
elif marks >= 65:
    grade = "B"
else:
    grade = "C"

print("Grade:", grade)`,
          },
          { type: "heading", text: "Repeating work with loops" },
          {
            type: "list",
            ordered: true,
            items: [
              "Use a for loop when you know how many times to repeat.",
              "Use a while loop when you repeat until a condition changes.",
              "Use break to leave a loop early and continue to skip to the next round.",
            ],
          },
          {
            type: "code",
            language: "python",
            code: `total = 0
for number in range(1, 6):
    total += number

print("Sum of 1 to 5 is", total)`,
          },
        ],
      },
    ],
  },
  {
    slug: "calculus",
    semester: 1,
    code: "SAMPLE-102",
    name: "Calculus and Analytic Geometry",
    instructors: ["Sample Instructor B"],
    description:
      "Sample subject: limits, continuity and the first ideas of differentiation.",
    topics: ["Limits", "Continuity", "Derivatives", "Rates of change"],
    status: "in-progress",
    contributor: "Sample contributor (replace with your name)",
    updatedAt: "2026-10-10",
    isSample: true,
    chapters: [
      {
        title: "Limits and Continuity",
        summary: "What it means for a function to approach a value.",
        theory: [
          { type: "heading", text: "The idea of a limit" },
          {
            type: "paragraph",
            text: "The limit of f(x) as x approaches a is the value that f(x) gets closer and closer to as x gets closer to a. The function does not need to be defined at a itself.",
          },
          {
            type: "math",
            lines: ["lim (x → a)  f(x) = L"],
            caption:
              "Read as: the limit of f of x, as x approaches a, equals L.",
          },
          {
            type: "image",
            src: "/notes/semester-1/calculus/limit-diagram.webp",
            alt: "Sample diagram placeholder showing where a limit diagram would go",
            width: 1200,
            height: 800,
            caption: "Diagram (sample placeholder image).",
          },
          { type: "subheading", text: "Worked example" },
          {
            type: "math",
            lines: [
              "lim (x → 2)  (x² − 4) / (x − 2)",
              "= lim (x → 2)  (x − 2)(x + 2) / (x − 2)",
              "= lim (x → 2)  (x + 2)",
              "= 4",
            ],
          },
          { type: "subheading", text: "Basic limit laws" },
          {
            type: "list",
            items: [
              "Sum: lim (f + g) = lim f + lim g",
              "Constant multiple: lim (c · f) = c · lim f",
              "Product: lim (f · g) = lim f · lim g",
              "Quotient: lim (f / g) = lim f / lim g, provided lim g ≠ 0",
            ],
          },
          {
            type: "callout",
            variant: "note",
            title: "Remember",
            text: "A limit describes the behaviour of a function near a point, not necessarily at that point.",
          },
        ],
        pages: notePages(
          "semester-1/calculus",
          ["page-01.webp", "page-02.webp"],
          "Calculus handwritten notes, limits and continuity",
        ),
      },
      {
        title: "Derivatives",
        summary: "Measuring how fast a quantity changes.",
        theory: [
          { type: "heading", text: "The derivative as a rate of change" },
          {
            type: "math",
            lines: ["f′(x) = lim (h → 0)  [ f(x + h) − f(x) ] / h"],
            caption: "Definition of the derivative.",
          },
          { type: "subheading", text: "Common rules" },
          {
            type: "list",
            items: [
              "Power rule: d/dx (xⁿ) = n · xⁿ⁻¹",
              "Constant rule: d/dx (c) = 0",
              "Sum rule: d/dx (f + g) = f′ + g′",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "functional-english",
    semester: 1,
    code: "SAMPLE-103",
    name: "Functional English",
    instructors: [],
    description:
      "Sample subject: reading, writing and speaking skills for academic life.",
    topics: ["Grammar", "Paragraph writing", "Comprehension"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "introduction-to-computing",
    semester: 1,
    code: "SAMPLE-104",
    name: "Introduction to Computing",
    instructors: ["Sample Instructor A", "Sample Instructor C"],
    description:
      "Sample subject: how computers work, from hardware to number systems.",
    totalChapters: 4,
    topics: ["Hardware", "Software", "Number systems"],
    status: "in-progress",
    updatedAt: "2026-10-05",
    isSample: true,
    chapters: [
      {
        title: "Computer Systems Overview",
        summary: "The main parts of a computer and how numbers are stored.",
        theory: [
          { type: "heading", text: "Main parts of a computer" },
          {
            type: "list",
            items: [
              "CPU: carries out instructions.",
              "Memory (RAM): holds data and programs while they run.",
              "Storage: keeps data when the power is off.",
              "Input and output devices: keyboard, screen, printer and so on.",
            ],
          },
          { type: "heading", text: "Number systems" },
          {
            type: "paragraph",
            text: "Computers store everything as binary digits (bits). Each position in a binary number is a power of 2.",
          },
          {
            type: "math",
            lines: ["1011₂ = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 11₁₀"],
            caption: "Converting binary 1011 to decimal.",
          },
        ],
      },
    ],
  },

  // ==========================================================================
  //  SEMESTER 2
  // ==========================================================================
  {
    slug: "object-oriented-programming",
    semester: 2,
    code: "SAMPLE-201",
    name: "Object-Oriented Programming",
    instructors: ["Sample Instructor B"],
    description:
      "Sample subject: designing programs with classes, objects, inheritance and polymorphism.",
    totalChapters: 6,
    topics: ["Classes", "Objects", "Inheritance", "Polymorphism"],
    status: "in-progress",
    contributor: "Sample contributor (replace with your name)",
    updatedAt: "2026-10-11",
    isSample: true,
    chapters: [
      {
        title: "Classes and Objects",
        summary: "Bundling data and behaviour together.",
        theory: [
          { type: "heading", text: "Why classes?" },
          {
            type: "paragraph",
            text: "A class is a blueprint that groups related data (attributes) and actions (methods). An object is one concrete instance created from that blueprint.",
          },
          {
            type: "code",
            language: "python",
            code: `class Student:
    def __init__(self, name, roll_no):
        self.name = name
        self.roll_no = roll_no

    def introduce(self):
        return f"{self.name} (roll no. {self.roll_no})"


student = Student("Sample Student", 1)
print(student.introduce())`,
          },
          {
            type: "callout",
            variant: "note",
            title: "Terminology",
            text: "__init__ is the constructor: it runs automatically when a new object is created.",
          },
        ],
        pages: notePages(
          "semester-2/object-oriented-programming",
          ["page-01.webp", "page-02.webp"],
          "Object-Oriented Programming handwritten notes, classes and objects",
        ),
      },
    ],
  },
  {
    slug: "discrete-structures",
    semester: 2,
    code: "SAMPLE-202",
    name: "Discrete Structures",
    instructors: [],
    description:
      "Sample subject: logic, sets, relations and counting techniques used in computer science.",
    topics: ["Logic", "Sets", "Relations", "Counting"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "linear-algebra",
    semester: 2,
    code: "SAMPLE-203",
    name: "Linear Algebra",
    instructors: [],
    description:
      "Sample subject: vectors, matrices and linear transformations.",
    topics: ["Vectors", "Matrices", "Determinants", "Eigenvalues"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "communication-skills",
    semester: 2,
    code: "SAMPLE-204",
    name: "Communication Skills",
    instructors: [],
    description:
      "Sample subject: academic writing, presentations and professional communication.",
    topics: ["Report writing", "Presentations", "Email etiquette"],
    status: "coming-soon",
    isSample: true,
  },

  // ==========================================================================
  //  SEMESTER 3
  // ==========================================================================
  {
    slug: "data-structure",
    semester: 3,
    name: "Data Structures",
    // Instructor not added yet: replace with your instructor's name.
    instructors: ['Mr. Muhammad Arshad'],
    description:
      "How data is organised in memory and processed efficiently: lists, searching, sorting, linked lists, stacks and expression conversion, with explanations, worked examples, lecture slides and Python programs.",
    totalChapters: 11,
    topics: [
      "Data and entities",
      "Efficiency and types of data structures",
      "Abstract data types",
      "Arrays and lists",
      "Time and space complexity",
      "Linear and binary search",
      "Selection, insertion, bubble, merge and quick sort",
      "Singly, doubly and circular linked lists",
      "Stacks",
      "Infix, postfix and prefix",
    ],
    status: "available",
    contributor:
      "Lecture slides by Mr. Muhammad Arshad and Dr. Sohail Aslam, a time-complexity worksheet and Python examples.",
    updatedAt: "2026-10-25",
    chapters: dataStructureChapters,
  },
  {
    slug: "pakistan-studies",
    semester: 3,
    name: "Pakistan Studies",
    instructors: ["Muhammad Athar Ali"],
    description:
      "The constitution, ideology and history of Pakistan: its significance, political structure, the Pakistan Movement, key challenges since 1947 and the wars, with exam tips.",
    totalChapters: 6,
    topics: [
      "Significance of Pakistan",
      "Political structure and parties",
      "Ideology of Pakistan",
      "Challenges since 1947",
      "Pakistan Movement 1857 to 1947",
      "Wars of Pakistan",
    ],
    status: "available",
    contributor:
      "Lecture document: Constitution and Ideology of Pakistan.",
    updatedAt: "2026-10-26",
    chapters: pakistanStudiesChapters,
  },
  {
    slug: "multivariable-calculus",
    semester: 3,
    name: "Multivariable Calculus",
    instructors: ["Hafsa Parvaiz"],
    description:
      "Functions of several variables: partial derivatives, the chain rule, directional derivatives, and lines, planes, tangent planes and orthogonal surfaces. Every example is solved step by step.",
    topics: [
      "Functions",
      "Partial derivatives",
      "Higher order derivatives",
      "Laplace equation",
      "Chain rule",
      "Directional derivative",
      "Lines and planes",
      "Tangent plane and normal line",
      "Orthogonal surfaces",
    ],
    status: "in-progress",
    contributor: "Instructor's handwritten notes and PDFs.",
    updatedAt: "2026-10-29",
    chapters: multivariableCalculusChapters,
  },
  {
    slug: "islamiyat-fehm-ul-quran",
    semester: 3,
    name: "Islamiyat / Fehm-ul-Quran",
    instructors: ["Sir Syed Abbas Raza"],
    description:
      "Understanding the Quran word by word, unit by unit, from Mu'allim-ul-Quran. Every Arabic phrase is shown beside its Urdu translation.",
    topics: ["Unit 1: lessons 1 to 19", "Unit 2", "Unit 3", "Unit 4: lessons 1 to 17", "Unit 5: lessons 1 to 23", "Unit 6: present tense, lessons 1 to 20"],
    status: "in-progress",
    contributor:
      "Mu'allim-ul-Quran.",
    updatedAt: "2026-10-27",
    units: islamiyatUnits,
  },
  {
    slug: "coal",
    semester: 3,
    code: "CS-603",
    name: "Computer Organization and Assembly Language",
    instructors: ["Engr. Dr. Muhammad Faheem Khalil Paracha"],
    description:
      "How a computer works inside and how to program it in 8086 assembly: CPU parts, memory, buses, number systems, registers, flags and addressing modes. Lectures and labs.",
    topics: [
      "Lecture 1: Introduction to computer organization",
      "Lecture 2: Number systems and conversions",
      "Lecture 3: 8086 registers",
      "Lecture 4: 8086 addressing modes",
      "Labs 1 to 4: registers, arithmetic, MUL and DIV, data-segment variables",
    ],
    status: "in-progress",
    contributor:
      "Lecture slides 1 to 4 and Labs 1 to 4.",
    updatedAt: "2026-11-01",
    units: coalUnits,
  },
  {
    slug: "entrepreneurship",
    semester: 3,
    name: "BBA (Entrepreneurship)",
    instructors: ["Mam Rida Najaf"],
    description:
      "Entrepreneurship and small business management: meaning, characteristics and factors, the entrepreneurial process, classifications and models, entrepreneur vs intrapreneur, legal issues, and the Airbnb case study with solved questions.",
    totalChapters: 6,
    topics: [
      "Chapter 1: Entrepreneurship basics",
      "Chapter 2: The entrepreneurial process",
      "Chapter 3: Classifications and models",
      "Chapter 4: Entrepreneur vs intrapreneur",
      "Chapter 5: Legal issues",
      "Airbnb case study (solved)",
    ],
    status: "available",
    contributor:
      "Unit 1 slides, the entrepreneurial process handout, chapters 3 to 5, the intrapreneurship notes and the Airbnb case study.",
    updatedAt: "2026-11-01",
    // Optional look and labels for THIS subject only (see components/SubjectView.js).
    // ui: { materialLabels: { "Typed notes": "Lecture notes" }, notesHeading: "Typed notes", notesSubheading: null },
    chapters: entrepreneurshipChapters,
  },
  {
    slug: "software-engineering",
    semester: 3,
    name: "Software Engineering",
    instructors: ["Sir Dr. Abdul Qayoom"],
    description:
      "How software is built in an organised way: software and its myths, process models, agile development with Scrum and XP, requirements engineering, system models, architectural design, and design and implementation. Pictures of the models and solved scenarios are included.",
    totalChapters: 7,
    topics: [
      "Chapter 1: Introduction",
      "Chapter 2: Software processes",
      "Chapter 3: Agile software development",
      "Chapter 4: Requirements engineering",
      "Chapter 5: System modeling",
      "Chapter 6: Architectural design",
      "Chapter 7: Design and implementation",
    ],
    status: "available",
    contributor: "Agile software development chapter and the Software Engineering notes, chapters 1 to 7.",
    updatedAt: "2026-11-03",
    chapters: softwareEngineeringChapters,
  },

  // ==========================================================================
  //  SEMESTER 4
  // ==========================================================================
  {
    slug: "machine-learning-fundamentals",
    semester: 4,
    code: "SAMPLE-401",
    name: "Machine Learning Fundamentals",
    instructors: [],
    description:
      "Sample subject: learning patterns from data with regression, classification and clustering.",
    topics: ["Linear regression", "Classification", "Clustering", "Model evaluation"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "operating-systems",
    semester: 4,
    code: "SAMPLE-402",
    name: "Operating Systems",
    instructors: [],
    description:
      "Sample subject: how operating systems manage processes, memory and files.",
    topics: ["Processes and threads", "Scheduling", "Memory management", "File systems"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "computer-networks",
    semester: 4,
    code: "SAMPLE-403",
    name: "Computer Networks",
    instructors: [],
    description:
      "Sample subject: how data travels between computers, from cables to applications.",
    topics: ["Network layers", "IP addressing", "TCP and UDP", "Web protocols"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "algorithm-design-and-analysis",
    semester: 4,
    code: "SAMPLE-404",
    name: "Algorithm Design and Analysis",
    instructors: [],
    description:
      "Sample subject: techniques for designing algorithms and proving how fast they run.",
    topics: ["Divide and conquer", "Greedy methods", "Dynamic programming", "Complexity"],
    status: "coming-soon",
    isSample: true,
  },

  // ==========================================================================
  //  SEMESTER 5
  // ==========================================================================
  {
    slug: "deep-learning",
    semester: 5,
    code: "SAMPLE-501",
    name: "Deep Learning",
    instructors: [],
    description:
      "Sample subject: neural networks, backpropagation and modern deep architectures.",
    topics: ["Neural networks", "Backpropagation", "Convolutional networks", "Regularisation"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "natural-language-processing",
    semester: 5,
    code: "SAMPLE-502",
    name: "Natural Language Processing",
    instructors: [],
    description:
      "Sample subject: teaching computers to work with human language.",
    topics: ["Tokenisation", "Word embeddings", "Language models", "Text classification"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "software-engineering",
    semester: 5,
    code: "SAMPLE-503",
    name: "Software Engineering",
    instructors: [],
    description:
      "Sample subject: planning, building, testing and maintaining software in teams.",
    topics: ["Requirements", "Design", "Testing", "Project management"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "web-application-development",
    semester: 5,
    code: "SAMPLE-504",
    name: "Web Application Development",
    instructors: [],
    description:
      "Sample subject: building interactive websites and web services.",
    topics: ["HTML and CSS", "JavaScript", "Backend basics", "Deployment"],
    status: "coming-soon",
    isSample: true,
  },

  // ==========================================================================
  //  SEMESTER 6
  // ==========================================================================
  {
    slug: "computer-vision",
    semester: 6,
    code: "SAMPLE-601",
    name: "Computer Vision",
    instructors: [],
    description:
      "Sample subject: enabling computers to understand images and video.",
    topics: ["Image processing", "Feature detection", "Object detection", "Segmentation"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "data-mining",
    semester: 6,
    code: "SAMPLE-602",
    name: "Data Mining",
    instructors: [],
    description:
      "Sample subject: discovering useful patterns in large collections of data.",
    topics: ["Preprocessing", "Association rules", "Clustering", "Anomaly detection"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "knowledge-representation-and-reasoning",
    semester: 6,
    code: "SAMPLE-603",
    name: "Knowledge Representation and Reasoning",
    instructors: [],
    description:
      "Sample subject: representing facts and rules so that machines can reason with them.",
    topics: ["Propositional logic", "First-order logic", "Ontologies", "Inference"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "ethics-in-artificial-intelligence",
    semester: 6,
    code: "SAMPLE-604",
    name: "Ethics in Artificial Intelligence",
    instructors: [],
    description:
      "Sample subject: fairness, privacy and accountability in AI systems.",
    topics: ["Bias and fairness", "Privacy", "Transparency", "Responsible AI"],
    status: "coming-soon",
    isSample: true,
  },

  // ==========================================================================
  //  SEMESTER 7
  // ==========================================================================
  {
    slug: "reinforcement-learning",
    semester: 7,
    code: "SAMPLE-701",
    name: "Reinforcement Learning",
    instructors: [],
    description:
      "Sample subject: learning to act through trial, error and reward.",
    topics: ["Markov decision processes", "Q-learning", "Policy gradients"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "final-year-project-i",
    semester: 7,
    code: "SAMPLE-702",
    name: "Final Year Project I",
    instructors: [],
    description:
      "Sample subject: choosing a topic, reviewing the literature and planning the project.",
    topics: ["Proposal", "Literature review", "Project plan"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "cloud-computing",
    semester: 7,
    code: "SAMPLE-703",
    name: "Cloud Computing",
    instructors: [],
    description:
      "Sample subject: running and scaling applications on cloud platforms.",
    topics: ["Virtualisation", "Containers", "Cloud services", "Scalability"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "introduction-to-robotics",
    semester: 7,
    code: "SAMPLE-704",
    name: "Introduction to Robotics",
    instructors: [],
    description:
      "Sample subject: sensing, planning and control for autonomous machines.",
    topics: ["Sensors", "Kinematics", "Path planning", "Control"],
    status: "coming-soon",
    isSample: true,
  },

  // ==========================================================================
  //  SEMESTER 8
  // ==========================================================================
  {
    slug: "final-year-project-ii",
    semester: 8,
    code: "SAMPLE-801",
    name: "Final Year Project II",
    instructors: [],
    description:
      "Sample subject: building, evaluating and presenting the final-year project.",
    topics: ["Implementation", "Evaluation", "Thesis writing", "Presentation"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "professional-practices",
    semester: 8,
    code: "SAMPLE-802",
    name: "Professional Practices",
    instructors: [],
    description:
      "Sample subject: professional ethics, teamwork and career preparation.",
    topics: ["Professional ethics", "Teamwork", "Intellectual property", "Career planning"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "elective-course-i",
    semester: 8,
    code: "SAMPLE-803",
    name: "Elective Course I",
    instructors: [],
    description:
      "Sample subject: placeholder for an elective. Replace with your actual elective.",
    topics: ["To be added"],
    status: "coming-soon",
    isSample: true,
  },
  {
    slug: "elective-course-ii",
    semester: 8,
    code: "SAMPLE-804",
    name: "Elective Course II",
    instructors: [],
    description:
      "Sample subject: placeholder for an elective. Replace with your actual elective.",
    topics: ["To be added"],
    status: "coming-soon",
    isSample: true,
  },
];
