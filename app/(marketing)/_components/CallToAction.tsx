'use client';

import Image from 'next/image';
import heroImageTestimonial1 from "../../../public/hero_image_testimonial_1.png";
import heroImageTestimonial2 from "../../../public/hero_image_testimonial_2.png";
import heroImageTestimonial3 from "../../../public/hero_image_testimonial_3.png";
import iconToken from "../../../public/tokenImage.svg"

const CallToAction = () => {
  return (
    <section
      className="relative text-white py-24 px-6 overflow-hidden"
      style={{
        backgroundColor: '#003A24',
        backgroundImage: 'radial-gradient(#2D6B54 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      {/* NAŁOŻONY GLOW (rotary gradient) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-color-dodge">
        <Image
          src="/rotary_Glow_Bg.svg"
          alt="Glow background"
          fill
          className="object-cover"
        />
      </div>

      {/* ZAWARTOŚĆ */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Ready to create ready to use <br className="hidden sm:inline" /> content that ranks?
        </h1>
        <p className="text-gray-300 mb-6">
          See how easy it is to generate publish-ready articles with our AI Agent team.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 text-gray-300 text-sm  py-4">
            <div className="flex -space-x-2">
              <Image src={heroImageTestimonial1} alt="User1" width={46} height={46} className="rounded-full border border-black" />
              <Image src={heroImageTestimonial2} alt="User2" width={46} height={46} className="rounded-full border border-black" />
              <Image src={heroImageTestimonial3} alt="User3" width={46} height={46} className="rounded-full border border-black" />
            </div>
            <div>
            <span  className="font-extralight text-gray-400">Loved by <span className="font-bold text-white">2,500+</span> content pros & marketing teams</span>
            </div>
          </div>

        <button className="bg-white text-black font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition mb-2">
          Try it now for free
        </button>

        <div className="flex justify-center items-center py-4 "><Image src={iconToken} alt="iconToken"/> </div>

      </div>
    </section>
  );
};

export default CallToAction;
