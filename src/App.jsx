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
    <div>
      <div className="fixed top-0 left-0 w-full z-20 glassy-effect">
        <div
          className="absolute pt-3 pl-[2vw] hover:cursor-pointer z-30"
          onClick={handleClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          <div className={`icon-containerbg ${isClicked ? "icon-exit" : "icon-enter"}`}>
            {isClicked ? <CloseRoundedIcon /> : <MenuOutlinedIcon />}
          </div>
        </div>
        <Navbar val={val} />
        {isClicked && <SpeedDialExpansion isClicked={isClicked} />}
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
