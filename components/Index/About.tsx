import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl hidden md:inline-flex">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-50 rounded-full object-cover
        md:rounded-lg md:w-50 md:h-80 xl:w-[450px] xl:h-[600px] relative"
      >
        <iframe
          src="https://my.spline.design/bryanavatar2copy-9cd6ce351d1725f8d277cda7762a03b0/"
          width="100%"
          height="100%"
          className="hidden md:inline"
        ></iframe>
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here&apos;s a{" "}
          <span className="underline decoration-[#8185E1]/50">little</span>{" "}
          about myself
        </h4>
        <br />
        <p className="text-base">
          I&apos;m a Computer Science undergraduate at the National University
          of Singapore. Being an{" "}
          <span className="text-purple-300 decoration-[#8185E1]/50">
            entrepreneur
          </span>{" "}
          at heart, I am energised by problem-solving and collaboration with
          like-minded peers. On the tech side, I am passionate about
          <span className="text-purple-300 decoration-[#8185E1]/50">
            {" "}
            Web Development and Database Management
          </span>
          . Marrying my two interests, my dream is to build
          <span className="text-purple-300 decoration-[#8185E1]/50">
            {" "}
            daring software{" "}
          </span>
          that changes the world.
        </p>
      </div>
    </motion.div>
  );
}
