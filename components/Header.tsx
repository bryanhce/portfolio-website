import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import HeaderButton from "./UIElements/HeaderButton";

type HeaderProps = {
  isHeaderSticky: boolean;
};

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
            <HeaderButton text="Home" />
          </Link>
          <Link href="/ProjectPage">
            <HeaderButton text="Projects" />
          </Link>
          <Link href="/#about" className="hidden md:inline">
            <HeaderButton text="About" />
          </Link>
          <Link href="/ResumePage">
            <HeaderButton text="Resume" />
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
          <HeaderButton text="Connect" />
        </Link>
      </motion.div>
    </header>
  );
}
