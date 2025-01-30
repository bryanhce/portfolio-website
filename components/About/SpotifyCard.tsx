import { motion } from "framer-motion";

type SpotifyCardProps = {
  src: string;
};

const SpotifyCard = ({ src }: SpotifyCardProps) => {
  return (
    <motion.div
      className="px-44 pt-5"
      transition={{ ease: "easeOut", duration: 2.5 }}
      initial={{
        x: 200,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <iframe
        src={src}
        width="100%"
        height="320"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
};

export default SpotifyCard;
