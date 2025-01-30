import Image from "next/image";
import { Stack, Text } from "@chakra-ui/react";
import { TProjectContent } from "./ProjectContentType";
import PurpleButton from "../UIElements/PurpleButton";
import PinkButton from "../UIElements/PinkButton";

type Props = {
  content: TProjectContent;
};

const ProjectItemRight = ({ content }: Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row max-w-7xl px-10 pt-12 pb-10 md:justify-evenly mx-auto items-center">
      <Stack className="md:w-3/5">
        <h4 className="text-4xl font-semibold">{content.title}</h4>
        <Text className="py-5 text-base text-left">{content.desc}</Text>
        <Text className="pb-5 text-base text-left">
          <span className="font-bold text-[#fa8dc7]">Areas of growth: </span>
          {content.learningAreas}
        </Text>
        <div className="text-left">
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
      <div className="pb-5 md:pb-0 md:w-2/5 justify-end items-center flex">
        <Image
          className="h-[16rem] w-[16rem] md:h-[22rem] md:w-[22rem] object-contain shadow-[#111010] shadow-lg"
          src={content.image}
          alt={`${content.title} image`}
        />
      </div>
    </div>
  );
};

export default ProjectItemRight;
