"use client";

import Image from "next/image";
import React from "react";

import contentCreatedAICopywriterSEO from "../../../public/content_Created_AI_Copywriter_SEO.png"
import contentCreatedBusinessStocksInvestment from "../../../public/content_Created_Business_Stocks_Investment.png"
import contentCreatedHealthDiet from "../../../public/content_Created_Health_Diet.png"


const cards = [
  {
    id: 1,
    keyword: "AI Copywriters",
    keywordColor: "text-red-400",
    time: "3:34",
    timeColor: "text-red-400",
    words: "1200 Words",
    wordsColor: "text-red-400",
    title: "AI That Truly Understands Your Topic",
    description:
      "Verbite’s DeepResearch Agent goes beyond surface-level keywords, analyzing diverse online sources to grasp context and gather verifiable facts.",
    bgImage: contentCreatedAICopywriterSEO,
    tagStyles: "bg-pink-300 text-black",
  },
  {
    id: 2,
    keyword: "Health & Diet",
    keywordColor: "text-violet-500",
    time: "4:10",
    timeColor: "text-violet-500",
    words: "1500 Words",
    wordsColor: "text-violet-500",
    title: "Nutrition Advice Backed By Science",
    description:
      "Generate health and diet content supported by credible sources — perfect for wellness blogs, meal plans, and more.",
    bgImage: contentCreatedHealthDiet,
    tagStyles: "bg-yellow-300 text-black",
  },
  {
    id: 3,
    keyword: "Stock Analysis",
    keywordColor: "text-orange-400",
    time: "2:45",
    timeColor: "text-orange-400 ",
    words: "950 Words",
    wordsColor: "text-orange-400 ",
    title: "Invest Smarter With Data-Driven Insights",
    description:
      "Our AI combs through stock reports, news, and financial data to deliver insights you can trust when making investment decisions.",
    bgImage: contentCreatedBusinessStocksInvestment,
    tagStyles: "bg-purple-300 text-black",
  },

];

const ContentCardsSection = () => {
  return (
    <section className="flex flex-col  justify-center items-center bg-[#0b1917] text-white px-6 py-20 lg:px-24">
      <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-16">
        Content created with the Verbite App
      </h2>

      <div className="w-[80%] grid gap-10 xl:grid-cols-2 2xl:grid-cols-3 mb-24">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col">
            {/* BG with Image */}
            <div className="relative rounded-xl h-90 overflow-hidden">
              <Image
                src={card.bgImage}
                alt="Card background"
                fill
                className="object-cover "
                priority
              />
           
            </div>

            <p className={`text-sm mt-4 font-light ${card.keywordColor}`}>
              Keyword: {card.keyword}
            </p>

            <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{card.description}</p>
            <p className="text-sm text-gray-400 mt-2">
              Generation time: <span className={`${card.timeColor} font-light`}>{card.time}</span> &nbsp;
              <span className={`${card.wordsColor} font-light`}>{card.words}</span>
            </p>

          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
        <h3 className="text-xl md:text-4xl font-semibold">
          Follow up <span className="text-emerald-200">newsletter</span>
        </h3>
        <input
          type="email"
          placeholder="Your mail"
          className="bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2 text-white w-full md:w-64"
        />
        <button className="bg-emerald-400 text-black px-6 py-2 rounded-md font-light hover:bg-emerald-600 transition">
          Subscribe now
        </button>
      </div>
    </section>
  );
};

export default ContentCardsSection;
