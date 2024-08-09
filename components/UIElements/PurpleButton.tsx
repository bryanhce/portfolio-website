import React from "react";
import Link from "next/link";

type PurpleButtonProps = {
  text: string;
  href: string;
  isOpenNewTab?: boolean;
};

const PurpleButton = ({ text, href, isOpenNewTab }: PurpleButtonProps) => {
  return (
    <button
      className="bg-[#8185E1] hover:bg-[#9299ff] 
        shadow-lg py-3 px-5 mr-5 rounded-md 
        text-black font-bold text-lg "
    >
      <Link href={href} target={isOpenNewTab ? "_blank" : "_self"}>
        {text}
      </Link>
    </button>
  );
};

export default PurpleButton;
