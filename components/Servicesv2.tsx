// "use client";
import { servicesv2 } from "@/data/index2";
import ServiceCardv2 from "./ServiceCardv2";

const Servicesv2 = () => {
  return (
    <div className="relative pt-20" id="services">
      <h1 className="text-center text-4xl font-bold md:text-5xl">
        We cover all grounds
      </h1>
      <p className="my-4 md:mt-5 md:mb-10 text-center text-lg opacity-75 md:text-xl lg:mx-auto lg:max-w-[70%]">
        We do everything for you so that you can focus on treating your
        patients.
        <br />
        We consistently generate new patients who remain loyal forever.
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
    </div>
  );
};

export default Servicesv2;
