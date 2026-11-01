// ALL notes for Pakistan Studies (semester 3) live in this ONE file.
// It is a list of chapters, in reading order (the list is at the bottom).
// To reorder chapters, move a name inside that list. To add a chapter, add one
// more `const` and put its name in the list.
//
// Source: one typed lecture document ("Constitution and Ideology of Pakistan").
// The text was reorganised into chapters and expanded with explanations and
// exam tips. Anything that is NOT in the source is marked "Added" in a callout.
// A few facts in the source were doubtful; they are marked "Check this" and
// corrected with a note, so you can decide what your instructor expects.

const introduction = {
  title: "Pakistan and its Significance in the World",
  summary:
    "How Pakistan came into being and why it matters: location, nuclear status, population, the Islamic identity and its role in regional affairs.",
  theory: [
    { type: "heading", text: "Introduction" },
    {
      type: "paragraph",
      text: "Pakistan, officially the Islamic Republic of Pakistan, is a sovereign country in South Asia. It appeared on the world map on 14 August 1947 as a result of the partition of British India. It was created as a nation-state for the Muslims of the subcontinent, where they could live according to their Islamic principles and cultural identity.",
    },
    {
      type: "paragraph",
      text: "The name \"Pakistan\" means \"Land of the Pure\" in Urdu and Persian.",
    },

    { type: "heading", text: "Significance in the world" },
    {
      type: "paragraph",
      text: "Pakistan's importance comes from a combination of geopolitics, demographics and strategic position. Five points are usually given in answers:",
    },
    { type: "subheading", text: "1. Geostrategic location" },
    {
      type: "paragraph",
      text: "Pakistan sits at the crossroads of South Asia, Central Asia and the Middle East. It shares borders with India, China, Afghanistan and Iran, which makes it a key player in regional politics, trade and security. The Gwadar Port, developed with China, is a cornerstone of the China-Pakistan Economic Corridor (CPEC), an infrastructure project with global economic implications.",
    },
    { type: "subheading", text: "2. Nuclear power" },
    {
      type: "paragraph",
      text: "Pakistan is one of the nine nuclear-armed states in the world. This gives it strategic weight in regional and global security, particularly in its relationship with India.",
    },
    { type: "subheading", text: "3. Large population" },
    {
      type: "paragraph",
      text: "With over 240 million people, Pakistan is the world's fifth most populous country. That means a large market, a big labour force and a very young population.",
    },
    { type: "subheading", text: "4. Islamic republic" },
    {
      type: "paragraph",
      text: "Pakistan is the only nuclear-armed Muslim-majority country and an active member of the Organisation of Islamic Cooperation (OIC), so it holds a prominent position in the Islamic world.",
    },
    { type: "subheading", text: "5. Role in regional and global affairs" },
    {
      type: "paragraph",
      text: "Pakistan has been a key ally in several international contexts, from the Cold War to the War on Terror, and it continues to matter for regional stability, especially concerning Afghanistan.",
    },
    {
      type: "table",
      headers: ["Factor", "Why it matters"],
      rows: [
        ["Geostrategic location", "Borders India, China, Afghanistan and Iran; Gwadar and CPEC"],
        ["Nuclear power", "One of nine nuclear-armed states"],
        ["Population", "Over 240 million; fifth largest in the world"],
        ["Islamic identity", "Member of the OIC; only nuclear-armed Muslim-majority state"],
        ["Regional role", "Cold War ally, War on Terror, Afghanistan"],
      ],
      caption: "Pakistan's significance at a glance.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Exam tip",
      text: "Open with the date (14 August 1947) and the meaning of the name, then give the five headings above with one sentence each. A short example under each heading (Gwadar for location, OIC for the Islamic world) earns the extra marks.",
    },
  ],
};

const politicalStructure = {
  title: "Political Structure and Political Parties",
  summary:
    "The federal parliamentary system under the 1973 Constitution, the main institutions, and the types, functions and problems of political parties.",
  theory: [
    { type: "heading", text: "Introduction" },
    {
      type: "paragraph",
      text: "Pakistan has a federal parliamentary system. Many political parties compete for power at the national and provincial levels. The structure is defined by the Constitution of 1973, which sets up a two-house legislature (bicameral), an executive headed by the Prime Minister and an independent judiciary. Parties range from secular to religious and from regional to national, and they shape policy, represent the public and support democratic government.",
    },

    { type: "heading", text: "Political structure" },
    { type: "subheading", text: "Federal system" },
    {
      type: "paragraph",
      text: "Powers are divided between the centre (federal government) and the provinces. The key federal institutions are:",
    },
    {
      type: "list",
      items: [
        "President: the ceremonial head of state.",
        "Prime Minister: the chief executive and head of government.",
        "Parliament: two houses, the National Assembly and the Senate.",
      ],
    },
    { type: "subheading", text: "Parliamentary system" },
    {
      type: "paragraph",
      text: "In a parliamentary democracy the executive is accountable to the legislature. The National Assembly (lower house) represents the population, while the Senate (upper house) ensures that the provinces are represented.",
    },
    { type: "subheading", text: "Judiciary" },
    {
      type: "paragraph",
      text: "An independent judiciary interprets the Constitution, settles disputes between the federal and provincial governments, and checks excesses by the legislature and the executive.",
    },
    { type: "subheading", text: "Provincial autonomy" },
    {
      type: "paragraph",
      text: "Each province has a legislative assembly and a chief minister who is responsible for local governance. The four provinces are Punjab, Sindh, Balochistan and Khyber Pakhtunkhwa.",
    },

    { type: "heading", text: "Political parties in Pakistan" },
    {
      type: "paragraph",
      text: "Parties can be grouped as national, regional, religious or issue-based.",
    },
    {
      type: "table",
      headers: ["Category", "Examples", "Focus / region"],
      rows: [
        ["National", "PML-N, PPP, PTI", "National policy"],
        ["Regional", "MQM, BNP", "Urban Sindh, Balochistan"],
        ["Religious", "JUI-F, JI", "Islamic governance"],
        ["Issue-based", "AWP", "Workers, youth reforms"],
      ],
      caption: "Quick table for exams.",
    },
    { type: "subheading", text: "National parties" },
    {
      type: "paragraph",
      text: "They operate across provinces and influence national policy.",
    },
    {
      type: "list",
      items: [
        "Pakistan Muslim League-Nawaz (PML-N): centre-right, strong in Punjab.",
        "Pakistan Peoples Party (PPP): centre-left, strong in Sindh.",
        "Pakistan Tehreek-e-Insaf (PTI): centrist or populist; came to power in 2018.",
      ],
    },
    { type: "subheading", text: "Regional parties" },
    {
      type: "paragraph",
      text: "They focus on provincial issues and ethnic representation.",
    },
    {
      type: "list",
      items: [
        "Muttahida Qaumi Movement (MQM): represents urban Sindh.",
        "Balochistan National Party (BNP): Baloch rights.",
      ],
    },
    { type: "subheading", text: "Religious parties" },
    {
      type: "paragraph",
      text: "They promote Islamic ideology in politics.",
    },
    {
      type: "list",
      items: [
        "Jamiat Ulema-e-Islam (JUI-F): strong in Khyber Pakhtunkhwa and Balochistan.",
        "Jamaat-e-Islami (JI): promotes Islamic governance.",
      ],
    },
    { type: "subheading", text: "Issue-based and emerging parties" },
    {
      type: "paragraph",
      text: "They represent specific issues, reform agendas or youth movements.",
    },
    {
      type: "list",
      items: [
        "Awami Workers Party (AWP): socialism and workers' rights.",
        "Emerging youth parties focused on anti-corruption and governance reform.",
      ],
    },

    { type: "heading", text: "Functions of political parties" },
    {
      type: "list",
      ordered: true,
      items: [
        "Representation: express citizens' interests at national and provincial levels.",
        "Policy formulation: draft legislative agendas and economic and social policies.",
        "Government formation: the majority party forms the government; coalitions are common.",
        "Political socialisation: educate and involve citizens in democratic processes.",
        "Opposition: hold the government accountable through debate and parliamentary oversight.",
      ],
    },

    { type: "heading", text: "Challenges facing political parties" },
    {
      type: "list",
      items: [
        "Dynastic politics: leadership stays in family lines (for example the Bhuttos and the Sharifs).",
        "Weak internal democracy: candidates are chosen by the leadership, not by members.",
        "Corruption and patronage politics: these damage public trust.",
        "Ethnic and sectarian fragmentation: regional and religious parties can deepen polarisation.",
        "Military interference: civil-military tensions cause political instability.",
      ],
    },

    { type: "heading", text: "Political dynamics" },
    {
      type: "list",
      items: [
        "Historically a two-party dominant system (PML-N against PPP), with PTI emerging as a third force.",
        "Coalitions are often needed to govern in a fragmented political landscape.",
        "Judicial and caretaker governments play a key role during election transitions.",
      ],
    },

    { type: "heading", text: "Conclusion" },
    {
      type: "paragraph",
      text: "Pakistan's political system combines a federal parliamentary structure with diverse parties representing national, regional and ideological interests. The institutions support democracy, but dynastic politics, corruption and civil-military tensions still influence governance. Parties remain central to policy-making, representation and democratic development at both provincial and national level.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Exam tip",
      text: "Draw the quick table (category, examples, region) in your answer sheet. It is easy to mark and shows you know all four types of party.",
    },
  ],
};

const ideology = {
  title: "Ideology of Pakistan",
  summary:
    "What the Ideology of Pakistan means, its ten key points, Iqbal, Jinnah, the Objectives Resolution and the 1973 Constitution, and how other countries compare.",
  theory: [
    { type: "heading", text: "What is the ideology of Pakistan?" },
    {
      type: "paragraph",
      text: "The Ideology of Pakistan is the set of political, social, religious and constitutional ideas that supported the demand for a separate homeland for the Muslims of British India, and that later shaped the constitutional identity of Pakistan.",
    },
    {
      type: "paragraph",
      text: "It helps to separate two things: the historical ideology behind the Pakistan Movement, and the constitutional principles of the state. The idea developed over time, especially through the writings and speeches of Allama Muhammad Iqbal and Muhammad Ali Jinnah, and was given constitutional form after independence.",
    },

    { type: "heading", text: "Key points of the ideology" },
    {
      type: "table",
      headers: ["Key point", "Meaning", "Example"],
      rows: [
        [
          "1. Islamic identity",
          "Muslims of the subcontinent had a distinct religious and cultural identity.",
          "Muslim personal law, religious traditions and institutions were seen as important to Muslim political identity.",
        ],
        [
          "2. Two-Nation Theory",
          "Supporters of the Pakistan Movement regarded Hindus and Muslims as distinct nations with different religious, cultural and social traditions.",
          "The demand for a separate Muslim homeland became central to the Muslim League's politics.",
        ],
        [
          "3. Muslim political rights",
          "Muslims wanted safeguards and representation because they feared permanent domination by a larger Hindu majority.",
          "Separate electorates and constitutional safeguards were major issues before 1947.",
        ],
        [
          "4. Islamic principles and democracy",
          "The founding discourse linked Islamic principles with representative government, justice and public welfare.",
          "Jinnah repeatedly stressed constitutional government, equality and the rule of law.",
        ],
        [
          "5. Rule of law",
          "Government should work through law, not arbitrary personal authority.",
          "Pakistan has a written constitution, courts and fundamental rights.",
        ],
        [
          "6. Social justice",
          "The state should promote justice and protect weaker sections of society.",
          "Constitutional principles on equality, welfare and ending exploitation reflect this theme.",
        ],
        [
          "7. Religious freedom",
          "The constitutional framework recognises the rights of religious minorities.",
          "Article 20 protects the right to profess, practise and propagate religion, subject to law.",
        ],
        [
          "8. National unity",
          "Pakistan sought a common political identity across ethnic, linguistic and regional communities.",
          "Urdu was promoted as the national language while regional languages and cultures continued.",
        ],
        [
          "9. Sovereignty and independence",
          "Pakistan was conceived as an independent state able to decide its own political and foreign policy.",
          "Pakistan became an independent sovereign state on 14 August 1947.",
        ],
        [
          "10. Welfare state",
          "The state is expected to promote economic and social welfare.",
          "The Principles of Policy include social and economic justice and the welfare of citizens.",
        ],
      ],
      caption: "The ten key points of the Ideology of Pakistan.",
    },

    { type: "heading", text: "Historical and constitutional examples" },
    { type: "subheading", text: "Allama Iqbal" },
    {
      type: "paragraph",
      text: "Iqbal's Allahabad Address of 1930 is often discussed in connection with the growth of the Pakistan idea. He argued for a consolidated Muslim political unit in north-western India. His thinking gave an intellectual foundation to later Muslim political demands.",
    },
    { type: "subheading", text: "Muhammad Ali Jinnah" },
    {
      type: "paragraph",
      text: "Jinnah increasingly argued that Muslims were a distinct political community who needed constitutional arrangements to protect their political interests. The Lahore Resolution of 1940 then became a major milestone of the Pakistan Movement.",
    },
    { type: "subheading", text: "Constitutional example" },
    {
      type: "paragraph",
      text: "The Objectives Resolution of 1949 became an important statement of Pakistan's ideological framework. The Constitution of 1973 includes several of its principles:",
    },
    {
      type: "list",
      items: [
        "Islam as the state religion",
        "Fundamental rights",
        "Democracy and representative government",
        "Federalism",
        "Equality of citizens",
        "Religious freedom",
        "Social and economic justice",
        "Independence of the judiciary",
        "Constitutional rule",
      ],
    },

    { type: "heading", text: "Countries with ideologically based state systems" },
    {
      type: "paragraph",
      text: "Almost every state has some national, political, religious, historical or ideological principles behind its political system. Countries differ in how openly their constitutions name an ideology.",
    },
    {
      type: "table",
      headers: ["Country", "Major ideological or state principle", "Example"],
      rows: [
        ["Pakistan", "Islamic constitutional identity + democracy", "Islam is the state religion; parliamentary constitutional system"],
        ["Iran", "Islamic Republic / Shia Islamic political framework", "Constitution combines elected institutions with Islamic constitutional principles"],
        ["Saudi Arabia", "Islamic / Salafi state tradition", "Qur'an and Sunnah are named as the foundation of governance"],
        ["Israel", "Jewish state + democratic institutions", "Defines itself as the nation-state of the Jewish people while keeping democratic institutions"],
        ["China", "Marxism-Leninism, Mao Zedong Thought and later socialist theories", "Communist Party-led socialist system"],
        ["North Korea", "Juche / socialist state ideology", "Juche is tied to the country's political system"],
        ["Vietnam", "Marxism-Leninism and Ho Chi Minh Thought", "Communist Party-led socialist republic"],
        ["Cuba", "Marxism-Leninism / socialism", "Communist Party-led socialist republic"],
        ["United States", "Liberal constitutionalism, republicanism and individual rights", "Constitution, federalism, separation of powers, Bill of Rights"],
        ["France", "Republicanism, secularism (laicite), liberty, equality, fraternity", "Constitutional principle of a secular republic"],
        ["India", "Constitutional democracy, secularism, socialism, republicanism", "Preamble: sovereign socialist secular democratic republic"],
        ["Turkey", "Republicanism, secular constitutional tradition, nationalism", "Constitutional commitment to the republic and a secular state"],
        ["Indonesia", "Pancasila", "Five principles: belief in God, humanitarianism, national unity, democracy, social justice"],
      ],
      caption: "Examples of state principles in other countries.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important distinction",
      text: "It would be inaccurate to say all these countries have an ideology in exactly the same sense as Pakistan. Pakistan and Iran have explicitly Islamic constitutional identities. China, Vietnam and Cuba have explicitly socialist or communist foundations. India and Indonesia have constitutional value systems that combine several principles. France and the United States are better understood through constitutional traditions (republicanism, individual rights, secularism, liberal democracy) than through a single official state ideology.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Exam tip",
      text: "Structure the answer as: definition, history (Iqbal 1930, Jinnah and Lahore 1940), constitution (Objectives Resolution 1949, Constitution 1973), then the key points. Mention the distinction above to show careful thinking.",
    },
  ],
};

// Each challenge: the problem, examples, and what Pakistan did about it.
function challenge(title, problem, examples, response) {
  return [
    { type: "subheading", text: title },
    { type: "paragraph", text: problem },
    { type: "paragraph", text: "Examples:" },
    { type: "list", items: examples },
    { type: "paragraph", text: "How Pakistan addressed it:" },
    { type: "list", items: response },
  ];
}

const challenges = {
  title: "Key Problems and Challenges, 1947 to 2025",
  summary:
    "Ten major challenges Pakistan has faced since independence, each with examples and the steps taken to deal with it.",
  theory: [
    {
      type: "paragraph",
      text: "Since independence Pakistan has faced problems in politics, the economy, security, governance, energy, water, education, ethnic relations, foreign policy and population. For each one, learn three things: the challenge, examples, and the response.",
    },
    { type: "heading", text: "1. Constitutional and political instability" },
    ...challenge(
      "The challenge",
      "Pakistan struggled for decades to build a stable political system because of delayed constitution-making, frequent military interventions, weak democratic institutions and leadership crises.",
      [
        "1947 to 1956: Pakistan was governed without a constitution.",
        "1958, 1977 and 1999: military coups by Ayub Khan, Zia-ul-Haq and Pervez Musharraf.",
        "1971: the separation of East Pakistan, partly due to political deadlock.",
        "2017 to 2022: a cycle of instability, dismissals of governments, protests and polarisation.",
      ],
      [
        "Adoption of the 1973 Constitution, which is still the supreme law.",
        "Restoration of democracy from 2008.",
        "The 18th Amendment (2010), which strengthened parliamentary democracy.",
        "Judicial activism and electoral reforms by the Election Commission of Pakistan (ECP).",
      ],
    ),
    { type: "heading", text: "2. Economic instability and weak growth" },
    ...challenge(
      "The challenge",
      "Low tax collection, dependence on the IMF, low industrial productivity, trade deficits and energy shortages.",
      [
        "Repeated IMF bailouts (22 or more programmes).",
        "The 2022 to 2023 crisis: the rupee collapsed, inflation went above 40% and foreign reserves fell close to default levels.",
        "Circular debt in the energy sector above Rs. 2.6 trillion.",
      ],
      [
        "Reforms under IMF programmes (2023 to 2024).",
        "Tax digitisation through FBR reform initiatives.",
        "CPEC investment in energy and infrastructure.",
        "Export promotion, for example textile subsidy packages.",
      ],
    ),
    {
      type: "callout",
      variant: "warning",
      title: "Number of IMF programmes",
      text: "Counts differ by source and year (the figure commonly quoted for recent years is in the low to mid 20s), so write \"more than 20 IMF programmes\" unless your instructor gave an exact number.",
    },
    { type: "heading", text: "3. National security challenges" },
    ...challenge(
      "The challenge",
      "Wars with India, terrorism and militancy, and internal insurgencies such as the one in Balochistan.",
      [
        "Conflicts with India in 1948, 1965, 1971 and Kargil in 1999.",
        "The rise of the TTP and other extremist groups after 2001.",
        "The Army Public School (APS) attack in 2014, which killed 149 people.",
        "The Baloch insurgency since the early 2000s.",
      ],
      [
        "Operation Zarb-e-Azb (2014) and Radd-ul-Fasaad (2017) against terrorism.",
        "The National Action Plan (2015).",
        "Fencing of the Pakistan-Afghanistan border.",
        "Military modernisation and better intelligence coordination.",
      ],
    ),
    { type: "heading", text: "4. Governance issues and corruption" },
    ...challenge(
      "The challenge",
      "Nepotism, poor public service delivery, mismanagement and corruption in the bureaucracy and state institutions.",
      [
        "Pakistan is often ranked low on Transparency International indices.",
        "High-profile corruption cases involving political leaders.",
        "Mismanagement crises: PTCL privatisation issues, PIA losses and the collapse of Pakistan Steel Mills.",
      ],
      [
        "The National Accountability Bureau (NAB) and anti-corruption frameworks.",
        "E-governance initiatives in provinces (for example the Punjab Information Technology Board).",
        "Judicial accountability and public audits.",
        "Civil service reforms (performance-based evaluation in Khyber Pakhtunkhwa).",
      ],
    ),
    { type: "heading", text: "5. Energy crisis" },
    ...challenge(
      "The challenge",
      "Persistent electricity shortages hurt industry and daily life.",
      [
        "Load-shedding of 10 to 14 hours in summers (2007 to 2014).",
        "High circular debt from poor management and theft.",
        "Outdated transmission systems causing breakdowns.",
      ],
      [
        "CPEC energy projects (over 13,000 MW) using coal, hydel and wind.",
        "LNG imports after 2015.",
        "Policies promoting renewable energy, such as solar net metering.",
        "Dams under construction: Diamer-Bhasha, Dasu and Mohmand.",
      ],
    ),
    { type: "heading", text: "6. Water shortage and climate challenges" },
    ...challenge(
      "The challenge",
      "Pakistan is among the most water-stressed countries and is highly vulnerable to climate change.",
      [
        "The floods of 2010 and 2022 (33 million people were affected in 2022).",
        "Falling groundwater in Punjab and Sindh.",
        "Droughts in Tharparkar.",
        "Glacial lake outburst floods (GLOF) in the northern areas.",
      ],
      [
        "The National Climate Change Policy (2012, updated 2021).",
        "The Billion Tree Tsunami in Khyber Pakhtunkhwa.",
        "Large dams and water conservation projects.",
        "International climate diplomacy to gain aid (for example the Green Climate Fund).",
      ],
    ),
    { type: "heading", text: "7. Education crisis and social challenges" },
    ...challenge(
      "The challenge",
      "Low literacy, gender inequality, weak higher-education standards and a very large number of out-of-school children (about 23 million).",
      [
        "UNESCO reports place Pakistan among the lowest in South Asia for literacy.",
        "The 2012 attack on Malala Yousafzai highlighted threats to girls' education.",
        "Brain drain from higher education.",
      ],
      [
        "Larger education budgets in the provinces after the 18th Amendment.",
        "New universities, for example IT universities.",
        "Scholarship programmes: Ehsaas, HEC scholarships and China-Pakistan scholarships.",
        "Curriculum reform and the Single National Curriculum (SNC).",
      ],
    ),
    { type: "heading", text: "8. Ethnic and regional tensions" },
    ...challenge(
      "The challenge",
      "Ethnic and regional inequalities created divisions inside the country.",
      [
        "The separation of East Pakistan in 1971.",
        "Ethnic violence in Karachi in the 1980s and 1990s.",
        "Baloch nationalism and insurgency.",
        "Pashtun grievances, raised by the PTM.",
      ],
      [
        "Devolution of power through the 18th Amendment.",
        "Merging FATA into Khyber Pakhtunkhwa in 2018.",
        "Development projects in Balochistan (Gwadar Port, scholarships).",
        "Political reconciliation efforts in Karachi.",
      ],
    ),
    { type: "heading", text: "9. Foreign policy challenges" },
    ...challenge(
      "The challenge",
      "A difficult strategic environment: the India-Pakistan rivalry, changing relations with the United States, instability in Afghanistan, and the need to balance ties with China, the Gulf and the West.",
      [
        "US sanctions in the 1990s (the Pressler Amendment).",
        "The backlash from the War on Terror.",
        "Tensions with India after 2016 (Uri, Pulwama, Balakot).",
        "Complex relations with Taliban-led Afghanistan after 2021.",
      ],
      [
        "A strategic partnership with China (CPEC).",
        "Better ties with Gulf countries (Saudi Arabia and the UAE).",
        "Active diplomacy at the UN over Kashmir.",
        "A recent focus on regional connectivity and trade.",
      ],
    ),
    { type: "heading", text: "10. Population growth and urbanisation" },
    ...challenge(
      "The challenge",
      "The population grew from about 33 million in 1947 to over 240 million by 2025.",
      [
        "Urban slums in Karachi, Lahore and Rawalpindi.",
        "Pressure on health, housing, water and sanitation.",
        "Youth unemployment.",
      ],
      [
        "The National Population Policy (2017).",
        "Housing schemes such as the Naya Pakistan Housing Programme.",
        "Youth initiatives such as the Kamyab Jawan Programme.",
        "Expanded social safety programmes (BISP, Ehsaas).",
      ],
    ),
    {
      type: "callout",
      variant: "tip",
      title: "Exam tip",
      text: "You rarely need all ten. Pick four or five, and for each give one sentence of challenge, one example with a date, and one response. Political instability, the economy, security and education are the easiest to write about.",
    },
  ],
};

// The movement timeline: [year, event, causes, consequences]
const MOVEMENT = [
  ["1857", "War of Independence", ["British annexations destroyed the Muslim ruling elite"], ["Political, educational and economic decline of the Muslims"]],
  ["1858", "Beginning of British Crown rule", ["Failure of Company rule after 1857"], ["Muslims excluded from the administration", "Hindu advancement began under British patronage"]],
  ["1860s to 1870s", "Sir Syed Ahmad Khan's reform movement", ["Muslim backwardness after 1857"], ["The Aligarh Movement", "Foundation of modern Muslim political awareness"]],
  ["1885", "Formation of the Indian National Congress", ["The British needed an advisory body"], ["Congress emerged as a Hindu-dominated body (from the Muslim view)", "Muslims felt politically insecure"]],
  ["1905", "Partition of Bengal", ["Administrative reasons", "A Muslim majority in East Bengal"], ["Muslim political confidence increased", "Hindu opposition exposed the communal divide"]],
  ["1906", "Formation of the All-India Muslim League", ["Fear of Hindu majority rule", "Congress bias"], ["Muslims gained a separate political platform", "Organised Muslim nationalism began"]],
  ["1909", "Morley-Minto Reforms", ["Muslim League demands"], ["Separate electorates were recognised", "Muslims were acknowledged as a distinct political community"]],
  ["1916", "Lucknow Pact", ["The need for Hindu-Muslim unity"], ["Congress accepted separate electorates", "The cooperation was short-lived"]],
  ["1928 to 1929", "Nehru Report and Jinnah's Fourteen Points", ["The Nehru Report ignored Muslim safeguards"], ["The Fourteen Points became the Muslim constitutional demands", "Political separation widened"]],
  ["1930", "Allama Iqbal's Allahabad Address", ["Failure of constitutional protection for Muslims"], ["Demand for a Muslim state or states in north-west India", "The intellectual basis of Pakistan"]],
  ["1935", "Government of India Act", ["Constitutional deadlock"], ["Provincial autonomy", "Muslims realised the dangers of Hindu majority rule"]],
  ["1937", "Provincial elections and Congress rule", ["Implementation of the 1935 Act"], ["Congress ministries' policies were seen as anti-Muslim", "Muslims moved towards the demand for a separate state"]],
  ["1940", "Lahore Resolution", ["Failure of Congress-Muslim cooperation", "Experience of Congress rule"], ["The formal demand for Pakistan", "Mass Muslim support was mobilised"]],
  ["1942", "Cripps Mission", ["British weakness in World War II"], ["The Muslim League rejected a Congress-dominated centre", "The Pakistan demand was strengthened"]],
  ["1946", "Elections and Cabinet Mission", ["Transfer of power had become unavoidable"], ["The Muslim League won the Muslim seats", "The Pakistan demand gained legitimacy"]],
  ["1947", "Partition and creation of Pakistan", ["The Two-Nation Theory", "Political deadlock"], ["The emergence of Pakistan", "Fulfilment of the Muslim political struggle"]],
];

const movementTimeline = {
  type: "table",
  headers: ["Year", "Event", "Causes", "Consequences"],
  rows: MOVEMENT.map(([year, event, causes, results]) => [
    year,
    event,
    causes.join("; "),
    results.join("; "),
  ]),
  caption: "The Pakistan Movement at a glance (1857 to 1947).",
};

const movementStory = [];
for (const [year, event, causes, results] of MOVEMENT) {
  movementStory.push({ type: "subheading", text: `${year}: ${event}` });
  movementStory.push({ type: "paragraph", text: "Causes:" });
  movementStory.push({ type: "list", items: causes });
  movementStory.push({ type: "paragraph", text: "Consequences:" });
  movementStory.push({ type: "list", items: results });
}

const pakistanMovement = {
  title: "The Pakistan Movement, 1857 to 1947",
  summary:
    "A timeline of 16 events from the War of 1857 to Partition, each with its causes and consequences.",
  theory: [
    {
      type: "paragraph",
      text: "The Pakistan Movement was the political struggle that led from the decline of Muslim power in 1857 to the creation of Pakistan in 1947. Each step below follows the same pattern: an event, what caused it, and what it led to. Reading them in order shows how Muslim political demands grew from safeguards inside India to a separate state.",
    },
    { type: "heading", text: "Timeline table" },
    movementTimeline,
    { type: "heading", text: "Event by event" },
    ...movementStory,
    {
      type: "callout",
      variant: "note",
      title: "Terms to remember",
      text: "Separate electorates meant Muslims voted only for Muslim candidates; they were recognised in 1909 and accepted by Congress in 1916. The Two-Nation Theory is the idea that Hindus and Muslims are separate nations. The word used for 1857 differs between books (War of Independence, Mutiny, Uprising), so use the term your instructor uses.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Exam tip",
      text: "Remember the key dates in three groups: before the League (1857, 1885, 1905), the League years (1906, 1909, 1916, 1929, 1930) and the final stage (1935, 1937, 1940, 1946, 1947).",
    },
  ],
};

// The wars: [name, years, cause, outcome]
const wars = {
  title: "The Wars of Pakistan",
  summary:
    "The wars of 1948, 1965, 1971 and 1999 with their causes, main events and consequences, plus Siachen and other clashes.",
  theory: [
    { type: "heading", text: "1. First Kashmir War (1947 to 1948)" },
    { type: "paragraph", text: "Also called the First Indo-Pak War." },
    { type: "subheading", text: "Causes" },
    {
      type: "list",
      items: [
        "After Partition in 1947 the princely states could join India or Pakistan.",
        "The Maharaja of Jammu and Kashmir first wanted to stay independent and then faced a tribal invasion from Pakistan.",
        "Kashmir then acceded to India.",
      ],
    },
    { type: "subheading", text: "Main events" },
    {
      type: "list",
      items: [
        "Tribal militias from Pakistan entered Kashmir in October 1947.",
        "India sent troops after the Instrument of Accession was signed.",
        "The UN intervened and a ceasefire followed in 1948.",
      ],
    },
    { type: "subheading", text: "Consequences" },
    {
      type: "list",
      items: [
        "The Line of Control (LoC) was established.",
        "Kashmir was divided between Pakistan-controlled areas (Azad Kashmir and Gilgit-Baltistan) and Indian-controlled areas.",
        "The Kashmir dispute became a permanent flashpoint.",
      ],
    },

    { type: "heading", text: "2. Second Kashmir War (1965)" },
    { type: "subheading", text: "Causes" },
    {
      type: "list",
      items: [
        "Pakistan's Operation Gibraltar sent infiltrators into Indian-administered Kashmir.",
        "It was an attempt to support a Kashmiri insurgency.",
      ],
    },
    { type: "subheading", text: "Main events" },
    {
      type: "list",
      items: [
        "A full-scale war between India and Pakistan from September to November 1965.",
        "Battles at Lahore, Sialkot, Chhamb and Khem Karan.",
        "A ceasefire enforced by the UN, followed by the Tashkent Agreement (1966).",
      ],
    },
    { type: "subheading", text: "Consequences" },
    {
      type: "list",
      items: [
        "The status quo was kept: there was no territorial change.",
        "Military morale in Pakistan was boosted despite the stalemate.",
        "It highlighted the need for stronger military preparedness.",
      ],
    },

    { type: "heading", text: "3. Third Indo-Pak War / Bangladesh Liberation (1971)" },
    {
      type: "callout",
      variant: "note",
      title: "Naming",
      text: "Some notes call this the \"Third Kashmir War\". Most books call it the Third Indo-Pak War or the 1971 war, because it was fought over East Pakistan, not Kashmir.",
    },
    { type: "subheading", text: "Causes" },
    {
      type: "list",
      items: [
        "Political unrest in East Pakistan: the Bengali nationalist movement (Awami League) against West Pakistan.",
        "The Pakistan Army crackdown in East Pakistan (Operation Searchlight).",
        "India intervened in support of the Bengali nationalists.",
      ],
    },
    { type: "subheading", text: "Main events" },
    {
      type: "list",
      items: [
        "Full-scale war in East Pakistan in December 1971.",
        "Naval and air battles in West Pakistan.",
        "Pakistani forces surrendered in Dhaka on 16 December 1971.",
      ],
    },
    { type: "subheading", text: "Consequences" },
    {
      type: "list",
      items: [
        "Bangladesh was created.",
        "A huge refugee crisis: about 10 million people fled to India.",
        "Pakistan's military and political credibility was questioned.",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Territory lost",
      text: "East Pakistan covered roughly 147,000 sq km (about 15% of the country's area, with a majority of its population). Confirm the number in your instructor's textbook before writing it in an exam.",
    },

    { type: "heading", text: "4. Kargil War (1999)" },
    { type: "subheading", text: "Causes" },
    {
      type: "list",
      items: [
        "Pakistani forces and Kashmiri militants moved into positions on the Indian side in the Kargil sector.",
        "It was an attempt to draw international attention to the Kashmir issue.",
      ],
    },
    { type: "subheading", text: "Main events" },
    {
      type: "list",
      items: [
        "High-altitude fighting in the Kargil, Batalik and Dras sectors.",
        "Heavy artillery, air strikes and infantry battles.",
        "International pressure led to a Pakistani withdrawal in July 1999.",
      ],
    },
    { type: "subheading", text: "Consequences" },
    {
      type: "list",
      items: [
        "India kept all the territory.",
        "A diplomatic setback for Pakistan.",
        "Stronger surveillance along the LoC.",
        "It is also linked to nuclear risk reduction talks.",
      ],
    },

    { type: "heading", text: "Other border clashes and conflicts" },
    {
      type: "list",
      items: [
        "Siachen conflict (1984 to the present): India and Pakistan hold positions on a strategic glacier.",
        "Kashmir insurgency support and counter-insurgency (1989 to the present): a low-intensity conflict along the LoC.",
        "2001 to 2008: border skirmishes and cross-border terrorism linked to the war in Afghanistan.",
      ],
    },

    { type: "heading", text: "Summary table" },
    {
      type: "table",
      headers: ["War", "Year", "Cause", "Outcome"],
      rows: [
        ["1st Kashmir War", "1947 to 1948", "Partition, Kashmir's accession", "Ceasefire, LoC, Kashmir divided"],
        ["2nd Kashmir War", "1965", "Operation Gibraltar", "Tashkent Agreement, status quo"],
        ["3rd Indo-Pak War / Bangladesh Liberation", "1971", "East Pakistan unrest", "Bangladesh created, major loss for Pakistan"],
        ["Kargil War", "1999", "Infiltration, Kashmir issue", "India kept the territory, diplomatic setback for Pakistan"],
        ["Siachen conflict", "1984 to present", "Strategic glacier", "Ongoing military standoff"],
      ],
      caption: "The wars at a glance.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Exam tip",
      text: "For each war write four lines: year, cause, one key event, outcome. The summary table above is a good model to copy on the answer sheet.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Key-word highlighting. Every word or phrase in KEY_TERMS is shown highlighted
// the first time it appears in a paragraph or list item. A list item that
// starts with "Label: ..." also gets its label highlighted. To highlight
// something by hand, write **like this** in any text. To add or remove a
// highlighted word, edit the list below.
// ---------------------------------------------------------------------------
const KEY_TERMS = [
  "14 August 1947", "Land of the Pure", "Gwadar Port", "China-Pakistan Economic Corridor", "CPEC",
  "nuclear-armed", "fifth most populous", "Organisation of Islamic Cooperation", "OIC",
  "Islamic Republic of Pakistan", "federal parliamentary system", "Constitution of 1973", "1973 Constitution",
  "bicameral", "National Assembly", "Senate", "Prime Minister", "ceremonial head of state",
  "independent judiciary", "provincial autonomy", "two-party dominant",
  "dynastic politics", "weak internal democracy", "military interference",
  "Ideology of Pakistan", "Two-Nation Theory", "Allahabad Address", "Lahore Resolution",
  "Objectives Resolution", "Article 20", "Allama Muhammad Iqbal", "Muhammad Ali Jinnah", "Iqbal", "Jinnah",
  "Fourteen Points", "Lucknow Pact", "Morley-Minto Reforms", "Nehru Report", "Cripps Mission",
  "Cabinet Mission", "Government of India Act", "Aligarh Movement", "Sir Syed Ahmad Khan",
  "Indian National Congress", "All-India Muslim League", "Partition of Bengal", "separate electorates",
  "Pakistan Movement", "Partition",
  "18th Amendment", "National Action Plan", "Zarb-e-Azb", "Radd-ul-Fasaad", "circular debt",
  "load-shedding", "Pressler Amendment", "Billion Tree Tsunami", "Single National Curriculum",
  "Kamyab Jawan", "National Climate Change Policy", "National Population Policy", "IMF", "FATA",
  "Line of Control", "Operation Gibraltar", "Tashkent Agreement", "Operation Searchlight",
  "Instrument of Accession", "Bangladesh", "Kargil", "Siachen",
];

const TERM_PATTERN = new RegExp(
  KEY_TERMS.slice()
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")
    .replace(/^/, "\\b(?:")
    .concat(")\\b"),
  "g",
);

function highlightText(text, isListItem) {
  if (text.includes("**")) return text; // already marked by hand
  const seen = new Set();
  let result = text.replace(TERM_PATTERN, (match) => {
    if (seen.has(match)) return match;
    seen.add(match);
    return `**${match}**`;
  });
  if (isListItem && !result.startsWith("**")) {
    result = result.replace(/^([^:*]{2,40}):/, "**$1**:");
  }
  return result;
}

function highlightBlock(block) {
  if (block.type === "paragraph") {
    return { ...block, text: highlightText(block.text, false) };
  }
  if (block.type === "list") {
    return { ...block, items: block.items.map((item) => highlightText(item, true)) };
  }
  return block;
}

function withHighlights(chapters) {
  return chapters.map((chapter) => ({
    ...chapter,
    theory: chapter.theory.map(highlightBlock),
  }));
}

export const pakistanStudiesChapters = withHighlights([
  introduction,
  politicalStructure,
  ideology,
  challenges,
  pakistanMovement,
  wars,
]);
