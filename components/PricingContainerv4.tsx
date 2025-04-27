"use client";

import { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { PricingUnit } from "./ui/PricingUnit";
import LitUpButton from "./ui/LitUpButton";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

export default function PricingContainerv4() {
  const [monthly, setMonthly] = useState(false);

  const handleChange = () => {
    setMonthly((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 sm:px-6 lg:py-1">
      {/* Toggle */}
      <div className="mb-8 flex items-center justify-center gap-3">
        <span
          className={`text-sm font-semibold transition-opacity ${!monthly ? "opacity-100" : "opacity-50"}`}
        >
          1 Month
        </span>

        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={monthly}
            onChange={handleChange}
            className="peer sr-only"
          />
          <div className="peer relative h-6 w-12 rounded-full bg-gray-300 after:absolute after:left-[8px] after:top-[3px] after:h-4 after:w-4 after:rounded-full after:border after:bg-white after:transition-transform after:duration-300 after:ease-in-out after:content-[''] peer-checked:bg-[#7F85E4] peer-checked:after:translate-x-full peer-checked:after:scale-110 sm:h-6 sm:w-11 sm:after:h-5 sm:after:w-5" />
        </label>

        <span
          className={`text-sm font-semibold transition-opacity ${monthly ? "opacity-100" : "opacity-50"}`}
        >
          3 Months
        </span>
      </div>

      {/* Pricing Card */}
      <div className="relative flex h-[34rem] w-full max-w-md flex-col items-center justify-start rounded-2xl border-4 border-black bg-[#f6f5f4] p-6 shadow-lg sm:max-w-lg md:max-w-[24rem]">
        {/* Most Popular Tag */}
        <div className="absolute left-0 top-0 w-full rounded-t-xl bg-black py-1 text-center text-sm font-semibold uppercase text-white">
          Most Popular
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-center gap-2 pt-8">
          {/* Header */}
          <div className="mb-4 flex items-center">
            {/* <GoStarFill className="text-xl" /> */}
            <span className="text-center text-4xl font-black tracking-wide">
              The Orion Suite ✨
            </span>
          </div>

          {/* New Price */}
          <div className="flex items-center gap-1 font-lexendDeca text-4xl font-bold">
            <span>₹</span>
            <span>{!monthly ? "21,997" : "18,997"}</span>
            <span className="text-2xl">/mo</span>
          </div>

          {/* Old Price (strikethrough) */}
          {!monthly && (
            <div className="mb-[-0.5rem] flex items-center gap-1 font-lexendDeca text-lg font-medium text-[#7F85E4] line-through">
              <span>₹25,000/mo</span>
            </div>
          )}

          {monthly && (
            <div className="mb-[-0.5rem] flex items-center gap-1 font-lexendDeca text-sm text-[#7F85E4]">
              <span>Billed ₹56,990 once every 3 months.</span>
            </div>
          )}

          {/* Features */}
          <div className="flex w-full flex-col items-start gap-3 pt-6">
            {/* <p className="font-semibold">Everything before +</p> */}
            <PricingUnit name="Web Development & Maintenance" />
            <PricingUnit name="Google Maps Profile (GMB) Optimization" />
            <PricingUnit name="Social Media Management" />
            <PricingUnit name="Advertising on Google + Meta" />
            <PricingUnit name="Golden Lead Nurturing" />

            {/* Divider */}
            <hr className="mt-1 w-full border-gray-400" />

            {/* cta button */}
            <div className="mt-1 flex flex-col place-self-center">
              <a
                href="https://wa.me/916362840780?text=Hi%21%20I%20have%20a%20query%2C%20could%20you%20please%20help%20me%3F"
                target="_blank"
              >
                <div className="block md:hidden">
                  <LitUpButton
                    title="Learn More"
                    icon={<FaLocationArrow />}
                    position="right"
                    otherClasses="uppercase"
                  />
                </div>
                <div className="hidden md:block">
                  <MagicButton
                    title="Learn More"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
