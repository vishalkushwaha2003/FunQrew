import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import SpeedDialExpansion from "./navbar/SpeedDialExpansion.jsx";



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
    <div className="relative">
      <div
        className="top-0 pl-1 pt-1 z-10 absolute hover:cursor-pointer"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <div className={`icon-container ${isClicked ? "icon-exit" : "icon-enter"}`}>
          {isClicked ? <CloseRoundedIcon /> : <MenuOutlinedIcon />}
        </div>
        
      </div>
      
      <Navbar val={val} />
      {isClicked && <SpeedDialExpansion isClicked={isClicked} />}
      
    </div>
  );
};

export default App;
