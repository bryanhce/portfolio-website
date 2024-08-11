"use client";
import React, { useState } from "react";

interface IconProps {
  Icon: React.ElementType;
  text: string;
}

const CustomIcon: React.FC<IconProps> = ({ Icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-3 text-center items-center content-center justify-center flex flex-col">
      <Icon
        className="fill-gray-300 hover:fill-[#8185E1]"
        size="3rem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <h1
        className={`transition-opacity duration-500 ${
          isHovered
            ? "opacity-100 visibility-visible"
            : "opacity-0 visibility-hidden"
        }`}
      >
        {text}
      </h1>
    </div>
  );
};

export default CustomIcon;
