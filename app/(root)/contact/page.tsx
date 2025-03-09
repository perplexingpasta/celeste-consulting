/* eslint-disable @next/next/no-img-element */
// "use client";
import React from "react";
import LitUpButton from "@/components/ui/LitUpButton";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import dynamic from "next/dynamic";

const DynamicWannaKnowMore = dynamic(
  () => import("@/components/WannaKnowMore"),
);

export const metadata = {
  title: "Céleste Consulting | Contact Us",
};

const Contact = () => {
  // useEffect(() => {
  //   // Dynamically load the Calendly script
  //   const script = document.createElement("script");
  //   script.src = "https://assets.calendly.com/assets/external/widget.js";
  //   script.type = "text/javascript";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   // Initialize the Calendly widget once the script has loaded
  //   script.onload = () => {
  //     window.Calendly.initInlineWidget({
  //       url: "https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting",
  //       parentElement: document.querySelector(".calendly-inline-widget"),
  //     });
  //   };

  //   // Clean up the script element when the component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      {/* <header id="contact" className="pt-40">
        <h1 className="heading relative block dark:hidden">
          <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
            Contact Us
          </span>
        </h1>
        <h1 className="heading relative hidden dark:block">
          <span className="text-purple">Contact Us</span>
        </h1>
        <h2 className="relative mx-auto mb-16 max-w-[90%] items-center justify-center py-4 text-center text-lg font-light text-black-100">
          Here are all the ways you can get in touch with us!
        </h2>
      </header> */}

      <header id="contact" className="pt-24 md:pt-40">
        <h1 className="headingv2 relative">
          Contact us
          <div className="relative mx-auto mt-1 w-[40vw] border-t-[5px] border-indigo-700 md:w-[24vw] md:border-t-[6px] lg:w-[12vw] lg:border-t-[7px]" />
        </h1>
        <h2 className="relative mx-auto mb-8 max-w-[90%] items-center justify-center py-4 text-center text-lg tracking-wide text-black-100 md:mb-16 xl:text-xl">
          Will it be a call, an email, or a pigeon, perhaps?
        </h2>
      </header>

      <main className="mx-auto max-w-[90%] md:max-w-7xl md:pl-8">
        <section className="relative mb-12 text-2xl font-semibold tracking-wide md:text-3xl">
          <img
            src="/images/call-black.svg"
            width={40}
            alt=""
            className="inline-block dark:hidden"
          />
          {/* <img
            src="/images/call-white.svg"
            width={40}
            alt=""
            className="hidden dark:inline-block"
          /> */}
          <h1 className="inline-block pl-3">
            Call Us
            <div className="dark:border-white-100 relative w-[20vw] border-t-[5px] border-black-200 md:w-[12vw] lg:w-[5vw]"></div>
          </h1>
          <div className="ml-12 mt-2 space-y-2 text-xl md:text-2xl">
            <p>
              <a href="tel:+916362840780">+91 63628-40780</a>
            </p>
          </div>
        </section>

        <section className="relative mb-12 text-2xl font-semibold tracking-wide md:text-3xl">
          <img
            src="/images/whatsapp-black.svg"
            width={40}
            alt=""
            className="inline-block dark:hidden"
          />
          {/* <img
            src="/images/whatsapp-white.svg"
            width={40}
            alt=""
            className="hidden dark:inline-block"
          /> */}
          <h1 className="inline-block pl-2">
            WhatsApp
            <div className="dark:border-white-100 relative w-[25vw] border-t-[5px] border-black-200 md:w-[12vw] lg:w-[5vw]"></div>
          </h1>
          <div className="ml-12 mt-2 space-y-2 text-xl md:text-2xl">
            <p>
              <a
                href="https://wa.me/916362840780?text=Hi%21%20I%20have%20a%20query%2C%20could%20you%20please%20help%20me%3F%20%3AD"
                target="_blank"
              >
                +91 63628-40780
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/919557088564?text=Hi%21%20I%20have%20a%20query%2C%20could%20you%20please%20help%20me%3F%20%3AD"
                target="_blank"
              >
                +91 95570-88564
              </a>
            </p>
          </div>
        </section>

        <section className="relative mb-12 text-2xl font-semibold tracking-wide md:text-3xl">
          <img
            src="/images/email-black.svg"
            width={40}
            alt=""
            className="inline-block dark:hidden"
          />
          {/* <img
            src="/images/email-white.svg"
            width={40}
            alt=""
            className="hidden dark:inline-block"
          /> */}
          <h1 className="inline-block pl-2">
            Email Us
            <div className="dark:border-white-100 relative w-[25vw] border-t-[5px] border-black-200 md:w-[12vw] lg:w-[5vw]"></div>
          </h1>
          <div className="ml-12 mt-2 space-y-2 text-xl md:text-2xl">
            <p>
              <a href="mailto:hello@celesteconsulting.in">
                hello@celesteconsulting.in
              </a>
            </p>
          </div>
        </section>

        <section className="relative mb-12 text-2xl font-semibold tracking-wide md:text-3xl">
          <img
            src="/images/meeting-black.svg"
            width={40}
            alt=""
            className="inline-block dark:hidden"
          />
          {/* <img
            src="/images/meeting-white.svg"
            width={40}
            alt=""
            className="hidden dark:inline-block"
          /> */}
          <h1 className="inline-block pl-2">
            Book A Meeting
            <div className="dark:border-white-100 relative w-[40vw] border-t-[5px] border-black-200 md:w-[12vw] lg:w-[5vw]"></div>
          </h1>
          <div className="ml-12 mt-2 text-base md:text-2xl">
            <a
              href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
              target="_blank"
            >
              <div className="hidden dark:block md:-mt-8">
                <MagicButton
                  title="Book a meeting!"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </div>
              <div className="block dark:hidden md:-mt-8">
                <LitUpButton
                  title="Book a meeting!"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </div>
            </a>
          </div>
        </section>

        <section className="relative mb-12 text-2xl font-semibold tracking-wide md:text-3xl">
          <img
            src="/images/bird-black.svg"
            width={40}
            alt=""
            className="inline-block dark:hidden"
          />
          {/* <img
            src="/images/bird-white.svg"
            width={40}
            alt=""
            className="hidden dark:inline-block"
          /> */}
          <h1 className="inline-block pl-2">
            By a Pigeon
            <div className="dark:border-white-100 relative w-[30vw] border-t-[5px] border-black-200 md:w-[12vw] lg:w-[5vw]"></div>
          </h1>
          <div className="ml-12 mt-2 space-y-2 text-xl md:text-2xl">
            <p>Not supported at the moment</p>
          </div>
        </section>
        <section className="md:mb-8 lg:mb-12 lg:mt-16">
          <DynamicWannaKnowMore />
        </section>
      </main>
    </>
  );
};

export default Contact;
