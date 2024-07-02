import Image from "next/image";
import React from "react";
import img1 from "../public/background 02.png";
import img2 from "../public/background 3.png";

const Separator = () => {
  return (
    <>
      <Image
        src={img1}
        alt="background 1"
        width={1000}
        height={1000}
        className="w-full max-md:hidden"
      />
      <Image
        src={img2}
        alt="background 2"
        width={1000}
        height={1000}
        className=" w-full max-md:hidden"
      />
    </>
  );
};

export default Separator;
