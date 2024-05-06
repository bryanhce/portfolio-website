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
    <div className="mt-7">
      <ResumeTitle text={title} onClick={onToggle} />
      <Collapse className="mt-4" in={!isOpen} animateOpacity>
        {content.map((c) => (
          <>
            <Text className="text-2xl text-[#E17FB3]">{c.title}</Text>
            <Text className="text-m ">{c.desc}</Text>
            <Text className="text-m">{c.desc2}</Text>
            <Text as="i" className="text-sm mt-1 text-[lightgray]">
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
