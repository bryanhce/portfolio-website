import React from "react";
import { Tooltip } from "@chakra-ui/react";

type Props = {
  text?: string;
  onClick: () => any;
};

const ResumeTitle = ({ text, onClick }: Props) => {
  return (
    <Tooltip
      label="Click to shorten or lengthen this section"
      aria-label="A tooltip"
      placement="right"
      bg="#E17FB3"
      color="black"
      hasArrow
    >
      <text
        className="text-3xl cursor-pointer
       text-[#8185E1] hover:text-[#8185E1]/90 font-bold"
        onClick={onClick}
      >
        {text}
      </text>
    </Tooltip>
  );
};

export default ResumeTitle;
