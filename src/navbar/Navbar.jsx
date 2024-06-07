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
    <div className="fixed top-[-1px] left-0 w-full z-20 glassy-effect">
      <div className="flex">
        <div className="flex items-center">
          <Logo />
          <Hamberger onValChange={onValChange} onIsClicked={onIsClicked} />
          <NavbarBg valChange={valChange} />
          <SpeedDialExpansion isClicked={isClicked} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
