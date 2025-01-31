import React from "react";
import { Tooltip } from "@chakra-ui/react";

type ResumeTitleProps = {
  text?: string;
  onClick: () => void;
  isOpen: boolean;
};

const ResumeTitle = ({ text, onClick, isOpen }: ResumeTitleProps) => {
  return (
    <Tooltip
      label={`Click to ${isOpen ? "expand" : "contract"}`}
      aria-label="A tooltip"
      placement="right"
      bg="#E17FB3"
      color="black"
      hasArrow
      className="px-3"
    >
      <h1
        className="text-3xl cursor-pointer
       text-[#8185E1] hover:text-[#8185E1]/90 font-bold"
        onClick={onClick}
      >
        {text}
      </h1>
    </Tooltip>
  );
};

export default ResumeTitle;
