import { StaticImageData } from "next/image";

import swiftieImage from "../images/swiftie.png";
import passionProjImage from "../images/passion-project.png";
import netflixGamesImage from "../images/netflix-and-games.png";
import chocoBananaImage from "../images/choco-banana.png";
import treeImage from "../images/tree.jpg";

export type AboutData = {
  title: string;
  desc: string | React.ReactNode;
  src: StaticImageData;
  color: string;
  imageCSS: string;
};

export const aboutData: AboutData[] = [
  {
    title: "When I'm not coding",
    desc: `Welcome to my little corner of the internet! While most of this site is
        dedicated to my professional journey, projects, work, and all things
        tech, I also wanted to carve out a space to share some of the things I
        enjoy outside of engineering (Yes! I am a proud Swiftie). They are
        things I do when I’m not staring into an IDE. Thanks for stopping by!`,
    src: swiftieImage,
    imageCSS: "object-cover",
    color: "#EBF5EE",
  },
  {
    title: "Netflix & Games",
    desc: `My downtime is often spent exploring different worlds through stories. 
           I enjoy everything from classic American sitcoms like Modern Family and 
           How I Met Your Mother to gripping dramas like Breaking Bad and
          Grey's Anatomy. I am also a fan of Anime and Korean Drama. I've watched shows ranging from
           One Piece and Attack On Titan to K-dramas like Descendants
          of the Sun and Goblin. Gaming has also been a big part of my life since I was
          young, I started with a Nintendo DS playing games like Pokemon and
          Fire emblem! Right now, I’m slowly making my way through the co-op
          adventure, It Takes Two.`,
    src: netflixGamesImage,
    imageCSS: "object-cover object-[center_35%]",
    color: "#CCD6EB"
  },
  {
    title: "Books & Baking",
    desc: `When I'm not consuming stories, I'm creating things of my own, usually
          in the kitchen. My baking adventures are a constant experiment, and my
          family and friends are my brave "test subjects." The results vary
          wildly; sometimes they love it, and other times, not so much. My most
          recent disaster was a dark chocolate sorbet that was way too bitter, a
          failed attempt to cater to local Singaporean tastes 🫣 I also enjoy
          reading, having recently completed The Courage to Be Disliked, which
          left me thinking a lot about the concepts of Teleology versus
          Etiology.`,
    src: chocoBananaImage,
    imageCSS: "object-cover",
    color: "#A4508B",
  },
  {
    title: "Passion Projects",
    desc: `Giving back to the community has always been something I care deeply
      about. In the past, I’ve volunteered at TOUCH Center for Independent
      Living, where I conducted arts and crafts sessions for adults with special
      needs. I’ve also provided after-school tuition to underprivileged children
      through SHINE Youth and Children Services. Beyond volunteering, I enjoy
      working on initiatives with friends to support causes we believe in. One
      project (nbwu) involved selling handmade resin jewellery to raise funds
      for various charities in Singapore like Transient Workers Count Too
      (TWC2).`,
    src: passionProjImage,
    imageCSS: "object-cover",
    color: "#EDADC7",
  },
  {
    title: "Featured In ",
    desc: (
      <span>
        I’ve had the chance to share my journey as a computer science student
        through a few media features, where I reflected on the ups and downs of
        studying tech and navigating the job market. Here are the articles from Business Insider:{" "}
        <a
          href="https://www.businessinsider.com/computer-science-job-market-was-tougher-than-i-expected-2023-12"
          target="_blank"
          className="underline"
        >
          The job market was tougher than I expected
        </a>{" "}
        and{" "}
        <a
          href="https://www.businessinsider.com/computer-science-major-myth-job-security-money-salary-2023-11"
          target="_blank"
          className="underline"
        >
          The myth of job security and high pay in computer science.
        </a>{" "}
        I shared these experiences in the hope that they help others feel less
        alone and better prepared.
      </span>
    ),
    src: treeImage,
    imageCSS: "object-cover",
    color: "#F4B942",
  },
];
