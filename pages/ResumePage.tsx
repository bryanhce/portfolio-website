import React from "react";
import Header from "../components/Header";
import Section from "../components/ResumeComponents/Section";
import Footer from "../components/Footer";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const work = [
  {
    title: "GovTech, Software Engineer Intern",
    titleLink: "https://www.tech.gov.sg/",
    date: "Aug 2024 - Jan 20245",
  },
  {
    title: "MSD, Cloud Engineer Intern",
    titleLink: "https://www.msd-singapore.com/",
    date: "Jan 2024 - Aug 2024",
  },
  {
    title: "Factorem, Full Stack Engineer Intern",
    titleLink: "https://www.factorem.co/",
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
    date: "May 2022 - Aug 2022",
  },
  {
    title: "Ohmyhome, Backend Engineer Intern",
    titleLink: "https://ohmyhome.com/en-sg/",
    date: "Feb 2021 - Aug 2021",
  },
  {
    title: "People's Association, Intern",
    titleLink: "https://www.pa.gov.sg/",
    date: "Jan 2019 - Feb 2019",
  },
];

const education = [
  {
    title: "National University of Singapore (NUS)",
    desc: "Bachelor of Computer Science, Honours",
    desc2: "Specialising in Artificial Intelligence (AI)",
    date: "Aug 2021 - May 2025",
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

const leadership = [
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

const volunteering = [
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

const ResumePage = () => {
  const [text, count] = useTypewriter({
    words: ["A longer history of my experiences"],
    loop: 1,
  });

  return (
    <div
      className="bg-gray-700 text-white h-screen 
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8185E1]"
    >
      <Header isMainPage={false} />
      <div className="flex-col text-center px-8 md:px-0">
        <h1 className="text-4xl lg:text-5xl font-semibold px-10 mb-5">
          <span>{text}</span>
          <Cursor cursorColor="#8185E1" />
        </h1>
        <Section content={work} title={"Career History"} />
        <Section content={education} title={"Education"} />
        <Section content={leadership} title={"Leadership Experiences"} />
        <Section content={volunteering} title={"Volunteering Experiences"} />
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
