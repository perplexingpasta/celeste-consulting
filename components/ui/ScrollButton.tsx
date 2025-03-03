import { motion } from "framer-motion";
import Link from "next/link";

const ScrollButton = () => {
  return (
    <div className="xs:bottom-10 absolute top-full mt-16 flex w-full items-center justify-center md:mt-32">
      <Link href="#services">
        <div className="flex h-12 w-6 items-start justify-center rounded-3xl border-2 border-black-100 dark:border-white-100 md:h-16 md:w-9 md:border-4 md:p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="h-[0.7rem] w-[0.7rem] rounded-full bg-black-100 dark:bg-white-100 md:h-3 md:w-3"
          />
        </div>
      </Link>
    </div>
  );
};

export default ScrollButton;
