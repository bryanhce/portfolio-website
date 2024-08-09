import React from "react";
import Link from "next/link";

type PinkButtonProps = {
  text: string;
  href: string;
  isOpenNewTab?: boolean;
};

const PinkButton = ({ text, href, isOpenNewTab }: PinkButtonProps) => {
  return (
    <button
      className="bg-[#E17FB3] hover:bg-[#ff90cb] 
        shadow-lg py-3 px-5 mr-5 rounded-md 
        text-black font-bold text-lg "
    >
      <Link href={href} target={isOpenNewTab ? "_blank" : "_self"}>
        {text}
      </Link>
    </button>
  );
};

export default PinkButton;
