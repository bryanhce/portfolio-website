import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-1 p-5 flex items-start justify-between max-w-7xl mx-auto
    z-20 xl:items-center"
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
            <button className="heroButton border-none">Home</button>
          </Link>
          <Link href="/#about">
            <button className="heroButton border-none">About</button>
          </Link>
          <Link href="/ProjectPage">
            <button className="heroButton border-none">Projects</button>
          </Link>
          <Link href="/ResumePage">
            <button className="heroButton border-none">Resume</button>
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
          <button className="heroButton border-none">Connect</button>
        </Link>
      </motion.div>
    </header>
  );
}
