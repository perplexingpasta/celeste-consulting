"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const setCookie = (
  name: string,
  value: string,
  days: number,
  domain?: string,
  secure?: boolean,
) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  let cookieString = `${name}=${value}; expires=${expires.toUTCString()}; path=/;`;

  if (domain) cookieString += `; domain=${domain}`;
  if (secure) cookieString += `; secure`;
  document.cookie = cookieString;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const cookies = document.cookie
      .split("; ")
      .reduce((acc: any, cookie: string) => {
        const [name, value] = cookie.split("=");
        acc[name] = value;
        return acc;
      }, {});

    if (cookies["cookie-consent"]) {
      setIsVisible(false);
      return;
    }

    // Show the banner after a delay
    const delay = 3000;
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsFadingIn(true);
    }, delay);

    // Cleanup timer if the component unmounts before the delay
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsFadingIn(false);
    setIsFadingOut(true);
    setTimeout(() => {
      setCookie("cookie-consent", "accepted", 7); // Expires in 7 days
      setIsVisible(false);
    }, 300); // Matches the fade-out duration
  };

  if (!isVisible && !isFadingOut) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 max-w-72 flex-col items-center rounded-lg border bg-white p-2 text-sm shadow-xl transition-opacity duration-300 dark:bg-black-100 dark:text-white md:max-w-96 md:p-4 ${isFadingIn ? "opacity-100" : "opacity-0"} ${isFadingOut ? "opacity-0" : "opacity-100"}`}
    >
      <p className="flex-1 px-2 py-2 md:mb-2 md:px-4 md:py-3">
        We use cookies so you have a smooth experience while navigating our
        websites and using our services. By continuing, you agree to our{" "}
        <Link
          href="/legal/privacy-policy"
          className="cursor-pointer text-indigo-500 hover:text-indigo-700"
          target="_blank"
        >
          privacy policy
        </Link>
        .
      </p>
      <button
        onClick={handleAccept}
        className="mb-2 ml-2 rounded-md bg-indigo-500 px-2 py-1 text-white transition-colors hover:bg-indigo-700 active:bg-black-100 md:ml-4 md:px-4 md:py-2"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
