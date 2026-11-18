// ALL notes for English (Expository Writing and Communication Skills), semester 2, live in this ONE file.
// Chapters are in teaching order (the list is at the bottom): 1 Expository writing, 2 Technical writing,
// 3 Clarity and conciseness, 4 Document design, audience and accuracy, 5 Research and the research proposal,
// 6 Oral communication and presentation planning, 7 Visual aids, delivery and non-verbal communication, 8 Interview skills.
// Pictures are in public/notes/semester-2/english/ and are added with IMG("file-name", "description", "caption").
// Block types: heading, subheading, paragraph, list, table, callout, image, qa and scrollbox.
// BOX(title, blocks) puts any blocks in one scrolling box. SCEN(title, [[question, answer]]) is a scrolling box of questions with answers.
// BA(rows) is a Wordy / Concise (or Weak / Better) comparison table.

const BASE = "/notes/semester-2/english";
const SIZES = {
  "multi-level-audience": [2000, 1480],
  "personal-space-zones": [2000, 1480],
  "presentation-structure": [2000, 1240],
  "white-space-balance": [2000, 1280],
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
const BOX = (title, blocks) => ({ type: "scrollbox", title, blocks });
const BA = (rows, heads = ["Wordy", "Concise"]) => T(heads, rows);
const SCEN = (title, items) => ({
  type: "scrollbox",
  title,
  blocks: items.map(([question, answer]) => ({ type: "qa", question, answer })),
});

// ---------------------------------------------------------------------------
// Chapter 1. Expository writing
// ---------------------------------------------------------------------------
const chapter1 = {
  title: "Chapter 1: Expository Writing",
  summary:
    "What expository writing is, its ten characteristics and ten purposes, with a real-life example of each and a short model paragraph.",
  theory: [
    H("What is expository writing?"),
    P("**Expository writing** is a form of **non-fictional** writing used to expose (explain) a concept or an idea. It gives information, explains a topic or presents an idea in a clear and concise way. Its main purpose is to convey facts, concepts, ideas or instructions to the reader in a straightforward and objective manner."),
    P("It is used to educate, inform or clarify a subject, so it appears in many places: textbooks, academic essays, letters, manuals, reports, news articles, pamphlets, magazines and guidebooks."),
    T(
      ["Expository writing", "Narrative writing"],
      [
        ["Explains facts and ideas", "Tells a story"],
        ["Non-fiction", "Often fiction"],
        ["Objective tone, no personal bias", "Personal or emotional tone is common"],
        ["Organised as introduction, body and conclusion", "Organised as a plot"],
        ["Example: a report on how a solar panel works", "Example: a story of a girl who builds a solar panel"],
      ]
    ),

    H("Characteristics of expository writing"),
    T(
      ["Characteristic", "Meaning"],
      [
        ["Clarity", "Simple and precise language so that readers easily understand and absorb the information, with little risk of misinterpretation."],
        ["Logical sequence", "Ideas follow a well-structured order: an introduction, body paragraphs with supporting details, and a summary or resolution."],
        ["Objective tone", "No personal bias or emotional language. Readers trust information that is impartial and based on factual evidence."],
        ["Structured writing", "A proper introduction, supporting details in the form of examples, and a conclusion. Readers can find specific information easily."],
        ["Source of information", "Draws on credible sources such as academic research, expert opinions, statistics and verifiable data."],
        ["Audience awareness", "The writer tailors the content to the readers' background knowledge and level of understanding."],
        ["Wide range of topics", "From scientific concepts and historical events to practical instructions, so it is used in many fields."],
        ["Convincing and credible", "Facts and evidence are presented so that readers accept the validity of the information."],
        ["Non-fictional", "It conveys factual information and educates readers rather than creating stories."],
      ]
    ),
    SH("Example: the same fact written two ways"),
    BA(
      [
        ["The weather was terrible and I felt so sad on that awful rainy day.", "Rainfall of 80 mm was recorded on Tuesday, and several roads in the city were closed."],
        ["I think plastic is really bad and everybody must stop it!", "Plastic takes hundreds of years to break down, and reducing its use lowers pollution."],
      ],
      ["Personal and emotional", "Expository and objective"]
    ),

    H("Purposes of expository writing"),
    P("The expository mode of writing is generally used to perform the following functions. Each one is shown with the example kind of text."),
    T(
      ["Purpose", "What it does", "Example"],
      [
        ["To inform", "Gives factual information and raises awareness of a subject", "A news article sharing the results of a general election"],
        ["To explain", "Breaks complex ideas or processes into simpler parts", "An explanation of the process of photosynthesis"],
        ["To describe", "Gives a clear and vivid picture of a subject, object, place or event", "A brochure of a housing society"],
        ["To instruct or guide", "Gives step-by-step procedures for a task", "Instruction manuals, how-to guides and recipe books"],
        ["To analyse data", "Interprets data and statistics so readers can draw conclusions", "Analysis of graphs to predict weather patterns"],
        ["To persuade", "Presents a compelling argument supported by evidence", "An article on the benefits of regular exercise and walking"],
        ["To educate", "Delivers knowledge in academic settings and builds critical thinking", "A history book"],
        ["To clearly communicate", "Reduces ambiguity and misunderstanding so ideas are conveyed accurately", "A notice with the date, time and place of an exam"],
        ["To answer questions", "Gives well-researched answers to readers' questions", "Frequently Asked Questions (FAQs)"],
        ["To record data", "Documents facts, events and findings for future reference", "A research paper"],
      ]
    ),
    BOX("Model paragraph: how to read it as an expository paragraph (scroll to see all)", [
      P("Topic: Why do we need sleep?"),
      P("**Introduction (topic sentence):** Sleep is a natural state in which the body and brain rest and repair themselves."),
      P("**Body (supporting details):** First, during sleep the brain stores what a person learned during the day, so students who sleep well remember more. Second, the body repairs muscles and strengthens the immune system. Third, a rested person concentrates better and makes fewer mistakes. For example, most adults need about seven to nine hours of sleep each night."),
      P("**Conclusion:** In short, enough sleep supports learning, health and safety."),
      P("The paragraph is expository because it states facts, follows a logical order (introduction, details, conclusion), keeps an objective tone and uses no stories or personal opinions."),
    ]),
    SCEN("Questions with answers: expository writing", [
      ["Question 1: Define expository writing and give three places where it is found.", "Expository writing is non-fictional writing used to explain a concept or an idea clearly and objectively. It is found in textbooks, reports, manuals, news articles, pamphlets and guidebooks."],
      ["Question 2: Why must expository writing have an objective tone?", "An objective tone avoids personal bias and emotional language, so the readers trust the information as impartial and based on factual evidence."],
      ["Question 3: Which purpose of expository writing does a user manual for a washing machine serve?", "It serves the purpose **to instruct or guide**, because it gives step-by-step procedures for handling the machine."],
      ["Question 4: Write one sentence for each of the purposes to inform and to persuade, on the topic of road safety.", "To inform: Road accidents in the city rose by 12 percent last year. To persuade: Wearing a helmet cuts the risk of serious head injury, so every rider should wear one."],
      ["Question 5: What are the three parts of a well-structured expository text?", "An introduction that presents the topic, body paragraphs with supporting details and examples, and a conclusion that gives a summary or resolution."],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 2. Technical writing
// ---------------------------------------------------------------------------
const chapter2 = {
  title: "Chapter 2: Technical Writing",
  summary:
    "The purpose of technical writing, what technical writers create, how to recognise the audience, the audience analysis checklist and the common technical writing documents, with a sample memo and an email.",
  theory: [
    H("Purpose of technical writing"),
    P("Technical writing has two basic purposes: **to inform** and **to persuade**. It is carried out in science, industry and business. Its basic purpose is to inform by giving the audience factual information in the form of reports, instructions and descriptions. Along with stating facts, it gives the audience enough information to draw inferences."),
    SH("What do technical writers create?"),
    T(
      ["Type", "Details"],
      [
        ["Instructions", "A link between knowledge and its application, usually a machine. Technical writers describe the knowledge and concepts that are at work in the machine."],
        ["Directions", "In business, memos and business letters are written when employees communicate with each other, or when two or more organisations communicate. Directions are given through business reports, letters and memos."],
        ["Technical reports", "Progress reports (weekly, monthly or yearly records of progress), proposals and feasibility studies (possible solutions to a problem or the best feasible option), summaries of staff meetings (a record of what happened), and advertisements such as tender notices and job vacancies."],
      ]
    ),

    H("Recognising your audience"),
    P("Before writing a report, identify the target audience. Their needs and wants decide the content, the manner of writing, the information given and the recommendations. The same report is written differently for your boss and for your colleagues."),
    SH("Audience analysis"),
    T(
      ["Step", "Question to ask"],
      [
        ["Analyse", "Who is the recipient (or who are the recipients)?"],
        ["Understand", "What is their knowledge of your message?"],
        ["Demographics", "What is their age, gender, education level and position?"],
        ["Interest", "What is their interest or investment in your message?"],
        ["Environment", "What is your relationship to the audience? What is their likely attitude? Have you taken cultural differences into consideration?"],
        ["Needs", "What information does your audience need?"],
        ["Customise", "How do you adjust your message to your audience?"],
        ["Expectations", "What is your audience's expectation?"],
      ]
    ),
    BOX("Example: one message for two audiences (scroll to see all)", [
      P("Message: the college Wi-Fi will be shut down on Saturday for maintenance."),
      P("**For the head of the department (high-tech reader, wants only the key facts):** The IT section will shut down the campus network on Saturday, 8 am to 2 pm, to install new routers. Online exams are not affected."),
      P("**For first-semester students (lay reader, needs background and plain words):** The internet in the college will not work this Saturday from 8 am until 2 pm. The IT staff are fitting new equipment so that the internet becomes faster. Please download the study material you need before Friday evening."),
      P("Both messages contain the same news, but the vocabulary, length and details change with the audience."),
    ]),

    H("Technical writing scenarios"),
    P("Based on the general purpose of information and persuasion, the documents a technical writer may create include: e-mails, memos, letters, reports, proposals, user manuals, websites, brochures, résumés and newsletters."),
    T(
      ["Document", "Description", "Situation to write for"],
      [
        ["E-mail", "One of the most commonly used forms of communication. A formal e-mail to a boss or supervisor needs a proper format and appropriate language.", "A chemist in a university laboratory is asked about the current stock of chemicals and the new supplies needed. The reply must cite authentic facts."],
        ["User manual", "Instructions for building, performing preventive maintenance, or shipping and handling a product.", "The manual of an automatic washing machine gives clear instructions for handling its parts, their functions and the precautions."],
        ["Proposal", "In an academic setting it presents the hypothesis and overall framework of a research study for approval. In business it is a sales offer from a seller to prospective buyers.", "A trust officer in a bank writes a 20 to 30 page proposal about the bank's services for potential clients."],
        ["Letter", "A business or scientific letter follows the principles of technical writing, unlike a letter to a friend.", "A customer writes a letter of complaint because an automobile part arrived five days late, broken and at a higher price than agreed."],
        ["Website", "A collection of content and images on a topic under one domain name. Technical writers are needed for its content.", "A corporate website gives clients information on locations, pricing, products, services, mission statement and job openings, with a help menu for customer and employee questions."],
        ["Brochure", "Written to give information and to persuade the audience to draw certain inferences from it.", "A genetics professor designs a brochure for a community where cousin marriages are common, to spread awareness of the risk of genetic disorders."],
        ["Résumé", "A written description of your background and skills, presented in an appealing manner to a prospective employer.", "A fresh graduate writes a résumé and a letter of application to show a company what they can offer."],
      ]
    ),
    BOX("Sample documents written for you (scroll to see all)", [
      SH("Sample memo"),
      P("**To:** All department heads"),
      P("**From:** Office of the Registrar"),
      P("**Date:** 14 March 2026"),
      P("**Subject:** Submission of the semester result sheets"),
      P("Please submit the final result sheets of all courses to the Examination Section by Friday, 20 March, at 3 pm. Sheets must be signed by the course teacher and checked by the head of the department. Late sheets cannot be included in the result notification. For questions, contact the Examination Section."),
      SH("Sample formal e-mail"),
      P("**Subject:** Request for a copy of the semester timetable"),
      P("Dear Madam,"),
      P("I am a second-semester student of the AI programme, Section B. I could not collect the printed timetable during the first week. I would be grateful if you could send me a copy of the timetable by e-mail. Thank you for your time."),
      P("Yours sincerely, (name and roll number)"),
      SH("Sample letter of complaint (outline)"),
      L([
        "State the order: part name, order number and date.",
        "State the problem: it came five days late, broken and at a higher price than agreed.",
        "State what you want: a replacement part and a refund of the extra amount.",
        "Close politely and give a date by which you expect a reply.",
      ]),
    ]),
    SCEN("Questions with answers: technical writing", [
      ["Question 1: What are the two basic purposes of technical writing?", "To inform (by giving factual information in reports, instructions and descriptions) and to persuade (by giving enough information for the audience to draw inferences)."],
      ["Question 2: Why is audience analysis done before writing a report?", "The needs and wants of the audience decide the content, the manner of writing and the recommendations. A report for a boss is written differently from one for colleagues."],
      ["Question 3: Name the three things technical writers create.", "Instructions, directions and technical reports."],
      ["Question 4: What is the difference between an academic proposal and a business proposal?", "An academic proposal presents the hypothesis and framework of a research study so that it can be approved. A business proposal is a sales offer made by a seller to prospective buyers."],
      ["Question 5: Choose the right document: a company wants to tell new customers about its products and persuade them to buy.", "A brochure (or a website), because both give information and persuade the audience to draw certain inferences."],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 3. Clarity and conciseness
// ---------------------------------------------------------------------------
const chapter3 = {
  title: "Chapter 3: Traits of Technical Writing, Clarity and Conciseness",
  summary:
    "Why you are writing, understanding the audience, the five traits that make a text easy to understand, then clarity and conciseness in detail with before and after examples and a solved exercise.",
  theory: [
    H("Why are you writing?"),
    P("The first question when preparing a report is **Why are you writing?** Three basic components decide the answer:"),
    L([
      "**Information needed:** what the readers must be told.",
      "**Persuasion required:** what the readers must be convinced of.",
      "**The audience's needs and wants.**",
    ]),
    SH("Understanding the audience"),
    L(
      [
        "**Level of education:** a report on bullying is written differently for students of Grade 5 and for students of O levels.",
        "**Background knowledge:** the knowledge the audience already has on the topic is the foundation you build on. It helps you avoid telling them what they already know and lets you focus on what they lack.",
        "**Relationship with the audience:** the audience may be your boss, your students or your colleagues. Choose the content, tone and language accordingly.",
      ],
      true
    ),
    P("According to Guffey and Du-Babcock (2008), if you give priority to the audience's benefit by putting yourself in their shoes, your writing will appeal to them. To develop empathy for the readers, adopt a positive tone, cultivate a **you-attitude**, sound conversational and use familiar vocabulary."),
    BOX("Exercise solved: a report on radiation (scroll to see all)", [
      P("**Task:** As a health advisor in an atomic plant, write a report for technicians on the harmful effects of radiation. The readers are a low-tech audience, so give detailed information (facts, statistics, references), recommend ways to reduce exposure time in the radiation area, the measures to take if exposed, and the precautions to observe while working there. Persuade them to practise caution."),
      P("**Step 1, the writing purpose:** the information needed is the effects of radiation and the safety measures. The persuasion required is to make the technicians follow them. The audience is technicians who work in the plant but are not radiation specialists, so every technical term must be explained."),
      SH("Model report"),
      P("**Subject:** Radiation safety for plant technicians"),
      P("**What radiation can do:** Radiation is energy that passes through the body. A small dose over a long time can slowly damage body cells. A large dose in a short time can cause burns, sickness and, in serious cases, cancer. These effects depend on three things: the amount of radiation, the time you spend near it and how close you stand to it."),
      P("**How to reduce exposure:** (1) Spend only the time you need in the radiation area. (2) Keep as much distance as possible from the source. (3) Use the shielding provided, such as lead barriers and protective clothing. (4) Wear your dose badge at all times, and check it at the end of every shift."),
      P("**If you are exposed:** Leave the area at once, tell your supervisor, remove contaminated clothing, wash with water and report to the medical room for a check."),
      P("**Precautions while working:** Never enter the area alone. Never eat or drink there. Follow the posted warning signs. Report damaged equipment immediately."),
      P("**Why it matters:** These steps take only a few minutes each day, but they protect your health for the rest of your life. Please follow them every time without exception."),
    ]),

    H("Raising the probability of comprehension"),
    P("If these five traits are kept in view while composing a report, the audience understands it better:"),
    L([
      "Clarity",
      "Conciseness",
      "Accessible document design",
      "Audience recognition",
      "Accuracy (grammar)",
    ], true),
    P("This chapter explains the first two. The other three follow in Chapter 4."),

    H("Clarity"),
    P("**Clarity** means that your writing is easily understood by the intended audience. Murphy, Hildebrandt and Thomas (2008) suggest two guidelines for achieving it:"),
    L([
      "Use **precise, concrete and familiar** vocabulary.",
      "Make **effective sentences and paragraphs**.",
    ]),
    BA(
      [
        ["Employees' remuneration is still not decided.", "Employees' pay has not been decided yet."],
      ],
      ["Unfamiliar", "Familiar"]
    ),
    P("Keep the sentence length to about 17 to 20 words, introduce one main idea at the beginning of a paragraph and support it with vivid details."),
    BA(
      [
        ["Students should be confident and have a clear understanding of the subject, and these qualities are the prerequisites that we need.", "Prerequisites for students include a clear understanding of the subject and confidence."],
      ],
      ["Unclear", "Clear"]
    ),
    SH("Four more points for clarity"),
    L(
      [
        "Avoid ambiguity.",
        "Prefer the active voice.",
        "Exclude the personal introduction and conclusion.",
        "Use transition words.",
      ],
      true
    ),
    BOX("Clarity examples for each point (scroll to see all)", [
      SH("1. Avoid ambiguity: choose a clear sentence structure"),
      BA(
        [["When the presentation was going on, our students expressed dislike for it.", "Our students expressed dislike for the presentation when it was going on."]],
        ["Ambiguous", "Clear"]
      ),
      SH("2. Prefer the active voice"),
      P("In the active voice the subject (the doer of the action) comes first and gets the emphasis, so sentences become clearer."),
      BA(
        [["The pact was signed and approved in the last meeting.", "The President signed and approved the pact in the last meeting."]],
        ["Passive", "Active"]
      ),
      P("The **passive voice** should be used when you want to de-emphasise bad news or to avoid blaming a certain person for a wrong deed."),
      T(
        ["Passive (softer, no blame)", "Active (direct, names the doer)"],
        [
          ["Your laptop has not been repaired yet.", "We have not repaired your laptop yet."],
          ["This loss has been caused due to a delayed response.", "The delayed response of a staff member caused this loss."],
        ]
      ),
      SH("3. Exclude the personal introduction and conclusion"),
      P("Leaving out phrases such as I think makes your writing neutral and free of bias."),
      BA(
        [["I think that Pakistani society was more liberal and tolerant back in the 1990s.", "Pakistani society was more liberal and tolerant in the 1990s."]],
        ["With personal opinion", "Neutral"]
      ),
      SH("4. Use transition words"),
      P("Transition words create cohesion. They join thoughts between sentences so that the flow is smoother and the shift from one idea to the next is not abrupt."),
      T(
        ["Transition", "Use"],
        [
          ["However, Nevertheless, Although", "to show contrast"],
          ["Therefore, Consequently", "to show a result"],
          ["Furthermore, Likewise", "to add or to compare"],
          ["Alternatively", "to offer another choice"],
        ]
      ),
      BA(
        [
          ["It rained heavily last night. Several streets got flooded with water and there was no electricity.", "As a consequence of heavy rain last night, several streets flooded with water and power failed."],
          ["Pour one cup of milk in the saucepan, then add one egg, add sugar and then mix it.", "First, pour a cup of milk in the saucepan; second, add an egg and sugar; and third, stir the mixture."],
        ],
        ["Without transitions", "With transitions"]
      ),
    ]),

    H("Conciseness"),
    P("**Conciseness** means communicating in the shortest possible way without compromising the meaning. A concise text is complete but not wordy. It saves time and lets you emphasise the important details."),
    SH("Guidelines for a concise document"),
    T(
      ["Guideline", "Explanation"],
      [
        ["Write positively", "Positive language is shorter."],
        ["Paragraph often", "Divide long ideas into small paragraphs with vivid details. The average paragraph should not exceed 60 to 100 words."],
        ["Use reasonable sentence length", "Most sentences should average 20 words. If a sentence exceeds 40 words, break it into smaller sentences."],
        ["Avoid redundant expressions", "Do not say the same thing twice."],
        ["Avoid prepositional phrases", "Replace long phrases with one strong word."],
        ["Delete meaningless words", "Words such as basically, generally, kind of and actually add no meaning."],
        ["Delete doubled words", "Do not use word pairs that mean the same thing."],
        ["Delete redundant categories", "Round in shape, large in size, blue in colour are said better as round, large, blue."],
        ["Reduce phrases to words", "Many phrases can be said in fewer words, even one word."],
      ]
    ),
    BOX("Conciseness examples: wordy and concise (scroll to see all)", [
      SH("Write positively"),
      BA([["You did not attend the class yesterday.", "You missed the class yesterday."]]),
      SH("Use reasonable sentence length"),
      BA([["The instructor taught us several new ways to make our writing to the point and less wordy.", "The instructor taught us ways to write concisely."]]),
      SH("Avoid redundant expressions"),
      BA([
        ["We are working together in collaboration.", "We are working together."],
        ["Any specific type of pasta dish is fine with me.", "Any pasta dish is fine with me."],
        ["The toy is round in shape.", "The toy is round."],
        ["My clutch is shiny in appearance.", "My clutch is shiny."],
      ]),
      SH("Avoid prepositional phrases"),
      BA([
        ["She needs to put up with their tantrums.", "She should tolerate their tantrums."],
        ["It was such an unexpected surprise.", "It was a surprise!"],
        ["At the current point in time we ought to have, as has always been the case in the past, some trust in our worthy President.", "As always, we should trust our President now."],
      ]),
      SH("Delete meaningless words"),
      P("Avoid words that do not add any meaning to a sentence: basically, generally, kind of, actually."),
      BA([
        ["Basically, a report is structured according to its purpose.", "A report is structured according to its purpose."],
        ["I was kind of confused.", "I was confused."],
        ["Generally speaking, they played well.", "They played well."],
      ]),
      SH("Delete doubled words"),
      BA([
        ["Be clear about the aims and objectives.", "Be clear about the objectives."],
        ["Each and every one of my classmates attended the party.", "Each of my classmates attended the party."],
        ["First and foremost, look for the hypothesis.", "First, look for the hypothesis."],
      ]),
      SH("Delete redundant categories"),
      P("Words that repeat the category in the adjective: round in shape, large in size, blue in colour, heavy in weight, sour in taste, shiny in appearance, smooth in texture, honest in character."),
      BA([
        ["The latest happenings are unusual in nature.", "The latest happenings are unusual."],
        ["Alfredo is creamy and delicious in taste.", "Alfredo is creamy and delicious."],
        ["Often times, I forget to remind him.", "I often forget to remind him."],
      ]),
      SH("Reduce phrases to words"),
      T(
        ["Phrase", "Word"],
        [
          ["For this reason", "So"],
          ["Due to the fact that", "Because"],
          ["At a much greater rate than", "Faster"],
          ["Despite the fact that", "Although"],
          ["A great deal of", "Much"],
          ["In order to", "To"],
          ["At this point in time", "Now"],
        ]
      ),
    ]),
    BOX("Practice: make these sentences concise (scroll to see all)", [
      BA(
        [
          ["Due to the fact that the bus was late, we reached the college at a late hour.", "The bus was late, so we reached the college late."],
          ["The report is blue in colour and large in size.", "The report is blue and large."],
          ["Basically, the manager gave a talk about the matter of safety.", "The manager talked about safety."],
          ["In my personal opinion, I think the plan is a good idea.", "The plan is a good idea."],
          ["We have a need for a great deal of time in order to complete the project.", "We need much time to complete the project."],
        ],
        ["Wordy sentence", "Concise answer"]
      ),
    ]),
    SCEN("Questions with answers: clarity and conciseness", [
      ["Question 1: What does clarity mean and what are the two guidelines for it?", "Clarity means the writing is easily understood by the intended audience. The guidelines are to use precise, concrete and familiar vocabulary and to make effective sentences and paragraphs."],
      ["Question 2: When should the passive voice be used?", "The passive voice should be used when you want to de-emphasise bad news or avoid blaming a certain person for a wrong deed. Example: Your laptop has not been repaired yet."],
      ["Question 3: Rewrite: Each and every student must submit the form by the end of the day on Friday.", "Each student must submit the form by Friday. (Each and every is a doubled word, and the end of the day on is wordy.)"],
      ["Question 4: What is the recommended length of a sentence and of a paragraph?", "Sentences should average about 17 to 20 words, and any sentence over 40 words should be broken up. A paragraph should not exceed 60 to 100 words."],
      ["Question 5: Why do we avoid I think in technical writing?", "Leaving out the personal introduction and conclusion makes the writing neutral and free of bias."],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 4. Document design, audience recognition and accuracy
// ---------------------------------------------------------------------------
const chapter4 = {
  title: "Chapter 4: Document Design, Audience Recognition and Accuracy",
  summary:
    "The last three traits of technical writing: accessible document design (headings, white space, lists, fonts), recognising a multi-level audience, and accuracy in grammar, spelling and punctuation, followed by patterns of organisation and a checklist for a finished document.",
  theory: [
    H("Accessible document design"),
    P("**Document design** is the way a text looks on the page. A reader decides within a few seconds whether a page looks easy or hard to read. A well designed page lets the reader find the main points quickly, so the design is part of the message."),
    SH("Elements of good design"),
    T(
      ["Element", "What to do", "Why it helps"],
      [
        ["Headings and subheadings", "Give every section a short, clear heading. Use one style for each level.", "The reader sees the structure and can jump to the part they need."],
        ["White space", "Leave margins and gaps between paragraphs and sections.", "A crowded page tires the eyes. Space gives the eyes a rest."],
        ["Lists", "Use bullets for items in no order and numbers for steps in order.", "Items are easy to scan and to count."],
        ["Short paragraphs", "Keep to one idea in each paragraph, about 60 to 100 words.", "Each idea is easy to find."],
        ["Font", "Use a plain font such as Arial or Times New Roman, size 11 or 12.", "Fancy or tiny letters are hard to read."],
        ["Emphasis", "Use bold or italics for a few key words only.", "If everything is highlighted, nothing stands out."],
        ["Alignment and spacing", "Align text to the left and use one line spacing style.", "A steady shape makes reading smooth."],
        ["Visuals", "Place tables, charts and pictures near the text that refers to them, with a title.", "Numbers and ideas are understood faster."],
      ]
    ),
    IMG("white-space-balance", "Three page layouts: a crowded page with no white space, a page with too much empty space, and a balanced page with headings, short paragraphs and margins", "Balance the page: too little white space is crowded, too much looks unfinished, a balanced page is easy to read"),
    BOX("Example: the same message in poor and in good design (scroll to see all)", [
      SH("Poor design: one block of text"),
      P("Our library will change its timings from next month and students should note that the library will open at 8 a.m. and close at 6 p.m. on weekdays while on Saturdays it will open at 9 a.m. and close at 1 p.m. and on Sundays it will remain closed and students who need books must bring their cards and must return books within two weeks or pay a fine of ten rupees for each day."),
      SH("Good design: headings, a list and white space"),
      P("**Notice: new library timings from next month**"),
      T(
        ["Day", "Opens", "Closes"],
        [
          ["Monday to Friday", "8:00 a.m.", "6:00 p.m."],
          ["Saturday", "9:00 a.m.", "1:00 p.m."],
          ["Sunday", "Closed", "Closed"],
        ]
      ),
      P("**To borrow a book**"),
      L([
        "Bring your library card.",
        "Return the book within two weeks.",
        "A fine of Rs. 10 is charged for each day of delay.",
      ]),
      P("Both versions contain the same facts. Only the second can be read in a few seconds."),
    ]),
    TIP("Squint at the page or look at it from a distance. If you can still see the headings, the groups and the key points, the design is working.", "Quick test"),

    H("Audience recognition"),
    P("**Audience recognition** means identifying who will read the document and writing for them. The same facts must be written differently for different readers. In the workplace a document is often read by more than one kind of reader. This is called a **multi-level audience**."),
    SH("Levels of readers around a writer"),
    T(
      ["Direction", "Readers", "What they need"],
      [
        ["Upward", "Executive officer, manager, supervisor", "A short, accurate summary, the result and the action needed. They have little time."],
        ["Lateral", "Peers and colleagues at the same level", "Clear details to cooperate with you, in a friendly and equal tone."],
        ["Downward", "Subordinates and junior staff", "Clear instructions, reasons for the decision and a respectful tone."],
        ["Outward", "Customers, clients and the public", "Politeness, simple language and the benefit to them. They do not know the company's inside terms."],
      ]
    ),
    IMG("multi-level-audience", "The writer at the centre with executive officer, manager and supervisor above, peers, customers and subordinates around", "A workplace document may reach readers above, beside, below and outside the organisation"),
    SH("Types of audience"),
    L([
      "**Primary audience:** the person who acts on the document, often the one it is addressed to.",
      "**Secondary audience:** people who get a copy or need it for information, for example other departments.",
      "**Gatekeeper:** someone who decides whether the document reaches the main reader, such as a manager or a committee.",
      "**Watchdog:** someone who may check the document later, such as an auditor or a lawyer, so it must be accurate and complete.",
    ]),
    BOX("Example: one announcement for three audiences (scroll to see all)", [
      P("**Situation:** The university will close the online result portal for two days for maintenance."),
      SH("To the Vice Chancellor (upward)"),
      P("The result portal will be offline on 12 and 13 December for server maintenance. The work is expected to finish on time and no results will be lost. No action is needed from your office."),
      SH("To the IT team (lateral and downward)"),
      P("Please take a full backup of the result database before 6 p.m. on 11 December. Maintenance starts at 8 a.m. on 12 December. Report any error to the team lead immediately."),
      SH("To students (outward)"),
      P("The result portal will not be available on 12 and 13 December while we improve it. It will work again on 14 December. If you need a result before then, please visit the examination office with your student card."),
      P("The facts are the same. The detail, the action requested and the tone change with the reader."),
    ]),
    SH("Questions to ask about the audience"),
    L(
      [
        "Who will read this, and who else might?",
        "What do they already know about the topic?",
        "What do they want or need from the document?",
        "How will they use it: to decide, to act, to learn or only to keep a record?",
        "What tone and level of language suit them?",
      ],
      true
    ),

    H("Accuracy"),
    P("**Accuracy** means that facts, figures, names, spelling, grammar and punctuation are correct. Mistakes make the reader doubt the writer, and a wrong figure or a wrong date can cause real loss. Accuracy covers two things:"),
    L([
      "**Correct content:** facts, numbers, dates and names checked against the source.",
      "**Correct language:** grammar, spelling and punctuation.",
    ]),
    SH("Common errors"),
    T(
      ["Error", "Incorrect", "Correct"],
      [
        ["Subject and verb do not agree", "The list of items are on the desk.", "The list of items is on the desk."],
        ["Wrong tense", "Yesterday we discuss the plan.", "Yesterday we discussed the plan."],
        ["Misplaced apostrophe", "The students book's were lost.", "The students' books were lost."],
        ["Comma splice", "The report is long, I will read it later.", "The report is long, so I will read it later."],
        ["Its and it's", "The company changed it's policy.", "The company changed its policy."],
        ["Their, there and they're", "Their going to submit the file over their.", "They're going to submit the file over there."],
        ["Spelling", "Recieve the shipment.", "Receive the shipment."],
        ["Wrong word", "The new rule will effect everyone.", "The new rule will affect everyone."],
      ]
    ),
    SH("Proofreading steps"),
    L(
      [
        "Put the document aside for some time and then read it with fresh eyes.",
        "Check facts, figures, dates and names against the source.",
        "Read slowly, or read aloud, so that you hear mistakes.",
        "Check one kind of error at a time: first spelling, then grammar, then punctuation.",
        "Use a spell checker, but do not trust it alone, because it cannot tell their from there.",
        "Ask another person to read it.",
      ],
      true
    ),
    BOX("Practice: correct the errors (scroll to see all)", [
      T(
        ["Sentence with errors", "Corrected sentence"],
        [
          ["The manager and his team is ready for the meeting.", "The manager and his team are ready for the meeting."],
          ["Its important to check the figures before we send them.", "It's important to check the figures before we send them."],
          ["We recieved your letter and will reply in two day.", "We received your letter and will reply in two days."],
          ["The committee have make it's decision.", "The committee has made its decision."],
          ["Their is no need too worry about the delay.", "There is no need to worry about the delay."],
        ]
      ),
    ]),

    H("Patterns of organisation"),
    P("A document is easy to follow when its ideas are placed in a clear order. Choose the pattern that suits the purpose."),
    T(
      ["Pattern", "Order of ideas", "Typical use"],
      [
        ["Chronological", "From the earliest event to the latest", "Incident reports, history, step-by-step instructions"],
        ["Spatial", "From one place to the next, such as left to right or top to bottom", "Describing a machine, a building or a site"],
        ["Order of importance", "Most important first, or most important last", "Reports and news, where decision makers need the key point early"],
        ["Cause and effect", "The cause first, then what it led to", "Explaining failures, accidents or results"],
        ["Problem and solution", "State the problem, then give the solution", "Proposals and recommendations"],
        ["Comparison", "Point by point or option by option", "Choosing between products, plans or methods"],
        ["General to specific", "Main idea first, then details", "Most paragraphs and summaries"],
      ]
    ),
    NOTE("Busy readers such as managers prefer the **direct** order: the main point or result first, then the reasons and the details. Use the indirect order, with reasons before the result, only for bad news that needs to be softened.", "Direct and indirect order"),

    H("Checklist for a finished document"),
    T(
      ["Trait", "Question to ask"],
      [
        ["Clarity", "Are the words familiar and the sentences about 17 to 20 words?"],
        ["Conciseness", "Is every word needed? Are there doubled or meaningless words?"],
        ["Document design", "Are there headings, white space, lists and short paragraphs?"],
        ["Audience recognition", "Does the content, tone and level suit every reader?"],
        ["Accuracy", "Are the facts, grammar, spelling and punctuation correct?"],
      ],
      "Check each trait before sending any document"
    ),
    SCEN("Questions with answers: design, audience and accuracy", [
      ["Question 1: What is white space and why is it important?", "White space is the empty area on a page: the margins and the gaps between paragraphs, headings and lists. It rests the eyes and shows the reader where one idea ends and the next begins. Too little makes the page crowded, and too much makes it look unfinished."],
      ["Question 2: What is a multi-level audience? Give an example.", "A document that is read by more than one kind of reader, at different levels. A report on a plant safety rule may be read by the manager above, colleagues beside, workers below and inspectors outside the organisation."],
      ["Question 3: Why should a report for a manager begin with the result?", "Managers have little time. If the main point comes first, they can decide quickly, and they can read the details only if they need them."],
      ["Question 4: Correct this sentence: Their going to send there reports tomorrow.", "They're going to send their reports tomorrow."],
      ["Question 5: Name five patterns of organisation.", "Chronological, spatial, order of importance, cause and effect, problem and solution. Comparison and general to specific are also common."],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 5. Research and the research proposal
// ---------------------------------------------------------------------------
const chapter5 = {
  title: "Chapter 5: Research and the Research Proposal",
  summary:
    "What research is, why it matters, its types by purpose, approach and objective, how to select a topic, and what a research proposal contains (the TIPOLMOR memory aid), with chapter headings, writing guidelines and a complete sample proposal outline.",
  theory: [
    H("What is research?"),
    P("**Research** is a systematic and organised process of investigating a particular subject in order to discover new information, verify existing knowledge, or solve a problem. It involves collecting data, analysing it carefully and drawing meaningful conclusions."),
    P("Research plays a vital role in academic, scientific and professional fields. It helps in expanding knowledge, improving decision making and promoting innovation."),
    SH("Significance of research"),
    L([
      "It increases knowledge and understanding.",
      "It helps solve real-world problems.",
      "It helps in evidence-based decision making.",
      "It contributes to academic growth.",
      "It encourages critical thinking and creativity.",
    ]),

    H("Types of research"),
    P("Research can be classified in three different ways: by purpose, by approach and by objective."),
    T(
      ["Basis", "Type", "Meaning", "Example"],
      [
        ["Purpose", "Basic research", "Conducted to gain knowledge and understanding without immediate practical application.", "Studying how students learn a second language."],
        ["Purpose", "Applied research", "Focused on solving specific practical problems.", "Testing a new teaching method to improve exam results."],
        ["Approach", "Qualitative research", "Deals with non-numerical data such as opinions, experiences and interviews.", "Interviews with teachers about online classes."],
        ["Approach", "Quantitative research", "Involves numerical data, statistics and measurable variables.", "Marks of 100 students before and after a workshop."],
        ["Approach", "Mixed-method research", "Combines both qualitative and quantitative approaches.", "A survey with scores, followed by interviews to explain them."],
        ["Objective", "Descriptive research", "Describes the characteristics of a population or phenomenon.", "The study habits of first-year students."],
        ["Objective", "Analytical research", "Analyses existing data to interpret facts.", "Examining last five years of results to find a pattern."],
        ["Objective", "Experimental research", "Examines cause-and-effect relations through controlled experiments.", "Two groups, one using a mobile app and one not, then comparing results."],
      ]
    ),

    H("Selecting a research topic"),
    P("Choosing a suitable research topic is a crucial step in the research process. A weak topic leads to a weak study, however hard the researcher works."),
    SH("Strategies for selecting a topic"),
    L(
      [
        "Choose a topic of personal interest.",
        "Identify gaps in previous research.",
        "Ensure availability of data and resources.",
        "Narrow broad topics into specific areas.",
        "Make sure the topic is clear, focused and manageable.",
      ],
      true
    ),
    BOX("Example: narrowing a broad topic (scroll to see all)", [
      T(
        ["Step", "Topic"],
        [
          ["Broad area", "Technology in education"],
          ["Narrower", "Mobile phones and student learning"],
          ["Narrower still", "The use of mobile phones for studying by undergraduate students"],
          ["Final topic", "The effect of mobile phone use on the study habits of undergraduate students at the University of Layyah"],
        ]
      ),
      P("The final topic names the subject (study habits), the factor (mobile phone use), the people (undergraduate students) and the place. This makes it focused and possible to complete."),
      T(
        ["Weak topic", "Why it is weak", "Better topic"],
        [
          ["Education in Pakistan", "Far too broad for one study.", "Reasons for late arrival of students in a rural college."],
          ["Is social media bad?", "A yes or no question with no clear focus.", "The relation between hours of social media use and exam marks of BS students."],
        ]
      ),
    ]),

    H("What is a research proposal?"),
    P("A **research proposal** is a formal academic document that outlines the plan for conducting research. It explains what the researcher intends to study, why it is important and how the study will be conducted."),
    SH("Purpose of a research proposal"),
    L([
      "To clearly present research ideas.",
      "To obtain approval from supervisors or institutions.",
      "To plan and organise the research process.",
    ]),

    H("Main components: TIPOLMOR"),
    P("A research proposal has eight main components. The first letters make a memory aid, **TIPOLMOR**."),
    T(
      ["Letter", "Component", "What it contains"],
      [
        ["T", "Title", "A short and clear name for the study."],
        ["I", "Introduction", "Background of the topic and why it matters."],
        ["P", "Problem statement", "The exact problem the study will address."],
        ["O", "Objectives", "What the study aims to achieve."],
        ["L", "Literature review", "What earlier researchers have already found."],
        ["M", "Methodology", "How the data will be collected and analysed."],
        ["O", "Expected outcomes", "The results or benefits the study may produce."],
        ["R", "References", "All the sources used, in a standard style."],
      ],
      "T I P O L M O R"
    ),

    H("Research proposal chapters and headings"),
    P("A typical research proposal has the following structure."),
    T(
      ["Chapter", "Headings"],
      [
        ["Chapter 1: Introduction", "Background of the study, problem statement, research objectives, research questions, significance of the study."],
        ["Chapter 2: Literature review", "Review of previous studies, theoretical framework."],
        ["Chapter 3: Research methodology", "Research design, population and sample, data collection methods, data analysis techniques."],
        ["References", "All sources used in the research, properly cited using a standard referencing style (APA, MLA and so on)."],
      ]
    ),
    SH("How the parts fit together"),
    L([
      "The **problem statement** leads to the **objectives**, and the objectives lead to the **research questions**.",
      "The **literature review** shows what is already known and what is missing.",
      "The **methodology** explains how the questions will be answered.",
      "The **expected outcomes** show what the answers may bring.",
    ]),

    H("How to write a research proposal"),
    P("Writing a research proposal requires careful planning and clarity."),
    SH("Key elements"),
    L([
      "A clear and specific title.",
      "A well-defined research problem.",
      "Logical objectives and research questions.",
      "A relevant literature review.",
      "An appropriate research methodology.",
      "Proper citations and references.",
    ]),
    SH("Best practices"),
    L([
      "Use clear and formal academic language.",
      "Follow proper formatting guidelines.",
      "Avoid plagiarism.",
      "Proofread before submission.",
      "Maintain a logical flow and structure.",
    ]),
    BOX("Sample research proposal outline (scroll to see all)", [
      P("**Title:** The Effect of Mobile Phone Use on the Study Habits of Undergraduate Students at the University of Layyah"),
      SH("Chapter 1: Introduction"),
      P("**Background of the study:** Mobile phones are now used by almost every student. They give quick access to books, videos and classmates, but they can also take time away from study. Teachers often say that students are distracted, yet there is little local evidence to support it."),
      P("**Problem statement:** It is not clear whether mobile phone use helps or harms the study habits of undergraduate students at the University of Layyah."),
      P("**Objectives:** (1) To find how many hours students spend on mobile phones each day. (2) To find how much of that time is used for study. (3) To compare the study hours of heavy and light phone users."),
      P("**Research questions:** (1) How many hours a day do students use mobile phones? (2) Is there a difference in study hours between heavy and light users?"),
      P("**Significance:** The results may help teachers and parents guide students on healthy phone use."),
      SH("Chapter 2: Literature review"),
      P("Earlier studies on screen time and academic performance will be reviewed to see what has been found and which gaps remain, especially for students in small university campuses. A theoretical framework will explain how distraction affects attention."),
      SH("Chapter 3: Research methodology"),
      P("**Research design:** Quantitative and descriptive."),
      P("**Population and sample:** All undergraduate students of the university; a sample of 100 students chosen at random from all departments."),
      P("**Data collection:** A questionnaire with questions on daily phone hours, study hours and the purpose of phone use."),
      P("**Data analysis:** Averages, percentages and a comparison of the two groups, shown in tables and charts."),
      SH("Expected outcomes"),
      P("A clear picture of phone use among students and recommendations for balanced use."),
      SH("References"),
      P("All books, articles and websites used will be listed at the end in APA style."),
    ]),
    NOTE("A research proposal is a plan, not a result. It says what will be done and how, so it is written in the future tense (will collect, will analyse).", "Remember"),
    P("**Conclusion:** Research is an essential academic activity that contributes to knowledge development and problem solving. A well-structured research proposal ensures that the study is organised, focused and meaningful. Proper planning and clear presentation are key to successful research work."),
    SCEN("Questions with answers: research and the proposal", [
      ["Question 1: Define research and give two reasons why it is important.", "Research is a systematic and organised process of investigating a subject to discover new information, verify existing knowledge or solve a problem. It is important because it expands knowledge and helps in evidence-based decision making."],
      ["Question 2: What is the difference between basic and applied research?", "Basic research gains knowledge and understanding without immediate practical use. Applied research focuses on solving a specific practical problem."],
      ["Question 3: What is TIPOLMOR?", "A memory aid for the eight components of a research proposal: Title, Introduction, Problem statement, Objectives, Literature review, Methodology, Expected outcomes and References."],
      ["Question 4: Which kind of research is a survey with marks and averages, and which is a set of interviews?", "A survey with marks and averages is quantitative research because the data are numbers. Interviews are qualitative research because the data are opinions and experiences."],
      ["Question 5: Make this topic narrower: Social media.", "The effect of Instagram use on the sleeping hours of first-semester students of the University of Layyah. It now names the factor, the effect, the people and the place."],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 6. Oral communication and presentation planning
// ---------------------------------------------------------------------------
const chapter6 = {
  title: "Chapter 6: Oral Presentation, Planning and Delivery Methods",
  summary:
    "What an effective presentation is, its six purposes, audience and locale analysis, organising the content into introduction, body and conclusion, patterns for the body, openings and closings, preparing an outline, the basic steps of delivery and the four methods of speech delivery.",
  theory: [
    H("Effective presentation"),
    P("An effective presentation is an integral part of modern communication. It is as important as the written presentation. It is an art to express one's idea completely and successfully before the audience. Through effective presentation the sender is able to convince the receiver and achieves the desired result. At every stage of life, an effective presentation enhances the excellent effect."),
    P("Good oral communication skills help employees work more competently. They can make judgments about others giving a speech both consciously and subconsciously, and those who stand out can capture the attention of listeners. Many renowned speakers have admitted to practising extensively and studying other famous speakers. A bit of extra preparation can help people make the most of their opportunities to deliver speeches."),
    SH("What is a presentation?"),
    P("In business we speak in different ways: casual chatting, phone conversations, panel discussions, interviewing, seminars, meetings, speeches, question and answer periods and presentations. These activities fall into two groups: those you speak to one person and those you are talking to a group of people. Usually you speak to a group in one of three situations:"),
    L([
      "When you are doing most of the speaking yourself, either to inform or to persuade.",
      "When you have more give and take with your audience, to answer questions.",
      "When your audience is doing most of the talking, to solve problems as a group.",
    ]),
    SH("Main points of an effective presentation"),
    L(
      [
        "Defining purpose and establishing your objective.",
        "Analysing the audience and the locale.",
        "Organising the contents.",
        "Preparing an outline of the presentation.",
        "Use of visual aids.",
        "Nuances of speech delivery: the four methods of speech delivery.",
        "Body language and effective presentation (kinesics).",
      ],
      true
    ),

    H("Defining the purpose"),
    P("The purpose is the essential feature of your presentation. As in any communication, you go through the first step: establishing your objective. There are six primary purposes of effective display:"),
    T(
      ["Purpose", "What the speaker does", "Example"],
      [
        ["To inform", "Gives facts and explains.", "A talk on the new exam schedule."],
        ["To analyse", "Examines a topic and its parts.", "A study of why results dropped."],
        ["To entertain", "Gives enjoyment.", "A welcome speech at a farewell party."],
        ["To inspire or motivate", "Encourages people to do their best.", "A speech to a sports team before a match."],
        ["To activate or stimulate", "Moves the audience to act.", "A call to join a blood donation drive."],
        ["To persuade", "Changes opinions or beliefs.", "A sales pitch to adopt a new software."],
      ]
    ),
    P("The speaker must determine the purpose of the speech. He should decide whether his speech means providing information, persuading the people, or just establishing goodwill at social gatherings. A presentation may be arranged to explain a particular issue, to bring general awareness among the workers, to teach the purpose, or to divert your target mass in a specific direction. In short, the exhibition includes identifying, analysis, explanation and persuasion of the subject. An oral presentation's primary purpose is to present subject content in an organised, concise and effective manner to a live audience."),

    H("Analysing the audience and the locale"),
    P("A thorough understanding of your audience is essential for an effective presentation. The speaker must analyse the audience. He must know whether he is addressing literate, young or old people, and understand the place where the group is to be addressed. Before the presentation, it is essential to understand the place of presentation (locale), such as the size of the group, the physical environment and the layout. You should also have an idea about your presentation locale. Contact your host or organiser to get information about the physical setting of your particular location. This advantage of knowing about the site is that you can ask for alternatives and set your helping materials such as visual aids accordingly."),
    SH("What to know about the audience"),
    L([
      "The audience's level, knowledge, background, culture and expectations.",
      "The true nature of the audience.",
      "Whether they have earlier knowledge of your subject individually.",
      "What their interests, likes and dislikes are.",
      "Whether their attitude is hostile or friendly.",
    ]),
    P("Taking an audience-centred approach is important because a speaker's effectiveness will be improved if the presentation is created and delivered appropriately. The more you know and understand your audience's background and needs, the better you can prepare your speech. Analyse the audience to find the mix of ages, genders, sexual orientation, educational levels, religions, cultures, ethnicities and races. The physical environment includes the room size, the seating, the equipment and the lighting."),
    NOTE("To conclude, the basic theme of communication is to inform, convince or entertain. Despite the purpose, you should get an idea that you want to share your views with them. You have to prepare your material accordingly, keeping in mind what they want to know and what you should like to tell them.", "Audience first"),

    H("Organising the contents"),
    P("It becomes essential for the speaker to organise the content logically. After collecting the necessary facts, the speaker should organise it and write the draft of the speech. It should be in an appropriate order. The content can be arranged or organised in three categories:"),
    L([
      "Introduction",
      "Main body",
      "Conclusion",
    ], true),
    IMG("presentation-structure", "A presentation split into introduction, main body and conclusion, each with its parts", "The three parts of a presentation and what each one holds"),
    SH("Introduction"),
    P("This section of the presentation talks about the relevance of the topic, the definition of the topic, or starts with any suitable quote, anecdote or brief story of the topic which leads the audience to understand the importance of the topic. An introduction is a must. It gives basic knowledge and engages the audience by motivating them to listen to the topic of their interest. The most straightforward introduction is best. Let the audience know who you are and what your presentation is going to be about."),
    P("The introduction should give a preview of what you will say and gain the listeners' attention with a statement of purpose. Make it clear whether you wish to accept questions as they arise during the presentation, thereby breaking your flow and risk being sidetracked, or followed by an introduction to gain the audience's attention quickly. You want the audience to follow your thought process into the presentation's body as you lead them."),
    P("The introduction should consist of accurate pronunciation of your name, your qualification, subject, the type of presentation (informational, instructional, problem-solving and so on), background information, the main ideas to be covered in the body and the procedure to be followed."),
    SH("Grabbing the audience's attention"),
    P("Suppose you feel comfortable opening a presentation on a humorous note, delicate. But don't feel you have to. You can grab your audience's interest in one of two practical ways: by referring to the unusual or by referring to the familiar."),
    T(
      ["Way", "How it works", "Examples"],
      [
        ["Referring to the unusual", "Tell people something they did not know, to arouse their curiosity.", "A rhetorical question you do not expect to be answered; a promise of what your presentation will deliver; a vivid image; a startling example or story; an important statistic."],
        ["Referring to the familiar", "Tell people something their listeners already know. You appeal to their understanding of the topic, the occasion, the relationship between the audience and the topic, or someone familiar to the audience.", "A shared event, a place they know, a problem they face each day."],
      ]
    ),
    BOX("Opening examples for one topic (scroll to see all)", [
      P("**Topic:** Time management for university students"),
      T(
        ["Technique", "Opening"],
        [
          ["Rhetorical question", "How many of you finished all your assignments before the night of the deadline?"],
          ["Startling statistic", "A student who wastes just two hours a day loses over 700 hours in a year, which is about thirty full days."],
          ["Vivid image", "Imagine it is midnight, the report is due at eight, and you have written only the title."],
          ["Promise", "In the next ten minutes you will learn three habits that give you an extra hour every day."],
          ["Familiar reference", "We have all sat in this very hall with an exam in the morning and a pile of notes untouched."],
        ]
      ),
    ]),
    SH("Main body"),
    P("The central part of the presentation is the body. The body must expound, explain, support and defend the thesis revealed in the introduction. It must cover all the main points. Use examples and illustrations for statements that are difficult for the audience to follow. Graphic images and other visual aids help clarify your message and add colour and credibility. The body of the presentation contains the central idea. The speaker must make the body of the production logically organised. It must support with relevant examples, details and data. The following are different ways to manage the main body of the presentation:"),
    T(
      ["Pattern", "How the body is arranged", "Example topics"],
      [
        ["Chronological", "The details of the main body in order which they are, serially. You can arrange the whole presentation using this pattern.", "The profile of your institute, the changing face of the earth, the history of sports."],
        ["Categorical", "Preferred for many topics. Based on subordination and coordination, you can divide your topic into topics and subtopics.", "The role of advertising, environmental protection, the importance of professional presentation."],
        ["Cause and effect", "Used whenever there is a relationship between cause and effect. You explain the reasons for different circumstances and then focus on the possible consequences of these causes.", "Impact of cinema on children, internet-borne crime, smoking in children."],
        ["Problem and solution", "Beneficial for a persuasive presentation. Divide your display into two main parts: the first analyses the problem and its causes and effect, then you focus on the resolution of the problem.", "Population explosion, traffic jams."],
        ["Contrast and comparison", "Placing two or more things side by side to show how they differ and how they are alike.", "Online and classroom learning."],
      ]
    ),
    NOTE("In all the following methods, you can support your opinions and ideas using suitable examples, illustrations, statistics and analogy.", "Supporting the body"),
    SH("Conclusion"),
    P("This section contains a summary of the points which are discussed in the body. It should answer the question, So what? It should repeat the main points, use different words and summarise the main topic and argument. End decisively so that no one is in any doubt that your presentation is finished. It is also the time to ask the audience whether they have any questions. The presentation should be concluded with a well-planned ending. The following four points should be considered as you plan your ending:"),
    T(
      ["Point", "Meaning"],
      [
        ["Summary", "A clear summary of your purpose and main points will ensure that the audience gets the big picture. Tell the audience what information you conveyed. Use the exact keywords used in the body and make a fresh, brief and concise restatement of your case. It helps drive your main points home and ensures that your listeners have a clear understanding of your intentions."],
        ["Appeal", "If your speech is designed to arouse an emotional reaction, plan to make a strong appeal in conclusion."],
        ["Recommendation", "If your presentation includes a recommendation, particularly one requiring action on the part of the audience, state it clearly as part of your ending. Plan the precise words you will use in your recommendation. Let your audience know what you want them to say."],
        ["Ending statement", "Make a crisp statement and end your presentation on a positive note. Plan and memorise the ending word, then use it."],
      ]
    ),
    SH("Effective openings and closings"),
    P("The final differences between writing and speaking have to do with openings and closings. When you speak, you neither start nor finish as quickly as you do when you write. What sounds natural in writing sounds abrupt in speaking. Your outline should consist of your speech's three main parts: the introduction, the body and the conclusion. As the Audience Memory blend illustrates, your audience will most likely remember your first and last words. If you ever doubt that your audience listens at the end of a presentation, try saying So, in conclusion, or To summarise, then and watch nonverbal signs from your audience. Instead, use a robust transitional phrase, such as In conclusion or To summarise, to introduce your closing remarks. Then, for a formal presentation, close with a restatement of your main points. For other options, you could close concerning your opening, the rhetorical question, the promise, the image, story, or statistic you used to grab your audience's attention."),

    H("Preparing an outline"),
    P("Preparing an outline is a mechanical framework in which the presentation contents are arranged to deliver. A strategy serves as a guide to show the speaker the right path for the production. Knowing the outlined sequence like introduction, body and content well in advance gives the speaker the confidence to control his or her speech anxiety."),
    P("Outlining is an essential first step in speech-making. It allows you to ensure your speech flows smoothly and covers all your main points. It works as a road map for you. So consuming your time in the development of an outline never goes unrewarded. The outline you organised can be used as a script. But be prepared enough to diverge from it if the audience's response is different from what you were expecting."),
    SH("Why make an outline?"),
    L([
      "An outline helps you group ideas into main points and see their logical connections.",
      "It is essential to create an outline before you deliver your speech, as it will act as your guide to effectively sequence your information and ensure you touch on all your main points.",
      "Outlining allows you to ensure your speech flows smoothly.",
      "Use an outline as a tool for the delivery of extemporaneous speaking.",
    ]),
    SH("Purpose of an outline"),
    L([
      "It helps you organise your ideas.",
      "Group ideas into main points.",
      "Present your material in a logical form.",
    ]),
    BOX("Sample outline of a presentation (scroll to see all)", [
      P("**Topic:** Safe use of the internet for students"),
      P("**Purpose:** To inform and to persuade"),
      SH("I. Introduction"),
      L([
        "Attention getter: a startling statistic about online fraud.",
        "Statement of purpose: why safe use matters to every student.",
        "Preview: three rules of safe use.",
      ]),
      SH("II. Body"),
      L([
        "Rule one: protect passwords. Use long passwords and never share them.",
        "Rule two: check before you click. Look at the sender and the link.",
        "Rule three: keep personal details private. Do not post your address or card numbers.",
      ]),
      SH("III. Conclusion"),
      L([
        "Summary: passwords, links and privacy.",
        "Appeal: start today by changing one weak password.",
        "Ending statement: your safety online is in your hands.",
      ]),
    ]),

    H("Methods of speech delivery"),
    P("Four presentation methods can help you balance too much and too little formality when giving a public speech. These are:"),
    L([
      "Impromptu method",
      "Extemporaneous method",
      "Manuscript reading method",
      "Memorisation method",
    ], true),
    SH("1. Impromptu method"),
    P("The impromptu method is an informal style of presentation. It refers to the speech made without rehearsal or preparation. Impromptu speaking is the presentation of a short message without preparation. Impromptu speeches often occur when someone asks you to say a few words or give a toast on a special occasion. Self-introductions in group settings are examples of impromptu speaking. For example: Hi, my name is Ali, and I'm a volunteer with the Homes for the Brave programme. Another example of impromptu speaking occurs when you answer a question: What did you think of the documentary?"),
    P("The advantage of this kind of speaking is that it is spontaneous and responsive in an animated group context. The disadvantage is that the speaker gives little or no time to contemplate the central theme of his or her message. As a result, the message may be disorganised and difficult for listeners to follow. Here is a step-by-step guide that may be very useful and effective if you are called upon to give an impromptu speech in public."),
    T(
      ["Characteristics and advantages", "Disadvantages"],
      [
        ["Take a moment to collect your thoughts and plan the main point you want to make. Thank the person for inviting you to speak. Deliver your message, making your main point as briefly as you can. Thank the person again for the opportunity to speak. Impromptu speeches are successful when they are brief and focus on a single point. In an impromptu speech, spontaneity and command over casual language is used.", "It lacks organised development of ideas because of the shortness of time. It has no supplementary material to demonstrate the speech. It has frequent use of vocalised pauses. Inadequate proficiency in the use of language may cause failure in the presentation."],
      ]
    ),
    SH("2. Extemporaneous method"),
    P("Extemporaneous speaking is the presentation of a carefully planned speech. It presents directly and spontaneously. It does not require detailed preparation but to look at the main points and state the audience's form. It requires the best oratory skills. This type of speech is in a conversational manner using brief notes. Using notes rather than a complete manuscript, the extemporaneous speaker can maintain eye contact with the audience. Speaking spontaneously has some advantages: the speaker will be perceived as knowledgeable and credible. Also, your audience is likely to pay better attention to the message as it is engaging both verbally and nonverbally."),
    T(
      ["Advantages", "Disadvantages"],
      [
        ["In the spontaneous speech, everything is pre-thought and preplanned in detail. There is no need to learn every word and line by rote. It allows more eye contact with the audience. It makes your presentation livelier, compelling and memorable. It enables one to move freely with ease.", "If preparation is inadequate, you can get lost and find yourself uncomfortable. If you rely on note cards and start reading, your speech will lose its spontaneity. It requires good practice and planning in preparing your presentation."],
      ]
    ),
    SH("3. Manuscript reading method"),
    P("Manuscript speaking is the word-for-word recitation of a written message. It is the most accessible presentation model since the speaker must not recollect any matter and no need to memorise it. In a manuscript speech, the speaker maintains his or her attention on the printed page except for visual aids. He reads parts of his remarks from the manuscript that he has prepared. This method suits the speaker who delivers a long speech. The speaker should not lose eye contact and should keep on looking at the audience during the session."),
    P("**Example:** Today speakers on television often read from a script passing in front of the camera lens. While preparing the manuscript for reading, some speakers usually leave a large margin at the left of the page. In that wide margin, pronunciation aids or suggestions regarding where to look in an audience are noted."),
    T(
      ["Advantages", "Disadvantages"],
      [
        ["It is a permanent and accurate record of whatever you have to say. There is no chance of tampering with the facts and figures. The material is organised systematically.", "The prominent problem people have in writing manuscript speeches is with wording. They use written style instead of spoken style. A speech in a composed manner looks fine on paper but sounds stilted and pompous. There is not much scope for audience contact."],
      ]
    ),
    SH("4. Memorisation method"),
    P("Memorising means learning by heart. It does mean to memorise an entire speech. Some speakers remember their addresses and deliver them to the audience. The speaker should take care that his address must look natural and not artificial. Memorised speaking is the rote recitation of a message that the speaker has committed to memory. Actors, of course, recite from memory whenever they perform from a script in a stage play, television programme or movie scene. When it comes to speeches, memorisation can help when the message needs to be exact and the speaker does not want to be confined by notes."),
    P("The advantage of memorisation is that it enables the speakers to maintain eye contact with the audience throughout the speech. Being free of notes means you can move freely around the stage and use your hands to make gestures. If your speech uses visual aids, this freedom is even more of an advantage. However, there are some actual and potential costs. Unless you also plan and memorise every vocal cue, gesture and facial expression, your presentation will be flat and uninteresting, and even the most fascinating topic will suffer. You might end up speaking in a monotone or a sing-song repetitive delivery pattern."),
    T(
      ["Advantages", "Disadvantages"],
      [
        ["It is easy for the speaker to maintain eye contact with the audience. It is possible to finish the speech in the allotted time. The speaker can quickly move by using appropriate non-verbal communication. It adds extra value to the speech if the speaker uses non-verbal communication.", "Memorisation requires too much time. If the speaker forgets one idea, usually it destroys the whole presentation. No flexibility or adaptability is possible. The speaker cannot face unexpected situations, such as the audience's reaction. This type of delivery can make your presentation dull and monotonous."],
      ]
    ),
    T(
      ["Method", "Preparation", "Eye contact", "Best used for"],
      [
        ["Impromptu", "None", "High", "Short remarks, toasts, answering a question"],
        ["Extemporaneous", "Planned, brief notes", "High", "Most business and classroom presentations"],
        ["Manuscript", "Full written text", "Low", "Exact wording needed: policy statements, news reading"],
        ["Memorisation", "Learned by heart", "High", "Short, polished speeches, such as a ceremony address"],
      ],
      "The four methods compared"
    ),

    H("Basic steps for delivery of a presentation"),
    P("Three steps help a speaker deliver a presentation well: strategy, structure and style."),
    T(
      ["Step", "Meaning", "What to do"],
      [
        ["Strategy", "The plan for facing the audience.", "Understand the purpose of your message. Ask who the audience is and what they need. Decide your role: advocate, coach or teacher. Stay on the topic, research it well and keep to your main objective."],
        ["Structure", "A flexible and fluent arrangement of the message.", "Know exactly what you want to say. Arrange your ideas logically, from introduction to conclusion, so that the audience can follow them easily. Keep your objectives in mind at every point."],
        ["Style", "The way you deliver the material so that it is effective.", "Organise your thoughts and gain the attention of the audience, then hold it. Speak about your topic with balanced passion and a friendly tone. Do not show nervousness or use an embarrassing tone. Present advantages first and then the threats and alternatives."],
      ]
    ),
    TIP("After each practice, ask a friend one question: what was the one thing you remember from my talk? If the answer is not your main point, improve the structure.", "Test your delivery"),
    SCEN("Questions with answers: presentation planning and delivery", [
      ["Question 1: Name the six primary purposes of a presentation.", "To inform, to analyse, to entertain, to inspire or motivate, to activate or stimulate and to persuade."],
      ["Question 2: What should a speaker know about the audience and the locale?", "The audience's level, knowledge, background, culture and expectations, their interests and whether they are friendly or hostile. About the locale: the size of the room, seating, equipment and lighting, so that visual aids can be planned for the place."],
      ["Question 3: Which pattern of the body suits the topic Traffic jams in our city?", "The problem and solution pattern. The first part explains the problem and its causes and effects, and the second part gives the solutions."],
      ["Question 4: Name the four points to consider while planning the ending.", "Summary, appeal, recommendation and an ending statement."],
      ["Question 5: Which method of delivery is best for a classroom presentation and why?", "The extemporaneous method. It is planned with brief notes, so the speaker is organised, keeps eye contact and sounds natural, without the risks of forgetting a memorised line or reading a manuscript."],
      ["Question 6: Write an impromptu answer of four sentences when asked: What did you think of the seminar?", "Thank you for asking. The main thing I liked about the seminar was how clearly the speaker used real examples. The part on time planning was the most useful for me, and I will start using it this week. Thank you again for the chance to share my view."],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 7. Visual aids and non-verbal communication
// ---------------------------------------------------------------------------
const chapter7 = {
  title: "Chapter 7: Visual Aids and Non-Verbal Communication",
  summary:
    "The use and importance of visual aids, the five kinds (overhead slides, PowerPoint, white or blackboard, charts, video and handouts) with guidelines for each, and the factors of oral presentation: kinesics, paralinguistics, proxemics with the four distance zones, and chronemics.",
  theory: [
    H("Use of visual aids"),
    P("Preparing an effective presentation involves more than structure and delivery. Another important consideration is what kind of visual aids to use. Some displays may require visual aids. In such cases, the speaker must make, in advance, arrangements of the visual aids. Remember the Chinese proverb: a picture is worth a thousand words. It means the visual medium is the best medium of presentation. Visual aids may be used as notes to emphasise and clarify the points of the topic."),
    P("Visual aids play a vital role in the presentation. It will be best if you use these aids according to the knowledge of the people. Audience having less knowledge do not confuse them by using complex aids. It would help if you chose the right aids for the right people. It will be understandable for them. Thus, every person differs from another person in knowledge."),
    SH("Importance of visual aids"),
    L([
      "Demonstrate key points.",
      "Increase audience interest.",
      "Increase the impact of the message.",
      "Help listeners retain information.",
      "Help present ideas without depending on notes.",
      "Use simple and easy language for the understanding of the audience.",
    ]),
    P("Herodotus rightly says that people trust their own eyes less than their ears. Visual aids are an essential role in making your presentation compelling and impressive. These visual aids must be used for the help of the audience."),
    TIP("A good slide holds one idea. If you need to say sorry for the small writing, the slide has too much on it.", "Rule of thumb"),

    H("Different types of visual aids"),
    P("There are many kinds of visual aids. Use the following visual aids in your presentations to make them effective and impressive. These can be grouped into six kinds:"),
    L([
      "Overhead projector slides",
      "PowerPoint presentations",
      "White or blackboard",
      "Charts",
      "Video DVD or VHS",
      "Handouts",
    ], true),

    SH("1. Overhead projector slides"),
    P("An overhead projector is a machine for projecting a slide image on a wall, screen or board. It is a handy tool found in most lectures and seminar rooms. It is an effective alternative to the blackboard. The general principles are:"),
    L([
      "Show only the required information.",
      "Keep transparencies organised.",
      "Separate the transparencies using a sheet of paper.",
      "Use a pointer on the screen.",
      "Be ready with your notes in case of power failure.",
      "Use larger fonts and avoid ornamental fonts.",
      "Use a pencil or pen on the transparency to draw the audience's attention to a specific item.",
      "Make yourself familiar with the operations of the overhead projector.",
      "Avoid giving your audience too many texts or overly complicated diagrams.",
    ]),

    SH("2. PowerPoint presentations"),
    P("PowerPoint is probably now the most commonly used form of visual aid. It can help you in your presentation, but poorly used, it can have the opposite effects. The general principles are:"),
    L([
      "Be familiar with the operation of the slide show.",
      "Transfer your file to the hard disk.",
      "Keep a printed copy of the slides.",
      "Do practice your presentation.",
      "Check the computer system before loading.",
      "Make known yourself with the process of the slides.",
    ]),
    P("There is no doubt that the use of PowerPoint is the most effective and influential way of presentation. It plays a vital role in making presentations effective and result oriented."),

    SH("3. White or blackboard"),
    P("The white or blackboard can be very useful to explain the sequence of ideas or routines, particularly in the sciences. Use them to clarify your title or to record your key points as you introduce your presentation. The general principles are:"),
    L([
      "Clean the board well before starting and check the condition of the marker.",
      "Stand to the side as you write.",
      "Check the board before starting.",
      "Keep contents which you may want to refer to again.",
      "Write large letters.",
      "Divide the boards into columns and write legibly.",
      "Don't face the board while talking to the audience.",
      "Give the audience enough time for writing down what is on the board.",
      "Make sure your audience has taken down a reference before rubbing it off.",
    ]),

    SH("4. Charts"),
    P("Various kinds of charts include flip charts, cardboard charts and desk-top charts. Charts are the less complex type of presentation equipment as they require no electricity or wires and can be used in a small group. A flip chart comprises a pad of pieces of paper, a stand, and markers. The flip-chart can be flipped over the flip chart or ripped off and attached to the wall. A cardboard chart stands alone because it is pinned on sturdy cardboard. It may be of any size you wish. This kind of chart is appropriate only when you are presenting to a small number of people. Overall, the charts' main advantage is the lighting: you can keep the room well illuminated and maintain eye contact with your audience, whether you're showing standard or informal charts prepared in advance or during the presentation. Another advantage of charts is their lack of technology. They have no electrical parts that might break down."),
    L([
      "Make your writing clear and readable.",
      "Make your diagrams as simple as possible.",
      "Write in large letters.",
      "Use different coloured markers.",
      "Use only one side of the chart.",
    ]),

    SH("5. Video DVD or VHS"),
    P("Video gives you a chance to show visual information. It uses to bring movement, pictures and sound into your presentation. Always make sure the clip is directly relevant to your content. Tell your audience what to look for. Avoid showing any more film than you need. These are the general principles for using video as a tool:"),
    L([
      "The video must be directly relevant to your content.",
      "Use video to bring movement and sound into your presentation.",
      "The clip must be clearly relevant to your content.",
      "The result of the video must be evident with clear sound.",
    ]),

    SH("6. Handouts"),
    P("Handouts are the other kind of visual aid. Handouts have one enormous advantage over them. They provide a copy of your ideas. They allow the audience to take them away with them. But they have a huge disadvantage: you cannot control your audience's reading ahead of you. To overcome this disadvantage, use handouts in these four ways:"),
    L([
      "Give summary handouts only at the end of the presentation.",
      "Use handouts only for the very detailed data relevant to your content.",
      "Give complex data on a slide or chart. Give these complex-data handouts only when you get to your presentation point when you are discussing them.",
      "Avoid passing around a single copy of a handout so that people are seeing it at different times.",
    ]),
    P("Some presenters use handouts to encourage people to take notes."),
    T(
      ["Visual aid", "Best for", "Main care needed"],
      [
        ["Overhead slides", "Showing prepared diagrams and text.", "Keep a backup for power failure; large fonts."],
        ["PowerPoint", "Most business and classroom talks.", "Check the equipment and practise; avoid crowded slides."],
        ["White or blackboard", "Step-by-step explanations, formulas, sequences.", "Write large and do not talk to the board."],
        ["Charts", "Small groups and rooms where lights must stay on.", "Clear writing; one side only."],
        ["Video", "Showing movement, real events and sound.", "Short, relevant clip with clear sound."],
        ["Handouts", "Detailed data the audience will keep.", "Give at the right time so that they do not read ahead."],
      ],
      "Choosing a visual aid"
    ),
    BOX("Example: planning slides for a 10-minute talk (scroll to see all)", [
      P("**Topic:** Safe use of the internet for students"),
      T(
        ["Slide", "Title", "Content on the slide", "Spoken by the presenter"],
        [
          ["1", "Safe use of the internet", "Title, name, date", "Greeting and the opening question"],
          ["2", "Why it matters", "One statistic about online fraud", "A short story of a student who lost an account"],
          ["3", "Rule 1: protect passwords", "Three short points", "Explains how to make a strong password"],
          ["4", "Rule 2: check before you click", "Picture of a fake link", "Shows what to look for"],
          ["5", "Rule 3: keep details private", "Three short points", "Gives examples of safe and unsafe posts"],
          ["6", "Summary", "Three rules in three lines", "Asks the audience to change one habit today"],
        ]
      ),
      P("Each slide has a short heading and no more than three or four lines, so the audience listens to the speaker instead of reading."),
    ]),

    H("Factors of oral presentation"),
    P("The non-verbal aspect of oral presentation is not deliberate and conscious as verbal communication. Instead, it is subtle and spontaneous. Non-verbal communication refers to all communication that occurs without the use of words, either spoken or written. The main factors of oral presentation are:"),
    T(
      ["Factor", "Meaning"],
      [
        ["Kinesics", "The study of body movements: face, eyes, posture and gestures."],
        ["Paralinguistics", "The study of the voice: pitch, rate, volume and tone."],
        ["Proxemics", "The study of the space around us and the distance kept from others."],
        ["Chronemics", "The study of time: punctuality, pace and the way time is used."],
      ],
      "Four factors of non-verbal communication"
    ),

    SH("Kinesics"),
    P("Kinesics is the study of the body's physical movements. Nodding your head, blinking your eyes, shrugging shoulders and other physical activities are all forms of communication. Some deliberately intended to communicate, as when you nod your head for acceptance. Understanding non-verbal cues will develop your ability to use them in your presentations."),
    P("**Facial expression and gestures:** The eyes and face are beneficial means of communicating non-verbally. They can reveal hidden emotions, including fear, joy, surprise, anger, confusion, etc. Gestures and actions are also forms of communication. Posture and body movements convey a message. Gestures and facial expressions can show self-confidence, status or interest."),
    L([
      "Eyes are the windows of the soul and enhance verbal communication.",
      "Shifty eyes, beady eyes and a look of lack of concentration suggest weakness.",
      "An honest person tends to look you straight in the eye when speaking.",
      "At least listeners accept it like that.",
    ]),
    SH("Eye contact"),
    P("The study of the role of eye contact in non-verbal communication is called oculesics. Eye contact is a natural and powerful form of nonverbal communication. The direct stare of the sender of the message conveys sincerity and openness. It excites a feeling of trust. Downward glances are generally connected with modesty. Eyes rolled upward are associated with fatigue."),
    T(
      ["Common facial gesture", "Meaning"],
      [
        ["Frowns", "Unhappiness, anger"],
        ["Smiles", "Happiness"],
        ["Sneers", "Dislike, disgust"],
        ["Clenched jaws", "Tension, anger"],
        ["Pouting lips", "Sadness"],
      ],
      "Common facial gestures"
    ),
    BOX("Practical advice for body language during a presentation (scroll to see all)", [
      T(
        ["Part of the body", "Do", "Avoid"],
        [
          ["Eyes", "Look at different people in the room for two or three seconds each.", "Staring at the floor, the screen or your notes the whole time."],
          ["Face", "Smile naturally at the opening and when it suits the topic.", "A blank or tense face throughout."],
          ["Hands", "Use open hand gestures to stress a point.", "Hiding hands in pockets, crossing arms, fiddling with a pen."],
          ["Posture", "Stand straight with weight on both feet.", "Leaning on the table, swaying or slouching."],
          ["Movement", "Take a few purposeful steps when you move to a new point.", "Pacing back and forth without a reason."],
        ]
      ),
    ]),

    SH("Paralinguistic (voice)"),
    P("Even those of us who are sensitive to the implications of body language do not always realise the importance of what the scholars call paralanguage: the sound of the voice. Voice can tell you a great deal about the speaker's emotional state. Even when the speaker's words are muffled, listeners can still ascertain the speaker's emotions. The most important aspect of voice seems to be inflexion. Variations in volume, rate and pitch making you sound more expressive. One study showed that mono-pitch decreased understanding by more than 10 per cent."),
    T(
      ["Voice quality", "Effect on the audience", "Tip"],
      [
        ["Volume", "Too soft is not heard; too loud is tiring.", "Speak so that the person in the last row can hear you comfortably."],
        ["Rate", "Too fast is confusing; too slow is boring.", "Slow down for important points and numbers."],
        ["Pitch", "A flat pitch sounds dull.", "Let the voice rise and fall as in natural speech."],
        ["Pause", "A short silence draws attention.", "Pause before and after the main point."],
        ["Pronunciation", "Mistakes reduce credibility.", "Check unfamiliar words before the talk."],
      ]
    ),

    SH("Proxemics (space around you)"),
    P("Non-verbal communication also includes the ways you communicate through distance or the area around you. The meaning we give to the space around us is known as proxemics. The term proxemics was coined by the anthropologist Edward Hall in 1963. He defined proxemics as the interrelated observations and theories of humans' use of space as a specialised elaboration of culture. Hall was interested in how humans use space in houses and buildings and ultimately the layout of towns. According to Edward Hall, the study of proxemics is valuable: evaluating not only how people interact with others in the office but also how they organise their own space."),
    SH("Human distances"),
    P("Hall has described the interpersonal distances of man in four distinct zones: the intimate zone, the personal zone, the social zone and the public zone."),
    T(
      ["Zone", "Phase", "Distance", "Used for"],
      [
        ["Intimate", "Close phase", "Less than 6 inches (15 cm)", "Embracing, touching or whispering"],
        ["Intimate", "Far phase", "6 to 18 inches (15 to 46 cm)", "Embracing, touching or whispering"],
        ["Personal", "Close phase", "1.5 to 2.5 feet (46 to 76 cm)", "Interactions among good friends or family"],
        ["Personal", "Far phase", "2.5 to 4 feet (76 to 122 cm)", "Interactions among good friends or family"],
        ["Social", "Close phase", "4 to 7 feet (1.2 to 2.1 m)", "Interactions among acquaintances"],
        ["Social", "Far phase", "7 to 12 feet (2.1 to 3.7 m)", "Interactions among acquaintances"],
        ["Public", "Close phase", "12 to 25 feet (3.7 to 7.6 m)", "Public speaking"],
        ["Public", "Far phase", "25 feet (7.6 m) or more", "Public speaking"],
      ],
      "Edward T. Hall's interpersonal distances"
    ),
    IMG("personal-space-zones", "Four concentric zones around a person: intimate, personal, social and public, with their distances", "The four zones of personal space"),
    P("A person's personal space is carried with them everywhere they go. It is the most intact form of territory. According to Hall, body spacing and posture are unintentional reactions to sensory fluctuations or shifts, such as subtle changes in the sound and pitch of a person's voice."),
    SH("Standing"),
    P("As a first aspect of distance, think about what you communicate with space when you are standing. We have all felt intimate, uncomfortable, or shunned because of the distance between the people we talked to and us. Edward Hall, perhaps the most influential thinker on this subject, has identified four zones of personal space."),
    BOX("Example: using the zones in daily situations (scroll to see all)", [
      T(
        ["Situation", "Zone", "What happens if the distance is wrong"],
        [
          ["Whispering to a close friend", "Intimate", "Sitting two metres away would make the secret hard to share."],
          ["Chatting with a friend in the canteen", "Personal", "Standing too close would feel uncomfortable."],
          ["Asking a teacher a question in the office", "Social", "Standing right next to the teacher's chair would feel pushy."],
          ["Presenting to a class of 40", "Public", "Standing at the very back of the room or hiding behind a podium breaks the link with the audience."],
        ]
      ),
      NOTE("Distances differ between cultures. In some countries people stand closer when they talk than in others. A speaker should watch the audience's response and adjust.", "Culture"),
    ]),

    SH("Chronemics (time)"),
    P("Chronemics is the study of how time is used in communication. Arriving on time shows respect. Keeping a speech within the allotted time shows planning. Long pauses, rushing and running over time all send a message to the audience about the speaker."),
    L([
      "Reach the venue before the audience and test the equipment.",
      "Start and end at the planned time.",
      "Spend more time on the main points and less on details.",
      "Leave time at the end for questions.",
    ]),
    SCEN("Questions with answers: visual aids and non-verbal communication", [
      ["Question 1: Why are visual aids used in a presentation?", "They demonstrate key points, increase the audience's interest and the impact of the message, help listeners remember the information and help the speaker present ideas without depending on notes."],
      ["Question 2: Give four guidelines for using a whiteboard.", "Clean the board before starting and check the marker. Stand to the side as you write. Write in large letters and legibly. Do not face the board while talking, and give the audience time to copy before you rub it off."],
      ["Question 3: What is the main advantage and the main disadvantage of handouts?", "The advantage is that the audience can take away a copy of your ideas. The disadvantage is that you cannot control the audience reading ahead of you. Give summary handouts at the end to overcome this."],
      ["Question 4: What are Hall's four zones of personal space?", "The intimate zone (up to 18 inches), the personal zone (1.5 to 4 feet), the social zone (4 to 12 feet) and the public zone (12 feet and more)."],
      ["Question 5: What does a speaker's voice communicate besides words?", "Emotion and attitude. Changes in volume, rate and pitch make a speaker sound expressive, while a flat pitch lowers understanding and interest."],
      ["Question 6: Which distance zone is used in public speaking?", "The public zone, at 12 feet (about 3.7 m) or more."],
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Chapter 8. Interview skills
// ---------------------------------------------------------------------------
const chapter8 = {
  title: "Chapter 8: Interview Skills",
  summary:
    "General instructions for a good interview, tips for phone, video, screening and second-round interviews, the nature of interview questions (traditional, behavioural, technical and tricky), the STAR and CAR formulas with sample answers, questions to ask the employer and what to do after the interview.",
  theory: [
    H("General instructions"),
    P("Here are some general instructions which are beneficial for a good interview:"),
    L([
      "Arrive early to avoid traffic problems.",
      "Arrive prepared with your resume, references and academic transcripts organised in a folio.",
      "Give a thoughtful and complete answer: avoid one-word answers. If necessary, ask for clarification in confusion.",
      "Pausing to consider answering is acceptable.",
      "Make a good first impression with your behaviour and attitude.",
      "Regardless of what people say, your appearance matters the first three seconds. Dress professionally instead of being overdressed with flashy colours or styles.",
      "If you're a female, use make-up moderately and avoid excessive jewellery. If you're a male, make sure that your hair and moustache are well trimmed.",
      "Avoid strong perfumes, colognes and aftershaves.",
      "Keep your shoes shiny, fingernails clean and wear a clean set of glasses.",
      "Have a firm handshake, maintain eye contact, smile and be friendly.",
      "Do not overextend the interview.",
      "Project confidence, respect, enthusiasm, sincerity, commitment and optimism.",
      "Always turn off your cell phone. It is considered impolite whenever your phone rings within a formal setting.",
      "Just remember that in case you receive a verbal offer, do not accept or reject it immediately without thinking.",
    ]),
    SH("Dress and appearance"),
    BOX("Quick guide: what to wear and carry (scroll to see all)", [
      T(
        ["Item", "Good choice", "Avoid"],
        [
          ["Clothes", "Clean, ironed, plain formal wear in dark or neutral colours.", "Bright colours, torn or wrinkled clothes, casual T-shirts."],
          ["Shoes", "Polished formal shoes.", "Sandals or sports shoes."],
          ["Grooming", "Neat hair, clean nails, light fragrance or none.", "Strong perfume, heavy make-up or jewellery."],
          ["Documents", "Resume, references, transcripts and certificates in a folder; a pen and a notepad.", "Loose papers carried in hand."],
          ["Phone", "Switched off or on silent.", "Taking a call or looking at messages."],
        ]
      ),
    ]),

    H("Interview tips for specific interview types"),
    P("There are four specific types of interviews: the screening interview, the phone interview, the video interview and the second-round interview."),
    SH("Screening interview"),
    P("A screening interview may be asked to give a telephonic interview or over the internet if you or your prospective employer are located at a distance. If that is the case, schedule the interview at an ideal time (when you are fresh) and an ideal place (with quiet and good Wi-Fi). Be prepared with a list of points (skills, accomplishments, questions to ask), keep a copy of your resume at hand, listen actively and avoid interrupting the interviewer, speak clearly and slowly and project enthusiasm in your voice. Any other relevant tips covered above apply. For each type of interview, the following further advice may be helpful."),
    SH("Phone interview"),
    L([
      "If possible, stand up to revive energy.",
      "Smile at intervals to have its effects in your voice.",
      "Avoid fillers (umm, err, uh) and be more impressionable on the phone.",
      "Dress formally to have an interview mindset.",
      "Have the interviewer's website open for reference.",
    ]),
    SH("Video interview"),
    L([
      "Look at the camera instead of the screen for eye contact with the interviewer.",
      "Dress like you have an in-person interview.",
      "Pick a place with a neutral background.",
      "Get used to technology by running a practice interview with a friend.",
      "Pay attention to your body language.",
    ]),
    SH("Second-round interview"),
    P("If you've been called for a second-round interview, congratulations for making it this far! All the previous rules to getting a good interview still apply. Additionally, you'll need to review your first interview and research the employer to gather more information. Try to find staff members working in the company who are not part of the hiring committee to help you with possible strategies. Depending on the requirements of the second interview, make preparations accordingly."),

    H("Nature of interview questions"),
    P("According to your job requirement, you may be asked a combination of either set of the following:"),
    T(
      ["Type", "What it is", "What the interviewer learns"],
      [
        ["Traditional questions", "Generic in nature; they ask about your experience, background or personal qualities.", "Your personality and how well you know the job."],
        ["Behavioural questions", "Ask how you acted in past situations.", "How you have handled real problems, as a guide to how you will handle new ones."],
        ["Technical or case questions", "Field-specific questions on your knowledge and skills.", "Whether you have the knowledge for the position."],
        ["Tricky questions", "Questions with a hidden difficulty, or where the obvious answer is not the correct one.", "How you think and react under pressure."],
      ]
    ),

    SH("Traditional questions"),
    P("Traditional interview questions enable the interviewer and job candidate to establish a rapport and to get to know each other in a less stressful environment than behavioural interviews or case interviews. At any rate, you need to address the question directly. Following are some traditional questions used commonly in an interview:"),
    L([
      "Tell me about yourself.",
      "Why are you interested in this position, industry or organisation?",
      "What do you know about us?",
      "Why should we hire you? What can you offer us?",
      "Describe your ideal job.",
      "What are your greatest strengths and weaknesses?",
      "Tell me about an accomplishment that you are proud of.",
      "What have you learned from your failures?",
      "What motivates you to do good work?",
      "How do you prefer to be supervised?",
      "How would a former supervisor describe you?",
      "How about your friends?",
      "Why did you decide to attend this university?",
      "Why did you choose your major?",
      "Which classes did you enjoy most or least and why?",
      "What do you see yourself doing in five years?",
      "Do you plan to return to school for further education?",
      "What other positions are you interviewing for?",
    ]),
    BOX("Sample answers to common traditional questions (scroll to see all)", [
      SH("Tell me about yourself"),
      P("I am a student of Artificial Intelligence in my second year. I enjoy solving problems with programming and I have built two small projects in Python, one that sorts student marks and one that predicts simple trends. I work well in a team because I led our group in a class project last semester. I am looking for an opportunity to learn more and to use my skills in a real setting."),
      SH("What are your greatest strengths and weaknesses?"),
      P("My main strength is that I learn quickly and I finish what I start. For example, I learned a new programming language in a month to complete a project. My weakness is that I sometimes spend too much time on small details. I now set a time limit for each task, which has helped me to finish on schedule."),
      SH("Why should we hire you?"),
      P("I have the basic skills this position needs, and I am eager to learn. I am punctual, I take responsibility for my work and I can work with others. I believe I can be useful to your team from the start and grow with it."),
      SH("What do you see yourself doing in five years?"),
      P("In five years I see myself as a skilled professional in this field, taking more responsibility and possibly guiding new team members. I would like to grow with a company like yours."),
      SH("What are your salary expectations?"),
      P("I am more interested in the opportunity and in learning. I understand the pay for this position is in a fair range, and I am open to discuss what you think is suitable for my experience."),
    ]),

    SH("Behavioural questions"),
    P("Such types of questions asked in a job interview whereby the applicant is asked to describe past behaviour to determine whether he or she is suitable for a position. For example, an interviewer may ask: Tell me about a time when you dealt with a disruptive customer. Following are the terms and their associated sample questions which may be used in behavioural questions."),
    T(
      ["Skill", "Sample questions"],
      [
        ["Interpersonal skills", "When working on a team project, have you ever dealt with a strong disagreement among team members or a team member who didn't do their part? What did you do? Tell me about the most difficult or frustrating individual that you've ever had to work with and how you approached the situation. Tell me about a time when you had to be assertive."],
        ["Communication skills", "Tell me about a time when you had to present complex information. How did you get your point across? Describe a time when you used persuasion to convince someone to see things your way. Tell me about a time when you used written communication skills to convey an important point."],
        ["Initiative", "Provide an example of when you had to go above and beyond the call of duty to get a job done. Tell me about a project you initiated."],
        ["Creativity and innovation", "Describe a time when you provided a creative solution to a problem. What is the most creative thing you have done?"],
        ["Leadership", "Tell me about a time when you influenced the outcome of a project by taking a leadership role. Describe your leadership style and provide an example of a situation where you successfully led a group. Provide an example that demonstrates your ability to motivate others."],
        ["Planning and organisation", "Tell me about an important goal of yours. How did you reach it? Describe a situation when you had many assignments or projects due at the same time: what steps did you take to finish them? Provide an example of what you've done when your time schedule or plan was upset by unforeseen circumstances."],
        ["Flexibility", "Describe a situation in which you overcame a personality conflict for getting results. What kind of issues tested your coping skills? Describe a time when you received constructive criticism."],
        ["Decision making", "Provide an example of when you had to make a difficult decision. How did you approach it? What kind of criteria did you use? Describe a time when you had to defend your decision. Summarise a situation where you had to locate relevant information, define key issues, and determine the steps to get a desired result."],
      ]
    ),

    H("Strategy for behavioural questions: the STAR and CAR formulas"),
    P("**STAR formula:** The Situation, Task, Action, Result (STAR) format is a job interview technique used by interviewers to gather all the relevant information about a specific capability that the job requires. The interviewer will be looking for information on what you did, why you did it and what the alternatives were."),
    T(
      ["Letter", "Stands for", "What to say"],
      [
        ["S", "Situation", "Set the scene: where and when it happened."],
        ["T", "Task", "What you had to achieve or what was your responsibility."],
        ["A", "Action", "The steps you took, in the first person."],
        ["R", "Result", "What happened as an outcome, with numbers if possible."],
      ]
    ),
    P("**CAR formula:** A good rule for answering an interview question is to go out and get yourself a CAR, which stands for Context, Action and Result to answer interview questions. Have a CAR in your back pocket and you can take the interview anywhere you want to go."),
    T(
      ["Letter", "Stands for", "What to say"],
      [
        ["C", "Context", "The background and the challenge."],
        ["A", "Action", "What you did."],
        ["R", "Result", "What the outcome was."],
      ]
    ),
    BOX("Behavioural questions: how to say it (scroll to see all)", [
      SH("Question: Describe a time when you worked in a team to solve a problem."),
      P("**Context:** Last semester, our group had to build a class project in two weeks. Two members fell ill and the rest of us were running behind."),
      P("**Action:** I called a short meeting, divided the remaining work according to everyone's strengths and made a simple daily checklist. I took on the testing part myself because I was free in the evenings. I updated the group every night."),
      P("**Result:** We finished a day before the deadline and the teacher gave our group one of the highest marks in the class. We also learned how to share work fairly."),
      SH("Question: Tell me about a time when you had to meet a tight deadline (STAR)."),
      P("**Situation:** In my second semester, three assignments and a quiz fell in the same week."),
      P("**Task:** I needed to complete all of them on time without lowering the quality."),
      P("**Action:** I listed each task with its deadline, gave each a fixed time slot every day and started with the one that needed the most work. I turned off my phone while studying."),
      P("**Result:** I submitted all three assignments a day early and scored well in the quiz. Since then I plan my week in advance."),
      SH("Question: Tell me about a time you received criticism."),
      P("**Context:** My teacher told me that my presentation was too fast and difficult to follow."),
      P("**Action:** I practised in front of friends, used a timer and added pauses between points. I also cut some slides to make them clearer."),
      P("**Result:** In the next presentation, the teacher said it was clearly better, and I felt more confident."),
    ]),

    SH("Technical questions"),
    P("Technical interview questions tend to be straightforward questions that focus on your personality, preferred ways of interacting with others and how you would handle hypothetical situations. Traditional interview questions enable the interviewer and job candidate to establish a rapport and to get to know each other in a less stressful environment than behavioural interviews or case interviews. Such questions are common in finance, accounting, consulting, engineering and computer science fields. The questions may be related with concepts learned from coursework, industry knowledge, specific skills. Try to master these, practise them and consult other workers and alumni for an opinion."),
    BOX("Sample technical questions for an AI student, with answers (scroll to see all)", [
      T(
        ["Question", "Short answer"],
        [
          ["What is the difference between a list and a tuple in Python?", "A list can be changed after it is created. A tuple cannot be changed."],
          ["What is a function and why do we use it?", "A function is a reusable block of code for one task. It saves repetition and makes programs easier to read and test."],
          ["What is the difference between supervised and unsupervised learning?", "In supervised learning the data has correct answers (labels). In unsupervised learning the model finds patterns in data without labels."],
          ["What is an algorithm?", "A step-by-step set of instructions to solve a problem."],
        ]
      ),
    ]),

    SH("Tricky questions"),
    P("If someone asks you a trick question, they ask you a question which is very difficult to answer, for example because there is a hidden difficulty or because the answer that seems obvious is not the correct one. Following are some tricky questions:"),
    L([
      "Tell me about yourself. (Reply keeping in view audience and purpose.)",
      "What are your greatest strengths and weaknesses? (Be honest and turn it into an opportunity.)",
      "What are your salary expectations? Start with: I am sure you have a range in mind, and then What are you willing to offer? instead of quantifying the number immediately.",
    ]),
    P("One area that I have been working to feel more comfortable with is public speaking. While I have given presentations in class on several occasions, I noticed that I feel nervous when speaking in front of large groups of people. For this reason, I took the initiative to join the debate society at university and I try to get myself involved in a regional debate competition where I have met two others. Because of my experience with public speaking, I believe I'll be able to develop my communication skills."),
    NOTE("The paragraph above is a sample answer to the weakness question. It names a real weakness, shows the steps taken to improve it and ends on a positive note.", "Sample answer"),

    H("Questions for the employer"),
    P("Following are some of the questions which are asked by the interviewee to the employer. Asking questions shows interest and preparation."),
    L([
      "What kind of training do you offer to new employees?",
      "When and how are employees evaluated?",
      "What are the best and most difficult aspects of working in this group or organisation?",
      "What's the biggest challenge facing this group or organisation right now?",
      "How would you describe the culture of this organisation?",
      "What do you see as unique about your organisation compared with your major competitors?",
      "What are your plans for expansion in terms of product lines, services and new branches?",
      "How are decisions made?",
      "How would you describe the organisation's management style?",
      "What are some typical first-year assignments?",
      "How does this position fit into the overall organisational structure?",
      "May I have your business card?",
      "What are the next steps in the hiring process?",
    ]),
    WARN("Do not ask about salary, leave or holidays in a first interview unless the interviewer brings them up.", "Questions to avoid"),

    H("After the interview"),
    P("Things which we should do after an interview are the following:"),
    L([
      "Write a brief thank-you note. In this note, you should reiterate your interest and state why you are an ideal candidate. Realistically, after evaluating the whole interview process, in case of silence from the employer, communicate with them after a wait of a week or two to show your continued interest for the position, as a follow-up email.",
    ]),
    BOX("Sample thank-you email (scroll to see all)", [
      P("**Subject:** Thank you for the interview"),
      P("Dear Mr. Khan,"),
      P("Thank you for taking the time to meet me on Monday about the Junior Data Assistant position. I enjoyed learning about your team's work on student data and I am even more interested in the role after our discussion."),
      P("My experience with Python and my work in team projects match the skills you described. I am confident that I can contribute to your team and learn quickly."),
      P("Please let me know if you need any further information. I look forward to hearing from you."),
      P("Sincerely,"),
      P("Ali Ahmed"),
    ]),
    T(
      ["Stage", "Checklist"],
      [
        ["Before", "Research the organisation, read the job description, prepare answers with STAR or CAR, practise aloud, prepare questions to ask and set out documents and clothes the night before."],
        ["During", "Arrive early, greet with a firm handshake, keep eye contact, listen to the whole question, answer with examples and ask your prepared questions."],
        ["After", "Send a thank-you note within a day, follow up after a week or two if there is silence, and note what went well and what to improve."],
      ],
      "Interview checklist"
    ),
    SCEN("Questions with answers: interview skills", [
      ["Question 1: Name four general instructions for a good interview.", "Arrive early, carry your resume and documents in a folder, dress professionally and switch off your mobile phone. Also maintain eye contact and give complete answers."],
      ["Question 2: How is a phone interview different from a video interview?", "In a phone interview only the voice is judged, so stand up, smile, speak slowly and avoid fillers. In a video interview you should also look at the camera, dress formally, choose a neutral background and watch your body language."],
      ["Question 3: What does STAR stand for?", "Situation, Task, Action and Result."],
      ["Question 4: Answer using the CAR formula: Tell me about a time you solved a problem.", "Context: Our class presentation file was corrupted an hour before the presentation. Action: I stayed calm, rebuilt the slides from the shared copy in the group chat and asked a teammate to check them. Result: We presented on time and our group received full marks."],
      ["Question 5: Why should a candidate ask questions at the end of the interview?", "It shows interest, preparation and seriousness about the job, and it helps the candidate to decide whether the position is right for them."],
      ["Question 6: What should you do after the interview?", "Send a brief thank-you note stating your interest and why you are a good candidate. If there is no reply for a week or two, send a polite follow-up email."],
    ]),
  ],
};

export const englishChapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8];
