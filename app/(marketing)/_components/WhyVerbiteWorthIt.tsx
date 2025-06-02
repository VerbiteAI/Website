import Image from 'next/image'
import React from 'react'
import whyVerbiteScaleContentFast from "../../../public/whyVerbite_Scale_Content_Fast.svg"
import whyVerbiteBoostYourSearchRackings from "../../../public/whyVerbite_Boost_Your_Search_Rackings.svg"
import whyVerbiteAutomateForCompetetiveEdge from "../../../public/whyVerbite_Automate_For_Competetive_Edge.svg"
import whyVerbiteOptimizeCategoriesForGrowth from "../../../public/whyVerbite_Optimize_Categories_For_Growth.svg"
import whyVerbiteCutContentCosts from "../../../public/whyVerbite_Cut_Content_Costs.svg"
import whyVerbiteGetPublishReadyQuality from "../../../public/whyVerbite_Get_Publish_Ready_Quality.svg"
const WhyVerbiteWorthIt = () => {
  return (
   
    <>
    <section className="w-full bg-black text-white py-20 px-6 md:px-16">
     <div className='w-[90%] flex flex-col items-center mx-auto'>
     <div className='flex w-full flex justify-center items-center lg:justify-start'>
     <h2 className="text-3xl md:text-4xl  font-semibold mb-12">Why Verbite is worth it</h2>
     </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {/* Item 1 */}
  <div className="flex flex-col text-center items-center lg:items-start lg:text-start gap-4">
    <Image src={whyVerbiteScaleContentFast} alt="Scale Icon" className="w-[108px] h-[108px]" />
    <h3 className="text-white font-semibold text-base">Scale your content fast</h3>
    <p className="text-zinc-400 text-sm">
      Generate high-quality articles in bulk, producing more content in minutes than traditional methods or generic AI.
    </p>
  </div>

  {/* Item 2 */}
  <div className="flex flex-col text-center items-center lg:items-start lg:text-start gap-4">
    <Image src={whyVerbiteBoostYourSearchRackings} alt="Boost Icon" className="w-28 h-28" />
    <h3 className="text-white font-semibold text-base">Boost Your search rankings</h3>
    <p className="text-zinc-400 text-sm">
      Get expertly optimized articles specifically designed to perform well in search results and attract valuable organic traffic.
    </p>
  </div>

  {/* Item 3 */}
  <div className="flex flex-col text-center items-center lg:items-start lg:text-start gap-4">
    <Image src={whyVerbiteAutomateForCompetetiveEdge} alt="Automate Icon" className="w-28 h-28" />
    <h3 className="text-white font-semibold text-base">Automate for competitive edge</h3>
    <p className="text-zinc-400 text-sm">
      Streamline and accelerate your content workflow to outpace competitors and secure your position in the market.
    </p>
  </div>

  {/* Item 4 */}
  <div className="flex flex-col text-center items-center lg:items-start lg:text-start gap-4">
    <Image src={whyVerbiteOptimizeCategoriesForGrowth} alt="Categories Icon" className="w-28 h-28" />
    <h3 className="text-white font-semibold text-base">Optimize categories for growth</h3>
    <p className="text-zinc-400 text-sm">
      Create unique, SEO-friendly descriptions designed to rank higher and improve conversion rates for your ecommerce categories.
    </p>
  </div>

  {/* Item 5 */}
  <div className="flex flex-col text-center items-center lg:items-start lg:text-start gap-4">
    <Image src={whyVerbiteCutContentCosts} alt="Cost Icon" className="w-28 h-28" />
    <h3 className="text-white font-semibold text-base">Cut content costs</h3>
    <p className="text-zinc-400 text-sm">
      Significantly reduce your expenses by delegating article creation to our efficient AI Agent Team, without sacrificing quality.
    </p>
  </div>

  {/* Item 6 */}
  <div className="flex flex-col text-center items-center lg:items-start lg:text-start gap-4">
    <Image src={whyVerbiteGetPublishReadyQuality} alt="Quality Icon" className="w-28 h-28" />
    <h3 className="text-white font-semibold text-base">Get publish-ready quality</h3>
    <p className="text-zinc-400 text-sm">
      Receive polished, coherent, and well-structured articles from the start, saving you the heavy rewriting or structuring work needed with basic generators.
    </p>
  </div>
</div>
     </div>
    </section>
    </>
  )
}

export default WhyVerbiteWorthIt