import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactMe from "../components/ContactMe";
import AboutCard from "../components/About/AboutCard";
import { aboutData } from "../data/aboutPageData";

const AboutPage = () => {
  const [text, count] = useTypewriter({
    words: ["More About Me"],
    loop: 1,
  });

  const container = useRef(null);
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    container: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className="bg-gray-700 text-white h-screen
      snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8185E1]"
      ref={scrollContainerRef}
    >
      <Header isHeaderSticky={false} />
      <div className="flex-col md:px-20">
        <h1 className="text-4xl lg:text-5xl font-semibold px-10 mb-5 text-center">
          <span>{text}</span>
          <Cursor cursorColor="#8185E1" />
        </h1>
        <br />
      </div>
      <main ref={container} className="relative">
        {aboutData.map((data, i) => {
          const targetScale = 1 - (aboutData.length - i) * 0.05;
          return (
            <AboutCard
              key={i}
              {...data}
              index={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
      <div className="mt-[-10%]">
        <ContactMe isFormal={false} showConnectHeader={false} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
