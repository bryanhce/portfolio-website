import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Stack, Text } from "@chakra-ui/react";

type Content = {
  title: string;
  desc: string;
  learningAreas: string;
  githubLink: string;
  demoLink: string;
  image: StaticImageData;
};

type Props = {
  content: Content;
};

const ProjectItemLeft = ({ content }: Props) => {
  return (
    <div className="flex flex-row max-w-7xl px-10 pt-12 pb-3 justify-evenly mx-auto items-center">
      <Image
        className="relative h-80 w-70 px-10 object-contain hidden md:inline"
        src={content.image}
        alt={`${content.title} image`}
      />
      <Stack>
        <h4 className="text-4xl font-semibold">{content.title}</h4>
        <Text className="py-5 text-base text-left">{content.desc}</Text>
        <Text className="pb-5 text-base text-left">
          <span className="font-bold text-[#8185E1]">Areas of growth: </span>
          {content.learningAreas}
        </Text>{" "}
        <div className="w-15 text-right">
          {content.githubLink && (
            <button
              className="bg-[#8185E1] py-3 px-5 mr-5
              rounded-md text-black font-bold text-lg "
            >
              <Link href={content.githubLink} target="_blank">
                Github
              </Link>
            </button>
          )}
          {content.demoLink && (
            <button
              className="bg-[#E17FB3] py-3 px-5 
              rounded-md text-black font-bold text-lg "
            >
              <Link href={content.demoLink} target="_blank">
                Demo
              </Link>
            </button>
          )}
        </div>
      </Stack>
    </div>
  );
};

export default ProjectItemLeft;
