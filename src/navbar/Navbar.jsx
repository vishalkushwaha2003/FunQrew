import React, { useState } from "react";
import Hamberger from "./Hamberger.jsx";
import Logo from "./Logo.jsx";
import NavbarBg from "./NavbarBg.jsx";
import SpeedDialExpansion from "./SpeedDialExpansion.jsx";

function Navbar() {
  const [valChange, setValChange] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const onValChange = (comingVal) => {
    setValChange(comingVal);
  };

  const onIsClicked = (comingIsClicked) => {
    setIsClicked(comingIsClicked);
  };

  return (
    <div className="fixed  flex justify-between w-screen items-center xl:pr-12 lg:pr-11 md:pr-10 sm:pr-8 pr-7 top-[-2px] z-30 glassy-effect">
      
        
          <Logo />
          
          <NavbarBg valChange={valChange} />
          <SpeedDialExpansion isClicked={isClicked} />
          <Hamberger onValChange={onValChange} onIsClicked={onIsClicked} />
        </div>
    
    
  );
}

export default Navbar;
