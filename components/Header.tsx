import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import HeaderButton from "./UIElements/HeaderButton";
import { FiMenu, FiX } from "react-icons/fi";

type HeaderProps = {
  isHeaderSticky: boolean;
};

const homeText = "home";
const projectText = "projects";
const aboutText = "about";
const resumeText = "resume";
const connectText = "connect";
const linkedInText = "linkedin";
const githubText = "github";

export default function Header({ isHeaderSticky }: HeaderProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionPath = router.asPath.split("#")[1];
    if (sectionPath) {
      const section = document.getElementById(sectionPath);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  const navigationLinks = (
    <>
      <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
        <HeaderButton text={homeText} fontSize="text-lg" />
      </Link>
      <Link href="/ProjectPage" onClick={() => setIsMobileMenuOpen(false)}>
        <HeaderButton text={projectText} fontSize="text-lg" />
      </Link>
      <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)}>
        <HeaderButton text={aboutText} fontSize="text-lg" />
      </Link>
      <Link href="/ResumePage" onClick={() => setIsMobileMenuOpen(false)}>
        <HeaderButton text={resumeText} fontSize="text-lg" />
      </Link>
      <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
        <HeaderButton text={connectText} fontSize="text-lg" />
      </Link>
      <hr />
      <Link
        href="https://www.linkedin.com/in/bryanhce/"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <HeaderButton text={linkedInText} fontSize="text-lg" />
      </Link>
      <Link
        href="https://github.com/bryanhce"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <HeaderButton text={githubText} fontSize="text-lg" />
      </Link>
    </>
  );

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
        <div className="pt-1 hidden md:inline">
          <Link href="/">
            <HeaderButton text={homeText} />
          </Link>
          <Link href="/ProjectPage">
            <HeaderButton text={projectText} />
          </Link>
          <Link href="/#about">
            <HeaderButton text={projectText} />
          </Link>
          <Link href="/ResumePage">
            <HeaderButton text={resumeText} />
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
        className="md:flex flex-row items-center text-gray-300 cursor-pointer pt-1 hidden"
      >
        <Link href="/#contact">
          <HeaderButton text={connectText} />
        </Link>
      </motion.div>

      <div className="md:hidden">
        <FiMenu
          size={24}
          onClick={() => setIsMobileMenuOpen(true)}
          className="cursor-pointer"
        />
      </div>

      {/* side menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 flex z-[23]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* Sidebar */}
            <motion.div
              className="w-64 bg-[#8185E1] p-4 shadow-lg"
              initial={{ x: "-100%" }}
              animate={{
                x: 0,
                transition: { type: "tween", duration: 0.5, ease: "easeOut" },
              }}
              exit={{
                x: "-100%",
                transition: { type: "tween", duration: 0.5, ease: "easeIn" },
              }}
            >
              <div className="flex justify-end">
                <FiX
                  size={24}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer"
                />
              </div>
              <nav className="mt-4 flex flex-col space-y-4">
                {navigationLinks}
              </nav>
            </motion.div>

            {/* backdrop */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { type: "tween", duration: 0.5, ease: "easeOut" },
              }}
              exit={{
                x: "100%",
                transition: { type: "tween", duration: 0.5, ease: "easeIn" },
              }}
              className="flex-grow bg-black opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
