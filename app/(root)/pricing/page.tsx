import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "@/components/ui/LitUpButton";
import dynamic from "next/dynamic";
import PricingContainer from "@/components/PricingContainerv4";

const DynamicWannaKnowMore = dynamic(
  () => import("@/components/WannaKnowMore"),
);
const DynamicFAQs = dynamic(() => import("@/components/PricingFAQv2shadcn"));

export const metadata = {
  title: "Céleste Consulting | Pricing",
};

const Pricing = () => {
  return (
    <div className="mx-auto max-w-7xl" id="pricing">
      <header id="pricing" className="pt-24 md:pt-40">
        <h1 className="headingv2 relative">
          Pricing
          <div className="relative mx-auto mt-1 w-[25vw] border-t-[5px] border-indigo-700 md:w-[16vw] md:border-t-[6px] lg:w-[7vw] lg:border-t-[7px]" />
        </h1>
        <h2 className="relative mx-auto mb-16 max-w-[75%] items-center justify-center py-4 text-center text-base tracking-wide text-black-100 md:text-lg xl:text-xl">
          Simple, transparent pricing.
        </h2>
      </header>

      <main>
        <section className="relative -mt-20 flex items-center justify-center md:-mt-12">
          <PricingContainer />
        </section>
        <section className="mt-10 flex flex-col items-center justify-center">
          <a
            href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
            target="_blank"
          >
            <div className="block md:hidden">
              <LitUpButton
                title="Get Started"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="uppercase"
              />
            </div>
            <div className="hidden md:block">
              <MagicButton
                title="Get Started"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </a>
        </section>

        <section className="relative mt-20 md:mt-24 lg:mt-32">
          <h1 className="text-center text-2xl font-black uppercase md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <div className="mx-auto mb-10 mt-4 max-w-[90%] md:mb-20 md:mt-8 lg:mt-12">
            <DynamicFAQs />
          </div>
        </section>
        <section className="md:mb-8 lg:mb-12">
          <DynamicWannaKnowMore />
        </section>
      </main>
    </div>
  );
};

export default Pricing;
