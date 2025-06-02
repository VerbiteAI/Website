import React from 'react'
import Image from 'next/image';
import FiveAIAgents_Diagram from "../../../public/FiveAIAgents_Diagram.png";
import greyAstrix from "../../../public/greyAstrix.svg";
import greenAstrix from "../../../public/greenAstrix.svg";
import pinkAstrix from "../../../public/pinkAstrix.svg";
import purpleAstrix from "../../../public/purpleAstrix.svg";
import yellowAstrix from "../../../public/yellowAstrix.svg";
import greenHalo from "../../../public/greenHalo.svg";

const FiveAIAgents = () => {
  return (

    <section className="w-full bg-[#141415] text-white py-20 px-6 md:px-16">
      <div className="w-full xl:w-[75%] mx-auto flex flex-col items-center">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
          Five AI Agents in action
        </h2>

        <div className="flex flex-col 2xl:flex-row gap-12 items-center justify-center w-full">
          {/* Diagram */}
          <div className="w-full ">
            <Image
              src={FiveAIAgents_Diagram}
              alt="Five AI Agents Diagram"
              className="w-full h-auto max-w-full mx-auto rounded-xl"
            />
          </div>

          {/* Descriptions */}
          <div className="w-full 2xl:w-1/2 space-y-6">
            {[
              {
                title: "Deep Research Agent",
                color: "text-gray-400",
                text: (
                  <>
                    Verbite’s DeepResearch Agent gathers{" "}
                    <span className="text-gray-400">verified facts</span> from diverse sources and builds{" "}
                    <span className="text-gray-400">a detailed knowledge map.</span> This ensures{" "}
                    <span className="text-gray-400">deep context, accuracy,</span> and{" "}
                    <span className="text-gray-400">trustworthy content.</span>
                  </>
                ),
                icon: greyAstrix,
              },
              {
                title: "Articles Agent",
                color: "text-emerald-300",
                text: (
                  <>
                    The AI Articles Agent turns <span className="text-emerald-300">structured knowledge</span> into clear,{" "}
                    <span className="text-emerald-300">fact-based</span>, and{" "}
                    <span className="text-emerald-300">engaging</span> content. It’s designed to communicate{" "}
                    <span className="text-emerald-300">key insights</span> in a{" "}
                    <span className="text-emerald-300">reader-friendly</span> way.
                  </>
                ),
                icon: greenAstrix,
              },
              {
                title: "Category Agent",
                color: "text-red-400",
                text: (
                  <>
                    The Category Agent creates unique, <span className="text-red-400">SEO-friendly</span> ecommerce{" "}
                    <span className="text-red-400">category descriptions</span>. It’s built to boost search visibility and drive conversions.
                  </>
                ),
                icon: pinkAstrix,
              },
              {
                title: "Outline Designer",
                color: "text-violet-400",
                text: (
                  <>
                    The Outline Designer Agent turns research into a clear{" "}
                    <span className="text-violet-400">content blueprint</span>. It organizes key insights, plans keyword
                    placement, and aligns the structure with <span className="text-violet-400">reader intent</span>.
                  </>
                ),
                icon: purpleAstrix,
              },
              {
                title: "Quality Editor",
                color: "text-orange-400",
                text: (
                  <>
                    Our Quality Editor polishes the content for <span className="text-orange-400">flawless quality</span> and
                    formatting. It <span className="text-orange-400">verifies facts</span>, enhances{" "}
                    <span className="text-orange-400">E-E-A-T</span>, and ensures the text is{" "}
                    <span className="text-orange-400">ready to publish</span>.
                  </>
                ),
                icon: yellowAstrix,
              },
            ].map(({ title, text, icon, color }, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Image src={icon} alt={`${title} icon`} className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className={`text-xl lg:text-2xl font-normal mb-2 ${color}`}>{title}</h3>
                  <p className="text-sm md:text-lg text-zinc-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <div className="w-full mt-20 lg:mt-32 flex flex-col items-center justify-center text-center relative">
          <Image
            src={greenHalo}
            alt="Green Halo"
            className="w-[300px] h-[300px] lg:w-[400px] xl:w-[600px] lg:h-[500px] xl:h-[700px] absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          <Image
            src={greenAstrix}
            alt="Green Astrix"
            className="w-12 h-12 relative z-10"
          />
          <h3 className="text-xl font-semibold mt-4 mb-8">The Result?</h3>
          <p className="text-zinc-400 max-w-md mb-4">
            Not just text, but a complete, publish-ready content – thoroughly researched, well-structured, and trustworthy. Every time.
          </p>
          <button className="bg-zinc-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-zinc-600">
            See example Articles below
          </button>
        </div>
      </div>
    </section>



  )
}

export default FiveAIAgents