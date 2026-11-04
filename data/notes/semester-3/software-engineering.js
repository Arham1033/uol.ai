// ALL notes for Software Engineering, semester 3, live in this ONE file.
// Chapters follow the textbook order (the list is at the bottom): 1 Introduction, 2 Software processes,
// 3 Agile software development, 4 Requirements engineering, 5 System modeling, 6 Architectural design,
// 7 Design and implementation.
// Pictures are in public/notes/semester-3/software-engineering/. A picture is added with IMG("file-name", "description", "caption");
// several pictures for one topic go into a scrolling box with FIGS("title", ["file-1", "file-2"], ["description 1", "description 2"]).
// Scenarios with answers sit in scrolling boxes made with SCEN("title", [[scenario, answer], ...]).

const BASE = "/notes/semester-3/software-engineering";
const SIZES = {
  "agile-epic-to-stories": [378, 133],
  "agile-invest": [638, 479],
  "agile-key-aspects": [1400, 732],
  "agile-model": [681, 459],
  "agile-scrum-vs-xp": [1162, 546],
  "agile-stakeholders": [1207, 758],
  "agile-story-wall-board": [800, 276],
  "agile-story-wall-cards": [625, 469],
  "agile-theme-epic-story-task": [1124, 686],
  "agile-waterfall-vs-agile": [638, 493],
  "agile-website-example": [700, 405],
  "agile-wishlist-example": [568, 347],
  "cmmi-maturity-levels": [926, 556],
  "data-dictionary": [1241, 392],
  "distributed-scrum": [1312, 913],
  "incremental": [1343, 1214],
  "layered-architecture": [858, 789],
  "layered-technology": [702, 275],
  "library-semantic-model": [1009, 801],
  "process-framework-activities": [1075, 809],
  "process-framework-boxes": [931, 564],
  "prototyping": [987, 902],
  "rad": [1297, 748],
  "re-process-spiral": [861, 652],
  "re-spiral-activities": [1338, 1036],
  "repository-architecture": [1091, 701],
  "scrum-framework": [1190, 575],
  "scrum-sprint-cycle": [1400, 560],
  "spiral": [1200, 963],
  "traceability-matrix": [1035, 527],
  "ui-design-process": [713, 670],
  "unified-process": [1205, 541],
  "waterfall": [1308, 340],
  "xp-practices": [724, 554],
  "xp-release-cycle": [1400, 575],
};

const H = (text) => ({ type: "heading", text });
const SH = (text) => ({ type: "subheading", text });
const P = (text) => ({ type: "paragraph", text });
const L = (items, ordered = false) => ({ type: "list", ordered, items });
const T = (headers, rows) => ({ type: "table", headers, rows });
const NOTE = (text, title) => ({ type: "callout", variant: "note", title, text });
const TIP = (text, title) => ({ type: "callout", variant: "tip", title, text });
const WARN = (text, title) => ({ type: "callout", variant: "warning", title, text });
const IMG = (name, alt, caption) => ({
  type: "image",
  src: `${BASE}/${name}.webp`,
  alt,
  width: SIZES[name][0],
  height: SIZES[name][1],
  caption,
});
const FIGS = (title, names, alts = []) => ({
  type: "slides",
  title,
  label: "Figure",
  pages: names.map((name, i) => ({
    src: `${BASE}/${name}.webp`,
    alt: alts[i] ?? `${title}, figure ${i + 1}`,
    width: SIZES[name][0],
    height: SIZES[name][1],
  })),
});
const SCEN = (title, items) => ({
  type: "scrollbox",
  title,
  blocks: items.map(([question, answer]) => ({ type: "qa", question, answer })),
});

// ---------------------------------------------------------------------------
// Chapter 1. Introduction
// ---------------------------------------------------------------------------
const chapter1 = {
  title: "Chapter 1: Introduction to Software Engineering",
  summary:
    "What software and software engineering are, the dual role of software, its characteristics and categories, legacy software, the three kinds of software myths, and the layered view of software engineering, with solved scenarios.",
  theory: [
    H("What is software?"),
    P("**Software** is more than a program. It is defined as:"),
    { type: "math", lines: ["Software = Instructions + Data structures + Documents"] },
    L([
      "**Instructions** (programs) give the required features, performance and function when they are executed.",
      "**Data structures** let the programs handle information properly.",
      "**Documents** describe how the programs are built and how they are used.",
    ]),
    P("Software programs can be written without software engineering principles, but those principles are essential if we want **good quality software in a cost-effective manner**."),

    H("What is software engineering?"),
    P("**Engineering** is the branch of science and technology concerned with the design, building and use of engines, machines and structures. It is the application of science, tools and methods to find cost-effective solutions to simple and complex problems."),
    P("**Software engineering** is a **systematic, disciplined and quantifiable approach** to the development, operation and maintenance of software. It is a framework for building software and an engineering approach to software development."),
    T(
      ["Word in the definition", "Meaning"],
      [
        ["Systematic", "Work follows a planned method, not guesswork."],
        ["Disciplined", "The method is followed consistently by the whole team."],
        ["Quantifiable", "Progress, cost and quality can be measured."],
        ["Development, operation, maintenance", "The whole life of the software is covered, not only coding."],
      ]
    ),

    H("The evolving role of software"),
    P("Software has a **dual role**:"),
    L([
      "**A product**: it is an information transformer that produces, manages and displays information.",
      "**A vehicle for delivering a product**: it controls the computer (operating system), communicates information (networks) and creates other programs (tools and compilers).",
    ]),

    H("Characteristics of software"),
    L([
      "Software is **developed or engineered**; it is **not manufactured** in the classical sense.",
      "Software **does not wear out**, but it **deteriorates due to change**.",
      "Software is **custom built** rather than assembled from existing components.",
    ]),
    NOTE("Hardware fails because parts wear out. Software has no moving parts, so it does not wear out. It deteriorates because every change made during maintenance can add new defects and the design slowly becomes messy.", "Why does software deteriorate?"),

    H("The changing nature of software"),
    P("Software is grouped into seven broad categories."),
    T(
      ["Category", "What it is", "Example"],
      [
        ["System software", "A collection of programs written to service other programs.", "Operating system, compiler, device driver"],
        ["Application software", "Stand-alone programs that solve a specific business need.", "Payroll system, point-of-sale"],
        ["Engineering and scientific software", "Characterised by 'number crunching' algorithms.", "Simulation, CAD, weather modelling"],
        ["Embedded software", "Resides in read-only memory and controls products and systems for consumer and industrial markets.", "Microwave oven controls, car braking system"],
        ["Product-line software", "Designed to provide a specific capability for use by many different customers.", "Word processor, spreadsheet, database"],
        ["Web applications", "Network-centric software that runs through a browser.", "Online shop, online banking"],
        ["Artificial intelligence software", "Uses non-numeric algorithms to solve complex problems that are not suited to straightforward computation.", "Robotics, expert systems, pattern recognition"],
      ]
    ),

    H("Legacy software"),
    P("**Legacy software** consists of older programs that were developed decades ago. Their quality is often poor because of an **inextensible design, convoluted code, poor or non-existent documentation, and test cases and results that were never kept**."),
    P("As time passes, a legacy system must evolve for these reasons:"),
    L([
      "It must be **adapted** to meet the needs of a new computing environment or technology.",
      "It must be **enhanced** to implement new business requirements.",
      "It must be **extended** to make it interoperable with more modern systems or databases.",
      "It must be **re-architected** to make it viable within a network environment.",
    ]),

    H("Software myths"),
    P("**Myths** are widely held but false beliefs that spread misinformation and confusion. Three types are associated with software."),
    SH("Management myths"),
    T(
      ["Myth", "Reality"],
      [
        ["The available standards and procedures are enough.", "Standards often exist but are not used or are out of date. The team must know them and they must reflect modern practice."],
        ["We have state-of-the-art tools because we bought the latest computers.", "Good tools help, but a better process and trained people matter more than hardware."],
        ["If we fall behind schedule, we can add more programmers and catch up.", "Adding people to a late project makes it later, because the new people must be trained and communication grows."],
        ["If we outsource the project, we can relax and let that party build it.", "Without knowing how to manage and control the work, the organisation will still struggle with an outsourced project."],
      ]
    ),
    SH("Customer myths"),
    T(
      ["Myth", "Reality"],
      [
        ["A general statement of objectives is enough to start writing programs; details can be filled in later.", "Poor early definition is the major cause of failed projects. Detailed, unambiguous requirements are gathered through communication."],
        ["Software is flexible, so changes are easy to make.", "The cost of a change grows rapidly the later it is requested, because design, code and tests must all be redone."],
      ]
    ),
    SH("Practitioner's myths"),
    T(
      ["Myth", "Reality"],
      [
        ["Once the program is written and runs, the job is done.", "A large part of the effort comes after delivery, in maintenance."],
        ["Until the program is running, there is no way to assess its quality.", "Technical reviews can find defects early, long before the program runs."],
        ["The only deliverable work product is the working program.", "Documents, models and plans are also deliverables and make maintenance possible."],
        ["Software engineering creates voluminous, unnecessary documentation and slows development.", "It is about creating quality, not documents. Better quality means less rework and faster delivery."],
      ]
    ),

    H("Software engineering: a layered technology"),
    P("Software engineering is built in four layers. Each layer rests on the one below it."),
    IMG("layered-technology", "Software engineering as a layered technology: quality focus at the bottom, then process, methods and tools", "Software engineering, a layered technology"),
    L([
      "**Quality focus**: the bedrock that supports software engineering. Every approach must aim at quality.",
      "**Process**: the foundation. It holds the layers together and defines the framework for delivering software on time.",
      "**Methods**: provide the technical how-to's for building software (communication, requirements analysis, design, coding, testing and support).",
      "**Tools**: provide automatic or semi-automatic support for the process and the methods.",
    ]),

    SCEN("Scenarios with answers: Chapter 1", [
      [
        "Scenario 1: A university buys 200 new computers and the principal says, 'Now we have the latest technology, so our software projects will finish on time.' Which software myth is this and what is wrong with it?",
        "This is a **management myth**: 'we have state-of-the-art tools because we have the latest computers'. Fast hardware does not make a project succeed. Success depends on a good process, trained people, clear requirements and good methods. The tools only support these.",
      ],
      [
        "Scenario 2: A project is 3 months behind. The manager hires 5 more programmers in the last month. The project becomes even later. Why?",
        "This is the management myth 'adding more programmers catches up with the schedule'. The new programmers must learn the system and the existing programmers must stop coding to teach them. Communication paths also increase, so more time is spent in coordination. The right answer is to re-plan, reduce scope or move the deadline.",
      ],
      [
        "Scenario 3: A shop owner tells the developer, 'Build me a billing app. I will tell you the details as you go.' After two months the owner changes the whole invoice format. Name the myths involved and the better approach.",
        "The customer holds two myths: (1) 'a general statement of objectives is enough to start' and (2) 'software is flexible so changes are easy'. Late changes are costly because design, code and tests already exist. The better approach is to spend time on communication and write down detailed requirements first, and to agree on how changes will be requested and priced.",
      ],
      [
        "Scenario 4: A programmer says, 'My program runs and passes my own test, so the job is finished and I do not need to write any documents.' Which myths are these?",
        "These are practitioner's myths: 'once the program runs the job is done' and 'the only deliverable is the working program'. Maintenance is the largest part of effort. Without design notes and user documents the next person cannot change the program safely. Documents are also deliverables.",
      ],
      [
        "Scenario 5: A bank has a 25-year-old COBOL loan system. The code is hard to read and has no documents. It must now be connected to a mobile app. What kind of software is this and what must be done to it?",
        "It is **legacy software**. It must be **extended to be interoperable** with modern systems (the mobile app), and possibly **re-architected** to work in a network environment. Because it has poor documentation, the team should first recover the design knowledge, then change it carefully, since each change makes legacy software deteriorate further.",
      ],
      [
        "Scenario 6: Classify the following into the seven software categories: (a) the control program inside a washing machine, (b) Windows, (c) an online food-ordering site, (d) a chess-playing program that learns, (e) a program that simulates airflow around a wing.",
        "(a) **Embedded software**. (b) **System software**. (c) **Web application**. (d) **Artificial intelligence software**. (e) **Engineering and scientific software**.",
      ],
      [
        "Scenario 7: A customer asks why a one-line change to an old program broke the report module. Explain using a characteristic of software.",
        "Software does not wear out, but it **deteriorates due to change**. Each change can introduce new defects or affect parts that depend on the changed code. Without a good design and proper testing, a small edit can break another module.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 2. Software processes
// ---------------------------------------------------------------------------
const chapter2 = {
  title: "Chapter 2: Software Processes",
  summary:
    "The process framework, framework and umbrella activities, CMMI levels, process patterns and assessment, PSP and TSP, and the process models: waterfall, incremental, RAD, prototyping, spiral, concurrent and the Unified Process, with solved scenarios.",
  theory: [
    H("A generic view of process"),
    P("A **software process** is the set of activities and tasks that lead to a software product. It gives the team a road map so the work is done in an orderly way."),

    H("The process framework"),
    L([
      "Establishes the **foundation** for a complete software process.",
      "Identifies a number of **framework activities** that apply to all software projects.",
      "Includes a set of **umbrella activities** that apply across the entire software process.",
    ]),
    P("A process framework is made of the **common process framework**, the **framework activities** (with their tasks, milestones and deliverables) and the **umbrella activities** (with SQA points)."),
    FIGS("Process framework figures", ["process-framework-boxes", "process-framework-activities"], [
      "The common process framework with task sets, surrounded by umbrella activities",
      "Software process: process framework, umbrella activities, framework activities and their tasks, work products and milestones",
    ]),
    SH("Generic framework activities"),
    T(
      ["Activity", "Purpose"],
      [
        ["Communication", "Heavy communication and collaboration with the customer to understand objectives and gather requirements."],
        ["Planning", "Creates the project plan: tasks, risks, resources, work products and schedule."],
        ["Modeling", "Creates models (analysis and design) to understand the requirements and the design of the software."],
        ["Construction", "Code generation and the testing needed to uncover errors."],
        ["Deployment", "The software is delivered to the customer, who evaluates it and gives feedback."],
      ]
    ),
    SH("Umbrella activities"),
    L([
      "Software project tracking and control",
      "Formal technical reviews",
      "Software quality assurance",
      "Software configuration management",
      "Document preparation and production",
      "Reusability management",
      "Measurement",
      "Risk management",
    ]),

    H("Capability Maturity Model Integration (CMMI)"),
    L([
      "Developed by the **SEI** (Software Engineering Institute).",
      "Assesses the process model followed by an organisation and **rates the organisation with different levels**.",
      "A set of software engineering capabilities should be present as organisations reach different levels of process capability and maturity.",
    ]),
    P("The CMMI process meta model can be represented in two ways: a **continuous model** and a **staged model**."),
    SH("Continuous model"),
    L([
      "Lets an organisation select the specific improvements that best meet its business objectives and minimise risk. The levels are called **capability levels**.",
      "Describes a process in two dimensions. Each process area is assessed against specific goals and practices and rated according to the capability levels.",
    ]),
    T(
      ["Level", "Name", "Meaning"],
      [
        ["0", "Incomplete", "The process is ad hoc. The objectives and goals of the process areas are not known."],
        ["1", "Performed", "The goals, objectives, work tasks, work products and other activities of the software process are carried out."],
        ["2", "Managed", "Activities are monitored, reviewed, evaluated and controlled."],
        ["3", "Defined", "Activities are standardised, integrated and documented."],
        ["4", "Quantitatively managed", "Metrics and indicators are available to measure the process and its quality."],
        ["5", "Optimized", "Continuous process improvement based on quantitative feedback from the user; innovative ideas and techniques, statistical quality control and other methods are used."],
      ]
    ),
    SH("Staged model"),
    L([
      "Used if you have **no clue how to improve** the process for quality software.",
      "It suggests what other organisations have found helpful to work on first.",
      "The levels are called **maturity levels**.",
    ]),
    IMG("cmmi-maturity-levels", "The CMMI maturity levels as steps: Level 1 Initial, Level 2 Managed, Level 3 Defined, Level 4 Quantitatively Managed, Level 5 Optimizing", "Characteristics of the maturity levels"),

    H("Process patterns"),
    P("A software process can be defined as a **collection of patterns**. A process pattern provides a template. Its parts are:"),
    L([
      "**Process template**: pattern name, intent and type. The types are **task pattern**, **stage pattern** and **phase pattern**.",
      "**Initial context**: the conditions under which the pattern applies.",
      "**Problem**: the problem to be solved.",
      "**Solution**: how the problem is solved.",
      "**Resulting context**: the conditions after the pattern is applied.",
      "**Related patterns**: other patterns connected to this one.",
    ]),

    H("Process assessment"),
    P("Process assessment does **not** specify the quality of the software, whether it will be delivered on time or whether it will meet the user's requirements. It checks the **current state of the software process** with the intention of improving it. Assessment motivates **process improvement** and leads to **capability determination**."),
    P("Approaches to software process assessment:"),
    L([
      "Standard CMMI Assessment Method for Process Improvement (**SCAMPI**)",
      "CMM-based appraisal for internal process improvement",
      "**SPICE** (ISO/IEC 15504)",
      "**ISO 9001:2000** for software",
    ]),

    H("Personal and team software process"),
    SH("Personal software process (PSP)"),
    L(["Planning", "High-level design", "High-level design review", "Development", "Postmortem"], true),
    SH("Team software process (TSP)"),
    P("The goals of TSP are to:"),
    L([
      "Build **self-directed teams**.",
      "**Motivate** the teams.",
      "Make acceptance of CMM level 5 behaviour normal, to speed up software process improvement.",
      "Provide improvement guidance to high-maturity organisations.",
    ]),

    H("Process models"),
    P("A process model helps in software development and **guides the team through a set of framework activities**. Process models may be **linear, incremental or evolutionary**."),

    H("The waterfall model"),
    L([
      "Used when the **requirements are well understood** at the beginning.",
      "Also called the **classic life cycle**.",
      "A systematic, sequential approach that begins with the customer's specification of requirements and progresses through planning, modeling, construction and deployment.",
    ]),
    IMG("waterfall", "Waterfall model: communication, planning, modeling, construction and deployment in a straight sequence", "The waterfall model"),
    P("The model suggests a systematic, sequential approach that begins at the system level and progresses through analysis, design, code and testing."),
    SH("Problems of the waterfall model"),
    L([
      "Real projects rarely follow the sequential flow, because they are always **iterative**.",
      "The model needs the requirements to be **spelled out explicitly at the beginning**, which is often difficult.",
      "A **working version is not available until late** in the project time plan.",
    ]),

    H("The incremental process model"),
    L([
      "The linear sequential model is not suited to projects that are iterative in nature; the incremental model suits them.",
      "Used when the initial requirements are reasonably well defined and there is a compelling need to provide **limited functionality quickly**.",
      "Functionality is expanded in later releases. The software is developed in **increments**.",
    ]),
    IMG("incremental", "Incremental model: increments 1, 2 up to N, each going through communication, planning, modeling, construction and deployment", "The incremental model"),
    L([
      "Software is released in increments.",
      "The **first increment is the core product**; the basic requirements are addressed.",
      "The core product is evaluated in detail by the customer.",
      "As a result, a plan is made for the next increment, which modifies the core product to better meet the customer's needs.",
      "The process is repeated until the complete product is produced.",
    ]),

    H("The RAD (Rapid Application Development) model"),
    L([
      "An **incremental** software process model with a **short development cycle**.",
      "A high-speed adaptation of the waterfall model that uses **component-based construction**.",
      "Creates a fully functional system in a very short time, **60 to 90 days**.",
      "**Multiple software teams work in parallel** on different functions.",
    ]),
    IMG("rad", "RAD model: several modules each passing through business modeling, data modeling, process modeling, application generation and testing and turnover, in parallel", "The RAD model"),
    T(
      ["Phase", "What happens"],
      [
        ["Communication", "Understand the business problem."],
        ["Planning", "Needed because several teams work in parallel."],
        ["Modeling", "Business modeling, data modeling and process modeling."],
        ["Construction", "Component reuse, automatic code generation and testing."],
        ["Deployment", "Integration, delivery and feedback."],
      ]
    ),
    SH("Problems in RAD"),
    L([
      "Requires a number of RAD teams.",
      "Requires commitment from both developer and customer to rapid-fire completion of activities.",
      "Requires the system to be **modular**.",
      "Not suited when **technical risks are high**.",
    ]),

    H("Evolutionary process models"),
    L([
      "Software **evolves over a period of time**.",
      "Business and product requirements often change as development proceeds, which makes a straight-line path to an end product unrealistic.",
      "Evolutionary models are **iterative** and suit modern applications.",
    ]),
    P("Types of evolutionary models: **prototyping**, the **spiral model** and the **concurrent development model**."),

    H("Prototyping"),
    L([
      "A **mock-up or model** (a throw-away version) of a software product.",
      "Used when the customer defines a set of general objectives but does **not identify input, output or processing requirements**.",
      "Used when the developer is not sure of the efficiency of an algorithm, the adaptability of an operating system or the form of human/machine interaction.",
    ]),
    IMG("prototyping", "Prototyping cycle: communication, quick plan, quick design, build prototype, deployment and delivery with feedback", "The prototyping model"),
    SH("Steps in prototyping"),
    L(
      [
        "Begin with requirements gathering.",
        "Identify whatever requirements are known.",
        "Outline the areas where further definition is mandatory.",
        "A quick design occurs.",
        "The quick design leads to the construction of a prototype.",
        "The prototype is evaluated by the customer.",
        "Requirements are refined.",
        "The prototype is tuned to satisfy the needs of the customer.",
      ],
      true
    ),
    SH("Limitations of prototyping"),
    L([
      "In the rush to get it working, overall **software quality or long-term maintainability** is generally overlooked.",
      "Use of an **inappropriate operating system or programming language**.",
      "Use of an **inefficient algorithm**.",
    ]),

    H("The spiral model"),
    P("An evolutionary model that combines the **best features of the classical life cycle and the iterative nature of prototyping**. It adds a new element: **risk analysis**. It starts in the middle and continually visits the basic tasks of communication, planning, modeling, construction and deployment."),
    IMG("spiral", "Spiral model with seven steps: identify next-level stakeholders, identify their win conditions, reconcile win conditions, establish objectives, evaluate alternatives and resolve risks, define the next level of product and process, validate, review and comment", "The spiral model"),
    L([
      "A realistic approach to the development of **large-scale systems** and software.",
      "Software evolves as the process progresses.",
      "Gives a better understanding between developer and customer.",
      "The first circuit might result in a product specification; subsequent circuits develop a prototype and then more sophisticated versions of the software.",
    ]),

    H("The concurrent development model"),
    L([
      "Also called **concurrent engineering**.",
      "Made up of a series of framework activities, software engineering actions, tasks and their associated **states**.",
      "All activities exist concurrently but **reside in different states**.",
      "Applicable to all types of software development.",
      "An **event** generated at one point in the process triggers transitions among the states.",
    ]),
    SH("A final comment on evolutionary processes"),
    L([
      "They make project planning difficult, because the speed of evolution is not known.",
      "They do not focus on flexibility and extensibility (more emphasis is on high quality).",
      "What is needed is a balance between high quality and flexibility and extensibility.",
    ]),

    H("The Unified Process"),
    P("The Unified Process was developed by **Rumbaugh, Booch and Jacobson**, combining the best features of their object-oriented models and adopting features proposed by other experts. It resulted in the **Unified Modeling Language (UML)**. It is a framework for **object-oriented software engineering using UML**."),
    IMG("unified-process", "The Unified Process: inception, elaboration, construction and transition phases, with communication, planning, modeling, construction and deployment cycling to produce a software increment", "The Unified Process (UP)"),
    SH("Phases of the Unified Process"),
    T(
      ["Phase", "Work products"],
      [
        ["Inception", "Vision document, initial use-case model, initial risk assessment, project plan"],
        ["Elaboration", "Use-case model, analysis model, software architecture description, preliminary design model, preliminary model"],
        ["Construction", "Design model, system components, test plan and procedure, test cases, manuals"],
        ["Transition", "Delivered software increment, beta test results, general user feedback"],
      ]
    ),

    H("Comparison of the process models"),
    T(
      ["Model", "Best used when", "Main strength", "Main weakness"],
      [
        ["Waterfall", "Requirements are well understood and stable", "Simple, orderly, easy to manage", "Working software comes late; changes are hard"],
        ["Incremental", "Limited functionality must be delivered quickly", "Early core product; customer feedback", "Needs good planning of increments"],
        ["RAD", "Short schedule (60 to 90 days) and a modular system", "Very fast; parallel teams", "Needs many teams; not for high technical risk"],
        ["Prototyping", "Requirements are vague", "Customer sees something early", "Quality and maintainability may be ignored"],
        ["Spiral", "Large, risky systems", "Risk analysis in every loop", "Needs risk-assessment skill; costly"],
        ["Concurrent", "Activities overlap in different states", "Applies to all kinds of software", "Hard to plan"],
        ["Unified Process", "Object-oriented systems using UML", "Use-case driven, iterative", "Heavy for small projects"],
      ]
    ),

    SCEN("Scenarios with answers: choosing a process model", [
      [
        "Scenario 1: A hospital wants a patient-record system. All requirements are fixed by law and will not change. The team has done the same kind of project before. Which model fits best and why?",
        "The **waterfall model**. The requirements are well understood and stable, which is exactly when the classic life cycle works. The sequence communication, planning, modeling, construction and deployment can be followed once, with documents at the end of each stage.",
      ],
      [
        "Scenario 2: A start-up wants to release a basic version of a bus-ticket app in 6 weeks and add payments, maps and offers in later releases. Which model should be used?",
        "The **incremental model**. The first increment is the **core product** (basic ticket booking). After customer evaluation, the next increments add payments, maps and offers. Limited functionality is delivered quickly and expanded later.",
      ],
      [
        "Scenario 3: A client says, 'I want a screen to manage my clinic, but I cannot tell you the inputs, outputs or how it should look.' Which model do you choose and what is its danger?",
        "**Prototyping**. A quick design and a throw-away prototype are built so the client can react and the requirements are refined. The danger is that in the rush to get it working the prototype may be kept as the final product with poor quality, an inappropriate language or an inefficient algorithm, so it is hard to maintain.",
      ],
      [
        "Scenario 4: A company builds an air-traffic control system. The cost of failure is very high and the technology is new. Which model is suitable?",
        "The **spiral model**. It adds **risk analysis** to every loop, suits large-scale systems and lets the team build prototypes and evaluate alternatives before committing. The first loop gives a specification, later loops give prototypes and finally a sophisticated version.",
      ],
      [
        "Scenario 5: A bank needs a working loan-processing system in 75 days. The system divides cleanly into modules (customer, loan, payment, reports) and four teams are available. Which model fits, and what must be true for it to work?",
        "The **RAD model**. It gives a fully functional system in 60 to 90 days by running several teams in parallel, each building a module with business, data and process modeling, then reusing components and generating code. It works only if the system is **modular**, if the customer and developers are committed to rapid completion and if enough teams are available. It is not suited when technical risk is high.",
      ],
      [
        "Scenario 6: A team has finished the waterfall model for an inventory system. In the last month the customer sees the system for the first time and says it is not what was wanted. Which waterfall problems appeared?",
        "(1) A **working model is not available until late** in the project time plan. (2) The model requires **requirements to be explicitly stated at the start**, which was not done correctly. (3) Real projects are **iterative**, but the waterfall does not return easily to earlier stages. A model that shows the customer early versions (incremental or prototyping) would have avoided this.",
      ],
      [
        "Scenario 7: A software company is rated at CMMI level 3 'Defined'. A client asks what that means. Answer in simple words and name the level above it.",
        "At level 3 the organisation's activities are **standardised, integrated and documented**, so projects follow a common, written process. The next level is **level 4, Quantitatively managed**, where metrics and indicators are used to measure the process and its quality.",
      ],
      [
        "Scenario 8: In the Unified Process, a project has finished its vision document, initial use-case model, initial risk assessment and project plan. In which phase is it and what comes next?",
        "It has finished the **inception phase** (these are its work products). The next phase is **elaboration**, which produces the use-case model, analysis model, software architecture description and preliminary design model.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 3. Agile software development
// ---------------------------------------------------------------------------
const chapter3 = {
  title: "Chapter 3: Agile Software Development",
  summary:
    "Why agile was needed, the Agile Manifesto and its 12 principles, agile methods, themes, epics, user stories and tasks, story walls, Extreme Programming, Scrum, agile stakeholders, distributed Scrum, Scrum versus XP, Crystal, agile project management and the solved tool-selection exercise.",
  theory: [
    H("Topics covered"),
    L([
      "Agile methods",
      "Agile development techniques",
      "Agile project management",
      "Exercise: select a suitable agile project management tool",
    ]),

    H("The problems with software development"),
    L([
      "Customers do not know exactly what they need or want.",
      "Customers change their minds.",
      "Customers' priorities change.",
      "It is difficult to satisfy the needs of many stakeholders.",
      "We can never adequately specify requirements.",
      "We are poor at estimating software tasks.",
      "Unpredictable things happen.",
      "It often takes several attempts to get something right.",
    ]),
    L([
      "Users do not know what they want until they see it (but they are good at telling us what they do not like).",
      "It is difficult to find the **80:20**, that is, which features matter most, before the product is built and deployed.",
      "It is difficult to account for the unknown.",
    ]),
    P("The answer to these problems is **agile**. An agile approach does not use long-term planning; it breaks the work into small iterations (parts) and delivers working software frequently."),

    H("The Agile Manifesto"),
    P("We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:"),
    T(
      ["We value more", "Over"],
      [
        ["**Individuals and interactions**", "processes and tools"],
        ["**Working software**", "comprehensive documentation"],
        ["**Customer collaboration**", "contract negotiation"],
        ["**Responding to change**", "following a plan"],
      ]
    ),
    P("That is, while there is value in the items on the right, we value the items on the left more."),

    H("The 12 principles behind the manifesto"),
    L(
      [
        "Our highest priority is to **satisfy the customer** through early and continuous delivery of valuable software.",
        "**Welcome changing requirements**, even late in development. Agile processes harness change for the customer's competitive advantage.",
        "**Deliver working software frequently**, from a couple of weeks to a couple of months, with a preference for the shorter timescale.",
        "Business people and developers must **work together daily** throughout the project.",
        "Build projects around **motivated individuals**. Give them the environment and support they need and trust them to get the job done.",
        "The most efficient and effective method of conveying information to and within a team is **face-to-face conversation**.",
        "**Working software is the primary measure of progress.**",
        "Agile processes promote **sustainable development**. Sponsors, developers and users should be able to maintain a constant pace indefinitely.",
        "Continuous attention to **technical excellence and good design** enhances agility.",
        "**Simplicity**, the art of maximising the amount of work not done, is essential.",
        "The best architectures, requirements and designs emerge from **self-organising teams**.",
        "At regular intervals the team **reflects** on how to become more effective, then tunes and adjusts its behaviour accordingly.",
      ],
      true
    ),

    H("Key aspects of agile methodology"),
    IMG("agile-key-aspects", "Agile methodologies are iterative, incremental, self-organizing and emergent", "Key aspects of agile methodology"),
    T(
      ["Aspect", "Meaning"],
      [
        ["Iterative", "Planned modification of parts of the system. Assists with modification of design and requirements."],
        ["Incremental", "Develop parts of the system separately and integrate them. Assists with improving the overall methodology."],
        ["Self-organizing", "The team has the responsibility of organising its internal dynamics."],
        ["Emergent", "The set of tools, techniques, development environment and requirements emerge during the process."],
      ]
    ),

    H("The principles of agile methods"),
    T(
      ["Principle", "Description"],
      [
        ["Customer involvement", "Customers should be closely involved throughout the development process. Their role is to provide and prioritise new system requirements and to evaluate the iterations of the system."],
        ["Incremental delivery", "The software is developed in increments, with the customer specifying the requirements to be included in each increment."],
        ["People, not process", "The skills of the development team should be recognised and exploited. Team members should be left to develop their own ways of working without prescriptive processes."],
        ["Embrace change", "Expect the system requirements to change and design the system to accommodate these changes."],
        ["Maintain simplicity", "Focus on simplicity in both the software being developed and the development process. Wherever possible, actively work to eliminate complexity from the system."],
      ]
    ),

    H("Waterfall versus agile"),
    IMG("agile-waterfall-vs-agile", "Table comparing traditional waterfall with agile on planning, phases, functionality, time, project manager, requirements analysis and reports", "Waterfall vs agile"),
    T(
      ["Traditional (waterfall)", "Agile"],
      [
        ["Detailed plan", "Dynamic plan"],
        ["Sequential phases conducted by documentation; errors may be magnified", "Iterative phases conducted by product delivery (by prioritising); errors may be minimised"],
        ["Functionality at the end", "Functionality after each iteration: increments of the system every thirty days or less"],
        ["One long period of time", "Short periods of time"],
        ["Project manager", "Team self-management"],
        ["Requirements analysis", "Customers working with the development team (every iteration)"],
        ["Reports (documents)", "Communication"],
      ]
    ),

    H("Phases of the agile model"),
    IMG("agile-model", "The agile development methodology cycle: requirement analysis, brainstorm, design, development, iterations with demo and feedback, quality assurance, deployment, production and technical support", "The agile model"),
    L(
      [
        "**Requirements gathering**: define the requirements, explain the business opportunities and plan the time and effort needed. From this, evaluate technical and economic feasibility.",
        "**Design the requirements**: work with stakeholders to define requirements. A user flow diagram or a high-level UML diagram can show how new features work and how they fit the existing system.",
        "**Construction / iteration**: designers and developers start work, aiming to deploy a working product. The product goes through various stages of improvement, so it starts with simple, minimal functionality.",
        "**Testing / quality assurance**: the QA team examines the product's performance and looks for bugs.",
        "**Deployment**: the team issues the product to the user's work environment.",
        "**Feedback**: after the release, the team receives feedback about the product and works through it.",
      ],
      true
    ),
    SH("Advantages"),
    L([
      "Frequent delivery.",
      "Face-to-face communication with clients.",
      "Efficient design that fulfils the business requirement.",
      "Changes are acceptable at any time.",
      "It reduces total development time.",
    ]),
    SH("Disadvantages"),
    L([
      "Because of the shortage of formal documents, there is confusion, and crucial decisions taken in various phases can be misinterpreted by different team members at any time.",
      "Because of the lack of proper documentation, once the project is complete and the developers are allotted to another project, maintenance of the finished project can become difficult.",
    ]),

    H("Agile implementations"),
    L(["Extreme Programming (XP)", "Scrum", "Iterative development", "Kanban", "Crystal and many others"]),

    H("Theme, epic, story and task"),
    P("Agile teams break work down into four levels, from the biggest idea to the smallest piece of work."),
    FIGS(
      "Theme, epic, user story and task",
      ["agile-theme-epic-story-task", "agile-wishlist-example", "agile-website-example"],
      [
        "A theme contains epics; an epic contains user stories; each user story contains tasks",
        "Wishlist example: theme Wishlist, an epic, two stories and four tasks",
        "Website example: theme website, epic the creation of the cart page, user stories and tasks",
      ]
    ),
    T(
      ["Level", "Meaning", "Example"],
      [
        ["Theme", "A collection of stories by category, a basket of stories. An epic can also be a theme in itself.", "Wishlist"],
        ["Epic", "A big story: a requirement too big to deliver in a single sprint. It must be broken into smaller stories.", "As a customer, I want to be able to have wishlists so that I can come back to buy products later."],
        ["Story", "An individual feature or requirement the client wants, deliverable (production ready) within a single sprint. Also called a product backlog item or work item.", "As a customer, I want to be able to save a product in my wishlist so that I can view it again later."],
        ["Task", "The elements of a story: stepping stones to take the story to 'Done'. Tasks follow SMART: specific, measurable, achievable, relevant, time-boxed.", "Put an 'Add to wishlist' button on each product page."],
      ]
    ),

    H("Stories and user stories"),
    P("A story is usually written in a fixed format:"),
    L([
      "**As a** [end user of the required feature]",
      "**I want** [the thing the user wants to do once the feature is live; often contains a verb]",
      "**So that** [why they want the feature, the benefit it brings]",
    ]),
    NOTE("Example story: 'As a customer, I want to be able to save a product in my wishlist so that I can view it again later.'"),
    P("**User stories** are a set of stories that describe how the system should behave from the user's viewpoint. There may be several types of user (browser, shopper, marketer, content editor, system administrator) and stories are written for each of them. This is usually done collaboratively: people write cards, group them and review them. After a short time the team has a broad idea of what the system should do, held in a set of user stories called the **product backlog**."),
    FIGS("Epic and user stories", ["agile-epic-to-stories"], ["An epic is big, coarse-grained and sketchy; user stories are small, detailed and specific"]),

    H("Key aspects of good user stories: INVEST"),
    IMG("agile-invest", "INVEST by Bill Wake: Independent, Negotiable, Valuable, Estimable, Small, Testable", "INVEST by Bill Wake"),
    T(
      ["Letter", "Meaning"],
      [
        ["Independent", "Of order of user story delivery and of internal and especially external dependencies."],
        ["Negotiable", "Flexible scope, no specific language. Explain the intention, not the implementation."],
        ["Valuable", "The value is clear to everyone. The persona matches the benefit and the goal will deliver the benefit. Avoid technical or role-specific language."],
        ["Estimable", "Clear and concise explanation. Avoid technical or role-specific language."],
        ["Small", "Easily fits into a sprint, that is less than 20% of velocity. Definitely not more than 33% of velocity."],
        ["Testable", "Can be automated. Avoid external testing and long test suites."],
      ]
    ),

    H("Story walls"),
    P("A **story wall** is a common and effective information radiator that displays the status of each card in the current iteration or sprint. A story wall has columns that represent the team's workflow, index cards that represent the actual work, user stories and other information about the status of the project. The team moves a card through each column as it is completed."),
    FIGS("Story wall pictures", ["agile-story-wall-cards", "agile-story-wall-board"], [
      "A story wall with the columns Ready, In progress and Done holding story cards",
      "A story wall in use: sticky notes arranged in columns by status",
    ]),

    H("Extreme Programming (XP)"),
    P("XP is a very influential agile method developed in the late 1990s that introduced a range of agile development techniques. It takes an 'extreme' approach to iterative development:"),
    L([
      "New versions may be built **several times per day**.",
      "Increments are delivered to customers **every 2 weeks**.",
      "**All tests must be run for every build** and the build is accepted only if the tests run successfully.",
    ]),
    P("XP was conceived to meet the needs of software development by **small teams** facing vague and changing requirements. It gives values and principles to guide the team's behaviour and the team is expected to **self-organise**. Each practice is simple and self-complete, and the combination of practices produces more complex, emergent behaviour. It is described as a lightweight, efficient, low-risk, flexible, predictable and scientific way to develop software."),
    FIGS("Extreme Programming figures", ["xp-release-cycle", "xp-practices"], [
      "The extreme programming release cycle: select user stories, break down stories to tasks, plan release, develop, integrate and test software, release software, evaluate system",
      "Extreme programming practices around planning, designing, coding and testing, ending in a product increment",
    ]),
    SH("Extreme programming practices"),
    T(
      ["Practice", "Description"],
      [
        ["Incremental planning", "Requirements are recorded on story cards. The stories in a release are chosen by the time available and their relative priority. Developers break the stories into development tasks."],
        ["Small releases", "The minimal useful set of functionality that gives business value is developed first. Releases are frequent and add functionality to the first release."],
        ["Simple design", "Enough design is done to meet the current requirements and no more."],
        ["Test-first development", "An automated unit test framework is used to write tests for new functionality before the functionality itself is implemented."],
        ["Refactoring", "All developers refactor the code continuously as soon as improvements are found. This keeps the code simple and maintainable."],
        ["Pair programming", "Developers work in pairs, checking each other's work and giving the support to always do a good job."],
        ["Collective ownership", "Pairs work on all areas of the system, so no islands of expertise develop and all developers take responsibility for all the code. Anyone can change anything."],
        ["Continuous integration", "As soon as work on a task is complete it is integrated into the whole system. After any integration, all unit tests in the system must pass."],
        ["Sustainable pace", "Large amounts of overtime are not acceptable, because the net effect is often to reduce code quality and medium-term productivity."],
        ["On-site customer", "A representative of the end user is available full time to the XP team. The customer is a member of the team and brings system requirements to the team for implementation."],
      ]
    ),

    H("Scrum"),
    P("Scrum is an agile method that focuses on **managing iterative development** rather than on specific agile practices. It aims to sustain strong collaboration between people working on complex products whose details change or are added. It is based on the systematic interaction between three major roles: the **Scrum Master**, the **Product Owner** and the **Team**."),
    IMG("scrum-framework", "The agile Scrum framework at a glance: product owner, product backlog, sprint planning meeting, sprint backlog, 1 to 4 week sprint, daily scrum every 24 hours, sprint review, sprint retrospective and finished work", "The Scrum framework at a glance"),
    SH("The three phases of Scrum"),
    L(
      [
        "**Outline planning phase**: establish the general objectives of the project and design the software architecture.",
        "**Sprint cycles**: a series of cycles, each developing an increment of the system.",
        "**Project closure phase**: wraps up the project, completes required documentation such as system help frames and user manuals, and assesses the lessons learned.",
      ],
      true
    ),
    SH("Scrum terminology"),
    T(
      ["Term", "Definition"],
      [
        ["Development team", "A self-organising group of software developers, no more than 7 people. They develop the software and other essential project documents."],
        ["Potentially shippable product increment", "The software increment delivered from a sprint. It should be in a finished state so that no further work, such as testing, is needed to include it in the final product. In practice this is not always achievable."],
        ["Product backlog", "A list of 'to do' items the Scrum team must tackle: feature definitions, requirements, user stories or supplementary tasks such as architecture definition or user documentation."],
        ["Product owner", "An individual (or small group) who identifies product features or requirements, prioritises them for development and continuously reviews the product backlog so the project meets critical business needs. It can be a customer, a product manager or another stakeholder representative."],
        ["Scrum", "A daily meeting of the Scrum team that reviews progress and prioritises the work for that day. Ideally a short face-to-face meeting that includes the whole team."],
        ["ScrumMaster", "Ensures the Scrum process is followed and guides the team in using Scrum effectively. Deals with the rest of the company and protects the team from outside interference. The ScrumMaster should not be thought of as a project manager."],
        ["Sprint", "A development iteration. Sprints are usually 2 to 4 weeks long."],
        ["Velocity", "An estimate of how much product backlog effort a team can cover in a single sprint. It helps estimate what can be covered in a sprint and measure improving performance."],
      ]
    ),
    SH("The Scrum sprint cycle"),
    IMG("scrum-sprint-cycle", "Scrum sprint cycle: review work to be done, select items and plan sprint from the product backlog, sprint with sprint backlog, review sprint, potentially shippable software", "The Scrum sprint cycle"),
    L([
      "Sprints are of **fixed length**, normally 2 to 4 weeks.",
      "The starting point for planning is the **product backlog**, the list of work to be done on the project.",
      "In the **selection phase** the whole project team works with the customer to select features and functionality from the product backlog to be developed in the sprint.",
      "Once these are agreed, the team organises itself to develop the software. During this stage the team is **isolated from the customer and the organisation**, and all communication goes through the Scrum Master, whose role is to protect the team from external distractions.",
      "At the end of the sprint, the work done is **reviewed and presented to stakeholders**. The next sprint cycle then begins.",
    ]),
    SH("Teamwork in Scrum"),
    L([
      "The Scrum Master is a **facilitator** who arranges the daily meetings, tracks the backlog of work, records decisions, measures progress against the backlog and communicates with customers and management outside the team.",
      "The whole team attends short **daily meetings (scrums)** where everyone shares information, describes progress since the last meeting, problems that have arisen and plans for the following day. Everyone knows what is going on and, if problems arise, the team can re-plan short-term work.",
    ]),
    SH("Scrum benefits"),
    L([
      "The product is broken into manageable and understandable chunks.",
      "Unstable requirements do not hold up progress.",
      "The whole team has visibility of everything, so communication improves.",
      "Customers see on-time delivery of increments and gain feedback on how the product works.",
      "Trust between customers and developers is established and a positive culture is created in which everyone expects the project to succeed.",
    ]),
    SH("Scrum roles in more detail"),
    L([
      "**Scrum Master**: a central figure in the project. The main responsibility is to remove the obstacles that prevent the team from working efficiently.",
      "**Product Owner**: usually a customer or other stakeholder, actively involved throughout the project, giving the global vision of the product and timely feedback on the work done after every sprint.",
      "**Scrum Team**: a cross-functional, self-organising group responsible for implementing the product. It should have up to 7 members to stay flexible and productive.",
    ]),

    H("Agile stakeholders"),
    IMG("agile-stakeholders", "Roles of the product manager, product owner and team in agile", "Agile stakeholders: product manager, product owner and team"),
    T(
      ["Role", "Main responsibilities"],
      [
        ["Product manager", "Market and customer facing; identifies market needs; collocated with marketing and business. Owns vision and roadmaps, program backlog, pricing, licensing and ROI. Drives program increment objectives and release content through prioritised features and enablers. Establishes feature acceptance criteria."],
        ["Product owner", "Solution, technology and team facing; collocated with the team(s). Contributes to the vision and program backlog and owns team backlog and implementation. Defines iterations and stories and accepts iteration increments. Drives iteration goals and iteration content through prioritised stories. Establishes story acceptance criteria and accepts stories into the baseline."],
        ["Team", "Customer and stakeholder facing. Owns story estimates and implementation. Contributes to intentional architecture and owns emergent design. Contributes to backlog refinement and the creation of stories. Integrates with other teams."],
      ]
    ),

    H("Distributed Scrum"),
    IMG("distributed-scrum", "Distributed Scrum: videoconferencing between product owner and team, a common development environment, continuous integration, real-time communication, the ScrumMaster located with the team and the product owner visiting the developers", "Distributed Scrum"),
    L([
      "**Videoconferencing** between the product owner and the development team.",
      "A **common development environment** for all teams.",
      "**Continuous integration**, so all team members can be aware of the state of the product at any time.",
      "**Real-time communication** between team members for informal communication, particularly instant messaging and video calls.",
      "The **ScrumMaster should be located with the development team** so that he or she is aware of everyday problems.",
      "The **product owner should visit the developers** and try to establish a good relationship with them. It is essential that they trust each other.",
    ]),

    H("Scrum versus Extreme Programming"),
    IMG("agile-scrum-vs-xp", "Comparison of Scrum and XP on changes during a sprint, task order, refactoring and validation", "Scrum vs XP"),
    T(
      ["Scrum", "XP"],
      [
        ["Changes in a sprint are not allowed.", "As long as the team has not started work on a particular feature, a new feature of equivalent size can be swapped in for an un-started feature."],
        ["Once the tasks for a sprint are set, the team decides the sequence in which it will develop the backlog items.", "Tasks are taken in a strict priority order."],
        ["The Scrum Master is responsible for what is done in the sprint, including the code that is written.", "Developers can modify or refactor parts of the code as the need arises."],
        ["The validation of the software is completed at the end of each sprint, at the sprint review.", "The software needs to be validated at all times, to the extent that tests are written before the actual software."],
      ]
    ),

    H("Crystal"),
    P("**Crystal** is an agile methodology that places focus on **people over processes**, to empower teams to find their own solutions for each project instead of being limited by rigid methods. Crystal focuses on:"),
    L([
      "The people involved",
      "Interaction between the teams",
      "Community",
      "The skills of the people involved",
      "Their talents",
      "Communication between all the teams",
    ]),

    H("Agile project management"),
    L([
      "The principal responsibility of software project managers is to manage the project so that the software is delivered **on time and within the planned budget**.",
      "The standard approach to project management is **plan-driven**: managers draw up a plan that shows what should be delivered, when and who will work on each deliverable.",
      "Agile project management needs a **different approach**, adapted to incremental development and the practices used in agile methods (backlog, sprints, daily meetings, story walls and velocity).",
    ]),

    H("Exercise: select a suitable agile project management tool"),
    P("The exercise asks to go through a list of free agile project management tools and select a tool for the project. A solved answer follows."),
    SH("Step 1: what the project needs"),
    L([
      "A **product backlog** and **sprint backlog**.",
      "A **story wall (board)** with columns such as Ready, In progress and Done.",
      "**Sprint planning** and some view of progress (for example a burn-down chart).",
      "Suitable for a **small team (up to 7 people)** and **free** to use.",
    ]),
    SH("Step 2: compare common free tools"),
    T(
      ["Tool", "Board (story wall)", "Backlog and sprints", "Fit for a small student team"],
      [
        ["Trello", "Yes, simple card boards", "Basic, through lists and add-ons", "Very easy to learn; good for a story wall"],
        ["Jira (free plan)", "Yes", "Full backlog, sprints and reports", "Strongest Scrum support; more setup"],
        ["Taiga", "Yes", "Backlog, sprints, user stories and epics", "Built for agile teams; free for open projects"],
        ["Asana", "Yes (board view)", "Lists and timelines", "General task tool; less Scrum-specific"],
        ["OpenProject", "Yes", "Backlog and sprint planning", "Open source; more suited to larger projects"],
      ]
    ),
    SH("Step 3: choice"),
    P("For a small team running Scrum with user stories, **Taiga or Jira (free plan)** give the closest match to the Scrum terms in this chapter (product backlog, sprint, epic, user story, task and velocity). **Trello** is the best choice if the team only wants a simple story wall and quick start. For a first agile project, choose the tool the whole team can learn quickly and that shows the story wall, the backlog and the sprint progress on one screen."),
    NOTE("The comparison is a guide. Features and limits of free plans change, so the team should check the current free plan before starting.", "Check current plans"),

    SCEN("Scenarios with answers: agile", [
      [
        "Scenario 1: A client keeps changing the screen layout every week of a 6-month project. The waterfall team is struggling. Why would an agile approach suit this project better?",
        "Agile principles say **welcome changing requirements, even late in development**. Work is done in short iterations, a working increment is shown every few weeks, and the customer prioritises the next items from the backlog. Change is part of the plan instead of a problem. In waterfall, requirements are fixed at the start and changes are costly.",
      ],
      [
        "Scenario 2: Write a user story for a student who wants to see exam results on a mobile app, and break it into at least three tasks.",
        "Story: **As a student, I want to see my exam results on my phone so that I can check my marks without going to the office.** Tasks: (1) Create a results table in the database and an API to read a student's results. (2) Design a results screen in the app. (3) Add a login check so a student sees only their own results. (4) Test with sample data. Each task is small, specific and measurable (SMART).",
      ],
      [
        "Scenario 3: A team has the item 'As a customer, I want an online shop so that I can buy things'. The team estimates it will take 4 months. How should it be treated?",
        "It is an **epic**, because it is too big for one sprint. It must be broken into smaller **user stories** (for example browse products, add to cart, pay, track order), each deliverable within a single sprint. The group of related stories can be a **theme** such as 'Shopping cart'.",
      ],
      [
        "Scenario 4: Check this story against INVEST: 'Build the whole database layer and all forms for the hospital system.' Which letters does it violate?",
        "It is not **Small** (it cannot fit in one sprint, and should be well under 20% of velocity), not **Estimable** (too vague to estimate), not **Independent** (it depends on many other parts) and not **Valuable** to the user in a clear way. It should be split into small, testable stories such as 'As a receptionist, I want to register a patient so that the doctor can see the record'.",
      ],
      [
        "Scenario 5: In a Scrum team, a manager from another department walks in during the sprint and asks a developer to fix an unrelated report. Who should handle this and why?",
        "The **Scrum Master**. The Scrum Master's role is to **protect the development team from external distractions**, and during the sprint the team is isolated from the organisation, with communication going through the Scrum Master. Any new request is added to the **product backlog** by the product owner and considered for a later sprint.",
      ],
      [
        "Scenario 6: A Scrum team's sprint is 2 weeks. In the last sprint it completed 24 story points; the sprint before it completed 20 and the one before 22. How many points should it plan for the next sprint, and what is this number called?",
        "The number is the team's **velocity**, the amount of product backlog effort a team can cover in one sprint. Averaging the three sprints gives (24 + 20 + 22) / 3 = 22 points. The team should plan about **22 story points** for the next sprint. Velocity helps estimate what can be covered and measure improving performance.",
      ],
      [
        "Scenario 7: A team of 4 developers works in pairs, writes tests before code, integrates several times a day and lets any pair change any part of the code. Which methodology are they following and which practices are they showing?",
        "**Extreme Programming (XP).** Practices shown: **pair programming**, **test-first development**, **continuous integration** and **collective ownership**.",
      ],
      [
        "Scenario 8: Mid-sprint, the customer asks for a new feature. Compare what Scrum and XP allow.",
        "In **Scrum**, changes during a sprint are not allowed; the request goes to the product backlog for a later sprint. In **XP**, as long as the team has not started work on a particular feature, a new feature of **equivalent size can be swapped** in for an un-started feature.",
      ],
      [
        "Scenario 9: A company has its product owner in Lahore and its developers in another country. List four things that make the Scrum process work in this situation.",
        "From distributed Scrum: (1) **videoconferencing** between the product owner and the team, (2) a **common development environment** for all teams, (3) **continuous integration** so everyone knows the state of the product, (4) **real-time communication** such as instant messaging and video calls. In addition the ScrumMaster should be with the developers, and the product owner should visit them to build trust.",
      ],
      [
        "Scenario 10: A government contract needs a full, signed document of every requirement before work starts, and the work cannot change. Is agile the best choice?",
        "Probably not. Agile values working software and responding to change over documentation and following a plan, and has the **disadvantages** of little formal documentation and harder maintenance. If the requirements are fixed and a full document is legally required, a plan-driven process (waterfall) can be more suitable. A mix is also possible: agile inside each stage with the required documents produced at the end.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 4. Requirements engineering
// ---------------------------------------------------------------------------
const chapter4 = {
  title: "Chapter 4: Requirements Engineering",
  summary:
    "Software requirements and their kinds, functional and non-functional requirements, writing requirements, interface specification, the SRS and the IEEE standard, the requirements engineering process, elicitation techniques, validation and management, with solved scenarios.",
  theory: [
    H("Software requirements"),
    P("The IEEE defines a **requirement** as:"),
    L(
      [
        "A condition or capability needed by a user to solve a problem or achieve an objective.",
        "A condition or capability that must be met or possessed by a system or system component to satisfy a contract, standard, specification or other formally imposed document.",
        "A documented representation of a condition or capability as in 1 or 2.",
      ],
      true
    ),
    P("Software requirements include both the **user's view** (the external view) and the **developer's view** (the inside characteristics)."),
    T(
      ["Kind", "Description"],
      [
        ["User requirements", "Statements in natural language plus diagrams, describing the services the system is expected to provide and the constraints under which it must operate."],
        ["System requirements", "Describe the system's functions, services and operational conditions in detail."],
      ]
    ),

    H("Functional, non-functional and domain requirements"),
    T(
      ["Type", "Description"],
      [
        ["Functional requirements", "Statements of the **services the system should provide**; describe the behaviour in particular situations and how the system reacts to particular inputs."],
        ["Non-functional requirements", "**Constraints** on the services or functions offered by the system: timing constraints, constraints on the development process and standards. They apply to the system as a whole."],
        ["Domain requirements", "Requirements that relate to the **specific application domain** of the system and reflect its characteristics and constraints."],
      ]
    ),
    SH("Functional requirements"),
    L([
      "They should be both **complete** and **consistent**.",
      "**Completeness**: all services required by the user should be defined.",
      "**Consistency**: requirements should not have contradictory definitions.",
      "It is difficult to achieve completeness and consistency for a large system.",
    ]),
    SH("Types of non-functional requirements"),
    T(
      ["Type", "Derived from", "Includes"],
      [
        ["Product requirements", "Specify product behaviour", "Usability, efficiency, reliability, portability"],
        ["Organisational requirements", "Policies and procedures of the organisation", "Delivery, implementation, standards"],
        ["External requirements", "Factors external to the system and its development process", "Interoperability, ethical, legislative"],
      ]
    ),

    SCEN("Scenarios with answers: kinds of requirements", [
      [
        "Scenario 1: For an online library system, classify each statement as functional or non-functional: (a) The user shall be able to search for a book by title. (b) The search results shall appear within 3 seconds. (c) The system shall run on Windows and Linux. (d) The system shall send an email when a borrowed book is overdue.",
        "(a) **Functional**: a service the system provides. (b) **Non-functional** (product requirement: efficiency or performance). (c) **Non-functional** (product requirement: portability). (d) **Functional**: it describes how the system reacts in a particular situation.",
      ],
      [
        "Scenario 2: Name the type of non-functional requirement: (a) The system must follow the university's data-privacy policy. (b) The software must be delivered by 30 June. (c) The system must exchange data with the Higher Education Commission's system. (d) The system must follow the law on storing personal data.",
        "(a) **Organisational** requirement (from policies and procedures: standard). (b) **Organisational** requirement (delivery). (c) **External** requirement (interoperability). (d) **External** requirement (legislative).",
      ],
      [
        "Scenario 3: A requirement says: 'The system shall display the results quickly.' What is wrong with it and how can it be improved?",
        "It is **not verifiable and is unclear**: 'quickly' means different things to different people (the lack of clarity problem of natural language). It should be rewritten with a measurable target, for example 'The system shall display a student's results within 2 seconds for at least 95% of requests.'",
      ],
      [
        "Scenario 4: Requirement A says 'All reports shall be printed in colour.' Requirement B says 'Reports shall be printed in black and white to save cost.' Which quality is missing?",
        "**Consistency**. The two requirements contradict each other. The analyst must find the conflict, discuss it with the stakeholders and keep only one agreed requirement.",
      ],
      [
        "Scenario 5: A railway ticket system has the requirement 'The system must follow the train-braking-distance rules of the railway authority.' What kind of requirement is it?",
        "A **domain requirement**. It comes from the specific application domain (railways) and reflects the characteristics and constraints of that domain.",
      ],
    ]),

    H("Problems of using natural language"),
    L([
      "**Lack of clarity**: the ambiguity of natural language leads to misunderstanding.",
      "**Requirements confusion**: because language is over-flexible, it is difficult to tell whether requirements are the same or distinct.",
      "**Amalgamation problem**: it is difficult to modularise natural-language requirements.",
    ]),

    H("Structured language specification"),
    L([
      "Requirements are written in a **standard way**, which ensures a degree of uniformity.",
      "Templates are provided to specify system requirements.",
      "Control constructs and graphical highlighting are included to partition the specification.",
    ]),
    SH("System requirements standard form"),
    L([
      "**Function**: the name of the function",
      "**Description**: what the function does",
      "**Inputs**: what it needs",
      "**Source**: where the inputs come from",
      "**Outputs**: what it produces",
      "**Destination**: where the outputs go",
      "**Action**: what is done",
      "**Precondition**: what must be true before it runs",
      "**Post condition**: what is true after it runs",
      "**Side effects**: other effects",
    ]),
    SCEN("Scenario with answer: a structured requirement", [
      [
        "Scenario: Write the requirement 'Withdraw cash' for an ATM in the standard form.",
        "**Function**: Withdraw cash. **Description**: lets a customer take money from their account. **Inputs**: card, PIN, amount. **Source**: the customer through the card reader and keypad. **Outputs**: cash, receipt, updated balance. **Destination**: the cash dispenser, printer and account database. **Action**: verify the PIN, check the balance is at least the amount, dispense cash, deduct the amount. **Precondition**: the card is valid and the PIN is correct. **Post condition**: the balance is reduced by the amount withdrawn. **Side effects**: a transaction record is written to the log.",
      ],
    ]),

    H("Interface specification"),
    P("The working of a new system must match with the existing system, so the interface must be **precisely specified**. There are three types of interface:"),
    L([
      "**Procedural interface**: used when the new programs call existing programs.",
      "**Data structures**: provide data passing from one subsystem to another.",
      "**Representations of data**: the ordering of bits to match an existing system. This is most common in real-time and embedded systems.",
    ]),

    H("The software requirements document (SRS)"),
    P("The requirements document is the **official statement of what is required of the system developers**. It includes both a definition of the user requirements and a specification of the system requirements. It is **not a design document**: as far as possible it should say **what** the system should do rather than **how** it should do it."),
    P("A requirements document should:"),
    L([
      "Specify only external system behaviour.",
      "Specify constraints on the implementation.",
      "Be easy to change.",
      "Serve as a reference tool for system maintainers.",
      "Record forethought about the life cycle of the system.",
      "Characterise acceptable responses to undesired events.",
    ]),
    SH("Purpose of the SRS"),
    L([
      "Communication between the customer, analyst, system developers and maintainers.",
      "A firm foundation for the design phase.",
      "Supports system testing activities.",
      "Supports project management and control.",
      "Controls the evolution of the system.",
    ]),
    SH("IEEE requirements standard"),
    P("The standard defines a generic structure for a requirements document that must be instantiated for each specific system."),
    T(
      ["Part", "Contents"],
      [
        ["1. Introduction", "Purpose; scope; definitions, acronyms and abbreviations; references; overview"],
        ["2. General description", "Product perspective; product function summary; user characteristics; general constraints; assumptions and dependencies"],
        ["3. Specific requirements", "Functional requirements; external interface requirements; performance requirements; design constraints; attributes (for example security, availability, maintainability, transferability/conversion); other requirements"],
        ["Appendices", "Supporting information"],
        ["Index", "Index of the document"],
      ]
    ),

    H("The requirements engineering process"),
    P("The aim is to **create and maintain a system requirements document**. The overall process includes four high-level sub-processes:"),
    T(
      ["Sub-process", "Concern"],
      [
        ["1. Feasibility study", "Assessing whether the system is useful to the business."],
        ["2. Elicitation and analysis", "Discovering the requirements."],
        ["3. Specification", "Converting the requirements into a standard form."],
        ["4. Validation", "Checking that the requirements actually define the system the customer wants."],
      ]
    ),
    SH("Spiral representation of the requirements engineering process"),
    P("The process is shown as a three-stage activity organised as an iterative process around a spiral. Early in the process, most effort is spent on understanding the high-level business and user requirements. In the outer rings, more effort goes to system requirements engineering and system modeling. The three stages are **requirements elicitation**, **requirements specification** and **requirements validation**."),
    FIGS("Spiral representations of requirements engineering", ["re-process-spiral", "re-spiral-activities"], [
      "Spiral with requirements elicitation, specification and validation: feasibility study, prototyping, reviews, business requirements specification, user requirements specification and system requirements specification",
      "Spiral of requirements engineering with requirements discovery, classification and organisation, prioritisation and negotiation, and documentation",
    ]),

    H("Feasibility studies"),
    P("The feasibility study is the **starting point** of the requirements engineering process."),
    L([
      "**Input**: a set of preliminary business requirements, an outline description of the system and how it is intended to support business processes.",
      "**Output**: a **feasibility report** that recommends whether or not it is worth carrying on.",
    ]),
    P("The feasibility report answers these questions:"),
    L(
      [
        "Does the system contribute to the overall objectives of the organisation?",
        "Can the system be implemented using current technology and within the given cost and schedule?",
        "Can the system be integrated with other systems that are already in place?",
      ],
      true
    ),

    H("Requirements elicitation and analysis"),
    P("Elicitation involves a number of people in the organisation. A **stakeholder** is any person or group who will be affected by the system directly or indirectly: end users, engineers, business managers and domain experts."),
    SH("Why elicitation is difficult"),
    L(
      [
        "Stakeholders often **do not know what they want** from the computer system.",
        "Stakeholders express requirements in natural language, which is sometimes difficult to understand.",
        "Different stakeholders express requirements differently.",
        "**Political factors** may influence the requirements.",
        "Requirements change because the environment is dynamic.",
      ],
      true
    ),
    SH("The elicitation process activities"),
    T(
      ["Activity", "Description"],
      [
        ["Requirements discovery", "Interaction with stakeholders to collect their requirements, including domain requirements and documentation."],
        ["Classification and organisation", "Coherent clustering of the requirements from an unstructured collection."],
        ["Prioritisation and negotiation", "Assigning priority to requirements and resolving conflicting requirements through negotiation."],
        ["Requirements documentation", "Requirements are documented and placed in the next round of the spiral."],
      ]
    ),

    H("Requirements discovery techniques"),
    SH("1. Viewpoints"),
    P("Based on the viewpoints expressed by the stakeholders. They recognise multiple perspectives and provide a framework for discovering conflicts in the requirements proposed by different stakeholders. Three generic types:"),
    L([
      "**Interactor viewpoint**: people or other systems that interact directly with the system.",
      "**Indirect viewpoint**: stakeholders who influence the requirements but do not use the system.",
      "**Domain viewpoint**: domain characteristics and constraints that influence the requirements.",
    ]),
    SH("2. Interviewing"),
    P("Questions are put to stakeholders about the system they use and the system to be developed. Requirements are derived from the answers. There are two types of interview:"),
    L([
      "**Closed interviews**: the stakeholders answer a pre-defined set of questions.",
      "**Open interviews**: a range of issues is discussed with the stakeholders for a better understanding of their needs.",
    ]),
    P("Effective interviewers are **open-minded** (no pre-conceived ideas) and **prompters** (they start discussion with a question or a proposal)."),
    SH("3. Scenarios"),
    P("It is easier to relate to real-life examples than to abstract descriptions. A scenario starts with an outline of the interaction and details are added during elicitation to create a complete description. A scenario includes:"),
    L(
      [
        "A description of what the system and users expect when the scenario starts.",
        "A description of the **normal flow** of events.",
        "A description of **what can go wrong** and how it is handled.",
        "Information about **other activities** parallel to the scenario.",
        "A description of the **system state when the scenario finishes**.",
      ],
      true
    ),
    SCEN("LIBSYS scenario: article printing", [
      [
        "Initial assumption",
        "The user has logged on to the LIBSYS system and has located the journal containing the copy of the article.",
      ],
      [
        "Normal flow",
        "The user selects the article to be copied. The system prompts for subscriber information for the journal or how they will pay for the article (credit card or an organisational account number). The user fills in a copyright form that keeps the details of the transaction and submits it. The form is checked and, if it is correct, the PDF version of the article is downloaded to the LIBSYS working area on the user's computer and the user is told it is available. The user selects a printer and a copy of the article is printed.",
      ],
      [
        "What can go wrong",
        "The copyright form may be filled in incorrectly: it is shown again for correction, and if the resubmitted form is still wrong the request is rejected. The payment may be rejected: the request is rejected. The download may fail: retry until it succeeds or the user ends the session.",
      ],
      [
        "Other activities",
        "Simultaneous downloads of other articles.",
      ],
      [
        "System state on completion",
        "The user is logged on. The downloaded article has been deleted from the LIBSYS workspace if it was flagged as print-only.",
      ],
    ]),
    SH("4. Use cases"),
    P("A use case is a scenario-based technique for requirements elicitation. It is a fundamental feature of the **UML**, the notation for describing object-oriented system models. A use case identifies a **type of interaction** and the **actors** involved. **Sequence diagrams** are used to add information to a use case. For LIBSYS the use cases include article printing, article search, user administration and supplier catalogue services, with actors such as the user, the library staff and the library."),

    SCEN("Scenarios with answers: requirements process", [
      [
        "Scenario 1: A company wants a mobile game but is unsure the market will pay for it and whether its team can build it in 6 months. Which sub-process comes first and what does it produce?",
        "The **feasibility study**. It takes the preliminary business requirements and an outline of the system and produces a **feasibility report** that answers: does the system contribute to the organisation's objectives, can it be built with current technology within cost and schedule, and can it be integrated with systems already in place. The report recommends whether to continue.",
      ],
      [
        "Scenario 2: For a school management system, list stakeholders and their viewpoint type: teachers who enter marks, parents who only receive reports, and the Education Department's rules on records.",
        "**Teachers**: interactor viewpoint (they use the system directly). **Parents**: indirect viewpoint (they influence requirements through the reports they need but do not operate the system). **Education Department rules**: domain viewpoint (domain constraints that influence the requirements).",
      ],
      [
        "Scenario 3: Two stakeholders disagree: the principal wants every teacher to edit marks, the exam officer wants only the subject teacher to edit them. At which elicitation activity is this solved and how?",
        "At **requirements prioritisation and negotiation**. Conflicting requirements are resolved by discussion with the stakeholders. The analyst records the reasons, finds a compromise (for example, only the subject teacher edits, others can view) and gives each agreed requirement a priority.",
      ],
      [
        "Scenario 4: An analyst wants to understand how a customer pays at a supermarket. Which technique is best and what must the description contain?",
        "A **scenario** (or use case) is best, because stakeholders relate to real-life examples. It must contain the starting assumption, the normal flow (scan items, total, choose payment, print receipt), what can go wrong (card declined, item barcode unreadable), other parallel activities (another cashier uses the same stock database) and the system state when finished (stock reduced, sale recorded).",
      ],
      [
        "Scenario 5: In an interview the analyst has a fixed list of 10 questions and the customer cannot add anything new. Which type of interview is this and what is its weakness?",
        "A **closed interview**. Its weakness is that stakeholders may have important needs that none of the pre-defined questions asks about. Open interviews help the analyst understand the needs better.",
      ],
    ]),

    H("Requirements validation"),
    P("Validation shows that the requirements define the system that the customer really wants. It is important because **errors in requirements can lead to extensive rework cost**."),
    SH("Validation checks"),
    T(
      ["Check", "Meaning"],
      [
        ["Validity checks", "Verify that the system performs the function intended by the user."],
        ["Consistency checks", "Requirements should not conflict."],
        ["Completeness checks", "Include requirements that define all functions and constraints intended by the system user."],
        ["Realism checks", "Ensure that the requirements can actually be implemented."],
        ["Verifiability", "Requirements must be testable, to avoid disputes between customer and developer."],
      ]
    ),
    SH("Validation techniques"),
    L([
      "**Requirements reviews**: reviewers check verifiability (testable), comprehensibility, traceability and adaptability.",
      "**Prototyping**.",
      "**Test-case generation**.",
    ]),

    H("Requirements management"),
    P("Requirements are likely to change for large software systems, so a requirements management process is needed to handle changes."),
    SH("Reasons for requirements change"),
    L([
      "A diverse user community, where users have different requirements and priorities.",
      "System customers and end users are different people.",
      "The business and technical environment changes after installation.",
    ]),
    P("There are two classes of requirements: **enduring requirements** (relatively stable) and **volatile requirements** (likely to change during development or operation)."),
    SH("Requirements management planning"),
    L([
      "**Requirements identification**: each requirement has a unique tag for cross-reference and traceability.",
      "**Change management process**: a set of activities that assess the impact and cost of changes.",
      "**Traceability policy**: a matrix showing the links between requirements and other elements of software development.",
      "**CASE tool support**: automatic tools to make change management more efficient, for requirements storage, change management and traceability management.",
    ]),
    SH("Traceability"),
    L([
      "**Source traceability**: links requirements to the stakeholders who proposed them.",
      "**Requirements traceability**: links dependent requirements within the requirements document.",
      "**Design traceability**: links the requirements to the design modules.",
    ]),
    IMG("traceability-matrix", "A traceability matrix with requirement ids 1.1 to 3.2 on both axes, marked D for dependent and R for related", "A traceability matrix"),
    P("In the matrix a **D** means the requirement in that row depends on the one in that column and an **R** means the two are weakly related."),
    SH("Requirements change management"),
    P("This has three principal stages:"),
    L(
      [
        "**Problem analysis and change specification**: the process starts with a specific change proposal, which is analysed to check that it is valid.",
        "**Change analysis and costing**: impact analysis in terms of cost, time and risk.",
        "**Change implementation**: carrying out the changes in the requirements document, the system design and its implementation.",
      ],
      true
    ),

    SCEN("Scenarios with answers: validation and change", [
      [
        "Scenario 1: A requirement says 'The system should be user-friendly.' Which validation check does it fail and how can it be fixed?",
        "It fails **verifiability**: it cannot be tested. Fix it with a measurable statement such as 'A new user shall be able to register a patient without training in under 3 minutes in a usability test with 10 users.'",
      ],
      [
        "Scenario 2: A requirement asks for a database that answers any query in zero seconds. Which check does it fail?",
        "The **realism check**. A requirement must be something that can actually be implemented with the available technology and budget. It should be replaced by a realistic target.",
      ],
      [
        "Scenario 3: The SRS describes the login, marks entry and report features but forgot to say what happens when a teacher forgets the password. Which check finds this?",
        "The **completeness check**. It confirms that requirements define all functions and constraints intended by the user. Here a password-recovery function is missing.",
      ],
      [
        "Scenario 4: After the system is installed, the Ministry changes the grading scale. Describe how the change is managed.",
        "Follow the three stages. (1) **Problem analysis and change specification**: check that the change proposal is valid. (2) **Change analysis and costing**: find which requirements (report, result calculation) are affected, using the traceability matrix, and estimate cost, time and risk. (3) **Change implementation**: update the requirements document, then the design and the code. The change should be approved before work begins.",
      ],
      [
        "Scenario 5: Requirement 2.1 is changed. How does the traceability matrix help the team?",
        "In the matrix, the row and column of 2.1 show which other requirements depend on it (D) or are related to it (R). The team must check exactly those requirements, and the design modules linked to them, because they may need to change too. This is what traceability is for: finding the impact of a change before it is made.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 5. System modeling
// ---------------------------------------------------------------------------
const chapter5 = {
  title: "Chapter 5: System Modeling",
  summary:
    "System models and their types: context models, behavioural models (data flow and state machine), data models, and object models (classes, inheritance, aggregation and behaviour), with solved scenarios.",
  theory: [
    H("System models"),
    P("System models are used in the **analysis process** to develop an understanding of the existing system or the new system. A model is an **abstraction** of the system and **leaves out details**."),
    P("The types of system models are:"),
    L(["Context models", "Behavioural models", "Data models", "Object models", "Structured models (structured methods)"], true),

    H("Context models"),
    L([
      "A context model is a type of **architectural model**. It consists of the subsystems that make up an entire system.",
      "The **first step** is to identify the subsystems.",
      "The high-level architectural model is shown as a **simple block diagram**: each subsystem is a **named rectangle** and **lines between rectangles show associations** between subsystems.",
    ]),
    SH("Disadvantage"),
    P("A context model is concerned only with the **system environment**. It does not take into account other systems which may take data from, or give data to, the model."),
    SH("Example: the context of an ATM system"),
    P("The context of an automated teller machine (ATM) consists of these systems: the **auto-teller system**, the **security system**, the **maintenance system**, the **account database**, the **usage database**, the **branch accounting system** and the **branch counter system**."),

    H("Behavioural models"),
    P("Behavioural models describe the **overall behaviour of a system**. There are two types: **data flow models** and **state machine models**."),
    SH("Data flow models"),
    L([
      "Concentrate on the **flow of data** and the functional transformations on that data.",
      "Show the processing of data and its flow through a **sequence of processing steps**.",
      "Help the analyst understand what is going on.",
    ]),
    P("**Advantages:** they are simple and easy to understand, and useful during the analysis of requirements."),
    SH("State machine models"),
    L([
      "Describe **how a system responds to internal or external events**.",
      "Show the **system states** and the **events that cause a transition** from one state to another.",
      "Do **not** show the flow of data within the system.",
      "Used for modelling **real-time systems**.",
    ]),
    P("The model assumes that at any time the system is in one of a number of possible states. A **stimulus** triggers a transition from one state to another. **Example: a microwave oven.**"),
    P("**Disadvantage:** the number of possible states increases rapidly for large system models."),
    T(
      ["", "Data flow model", "State machine model"],
      [
        ["Focus", "Flow of data and its transformations", "States and events"],
        ["Shows", "Processing steps", "Transitions caused by stimuli"],
        ["Used for", "Requirements analysis", "Real-time systems"],
        ["Does not show", "Control of states", "Flow of data"],
      ]
    ),

    H("Data models"),
    L([
      "Used to describe the **logical structure of data** processed by the system.",
      "An **entity-relation-attribute model** sets out the **entities** in the system, the **relationships** between them and the **attributes** of the entities.",
      "Widely used in **database design** and can readily be implemented using relational databases.",
      "The UML has no specific notation for this, but objects and associations can be used.",
    ]),
    FIGS("Library data model", ["library-semantic-model", "data-dictionary"], [
      "Library semantic model: Article, Source, Order, Buyer, Copyright Agency and Country with relationships such as published-in, delivers, places and fee-payable-to",
      "Data dictionary entries: name, description, type (entity, attribute or relation) and date",
    ]),
    P("The **data dictionary** is a list of all names used in the system models (entities, relations and attributes) with a description of each, its type and the date. It makes it easy to check that a name is used consistently and to find any item in the model."),

    H("Object models"),
    P("An object-oriented approach is commonly used for **interactive systems development**. It expresses the system requirements using **objects** and builds the system in an object-oriented programming language such as C++."),
    L([
      "An **object class** is an abstraction over a set of objects that identifies their **common attributes**.",
      "**Objects are instances** of an object class. Many objects may be created from a single class.",
      "The **analysis process** identifies objects and object classes.",
    ]),
    SH("An object class in UML"),
    P("It is drawn as a **vertically oriented rectangle with three sections**:"),
    L([
      "The **name** of the object class in the top section.",
      "The class **attributes** in the middle section.",
      "The **operations** associated with the class in the lower section.",
    ]),
    SH("Inheritance models"),
    L([
      "Arrange classes into an **inheritance hierarchy** with the **most general class at the top**. Specialised objects inherit their attributes and services.",
      "In UML notation the inheritance arrow points **upward** rather than downward.",
      "**Single inheritance**: every object class inherits its attributes and operations from a single parent class.",
      "**Multiple inheritance**: a class inherits from several parents.",
    ]),
    SH("Object aggregation"),
    P("Some objects are **groupings of other objects**: an aggregate of a set of other objects. A **diamond shape on the source of the link** represents the composition."),
    SH("Object behavioural model"),
    L([
      "Shows the **operations provided by the objects**.",
      "The **sequence diagram** of the UML can be used for behavioural modelling.",
    ]),

    SCEN("Scenarios with answers: system models", [
      [
        "Scenario 1: You must show the subsystems of a university system and how they are connected to the library, hostel and fee-collection systems. Which model do you draw, and how?",
        "A **context model**. Identify the subsystems first, draw each one as a **named rectangle** and join related ones with lines to show associations. Remember its disadvantage: it shows only the system environment, not the data that other systems give or take.",
      ],
      [
        "Scenario 2: A microwave oven has the states Waiting, Door open, Set power, Set time, Running and Disabled. Pressing Start moves it from Waiting (with time set) to Running. Which model describes this, and what does it not show?",
        "A **state machine model**. The states are the boxes and events (door opened, power selected, Start pressed, timer finished) are the transitions between them. It shows how the system **responds to events**, but not the **flow of data**. It is the standard model for real-time systems such as this.",
      ],
      [
        "Scenario 3: An analyst must show how a customer's order moves through 'Validate order', 'Check stock', 'Prepare invoice' and 'Ship goods', and what data passes between the steps. Which model is suitable?",
        "A **data flow model**. It concentrates on the flow of data and on the functional transformations done on it, showing the sequence of processing steps. It is simple, easy to understand and useful in requirements analysis.",
      ],
      [
        "Scenario 4: Design a simple data model for a library: books, members and loans. State entities, attributes and relationships.",
        "**Entities and attributes**: Book (ISBN, title, author), Member (member id, name, address), Loan (loan id, issue date, return date). **Relationships**: a Member **borrows** many Books through Loans (one member, many loans); each Loan is for exactly one Book. This entity-relation-attribute model can be implemented directly as three tables in a relational database.",
      ],
      [
        "Scenario 5: A system has classes Employee, Manager and Programmer. Manager and Programmer share name and salary but have different operations. Which object-model relationship is this and how is it drawn?",
        "**Inheritance** (single inheritance). **Employee** is the general class at the top with the shared attributes (name, salary). **Manager** and **Programmer** are specialised classes that inherit these and add their own operations. In UML the arrows point **upward** from the specialised classes to Employee.",
      ],
      [
        "Scenario 6: A Computer is made of a CPU, memory and a disk. Which object-model idea is this and what is its UML symbol?",
        "**Object aggregation**: the Computer is an aggregate of other objects. A **diamond shape at the source of the link** (at the whole, the Computer end) shows the composition.",
      ],
      [
        "Scenario 7: Draw the object class 'Student' for a university system.",
        "A rectangle with three sections. Top: **Student**. Middle (attributes): name, roll number, program, semester. Bottom (operations): register course, view result, pay fee. Each student in the system is an **object** (instance) of this class.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 6. Architectural design
// ---------------------------------------------------------------------------
const chapter6 = {
  title: "Chapter 6: Architectural Design",
  summary:
    "Software architecture and why it matters, data design at architecture and component level, architectural styles (data-centred, data-flow, call and return, object-oriented, layered) and architectural patterns (concurrency, persistence, distribution), with solved scenarios.",
  theory: [
    H("What is software architecture?"),
    P("The **software architecture** of a program or computing system is the **structure or structures of the system**, which comprise the **software components**, the **externally visible properties** of those components and the **relationships among them**."),
    P("Software architecture is **not the operational software**. It is a representation that enables a software engineer to:"),
    L([
      "**Analyse the effectiveness** of the design in meeting its stated requirements.",
      "**Consider architectural alternatives** at a stage when making design changes is still relatively easy.",
      "**Reduce the risks** associated with the construction of the software.",
    ]),
    SH("Why is architecture important? Three key reasons"),
    L(
      [
        "Representations of software architecture enable **communication and understanding** between stakeholders.",
        "It highlights **early design decisions** that have a deep effect on all the work that follows.",
        "It constitutes a **model** of the software components and how they are connected.",
      ],
      true
    ),

    H("Data design"),
    P("The data design action translates the **data objects** defined in the analysis model into **data structures at the component level** and, when necessary, **database architecture at the application level**."),
    SH("Data design at the architecture level"),
    T(
      ["Level", "Form of data design"],
      [
        ["Programming level", "Data structures"],
        ["Application level", "Database"],
        ["Business level", "Data warehouse"],
      ]
    ),
    SH("Data design at the component level: principles for data specification"),
    L(
      [
        "Proper selection of the data objects and data models.",
        "Identification of the attributes and functions and their **encapsulation** within a class.",
        "A mechanism for representing the content of each data object; class diagrams may be used.",
        "Refinement of the data design elements from requirements analysis to component-level design.",
        "**Information hiding**.",
        "A library of useful data structures and operations should be developed.",
        "Software design and the programming language should support the specification and realisation of **abstract data types**.",
      ],
      true
    ),

    H("Architectural styles"),
    P("An **architectural style** describes a system category that includes:"),
    L([
      "A set of **components**.",
      "A set of **connectors** that enable communication and coordination.",
      "**Constraints** that define how components can be integrated to form the system.",
      "**Semantic models** to understand the overall properties of the system.",
    ]),

    SH("Data-centred architecture"),
    P("A central **data store (repository or blackboard)** is accessed by several client software components that add, update, delete or modify data in the store."),
    IMG("repository-architecture", "Data-centred architecture: eight client software components connected to a central data store (repository or blackboard)", "Data-centred (repository) architecture"),

    SH("Data-flow architecture"),
    L([
      "Shows the flow of **input data**, its **computational components** and the **output data**.",
      "The structure is also called **pipe and filter**: a **pipe** provides the path for the flow of data and **filters** manipulate the data and work independently of neighbouring filters.",
      "If the data flow degenerates into a **single line of transforms**, it is called **batch sequential**.",
    ]),

    SH("Call and return architecture"),
    P("Achieves a structure that is **easy to modify and scale**. It has two sub-styles:"),
    L([
      "**Main program / subprogram architecture**: the classic program structure. The main program invokes a number of components, which in turn invoke still other components.",
      "**Remote procedure call architecture**: the components of the main program/subprogram are **distributed across computers** over a network.",
    ]),

    SH("Object-oriented architecture"),
    P("The components of a system **encapsulate data and the operations** that manipulate it. **Communication and coordination** between components are done through **messages**."),

    SH("Layered architecture"),
    P("A number of different layers are defined. Each layer does operations that progressively come closer to the machine instruction set."),
    IMG("layered-architecture", "Layered architecture: a core layer in the centre, then a utility layer, an application layer and a user interface layer", "Layered architecture"),
    L([
      "**Inner layer**: interfaces with the operating system.",
      "**Intermediate layers**: utility services and application functions.",
      "**Outer layer**: the user interface.",
    ]),
    T(
      ["Style", "Main idea", "Typical example"],
      [
        ["Data-centred", "Clients share one central data store", "Databases, blackboard systems"],
        ["Data-flow (pipe and filter)", "Data passes through independent filters", "Compilers, batch processing"],
        ["Call and return", "Main program calls subprograms", "Classic structured programs, remote procedure calls"],
        ["Object-oriented", "Objects exchange messages", "Interactive systems built in an OO language"],
        ["Layered", "Inner to outer layers with a defined job each", "Operating system, network protocol stacks"],
      ]
    ),

    H("Architectural patterns"),
    P("An **architectural pattern** is a **template that specifies an approach** for some behavioural characteristic of the system. Patterns are **imposed on the architectural styles**. They are grouped into pattern domains:"),
    T(
      ["Domain", "What it addresses", "Approaches (patterns)"],
      [
        ["Concurrency", "Handles multiple tasks that simulate parallelism.", "Operating system process management pattern; task scheduler pattern"],
        ["Persistence", "Data survives past the execution of the process that created it.", "Database management system pattern; application-level persistence pattern (for example word-processing software)"],
        ["Distribution", "The way in which components communicate in a distributed environment.", "Broker pattern: acts as a middleman between client and server"],
      ]
    ),

    SCEN("Scenarios with answers: architecture", [
      [
        "Scenario 1: A hospital has a reception system, a doctor's system, a lab system and a pharmacy system. All of them read and update the same patient records. Which architectural style is natural?",
        "The **data-centred (repository) architecture**. A central data store holds the patient records and each system acts as a client that adds, reads or changes the data. The style makes it easy to add a new client system, but the store is a single point of failure and a bottleneck.",
      ],
      [
        "Scenario 2: A text-processing program reads a file, removes punctuation, converts to lower case, counts words and prints a report. Each step works on the output of the previous step. Which style is this?",
        "**Data-flow (pipe and filter) architecture.** Each step is a **filter** that works independently of its neighbours and the connections that carry the data are the **pipes**. Because the data flows through a single line of transformations, it can be called **batch sequential**.",
      ],
      [
        "Scenario 3: A mobile banking app has a screen layer, a business-rules layer, a data-access layer and the operating system at the bottom. What style is this, and what is its main benefit?",
        "A **layered architecture**: outer layer (user interface), intermediate layers (application functions and utility services) and inner layer (interface with the operating system). The main benefit is that each layer has a defined job, so a layer can be changed (for example a new screen design) with little effect on the other layers.",
      ],
      [
        "Scenario 4: A university system must remember students' marks even after the program is closed, and must handle many users at the same time. Which two architectural pattern domains apply?",
        "**Persistence** (data survives past the execution of the process: use a database management system pattern) and **concurrency** (multiple tasks simulate parallelism: an operating system process management or task scheduler pattern).",
      ],
      [
        "Scenario 5: A client application on a phone and a server in another city must communicate without knowing each other's location. Which pattern domain and pattern help?",
        "The **distribution** pattern domain, with the **broker pattern**. The broker acts as a middleman between client and server, so the client asks the broker for a service instead of connecting directly to the server.",
      ],
      [
        "Scenario 6: Why should a team draw the architecture before writing code, in the case of a large e-commerce site?",
        "Because architecture lets the team (1) **analyse whether the design meets the requirements**, (2) consider **alternatives while changes are still cheap**, and (3) **reduce construction risk**. It also helps all the stakeholders to communicate and understand the system, and records the early design decisions.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 7. Design and implementation
// ---------------------------------------------------------------------------
const chapter7 = {
  title: "Chapter 7: Design and Implementation",
  summary:
    "Design process and quality, FURPS, design concepts (abstraction, modularity, cohesion and coupling and more), the design model, object-oriented design, and user interface design (golden rules, models, analysis, design steps, issues and evaluation), with solved scenarios.",
  theory: [
    H("Design engineering"),
    SH("Design process and design quality"),
    P("Design is the set of **principles, concepts and practices** that lead to the development of a high-quality system or product. Design creates a **representation or model** of the software. The design model provides details of the software **architecture, interfaces and components** needed to implement the system."),
    L([
      "**Quality is established during design.**",
      "Design should exhibit **firmness, commodity and delight** (the software should be sound, useful and a pleasure to use).",
      "Design sits at the **kernel of software engineering** and sets the stage for construction.",
    ]),
    SH("Quality guidelines"),
    L([
      "Uses recognisable **architectural styles or patterns**.",
      "Is **modular**, that is, logically partitioned into elements or subsystems.",
      "Has a **distinct representation** of data, architecture, interfaces and components.",
      "Uses **appropriate data structures** for the classes to be implemented.",
      "Has components with **independent functional characteristics**.",
      "Has **interfaces that reduce the complexity** of connections.",
      "Is derived using a **repeatable method**.",
    ]),
    SH("Quality attributes: FURPS"),
    T(
      ["Attribute", "Includes"],
      [
        ["Functionality", "The feature set and capabilities of the program; security of the overall system"],
        ["Usability", "User-friendliness, aesthetics, consistency, documentation"],
        ["Reliability", "Evaluated by measuring the frequency and severity of failure; MTTF (mean time to failure)"],
        ["Performance", "Speed, efficiency and response time of the software"],
        ["Supportability", "Extensibility, adaptability, serviceability"],
      ]
    ),

    H("Design concepts"),
    P("The main design concepts are: abstraction, architecture, patterns, modularity, information hiding, functional independence, refinement, refactoring and design classes."),
    SH("1. Abstraction"),
    P("There are many levels of abstraction. At the **highest level** the solution is stated in broad terms using the language of the problem environment. At **lower levels** a more detailed description of the solution is given."),
    L([
      "**Procedural abstraction**: a sequence of instructions that has a specific and limited function.",
      "**Data abstraction**: a named collection of data that describes a data object.",
    ]),
    SH("2. Architecture"),
    P("The **structural organisation of program components (modules)** and their interconnection. Architectural models:"),
    L([
      "**Structural models**: an organised collection of program components.",
      "**Framework models**: represent the design in a more abstract way.",
      "**Dynamic models**: represent the behavioural aspects, showing changes as a function of external events.",
      "**Process models**: focus on the design of the business or technical process.",
    ]),
    SH("3. Patterns"),
    P("A design pattern describes a design structure that solves a particular problem. It enables a designer to decide:"),
    L([
      "Whether the pattern is **applicable** to the current work.",
      "Whether the pattern can be **reused**.",
      "Whether the pattern can serve as a **guide** for developing a similar but functionally or structurally different pattern.",
    ]),
    SH("4. Modularity"),
    L([
      "Software is divided into **separately named and addressable components** called **modules**, which are integrated to satisfy the problem requirements.",
      "Based on **divide and conquer**: it is easier to solve a complex problem when it is broken into sub-modules.",
      "If the complexity of problem p1 is Cp1 and that of p2 is Cp2, and Cp1 > Cp2, then the effort Ep1 > Ep2. The complexity of two problems combined is often **greater than the sum** of the complexities of each taken separately.",
    ]),
    SH("5. Information hiding"),
    L([
      "Information contained within a module is **inaccessible to other modules** that do not need it.",
      "Achieved by defining a set of **independent modules** that communicate with one another only through the information necessary to achieve the software function.",
      "Gives the greatest benefit when **modifications are required** during testing and later: errors introduced during a modification are less likely to spread to other places in the software.",
    ]),
    SH("6. Functional independence"),
    L([
      "A direct outgrowth of modularity, abstraction and information hiding.",
      "Achieved by developing a module with a **single-minded function** and an aversion to excessive interaction with other modules.",
      "Independent modules are **easier to develop**, have **simple interfaces** and are **easier to maintain**, because secondary effects from design or code changes are limited, error propagation is reduced and reusable modules are possible.",
    ]),
    P("Independence is judged by two criteria:"),
    T(
      ["Criterion", "Meaning", "Aim"],
      [
        ["Cohesion", "A module performs a **single task** and needs little interaction with other components.", "**High** cohesion"],
        ["Coupling", "A measure of the **interconnection among modules**.", "**Low** coupling"],
      ]
    ),
    NOTE("A good design has high cohesion and low coupling."),
    SH("7. Refinement"),
    P("**Refinement** is the process of elaboration from a high level of abstraction to the lowest level. A high level of abstraction begins with a statement of function; refinement makes the designer add more and more detail at successive levels. **Abstraction and refinement are complementary concepts.**"),
    SH("8. Refactoring"),
    P("**Refactoring** is an organisation technique that **simplifies the design of a component without changing its function or behaviour**. It examines the design for redundancy, unused design elements and inefficient or unnecessary algorithms."),
    SH("9. Design classes"),
    P("Each class represents a different layer of the design architecture. There are five types of design class:"),
    T(
      ["Class", "Role"],
      [
        ["User interface class", "Defines all abstractions needed for human-computer interaction."],
        ["Business domain class", "Refinement of the analysis classes that identifies the attributes and services needed to implement part of the business domain."],
        ["Process class", "Implements lower-level business abstractions needed to fully manage the business domain classes."],
        ["Persistent class", "Represents data stores (for example a database) that persist beyond the execution of the software."],
        ["System class", "Implements management and control functions that let the system operate and communicate within its computing environment and with the outside world."],
      ]
    ),

    SCEN("Scenarios with answers: design concepts", [
      [
        "Scenario 1: A payroll program has one huge function that calculates tax, prints payslips, sends emails and updates the database. A small tax-rule change breaks the email part. Which design concepts were ignored and how can it be improved?",
        "**Modularity**, **information hiding** and **functional independence** were ignored. The function does many jobs (low cohesion) and its parts depend on each other (high coupling). Improve it by splitting it into modules with one job each (calculate tax, print payslip, send email, update database) that communicate only through the information they need.",
      ],
      [
        "Scenario 2: Module A uses the internal variables of module B directly. When B's data layout changes, A stops working. Is this high or low coupling, and what is the fix?",
        "**High coupling**: A depends on the inside of B. The fix is **information hiding**: B keeps its data private and offers a small interface of operations; A uses only those. B's internals can then change without breaking A.",
      ],
      [
        "Scenario 3: A module named 'Utilities' contains a login check, a date formatter, a file compressor and a print routine. What is wrong?",
        "It has **low cohesion**: its parts have unrelated tasks. A module should perform a single task. Split it into separate cohesive modules (authentication, date handling, compression, printing).",
      ],
      [
        "Scenario 4: Place these design classes in the right category for an online shop: ProductPage screen, Order (with price, quantity), PaymentProcessor, OrderDatabase table, SystemLogger.",
        "**ProductPage screen**: user interface class. **Order**: business domain class. **PaymentProcessor**: process class (manages the business domain classes at a lower level). **OrderDatabase table**: persistent class. **SystemLogger**: system class.",
      ],
      [
        "Scenario 5: A programmer rewrites a long, repeated block of code into one small function without changing what the program does. Which concept is this?",
        "**Refactoring**: simplifying the design or code of a component without changing its function or behaviour, by removing redundancy and unnecessary elements.",
      ],
      [
        "Scenario 6: A designer first writes 'The system manages student results', then 'It stores marks, calculates GPA and prints transcripts', and then lists the exact formulas and table fields. Which two concepts are shown?",
        "**Abstraction** (the first statement is at the highest level, in the language of the problem) and **refinement** (adding more detail at each successive level, down to the lowest level). They are complementary.",
      ],
    ]),

    H("The design model"),
    P("The design model can be viewed in two dimensions: the **process dimension** shows the evolution of the design model as design tasks are executed in the software process, and the **abstraction dimension** shows the level of detail as each element of the analysis model is transformed into a design equivalent."),
    T(
      ["Design element", "Description"],
      [
        ["Data design elements", "A model of data at a high level of abstraction, refined progressively into a more implementation-specific form. Translating the data model into a database is pivotal to achieving the business objectives."],
        ["Architectural design elements", "Derived from three sources: (1) information about the application domain, (2) the analysis model such as data flow diagrams or analysis classes, (3) architectural patterns and styles."],
        ["Interface design elements", "A set of detailed drawings of (1) the user interface, (2) external interfaces to other systems and devices and (3) internal interfaces between components."],
        ["Component-level design elements", "Fully describe the internal details of each software component; UML diagrams can be used."],
        ["Deployment-level design elements", "Show how software functionality and subsystems are allocated within the physical computing environment. A UML deployment diagram is developed and refined."],
      ]
    ),

    H("Object-oriented design"),
    SH("Objects and object classes"),
    L([
      "An **object** is an entity that has a **state** and a defined set of **operations** that operate on that state.",
      "An **object class** definition is both a **type specification** and a **template for creating objects**.",
      "It includes the declaration of all the attributes and operations associated with objects of that class.",
    ]),
    SH("The object-oriented design process"),
    P("There are five stages:"),
    L(
      [
        "Understand and define the **context and modes of use** of the system.",
        "Design the **system architecture**.",
        "Identify the **principal objects** in the system.",
        "Develop **design models**.",
        "Specify the **object interfaces**.",
      ],
      true
    ),
    SH("System context and modes of use"),
    P("The context specifies the relationships between the software being designed and its external environment."),
    L([
      "If the system context is a **static model**, it describes the other systems in the environment.",
      "If it is a **dynamic model**, it describes how the system actually interacts with its environment.",
    ]),
    SH("System architecture"),
    P("Once the interaction between the system being designed and its environment is defined, that information is used as the **basis for designing the system architecture**."),
    SH("Object identification"),
    P("This is concerned with identifying the **object classes**. It can be done by:"),
    L([
      "A **grammatical analysis** of a description of the system (nouns become objects, verbs become operations).",
      "Using **tangible entities** in the application domain.",
      "A **behavioural approach**, asking who participates in what behaviour.",
      "A **scenario-based approach**, identifying objects, attributes and operations in each scenario.",
    ]),
    SH("Design models"),
    P("Design models are the **bridge between the requirements and the implementation**. There are two types:"),
    L([
      "**Static models** describe the **relationships between objects**.",
      "**Dynamic models** describe the **interaction between objects**.",
    ]),
    SH("Object interface specification"),
    P("Concerned with specifying the details of the interfaces to objects."),
    SH("Design evolution"),
    P("The main advantage of the OOD approach is that it **simplifies making changes to the design**. Changing the internal details of an object is unlikely to affect any other object in the system."),

    SCEN("Scenario with answer: object identification", [
      [
        "Scenario: 'The library issues books to members. A member can borrow up to five books. The librarian records each loan and the return date.' Use grammatical analysis to find candidate objects and operations.",
        "**Nouns (candidate objects/classes)**: Library, Book, Member, Librarian, Loan, Return date (an attribute of Loan). **Verbs (candidate operations)**: issue (book), borrow, record (loan). Resulting classes: **Book**, **Member** (with an operation borrow), **Loan** (with attribute return date) and **Librarian** (with the operations issue and record loan). Candidates such as 'Library' may be the system itself and not a class.",
      ],
    ]),

    H("User interface design"),
    SH("Golden rules"),
    L(
      [
        "Place the **user in control**.",
        "**Reduce the user's memory load.**",
        "Make the interface **consistent**.",
      ],
      true
    ),
    SH("Place the user in control"),
    L([
      "Define interaction modes in a way that does not force a user into unnecessary or undesired actions.",
      "Provide for **flexible interaction**.",
      "Allow user interaction to be **interruptible and undoable**.",
      "**Streamline interaction** as skill levels advance and allow the interaction to be customised.",
      "**Hide technical internals** from the casual user.",
      "Design for **direct interaction** with objects that appear on the screen.",
    ]),
    SH("Make the interface consistent"),
    L([
      "Allow the user to put the current task into a **meaningful context**.",
      "Maintain consistency across a **family of applications**.",
      "If past interactive models have created user expectations, do not make changes unless there is a compelling reason to do so.",
    ]),

    SH("User interface analysis and design models"),
    P("The overall process begins with the creation of different models of system function. Four models are considered:"),
    T(
      ["Model", "Description"],
      [
        ["User model", "Establishes a profile of all end users of the system."],
        ["Design model", "A design model of the entire system that incorporates data, architectural, interface and procedural representations of the software. It is a design realisation of the user model."],
        ["User's mental model (system perception)", "The user's mental image of what the interface is."],
        ["Implementation model", "The interface 'look and feel' together with supporting information that describes interface syntax and semantics."],
      ]
    ),
    SH("Categories of user"),
    T(
      ["User", "Knowledge"],
      [
        ["Novice", "No syntactic knowledge of the system and little semantic knowledge of the application or of computer use in general."],
        ["Knowledgeable, intermittent user", "Reasonable semantic knowledge of the application but low recall of the syntactic information needed to use the system."],
        ["Knowledgeable, frequent user", "Good semantic and syntactic knowledge."],
      ]
    ),

    SH("User interface analysis and design process"),
    P("The process is **iterative** and can be represented as a **spiral model** with four framework activities: **user, task and environment analysis**, **interface design**, **interface construction (implementation)** and **interface validation**."),
    IMG("ui-design-process", "User interface design process as a spiral with interface validation, user, task and environment analysis, implementation and interface design", "User interface design process"),
    T(
      ["Activity", "What happens"],
      [
        ["Interface analysis", "Understand the users, based on their skill levels (requirements gathering). The tasks users perform to reach the goals of the system are identified, described and elaborated. The work environment is analysed."],
        ["Interface design", "All interface objects and actions that enable a user to perform all desired tasks are defined."],
        ["Implementation (construction)", "A prototype is built first; user interface development tools may then be used to complete the construction."],
        ["Validation", "The correctness of the system is checked against the user requirements."],
      ]
    ),

    SH("Interface analysis"),
    P("Interface analysis means understanding (1) the people (end users) who will interact with the system through the interface, (2) the tasks end users must perform to do their work, (3) the content presented as part of the interface and (4) the environment in which the tasks will be conducted."),
    SH("User analysis questions"),
    L([
      "Are users trained professionals, technicians, clerical or manufacturing workers?",
      "What level of formal education does the average user have?",
      "Can users learn from written material, or do they want classroom training?",
      "Are users expert typists or keyboard-shy?",
      "What is the age range of the user community?",
      "Will the users be mostly one gender?",
      "How are users paid for the work they do?",
      "Do users work normal office hours or until the job is done?",
    ]),
    SH("Task analysis and modelling"),
    L([
      "**Use cases** define the basic interaction.",
      "**Task elaboration** refines interactive tasks.",
      "**Object elaboration** identifies the interface objects (classes).",
      "**Workflow analysis** defines how a work process is completed when several people (and roles) are involved.",
    ]),
    SH("Interface design steps"),
    L([
      "Using the information from interface analysis, define the **interface objects and actions** (operations).",
      "Define the **events** (user actions) that will change the state of the user interface, and model this behaviour.",
      "Depict each **interface state** as it will actually look to the end user.",
      "Indicate how the user **interprets the state of the system** from the information the interface provides.",
    ]),
    SH("Interface design patterns"),
    P("Patterns are available for the complete UI, page layout, forms and input, tables, direct data manipulation, navigation, searching, page elements and e-commerce."),
    SH("Design issues"),
    L(["Response time", "Help facilities", "Error handling", "Menu and command labelling", "Application accessibility", "Internationalisation"]),
    SH("Design evaluation cycle"),
    L(
      [
        "Preliminary design.",
        "Build prototype 1.",
        "The user evaluates the interface.",
        "The designer studies the evaluation and makes design modifications.",
        "Build prototype n.",
        "Repeat until the interface design is complete.",
      ],
      true
    ),

    SCEN("Scenarios with answers: user interface design", [
      [
        "Scenario 1: A photo editor has no undo. If a user clicks 'Delete all' by mistake, everything is lost, and a confirmation message cannot be turned off. Which golden rule is broken and what should change?",
        "The rule **place the user in control**. Interaction should be **interruptible and undoable**. The editor should offer undo (and maybe a confirmation that can be turned off by experienced users), so users are not forced into unnecessary or undesired actions.",
      ],
      [
        "Scenario 2: A banking app forces the user to remember a 12-digit reference shown on the previous screen and type it on the next screen. Which rule is broken?",
        "**Reduce the user's memory load.** The app should carry the reference number to the next screen automatically (or let the user pick it from a list) instead of relying on the user's memory.",
      ],
      [
        "Scenario 3: In one company's apps the 'Save' button is on the top left in one app, bottom right in another and has a different icon in a third. Which rule is broken?",
        "**Make the interface consistent**, especially across a family of applications. The same action should look and be placed the same way, so users can apply what they know.",
      ],
      [
        "Scenario 4: Before designing a ticket machine for a railway station, the team asks 'What is the age range of the users? How well can they read? Do they hurry?' Which activity is this?",
        "**Interface analysis, specifically user analysis** (the first framework activity of the interface design process). The answers shape the design, for example large text and few steps for novice and hurried users.",
      ],
      [
        "Scenario 5: Classify these users of an airline booking system: (a) a first-time traveller, (b) a person who books once a year, (c) a travel agent who uses it all day.",
        "(a) **Novice**: no syntactic knowledge and little semantic knowledge. (b) **Knowledgeable, intermittent user**: knows what booking is, but forgets how to use the system. (c) **Knowledgeable, frequent user**: good semantic and syntactic knowledge, who needs shortcuts and a fast interface.",
      ],
      [
        "Scenario 6: A team builds a first version of an interface, lets five users try it, changes the layout and tests again. What is this process called and when does it stop?",
        "The **design evaluation cycle**: preliminary design, build prototype 1, user evaluation, design modification, build prototype n. It repeats until the **interface design is complete** and meets the user requirements (this is the validation activity).",
      ],
    ]),
  ],
};

// Chapters in textbook order.
export const softwareEngineeringChapters = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
];
