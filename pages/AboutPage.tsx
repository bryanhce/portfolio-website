import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import SpotifyDivision from "../components/About/SpotifyDivision";
import SkillsDivision from "../components/About/SkillsDivision";
// import ScrollingText from "../components/About/ScrollingText";

const AboutPage = () => {
  const [text, count] = useTypewriter({
    words: ["More About Me"],
    loop: 1,
  });

  return (
    <div
      className="bg-gray-700 text-white h-screen 
      snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8185E1]"
    >
      <Header isHeaderSticky={false} />
      <div className="flex-col px-20">
        <h1 className="text-4xl lg:text-5xl font-semibold px-10 mb-5 text-center">
          <span>{text}</span>
          <Cursor cursorColor="#8185E1" />
        </h1>
        <br />
        {/* uncomment when completed */}
        {/* <ScrollingText /> */}
        {/* <SkillsDivision />
        <SpotifyDivision /> */}
        {/* delete once others are done */}
        <div className="text-center">
          <span>Under construction! Coming soon!</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
