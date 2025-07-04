import { StaticImageData } from "next/image";

import strikerImage from "../images/striker-icon.jpeg";
import trustMeBroImage from "../images/TrustMeBro.jpg";
import rubiSlicesImage from "../images/RubiSlices.png";
import CCImage from "../images/CC.png";
import guestBookImage from "../images/guest_book.png";
import noisyBirdImage from "../images/NoisyBird.png";
import sgFoodPickerImage from "../images/sgFoodPicker.png";
import nbwuImage from "../images/nbwu-icon.jpeg";
import iPainImage from "../images/iPain.png";
import currProjectImage from "../images/portfolio-website-pic.png";
import storyGenImage from "../images/storyGenerator.png";
import effBiImage from "../images/Eff-BI-Logo.png";
import speakEasyImage from "../images/SpeakEasy.png";
import t4Image from "../images/tic-tac-toe-tum-gameplay.png";
import sgRadioImage from "../images/sg-radio.png"

interface projectData {
  title: string;
  desc: string;
  learningAreas: string;
  githubLink: string;
  demoLink: string;
  image: StaticImageData;
}

export const contents: projectData[] = [
  {
    title: "Eff BI",
    desc: "Eff BI (Effortless Business Intelligence), is a text-to-visualization application which enables business analysts, managers, and sales teams to easily visualise data insights. Users connect directly to their database from our app via their DB URI. Following, they can interact with their data using natural language, eliminating the need for users to write SQL queries or know how to create graphs. We built this as part of CS3216 and won Best Project for CS3216 and Best Open Sourced Project in the 25th STePS!",
    learningAreas:
      "Django, PostgreSQL, TypeScript, Vite, Multiple Agent LLM pipelining, LangChain",
    githubLink: "https://github.com/Vshnv2001/eff-bi",
    demoLink: "https://eff-bi.vercel.app/",
    image: effBiImage,
  },
  {
    title: "SpeakEasy",
    desc: "SpeakEasy is a language learning platform that focuses on immersing users in real-world scenarios. Each scenario is designed to provide contextual learning, where the flow of conversation is dynamic, driven by interaction between the user and a generative AI. This allows for personalised and adaptive language practice, offering a more natural and engaging learning experience.",
    learningAreas:
      "MongoDB, Django, TypeScript, ShadCN, Google Cloud Storage, OpenAI APIs",
    githubLink: "https://github.com/bryanhce/SpeakEasy",
    demoLink: "https://speakeasy-speakfreely.netlify.app/",
    image: speakEasyImage,
  },
  {
    title: "Tic-Tac-Toe-Tum",
    desc: "This game is a twist on the classic tic-tac-toe where we take it up a notch! Now you need 4 in a row to claim victory! Furthermore, you get a one-time use superpower that allows you to change your opponent's square to yours!",
    learningAreas: "WebSockets, live chats, building game rooms",
    githubLink: "https://github.com/bryanhce/tic-tac-toe",
    demoLink: "https://tic-tac-toe-tum.vercel.app/",
    image: t4Image,
  },
  {
    title: "RubiSlices",
    desc: "RubiSlices is a script that generates TikTok and Youtube Shorts using content from random Reddit Threads. I developed this with Google's text to speech engine and HuggingFace LLM pipeline for text summarization and censorship. Docker came in handy for package versioning across developers.",
    learningAreas:
      "Text to Speech, LLM pipelines, Docker, Python, design patterns like Singleton and Factory Pattern",
    githubLink: "https://github.com/bryanhce/reddit-videos",
    demoLink: "https://www.youtube.com/@RubiSlices",
    image: rubiSlicesImage,
  },
  {
    title: "SG Radio",
    desc: "SG Radio is a lightweight VS code extension that streams Singapore Radio stations right in your code editor! Back in the early 2000s growing up in Singapore, there was no Spotify yet. When I was studying for big exams like the PSLE and O-Levels, I would always have the radio on in the background. I made this extension to bring back those vibes! Just a fun way to relive the good old days.",
    learningAreas:
      "How to build a VS Code extension",
    githubLink: "https://github.com/bryanhce/sg-radio-vscode-extension",
    demoLink: "",
    image: sgRadioImage,
  },
  {
    title: "STRIKER",
    desc: "STRIKER a task manager application grounded in the principles of simplicity and intentionality. Inspired by the concept of bullet journaling by Ryder Carroll, we hope to bring to life a virtual, analytically-driven task manager. Our hope is to create an application that is simple to use, while providing as much useful insights and functionality to our users to boost their day-to-day productivity.",
    learningAreas:
      "React, Go, mySQL, Firebase Authentication, API testing with Postman, Github Actions for CI/CD, user surveys",
    githubLink: "https://github.com/bryanhce/striker",
    demoLink: "https://youtu.be/eSkVcKAsFsU?si=yLs3FrwPKnu4Paqj",
    image: strikerImage,
  },
  {
    title: "TrustMeBro",
    desc: "How do I know if this ChatGPT reply is correct? That is the solution I've built. TrustMeBro is a Chrome Extension to estimate LLM’s response consistency as a proxy for confidence, addressing entropic challenges in LLM by aggregating semantic agreement scores across responses generated by asynchronous LLM instances.",
    learningAreas:
      "OpenAI API, JavaScript, building a Chrome Extension, learning that OpenAI APIs are too expensive",
    githubLink: "https://github.com/HackNC-ChadGPT/Backend-ChadGPT",
    demoLink: "https://www.youtube.com/watch?v=FjXf1FthTs8",
    image: trustMeBroImage,
  },
  {
    title: "Coding Cucumbers",
    desc: "A place where I blog about my coding experiences through university, internships, workshops and projects. With this, I hope to share what I've learnt with the rest of the world. This is actually the first website I built! I had a lot of fun optimising my page to achieve the highest possible SEO score!",
    learningAreas:
      "HTML, JavaScript, CSS, blogging, Search Engine Optimisation (SEO), learning that making money from ads is not that simple!",
    githubLink: "https://github.com/bryanhce/coding_cucumbers",
    demoLink: "https://www.codingcucumbers.com/",
    image: CCImage,
  },
  {
    title: "Story Generator",
    desc: "Snap, click, and watch your world transform into captivating narratives with just a tap. Don't want to use images, no worries, you can sketch one out too! Whether you're a seasoned writer seeking inspiration or simply a dreamer craving new adventures, let my app be your muse.",
    learningAreas:
      "Andriod mobile app development with Java, XML, GCP Cloud Vision, TextCortex API",
    githubLink: "https://github.com/bryanhce/storyGenerator-android",
    demoLink: "https://youtu.be/eoRqZXtL0I0",
    image: storyGenImage,
  },
  {
    title: "Noisy Bird",
    desc: "Drawing inspiration from the classic Flappy Bird, my game offers a unique twist with the inclusion of the beloved Singaporean 'Ooo-O!' bird cries that sound with each tap, adding a touch of local charm. Motivated by a curiosity about game development, I embarked on this project as an opportunity to get a taste of the world of game creation and mechanics.",
    learningAreas: "Pygame, game physics, object collision detection",
    githubLink: "https://github.com/bryanhce/noisy-bird",
    demoLink: "https://www.youtube.com/watch?v=PpMYO5zMiII",
    image: noisyBirdImage,
  },
  {
    title: "GuestBook",
    desc: "GuestBook is a hotel management application that aims to revolutionise the small hotel industry by helping hotel managers efficiently manage their guests' data. Do away with complex Excel formulas and use our intuitive keywords to accomplish your everyday bookkeeping.",
    learningAreas: "Java, JavaFX, JUnit, drawing UML diagrams",
    githubLink:
      "https://github.com/bryanhce/tp/tree/7f9754cc4a841af5fcc7de369848dad67ac17de0?tab=readme-ov-file",
    demoLink: "",
    image: guestBookImage,
  },
  {
    title: "iPain",
    desc: "iPain is a flash card application, modelled after Anki using Python's TkInter GUI, that monitors head and eye movements to measure user's attention with Computer Vision. If the user, looks away from the screen while doing work, an flash card with question will appear. Answer it wrongly and a seemly unremovable meme will appear, blocking your screen. Clear it by answering the next question correctly or face the consequences of the memes doubling! Submitted for the most annoying hack!",
    learningAreas: "OpenCV, Tkinter for building GUI with Python",
    githubLink: "https://github.com/bryanhce/hacknroll-tembu21",
    demoLink: "https://www.youtube.com/watch?v=WMx7lD9ydGk",
    image: iPainImage,
  },
  {
    title: "SG Food Picker",
    desc: "This telegram bot is for the fickle minded who can't decide what to eat. Filter restaurants based on your preferences and receive recommendations from a repository of restaurants I have personally tried!",
    learningAreas: "Python, Pandas, creating telegram bots, webhooks",
    githubLink: "",
    demoLink: "https://t.me/sgfoodpickerbot",
    image: sgFoodPickerImage,
  },
  {
    title: "Portfolio Website",
    desc: "This is the website you are on right now! I used this website creation as a way of learning more about frontend programming in NextJS and to try out interesting packages to create animations.",
    learningAreas:
      "Next.js, Typescript, TailwindCSS, Chakra UI, fun animation packages like framer motion and react typewriter",
    githubLink: "https://github.com/bryanhce/portfolio-website",
    demoLink: "https://bryanhce-portfolio.vercel.app/",
    image: currProjectImage,
  },
  {
    title: "nbwu",
    desc: "Under the mentorship of NUS Social Impact Catalyst, nbwu helps raise funds for vaious charities in Singapore. We started during Circuit Breaker and have continued to gain momentum since, organising workshops for people with cerebal palsy and virtual marathons fundraiser for migrant workers. FYI, it's pronounced as 'And Be With You'!",
    learningAreas:
      "Building a non-tech startup, organising fundraisers, curating virtual marathons",
    githubLink: "",
    demoLink: "https://www.instagram.com/nbwu.sg/",
    image: nbwuImage,
  },
];
