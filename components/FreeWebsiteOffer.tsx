import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButtonv2 from "./MagicButtonv2";
// import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const HeroCall = () => {
  return (
    <div
      id="free-website-offer"
      className="relative mt-24 flex flex-col bg-gray-200 p-4 md:p-8 lg:mx-auto lg:mb-12 lg:w-full lg:flex-row lg:items-center lg:justify-center lg:space-x-16 lg:p-10 lg:px-16"
    >
      <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <h1 className="text-center text-3xl font-black tracking-widest md:text-4xl lg:text-left lg:text-8xl">
          <div className="-mb-10 lg:-mb-16">FREE</div> <br />
          <div className="-mb-10 lg:-mb-16">WEBSITE</div> <br />
          <div>OFFER </div>
        </h1>
      </div>

      <div className="lg:w-1/2 lg:flex-col lg:items-center lg:justify-center">
        <div className="mx-auto max-w-[90%] font-lexendDeca md:text-lg lg:text-xl">
          <br />
          <p className="text-center text-lg md:text-xl">
            Grab our most popular <br />
            <span className="bg-gradient-to-r from-indigo-900 to-violet-500 bg-clip-text px-2 text-transparent">
              Patient-Oriented Medical Website{" "}
            </span>
            <br />
            completely for free, <br className="block md:hidden" /> for a
            limited time
          </p>
          <br />
          <div className="ml-5 space-y-2 md:ml-36 md:mt-4">
            <p className="-indent-5">✦ Worth over ₹64,000</p>
            <p className="-indent-5">
              ✦ Specifically Built for Dermatological Practices
            </p>
            <p className="-indent-5">
              ✦ Designed to Convert Visitors into Loyal Patients
            </p>
            <p className="-indent-5">
              ✦ Tailored to Prioritize Patient&apos;s Needs
            </p>
            <p className="-indent-5">✦ Loads Super Incredibly Fast</p>
            <p className="-indent-5">✦ and so much more!</p>
          </div>
        </div>
        <a href="https://pro.celesteconsulting.in/" target="_blank">
          <div className="mt-8">
            <MagicButtonv2
              title="Get My Free Website Now!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </a>
        <div className="mx-auto mb-8 mt-2 max-w-[70%] text-center text-sm font-medium opacity-50 md:mt-4 md:text-base lg:max-w-[30%]">
          100% Free. No Strings Attached.
        </div>
        {/* <div className="mb-2 text-center text-sm">
          🔴 LIVE: Only 31 Spots Remaining!
        </div> */}
      </div>
    </div>
  );
};

export default HeroCall;
