import React from "react";
// import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
// import Image from "next/image";

interface ServiceCardProps {
  title?: string;
  des?: string;
  img?: string;
  children?: React.ReactNode;
}

const ServiceCardv2: React.FC<ServiceCardProps> = ({
  title,
  des,
  img,
  children,
}) => {
  return (
    <>
      <div className="relative">
        <div className="text-lg font-bold text-indigo-700 md:text-xl">
          {title}
        </div>
        <div className="mb-8 text-lg opacity-75 md:text-xl">{des}</div>
      </div>
    </>
  );
};

export default ServiceCardv2;
