import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <ChakraProvider>
          <Component {...pageProps} />

          {/* For page transition animation */}
          <motion.div
            // on exit
            className="absolute top-0 left-0 w-[100%] h-[100vh] origin-top bg-[#8185E1] z-[21]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            // on enterance
            className="absolute top-0 left-0 w-[100%] h-[100vh] origin-bottom bg-[#fa8dc7] z-[21]"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </ChakraProvider>
      </motion.div>
    </AnimatePresence>
  );
}
