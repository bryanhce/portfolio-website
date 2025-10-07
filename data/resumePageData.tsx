export type ResumeContent = {
  title: string;
  date: string;
  titleLink?: string;
  desc?: string;
  desc2?: string;
};

const careerHistory: ResumeContent[] = [
  {
    title: "PayPal, Software Engineer Intern",
    titleLink: "https://www.paypal.com/",
    desc: "PayPal World Team",
    date: "Aug 2025 - Dec 2025",
  },
  {
    title: "Workato, Software Engineer Intern",
    titleLink: "https://www.workato.com/",
    desc: "UI Team",
    date: "April 2025 - July 2025",
  },
  {
    title: "ShopBack, Backend Engineer Intern",
    titleLink: "https://www.shopback.sg/",
    desc: "Cashback & Cashout Team",
    date: "Jan 2025 - March 2025",
  },
  {
    title: "GovTech, Software Engineer Intern",
    titleLink: "https://www.tech.gov.sg/",
    desc: "Build on BOB Team",
    date: "Aug 2024 - Jan 2025",
  },
  {
    title: "MSD, Cloud Engineer Intern",
    titleLink: "https://www.msd-singapore.com/",
    desc: "Cloud FinOps Team",
    date: "Jan 2024 - Aug 2024",
  },
  {
    title: "Factorem, Full Stack Engineer Intern",
    titleLink: "https://www.factorem.co/",
    desc: "Product Team",
    date: "May 2023 - Aug 2023",
  },
  {
    title: "NUS School of Computing, Teaching Assistant",
    titleLink: "https://www.comp.nus.edu.sg/",
    desc: "CS2030S: Programming Methodology II",
    date: "Jan 2023 - May 2023",
  },
  {
    title: "OCBC Bank, Data Analyst Intern",
    titleLink: "https://www.ocbc.com/group/gateway.page",
    desc: "Group Human Resource: Human Analytics Team",
    date: "May 2022 - Aug 2022",
  },
  {
    title: "Ohmyhome, Backend and Data Engineer Intern",
    titleLink: "https://ohmyhome.com/en-sg/",
    date: "Feb 2021 - Aug 2021",
  },
  {
    title: "People's Association, Intern",
    titleLink: "https://www.pa.gov.sg/",
    date: "Jan 2019 - Feb 2019",
  },
];

const education: ResumeContent[] = [
  {
    title: "National University of Singapore (NUS)",
    desc: "Bachelor of Computer Science, Honours",
    desc2: "Specialising in Artificial Intelligence (AI)",
    date: "Aug 2021 - Dec 2025",
  },
  {
    title: "University of North Carolina, Chapel Hill (UNC)",
    desc: "Bachelor of Computer Science",
    desc2: "Student Exchange Programme (SEP)",
    date: "Aug 2023 - Dec 2023",
  },
  {
    title: "Tembusu College",
    desc: "Unversity Town College Programme",
    date: "Aug 2021 - May 2023",
  },
  {
    title: "Victoria Junior College (VJC)",
    desc: "Biology, Chemistry, Mathematics, Economics",
    date: "Jan 2017 - Dec 2018",
  },
  { title: "Victoria School", date: "Jan 2013 - Dec 2016" },
];

const leadership: ResumeContent[] = [
  {
    title: "Chairperson, tEnPower Tembusu College",
    date: "Aug 2022 - May 2023",
  },
  {
    title: "External Relations Executive, NUS Technopreneurship Society",
    date: "Aug 2022 - May 2023",
  },
  {
    title: "Project Director, NUS Social Impact Catalyst",
    date: "Aug 2021 - May 2023",
  },
];

const volunteering: ResumeContent[] = [
  {
    title: "Software Developer, CS + Social Good",
    desc: "Planned the development of website for a social group.",
    date: "Aug 2023 - Dec 2023",
  },
  {
    title: "English Teacher, Shwegyin Myanmar",
    desc: "Conducted weekly Zoom classes with underprivileged children to improve their English proficiency.",
    date: "Aug 2021 - May 2023",
  },
  {
    title: "Teacher, Shine Children and Youth Services",
    desc: "Conducted supplementary classes with underprivileged children to help with homework.",
    date: "Jan 2021 - May 2021",
  },
  {
    title: "Volunteer, TCIL Special Needs",
    desc: "Conducted weekly arts and craft lessons for adults with special needs.",
    date: "Mar 2017 - Mar 2018",
  },
];

export { careerHistory, education, leadership, volunteering };
