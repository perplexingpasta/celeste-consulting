import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "@/components/ui/LitUpButton";
import dynamic from "next/dynamic";
import PricingContainer from "@/components/PricingContainerv2";

const DynamicFAQs = dynamic(() => import("@/components/PricingFAQv2shadcn"));

export const metadata = {
  title: "Pricing - Céleste Consulting",
};

const Pricing = () => {
  return (
    <div className="mx-auto max-w-7xl pt-12 md:pt-[6.5rem]" id="pricing">
      {/* <header>
        <h1 className="heading relative pt-4 !normal-case">
          Everything you need for{" "}
          <span className="text-[#7F85E4]">
            best in class{" "}
          </span>{" "}
          service
        </h1>
      </header> */}
      <main>
        <section className="relative flex items-center justify-center pt-10">
          <PricingContainer />
        </section>
        <section className="mt-10 flex flex-col items-center justify-center">
          <a
            href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
            target="_blank"
          >
            <div>
              <MagicButton
                title="Get Started"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
            {/* <div className="block dark:hidden">
              <LitUpButton
                title="Get Started"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div> */}
          </a>
        </section>

        <section className="mt-20 md:mt-40">
          <h1 className="heading relative block !font-extrabold dark:hidden">
            <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
              Frequently Asked Questions
            </span>
          </h1>
          {/* <h1 className="heading relative hidden !font-extrabold dark:block">
            <span className="text-purple">Frequently Asked Questions</span>
          </h1> */}
          <div className="relative mx-auto my-10 max-w-[90%] md:mb-20 lg:mt-20">
            <DynamicFAQs />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
