import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>bryanhce</title>
        <meta name="description" content="Bryan's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <ChakraProvider>
            <Component {...pageProps} />
            <PageTransition />
          </ChakraProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
