import { useEffect, useState } from "react";
import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profilePicture from "../../images/profile-picture.png";

export default function Hero() {
  const [isTyping, setIsTyping] = useState(false);

  // delay start of typing animation to reduce initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 2500); // match BackgroundCircles animation duration

    return () => clearTimeout(timer);
  }, []);

  const [text, count] = useTypewriter({
    words: [
      "a software developer",
      "an entrepreneur",
      "a problem-solver",
      "a food lover",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="min-h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        className="relative h-70 w-60 mx-auto object-contain"
        src={profilePicture}
        alt="profile picture"
        priority
      />
      <div className="z-10 md:z-20 h-10">
        <h2 className="text-lg uppercase text-gray-300 pl-5 pb-2 tracking-[15px]">
          [Bryan Ho]
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          {isTyping ? (
            <span className="mr-3">I am {text}</span>
          ) : (
            <span className="mr-3">I am a software developer</span>
          )}
          <Cursor cursorColor="#8185E1" />
        </h1>
      </div>
    </div>
  );
}
