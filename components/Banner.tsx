import React from "react";
import Image from "next/image";
import CCImage from "../images/CC.png";
import noisyBirdImage from "../images/NoisyBird.png";
import rubiSlicesImage from "../images/RubiSlices.png";
import nbwuImage from "../images/nbwu-icon.jpeg";
import sgFoodImage from "../images/sgFoodPicker.png";
import strikerImage from "../images/striker-icon.jpeg";

type Props = {
  images: Array<any>;
};

const Banner = () => {
  const images = [
    CCImage,
    nbwuImage,
    sgFoodImage,
    strikerImage,
    noisyBirdImage,
    rubiSlicesImage,
  ].map((image, id) => ({
    id,
    image,
  }));

  const ImageBanner = ({ images }: Props) => {
    return (
      <ul
        className="flex items-center justify-center 
      md:justify-start [&_li]:mx-5 [&_img]:max-w-none
       animate-infinite-scroll"
      >
        {images.map((i) => (
          <li key={i.id}>
            <Image src={i.image} width={250} height={250} alt="project image" />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className="w-full inline-flex flex-nowrap"
      // for gradient transition but only works on one end
      //   [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
      <ImageBanner images={images} />
      <ImageBanner images={images} />
    </div>
  );
};

export default Banner;
