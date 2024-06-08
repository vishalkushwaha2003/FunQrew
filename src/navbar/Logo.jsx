import React, { useState } from "react";
import logo from "../assets/logo.png";

function Logo() {
  const [islogoImageHovered, setIslogoImageHovered] = useState(false);

  const logoImageHoverHandle = () => {
    setIslogoImageHovered((prev) => !prev);
  };

  return (
    <div className="flex mt-1 sm:mt-2 md:mt-3   lg:mt-5  space-x-1 sm:space-x-1 md:space-x-2 lg:space-x-2 items-center  xl:ml-6 lg:ml-5 md:ml-4 sm:ml-3 ml-2 z-40 w-28 h-12   sm:w-36 md:w-40 lg:w-48 ">
      <img
        src={logo}
        alt="logo"
        className={`animate__animated ${
          islogoImageHovered ? "animate__headShake" : "animate__swing"
        } h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 hover:cursor-pointer rounded-full`}
        onMouseEnter={logoImageHoverHandle}
        onMouseLeave={logoImageHoverHandle}
      />
      <div
        className={`funqrew-text font-bold w-16 sm:w-20  md:w-24  lg:w-28 hover:cursor-pointer text-[rgba(104,35,162,1)]`}
      >
        {"FunQrew".split("").map((char, index) => (
          <span key={index} className=" text-sm sm:text-base md:text-xl lg:text-2xl">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Logo;
