/* eslint-disable @next/next/no-img-element */
// "use client";
import React from "react";
import LitUpButton from "@/components/ui/LitUpButton";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export const metadata = {
  title: "Reviews - Céleste Consulting",
};

const Reviews = () => {
  return (
    <>
      <header id="contact" className="pt-40">
        <h1 className="heading relative block dark:hidden">
          <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
            Reviews
          </span>
        </h1>
        {/* <h1 className="heading relative hidden dark:block">
          <span className="text-purple">Contact Us</span>
        </h1> */}
        <h2 className="relative mx-auto mb-16 max-w-[90%] items-center justify-center py-4 text-center text-lg tracking-wide text-black-100 xl:text-xl">
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
      </main>
    </>
  );
};

export default Reviews;
