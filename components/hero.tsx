import React from "react";
import heroLogo from "../public/heroLogo.png";
import Image from "next/image";
import Button from "./button";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className=" bg-hero-image w-full h-screen bg-no-repeat bg-center flex justify-center items-center flex-col ">
      <Image
        src={heroLogo}
        alt="hero logo"
        width={1000}
        height={1000}
        className=" w-[420px] max-md:w-[320px] max-sm:w-[220px]"
      />
      <p className=" w-[390px] text-right text-primary-green max-md:[w-320px] max-sm:w-[220px]">
        position
      </p>

      <div className=" flex gap-10 max-md:flex-col max-md:gap-3 mt-10 items-center">
        <Button variant="outline">
          <span>Demo</span>
          <MdOutlineRemoveRedEye className="size-4" />
        </Button>
        <Button variant="primary">
          <span>Start a Project</span>
          <GoArrowRight className="size-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
