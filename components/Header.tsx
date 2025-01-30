import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

type HeaderProps = {
  isHeaderSticky: boolean;
};

const heroButtonStyle =
  "px-6 py-2 border border-[#242424] rounded-full border-none \
  uppercase text-sm tracking-widest text-gray-300 \
  transition-all hover:border-[#8185E1] hover:text-[#E17FB3]";

export default function Header({ isHeaderSticky }: HeaderProps) {
  const router = useRouter();

  useEffect(() => {
    const sectionPath = router.asPath.split("#")[1];
    if (sectionPath) {
      const section = document.getElementById(sectionPath);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  return (
    <header
      className={`${isHeaderSticky ? "sticky" : ""} 
      top-1 p-5 flex items-start 
      justify-between max-w-7xl mx-auto
      z-20 xl:items-center`}
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 1,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <div className="pt-1">
          <Link href="/">
            <button className={heroButtonStyle}>Home</button>
          </Link>
          <Link href="/ProjectPage">
            <button className={heroButtonStyle}>Projects</button>
          </Link>
          <Link href="/#about" className="hidden md:inline">
            <button className={heroButtonStyle}>About</button>
          </Link>
          <Link href="/ResumePage">
            <button className={heroButtonStyle}>Resume</button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 1,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer pt-1"
      >
        <Link href="/#contact">
          <button className={heroButtonStyle}>Connect</button>
        </Link>
      </motion.div>
    </header>
  );
}
