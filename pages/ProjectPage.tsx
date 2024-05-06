import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectPage = () => {
  return (
    <div
      className="bg-gray-700 text-white h-screen 
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8185E1]
        text-center"
    >
      <Header />
      <Footer />
    </div>
  );
};

export default ProjectPage;
