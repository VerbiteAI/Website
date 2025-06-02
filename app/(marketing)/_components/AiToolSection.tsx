import React from "react";
import Image from "next/image";
import aiToolSectionImage from "../../../public/aiToolSectionImage.png";

const AiToolSection = () => {
  return (
    <section className="w-full flex justify-center items-center  bg-black text-white py-20 px-6 md:px-16">
      <div className="w-[90%] mx-auto flex  flex-col  gap-10">

        {/* Lewa sekcja tekstowa */}
        <div className="flex flex-col w-full flex justify-center items-center lg:justify-start lg:items-start mx-auto gap-10">
          <h2 className="text-4xl md:text-5xl font-semibold">
            AI tool that stands out
          </h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl">
            Tired of shallow AI content that demands hours of editing and fails{" "}
            <span className="underline text-[#7af5c2]">E-E-A-T</span> checks?
            Verbite is engineered differently, built for professionals who
            require both quality and efficiency in their SEO content creation.
            Here is the Verbite advantage:
          </p>
        </div>

        <div className="flex w-full flex-col-reverse lg:flex-row justify-start  space-y-10 gap-x-10 xl:gap-x-2 my-8 xl:my-16">
          <div className="flex justify-start lg:w-1/2 space-y-10 ">

            <div className=" w-full space-y-10 mt-12 flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <div className="w-full flex flex-col justify-center items-center lg:justify-start lg:items-start  text-start ">
                <h3 className="text-white text-lg md:text-xl font-medium leading-snug mb-2">
                  Enjoy an intuitive interface designed for productivity
                </h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-md">
                  This user-friendly platform makes managing all your content
                  projects simple and efficient. Easily collaborate with your
                  entire team to streamline your content workflow.
                </p>
              </div>

              <p className="text-neutral-500 text-base md:text-xl">
                Generate content that truly reflects your brand voice
              </p>
              <p className="text-neutral-500 text-base md:text-xl">
                Scale content creation with unparalleled efficiency
              </p>
              <p className="text-neutral-500 text-base md:text-xl">
                About articles bulk generation (listing)
              </p>
            </div>
          </div>

          {/* Prawa sekcja z obrazem */}
          <div className="w-full flex justify-center items-center m-4">
            <Image
              src={aiToolSectionImage}
              alt="AI Tool Section Image"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiToolSection;
