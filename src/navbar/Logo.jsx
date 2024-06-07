import React,{useState} from "react";
import logo from "../assets/logo.png";

function Logo() {
  const [islogoImageHovered, setIslogoImageHovered] = useState(false);

  const logoImageHoverHandle = () => {
    setIslogoImageHovered((pre) => !islogoImageHovered);
  };

  return (
    <div className="flex  mt-3 space-x-2 items-center ml-6 z-40 h-[5vw] w-[12vw] min-h-10 min-w-10">
      <img
        src={logo}
        alt="logo"
        className={`animate__animated ${
          islogoImageHovered ? "animate__headShake" : "animate__swing"
        }  h-[5vw] w-[5vw] hover:cursor-pointer rounded-full`}
        onMouseEnter={logoImageHoverHandle}
        onMouseLeave={logoImageHoverHandle}
      />
      <div
        className={`funqrew-text font-bold  w-[10vw] min-w-14 hover:cursor-pointer text-[rgba(104,35,162,1)]`}
      >
        {"FunQrew".split("").map((char, index) => (
          <span key={index} className="text-[1.5vw] ">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Logo;
