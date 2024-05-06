import React from "react";

type Props = {
  text?: string;
  onClick: () => any;
};

const ResumeTitle = ({ text, onClick }: Props) => {
  return (
    <text
      className="text-3xl ml-12 cursor-pointer
       text-[#8185E1] hover:underline font-bold"
      onClick={onClick}
    >
      {text}
    </text>
  );
};

export default ResumeTitle;
