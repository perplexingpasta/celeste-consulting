// components/Popup.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 4000);

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, []);

  // Use GSAP to animate the popup when it appears
  useEffect(() => {
    if (showPopup && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    }
  }, [showPopup]);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle the popup close with GSAP animation
  const handleClose = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setShowPopup(false);
        },
      });
    }
  };

  // Handle keydown event for Esc and Enter keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose(); // Close the popup when Esc key is pressed
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!showPopup) return null; // Don't render the popup if it's not visible

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50"
      onClick={handleClose}
    >
      <div
        ref={popupRef}
        className="relative mx-auto max-w-xs rounded-lg bg-white p-8 shadow-xl md:max-w-md md:p-10"
        onClick={(e) => e.stopPropagation()} // Prevent the close when clicking inside
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          {/* &times; */}
          <IoCloseSharp className="md:text-lg" />
        </button>
        <h1 className="mb-6 bg-gradient-to-r from-indigo-900 to-indigo-400 p-2 px-4 text-center text-xl font-bold uppercase tracking-wide text-white opacity-75 md:p-3 md:px-5 md:text-4xl">
          ~ Free Website ~
        </h1>
        <p className="text-center text-lg md:text-2xl lg:text-xl lg:leading-relaxed">
          For a limited time, <br className="lg:hidden" />
          we&apos;re offering our <br />
          <span className="font-bold">
            Patient-Oriented <br className="lg:hidden" /> Medical Website
          </span>{" "}
          for <br className="lg:hidden" /> your dermatology practice, <br />{" "}
          absolutely for FREE!
        </p>
        {/* <br /> */}
        {/* Get a <span className="text-xl font-extrabold ">FREE</span> <br />
          website and become the first dermatologist that pops up on Google */}
        {/* CTA Button as an <a> tag */}
        <div className="mt-8 text-center">
          <Link
            href="/#free-website-offer"
            className="rounded-lg bg-black px-4 py-2 text-white active:bg-white active:text-black active:ring-4 active:ring-black md:text-xl"
            onClick={handleClose} // Close the popup when the CTA button is clicked
            // target="_blank" // Open in a new tab
            // rel="noopener noreferrer" // For security
          >
            Yes! I want it ✨
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
