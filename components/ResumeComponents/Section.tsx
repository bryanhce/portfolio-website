import React from "react";
import ResumeTitle from "../Typography/ResumeTitle";
import { Text, Collapse, useDisclosure } from "@chakra-ui/react";

type Props = {
  content: Array<any>;
  title: string;
};

const Section = ({ content, title }: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="ml-15 mt-7">
      <ResumeTitle text={title} onClick={onToggle} />
      <Collapse className="mt-4" in={!isOpen} animateOpacity>
        {content.map((c) => (
          <>
            <Text className="text-2xl ml-20 text-[#E17FB3]">{c.title}</Text>
            <Text className="text-m ml-20">{c.desc}</Text>
            <Text className="text-m ml-20">{c.desc2}</Text>
            <Text as="i" className="text-sm ml-20 mt-1 text-[lightgray]">
              {c.date}
            </Text>
            <br />
            <br />
          </>
        ))}
      </Collapse>
    </div>
  );
};

export default Section;
