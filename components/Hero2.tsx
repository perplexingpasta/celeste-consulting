"use client";
import React from "react";

import ScrollButton from "./ui/ScrollButton";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./ui/LitUpButton";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicScroll = dynamic(() => import("./ui/ScrollButton"), {
  ssr: false,
});

const Hero = () => {
  return (
    <div className="pb-20 pt-16 md:pt-36" id="hero">
      <div className="relative z-10 my-5 flex justify-center md:my-12">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          {/* HERO BIG TEXT */}
          <div className="mx-auto hidden max-w-5xl px-4 dark:block lg:mb-10">
            <h1 className="mt-12 text-center text-4xl font-extrabold uppercase tracking-wide text-white md:text-5xl md:!leading-tight lg:text-6xl lg:!leading-snug">
              Medical Marketing <br className="hidden lg:block" /> to Grow your{" "}
              <br className="hidden lg:block" />
              <span className="gradient-text animate-gradient font-black text-transparent">
                Dermatology Practice
              </span>
            </h1>
          </div>
          <div className="mt-12 dark:hidden lg:mb-10">
            <HeroHighlightDemo />
          </div>

          {/* HI WE ARE */}
          <p className="my-10 mt-32 text-center text-base text-black-100 md:text-lg md:tracking-wider lg:my-0 lg:mt-24 lg:text-xl">
            Welcome To <span className="font-semibold">Céleste Consulting</span>{" "}
            ✨
            <br />
            <br /> We help Dermatologists with Consistent, Predictable & Loyal
            Patient Acquisition
          </p>

          {/* CTA BUTTONS */}
          <a
            href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
            target="_blank"
          >
            {/* <div className="hidden dark:block">
              <MagicButton
                title="BOOK A CALL NOW"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div> */}
            <div>
              <LitUpButton
                title="BOOK A CALL NOW"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </a>
        </div>

        {/* SCROLLBUTTON */}
        <DynamicScroll />
      </div>
    </div>
  );
};

export default Hero;
