import Image, { StaticImageData } from "next/image";
import CCImage from "../images/CC.png";
import noisyBirdImage from "../images/NoisyBird.png";
import rubiSlicesImage from "../images/RubiSlices.png";
import nbwuImage from "../images/nbwu-icon.jpeg";
import sgFoodImage from "../images/sgFoodPicker.png";
import strikerImage from "../images/striker-icon.jpeg";
import effBiImage from "../images/Eff-BI-Logo.png";
import quzzifyImage from "../images/quizzify_logo.png";
import speakEasyImage from "../images/SpeakEasy.png";

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
      <ul
        className={`md:flex md:items-center 
          md:justify-start
          md:animate-infinite-scroll hidden
      `}
      >
        {images.map((i) => (
          <li key={i.id} className="md:px-10">
            <Image
              src={i.image}
              width={250}
              height={250}
              alt="project image"
              className="md:max-w-none"
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full inline-flex flex-nowrap">
      <ImageBanner images={images} />
      <ImageBanner images={images} />
    </div>
  );
};

export default Banner;
