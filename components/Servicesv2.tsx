// "use client";
import { servicesv2 } from "@/data/index2";
import ServiceCardv2 from "./ServiceCardv2";
import LitUpButton from "./ui/LitUpButton";
import { FaLocationArrow } from "react-icons/fa6";

const Servicesv2 = () => {
  return (
    <div className="relative pt-20 px-5 max-w-7xl mx-auto" id="services">
      <h1 className="text-center text-4xl font-bold md:text-5xl">
        We cover all grounds
      </h1>
      <p className="my-4 text-center text-lg opacity-75 md:mb-10 md:mt-5 md:text-xl lg:mx-auto lg:max-w-[70%]">
        We take care of everything so that you can focus on what you do best -
        treating your patients!
      </p>
      <div className="mt-8 grid grid-cols-1 gap-x-32 p-4 md:grid-cols-2 lg:grid-cols-3">
        {servicesv2.map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            <ServiceCardv2 title={item.title} des={item.des} />
          </div>
        ))}
      </div>
      <div className="text-center text-xl md:mt-8 md:text-3xl">
        &quot;Céleste Consulting Is Rocketfuel Your Practice Needs To
        Succeed!&quot;
      </div>
      <a
        href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
        target="_blank"
      >
        <div className="text-center mt-8">
          <LitUpButton
            title="BOOK A CALL NOW"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </a>
    </div>
  );
};

export default Servicesv2;
