import { motion } from "framer-motion";

const Circles = () => {
  return (
    <>
      <div
        className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52
        animate-ping"
      />
      <div className="rounded-full border border-[#E17FB3] h-[300px] w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#8185E1] h-[500px] w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#E17FB3] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#8185E1] h-[800px] w-[800px] absolute mt-52" />
    </>
  );
};

export default function BackgroundCircles() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative hidden md:flex justify-center items-center"
      >
        <Circles />
      </motion.div>
      {/* HACK: to remove animation based on screen width, if more use cases 
      in future then abstract to a hook */}
      <div className="relative flex md:hidden justify-center items-center">
        <Circles />
      </div>
    </>
  );
}
