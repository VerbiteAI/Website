import Image from "next/image";
import React from "react";
import technologySectionImage from "../../../public/technologySectionImage.png"
const technologyData = [
  {
    number: "1",
    tag: "Research Topic",
    title: "AI That Truly Understands Your Topic",
    description:
      "Verbite’s DeepResearch Agent goes beyond surface-level keywords, analyzing diverse online sources to grasp context and gather verifiable facts. This foundational step ensures your content is accurate, comprehensive, and trustworthy.",
  },
  {
    number: "2",
    tag: "Knowledge Graph",
    title: "Content Grounded in Knowledge, Not Guesswork",
    description:
      "Our unique Knowledge Graph connects related ideas and facts, ensuring factual accuracy and a deep understanding of your topic that standard AI methods often miss",
  },
  {
    number: "3",
    tag: "Optimized for AI Search",
    title: "Write for Your Audience & Tomorrow’s Search Engines",
    description:
      "Generate content structured to directly answer user questions and excel in modern, AI-powered search results like Google’s AI Overviews.",
  },
  {
    number: "4",
    tag: "Personalized Content Generation",
    title: "Beyond Writing: AI That Refines, Humanizes & Personalizes.",
    description:
      "AgentAI creates content with purpose — starting with a clear outline, optimizing for readability, and shaping the tone to feel natural and human. But the real value? Every article is personalized to your company, your voice, and your goals. Because true authenticity can’t be faked — and there’s only one you.",
    highlight: "Authenticity You Can’t Fake.",
  },
];

const TechnologySection = () => {
  return (
    <section className="bg-black text-white px-6 py-20 lg:px-24">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Technology</h2>
      <p className="text-gray-400 max-w-3xl mb-16">
        Verbite’s technology uses a sophisticated Knowledge Graph – a smarter way to connect information. This powers our unique approach to RAG (Retrieval-Augmented Generation), allowing our AI to find and use facts with higher accuracy than standard methods, ensuring your content is factual and reliable.
      </p>

      <div className="grid xl:grid-cols-[2fr_1fr] gap-12">
        {/* Content left */}
        <div className="space-y-12 xl:max-w-[90%] mx-2 2xl:mr-12">
          {technologyData.map((item) => (
            <div
              key={item.number}
              className="flex gap-6 border-b border-zinc-700 pb-8 2xl:py-12 2xl:pr-24"
            >
              <div className="min-w-[4rem]">
                <span className="text-4xl text-emerald-300 font-light">
                  {item.number}
                </span>
              </div>
              <div className="px-4 xl:px-12">
                <p className="text-sm text-[#53C9A9]">{item.tag}</p>
                <h3 className="text-xl font-light mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-4">{item.description}</p>
                {item.highlight && (
                  <p className="text-orange-300 font-medium mt-2">
                    {item.highlight}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image right */}
        <div className="flex justify-center items-start">
          <div className="relative w-[500px] h-[500px] rounded-xl overflow-hidden">
            <Image
              src={technologySectionImage}
              alt="Technology illustration"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
