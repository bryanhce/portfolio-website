import Header from "../components/Header";
import Section from "../components/Resume/Section";
import Footer from "../components/Footer";
import {
  careerHistory,
  education,
  leadership,
  volunteering,
} from "../data/resumePageData";

import { Cursor, useTypewriter } from "react-simple-typewriter";

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
      <Header isHeaderSticky={false} />
      <div className="flex-col text-center px-8 md:px-0">
        <h1 className="text-4xl lg:text-5xl font-semibold px-10 mb-5">
          <span>{text}</span>
          <Cursor cursorColor="#8185E1" />
        </h1>
        <Section content={careerHistory} title={"Career History"} />
        <Section content={education} title={"Education"} />
        <Section content={leadership} title={"Leadership Experiences"} />
        <Section content={volunteering} title={"Volunteering Experiences"} />
      </div>
      <Footer isVisibleOnMobile={false} />
    </div>
  );
};

export default ResumePage;
