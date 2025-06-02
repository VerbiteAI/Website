import React from 'react'

const RowTablePlanPricingComparsions = () => {
  return (
    <div data-col-1="true" data-col-2="true" data-col-3="true" data-col-4="true" data-col-5="false" data-icon="true" data-state="First" className="self-stretch px-5 py-4 bg-zinc-900 rounded-xl inline-flex justify-start items-start gap-10">
    <div className="flex-1 px-2 py-1 flex justify-start items-center gap-2 overflow-hidden">
        <div className="justify-center text-white text-base font-medium font-['Inter'] leading-snug">Tokens</div>
        <div data-state="Default" className="w-3.5 h-3.5 relative opacity-60">
            <div className="w-1 h-1.5 left-[5.18px] top-[4.10px] absolute bg-stone-300" />
            <div className="w-3 h-3 left-[1px] top-[1px] absolute outline outline-[0.80px] outline-offset-[-0.40px] outline-stone-300" />
        </div>
    </div>
    <div className="flex-1 px-2 py-1 flex justify-center items-center gap-2 overflow-hidden">
        <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute bg-gradient-to-bl from-orange-400 to-yellow-700 rounded-full" />
            <div className="w-4 h-3.5 left-[1.85px] top-[3.32px] absolute bg-gradient-to-l from-yellow-700 via-yellow-900 to-white" />
        </div>
        <div className="text-center justify-center text-white text-base font-light font-['Inter'] leading-snug">500 / mo</div>
    </div>
    <div className="flex-1 px-2 py-1 flex justify-center items-center gap-2 overflow-hidden">
        <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute bg-gradient-to-bl from-orange-400 to-yellow-700 rounded-full" />
            <div className="w-4 h-3.5 left-[1.85px] top-[3.32px] absolute bg-gradient-to-l from-yellow-700 via-yellow-900 to-white" />
        </div>
        <div className="text-center justify-center text-white text-base font-light font-['Inter'] leading-snug">2 500 / mo</div>
    </div>
    <div className="flex-1 px-2 py-1 flex justify-center items-center gap-2 overflow-hidden">
        <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute bg-gradient-to-bl from-orange-400 to-yellow-700 rounded-full" />
            <div className="w-4 h-3.5 left-[1.85px] top-[3.32px] absolute bg-gradient-to-l from-yellow-700 via-yellow-900 to-white" />
        </div>
        <div className="text-center justify-center text-white text-base font-light font-['Inter'] leading-snug">10 000 / mo</div>
    </div>
</div>
  )
}

export default RowTablePlanPricingComparsions