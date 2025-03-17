import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import meme404 from "../images/meme404.png";

const Custom404 = () => {
  return (
    <div
      className="bg-gray-700 text-white h-screen 
snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8185E1]"
    >
      <Header isHeaderSticky={true} />
      <div className="text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl lg:text-5xl font-semibold pt-15">
          Well this is awkward...
        </h2>
        <h3 className="text-xl pt-5">
          The page you are looking for does not exist! Did this just happen to
          you?
        </h3>
        <Image
          className="w-2/5 h-2/5 pt-10"
          src={meme404}
          alt="not found meme"
        />
        <h3 className="text-xl pt-10">
          Feel free to click on the navigation bar at the top to find your way!
        </h3>
      </div>
      <Footer isVisibleOnMobile={false} />
    </div>
  );
};

export default Custom404;
