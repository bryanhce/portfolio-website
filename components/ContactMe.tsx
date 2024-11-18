import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactMeProps = {
  isFormal?: boolean;
};

function ContactMe({ isFormal }: ContactMeProps) {
  const { register, handleSubmit } = useForm<Inputs>();
  const toast = useToast();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (formData.name === null || formData.name.trim() === "") {
      toast({
        title: "Error",
        description: "Name is required.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (formData.email === null || formData.email.trim() === "") {
      toast({
        title: "Error",
        description: "Email is required.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (formData.subject === null || formData.subject.trim() === "") {
      toast({
        title: "Error",
        description: "Subject is required.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (formData.message === null || formData.message.trim() === "") {
      toast({
        title: "Error",
        description: "Message is required.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    window.location.href = `mailto:ho.cheng.en.bryan@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  const namePlaceholder = isFormal ? "Name" : "Name: Bruno Mars";
  const emailPlaceholder = isFormal ? "Email" : "Email: bruno@gmail.com";
  const subjectPlaceholder = isFormal
    ? "Subject"
    : "Subject: Request to perform at your birthday";
  const messagePlaceholder = isFormal
    ? "Message Body"
    : "Dear Bryan, \n\nI will catch a grenade for you. \n\nBest, \nBruno Mars";

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl pl-2 hidden md:inline-flex">
        Connect
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold md:text-center mb-[60px]">
          <span className="decoration-[#8185E1]/50 underline">
            Let&apos;s chat!
          </span>
        </h4>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder={namePlaceholder}
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder={emailPlaceholder}
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder={subjectPlaceholder}
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder={messagePlaceholder}
            className="contactInput h-44"
          />
          <button
            type="submit"
            className="bg-[#8185E1] hover:bg-[#9299ff] shadow-lg 
            py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
