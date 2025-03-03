"use client";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { navItems } from "@/data/index2";
import Link from "next/link";
import { ModeToggle } from "./ui/ModeToggle";
import { usePathname } from "next/navigation";

export const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  const pathname = usePathname();

  //   return (
  //     <div ref={ref} className="relative z-[1000]">
  //       <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
  //       <AnimatePresence>
  //         {isOpen && (
  //           <motion.div
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             exit={{ opacity: 0 }}
  //             transition={{ duration: 0.2 }}
  //             className="shadow-4xl fixed left-0 right-0 top-[3.5rem]  p-5 pt-4"
  //           >
  //             <ul className="grid">
  //               {navItems.map((route, idx) => {
  //                 return (
  //                   <motion.li
  //                     initial={{ scale: 0, opacity: 0 }}
  //                     animate={{ scale: 1, opacity: 1 }}
  //                     transition={{
  //                       type: "spring",
  //                       stiffness: 260,
  //                       damping: 20,
  //                     //   delay: 0.1 + idx / 10,
  //                     }}
  //                     key={route.name}
  //                     className="w-full rounded-lg"
  //                   >
  //                     <a
  //                       onClick={() => setOpen((prev) => !prev)}
  //                       className={
  //                         "flex w-full items-center justify-between bg-neutral-950 p-5"
  //                       }
  //                       href={route.link}
  //                     >
  //                       <span className="flex gap-1 text-lg">{route.name}</span>
  //                       {/* <Icon className="text-xl" /> */}
  //                     </a>
  //                   </motion.li>
  //                 );
  //               })}
  //             </ul>
  //           </motion.div>
  //         )}
  //       </AnimatePresence>
  //     </div>
  //   );

  // CHATGPT CODE
  return (
    <div ref={ref} className="relative z-[1000]">
      <div className="absolute right-0 top-0 pt-4">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed left-0 top-0 z-[600] h-full w-2/3 bg-violet-300 pt-20 dark:bg-black-100 dark:bg-opacity-75 dark:backdrop-blur-2xl dark:backdrop-filter"
          >
            <div className="px-2">
              <ModeToggle />
            </div>
            <ul className="grid">
              {navItems.map((navItem: any, idx: number) => {
                const isActive = pathname.startsWith(navItem.link);

                return (
                  <li key={`link=${idx}`} className="w-full rounded-lg">
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between p-5 pt-5 uppercase tracking-widest ${isActive && navItem.link !== "/" ? "border-b-2 border-black-100 !font-bold dark:border-purpledark dark:!text-purple" : ""}`}
                      href={navItem.link}
                    >
                      <span className="flex gap-1 text-lg">{navItem.name}</span>
                      {/* <Icon className="text-xl" /> */}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
