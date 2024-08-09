import React from "react";
import Image from "next/image";
import { Stack, Text } from "@chakra-ui/react";
import { TProjectContent } from "./ProjectContentType";
import PurpleButton from "../UIElements/PurpleButton";
import PinkButton from "../UIElements/PinkButton";

type Props = {
  content: TProjectContent;
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
            <PurpleButton
              text="Github"
              href={content.githubLink}
              isOpenNewTab={true}
            />
          )}
          {content.demoLink && (
            <PinkButton
              text="Demo"
              href={content.demoLink}
              isOpenNewTab={true}
            />
          )}
        </div>
      </Stack>
    </div>
  );
};

export default ProjectItemLeft;
