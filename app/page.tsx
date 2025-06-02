import AiToolSection from "./(marketing)/_components/AiToolSection";
import CallToAction from "./(marketing)/_components/CallToAction";
import ContentCardsSection from "./(marketing)/_components/ContentCardsSection";
import FAQSection from "./(marketing)/_components/FAQSection";
import FiveAIAgents from "./(marketing)/_components/FiveAIAgents";
import Footer from "./(marketing)/_components/Footer";
import HomeHero from "./(marketing)/_components/HomeHero";
import TechnologySection from "./(marketing)/_components/TechnologySection";
import TestimonialsSection from "./(marketing)/_components/TestimonialsSection";
import WhyVerbiteWorthIt from "./(marketing)/_components/WhyVerbiteWorthIt";

export default function Home() {
  return (
   <>
      <HomeHero/>
      <FiveAIAgents/>
      <AiToolSection/>
      <WhyVerbiteWorthIt/>
      <TestimonialsSection/>
      <TechnologySection/>
      <ContentCardsSection/>
      <FAQSection/>
      <CallToAction/>
      <Footer/>
   </>
  );
}
