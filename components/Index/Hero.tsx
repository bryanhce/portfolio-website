import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profilePicture from "../../images/profile-picture.png";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "an entrepreneur",
      "a software developer",
      "a problem-solver",
      "a food lover",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        className="relative h-70 w-60 mx-auto object-contain"
        src={profilePicture}
        alt="profile picture"
      />
      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-300 pl-5 pb-2 tracking-[15px]">
          [Bryan Ho]
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">I am {text}</span>
          <Cursor cursorColor="#8185E1" />
        </h1>
      </div>
    </div>
  );
}
