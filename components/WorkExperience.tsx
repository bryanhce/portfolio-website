import React from "react";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

import codingCucumbersImage from "../images/codingCucumbers.png";
import guestBookImage from "../images/guest_book.png";
import nbwuImage from "../images/nbwu-icon.jpeg";
import sgFoodPickerImage from "../images/sgFoodPicker.png";
import strikerImage from "../images/striker-icon.jpeg";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left 
  md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl hidden md:inline-flex">
        Projects
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8185E1]"
      >
        <ExperienceCard
          title={"STRIKER"}
          projType={"Web Application"}
          stack={"React, Go, mySQL, Firebase Authentication, Selenium"}
          desc={
            "STRIKER a task manager application grounded in the principles of simplicity and intentionality. Inspired by the concept of bullet journaling by Ryder Carroll, we hope to bring to life a virtual, analytically-driven task manager. Our hope is to create an application that is simple to use, while providing as much useful insights and functionality to our users to boost their day-to-day productivity."
          }
          href={"https://striker-frontend.herokuapp.com/"}
          image={strikerImage}
        />
        <ExperienceCard
          title={"nbwu.sg"}
          projType={"Passion Project"}
          stack={"-"}
          desc={
            "Under the mentorship of NUS Social Impact Catalyst, nbwu helps raise funds for vaious charities in Singapore. We started during Circuit Breaker and have continued to gain momentum since, organising workshops and virtual marathons to raise funds."
          }
          href={"https://www.instagram.com/nbwu.sg/"}
          image={nbwuImage}
        />
        <ExperienceCard
          title={"Coding Cucumbers"}
          projType={"Blog Website"}
          stack={"HTML, CSS, JavaScript"}
          desc={
            "A place where I blog about my coding experiences through university, internships, workshops and projects. With this, I hope to share what I've learnt with the world."
          }
          href={"https://www.codingcucumbers.com/"}
          image={codingCucumbersImage}
        />
        <ExperienceCard
          title={"sgfoodpicker"}
          projType={"Telegram Bot"}
          stack={"Python, Pandas"}
          desc={
            "This telegram bot is for the fickle minded who can't decide what to eat. Filter restaurants based on your preferences and receive recommendations from a repository of restaurants I have personally tried!"
          }
          href={"https://t.me/sgfoodpickerbot"}
          image={sgFoodPickerImage}
        />
        <ExperienceCard
          title={"GuestBook"}
          projType={"CLI Application"}
          stack={"Java, JavaFX, JUnit"}
          desc={
            "GuestBook is a hotel management application that aims to revolutionise the small hotel industry by helping hotel managers efficiently manage their guests' data. "
          }
          href={"https://github.com/AY2223S1-CS2103T-W16-1/tp/releases"}
          image={guestBookImage}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
