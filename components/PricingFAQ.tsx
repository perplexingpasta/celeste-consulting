"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const PricingFAQ = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="What is a patient acquisition agency?"
        title="What is a patient acquisition agency?"
        className="font-semibold"
      >
        <div className="font-normal leading-relaxed text-gray-700 dark:text-white mb-4">
          In simple terms, a patient acquisition agency gets you more patients
          reliably and helps you scale your practice.
          <br /> To be more precise, we do everything from capturing interested
          leads looking for a dermatologist in their city and nurture them so
          that they actually book an appointment with you and become life-long
          loyal patients. In essence, we take away your need to rely on
          word-of-mouth and get you patients in a consistent and predictable
          manner. This gives you complete peace of mind so that you can do what
          you do best — treating and taking care of your patients.
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="What's the main difference between these suites?"
        title="What's the main difference between these suites?"
        className="font-semibold"
      >
        <div className="font-normal leading-relaxed text-gray-700 dark:text-white mb-4">
          We&apos;ve designed these suites in order of how committed you want to
          be with growing your practice and getting in more patients as a
          result. If you&apos;re unsure of our services or whether you&apos;ve
          got committment issues, we suggest you to try our{" "}
          <span className="font-bold dark:text-purple">Essentials Suite</span>.
          It&apos;s priced adeptly and you&apos;ll love it, guaranteed. But if
          you have the guts or are determined enough to succeed, we highly
          recommend you to go for the{" "}
          <span className="font-bold dark:text-purple">Master Suite</span>.
          It&apos;s simply the best.
        </div>
      </AccordionItem>
      {/* <AccordionItem
        key="2"
        aria-label="What are guaranteed appointments?"
        title="What are guaranteed appointments?"
        className="font-semibold"
      >
        <div className="text-gray-700 font-normal mb-4 dark:text-white-100">
          In each tier we guarantee a particular number of appointments. An appointment is by definition a person who has shown interest in your ad and has booked a time and date for appointment to your clinic. This marks 1 appointment. After this, we ensure that the appointment is seen through and the person actually comes for paid consultation. That said, we only guarantee appointments if you follow everything as we say.
          <br />
          In the rare event that we can&apos;t hit our guaranteed appointment goal for the month, we&apos;ll keep working with you for free until we get you those guaranteed number of appointments.
        </div>
      </AccordionItem> */}
      <AccordionItem
        key="3"
        aria-label="Are there any hidden charges?"
        title="Are there any hidden charges?"
        className="font-semibold"
      >
        <div className="dark:text-white-100 font-normal leading-relaxed text-gray-700 mb-4">
          Absolutely not!
          <br />
          We operate on a retainer model. That means per month, based on the
          suite you select, we charge you a fixed amount with no hidden or
          overhead charges. This includes everything — ad spend, building a
          website, all our other services (depending on the suite) and our own
          fee as well. You don&apos;t ever have to pay another penny on top of
          this. Promise!
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="How do you guarantee results?"
        title="How do you guarantee results?"
        className="font-semibold"
      >
        <div className="dark:text-white-100 font-normal leading-relaxed text-gray-700 mb-4">
          At the moment, we do not offer any guarantees per se. The idea is to
          work together for a couple of months and you will definitely see a
          revenue bump by an increment in your patient inflow and the retention
          of your older patients. Since this is marketing, it takes time to show
          powerful results and its effect only compounds over time.
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="What are business emails?"
        title="What are business emails?"
        className="font-semibold"
      >
        <div className="dark:text-white-100 font-normal leading-relaxed text-gray-700 mb-4">
          Business emails are essential for your profession. They are made from
          your website domain so if you get dradamsmith.com as your domain for
          your website, you can have &quot;help@dradamsmith.com&quot; or
          &quot;support@dradamsmith.com&quot; as your emails. In our case, we
          have <strong>hello@celesteconsulting.in</strong>. You don&apos;t need
          to make a new email account, we&apos;ll simply forward all incoming
          emails to your personal email which can be your gmail account. As a
          result, you get to receive all your emails in the same inbox.
        </div>
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="What features will I get in the website?"
        title="What features will I get in the website?"
        className="font-semibold"
      >
        <div className="dark:text-white-100 font-normal leading-relaxed text-gray-700 mb-4">
          All our websites will at least have the following features:
          <br />
          <br />
          <ul>
            <li>+ Domain</li>
            <li>+ Hosting</li>
            <li>+ Analytics</li>
            <li>+ SEO Setup</li>
            <li>+ Image Gallery</li>
            <li>+ Whatsapp Integration</li>
            <li>+ Google Maps of your location</li>
            <li>+ Google Reviews of your practice</li>
            <li>+ Copywriting & Content Creation</li>
            <li>
              + Fully mobile, tablet, iphone, ipad, laptop, samsung fridge
              responsive
            </li>
            <li>+ Follows the best Accessibility Practices</li>
            <li>+ Regular Website Testing & Maintenance</li>
          </ul>
        </div>
      </AccordionItem>

      <AccordionItem
        key="7"
        aria-label="What are strategy meetings?"
        title="What are strategy meetings?"
        className="font-semibold"
      >
        <div className="dark:text-white-100 font-normal leading-relaxed text-gray-700 mb-4">
          In our professional & master suites, we provide strategy meetings, the
          frequency of which is monthly for the{" "}
          <span className="font-bold dark:text-purple">Professional Suite</span>{" "}
          and weekly for the{" "}
          <span className="font-bold dark:text-purple">Master Suite</span>. Here
          you get to interact with our founders who also happen to be the web
          development head and the creative head. We discuss your goals, current
          trajectory, extrapolated trajectory and business concerns so that you
          can have the peace of mind that everything is going well and according
          to plan. We also talk about which ads are performing well and where we
          should focus our efforts for best optimization and efficiency.
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default PricingFAQ;
