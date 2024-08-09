import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ho.cheng.en.bryan@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  const messagePlaceholder =
    "Dear Bryan, \n\nI will catch a grenade for you. \n\nBest, \nBruno Mars";

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl pl-2 hidden md:inline-flex">
        Contact
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
              placeholder="Name: Bruno Mars"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email: bruno@gmail.com"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject: Request to perform at your birthday"
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
            Connect
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
