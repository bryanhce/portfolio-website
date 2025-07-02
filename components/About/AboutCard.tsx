"use client";
import Image from "next/image";
import { useTransform, motion, MotionValue } from "framer-motion";
import { AboutData } from "../../data/aboutPageData";

interface AboutCardProps extends AboutData {
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const AboutCard = ({
  title,
  desc,
  src,
  color,
  index,
  progress,
  range,
  targetScale,
  imageCSS,
}: AboutCardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className={`flex flex-col relative h-[350px] w-[350px] md:h-[600px] md:w-[1200px] rounded-[25px] p-[20px] md:p-[50px] origin-top`}
        style={{
          backgroundColor: color,
          scale: scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        <h2 className="text-center m-0 text-[20px] md:text-[28px] text-black">
          {title}
        </h2>
        <div className="flex h-full mt-[10px] md:mt-[30px] gap-[40px]">
          <div className="md:w-2/5 relative flex items-center">
            <p className="text-sm md:text-base text-black first-letter:text-[20px] md:first-letter:text-[28px]">
              {desc}
            </p>
          </div>
          <div className="hidden md:flex relative w-3/5 h-full rounded-[25px] overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                fill
                src={src}
                alt="about card image"
                className={`${imageCSS}`}
                quality={100}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCard;
