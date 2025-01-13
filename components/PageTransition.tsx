import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

type Dimension = {
  width: number;
  height: number;
};

/**
 * Shuffles a copy of the array (Fisher–Yates shuffle).
 * @param {Array} arr items An array containing the items.
 */
const shuffle = (arr: Array<number>) => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const motionStates = {
  initial: {
    opacity: 1,
    transition: { duration: 0 },
  },

  populate: (delay: Array<number>) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * delay[0] },
  }),

  remove: (delay: Array<number>) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * delay[1] },
  }),
};

const PageTransition = () => {
  const [dimensions, setDimensions] = useState<Dimension>({
    width: 1440,
    height: 900,
  });

  const updateDimensions = () => {
    const { innerWidth, innerHeight } = window;

    setDimensions({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getBlocks = useMemo(() => {
    return (dimensions: Dimension, columnIndex: number) => {
      const { width, height } = dimensions;

      const blockSize = width * 0.05;
      const nbOfBlocks = Math.ceil(height / blockSize);
      const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));

      return shuffledIndexes.map((randomIndex: number, index: number) => (
        <motion.div
          key={index}
          className="bg-[#8185E1] w-full h-[5vw] z-[30]"
          variants={motionStates}
          initial="initial"
          animate="remove"
          exit="populate"
          custom={[columnIndex + randomIndex, 20 - columnIndex + randomIndex]}
        />
      ));
    };
  }, []);

  return (
    <div className="hidden md:flex h-screen overflow-hidden absolute top-0 left-0 z-[21] pointer-events-none">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="flex flex-col w-[5vw] h-full">
          {getBlocks(dimensions, index)}
        </div>
      ))}
    </div>
  );
};

export default PageTransition;
