import { FloatingNav3 } from "@/components/ui/FloatingNav3";
import { navItemsFloatingNav } from "@/data/index2";
import React from "react";
import dynamic from "next/dynamic";
import GridAndDotBg from "@/components/ui/GridAndDotBg";

const DynamicFooter = dynamic(() => import("@/components/Footer3"));
const DynamicWhatsapp = dynamic(() => import("@/components/Whatsapp"));
// const DynamicCookie = dynamic(() => import("@/components/CookieConsent"));

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 dark:bg-black-100 sm:px-10">
        <div className="w-full max-w-7xl">
          <FloatingNav3 navItemsFloatingNav={navItemsFloatingNav} />
          <GridAndDotBg />
          {children}
          {/* <DynamicCookie /> */}
          <DynamicWhatsapp />
        </div>
      </div>
      <footer className="bg-black dark:bg-black-100">
        <DynamicFooter />
      </footer>
    </>
  );
};

export default layout;
