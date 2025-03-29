import Hero2 from "@/components/Hero2";
import dynamic from "next/dynamic";

const DynamicServicesv2 = dynamic(() => import("@/components/Servicesv2"));
const DynamicHeroCall = dynamic(() => import("@/components/HeroCall"));
const DynamicFreeWebsiteOffer = dynamic(
  () => import("@/components/FreeWebsiteOffer"),
);
// const DynamicGrid = dynamic(() => import("@/components/Grid"));
// const DynamicSubscribe = dynamic(() => import("@/components/SubscribeToUs"));
// const DynamicServices = dynamic(() => import("@/components/Services"));

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Hero2 />
        </section>
        <section>
          <DynamicHeroCall />
        </section>
        {/* <section className="hidden dark:block">
          <DynamicGrid />
          </section> */}
        <section>
          <DynamicServicesv2 />
        </section>
        {/* <section>
          <DynamicFreeWebsiteOffer />
        </section> */}
        {/* <section className="relative mt-12 border-b-2 border-t-2 md:mb-20 md:mt-40 md:rounded-3xl md:border-2 md:border-black-100">
          <DynamicSubscribe />
        </section> */}
      </main>
    </>
  );
}
