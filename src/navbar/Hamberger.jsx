import React, { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Hamberger({ onValChange, onIsClicked }) {
  const [val, setVal] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => {
      const newIsClicked = !prev;
      const newVal = newIsClicked ? 100 : 0;
      setVal(newVal);
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

  useEffect(() => {
    if (onIsClicked) {
      onIsClicked(isClicked);
    }
  }, [isClicked, onIsClicked]);

  useEffect(() => {
    if (onValChange) {
      onValChange(val);
    }
  }, [val, onValChange]);

  return (
    <div
      className=" xl:right-5 hover:cursor-pointer z-30"
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div
        className={`icon-container ${isClicked ? "icon-exit" : "icon-enter"}`}
      >
        {isClicked ? <CloseRoundedIcon /> : <MenuOutlinedIcon />}
      </div>
    </div>
  );
}

export default Hamberger;
