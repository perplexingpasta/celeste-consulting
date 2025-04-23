"use client";
import React from "react";

import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./ui/LitUpButton";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import dynamic from "next/dynamic";
// import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import Link from "next/link";

const DynamicScroll = dynamic(() => import("./ui/ScrollButton"));

const Hero = () => {
  return (
    <div className="px-5 pb-20 pt-16 md:pt-36" id="hero">
      <div className="relative z-10 my-5 flex justify-center md:my-12">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          {/* HERO BIG TEXT */}
          <div className="mx-auto max-w-5xl px-4 lg:mb-10">
            <h1 className="mt-12 text-center text-4xl font-black uppercase tracking-wide text-black-100 md:text-5xl md:!leading-tight lg:text-6xl lg:!leading-snug">
              <span className="gradient-text animate-gradient font-black text-transparent">
                From Local <br className="block md:hidden" /> to Digital:
              </span>
              <br />
              Helping Your Business Thrive Online
            </h1>
          </div>
          {/* <div className="mt-4 lg:mb-10">
            <HeroHighlightDemo />
          </div> */}

          {/* HI WE ARE */}
          <p className="mt-24 text-center text-base text-black-100 md:max-w-[80%] md:text-lg md:tracking-wider lg:my-0 lg:mt-16 lg:max-w-[70%] lg:text-xl">
            Welcome To <span className="font-semibold">Céleste Consulting</span>{" "}
            ✨
            <br className="lg:hidden" />
            <br className="lg:hidden" />
            {/* <br /> We help Local Businesses by building Consistent, Predictable
            & Loyal Client Acquisition Systems.
            <br />
            <br /> */}
          </p>
          <p className="mb-8 max-w-[90%] text-center text-base text-black-100 md:max-w-[80%] md:text-lg md:tracking-wider lg:my-0 lg:mt-12 lg:max-w-[70%] lg:text-xl">
            We build fast, beautiful websites and provide all-in-one marketing
            solutions—from SEO to ads to social media management.
            <br />
            With our help, you can focus on what matters most: growing your
            business!
          </p>

          {/* CTA BUTTONS */}
          <a
            // href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
            href="tel:+916362840780"
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
                title="CALL NOW"
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
