import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

type Props = {
  title: string;
  projType: string;
  stack: string;
  desc: string;
  href: string;
  image: StaticImageData;
};

function ExperienceCard({ title, projType, stack, desc, href, image }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] md:snap-center
    bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer 
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[90px] object-cover object-center"
          src={image}
          alt="project image"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-light">{title}</h4>
        <p className="font-bold text-lg md:text-2xl mt-1 text-purple-300 decoration-[#8185E1]/50">
          {projType}
        </p>
        <div className="flex space-x-2 my-2">
          <span className="text-sm text-gray-300 pb-2">Stack: {stack}</span>
        </div>
        <div className="space-y-4 md:text-lg text-base">
          <p>{desc}</p>
        </div>
        <div className="pt-5 hover:text-[#8185E1]/90">
          <a href={href} className="underline decoration-[#8185E1]/50">
            Check it out
          </a>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
