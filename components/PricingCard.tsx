// PricingCard.tsx
import React from "react";
import { PricingUnit } from "./ui/PricingUnitv2";

type PricingCardProps = {
  name: string;
  priceMonth: string;
  price3Month?: string;
  billedOnce?: string;
  features: string[];
  monthly: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  priceMonth,
  price3Month,
  features,
  monthly,
}) => {
  return (
    <div className="relative flex h-[40rem] w-full max-w-md flex-col items-center justify-start rounded-2xl bg-[#E8E9EB] p-6 shadow-lg sm:max-w-lg md:max-w-[24rem]">
      <div className="flex w-full flex-col items-center pt-4">
        <div className="mb-4 flex items-center pt-2">
          <span className="text-center text-3xl opacity-75 font-bold">{name}</span>
        </div>

        <div className="mb-2 flex items-center gap-1 font-lexendDeca text-3xl font-bold text-indigo-600">
          <span>₹</span>
          <span>{!monthly ? price3Month : priceMonth}</span>
          {/* <span className="text-2xl">/mo</span> */}
        </div>

        {/* {!monthly && (
          <div className="mb-[-0.5rem] flex items-center gap-1 font-lexendDeca text-lg font-medium text-[#7F85E4] line-through">
            <span>₹{price3Month}/mo</span>
          </div>
        )} */}

        {/* {monthly && (
          <div className="mb-[-0.5rem] flex items-center gap-1 font-lexendDeca text-sm text-[#7F85E4]">
            <span>Billed ₹{billedOnce} once every 3 months.</span>
          </div>
        )} */}

        <div className="flex w-full flex-col items-start opacity-80 gap-3 pt-4">
          {features.map((feature, index) => (
            <PricingUnit key={index} name={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
