import Image, { StaticImageData } from "next/image";
import CCImage from "../../images/CC.png";
import noisyBirdImage from "../../images/NoisyBird.png";
import rubiSlicesImage from "../../images/RubiSlices.png";
import nbwuImage from "../../images/nbwu-icon.jpeg";
import sgFoodImage from "../../images/sgFoodPicker.png";
import strikerImage from "../../images/striker-icon.jpeg";
import effBiImage from "../../images/Eff-BI-Logo.png";
import quzzifyImage from "../../images/quizzify_logo.png";
import speakEasyImage from "../../images/SpeakEasy.png";
import styles from "./styles.module.css";

type ImageBannerProps = {
  images: Array<{ id: number; image: StaticImageData }>;
};

const Banner = () => {
  const images = [
    CCImage,
    nbwuImage,
    sgFoodImage,
    strikerImage,
    noisyBirdImage,
    rubiSlicesImage,
    effBiImage,
    quzzifyImage,
    speakEasyImage,
  ].map((image, id) => ({
    id,
    image,
  }));

  const ImageBanner = ({ images }: ImageBannerProps) => {
    return (
      <div className={styles.imagesContainer}>
        <div className={styles.rowImages}>
          <div className={styles.set}>
            {images.map((img, i) => (
              <Image
                key={`first-${i}`}
                src={img.image}
                width={250}
                height={250}
                alt="project-image"
                className={styles.singleImage}
              />
            ))}
          </div>
          <div className={styles.set}>
            {images.map((img, i) => (
              <Image
                key={`second-${i}`}
                src={img.image}
                width={250}
                height={250}
                alt="project-image"
                className={styles.singleImage}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ImageBanner images={images} />;
};

export default Banner;
