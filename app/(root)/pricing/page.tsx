import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "@/components/ui/LitUpButton";
import dynamic from "next/dynamic";
import PricingContainer from "@/components/PricingContainerv2";

const DynamicFAQs = dynamic(() => import("@/components/PricingFAQ"), {
  ssr: false,
});

export const metadata = {
  title: 'Pricing - Céleste Consulting'
};

const Pricing = () => {
  return (
    <div className="pt-12 md:pt-[6.5rem]" id="pricing">
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
            <div className="hidden dark:block">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
            <div className="block dark:hidden">
              <LitUpButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </a>
        </section>

        <section className="mt-20 md:mt-40">
          <h1 className="heading relative block !font-extrabold dark:hidden">
            <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
              FAQs
            </span>
          </h1>
          <h1 className="heading relative hidden !font-extrabold dark:block">
            <span className="text-purple">FAQs</span>
          </h1>
          <div className="relative my-10 md:mb-20">
            <DynamicFAQs />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
