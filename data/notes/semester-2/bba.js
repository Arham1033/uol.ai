// ALL notes for BBA, semester 2, live in this ONE file.
// Chapters are in teaching order (the list is at the bottom): 1 Principles of management, 2 Functions of management,
// 3 SWOT analysis, 4 Management by Objectives, 5 Motivation, 6 Leadership styles, 7 Human resource management,
// 8 Market segmentation.
// Pictures are in public/notes/semester-2/bba/. A picture is added with IMG("file-name", "description", "caption").
// Examples and solved questions sit in scrolling boxes made with EX("title", [blocks]) and SCEN("title", [[question, answer], ...]).

const BASE = "/notes/semester-2/bba";
const SIZES = {
  "controlling-plan-vs-actual": [1800, 1000],
  "fayol-principles": [1920, 1520],
  "hrm-life-cycle": [2000, 880],
  "leadership-styles-map": [1800, 1120],
  "management-cycle": [1800, 1040],
  "maslow-pyramid": [1880, 1160],
  "mbo-steps": [1880, 840],
  "motivation-survey-example": [1800, 960],
  "recruitment-funnel": [1800, 960],
  "scalar-chain": [1680, 1160],
  "segmentation-bases": [1920, 1120],
  "segmentation-sales-example": [1880, 960],
  "swot-example": [1920, 1240],
};

const H = (text) => ({ type: "heading", text });
const SH = (text) => ({ type: "subheading", text });
const P = (text) => ({ type: "paragraph", text });
const L = (items, ordered = false) => ({ type: "list", ordered, items });
const T = (headers, rows, caption) => ({ type: "table", headers, rows, caption });
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
const EX = (title, blocks) => ({ type: "scrollbox", title, blocks });
const SCEN = (title, items) => ({
  type: "scrollbox",
  title,
  blocks: items.map(([question, answer]) => ({ type: "qa", question, answer })),
});

// ---------------------------------------------------------------------------
// Chapter 1. Principles of management
// ---------------------------------------------------------------------------
const chapter1 = {
  title: "Chapter 1: Principles of Management",
  summary:
    "What the principles of management are, how they are used, why they matter, and Henri Fayol's 14 principles with a memory aid, custom examples, diagrams and solved scenarios.",
  theory: [
    H("Define management principles"),
    P("**Principles of management** are **guidelines that help managers plan, organize and control** an organization. They help managers **make decisions, improve efficiency and achieve goals**."),
    SH("How are the principles used?"),
    T(
      ["Use", "What the principles do"],
      [
        ["**Decision-making**", "Help managers decide what to do to accomplish tasks and to handle situations."],
        ["**Training**", "Help identify the areas in which managers should be trained."],
        ["**Role definition**", "Define the role of managers and what is expected of them in specific situations."],
        ["**Efficiency**", "Help managers improve efficiency by distributing tasks among team members."],
      ]
    ),

    H("Nature of the principles"),
    L([
      "An organizational principle is the **great and overall direction for determining performance**. For instance, while deciding on the promotion of an employee, one manager may consider **seniority** while another follows the **principle of quality**.",
      "Management principles are **not as firm as the postulates of pure science**. They deal with **human traits**, so they must be applied **creatively**, according to the requirements of the position.",
      "**Human behaviour is never inactive** and neither is technology or business, so the principles have to keep step with these changes.",
      "**Example (ICT):** before information and communications technology, a manager could manage only a small workforce within a restricted geographical area. Today ICT lets managers control large business domains scattered across the globe.",
      "The principles are **selected from techniques of management**. **Techniques** are methods, a group of steps taken to achieve sought goals. **Principles** are guidelines for making judgements or actions while using techniques, and they are different from **values**.",
    ]),

    H("Importance of understanding the principles of management"),
    T(
      ["Benefit", "Explanation", "Example"],
      [
        ["1. Useful insight into reality", "Managers take the **right decisions at the right time** and tackle diverse problems in a dynamic business environment.", "A manager who knows the principles reacts to a sudden supplier delay with a plan, not panic."],
        ["2. Optimum use of resources and effective administration", "Resources are **scarce and limited**. Applying the principles gives productive results at **minimum cost and maximum profit** and channels human and material resources in the best way.", "Two workers share one machine on two shifts instead of buying a second machine."],
        ["3. Scientific decisions", "Decisions become **more realistic, thoughtful, justifiable and free from personal bias**, and can be evaluated objectively.", "A hiring decision based on a scoring sheet instead of friendship."],
        ["4. Meeting the changing business environment", "The principles are general guidelines, but they are **modified** so that managers can meet changing requirements.", "With the rise of online sellers, offline vendors also started selling their goods on online platforms."],
        ["5. Fulfilling social responsibility", "They help achieve goals effectively **and** guide managers to meet their commitment to employees and society.", "Fair remuneration and equity give social justice to employees and compliance with government norms, which improves the company's image."],
        ["6. Management training, education and research", "Management is taught on the basis of these principles. They are the base of **training, research and development** and bring innovation to the field.", "Training and research are the reason leaders such as Sunil Mittal could run Airtel successfully."],
      ]
    ),

    H("Henri Fayol's 14 principles of management"),
    P("Henri Fayol, a French engineer, set out 14 principles that remain the standard list of management guidelines."),
    IMG("fayol-principles", "Fayol's 14 principles arranged in three groups: structure, direction and people", "Fayol's 14 principles grouped by what they protect"),
    SH("The principles in detail"),
    T(
      ["No.", "Principle", "Meaning"],
      [
        ["1", "**Division of work**", "All work must be divided into small tasks so that the burden does not fall on any single person. The tasks are assigned to people who can perform them best. This ensures **efficient and effective output**."],
        ["2", "**Authority and responsibility**", "The balance between authority and responsibility must be maintained. Authority without responsibility leads to misuse of power; responsibility without authority means you struggle to meet your goals. Those given obligations must be given **adequate authority** to carry them out."],
        ["3", "**Discipline**", "**Obedience** to organizational rules and employment agreements is necessary for the smooth running of the organization. It needs good supervisors at all levels, fair agreements and **judicious application of penalties**."],
        ["4", "**Unity of command**", "There should be **only one boss** from whom an employee takes commands. Dual subordination leads to conflicts of ideas and commands and confusion."],
        ["5", "**Unity of direction**", "All units of an organization must be directed **towards the same objective**, which prevents overlapping of activities."],
        ["6", "**Subordination of individual interest to general interest**", "The interest of the organization must come first. The interest of an individual or a group should not override the interest of the organization, which ensures the same behaviour in the team."],
        ["7", "**Remuneration of employees**", "Employees must be given **fair remuneration** that provides a standard lifestyle. It also ensures good relations between the workers and the organization."],
        ["8", "**Centralisation and decentralisation**", "Major decision-making authority stays with the **top management**, while the regular day-to-day decisions are **delegated to lower tiers** through the formal chain of communication. Employee involvement (decentralisation) is balanced with the managers' retention of final authority (centralisation)."],
        ["9", "**Scalar chain**", "An organization consists of **superiors and subordinates**. The formal lines of authority and communication must be followed, but **in an emergency** a subordinate can approach the superior directly."],
        ["10", "**Order**", "There should be a **place for everything and everyone** in the organization. Resources and people must be in their appropriate place at a suitable time for maximum efficiency."],
        ["11", "**Equity**", "All employees and workers should be **treated equally and as fairly as possible**. There should be no discrimination, for example on gender, religion or language."],
        ["12", "**Stability of personnel**", "An employee should have **stability of tenure** and should not feel insecure about the job. Employees need a reasonable time to show results."],
        ["13", "**Initiative**", "Workers and employees should be given an **opportunity to express their ideas**, which enhances self-motivation. They must also be rewarded."],
        ["14", "**Esprit de corps**", "Means **team spirit**. Every superior or manager must maintain harmony and raise team spirit, mutual trust and belongingness among team members."],
      ]
    ),
    TIP("A memory aid for all 14 is **AIOCR (DUE)² S³**: **A**uthority and responsibility, **I**nitiative, **O**rder, **C**entralisation, **R**emuneration; then **D**ivision of work, **U**nity of command, **E**quity, **D**iscipline, **U**nity of direction, **E**sprit de corps; then **S**calar chain, **S**ubordination of individual interest and **S**tability of personnel. That is 5 + 6 + 3 = 14.", "Memory aid"),

    H("Examples"),
    EX("Scalar chain and gang plank (diagram)", [
      IMG("scalar-chain", "A management hierarchy with a manager, two supervisors and four staff members, with a dashed emergency link between staff of different branches", "Formal communication follows the solid lines. The dashed line is allowed only in an emergency."),
      P("**Scenario:** the machine in Section A breaks down and the Section B operator knows how to fix it. Waiting for the message to travel up to the manager and down again would stop production for hours. The Section B operator contacts Section A directly and informs both supervisors afterwards. This is the **gang plank**, an exception to the scalar chain made only for emergencies."),
    ]),
    EX("The 14 principles in a private school (table)", [
      T(
        ["Principle", "How the school applies it"],
        [
          ["Division of work", "Separate teams for teaching, admissions, accounts and transport."],
          ["Authority and responsibility", "The head of department can approve a timetable change and is answerable for the results."],
          ["Discipline", "Staff follow the attendance and code-of-conduct rules in the signed contract."],
          ["Unity of command", "A teacher reports only to the head of department, not also to the accountant."],
          ["Unity of direction", "All sections work on one plan: improve board-exam results this year."],
          ["Subordination of individual interest", "A teacher gives up a preferred period so that the exam schedule works for everyone."],
          ["Remuneration", "Salaries are fair and paid on time, with a bonus for good results."],
          ["Centralisation and decentralisation", "The principal decides on fees; teachers decide on classroom methods."],
          ["Scalar chain", "Teacher → head of department → vice principal → principal."],
          ["Order", "Each lab has a place for every instrument, and each teacher has an assigned room."],
          ["Equity", "Scholarships and leave rules are applied the same way to every employee."],
          ["Stability of personnel", "Teachers get annual contracts that are renewed on performance, not on mood."],
          ["Initiative", "A teacher proposes a science fair and is allowed to organise it."],
          ["Esprit de corps", "Monthly staff lunch and a shared celebration after results."],
        ]
      ),
    ]),
    SCEN("Scenarios with answers: principles of management", [
      [
        "Scenario 1: Ayesha receives work orders from both the production manager and the marketing manager. They often contradict each other. Which principle is broken and what is the effect?",
        "**Unity of command** is broken. An employee should take commands from **only one boss**. Dual subordination leads to conflicts of ideas and commands, confusion and loss of efficiency. The fix is to make one manager her single reporting line.",
      ],
      [
        "Scenario 2: A new supervisor is made responsible for meeting a weekly output target but is not allowed to approve overtime or move workers between lines. Which principle is violated?",
        "**Authority and responsibility.** Responsibility without authority means he will struggle to meet the goal. The organization must give him adequate authority to match the obligations.",
      ],
      [
        "Scenario 3: Two departments in a company are each running a separate advertising campaign for the same product, with different messages and budgets. Which principle helps?",
        "**Unity of direction.** All units working on the same objective should be directed by one plan and one head. This prevents overlapping activities and wasted money.",
      ],
      [
        "Scenario 4: A firm pays very low salaries and its best employees keep leaving. Which two principles would fix the problem?",
        "**Remuneration of employees** (fair pay to give a standard lifestyle and good relations) and **stability of personnel** (secure tenure so people do not feel insecure about their jobs). Together they reduce turnover.",
      ],
      [
        "Scenario 5: A junior employee suggests a cheaper packaging method. The manager ignores him because 'the boss decides everything'. Which principle is neglected and what should the manager do?",
        "**Initiative.** Workers should be given the opportunity to express their ideas. The manager should listen, test the idea and reward it if it works, which raises self-motivation.",
      ],
      [
        "Scenario 6: A manager promotes his cousin, who is less qualified, over a better candidate. Which principle is broken?",
        "**Equity**, and also the idea of scientific decisions. All employees should be treated as fairly as possible, with no favouritism. Decisions should be based on objective evaluation, not personal bias.",
      ],
      [
        "Scenario 7: Explain why management principles cannot be applied like the laws of physics.",
        "Principles of management deal with **human traits** and behaviour, which are never constant, and the business environment keeps changing. So principles are **not as firm as the postulates of pure science**. They are general guidelines that managers must apply creatively and adjust to the situation.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 2. Functions of management
// ---------------------------------------------------------------------------
const chapter2 = {
  title: "Chapter 2: Functions of Management",
  summary:
    "The four functions of management (planning, organizing, leading and controlling), what each involves and how to make it efficient, Fayol's five functions, and other functions, with a custom event example, a control graph and solved scenarios.",
  theory: [
    H("What are the functions of management?"),
    P("The main functions of management are **planning, organizing, leading and controlling**. These functions work together in a **feedback loop** to help an organization achieve its goals."),
    L([
      "The 4 functions of management have been around since the early 1900s and were first coined by **Henri Fayol**.",
      "They are considered **foundation theory**, meaning they are the basics of business.",
      "**Fayol's five functions** of management: **planning, organizing, commanding, coordinating and controlling**.",
    ]),
    IMG("management-cycle", "Planning, organizing, leading and controlling arranged in a loop with feedback from controlling back to planning", "The four functions as a loop"),
    T(
      ["Function", "In one line"],
      [
        ["**Planning**", "The process of setting organizational goals and determining what resources are needed to complete those goals."],
        ["**Organizing**", "The act of organizing people or things to achieve efficiency, simplicity and manageability."],
        ["**Leading**", "The process of guiding, motivating and directing the employees toward the goal. It shows leadership skills through tasks such as building morale among employees, delegating work responsibilities to team members and giving feedback on actual performance."],
        ["**Controlling**", "Monitoring how well the functions are working together within the organization."],
      ]
    ),

    H("1. Planning"),
    P("The purpose of planning is to come up with ways to make things happen. It is done by **creating strategies, making decisions and developing business plans**, which include budgets and forecasts. Planning is about looking at the direction you want to go and **breaking it down into small steps** you can handle more easily."),
    L([
      "Involves determining how to **use resources to achieve goals**.",
      "Helps **avoid confusion, risk and waste**.",
    ]),
    SH("What is involved in planning?"),
    T(
      ["Element", "Meaning"],
      [
        ["**Defining organizational objectives**", "Long-term or short-term, but they must be realistic and achievable."],
        ["**Strategizing**", "Coming up with a plan that makes sense and will actually work toward the company goals."],
        ["**Forecasting**", "Being aware of how much money will be coming into and leaving the business."],
        ["**Identifying risks**", "Businesses always deal with risks and challenges, so know what they are before diving in."],
        ["**Defining priorities**", "When there are several things to do, rank them so the team knows what is most important."],
      ]
    ),
    SH("How to make planning more efficient"),
    L([
      "**Centralise the workspace.** Planning is a team effort and communication is key. Keep communication and plan documents in a single place, so everyone can take part and there is one source of truth for all plan-related information.",
      "**Monitor the plan on a regular basis.** Use automated reports and dashboards to see how the team uses its time, for example hours spent on projects this week, last week or over the past 4 weeks, so the team stays on track to deliver by the end of the month.",
    ]),

    H("2. Organizing"),
    P("Organizing is about **setting up an appropriate organizational structure** to work with and making sure that everyone is rowing in the same direction. It considers four areas:"),
    L(["**Roles**", "**Responsibilities**", "**Accountabilities and authorities**", "**Task allocation**"], true),
    P("Getting these right makes sure that people know what they should be doing day to day, who is responsible for certain tasks and the extent of their authority."),
    SH("What is involved in organizing?"),
    T(
      ["Element", "Meaning"],
      [
        ["**Establishing procedures and sharing responsibilities**", "Dividing up tasks between employees or sharing out responsibility within a team."],
        ["**Developing rules and performance standards**", "Standard operating procedures within departments or an individual workflow."],
        ["**Getting everyone on the same page**", "Every member knows exactly what their role is within a team."],
        ["**Preventing chaos**", "Employees do not step on each other's toes or overlap responsibilities, which would cause inefficiency."],
      ]
    ),
    SH("How to make organizing more efficient"),
    L([
      "**Make workflows visible and accessible to everyone.** A solid structure that is visible to everyone lets employees see what needs to be done and step in if something changes. Progress can be shared in real time and rules can send automatic reminders when someone misses a deadline or falls behind.",
      "**Clearly define team member responsibilities on a macro and micro level.** For example, four interns working under one supervisor must each know exactly what they are responsible for, so that four people are not all trying to do the same job.",
    ]),

    H("3. Leading"),
    P("Leading is the management process of **directing a group of individuals toward a shared goal**. It requires inspiring those working for you to look **beyond short-term goals** and focus on the big picture. Effective leadership is about creating a vision, building commitment, communicating effectively and getting people to work cohesively together."),
    SH("What is involved in leading? Four critical things"),
    T(
      ["Element", "Meaning"],
      [
        ["**Vision**", "When everyone is clear on the shared goal and has a general idea of how to get there, they stay motivated and accomplish what needs to be done."],
        ["**Inspiration**", "People want to feel valued. Helping them develop in a meaningful way is appreciated immensely."],
        ["**Transparency**", "When people know what is going on, they find it easier to do what needs to be done without feeling they are being led around by the nose."],
        ["**Communication**", "Present things in an organised way so that everyone stays on the same page and knows what they need to be doing."],
      ]
    ),
    SH("How to make leading more efficient"),
    L([
      "**Share progress with the team.** Transparent, available results increase the feeling of being part of something bigger. Dashboards can even be shown on screens in the office, which raises ownership and responsibility.",
      "**Communicate in context.** Add context to every conversation, especially with remote and hybrid teams in different time zones. When people know the background they give better feedback and act quicker.",
    ]),

    H("4. Controlling"),
    P("In management, **controlling** refers to the processes you have in place to make sure things work properly on a continuous basis. These include **rules, regulations, procedures and norms**. It is the **preventative maintenance** portion of running a good business."),
    P("Controlling means **setting standards, measuring performance and taking corrective action**. It involves **comparing results to objectives**, and it keeps the organization on track."),
    SH("Five main parts of controlling"),
    T(
      ["Part", "Meaning"],
      [
        ["**Measurement**", "Measuring the quantitative and qualitative factors in the business to ensure you are on track."],
        ["**Monitoring**", "Watching processes and results of operations to address new problems before they become major issues."],
        ["**Analysis**", "Making sense of the data to uncover opportunities for improvement or risks that could interfere with company goals."],
        ["**Response**", "A proactive approach to handling issues, including setting goals and making changes."],
        ["**Prevention**", "Putting processes in place so that problems do not arise in the future."],
      ]
    ),

    H("Other management functions"),
    L([
      "**Staffing:** finding the right people for the job.",
      "**Directing:** taking the company in a particular direction.",
      "**Training**, **controlling systems** and **discipline**.",
    ]),

    H("Examples"),
    EX("Organising a university seminar: the four functions (table)", [
      T(
        ["Function", "What the organising committee does"],
        [
          ["Planning", "Set the goal (200 attendees, budget Rs. 150,000), choose the date, estimate costs, list risks (speaker cancels, hall unavailable) and rank priorities."],
          ["Organizing", "Create sub-teams: registration, hospitality, publicity and technical. Give each a head, a task list and a deadline."],
          ["Leading", "The president explains the vision, motivates volunteers, answers questions and gives regular feedback."],
          ["Controlling", "Count registrations each week against the target, compare spending to the budget and take action if either is off."],
        ]
      ),
      P("**Task allocation sheet** (who does what):"),
      T(
        ["Role", "Responsibility", "Authority", "Accountable to"],
        [
          ["Registration lead", "Open the form, confirm attendees, print badges", "Can close registration at 200", "President"],
          ["Hospitality lead", "Tea, lunch and seating", "Can spend up to Rs. 40,000", "President"],
          ["Publicity lead", "Posters, social media, press note", "Can approve the poster design", "President"],
          ["Technical lead", "Projector, sound, recording", "Can borrow equipment from the lab", "President"],
        ]
      ),
    ]),
    EX("Controlling in action: plan versus actual (graph)", [
      IMG("controlling-plan-vs-actual", "Line graph of monthly bakery sales against plan, showing a deviation in April and recovery after corrective action", "Controlling follows the steps: set the standard, measure, compare, correct"),
      P("**Reading the graph:** the plan is the standard. In April actual sales fall to 188 units against a plan of 230, outside the acceptable range. Because the manager measures every month, the deviation is found early. The corrective action (extra staff at peak hours and a promotion) brings the result back inside the range by June. Without controlling, the shortfall would have continued unnoticed."),
    ]),
    SCEN("Scenarios with answers: functions of management", [
      [
        "Scenario 1: A new coffee shop owner writes down the target of 150 cups a day, the monthly budget and the main risk (a rival opening nearby). Which function is this and which elements does it show?",
        "**Planning.** Setting the target is **defining objectives**, the budget uses **forecasting**, and naming the rival is **identifying risks**. Planning helps avoid confusion, risk and waste.",
      ],
      [
        "Scenario 2: Three team members all start preparing the same report while another important task is left undone. Which function was weak and which element?",
        "**Organizing**, specifically **preventing chaos** and **task allocation**. Responsibilities overlapped, so people stepped on each other's toes. Clear roles and a visible task list would fix it.",
      ],
      [
        "Scenario 3: A manager meets the team every Monday, explains where the company is heading, praises good work and keeps everyone informed of changes. Which function is this?",
        "**Leading.** It shows the four elements: **vision** (where the company is heading), **inspiration** (praise), **transparency** and **communication** (keeping everyone informed).",
      ],
      [
        "Scenario 4: A factory finds that 8% of its products fail inspection against a standard of 2%. It investigates, finds a worn machine part, replaces it and adds a weekly check. Map this to the five parts of controlling.",
        "**Measurement** (8% against 2%), **monitoring** (inspection results), **analysis** (finding the worn part), **response** (replacing the part) and **prevention** (the weekly check so it does not happen again).",
      ],
      [
        "Scenario 5: Differentiate between Fayol's five functions and the four functions.",
        "Fayol listed **planning, organizing, commanding, coordinating and controlling**. The four-function model keeps planning, organizing and controlling and combines commanding and coordinating into **leading** (guiding, motivating and directing employees toward the goal).",
      ],
      [
        "Scenario 6: Why are the four functions called a feedback loop?",
        "Because the result of **controlling** (what was achieved compared with the objectives) goes back into **planning** for the next period. The functions are not one-time steps; each cycle improves the next.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 3. SWOT analysis
// ---------------------------------------------------------------------------
const chapter3 = {
  title: "Chapter 3: SWOT Analysis",
  summary:
    "The SWOT framework: strengths, weaknesses, opportunities and threats, the SWOT matrix, why businesses use it, and a custom example with strategies drawn from the matrix and solved scenarios.",
  theory: [
    H("What is a SWOT analysis?"),
    P("A **SWOT analysis** is a **strategic planning framework** used to evaluate a business's **current position and future potential**. It helps organizations identify competitive advantages, discover blind spots and build actionable strategies by analysing four components: **Strengths, Weaknesses, Opportunities and Threats**."),
    H("The four pillars of SWOT"),
    T(
      ["Pillar", "Source", "Meaning", "Examples"],
      [
        ["**Strengths**", "Internal", "What the business does exceptionally well, and the unique resources it possesses.", "Strong brand, proprietary technology, talented team"],
        ["**Weaknesses**", "Internal", "Internal limitations or areas where the business falls short compared with competitors.", "Lack of funding, high employee turnover"],
        ["**Opportunities**", "External", "Favourable external market conditions or trends the business can capitalise on to grow.", "Emerging new markets, shifting customer habits"],
        ["**Threats**", "External", "External risks, obstacles or market factors that could endanger the business's success.", "New competitors, supply chain issues"],
      ]
    ),
    P("For a visual breakdown, these elements are organised into the **SWOT matrix**, which clearly contrasts **internal capabilities** (strengths and weaknesses) with **external environmental factors** (opportunities and threats)."),
    TIP("Internal means the business can control it (S and W). External means the business cannot control it, only respond to it (O and T). Helpful items are S and O; harmful items are W and T.", "Quick way to sort"),
    H("Why businesses use SWOT"),
    L([
      "To tackle **specific business challenges**.",
      "To **map out marketing campaigns**.",
      "To formulate **long-term corporate strategies**.",
      "It provides an **objective snapshot** of a situation so leadership can **maximise strengths, mitigate weaknesses, seize opportunities and defend against risks**.",
    ]),
    P("Before starting, define the **business, project or idea** being analysed and the **primary goal**, for example launching a product, fixing a struggling department or expanding to a new market."),

    H("Examples"),
    EX("SWOT matrix for a campus bake shop (diagram)", [
      IMG("swot-example", "SWOT matrix of a campus bake shop planning a second counter, with three points in each of the four boxes", "SWOT matrix: internal factors on the top row, external factors on the bottom row"),
      P("**Goal being analysed:** open a second sales counter near the new hostel. Strengths and weaknesses describe the shop itself, while opportunities and threats describe the market around it."),
    ]),
    EX("Turning the matrix into strategies (table)", [
      P("A SWOT is only useful when it leads to action. Pair the factors to get four kinds of strategy:"),
      T(
        ["Pair", "Strategy idea for the bake shop"],
        [
          ["Strengths + Opportunities (use strengths to gain)", "Use fresh on-site baking to win the new hostel's students; offer society and event packages."],
          ["Weaknesses + Opportunities (fix weaknesses to gain)", "Train a third baker and launch online ordering before the hostel opens."],
          ["Strengths + Threats (use strengths to defend)", "Promote 'baked this morning' freshness to hold customers against food trucks."],
          ["Weaknesses + Threats (reduce weaknesses and avoid threats)", "Buy flour in bulk to protect against price rises and keep a menu for slow holiday months."],
        ]
      ),
    ]),
    SCEN("Scenarios with answers: SWOT analysis", [
      [
        "Scenario 1: Classify each as S, W, O or T for a small online clothing brand: (a) a loyal customer base, (b) a new competitor with lower prices, (c) no warehouse of its own, (d) rising demand for modest fashion.",
        "(a) **Strength** (internal, helpful). (b) **Threat** (external, harmful). (c) **Weakness** (internal, harmful). (d) **Opportunity** (external, helpful).",
      ],
      [
        "Scenario 2: A manager lists 'high employee turnover' under Threats. Is this correct?",
        "No. High turnover is **internal**, so it is a **weakness**. Threats come from outside the business, such as new competitors or supply chain issues.",
      ],
      [
        "Scenario 3: Why is a SWOT analysis called an 'objective snapshot'?",
        "It records the current position of the business at one point in time by listing internal and external factors, so leadership can decide using the facts rather than opinions. It should be repeated as conditions change.",
      ],
      [
        "Scenario 4: A hospital wants to expand into a new town. Which part of SWOT would include 'a growing population in that town'?",
        "**Opportunities.** It is an external, favourable market condition the hospital can capitalise on.",
      ],
      [
        "Scenario 5: Explain two ways a business uses its SWOT result.",
        "(1) To plan a marketing campaign around its strengths and the opportunities in the market. (2) To formulate a long-term strategy, such as fixing weaknesses before a competitor exploits them and preparing a defence against identified threats.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 4. Management by Objectives
// ---------------------------------------------------------------------------
const chapter4 = {
  title: "Chapter 4: Management by Objectives (MBO)",
  summary:
    "Meaning of Management by Objectives (Peter Drucker), its six steps, benefits and limitations, with a custom goal-cascade example, a process diagram and solved scenarios.",
  theory: [
    H("What is Management by Objectives (MBO)?"),
    P("**Management by Objectives (MBO)** is a **strategic approach to enhance the performance of an organization**. It is a process in which the **goals of the organization are defined and conveyed by management to the members of the organization** with the intention to achieve each objective. The concept is associated with **Peter Drucker**."),
    P("An important step in the MBO approach is the **monitoring and evaluation of the performance and progress of each employee** against the established objectives. Ideally, if the employees themselves are **involved in setting goals and deciding their course of action**, they are more likely to fulfil their obligations."),
    IMG("mbo-steps", "The six steps of Management by Objectives from defining organisation goals to appraisal and reward", "The six steps of MBO"),

    H("Steps in the MBO process"),
    T(
      ["Step", "What happens"],
      [
        ["**1. Define organization goals**", "Setting objectives is critical to the success of any company and serves a variety of purposes. Several different types of managers take part in setting goals. The objectives set by supervisors are **provisional**, based on an interpretation and evaluation of what the company can and should achieve within a specified time."],
        ["**2. Define employee objectives**", "Once employees are briefed on the general objectives, plan and strategies, managers work with subordinates on their personal objectives in a **one-on-one discussion**. Subordinates tell managers their targets and which goals they can accomplish within a specific time and with what resources, and share tentative thoughts on which goals the organization or department can find feasible."],
        ["**3. Continuous monitoring of performance and progress**", "MBO is necessary for increasing the effectiveness of managers and equally essential for monitoring the performance and progress of each employee."],
        ["**4. Performance evaluation**", "Within the MBO framework the performance review is achieved through the **participation of the managers concerned**."],
        ["**5. Providing feedback**", "The **most essential step**: continuous feedback on results and objectives lets employees track and correct their actions. It is complemented by frequent formal evaluation meetings in which superiors and subordinates discuss progress toward objectives, leading to more feedback."],
        ["**6. Performance appraisal**", "A routine review of the success of employees within MBO organizations."],
      ]
    ),

    H("Benefits of MBO"),
    L([
      "Helps employees **appreciate their on-the-job roles and responsibilities**.",
      "The **Key Result Areas (KRAs)** planned are specific to each employee, depending on their interest, educational qualifications and specialisations.",
      "Usually results in **better teamwork and communication**.",
      "Gives employees a **clear understanding of what is expected** of them. Supervisors set goals for every team member and every employee gets a list of unique tasks.",
      "Every employee is assigned **unique goals**, so each feels indispensable to the organization and eventually develops a **sense of loyalty**.",
      "Managers help ensure that subordinates' goals are **related to the objectives of the organization**.",
    ]),
    H("Limitations of MBO"),
    L([
      "It often **ignores the organization's existing ethos and working conditions**.",
      "More emphasis is given to goals and targets. Managers put **constant pressure** on employees to accomplish goals and forget about involvement, willingness to contribute and the growth of management.",
      "Managers sometimes **over-emphasise target setting** compared with operational issues as a generator of success.",
      "It does not emphasise the **context** in which goals are set: resource availability, efficiency and buy-in from leadership and stakeholders.",
      "Many managers see MBO as a **total system** that can handle all management issues once installed. This **over-dependence** may impose problems on the MBO system that it is not prepared to tackle and frustrates its potential positive effects.",
    ]),

    H("Examples"),
    EX("Goal cascade in a mobile-phone retail company (table)", [
      P("MBO links company goals to department goals and to the individual goals of employees, each with a measurable Key Result Area (KRA):"),
      T(
        ["Level", "Objective for the year", "KRA / measure"],
        [
          ["Organization", "Raise sales by 20% and keep customer satisfaction above 90%", "Annual sales; satisfaction survey"],
          ["Sales department", "Sell 12,000 phones and 4,000 accessory bundles", "Units sold per month"],
          ["Sales executive Hina", "Sell 1,000 phones and 300 bundles", "Monthly target 84 phones, 25 bundles"],
          ["Support department", "Resolve 95% of complaints within 48 hours", "Average resolution time"],
          ["Support officer Imran", "Resolve 160 complaints a month within 48 hours", "Resolution rate and time"],
        ]
      ),
      P("**Follow-up:** each quarter the manager meets Hina one-on-one, compares sales with the target (monitoring), discusses reasons for any gap (evaluation and feedback) and agrees on the next quarter's goals. The yearly appraisal and reward are based on these results."),
    ]),
    SCEN("Scenarios with answers: MBO", [
      [
        "Scenario 1: A manager sets each employee's targets alone and hands them over in a memo. What is wrong from the MBO point of view?",
        "MBO works best when employees **take part in setting their goals** in a one-on-one discussion. Targets imposed by memo reduce commitment. The manager should hold a discussion where the employee states feasible targets, time and resources.",
      ],
      [
        "Scenario 2: Why is feedback called the most essential step?",
        "Because continuous feedback on results and objectives lets employees **track their progress and make corrections** during the period, not after it ends. Frequent evaluation meetings between superiors and subordinates produce more feedback.",
      ],
      [
        "Scenario 3: A company installs MBO and expects it to solve staff conflicts, low morale and poor technology as well. Which limitation is this?",
        "**Over-dependence**: seeing MBO as a total system that handles all management issues. MBO is a tool for goal setting and performance review; it is not prepared to tackle every problem.",
      ],
      [
        "Scenario 4: Give two benefits of giving each employee unique goals.",
        "(1) Each employee has a clear understanding of what is expected. (2) Each feels **indispensable** to the organization and develops a sense of **loyalty**. Also, KRAs can match the employee's interests, qualifications and specialisation.",
      ],
      [
        "Scenario 5: Salespeople chase their monthly target by pushing products that customers return later. Which limitation of MBO appears?",
        "**Over-emphasis on goals and targets**, with constant pressure on employees, and neglect of operational issues and the working context. Targets should include quality measures such as returns and satisfaction.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 5. Motivation in management
// ---------------------------------------------------------------------------
const chapter5 = {
  title: "Chapter 5: Motivation in Management",
  summary:
    "Motivation and how it works in management, its benefits, and Maslow's hierarchy of needs level by level, with workplace examples, a survey graph and solved scenarios.",
  theory: [
    H("What is motivation in management?"),
    P("**Motivation in management** is the **process of inspiring employees to achieve goals** and work to their full potential. It is a key part of management that can lead to **increased productivity and success**."),
    SH("How does motivation work in management?"),
    L([
      "**Learn about employees:** get to know team members and understand what motivates them.",
      "**Create a positive work environment:** encourage open communication, a good work-life balance and fair treatment.",
      "**Reward employees:** recognise their efforts and help them achieve their goals.",
      "**Provide opportunities:** offer development opportunities and encourage learning.",
    ]),
    SH("Benefits of motivated employees"),
    T(
      ["Benefit", "Meaning"],
      [
        ["**Improved performance**", "Motivated employees work harder and are more productive."],
        ["**Better relationships**", "Motivated employees have a better relationship with their manager."],
        ["**Increased creativity**", "They are more creative and work on more successful projects."],
        ["**Increased sales**", "Motivated employees can lead to increased sales."],
      ]
    ),

    H("Maslow's hierarchy of needs"),
    P("**Maslow's hierarchy of needs** is a psychological theory that outlines human needs in a **hierarchical order**: starting with the most basic **physiological needs** like food and water, then **safety needs**, then **social needs**, **esteem needs** and finally **self-actualisation**, where a person strives to fulfil their full potential. Essentially, **lower needs must be met before moving on to higher ones**."),
    IMG("maslow-pyramid", "Pyramid of five levels: physiological, safety, love and belonging, esteem and self-actualisation, each with a workplace example", "Maslow's five levels with a workplace example for each"),
    SH("1. Physiological needs"),
    L([
      "The **base of the hierarchy** and the biological component for human survival. They are factored into internal motivation: people must satisfy them first before pursuing higher levels of satisfaction.",
      "If a person is struggling to meet their physiological needs, they are unwilling to seek safety, belonging, esteem and self-actualisation on their own.",
      "They include **air, water, food, heat, clothes, reproduction, shelter and sleep**. Many must be met for the body to remain in **homeostasis**. Air, for example, is needed far more urgently than a sense of social belonging.",
    ]),
    SH("2. Safety needs"),
    L([
      "Once physiological needs are satisfied, safety needs take precedence and dominate behaviour.",
      "In the absence of physical safety (war, natural disaster, family violence) or economic safety (economic crisis, lack of work opportunities) they appear as a preference for **job security, grievance procedures, savings accounts, insurance policies and disability accommodations**.",
      "The level is especially strong in children, but adults are not immune: it includes **shelter, job security, health and safe environments**. The goal of meeting the need for safety is **stability in one's life**.",
    ]),
    P("Safety needs include: **health, personal security, emotional security and financial security**."),
    SH("3. Love and social needs (belonging)"),
    L([
      "The third level is interpersonal and involves feelings of **belongingness**: humans need a sense of belonging and acceptance among social groups, large or small, such as work, sports, friends or family.",
      "Examples of large groups are clubs, co-workers, religious groups, professional organizations, sports teams and online communities. Small groups include family members, intimate partners, mentors, colleagues and confidants.",
      "Without this need being met, people become susceptible to **loneliness, social anxiety and clinical depression**. Deficiencies caused by neglect, shunning and ostracism can adversely affect the ability to form and maintain significant relationships.",
      "In certain situations, the need for belonging may overcome the physiological and security needs, depending on the strength of peer pressure.",
    ]),
    P("Social belonging needs include: **family, friendship, intimacy, trust, acceptance, and receiving and giving love and affection**."),
    SH("4. Esteem needs"),
    L([
      "Esteem is the respect and admiration of a person, and also self-respect and respect from others. Most people need stable esteem based on real capacity or achievement.",
      "Maslow noted two versions: the **lower version** is the need for respect from others (**status, recognition, fame, prestige and attention**); the **higher version** is the need for self-respect (**strength, competence, mastery, self-confidence, independence and freedom**).",
      "The levels are **interrelated rather than sharply separated**. Esteem comes from day-to-day experiences that let us discover that we are competent and capable.",
    ]),
    SH("5. Self-actualisation needs"),
    L([
      "The highest level: the need to **realise one's full potential**, to become the most that one can be.",
      "In work, it means challenging tasks, creativity, personal growth and the chance to use one's abilities fully.",
    ]),
    T(
      ["Level", "Type of need", "What a manager can provide"],
      [
        ["Self-actualisation", "Growth", "Challenging projects, creative freedom, development opportunities"],
        ["Esteem", "Psychological", "Recognition, awards, titles, promotion, responsibility"],
        ["Love and belonging", "Psychological", "Team events, supportive colleagues, open communication"],
        ["Safety", "Basic", "Permanent contracts, safe workplace, insurance, fair procedures"],
        ["Physiological", "Basic", "Fair salary, rest breaks, food and water at work"],
      ]
    ),

    H("Examples"),
    EX("Motivation survey in a call centre (graph)", [
      IMG("motivation-survey-example", "Bar graph comparing the share of call-centre employees whose needs at each Maslow level are met, before and after a motivation programme", "Share of employees who say each need is met"),
      P("**Reading the graph:** before the programme only 20% of employees said their need for self-actualisation was met and 35% said the same for esteem. The company then introduced recognition awards (esteem), training and promotion paths (self-actualisation), permanent contracts (safety) and monthly team events (belonging). Every level improves: safety rises most (40% to 70%), then self-actualisation (20% to 48%) and esteem (35% to 62%). Self-actualisation is still the lowest after the programme, so that is where the next effort should go."),
    ]),
    EX("Matching needs to incentives (table)", [
      T(
        ["Situation", "Level of need", "Suitable action"],
        [
          ["Staff skip lunch because the shift has no break", "Physiological", "Fix the break schedule and provide drinking water."],
          ["Contract workers fear losing the job each month", "Safety", "Offer longer contracts or a permanent position."],
          ["A new employee eats alone and avoids the team", "Love and belonging", "Assign a buddy and include the person in team events."],
          ["A skilled analyst is never credited for her reports", "Esteem", "Present her work in the review meeting and give a title or award."],
          ["A senior developer is bored with routine work", "Self-actualisation", "Give a challenging new project and a lead role."],
        ]
      ),
    ]),
    SCEN("Scenarios with answers: motivation", [
      [
        "Scenario 1: A company offers free gym membership and an 'employee of the year' award, but employees are not motivated because their salaries are below the living cost. Which Maslow idea explains this?",
        "Lower needs must be met before higher ones. The salary problem is a **physiological** need, so esteem rewards cannot motivate until it is fixed. Raise pay to a fair level first.",
      ],
      [
        "Scenario 2: Name the Maslow level for each: (a) health insurance, (b) praise in a team meeting, (c) invitation to the team picnic, (d) a chance to lead an innovation project.",
        "(a) **Safety**. (b) **Esteem** (recognition). (c) **Love and belonging**. (d) **Self-actualisation**.",
      ],
      [
        "Scenario 3: List three actions a manager can take to motivate employees according to the notes.",
        "**Learn about employees** and what motivates each of them; **create a positive work environment** with open communication, fair treatment and work-life balance; **reward employees** for effort; **provide opportunities** for development and learning.",
      ],
      [
        "Scenario 4: Explain the two versions of esteem needs with a workplace example of each.",
        "The **lower version** is the need for respect from others: status, recognition and attention, for example being given the title of team lead. The **higher version** is self-respect: competence, mastery, self-confidence and independence, for example the satisfaction of mastering a difficult skill and working with freedom.",
      ],
      [
        "Scenario 5: What is a criticism you could make of applying the hierarchy strictly?",
        "The levels are **interrelated rather than sharply separated**, and in some situations the need for belonging, self-esteem or creative fulfilment may override even basic needs. So a manager should use the hierarchy as a guide to understand employees, not as a fixed order.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 6. Leadership styles
// ---------------------------------------------------------------------------
const chapter6 = {
  title: "Chapter 6: Leadership Styles",
  summary:
    "What a leadership style is and the seven common styles (democratic, autocratic, laissez-faire, transformational, transactional, bureaucratic and servant), their strengths and weaknesses, with a comparison table, a positioning graph and solved scenarios.",
  theory: [
    H("What are leadership styles?"),
    P("**Leadership styles** refer to the **behavioural approach employed by leaders to influence, motivate and direct their followers**. A leadership style determines how leaders implement plans and strategies to accomplish given objectives while accounting for stakeholder expectations and the wellbeing and soundness of their team."),
    P("Leadership styles have been studied to establish the most effective style, one that **motivates and influences others to accomplish set goals**. The major tenet of an effective leadership style is the **degree to which it builds follower trust**."),

    H("Common leadership styles"),
    SH("1. Democratic leadership"),
    L([
      "The leader **makes decisions based on the input received from team members**. It is a **collaborative and consultative** style in which each team member has an opportunity to contribute to the direction of ongoing projects. However, the **leader holds the final responsibility** to make the decision.",
      "One of the most popular and effective styles because it gives **lower-level employees a voice**. It resembles how decisions are made in company boardrooms and can culminate in a vote.",
      "It involves **delegation of authority** to people who determine work assignments, using the skills and experience of team members.",
      "**Strength:** encourages creativity and engagement, which often leads to high job satisfaction and productivity. **Weakness:** reaching consensus can be **time-consuming and costly**, especially when decisions need to be made swiftly.",
    ]),
    SH("2. Autocratic leadership"),
    L([
      "The **direct opposite of democratic** leadership. The leader **makes all decisions on behalf of the team without taking any input or suggestions**. The leader holds all authority and responsibility, dictates tasks and there is no consultation before a decision. Everyone is expected to support the decision, and there is often some fear of the leader.",
      "**Weakness:** can be very retrogressive as it fuels employee disgruntlement. A unilateral increase in working hours without consultation can lead to **persistent absenteeism and high employee turnover**.",
      "**When it works:** when the leader is **experienced and knowledgeable** about the circumstances and the decision must be made **swiftly**, or when the decision does not need team input or agreement.",
    ]),
    SH("3. Laissez-faire leadership"),
    L([
      "A **hands-off or passive approach**. Leaders provide team members with the necessary tools, information and resources to carry out their tasks. The **'let them be'** style: the leader steps back and lets team members work without supervision and free to plan, organise, make decisions, tackle problems and complete assigned projects.",
      "**Strength:** empowering for employees who are **creative, skilled and self-motivated**. The trust and independence can be uplifting and productive and can lead to job satisfaction.",
      "**Weakness:** it must be kept in check, as **chaos and confusion** can quickly ensue if the team is not organised. According to research, it is the **least satisfying and least effective** style.",
    ]),
    SH("4. Transformational leadership"),
    L([
      "About **transforming the business or groups by inspiring** team members to keep raising their bar and achieve what they never thought they were capable of. It focuses on **vision and ideas**, and encourages commitment.",
      "Leaders **expect the best** from their team and push them until their work, lives and businesses go through a **considerable improvement**. They cultivate change in organizations and people by motivating members to **go beyond their comfort zone**.",
      "To be effective such leaders need **integrity, emotional intelligence, a shared vision of the future, empathy and good communication skills**.",
      "Often associated with **high-growth-oriented organizations** that push boundaries in innovation and productivity. Tasks grow in difficulty and deadlines tighten as time progresses.",
      "**Risk:** the leader may lose track of **individual learning curves**, as some members may not receive proper coaching for challenging tasks. **Strength:** high productivity and engagement through **shared trust and vision**.",
    ]),
    SH("5. Transactional leadership"),
    L([
      "Based on **reward and punishment** to achieve the desired performance and goals. It is **short-term** and best described as a **'give and take'** kind of transaction: team members agree to follow the leader on job acceptance, so it is a transaction involving payment for services rendered.",
      "Employees are rewarded for exactly the work they would have performed. If you meet a target, you receive the bonus that was promised, which is common in **sales and marketing jobs**. Roles and responsibilities are established for each member. Besides incentives there are **penalties** to regulate how work should be done.",
      "**Strength:** a direct way of leading that **eliminates confusion** between leader and subordinate, because tasks are clearly spelled out. **Weakness:** the rigid environment and direct expectations may **curb creativity and innovation** and lead to lower job satisfaction and high turnover.",
    ]),
    SH("6. Bureaucratic leadership"),
    L([
      "A **'go by the book'** style. Processes and regulations are followed according to policy with **no room for flexibility**. Rules are set on how work should be done and leaders ensure that members follow the procedures meticulously.",
      "Employee input is considered, but **rejected if it does not conform to organizational policy**. New ideas trickle in and there is a lot of **red tape**. Power flows **from top to bottom** and is assigned to formal titles.",
      "Often found in **large, 'century-old' organizations** that succeeded through traditional practices, where a new strategy meets fierce resistance.",
      "There is less control and more freedom than in autocratic leadership, yet no motivation to innovate or go the extra mile, so it is **not suitable for young, ambitious organizations on a growth path**.",
      "**Suitable for** jobs involving **safety risks** or managing **valuable items** such as large amounts of money or gold, and for employees who perform **routine work**.",
    ]),
    SH("7. Servant leadership"),
    L([
      "The leader is a **servant to the team first, before being a leader**. A servant leader strives to **serve the needs of the team above their own**. It is also a form of **leading by example**: they find ways to develop, elevate and inspire people. The leader's primary goal is to **serve and support employees, helping them grow and succeed**.",
      "Requires leaders with **high integrity and munificence**. It creates a positive organizational culture, **high morale** and an **ethical environment** with strong values and ideals.",
      "**Criticism:** may not be suitable for **competitive situations**, where servant leaders can fall behind more ambitious leaders. It is also criticised for not being **agile enough** for tight deadlines and high-velocity organizations.",
    ]),

    H("Comparison of the seven styles"),
    T(
      ["Style", "Who decides?", "Best used when", "Main drawback"],
      [
        ["Democratic", "Leader after team input", "Quality and engagement matter and time is available", "Consensus is slow and costly"],
        ["Autocratic", "Leader alone", "Quick decisions with an experienced leader", "Fear, absenteeism, high turnover"],
        ["Laissez-faire", "The team itself", "Team is skilled, creative and self-motivated", "Chaos if the team is not organised; least effective"],
        ["Transformational", "Shared vision, leader inspires", "Growth, innovation and change", "Individual coaching may be neglected"],
        ["Transactional", "Leader sets terms; reward and penalty", "Clear short-term targets, such as sales", "Curbs creativity; turnover"],
        ["Bureaucratic", "The rule book", "Safety risks, money or routine work", "Resists new ideas; red tape"],
        ["Servant", "Leader serves, team grows", "Building culture, morale and ethics", "Falls behind in competitive, fast situations"],
      ]
    ),

    H("Examples"),
    EX("Where the styles sit (graph)", [
      IMG("leadership-styles-map", "Scatter diagram placing seven leadership styles by team's say in decisions and rules and control by the leader", "Autocratic, bureaucratic and transactional sit at high control and low team say; laissez-faire sits at low control and high team say"),
      P("**Reading the diagram:** moving right means the team has more say; moving up means the leader uses more rules and control. The positions are for comparison only, but they show why the autocratic and bureaucratic styles feel rigid and why laissez-faire needs a skilled team."),
    ]),
    EX("Choosing a style for a situation (table)", [
      T(
        ["Situation", "Best-fit style", "Reason"],
        [
          ["A fire breaks out in the factory and the supervisor must give orders immediately", "Autocratic", "The decision is urgent and does not need team input."],
          ["A software team of senior engineers must choose a new tool", "Democratic", "Input from skilled members improves the decision and engagement."],
          ["A research group of experienced scientists with their own projects", "Laissez-faire", "Skilled, self-motivated people work best with freedom."],
          ["A startup that wants to double its customers in a year", "Transformational", "Vision and stretch goals drive growth."],
          ["A call-centre team paid a bonus for every 50 resolved cases", "Transactional", "Clear reward for a clear target."],
          ["A bank vault and cash-handling department", "Bureaucratic", "Safety and money require strict procedures."],
          ["A hospital ward after a very stressful month", "Servant", "Supporting staff to grow and recover builds morale and ethics."],
        ]
      ),
    ]),
    SCEN("Scenarios with answers: leadership styles", [
      [
        "Scenario 1: A manager changes the working hours without asking the staff, hoping to increase production. Staff begin to take frequent leave and two good employees resign. Which style and effect?",
        "**Autocratic leadership.** A unilateral change without consultation fuels disgruntlement and leads to **persistent absenteeism and high turnover**. The manager may also not know the real reason production is not increasing.",
      ],
      [
        "Scenario 2: A manager gives a skilled designers' team the brief and tools and does not check on them until the deadline. The work is excellent. Another team of new interns gets the same treatment and misses the deadline. Explain.",
        "This is **laissez-faire**. It works for creative, skilled and self-motivated employees, but with an inexperienced team it leads to chaos and confusion and the team may do different things from what the leader expects.",
      ],
      [
        "Scenario 3: Differentiate between transformational and transactional leadership.",
        "**Transformational:** inspires through vision, pushes people beyond their comfort zone, long-term change, needs integrity, emotional intelligence and empathy. **Transactional:** short-term 'give and take', based on reward and punishment, roles and responsibilities are clearly set, may curb creativity.",
      ],
      [
        "Scenario 4: A 100-year-old company rejects an employee's new idea because it is not in the policy manual. Which style and what is the problem?",
        "**Bureaucratic leadership.** Employee input is rejected when it does not conform to policy, leading to red tape and resistance to new ideas. It suits routine work and safety-critical jobs but not a growth-minded organisation.",
      ],
      [
        "Scenario 5: When is democratic leadership a poor choice?",
        "When a decision must be made **swiftly**, because reaching consensus among team members can be time-consuming and costly.",
      ],
      [
        "Scenario 6: Which style has the leader's primary goal as 'to serve and support employees, helping them grow and succeed'? Give one advantage and one criticism.",
        "**Servant leadership.** Advantage: creates a positive culture, high morale and an ethical environment. Criticism: may fall behind more ambitious leaders in competitive situations and may not be agile enough for tight deadlines.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 7. Human resource management
// ---------------------------------------------------------------------------
const chapter7 = {
  title: "Chapter 7: Human Resource Management (HRM)",
  summary:
    "Meaning and importance of HRM, how the HR process works, the nine basic functions, HR software and AI, recruitment and training practices with company examples, and a custom funnel graph, life-cycle diagram, onboarding plan and solved scenarios.",
  theory: [
    H("Importance of HRM for organizational success"),
    P("**Human Resource Management (HRM)** is the **strategic and coherent approach to effectively managing an organization's employees**. It covers the entire employee life cycle, including **recruitment, onboarding, training, performance evaluation, compensation and workplace well-being**, to ensure workers are motivated and aligned with broader business goals."),
    L([
      "HR managers handle one of the most critical aspects of the organization: its employees, who are its **biggest asset**.",
      "From hiring the right people to training them and ensuring they are comfortable and satisfied in their roles, HR managers support employees. This results in **lower attrition rates and higher productivity**. They also resolve conflicts and prevent unethical behaviour in the organization.",
      "HRM helps companies **find the right talent** and ensures **legal compliance**. As the number of job roles in the HR domain increases, the need for HRM is rising across all industries.",
    ]),
    SH("How does human resource management work?"),
    L([
      "The HR process typically starts with **job policy formulation** and covers a variety of activities that deal with human resources in a company.",
      "Processes differ with the **size and type of organization**. Larger companies usually have a dedicated HR department, with activities such as recruitment and selection, leave policies, payroll and administration allotted to different people. Some functions such as training and development may operate independently.",
      "**Smaller firms and start-ups** mostly have only one HR manager or executive managing all people-centric activities.",
      "A **Human Resource Management System (HRMS)** or **Human Resources Information System (HRIS)** helps companies manage employee records, payslips and other important documents, saving time and effort for HR managers.",
      "Many companies also use **Artificial Intelligence (AI) and predictive analytics** to improve HR processes. Analytics gives insight from large volumes of data for data-driven decisions.",
    ]),
    IMG("hrm-life-cycle", "Eight stages of the employee life cycle from job analysis to retention or exit", "The employee life cycle that HRM manages"),

    H("Basic functions of HRM"),
    P("The basic function of HR management is to **bridge the gap between employees and employers**. The process ensures the smooth functioning of an organization. The key functions are:"),
    L([
      "**Job design and job analysis**",
      "**Recruitment and selection**",
      "**Employee training and development**",
      "**Employee compensation and benefits**",
      "**Employee performance management**",
      "**Managerial and labour laws**",
      "**Employee engagement and communication**",
      "**Health and safety regulations**",
      "**Future forecast and strategic planning**",
    ], true),

    H("Best practices in recruitment"),
    P("Recruitment is a critical component of HRM, as it directly impacts the **quality and quantity of the workforce**. Practices that have proved effective:"),
    T(
      ["Practice", "Example from the notes"],
      [
        ["**Targeted recruitment**", "PeopleLift, a fully remote recruiting team based in Atlanta, USA, trained and deployed a team of junior recruiters to make placements in less than 30 days using the Honeit interview platform, with structured technical phone screens and automated scheduling."],
        ["**Diversity and inclusion**", "Companies like IBM have set up affinity groups, which improve workplace culture and employee satisfaction by giving employees a platform to share experiences and feedback directly with HR and management."],
        ["**Structured onboarding**", "Companies like Microsoft use structured onboarding programs with 30-, 60- and 90-day objective checklists to ensure smooth assimilation of new hires, which reduces turnover and improves retention."],
        ["**AI-driven recruitment**", "AI tools use data analytics and machine learning to identify top talent, reduce bias and streamline the hiring process. They can find patterns in large amounts of data that human recruiters might miss."],
      ]
    ),
    SH("Employee training and development"),
    P("Training and development are crucial for **enhancing employee skills and retention**, and organizations can implement strategies such as induction training, on-the-job coaching, workshops, mentoring and e-learning."),

    H("Examples"),
    EX("Recruitment funnel for one vacancy (graph)", [
      IMG("recruitment-funnel", "Funnel chart showing 400 applications narrowing to 6 hires through screening, interview and offer stages", "Each stage narrows the pool"),
      P("**Reading the graph:** the company received 400 applications for a junior accountant post, shortlisted 80 (20%), interviewed 30, offered the job to 8 and finally 6 accepted. The 'offer to joined' rate is 75%, which tells HR that 2 of 8 candidates declined, perhaps because of salary or timing. Tracking each stage shows where the process can be improved."),
    ]),
    EX("A 30-60-90-day onboarding plan (table)", [
      T(
        ["Period", "Objectives for a new junior accountant", "Checked by"],
        [
          ["First 30 days", "Learn company policies, the accounting software and the team's workflow. Shadow a senior accountant.", "Line manager"],
          ["Days 31 to 60", "Handle accounts payable independently. Prepare the weekly reconciliation with review.", "Line manager and HR"],
          ["Days 61 to 90", "Own the monthly reconciliation. Suggest one process improvement.", "Line manager and HR"],
        ]
      ),
    ]),
    EX("Job description and job specification (table)", [
      P("Job analysis produces two documents that HR uses for recruitment and selection:"),
      T(
        ["", "Job description", "Job specification"],
        [
          ["Describes", "The job: title, duties, reporting line, working conditions", "The person: education, skills, experience, qualities"],
          ["Example (office assistant)", "Maintain records, answer calls, schedule meetings; reports to the office manager", "Bachelor's degree, good typing and communication, 1 year experience, MS Office"],
          ["Used for", "Advertising the job and defining roles", "Screening and shortlisting candidates"],
        ]
      ),
    ]),
    SCEN("Scenarios with answers: HRM", [
      [
        "Scenario 1: A start-up with 15 employees has one HR executive who handles hiring, payroll, leave records and training. Is this normal?",
        "Yes. HR processes differ with the size of the organization. **Smaller firms and start-ups** usually have only one HR manager or executive handling all people-centric activities, while larger companies have a dedicated HR department with different people for recruitment, payroll and administration. An HRMS can save the executive's time.",
      ],
      [
        "Scenario 2: Name the HRM function involved: (a) writing the list of duties for a new post, (b) conducting interviews, (c) a safety drill, (d) yearly salary review, (e) a workshop on communication skills.",
        "(a) **Job design and job analysis**. (b) **Recruitment and selection**. (c) **Health and safety regulations**. (d) **Employee compensation and benefits**. (e) **Employee training and development**.",
      ],
      [
        "Scenario 3: Why is HRM called a bridge between employees and employers?",
        "Because it connects what the organization needs (the right people, discipline, goals) with what employees need (fair pay, training, safety, communication), resolving conflicts and keeping the organization running smoothly.",
      ],
      [
        "Scenario 4: Explain two ways AI helps in recruitment.",
        "AI tools analyse large amounts of data to **identify top talent** and patterns that human recruiters might miss, and they help **reduce bias and streamline** the hiring process, for instance by screening applications and scheduling interviews automatically.",
      ],
      [
        "Scenario 5: A company's new hires often leave within three months. Suggest two HR measures.",
        "(1) A **structured onboarding program** with 30-, 60- and 90-day objective checklists, as used by companies like Microsoft, which reduces turnover. (2) Better **employee engagement and communication** and clear job analysis so the role matches the person hired.",
      ],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 8. Market segmentation
// ---------------------------------------------------------------------------
const chapter8 = {
  title: "Chapter 8: Basis for Market Segmentation",
  summary:
    "Meaning of market segmentation, the consumer market, and the four bases (geographic, demographic, psychographic and behavioural) with company examples, a bases diagram, a custom sales graph and solved scenarios.",
  theory: [
    H("What is market segmentation?"),
    P("**Market segmentation** is a crucial process in marketing that involves **dividing a broad target market into smaller, more manageable groups of consumers who have similar needs, characteristics or behaviours**. It is the process of dividing the whole market into small subgroups based on **shared characteristics** like age, gender, taste and preferences. Customers having similar needs and behaviours are put together."),
    L([
      "A **market segment** is a portion of the whole market that is expected to **respond similarly to a given situation**.",
      "Segmentation helps the business identify **what type of customers to target** to sell its product or service.",
      "Once segmentation is done correctly, the company can **focus entirely on one or more segments without wasting time and resources**.",
    ]),
    P("**Example:** Volkswagen Group is responsible for producing brands like Audi, Porsche, Lamborghini and Ducati. Even after being so expensive, these brands still generate a handsome revenue. Volkswagen shows the importance of perfect market segmentation."),
    P("Market segmentation can be done on the basis of: **psychographic attributes** (lifestyle preferences), **geographic attributes** (location), **behavioural attributes** (habits) and **demographics** (age, gender and so on)."),

    H("The consumer market"),
    P("The **consumer market** is the market for people who purchase goods and services for **end use and not for resale**. It is for the **consumers**, not customers: goods are sold to individuals and households for their consumption. It is driven by the choices and preferences of individual consumers, and factors such as preferences, income level, needs and cultural influences affect consumer behaviour. A company can form several segments of the whole consumer market on various bases."),
    IMG("segmentation-bases", "Tree diagram of the consumer market splitting into geographic, demographic, psychographic and behavioural segmentation with example variables under each", "The four bases for segmenting the consumer market"),

    H("Bases for segmenting the consumer market"),
    T(
      ["Basis", "Meaning", "Variables"],
      [
        ["**1. Geographic**", "Dividing the whole consumer market into geographical units such as nations, regions, states and cities. A company may target one or more units but should pay attention to the differences in needs and wants of different units.", "Geographical conditions, cultural influence"],
        ["**2. Demographic**", "Segmenting the market according to basic yet important factors.", "Age, gender, income"],
        ["**3. Psychographic**", "Dividing the market on the basis of **personality and lifestyle**. Personality is the combination of traits, habits and attitudes; lifestyle is how an individual lives and spends money and time.", "Traits, habits, attitudes, lifestyle"],
        ["**4. Behavioural**", "Segmenting based on how an individual **reacts in a certain situation or to a particular product or service**.", "Buying habits, response to products"],
      ]
    ),
    SH("Company examples"),
    T(
      ["Basis", "Example"],
      [
        ["Geographic", "McDonald's offers a range of vegetarian options in India, including the McAloo Tikki Burger."],
        ["Demographic", "Coca-Cola segments its market according to demographic factors and formed segments like the youth market and health-conscious adults."],
        ["Psychographic", "Apple's marketing and product design are known for appealing to customers who value innovation and creativity."],
        ["Behavioural", "Amazon uses behavioural data to personalise product recommendations for its customers."],
      ]
    ),

    H("Examples"),
    EX("Demographic segmentation of a sports-drink brand (graph)", [
      IMG("segmentation-sales-example", "Bar graph and doughnut chart of weekly sports-drink bottles sold by age segment, with 18 to 25 the largest at 43 percent", "Sales by age segment"),
      P("**Reading the graph:** of 1,200 bottles sold per week, the 18 to 25 segment buys 520 (about 43%), the 26 to 40 segment 340 (28%), the under-18 segment 180 (15%) and the 41-and-over segment 160 (13%). The company decides to put its main campaign, gym and campus sponsorships on the 18 to 25 segment and a lighter, health-based campaign for the 41-and-over segment."),
    ]),
    EX("Segmenting the market for a new gym (table)", [
      T(
        ["Basis", "Segment chosen", "How the gym responds"],
        [
          ["Geographic", "Residents within 3 km of the gym", "Open in a central area; advertise only in nearby neighbourhoods."],
          ["Demographic", "Age 18 to 35, students and young professionals", "Student discount; classes in the evening."],
          ["Psychographic", "Health-conscious, active lifestyle", "Posts on fitness, nutrition workshops and a community of members."],
          ["Behavioural", "People who exercise 3 or more times a week and are loyal to a brand", "Loyalty points, a monthly pass and referral bonuses."],
        ]
      ),
    ]),
    SCEN("Scenarios with answers: market segmentation", [
      [
        "Scenario 1: A shoe company makes warm boots for northern cities and light sandals for coastal cities. Which basis of segmentation is this?",
        "**Geographic segmentation**, dividing the market into geographical units such as regions and cities, because climate and conditions differ.",
      ],
      [
        "Scenario 2: A bank offers a student account for ages 18 to 24 and a pension plan for ages 55 and above. Which basis?",
        "**Demographic segmentation**, based on age (and in other cases gender or income).",
      ],
      [
        "Scenario 3: A watch brand targets people who value luxury and status, whatever their age or city. Which basis?",
        "**Psychographic segmentation**, based on personality and lifestyle (values, attitudes and habits).",
      ],
      [
        "Scenario 4: An online store shows each shopper 'recommended for you' items based on what they browsed and bought. Which basis and which company is an example?",
        "**Behavioural segmentation**, based on how individuals react to products. Amazon uses behavioural data to personalise product recommendations.",
      ],
      [
        "Scenario 5: Why is it useful for a company to segment before launching a product?",
        "Segmentation shows **which customers to target**, so the company can focus on one or more segments **without wasting time and resources**. Volkswagen's separate brands for different segments show how it supports a handsome revenue.",
      ],
      [
        "Scenario 6: Explain the difference between the consumer market and customers in the notes.",
        "The consumer market is made up of **consumers**, the people who buy goods for **end use and not for resale**, such as individuals and households. It is driven by their choices and preferences, which are affected by income, needs and cultural influences.",
      ],
    ]),
  ],
};

export const bbaChapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8];
