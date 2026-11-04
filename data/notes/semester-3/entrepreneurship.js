// ALL notes for BBA (Entrepreneurship), semester 3, live in this ONE file.
// Chapters are in teaching order (the list is at the bottom). To reorder, move a name in that list.
//
// Sources: Unit 1 slides (Hitesh Jhanji), the Entrepreneurial Process handout, Chapters 3, 4 and 5
// (Entrepreneurship_CH_345), the Intrapreneurship notes (3.2 and 3.3) and the Airbnb case study.
// The questions found in those files are solved inside the notes.
// Anything NOT in the source is marked "Added" in a callout.

const chapter1 = {
  title: "Chapter 1: Entrepreneurship, A World of Opportunity",
  summary:
    "Meaning of entrepreneurship, entrepreneur vs entrepreneurship, importance, Schumpeter, the 12 characteristics, the factors that influence entrepreneurship, and solved exam questions.",
  theory: [
    { type: "heading", text: "Learning objectives" },
    {
      type: "list",
      items: [
        "Explain the meaning of **entrepreneurship**.",
        "Discuss the **importance** of entrepreneurship.",
        "Explain the concepts of **entrepreneur** and **entrepreneurship**.",
        "Discuss the **characteristics** of an entrepreneur.",
        "Describe the **factors** that influence entrepreneurship.",
      ],
    },

    { type: "heading", text: "1. Introduction to entrepreneurship" },
    {
      type: "paragraph",
      text: "Entrepreneurship is a **process** through which individuals launch and manage business and industrial enterprises. Entrepreneurs **invest capital** and accept **responsibility** for the venture.",
    },
    {
      type: "paragraph",
      text: "Entrepreneurial traits are not limited to famous business tycoons. **Self-development**, **creativity**, **independent decision-making** and **risk-taking** can be shown in everyday life as well as in business.",
    },

    { type: "heading", text: "2. Meaning of entrepreneurship" },
    {
      type: "list",
      items: [
        "It is the **tendency of a person to organise a business and run it profitably**.",
        "It involves **leadership**, **decision-making** and **managerial ability**.",
        "The entrepreneur **identifies and exploits opportunities**.",
        "It means investing resources and taking **moderate, calculated risks**.",
        "**Far-sightedness** helps the entrepreneur recognise an opportunity at the right time.",
      ],
    },

    { type: "heading", text: "3. Entrepreneur vs entrepreneurship" },
    {
      type: "table",
      headers: ["Basis", "Entrepreneur", "Entrepreneurship"],
      rows: [
        ["Meaning", "The **person** who performs the entrepreneurial role.", "The **process, role or task** performed by the entrepreneur."],
        ["Nature", "An individual (a doer).", "An activity or process (the doing)."],
        ["Example", "Founder of a clothing brand.", "Spotting the need, arranging resources and launching the brand."],
      ],
    },
    {
      type: "paragraph",
      text: "Flow: Entrepreneur → **identifies opportunity** → **organises resources** → **takes calculated risk** → **seeks profit**. The two terms are often used interchangeably, but conceptually they are different.",
    },

    { type: "heading", text: "4. Entrepreneurial traits in everyday life" },
    {
      type: "table",
      headers: ["Trait", "Meaning"],
      rows: [
        ["Self-development", "Continuously improving skills and performance."],
        ["Self-decision making", "Making independent life choices."],
        ["Creativity", "Using imagination to create something useful or new."],
        ["Risk-taking", "Willingly facing uncertainty after considering the consequences."],
      ],
    },
    { type: "paragraph", text: "These traits become especially important when applied to running a business." },

    { type: "heading", text: "5. Why the dictionary definition is incomplete" },
    {
      type: "paragraph",
      text: "A dictionary describes an entrepreneur as someone who reorganises and manages an enterprise, especially one involving **high risk**. But entrepreneurs are **not necessarily high-risk takers**. A clever entrepreneur tries to **reduce risk** and raise the chance of success. Recognising the opportunity and the resources used to succeed also matter, so entrepreneurship is **broader than taking high risks**.",
    },

    { type: "heading", text: "6. Modern concept of entrepreneurship" },
    {
      type: "list",
      items: [
        "Behaviour focused on **pursuing opportunities irrespective of the resources currently controlled**.",
        "Associated with opportunity pursuit and **action**.",
        "Related ideas: risk-taking, decision-making, free thinking, **agent of change** and **innovation**.",
        "It can also occur **inside organisations** when individuals pursue opportunities (this is intrapreneurship, see Chapter 4).",
      ],
    },

    { type: "heading", text: "7. Importance of entrepreneurship" },
    {
      type: "list",
      items: [
        "Economic prosperity depends on **economic development**.",
        "It encourages people to start enterprises and engage in **productive activities**.",
        "More enterprises can improve **national productivity**.",
        "It supports **self-employment** and creates livelihoods.",
        "It contributes to **wealth creation** for individuals and the nation.",
        "Governments may support programmes that encourage self-employment and entrepreneurship.",
      ],
    },
    { type: "subheading", text: "Importance for economic development" },
    {
      type: "list",
      items: [
        "Uses **physical and natural resources** through human resources.",
        "Supports increases in **production and consumption**.",
        "New ventures **create economic activity**.",
        "People who search for opportunities **create wealth**.",
        "Raises living standards and reduces backwardness.",
      ],
    },

    { type: "heading", text: "8. Schumpeter and innovation" },
    {
      type: "list",
      items: [
        "**Joseph Schumpeter** was an Austrian economist who made a major contribution to the study of entrepreneurship and innovation.",
        "He viewed the entrepreneur primarily as an **innovator**.",
        "Innovation can **disturb existing ways** of doing business.",
        "**Creative destruction**: new innovations replace older products, methods or arrangements.",
        "So entrepreneurial activity is a **force for economic and business change**.",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Example of creative destruction",
      text: "Mobile banking apps replacing many visits to a bank branch.",
    },

    { type: "heading", text: "9. Characteristics of an entrepreneur" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Initiative** and opportunity orientation",
        "**Innovation** and creativity",
        "**Goal** orientation",
        "**Decision-making** ability",
        "**Self-confidence** and independence",
        "**Persistence** and hard work",
        "**Problem-solving** ability",
        "**Future orientation** / far-sightedness",
        "**Adaptability**",
        "**Risk-bearing** ability",
        "**Adventurous** spirit",
        "Willingness to **face challenges**",
      ],
    },
    {
      type: "table",
      headers: ["Characteristic", "Meaning"],
      rows: [
        ["Initiative", "Acts rather than waiting for others."],
        ["Creativity", "Develops new ideas and approaches."],
        ["Goal orientation", "Works towards clear objectives."],
        ["Decision-making", "Chooses among alternatives in uncertain situations."],
        ["Persistence", "Continues despite difficulties."],
        ["Adaptability", "Responds to changing market and business conditions."],
      ],
    },

    { type: "heading", text: "10. Factors influencing entrepreneurship" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Educational** factors",
        "**Legal** factors",
        "**Infrastructure**",
        "**Institutional** factors",
        "**Financial** factors",
        "**Procedural** factors",
        "**Communication** factors",
        "**IT and communication**",
        "**Rapid changes**",
        "**Large size / economies of scale**",
        "**R&D and technology**",
        "**Stakeholders**",
        "**Globalisation**",
      ],
    },
    {
      type: "table",
      headers: ["Factor", "How it influences entrepreneurship"],
      rows: [
        ["Legal", "Laws and regulations can facilitate or constrain business activity."],
        ["Infrastructure", "Physical facilities and systems affect how easily enterprises start and operate."],
        ["Institutional", "Organisations and support systems influence entrepreneurship."],
        ["Financial", "Availability of funds is vital for starting and running a venture."],
        ["Procedural", "Business procedures and administrative requirements affect ease of doing business."],
        ["Communication", "Access to communication helps exchange information and coordinate activities."],
        ["IT and communication", "Technology supports operations and opportunity exploitation."],
        ["Rapid changes", "Changing markets, technology and consumer needs demand adaptability."],
        ["Large size / economies of scale", "Influences the competitive environment."],
        ["R&D and technology", "Drive innovation and new opportunities."],
        ["Stakeholders", "Influence entrepreneurial decisions and business outcomes."],
        ["Globalisation", "Expands the business environment and increases competition and opportunity."],
      ],
    },
    {
      type: "paragraph",
      text: "A supportive environment makes exploiting opportunities easier. Entrepreneurs must work within the institutional and financial environment available to them.",
    },

    { type: "heading", text: "Key takeaways" },
    {
      type: "list",
      items: [
        "Entrepreneurship = **opportunity + organisation + action + calculated risk**.",
        "An entrepreneur is the **person**; entrepreneurship is the **process/role**.",
        "It contributes to **wealth creation** and **economic development**.",
        "Innovation, decision-making, creativity, persistence and adaptability are central traits.",
        "It is influenced by educational, legal, financial, technological, institutional and global factors.",
        "**Ethics** and responsible decision-making are critical to sustainable business.",
      ],
    },

    { type: "heading", text: "Exam-oriented questions (solved)" },
    {
      type: "scrollbox",
      title: "Questions with answers",
      blocks: [
        {
          type: "qa",
          question: "1. Define entrepreneurship and explain its meaning.",
          answer:
            "Entrepreneurship is the tendency of a person to organise a business and run it profitably. It is a process in which individuals launch and manage enterprises, invest capital and accept responsibility for the venture. It involves leadership, decision-making and managerial ability; the entrepreneur spots and exploits opportunities, invests resources and takes moderate, calculated risks. In the modern view, it is behaviour focused on pursuing opportunities irrespective of the resources currently controlled.",
        },
        {
          type: "qa",
          question: "2. Differentiate between entrepreneur and entrepreneurship.",
          answer:
            "An entrepreneur is the person who performs the entrepreneurial role (for example, the founder of a clothing brand). Entrepreneurship is the process, role or task that person performs: identifying the opportunity, organising resources, taking calculated risk and seeking profit. The first is the doer, the second is the doing. The terms are used interchangeably but are conceptually different.",
        },
        {
          type: "qa",
          question: "3. Discuss the importance of entrepreneurship in economic development.",
          answer:
            "It uses physical and natural resources through human resources; raises production and consumption; creates new ventures and economic activity; creates self-employment and livelihoods; improves national productivity; and creates wealth for individuals and the nation. In this way it raises living standards and reduces backwardness. Governments therefore support self-employment and entrepreneurship programmes.",
        },
        {
          type: "qa",
          question: "4. Explain the evolution of the concept of entrepreneur.",
          answer:
            "The word comes from the French entreprendre, \"to undertake\". Early on, the entrepreneur was seen as a risk-bearer who buys at a certain price and sells at an uncertain price (Richard Cantillon, 18th century). Later he was seen as an organiser who combines land, labour and capital (J. B. Say). Joseph Schumpeter then described the entrepreneur as an innovator whose \"creative destruction\" drives economic change. The modern view treats entrepreneurship as pursuing opportunities irrespective of the resources currently controlled, and it can occur inside organisations too. A dictionary's \"high-risk manager\" view is incomplete because clever entrepreneurs try to reduce risk.",
        },
        {
          type: "qa",
          question: "5. Describe the characteristics of an entrepreneur.",
          answer:
            "Initiative and opportunity orientation, innovation and creativity, goal orientation, decision-making ability, self-confidence and independence, persistence and hard work, problem-solving ability, future orientation, adaptability, risk-bearing ability, adventurous spirit, and willingness to face challenges. Give one line of meaning for each (see the table above), for example: initiative = acts instead of waiting; persistence = continues despite difficulties.",
        },
        {
          type: "qa",
          question: "6. Explain the factors influencing entrepreneurship.",
          answer:
            "Thirteen factors: educational, legal, infrastructure, institutional, financial, procedural, communication, IT and communication, rapid changes, large size/economies of scale, R&D and technology, stakeholders, and globalisation. Laws can help or restrict; infrastructure and funds make it possible to start; procedures decide ease of doing business; technology and R&D create opportunities; stakeholders influence decisions; globalisation adds both competition and markets. Describe each in one line from the table above.",
        },
        {
          type: "qa",
          question: "7. Discuss the Ramalinga Raju / Satyam case and its lessons.",
          answer:
            "Ramalinga Raju founded Satyam Computer Services, a major Indian IT company. In January 2009 he admitted that the company's accounts had been inflated for years with fictitious cash and profits. Lessons: ethics and honest reporting are essential to sustainable business; entrepreneurial success without integrity collapses; good corporate governance, independent audits and transparency protect stakeholders; and trust, once lost, destroys even a large venture.",
        },
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Quick revision",
      text: "MEANING: organising and running a venture profitably. IMPORTANCE: wealth creation, productive activity, self-employment, economic development. CHARACTERISTICS: 12 traits above. FACTORS: education, law, infrastructure, institutions, finance, procedures, communication/IT, change, scale, R&D, stakeholders, globalisation.",
    },
  ],
};

const chapter2 = {
  title: "Chapter 2: The Entrepreneurial Process",
  summary:
    "The seven stages that turn an idea into a successful venture: opportunity identification, feasibility, business plan, resources, launch, growth and exit.",
  theory: [
    { type: "heading", text: "What is the entrepreneurial process?" },
    {
      type: "paragraph",
      text: "The entrepreneurial process is the **systematic series of steps** through which an entrepreneur transforms an **idea** into a successful **business venture**. It involves recognising opportunities, planning the business, organising resources, launching operations and managing growth. It is **dynamic** and may need continuous adjustment as market conditions and customer needs change.",
    },
    {
      type: "table",
      headers: ["Stage", "Name", "Main question"],
      rows: [
        ["1", "Opportunity identification", "Is there a real need or problem?"],
        ["2", "Opportunity evaluation / feasibility analysis", "Is the idea realistic and profitable?"],
        ["3", "Business planning", "How will the business work?"],
        ["4", "Resource mobilisation", "What do we need and where do we get it?"],
        ["5", "Business implementation / launch", "How do we start?"],
        ["6", "Growth and expansion", "How do we grow and last?"],
        ["7", "Harvesting / exit strategy", "How do we get returns?"],
      ],
    },

    { type: "heading", text: "Stage 1: Opportunity identification" },
    {
      type: "paragraph",
      text: "The starting point. The entrepreneur spots a **problem** in the market or an **unmet customer need**. Entrepreneurs keep observing changes in society, technology, consumer behaviour and the economy, because these changes create opportunities for new products or services.",
    },
    { type: "subheading", text: "Key activities" },
    {
      type: "list",
      items: [
        "Identifying problems that need solutions.",
        "Studying **market trends** and **consumer behaviour**.",
        "**Brainstorming** innovative ideas.",
        "Evaluating whether the idea can satisfy customer needs.",
      ],
    },
    { type: "subheading", text: "Sources of opportunities" },
    {
      type: "list",
      items: [
        "**Technological** developments.",
        "Changes in **customer lifestyle**.",
        "**Government** regulations or policies.",
        "**Market inefficiencies**.",
        "**Personal skills or experiences**.",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Remember",
      text: "A successful opportunity must have **demand**, **feasibility** and **profit potential**.",
    },

    { type: "heading", text: "Stage 2: Opportunity evaluation and feasibility analysis" },
    {
      type: "paragraph",
      text: "After identifying an idea, the entrepreneur checks whether it is **realistic and profitable**. There are four types of feasibility:",
    },
    {
      type: "table",
      headers: ["Feasibility", "What it checks"],
      rows: [
        ["Market", "Are there **enough customers**? Studies the target market, competitors and demand."],
        ["Technical", "Does the entrepreneur have the **technology, skills and equipment** to produce it?"],
        ["Financial", "**Cost** of starting and expected **profit**: capital needs, operating costs, projected revenue."],
        ["Legal", "Does the idea **comply with laws**, regulations and licensing rules?"],
      ],
    },
    {
      type: "paragraph",
      text: "If the idea is **not feasible**, the entrepreneur may **modify** it or **search for a new opportunity**.",
    },

    { type: "heading", text: "Stage 3: Business planning" },
    {
      type: "paragraph",
      text: "Once the idea is shown to be feasible, the entrepreneur writes a **business plan**: a **written document** explaining how the business will operate and achieve its goals.",
    },
    { type: "subheading", text: "Components of a business plan" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Executive summary**",
        "Description of the **product or service**",
        "**Market analysis** and target customers",
        "**Marketing and sales** strategies",
        "**Organisational structure**",
        "**Operational plan**",
        "**Financial projections**",
      ],
    },
    { type: "subheading", text: "Importance of a business plan" },
    {
      type: "list",
      items: [
        "Gives a clear **roadmap**.",
        "Helps **attract investors and lenders**.",
        "Identifies **risks** and solutions.",
        "Guides **decision-making** and resource allocation.",
      ],
    },

    { type: "heading", text: "Stage 4: Resource mobilisation" },
    {
      type: "paragraph",
      text: "After planning, the entrepreneur gathers the resources needed to start. Because resources are limited, they must be **used efficiently**.",
    },
    {
      type: "table",
      headers: ["Resource type", "Examples"],
      rows: [
        ["Financial", "Personal savings, bank loans, angel investors, venture capital, government grants."],
        ["Human", "Skilled employees, managers, advisors or mentors."],
        ["Physical", "Machinery, equipment, buildings or offices, raw materials."],
        ["Technological", "Software systems, production technology, information systems."],
      ],
    },

    { type: "heading", text: "Stage 5: Business implementation or launch" },
    { type: "paragraph", text: "The plan becomes reality: the business is established and begins operations." },
    {
      type: "list",
      items: [
        "**Registering** the business legally.",
        "Setting up the workplace or production facility.",
        "**Hiring** employees.",
        "Purchasing equipment and materials.",
        "Developing products or services.",
        "Launching **marketing campaigns**.",
        "Starting **sales** operations.",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "High risk stage",
      text: "This stage often carries **high risk**, because the new business must compete with existing firms and attract customers.",
    },

    { type: "heading", text: "Stage 6: Growth and expansion" },
    {
      type: "paragraph",
      text: "Once established, the focus shifts to **growth, sustainability and long-term success**. Entrepreneurs analyse performance and look for ways to expand, while managing competition, changing market conditions and financial challenges.",
    },
    {
      type: "list",
      items: [
        "Introducing **new products or services**.",
        "Entering **new markets or locations**.",
        "Increasing **production capacity**.",
        "Improving **marketing strategies**.",
        "Using **new technology** and innovation.",
      ],
    },

    { type: "heading", text: "Stage 7: Harvesting or exit strategy" },
    {
      type: "paragraph",
      text: "In the final stage the entrepreneur decides how to **gain returns** from the investment. The goal is to **maximise the value** created by the business.",
    },
    {
      type: "list",
      items: [
        "**Selling** the business.",
        "**Merging** with another company.",
        "**Transferring ownership to family** members.",
        "**Public offering of shares (IPO)**.",
      ],
    },

    { type: "heading", text: "Key characteristics of the process" },
    {
      type: "list",
      items: [
        "It involves **innovation and creativity**.",
        "It requires **risk-taking and decision-making**.",
        "It is **dynamic** and adaptable to change.",
        "It focuses on creating **value and profit**.",
      ],
    },

    { type: "heading", text: "Exam questions (solved)" },
    {
      type: "scrollbox",
      title: "Questions with answers",
      blocks: [
        {
          type: "qa",
          question: "Q. Explain the entrepreneurial process with its stages.",
          answer:
            "The entrepreneurial process turns an idea into a successful venture in seven stages: (1) opportunity identification, spotting a problem or unmet need; (2) feasibility analysis, checking market, technical, financial and legal feasibility; (3) business planning, writing a plan with executive summary, product, market analysis, marketing, structure, operations and financial projections; (4) resource mobilisation, arranging financial, human, physical and technological resources; (5) launch, registering, hiring, buying equipment and starting sales; (6) growth and expansion through new products, new markets, more capacity, better marketing and technology; (7) harvesting or exit by sale, merger, family transfer or IPO. The process is dynamic and needs constant adjustment.",
        },
        {
          type: "qa",
          question: "Q. What are the four types of feasibility analysis?",
          answer:
            "Market feasibility (enough customers and demand), technical feasibility (technology, skills and equipment), financial feasibility (start-up cost, operating cost and expected profit) and legal feasibility (compliance with laws and licences).",
        },
        {
          type: "qa",
          question: "Q. Why is a business plan important?",
          answer:
            "It gives a clear roadmap, helps attract investors and lenders, identifies risks and solutions, and guides decisions and the allocation of resources. A well-prepared plan increases the chance of success.",
        },
      ],
    },
  ],
};

const chapter3 = {
  title: "Chapter 3: Classifications and Models of Entrepreneurship",
  summary:
    "Nine classifications (innovative, imitative, small-business, scalable, social, corporate, rural, women, green) and seven models (innovation, opportunity, resource, economic, psychological, sociological, process), each with an example.",
  theory: [
    { type: "heading", text: "Classifications of entrepreneurship" },
    {
      type: "paragraph",
      text: "Entrepreneurship can be classified by **functional characteristics**, **type of business**, **motivation**, **growth stage** and **timing of venture creation**. This shows the diversity of entrepreneurial roles.",
    },
    {
      type: "table",
      headers: ["Type", "Meaning", "Example"],
      rows: [
        ["Innovative", "Introduces **new** products, services, technologies, production methods or business models.", "A startup builds an app connecting farmers directly with buyers."],
        ["Imitative / adoptive", "Adopts an **existing** idea, product or method and applies it in a new market or setting.", "Opening a cafe using an established model in a town where demand is growing."],
        ["Small-business", "Runs a relatively **small** business, often to earn income and support the owner's livelihood.", "Grocery stores, tailoring shops, bakeries, salons, small restaurants."],
        ["Scalable startup", "Builds a model that can **grow rapidly** and serve a large market.", "An online learning platform serving thousands of students."],
        ["Social", "Uses entrepreneurial methods to solve **social or environmental** problems while staying financially sustainable.", "Affordable education, low-cost water filtration, jobs for disadvantaged communities."],
        ["Corporate", "Entrepreneurial activity **within an established organisation**: new products, markets or units.", "A mobile phone company launches a digital payment service."],
        ["Rural", "Starts businesses in **rural areas** using local resources and skills.", "Dairy, food processing, poultry, honey, agricultural machinery rental."],
        ["Women", "Businesses **established, owned or managed by women**.", "Online clothing stores, home-based bakeries, salons, agricultural products."],
        ["Green", "Creates opportunities that **reduce environmental harm** and promote sustainability.", "Solar energy, recycling, reusable packaging, organic fertiliser."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Classifications may be grouped or named differently across textbooks.",
    },

    { type: "heading", text: "Models of entrepreneurship" },
    {
      type: "paragraph",
      text: "Models explain **motivations, behaviours and strategies**, from psychological traits to practical business types.",
    },
    {
      type: "table",
      headers: ["Model", "Emphasis", "Example"],
      rows: [
        ["Innovation model", "**Innovation** drives entrepreneurship: new products, production methods, markets, sources of supply or ways to organise. **Joseph Schumpeter** stressed innovation in economic development.", "Mobile banking that lets people transfer money without visiting a bank."],
        ["Opportunity-based model", "Finding and exploiting **opportunities**: market gaps, changing preferences, unmet needs.", "A student ride-sharing service."],
        ["Resource-based model", "Ability to **acquire and use** financial, human, physical, technological and social resources.", "A bakery started with savings, family help, skills and rented equipment."],
        ["Economic model", "**Economic incentives**, market conditions, profit opportunities and capital availability.", "A solar panel business responding to high electricity costs."],
        ["Psychological model", "**Personal characteristics** and motivations: achievement, confidence, calculated risk, independence, creativity, persistence.", "A person starts a consulting business to gain independence."],
        ["Sociological model", "**Social influences**: family background, education, networks, culture, community support, role models.", "A farmer's family member sets up a modern agricultural supply business."],
        ["Process model", "A **sequence**: identify opportunity, develop and evaluate, business plan, arrange resources and finance, launch, manage and grow.", "A homemade-food service studies demand, budgets, arranges resources, launches and expands after positive feedback."],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Link to Chapter 2",
      text: "The **process model** is exactly the seven-stage entrepreneurial process of Chapter 2.",
    },

    { type: "heading", text: "Exam questions (solved)" },
    {
      type: "scrollbox",
      title: "Questions with answers",
      blocks: [
        {
          type: "qa",
          question: "Q. Differentiate between innovative and imitative entrepreneurship.",
          answer:
            "Innovative entrepreneurs introduce something new, such as a new product, technology or business model (an app linking farmers directly with buyers). Imitative or adoptive entrepreneurs copy a proven idea and apply it in a new market or setting (opening an established cafe model in a growing town). Innovative carries more risk and more potential novelty; imitative carries less risk and relies on an already tested model.",
        },
        {
          type: "qa",
          question: "Q. Differentiate between a small-business and a scalable startup.",
          answer:
            "A small business is run mainly to earn a livelihood for the owner and stays small (a grocery store or tailoring shop). A scalable startup is designed to grow rapidly and serve a large market (an online learning platform with thousands of students).",
        },
        {
          type: "qa",
          question: "Q. Which model emphasises personal traits, and which emphasises social background?",
          answer:
            "The psychological model emphasises personal traits and motivation (achievement, confidence, calculated risk, independence). The sociological model emphasises family, education, networks, culture and role models.",
        },
      ],
    },
  ],
};

const chapter4 = {
  title: "Chapter 4: Entrepreneur vs Intrapreneur",
  summary:
    "Meaning of entrepreneur and intrapreneur, the 11-point difference table, similarities, characteristics, why organisations promote intrapreneurs, dreamers and change agents, corporate vs intrapreneurial culture, advantages, disadvantages and a Pakistani example.",
  theory: [
    { type: "heading", text: "1. Meaning of an entrepreneur" },
    {
      type: "paragraph",
      text: "An entrepreneur **establishes or operates a business venture**, **organises its resources**, makes important business decisions and generally **bears the financial risk** of ownership.",
    },
    { type: "paragraph", text: "Example: a person invests personal savings to start a clothing brand and manages its operations." },

    { type: "heading", text: "2. Meaning of an intrapreneur" },
    {
      type: "paragraph",
      text: "An intrapreneur is an **employee who behaves entrepreneurially within an existing organisation**. The employee develops new ideas, products, services or processes while **using the organisation's resources**.",
    },
    { type: "paragraph", text: "Example: a bank employee proposes and builds a new mobile banking feature using the bank's budget and technical team." },

    { type: "heading", text: "3. Intrapreneurship and intrapreneuring" },
    {
      type: "paragraph",
      text: "**Intrapreneurship** is the practice of encouraging employees to think and act like entrepreneurs within an existing organisation. It involves developing new ideas, products, services, processes or business opportunities while using the organisation's resources. Example: an employee in a large company proposes a new mobile app and helps the company launch it.",
    },
    {
      type: "paragraph",
      text: "**Intrapreneuring** is the process through which employees use entrepreneurial skills, creativity, initiative and calculated risk-taking to create innovation inside an established organisation.",
    },
    {
      type: "list",
      items: [
        "The intrapreneur **remains an employee** but acts entrepreneurially.",
        "The organisation normally provides **resources, facilities and support**.",
        "The employee identifies opportunities and works to turn ideas into practical results.",
        "The **financial risk** is generally carried mainly by the **organisation**, not the employee.",
      ],
    },

    { type: "heading", text: "4. Differences between entrepreneur and intrapreneur" },
    {
      type: "table",
      headers: ["Basis", "Entrepreneur", "Intrapreneur"],
      rows: [
        ["Meaning", "Starts or operates a business venture", "Innovates within an existing organisation"],
        ["Ownership", "Usually owns all or part of the venture", "Usually does not own the organisation"],
        ["Investment", "Arranges personal funds or external investment", "Usually uses organisational resources"],
        ["Financial risk", "Generally bears business ownership risk", "Organisation generally bears the financial risk"],
        ["Reward", "Profit, growth and ownership value", "Salary, incentives, recognition or promotion"],
        ["Independence", "Generally greater independence", "Works within organisational policies"],
        ["Resources", "Must arrange resources", "Usually has access to company resources"],
        ["Decision-making", "Decides within ownership and legal limits", "Subject to organisational authority"],
        ["Failure", "May suffer financial losses", "May face career or performance consequences"],
        ["Objective", "Builds and develops a venture", "Improves the organisation through innovation"],
        ["Example", "Founder of a clothing company", "Employee developing a new clothing line for a retailer"],
      ],
    },
    { type: "subheading", text: "Economic difference in short" },
    {
      type: "list",
      items: [
        "Entrepreneur → independent venture + personal/business capital + **greater financial risk** + business profit or loss.",
        "Intrapreneur → existing organisation + organisational resources + **lower personal financial risk** + employee rewards.",
      ],
    },

    { type: "heading", text: "5. Similarities between entrepreneur and intrapreneur" },
    {
      type: "list",
      items: [
        "Both are **creative and innovative**.",
        "Both identify opportunities and try to **create value**.",
        "Both take **calculated risks**.",
        "Both show **initiative and independence**.",
        "Both are **persistent** when facing challenges.",
        "Both are **goal-oriented** and focused on results.",
        "Both use **problem-solving and decision-making** skills.",
      ],
    },

    { type: "heading", text: "6. Characteristics of intrapreneurs" },
    {
      type: "list",
      items: [
        "**Creativity**: generates original ideas and new solutions.",
        "**Innovation**: converts ideas into useful products, services or processes.",
        "**Opportunity orientation**: notices unmet customer needs and new opportunities.",
        "**Calculated risk-taking**: accepts reasonable risk after considering outcomes.",
        "**Proactiveness**: takes initiative instead of waiting for instructions.",
        "**Persistence**: keeps working despite obstacles or initial rejection.",
        "**Problem-solving ability**: finds practical solutions to organisational problems.",
        "**Self-confidence**: believes in useful ideas and communicates them well.",
        "**Adaptability**: adjusts ideas to market, customer or technology changes.",
        "**Leadership**: influences and motivates others to support innovative projects.",
        "**Goal orientation**: focuses on measurable results and organisational objectives.",
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Short list (Chapter 4 version)",
      text: "Creativity and innovation, initiative and self-motivation, problem-solving, calculated risk-taking, leadership and teamwork, ability to communicate ideas, adaptability to change, and commitment to organisational goals.",
    },

    { type: "heading", text: "7. Why organisations promote intrapreneurs" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Encourages innovation**: new products, services and methods.",
        "**Improves competitiveness**: helps respond to competitors and market change.",
        "**Creates new opportunities**: new markets, customers or revenue sources.",
        "**Improves productivity**: cuts time, cost or unnecessary work.",
        "**Solves organisational problems**: employees know daily operations.",
        "**Supports adaptation** to technological and customer changes.",
        "**Motivates employees**: freedom to develop ideas raises involvement and satisfaction.",
        "**Retains talented employees**: creative people prefer workplaces that allow innovation.",
        "**Improves customer satisfaction**: better quality, convenience and service.",
        "**Supports organisational growth**: successful innovations bring income and expansion.",
      ],
    },

    { type: "heading", text: "8. Intrapreneurs as dreamers and change agents" },
    {
      type: "paragraph",
      text: "Intrapreneurs are **dreamers** because they imagine new possibilities and see how the organisation can improve, but they do not stop at ideas: they work to turn them into action. As **change agents** they help the organisation move from existing methods to better practices. They may face **resistance**, because people are comfortable with existing systems.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Identify a problem or opportunity.",
        "Develop a creative idea.",
        "Present the idea and gain management support.",
        "Obtain resources and implement the idea.",
        "Evaluate results and make improvements.",
      ],
    },
    {
      type: "paragraph",
      text: "Example: an employee notices customers wait too long for service and proposes an **online booking system**. If the company adopts it, the employee has acted as both an intrapreneur and a change agent.",
    },

    { type: "heading", text: "9. Corporate culture vs intrapreneurial culture" },
    {
      type: "paragraph",
      text: "**Corporate culture** is the shared values, beliefs, rules and practices that influence how people behave in an organisation.",
    },
    {
      type: "table",
      headers: ["Corporate culture (traditional)", "Intrapreneurial culture"],
      rows: [
        ["Stability", "Innovation"],
        ["Rules and formal procedures", "Flexibility"],
        ["Hierarchy and control", "Initiative"],
        ["Minimising mistakes / risk avoidance", "Experimentation and calculated risk-taking"],
        ["Resistance to change", "Openness to change"],
      ],
    },
    {
      type: "paragraph",
      text: "A modern organisation can keep necessary rules and controls while still giving employees enough freedom to innovate.",
    },

    { type: "heading", text: "10. Advantages and disadvantages of intrapreneurship" },
    {
      type: "table",
      headers: ["Advantages", "Disadvantages"],
      rows: [
        ["Access to organisational resources and expertise", "Limited authority and independence"],
        ["Usually does not bear the venture's full financial risk", "Organisational rules may slow innovation"],
        ["Chance to develop professional skills", "Management may reject new ideas"],
        ["Rewards through recognition, incentives or promotion", "Credit and rewards may not fully reflect the employee's contribution"],
      ],
    },

    { type: "heading", text: "11. Example from Pakistan" },
    {
      type: "paragraph",
      text: "A Pakistani clothing company wants to introduce an **online customisation service**. An **entrepreneur** starts a new clothing business and invests in its website, production and marketing. An **intrapreneur** at an existing clothing company proposes and builds the service using **company resources**. Both use creativity and calculated risk-taking, but one builds a venture as an **owner** while the other innovates **within** an existing organisation.",
    },

    { type: "heading", text: "Quick revision" },
    {
      type: "list",
      items: [
        "Intrapreneurship = entrepreneurship **within** an existing organisation.",
        "Intrapreneur = an **employee** who develops entrepreneurial ideas inside an organisation.",
        "Dreamer = generates a vision or new idea. Change agent = helps turn it into organisational change.",
        "Entrepreneur = independent business owner/creator.",
        "Corporate culture = stability + rules + control. Intrapreneurial culture = innovation + flexibility + initiative.",
      ],
    },

    { type: "heading", text: "Exam questions (solved)" },
    {
      type: "scrollbox",
      title: "Questions with answers",
      blocks: [
        {
          type: "qa",
          question: "Q. Differentiate between an entrepreneur and an intrapreneur.",
          answer:
            "An entrepreneur starts and usually owns a venture, arranges the capital, bears the financial risk, enjoys greater independence and earns profit; failure means financial loss. An intrapreneur is an employee who innovates inside an existing organisation, uses its resources, is subject to its authority and policies, earns salary, incentives or promotion, and faces mainly career or performance consequences if the idea fails. (Reproduce the 11-row table above for full marks.)",
        },
        {
          type: "qa",
          question: "Q. Why are intrapreneurs called dreamers and change agents?",
          answer:
            "They are dreamers because they imagine new possibilities and see how the organisation could improve. They are change agents because they push those ideas into practice by presenting them to management, getting resources, implementing them and improving them, despite resistance from people comfortable with existing methods.",
        },
        {
          type: "qa",
          question: "Q. Why should organisations promote intrapreneurs?",
          answer:
            "To encourage innovation, improve competitiveness, create new opportunities, raise productivity, solve internal problems, adapt to change, motivate and retain talented employees, satisfy customers better and support growth. (List the ten reasons above with one line each.)",
        },
      ],
    },
  ],
};

const chapter5 = {
  title: "Chapter 5: Legal Issues for Entrepreneurs",
  summary:
    "Legal forms of business, unlimited liability, nominal partner, partner by estoppel, registrations, tax, contracts, intellectual property, labour, consumer, environmental and data laws, and legal duties at closure.",
  theory: [
    { type: "heading", text: "1. Meaning of legal issues" },
    {
      type: "paragraph",
      text: "Legal issues are the **laws, rules, regulations and legal responsibilities** an entrepreneur must consider when **starting, operating, expanding or closing** a business. Understanding them helps **avoid penalties**, **protect property**, **maintain customer trust** and **operate lawfully**.",
    },
    { type: "paragraph", text: "Example: registering a company, paying taxes, obtaining licences and protecting a business name." },

    { type: "heading", text: "2. Choosing a legal form of business" },
    {
      type: "table",
      headers: ["Form", "Meaning", "Example"],
      rows: [
        ["Sole proprietorship", "A business **owned and controlled by one person**.", "A small grocery store owned by one individual."],
        ["Partnership", "**Two or more persons** carrying on a business under an arrangement to **share profits**. Rights, duties and liabilities depend on the applicable law and type of partnership.", "Two friends start a marketing consultancy, contributing capital and skills."],
        ["Company", "An entity created through the **legal registration process**. A limited company is generally **separate from its owners**.", "A business registers as a private limited company to make agricultural equipment."],
      ],
    },
    {
      type: "paragraph",
      text: "In Pakistan, entrepreneurs should decide the right structure and registration requirements under the applicable law, including requirements administered by the **Securities and Exchange Commission of Pakistan (SECP)** where applicable.",
    },

    { type: "heading", text: "3. Unlimited liability" },
    {
      type: "paragraph",
      text: "**Unlimited liability** means an owner may be **personally responsible for business debts beyond the amount invested**. Personal assets may be at risk, subject to applicable law, asset protections and the circumstances of the claim.",
    },
    {
      type: "paragraph",
      text: "Example: a sole proprietor owes suppliers **Rs. 1,000,000**, but the business lacks assets to repay it. The proprietor may have to use **personal assets** to meet the debt.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Key point",
      text: "Unlimited liability is a major risk of **sole proprietorships** and **ordinary partnerships**. A limited company is generally separate from its owners.",
    },

    { type: "heading", text: "4. Nominal partner" },
    {
      type: "paragraph",
      text: "A **nominal partner** lets their **name be used** in connection with a partnership but does not necessarily contribute capital or take part in management. Depending on the law and circumstances, they may be **liable to third parties who reasonably rely** on the representation that they are a partner.",
    },
    { type: "paragraph", text: "Example: a respected businessperson allows a firm to advertise them as a partner although they take no part in daily operations." },
    { type: "paragraph", text: "The precise consequences depend on the applicable law and what was represented to third parties." },

    { type: "heading", text: "5. Partner by estoppel" },
    {
      type: "paragraph",
      text: "A **partner by estoppel** is a person who **represents themselves as a partner**, or **knowingly allows others to do so**, and a **third party relies** on that representation when dealing with the business. Where the doctrine is recognised, the person may become **liable to that third party as if they were a partner**.",
    },
    {
      type: "paragraph",
      text: "Example: **Ahmed** allows a business to advertise him as a partner. A supplier gives credit to the firm because of Ahmed's apparent involvement. Ahmed may be liable if the legal requirements are met.",
    },
    {
      type: "table",
      headers: ["Point", "Nominal partner", "Partner by estoppel"],
      rows: [
        ["Basis", "Lends name to the firm", "Represents or knowingly allows representation as a partner"],
        ["Capital / management", "Usually none", "May have none"],
        ["Liability to third parties", "May be liable if they reasonably relied on the representation", "May be liable if a third party relied on the representation"],
        ["Key idea", "Name is used", "Reliance by an outsider (estoppel)"],
      ],
    },

    { type: "heading", text: "6. Business registration and licences" },
    { type: "paragraph", text: "Entrepreneurs must find out which registrations, permissions and licences their particular business needs:" },
    {
      type: "list",
      items: [
        "Business or company **registration**.",
        "**Tax** registration and filings.",
        "Local **trade licences** or permits.",
        "**Industry-specific** approvals.",
        "**Employment-related** registrations.",
        "**Import and export** permissions, where applicable.",
      ],
    },
    {
      type: "paragraph",
      text: "Example: a food business may need food safety and licensing compliance as well as ordinary registration. Requirements vary by activity, location and legal structure.",
    },

    { type: "heading", text: "7. Taxation" },
    {
      type: "paragraph",
      text: "Businesses may owe **income tax**, **sales tax**, **withholding tax** or other taxes. Example: an entrepreneur selling taxable goods must check whether **sales tax registration and collection** apply. In Pakistan the **Federal Board of Revenue (FBR)** is an important authority for federal tax matters.",
    },

    { type: "heading", text: "8. Contracts and agreements" },
    {
      type: "paragraph",
      text: "A **contract** is an agreement that creates **legally enforceable obligations** when the legal requirements are met. Common business contracts:",
    },
    {
      type: "list",
      items: [
        "Supplier agreements.",
        "Employment contracts.",
        "Partnership agreements.",
        "Lease agreements.",
        "Customer and service agreements.",
        "Loan and investment agreements.",
      ],
    },
    {
      type: "paragraph",
      text: "A well-drafted contract clearly states the **parties**, **responsibilities**, **payment terms**, **deadlines** and **consequences of breach**. Example: a bakery signs a written agreement with a supplier fixing flour quality, quantity, price and delivery dates.",
    },

    { type: "heading", text: "9. Intellectual property rights" },
    {
      type: "paragraph",
      text: "Intellectual property rights protect certain **creations, names, inventions and original works**. Entrepreneurs should check relevant rights before using another business's brand, copying protected material or disclosing confidential inventions.",
    },
    {
      type: "table",
      headers: ["Type", "What it protects", "Example"],
      rows: [
        ["Trademark", "Distinctive brand identifiers", "A clothing brand's registered name or logo"],
        ["Patent", "Qualifying inventions", "A novel technical invention"],
        ["Copyright", "Original creative works", "Original written material, photographs or software code"],
        ["Industrial design", "Qualifying product appearance", "The ornamental design of a product"],
      ],
    },

    { type: "heading", text: "10. Employment and labour laws" },
    { type: "paragraph", text: "Businesses with workers must follow applicable rules on:" },
    {
      type: "list",
      items: [
        "Employment terms and contracts.",
        "**Wages** and working conditions.",
        "Working **hours and leave**.",
        "Workplace **health and safety**.",
        "Applicable **social security** and benefits.",
        "Rules on **termination** and workplace **discrimination**.",
      ],
    },
    { type: "paragraph", text: "Example: a factory owner must follow workplace safety requirements to protect employees from preventable injuries." },

    { type: "heading", text: "11. Consumer protection" },
    {
      type: "paragraph",
      text: "Consumer protection laws protect customers against **unfair practices** and help ensure businesses give **accurate information** and suitable products or services. Entrepreneurs should avoid:",
    },
    {
      type: "list",
      items: [
        "**False advertising**.",
        "**Misleading** product descriptions.",
        "**Unfair** commercial practices.",
        "Selling **unsafe** products.",
        "Misrepresenting **prices, quality or warranties**.",
      ],
    },
    { type: "paragraph", text: "Example: an online seller should accurately describe a product's material, size, price and return conditions." },

    { type: "heading", text: "12. Environmental laws" },
    {
      type: "paragraph",
      text: "Some businesses must follow regulations on **pollution, waste disposal, emissions and resource use**. Example: a manufacturer may need environmental approvals or must meet wastewater treatment and waste management standards. Compliance depends on the nature and location of the activity.",
    },

    { type: "heading", text: "13. Data privacy and cybersecurity" },
    { type: "paragraph", text: "Businesses that collect customer or employee information must handle it responsibly:" },
    {
      type: "list",
      items: [
        "Collect **only necessary** information.",
        "**Restrict access** to sensitive records.",
        "Protect customer **payment** information.",
        "Use **secure systems and passwords**.",
        "**Disclose** information-handling practices.",
        "Follow applicable privacy and cybersecurity laws.",
      ],
    },
    { type: "paragraph", text: "Example: an online store protects customers' addresses, phone numbers and payment details against unauthorised access." },

    { type: "heading", text: "14. Legal issues during business closure" },
    { type: "paragraph", text: "Closing a business also carries legal duties. An entrepreneur may need to:" },
    {
      type: "list",
      items: [
        "**Notify** employees, suppliers and authorities.",
        "**Settle debts** and contractual obligations.",
        "Complete **tax filings**.",
        "Pay **employee entitlements** where required.",
        "**Cancel licences** and registrations where appropriate.",
        "Follow the **dissolution or winding-up** process.",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Do not just stop trading",
      text: "A business should not simply stop operating without considering its remaining legal obligations.",
    },

    { type: "heading", text: "Reference books" },
    {
      type: "list",
      items: [
        "Hitesh Jain and Jhanji, Entrepreneurship and Small Business Management (use the edition assigned by your university).",
        "Robert D. Hisrich, Michael P. Peters and Dean A. Shepherd, Entrepreneurship.",
        "Bruce R. Barringer and R. Duane Ireland, Entrepreneurship: Successfully Launching New Ventures.",
        "Norman M. Scarborough, Essentials of Entrepreneurship and Small Business Management.",
      ],
    },

    { type: "heading", text: "Exam questions (solved)" },
    {
      type: "scrollbox",
      title: "Questions with answers",
      blocks: [
        {
          type: "qa",
          question: "Q. What is unlimited liability? Give an example.",
          answer:
            "It means an owner can be personally responsible for business debts beyond the amount invested, so personal assets may be at risk. Example: a sole proprietor owes suppliers Rs. 1,000,000 but the business cannot pay; the proprietor may have to use personal assets. It is a major risk of sole proprietorships and ordinary partnerships.",
        },
        {
          type: "qa",
          question: "Q. Explain nominal partner and partner by estoppel.",
          answer:
            "A nominal partner lets their name be used with a partnership without necessarily investing or managing, and may be liable to third parties who reasonably relied on it. A partner by estoppel represents themselves, or knowingly lets others represent them, as a partner; if a third party relies on this when dealing with the firm (Ahmed's case: a supplier gave credit because of his apparent involvement), he may be liable as if he were a partner.",
        },
        {
          type: "qa",
          question: "Q. Name four types of intellectual property and what each protects.",
          answer:
            "Trademark protects distinctive brand identifiers (name, logo); patent protects qualifying inventions; copyright protects original creative works (writing, photographs, software code); industrial design protects the appearance of a product.",
        },
        {
          type: "qa",
          question: "Q. What legal duties arise when closing a business?",
          answer:
            "Notify employees, suppliers and authorities; settle debts and contracts; complete tax filings; pay employee entitlements where required; cancel licences and registrations; and follow the dissolution or winding-up process.",
        },
      ],
    },
  ],
};

const chapter6 = {
  title: "Case Study: Airbnb, from a Simple Idea to a Global Startup",
  summary:
    "The Airbnb story, its lessons, and all 15 discussion questions and the classroom activity solved.",
  theory: [
    { type: "heading", text: "1. Background" },
    {
      type: "paragraph",
      text: "In **2007**, **Brian Chesky** and **Joe Gebbia** lived in **San Francisco** and struggled to pay rent. A major **design conference** was coming and most hotels were fully booked. They saw an opportunity: visitors needed a place to stay while locals had unused space. They rented out **three air mattresses** in their apartment, offered breakfast, and built a simple website called **\"Air Bed & Breakfast\"**. Their first customers paid to stay in the apartment.",
    },

    { type: "heading", text: "2. The problem" },
    {
      type: "list",
      items: [
        "**Expensive** hotels.",
        "**Limited accommodation** during major events.",
        "A wish for more **local and personal** travel experiences.",
        "At the same time, many homeowners had **unused rooms** that could earn income.",
      ],
    },

    { type: "heading", text: "3. The entrepreneurial idea" },
    {
      type: "paragraph",
      text: "A **platform** connecting: people who **need accommodation** ↔ people who **have available space**. Instead of owning hotels, Airbnb was an **intermediary**. The insight: **you do not always need to own the resources you sell**.",
    },

    { type: "heading", text: "4. Early challenges" },
    {
      type: "list",
      items: [
        "Hard to attract **both hosts and guests**.",
        "People hesitated to stay in a **stranger's home**, let **strangers in**, or trust an **unfamiliar website**.",
        "Too few listings and customers, so the founders **experimented** instead of waiting.",
        "Famous example: they **visited hosts and took better photographs**, realising poor photos made listings unattractive.",
      ],
    },

    { type: "heading", text: "5. Finding the business model" },
    {
      type: "paragraph",
      text: "Airbnb connects hosts and guests and **earns revenue through fees on bookings**. It grew from a small apartment experiment into a **global accommodation platform**.",
    },

    { type: "heading", text: "6. Entrepreneurial lessons" },
    {
      type: "table",
      headers: ["Lesson", "How Airbnb showed it"],
      rows: [
        ["Opportunity recognition", "Noticed a problem and linked it with an available resource."],
        ["Problem-solving", "Addressed a real customer need."],
        ["Bootstrapping", "Started with very limited resources."],
        ["Experimentation", "Tested the idea instead of assuming it would work."],
        ["Customer feedback", "Learned from early users."],
        ["Innovation", "Created a new way to connect travellers and hosts."],
        ["Risk-taking", "Invested time and resources despite uncertainty."],
        ["Business model innovation", "Built a platform without owning hotels."],
      ],
    },

    { type: "heading", text: "7. Discussion questions (solved)" },
    {
      type: "scrollbox",
      title: "Discussion questions with answers",
      blocks: [
        { type: "qa", question: "1. What problem did Airbnb's founders identify?", answer: "Travellers faced expensive hotels and too little accommodation during big events (hotels in San Francisco were full for the design conference), and they wanted a more local, personal stay. At the same time, local residents had unused space that earned nothing. The two sides had no easy way to meet." },
        { type: "qa", question: "2. What was their initial business idea?", answer: "To rent out three air mattresses in their own apartment with breakfast, advertised on a simple website called \"Air Bed & Breakfast\"." },
        { type: "qa", question: "3. Who were Airbnb's two main customer groups?", answer: "Guests (travellers who need accommodation) and hosts (people with spare rooms or properties who want income). It is a two-sided platform, so both sides had to be attracted." },
        { type: "qa", question: "4. What resources did the founders have when they started?", answer: "An apartment, three air mattresses, a simple website, their own skills (Gebbia and Chesky were designers) and their time. They had almost no money, so they bootstrapped." },
        { type: "qa", question: "5. What made their idea different from traditional hotels?", answer: "Hotels own buildings and rooms and sell them. Airbnb owned nothing and acted as a platform connecting guests with people's existing spaces. This gave more local and personal stays, often at lower prices, extra capacity during big events, and income for homeowners, with far less investment than building hotels." },
        { type: "qa", question: "6. Was Airbnb's idea completely new, or did the founders combine existing resources in a new way? Explain.", answer: "Mostly the second. Renting rooms and staying with locals already existed, and so did websites. What was new was combining spare rooms with an online marketplace that built trust (listings, photos, bookings, fees) and scaling it globally. This is business model innovation: a new combination of existing resources, not an invention from nothing." },
        { type: "qa", question: "7. What risks did Brian Chesky and Joe Gebbia take?", answer: "Financial risk (they were short of rent money yet spent time and money on the idea); personal risk of letting strangers into their home; reputation and trust risk with an unknown website; legal and safety uncertainty (renting rooms raises rules and safety questions); and opportunity cost, since they gave up other work. These were uncertain bets, though the starting investment was small." },
        { type: "qa", question: "8. Why was customer trust an important issue for Airbnb?", answer: "Guests had to sleep in a stranger's home and hosts had to let strangers in, and both had to trust an unfamiliar website with bookings and money. Without trust neither side joins, so there are no listings and no customers. Trust-building steps (better photos, reviews, clear profiles) were therefore central to survival." },
        { type: "qa", question: "9. How did the founders learn from their early problems?", answer: "They did not wait for customers. They experimented, listened to early users, and found causes. They noticed poor photos made listings unattractive, so they visited hosts and took better photographs. They then adjusted the model until the fee-on-bookings business model worked." },
        { type: "qa", question: "10. Which entrepreneurial characteristics can you identify in the founders?", answer: "Opportunity recognition and initiative (they acted on the conference shortage); creativity and innovation (platform idea); calculated risk-taking; persistence (kept going despite few customers and distrust); problem-solving (fixing photos); adaptability and experimentation; resourcefulness with very limited resources; and customer focus." },
        { type: "qa", question: "11. If you were an investor in 2008, what questions would you ask the founders before investing?", answer: "Who is the target customer and how big is the market? How will you get both hosts and guests? How will you build trust and ensure safety? How does the business make money, and what are the margins? What do the first numbers show (listings, bookings, repeat use)? What are the legal and regulatory risks in different cities? Who are the competitors and can they copy you? How much money do you need, what will you spend it on, and what is the plan if the first approach fails? Who is on the team?" },
        { type: "qa", question: "12. What could have caused Airbnb to fail?", answer: "Failure to build trust between strangers; too few hosts or guests (a two-sided platform needs both); running out of money; safety incidents or bad publicity; legal bans or regulation on short-term rentals; competitors copying the model; poor service quality (bad photos, inaccurate listings); or the founders giving up." },
        { type: "qa", question: "13. If Airbnb had started today, what would you do differently to attract its first 100 customers?", answer: "Start in one city or around one event and focus on one customer group; recruit hosts personally and help them with good photos; use social media, local groups and student or community networks; offer a launch discount or referral reward; collect reviews early to build trust; add verified profiles and clear safety rules; and measure which channel brings customers, then repeat it." },
        { type: "qa", question: "14. What other industries could use Airbnb's platform business model?", answer: "Ride-sharing (connecting drivers and riders), freelance work (skills and clients), tutoring and education, equipment or tool rental, car and parking-space sharing, food delivery and home kitchens, healthcare appointments, crowdfunding, and farm-to-buyer marketplaces. The pattern is the same: connect people with spare capacity to people who need it, without owning the resource." },
        { type: "qa", question: "15. Can you identify a similar problem in Pakistan that could be turned into a startup idea?", answer: "Example: students and families in cities like Lahore struggle to find safe, affordable hostels or paying-guest rooms near universities, while many homeowners have unused rooms. A platform listing verified rooms with real photos, reviews, ID verification and online booking could earn a small fee per booking. Other ideas: connecting farmers directly with buyers, or tutors with students in small towns." },
      ],
    },

    { type: "heading", text: "8. Mini classroom activity (solved)" },
    {
      type: "paragraph",
      text: "**Task:** you are Brian and Joe in 2007 with an apartment, three air mattresses, almost no money and a website. How do you get your first 10 customers? Prepare the five points below, then pitch in 2 minutes.",
    },
    {
      type: "table",
      headers: ["Point", "Model answer"],
      rows: [
        ["Target customer", "Visitors attending the design conference who could not find or afford a hotel room, such as young designers and students."],
        ["Marketing method", "Post on the conference's forums, blogs and mailing lists; contact attendees directly; use a clear, friendly listing with good photos and a breakfast offer."],
        ["Price", "Lower than nearby hotels (for example a flat nightly price with breakfast included), so the saving is obvious."],
        ["Where to find customers", "Conference organisers' website and social pages, design communities, university groups and word of mouth."],
        ["One major risk", "Trust: guests may not want to stay in a stranger's home. Reduce it with photos, honest descriptions, clear house rules and early reviews."],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "2-minute pitch (model)",
      text: "\"Hotels in the city are full for the design conference. We have a comfortable apartment with three air beds and breakfast, cheaper than any hotel, five minutes from the venue. Stay with fellow designers, meet locals and save money. Book on our website today.\" Then name the one risk (trust) and how you will handle it.",
    },

    { type: "heading", text: "Key concepts covered" },
    {
      type: "list",
      items: [
        "Opportunity recognition and problem identification",
        "Customer needs and customer validation",
        "Startup resources and bootstrapping",
        "Risk-taking and innovation",
        "Business model and the **platform business model**",
      ],
    },
  ],
};

// Chapters in teaching order.
export const entrepreneurshipChapters = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
];
