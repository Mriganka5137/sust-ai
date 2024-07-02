import Image from "next/image";
import React from "react";
import visionDesktop from "@/public/our vison explain chart.png";
import visionMobile from "@/public/vision-mobile.png";

const Vision = () => {
  return (
    <section className=" space-y-20 container  mt-20 max-md:space-y-0 max-md:mt-8">
      <div>
        <div className=" w-20 h-[2px] bg-primary-green"></div>
        <p className=" text-xl max-md:text-lg">Our</p>
        <span className=" text-2xl max-md:text-xl">Vision</span>
      </div>
      <Image
        src={visionDesktop}
        alt="vision"
        className=" w-full max-md:hidden "
      />
      <Image src={visionMobile} alt="vision" className=" w-full md:hidden" />
    </section>
  );
};

export default Vision;
