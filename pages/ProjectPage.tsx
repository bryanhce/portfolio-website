import Header from "../components/Header";
import Footer from "../components/Footer";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Banner from "../components/Banner/Banner";
import { motion } from "framer-motion";
import ProjectItemLeft from "../components/Project/ProjectItemLeft";
import ProjectItemRight from "../components/Project/ProjectItemRight";
import { contents } from "../data/projectPageData";

const ProjectPage = () => {
  const [text, count] = useTypewriter({
    words: ["My project showcase"],
    loop: 1,
  });

  return (
    <div
      className="bg-gray-700 text-white h-screen 
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8185E1]"
    >
      <Header isHeaderSticky={false} />
      <div className="flex-col">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold px-10 md:mb-5 text-center">
          <span>{text}</span>
          <Cursor cursorColor="#8185E1" />
        </h1>
        <br />
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <Banner />
        </motion.div>
        {contents.map((c, id) =>
          id % 2 == 0 ? (
            <motion.div
              whileInView={{ transform: "translateY(0px)", opacity: 1 }}
              initial={{ transform: "translateY(100px)", opacity: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              key={id}
            >
              <ProjectItemLeft content={c} />
            </motion.div>
          ) : (
            <motion.div
              whileInView={{ transform: "translateY(0px)", opacity: 1 }}
              initial={{ transform: "translateY(100px)", opacity: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              key={id}
            >
              <ProjectItemRight content={c} />
            </motion.div>
          )
        )}
      </div>
      <Footer isVisibleOnMobile={false} />
    </div>
  );
};

export default ProjectPage;
