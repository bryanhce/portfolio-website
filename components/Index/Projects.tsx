import { motion } from "framer-motion";
import Banner from "../Banner";
import PurpleButton from "../UIElements/PurpleButton";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
         text-gray-300 text-2xl hidden md:inline-flex"
      >
        Projects
      </h3>

      <div className="space-y-10 px-0 md:px-10 md:mt-20">
        <div>
          <Banner />
        </div>
        <h4 className="text-4xl font-semibold">
          Building has always been a{" "}
          <span className="underline decoration-[#8185E1]/50">passion</span>{" "}
          mine
        </h4>
        <div className="lg:w-10/12">
          <p className="text-base sm:w-[60rem]">
            Exploring different projects throughout the years have been an
            enriching journey for me. From{" "}
            <span className="text-purple-300 decoration-[#8185E1]/50">
              web development to mobile applications
            </span>
            , each project has been a learning opportunity that has fueled my
            passion for creating and problem-solving in the digital space.
            I&apos;m grateful for the chance to contribute to meaningful
            projects and bring ideas to life through software engineering.
          </p>
        </div>
        <PurpleButton text="View All Projects" href="/ProjectPage" />
      </div>
    </motion.div>
  );
}

export default Projects;
