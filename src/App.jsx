import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import SpeedDialExpansion from "./navbar/SpeedDialExpansion.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Home from "./components/Home.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import logo from "./assets/logo.png";

const App = () => {
  const [val, setVal] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => {
      const newIsClicked = !prev;
      setVal(newIsClicked ? 100 : 0);
      return newIsClicked;
    });
  };

  const handleHover = () => {
    setVal(100);
  };

  const handleHoverOut = () => {
    if (!isClicked) {
      setVal(0);
    }
  };

  return (
    <div className="relative ">
      <div className="fixed top-[-1px] left-0 w-full z-20 glassy-effect">
        <div className="flex  ">
          <div className="flex  items-center ">
            <div className=" flex justify-center pt-3  pl-3 space-x-2 items-center ml-10  z-40  h-[6vw] w-[6vw] min-h-10 min-w-10">
              <img src={logo} alt="logo" className="h-[5vw] w-[5vw]  rounded-full" />
              <div className=" z-40   font-bold  text-[1.5vw] md:text-[15px]  text-[rgba(104,35,162,1)]">
                FunQrew
              </div>
            </div>

            <div
              className="absolute  right-[2vw] hover:cursor-pointer z-30"
              onClick={handleClick}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <div
                className={`icon-containerbg ${
                  isClicked ? "icon-exit" : "icon-enter"
                }`}
              >
                {isClicked ? <CloseRoundedIcon /> : <MenuOutlinedIcon />}
              </div>
            </div>
            <Navbar val={val} />
            {isClicked && <SpeedDialExpansion isClicked={isClicked} />}
          </div>
        </div>
      </div>

      <div className="mt-[1200px]"></div>
      <Home />
      <div className="mt-[1200px]"></div>
      <WhatWeDo />
      <div className="mt-[1200px]"></div>
      <Gallery />
      <div className="mt-[1200px]"></div>
      <AboutUs />
      <div className="mt-[1200px]"></div>
      <Contact />
      <div className="mt-[1200px]"></div>
    </div>
  );
};

export default App;
