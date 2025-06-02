import Image from "next/image";
import heroProcesGenerationAnimation from "../../../public/heroProcesGenerationAnimation.png";
import heroImageTestimonial1 from "../../../public/hero_image_testimonial_1.png";
import heroImageTestimonial2 from "../../../public/hero_image_testimonial_2.png";
import heroImageTestimonial3 from "../../../public/hero_image_testimonial_3.png";
import technicalSupportOpenAI from "../../../public/technical_support_openAI.svg"
import technicalSupportClaude from "../../../public/technical_support_claude.svg"
import technicalSupportGemini from "../../../public/technical_support_gemini.svg"
import iconToken from "../../../public/icon-token.svg"
import Navbar from "./Navbar";
export default function HomeHero() {
  return (
    <section className="relative bg-black w-full min-h-screen px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/dots.svg")',
          backgroundRepeat: 'repeat',
  
          opacity: 0.1,
        }}
      />

      {/* rotary-Glow.svg bez przezroczystości */}
      <div
        className="absolute inset-0 z-0 animate-spin-slow rotary-background"
        style={{
          backgroundImage: 'url("/ratating-glows.svg")',
          
        }}
      />

      <Navbar />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-[90%] mx-auto pt-28 lg:pt-40">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/3 text-center lg:text-left ">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold leading-tight tracking-wider mb-6">
            AI tool to create <br />
            SEO content. <br />
            No fixing.
          </h1>
          <p className="text-gray-400 text-base sm:text-xl xl:text-2xl max-w-2xl mx-auto lg:mx-0 mb-6">
            Generic AI tools give you drafts. Verbite delivers publish-ready, high-ranking content thanks to{" "}
            <span className="font-semibold text-white">specialized AI Agents</span>.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-300 mb-4 text-base">
            Generate 3 Articles for Free!
          </button>

          <div className="flex items-center gap-4 justify-center lg:justify-start mt-6">
            <div className="flex -space-x-2">
              <Image src={heroImageTestimonial1} alt="User 1" width={46} height={46} className="rounded-full border border-black" />
              <Image src={heroImageTestimonial2} alt="User 2" width={46} height={46} className="rounded-full border border-black" />
              <Image src={heroImageTestimonial3} alt="User 3" width={46} height={46} className="rounded-full border border-black" />
            </div>
            <div className="text-sm text-gray-400">
              <span>Loved by <span className="font-bold text-white">2,500+</span> content</span><br />
              <span>pros & marketing teams</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-x-2 justify-center lg:justify-start text-sm mt-6">
          <span className="text-gray-300">Get</span>
  <Image src={iconToken} alt="Token Icon" width={20} height={20} />
  <span className="font-medium text-white">150 Free Tokens</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[78%] lg:w-[58%] relative">
          <Image
            src={heroProcesGenerationAnimation}
            alt="Five AI Agents Diagram"
            className="rounded-xl w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Logos */}
      <div className="mt-20  w-full text-center z-10 relative">
        <p className="text-sm text-gray-400 mb-6">with technical support from:</p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center">
          <Image src={technicalSupportOpenAI} alt="OpenAI" width={140} height={40} />
          <Image src={technicalSupportClaude} alt="Claude" width={140} height={20} />
          <Image src={technicalSupportGemini} alt="Gemini" width={140} height={20} />
          <Image src={technicalSupportOpenAI} alt="OpenAI2" width={140} height={20} />
          <Image src={technicalSupportClaude} alt="Claude2" width={140} height={20} />
          <Image src={technicalSupportGemini} alt="Gemini2" width={140} height={20} />
        </div>
      </div>
    </section>
  );
}