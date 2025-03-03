"use client";
import React from "react";
import { Boxes } from "./ui/BackgroundBoxes";
import { cn } from "@/utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-indigo-400 dark:bg-slate-900 md:justify-center">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)] dark:bg-black-100" />

      <Boxes />
      <h1
        className={cn(
          "relative z-20 text-xl font-bold text-white md:text-3xl lg:text-5xl",
        )}
      >
        Céleste Consulting ✨
      </h1>
      {/* <p className="relative z-20 mt-2 hidden text-center text-xl tracking-widest text-black-100 dark:text-purple lg:block">
        Hover your cursor over here!
      </p> */}
    </div>
  );
}
