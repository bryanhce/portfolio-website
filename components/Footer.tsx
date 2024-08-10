import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const [isHoverLinkedIn, setIsHoverLinkedIn] = useState(false);
  const [isHoverGithub, setIsHoverGithub] = useState(false);

  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-cecnter">
        <SocialIcon
          url="https://www.linkedin.com/in/bryanhce/"
          fgColor={isHoverLinkedIn ? "#bf6b98" : "gray"}
          bgColor="transparent"
          onMouseEnter={() => setIsHoverLinkedIn(true)}
          onMouseLeave={() => setIsHoverLinkedIn(false)}
        />
        <SocialIcon
          url="https://github.com/bryanhce"
          fgColor={isHoverGithub ? "#bf6b98" : "gray"}
          bgColor="transparent"
          onMouseEnter={() => setIsHoverGithub(true)}
          onMouseLeave={() => setIsHoverGithub(false)}
        />
      </div>
    </footer>
  );
};

export default Footer;
