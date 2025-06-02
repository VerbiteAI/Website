import React from 'react'

const HeadTablePlanPricingComparsions = () => {
  return (
    <div className="bg-zinc-900 rounded-xl inline-flex flex-col justify-start items-start gap-0.5">
    <div className="self-stretch px-5 pt-4 pb-2 rounded-xl inline-flex justify-start items-start gap-10">
        <div className="flex-1 h-5 px-2 py-1" />
        <div className="flex-1 px-2 py-1 flex justify-center items-center gap-2 overflow-hidden">
            <div className="text-center justify-center text-white text-xl font-normal font-['Inter'] leading-7">Starter</div>
        </div>
        <div className="flex-1 px-2 py-1 flex justify-center items-center gap-2 overflow-hidden">
            <div className="text-center justify-center text-white text-xl font-normal font-['Inter'] leading-7">Business</div>
        </div>
        <div className="flex-1 px-2 py-1 flex justify-center items-center gap-2 overflow-hidden">
            <div className="text-center justify-center text-white text-xl font-normal font-['Inter'] leading-7">Agency</div>
        </div>
    </div>
    <div className="self-stretch px-5 bg-zinc-900 rounded-xl inline-flex justify-start items-center gap-10">
        <div className="flex-1 px-2 py-1 flex justify-start items-center gap-2" />
        <div className="flex-1 px-1 py-2 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch text-center justify-center"><span className="text-white text-2xl font-light font-['Inter'] leading-10">$</span><span className="text-white text-4xl font-normal font-['Inter'] leading-10">29 </span><span className="text-white text-2xl font-light font-['Inter'] leading-10">/ mo</span></div>
            <div className="self-stretch text-center justify-center"><span className="text-emerald-300 text-base font-light font-['Inter'] leading-normal">Save </span><span className="text-emerald-300 text-base font-semibold font-['Inter'] leading-normal">$276</span><span className="text-emerald-300 text-base font-normal font-['Inter'] leading-normal"> / year</span></div>
        </div>
        <div className="flex-1 px-1 py-2 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch text-center justify-center"><span className="text-white text-2xl font-light font-['Inter'] leading-10">$</span><span className="text-white text-4xl font-normal font-['Inter'] leading-10">99 </span><span className="text-white text-2xl font-light font-['Inter'] leading-10">/ mo</span></div>
            <div className="self-stretch text-center justify-center"><span className="text-emerald-300 text-base font-light font-['Inter'] leading-normal">Save </span><span className="text-emerald-300 text-base font-semibold font-['Inter'] leading-normal">$276</span><span className="text-emerald-300 text-base font-normal font-['Inter'] leading-normal"> / year</span></div>
        </div>
        <div className="flex-1 px-1 py-2 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch text-center justify-center"><span className="text-white text-2xl font-light font-['Inter'] leading-10">$</span><span className="text-white text-4xl font-normal font-['Inter'] leading-10">299 </span><span className="text-white text-2xl font-light font-['Inter'] leading-10">/ mo</span></div>
            <div className="self-stretch text-center justify-center"><span className="text-emerald-300 text-base font-light font-['Inter'] leading-normal">Save </span><span className="text-emerald-300 text-base font-semibold font-['Inter'] leading-normal">$276</span><span className="text-emerald-300 text-base font-normal font-['Inter'] leading-normal"> / year</span></div>
        </div>
    </div>
    <div data-col-1="true" data-col-2="true" data-col-3="false" data-col-4="true" data-col-5="false" data-icon="false" data-state="CTA" className="self-stretch h-16 px-5 py-4 bg-zinc-900 rounded-xl inline-flex justify-center items-center gap-10">
        <div className="flex-1 h-5 px-2 py-1" />
        <div className="flex-1 px-7 py-1 inline-flex flex-col justify-center items-center overflow-hidden">
            <div data-icon-right="false" data-property-1="Default" data-size="S" data-text="true" data-type="Secondary" className="h-9 px-4 pt-1 pb-[5px] bg-white/20 rounded-md inline-flex justify-center items-center gap-1 overflow-hidden">
                <div className="text-center justify-center text-white text-sm font-light font-['Inter'] leading-tight">Get 3 free articles</div>
            </div>
        </div>
        <div className="flex-1 px-7 py-1 inline-flex flex-col justify-center items-center overflow-hidden">
            <div data-icon-right="false" data-property-1="Default" data-size="M" data-text="true" data-type="Primary" className="w-36 h-9 px-5 pt-1 pb-[5px] bg-emerald-400 rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden">
                <div className="text-center justify-center text-emerald-900 text-base font-medium font-['Inter'] leading-normal">Start for Free</div>
            </div>
        </div>
        <div className="flex-1 px-7 py-1 inline-flex flex-col justify-center items-center overflow-hidden">
            <div data-icon-right="false" data-property-1="Default" data-size="S" data-text="true" data-type="Secondary" className="h-9 px-4 pt-1 pb-[5px] bg-white/20 rounded-md inline-flex justify-center items-center gap-1 overflow-hidden">
                <div className="text-center justify-center text-white text-sm font-light font-['Inter'] leading-tight">Get 3 free articles</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HeadTablePlanPricingComparsions