import React from "react";
import HeadTablePlanPricingComparsions from "./_components/HeadTablePlanPricingComparsions";
import RowTablePlanPricingComparsions from "./_components/RowTablePlanPricingComparsions";


export default function PricingPage(){
    return(
       <div className="flex flex-col w-full h-full bg-black justify-center items-center">
        <HeadTablePlanPricingComparsions
         />
         <RowTablePlanPricingComparsions/>

       </div>
       
    )
}