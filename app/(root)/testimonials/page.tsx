/* eslint-disable @next/next/no-img-element */
// "use client";
import React from "react";
import dynamic from "next/dynamic";
// import LitUpButton from "@/components/ui/LitUpButton";
// import MagicButton from "@/components/ui/MagicButton";
// import { FaLocationArrow } from "react-icons/fa6";

const DynamicWannaKnowMore = dynamic(
  () => import("@/components/WannaKnowMore"),
);

export const metadata = {
  title: "Céleste Consulting | Reviews & Testimonials",
};

const Reviews = () => {
  return (
    <>
      <header id="reviews" className="pt-24 md:pt-40">
        <h1 className="headingv2 relative">
          Testimonials
          <div className="relative mx-auto mt-1 w-[50vw] border-t-[5px] border-indigo-700 md:w-[24vw] md:border-t-[6px] lg:w-[12vw] lg:border-t-[7px]" />
        </h1>
        {/* <h1 className="heading relative hidden dark:block">
          <span className="text-purple">Contact Us</span>
        </h1> */}
        <h2 className="relative mx-auto mb-8 max-w-[75%] items-center justify-center py-4 text-center text-base tracking-wide text-black-100 md:mb-16 md:text-lg xl:text-xl">
          What do our clients have to say about us?
        </h2>
      </header>

      <main className="mx-auto max-w-7xl pl-4 md:pl-0">
        <section className="relative mb-12 text-2xl tracking-wide md:text-3xl">
          <div className="mx-auto text-xl md:ml-12 md:mt-2 md:text-2xl">
            <p>
              Hey! 👋
              <br />
              This is the founder.
              <br />
              <br />
              I&apos;ll be perfectly honest.
              <br />
              We don&apos;t have any honest reviews to show case right now.
              <br />
              <br />
              But,
              <br />
              We&apos;re working really hard behind the scenes to earn the trust
              of our current clients.
              <br /> We hope that you believe in us and stay for the ride.
              <br />
              <br />
              Ciao ✨
            </p>
          </div>
        </section>
        <section className="md:mb-8 lg:mb-12">
          <DynamicWannaKnowMore />
        </section>
      </main>
    </>
  );
};

export default Reviews;
