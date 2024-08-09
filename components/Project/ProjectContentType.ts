import { StaticImageData } from "next/image";

export type TProjectContent = {
  title: string;
  desc: string;
  learningAreas: string;
  githubLink: string;
  demoLink: string;
  image: StaticImageData;
};
