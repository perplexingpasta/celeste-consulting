import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import React from "react";
import Image from "next/image";

const HeroCall = () => {
  return (
    <div className="relative mt-24 flex flex-col bg-gray-200 p-4 md:p-8 lg:mx-auto lg:mb-12 lg:w-full lg:flex-row lg:items-center lg:justify-center lg:space-x-16 lg:p-10 lg:px-16">
      <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <Image
          src="/images/derma-patient.png"
          className="my-8 rounded-2xl text-center md:mb-12"
          width={1350}
          height={900}
          alt=""
        />
      </div>

      <div className="lg:w-1/2 lg:flex-col lg:items-center lg:justify-center">
        <div className="pl-2">
          <h1 className="max-w-[90%] text-xl md:text-2xl lg:mb-16 lg:mt-12">
            <span className="text-2xl font-bold uppercase md:text-3xl">
              Dermatologists
            </span>
            : <br />
            <span className="text-indigo-700">
              Elevate Your Practice & Crush Your Competition Today!
            </span>
          </h1>
          <p className="mt-8 max-w-[95%] md:text-lg lg:text-xl lg:opacity-75">
            {/* Are you tired of not knowing when & where your next patient may come from? Maybe some days you have more patients than you can handle while some other days your waiting room is almost empty? Are you concerned about the growing popularity of aesthetic and wellness institutions like traya, kaya, olivia, etc.? */}
            Do you feel uncertain about your patient flow? Are busy days
            followed by almost empty waiting rooms? Concerned about the rise of
            aesthetic and wellness clinics like Traya, Kaya, Olivia & others?
            <br />
            <br />
            Céleste Consulting leverages proven, reliable and automated patient
            acquisition systems to generate a consistent number of new patients
            for dermatologists every month on demand and with predictability.
            <br />
            <br />
            Our suites contain proven processes and marketing strategies
            designed for dermatologists with independent clinical practice who
            want to scale & crush their competition.
          </p>
        </div>

        <a
          href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
          target="_blank"
        >
          <div className="mt-12">
            <MagicButton
              title="Get Started"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </a>
        <div className="mx-auto mb-8 mt-2 max-w-[70%] text-center text-sm font-medium opacity-50 md:mt-4 md:text-base lg:max-w-[30%]">
          Only For Serious Dermatologists Who Want to Grow
        </div>
      </div>
    </div>
  );
};

export default HeroCall;
