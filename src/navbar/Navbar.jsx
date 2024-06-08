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
    <div className="fixed flex justify-between w-screen items-center pr-10 top-0 z-30 glassy-effect">
      
        
          <Logo />
          
          <NavbarBg valChange={valChange} />
          <SpeedDialExpansion isClicked={isClicked} />
          <Hamberger onValChange={onValChange} onIsClicked={onIsClicked} />
        </div>
    
    
  );
}

export default Navbar;
