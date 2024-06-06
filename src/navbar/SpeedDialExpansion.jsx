import React, { useState, useEffect } from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function SpeedDialExpansion({isClicked}) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedIcon, setClickedIcon] = useState(null);
console.log(isClicked)
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const clickHandler = (value) => {
    setClickedIcon(value);
  };

  return (
    <div
      className={`absolute text-white bg-transparent flex flex-row items-center  space-x-[10vw] top-[2vw] right-[20vw] ${
        isOpen ? "open" : ""
      }`}
    >
      <a
        value='1'
        onClick={() => clickHandler(1)}
        href="#home"
        className={`animate__animated ${isClicked?'animate__fadeInRight ':'animate__fadeOutRight '} animate__faster`}
      >
        <OtherHousesOutlinedIcon
          className={`hover:cursor-pointer animate__animated  ${clickedIcon === 1 ? 'text-violet-700 animate__bounceIn' : ''}`}
        />
      </a>
      <a
        value='2'
        onClick={() => clickHandler(2)}
        href="#whatWeDo"
        className={`animate__animated ${isClicked?'animate__fadeInRight ':'animate__fadeOutRight '} animate__faster`}
      >
        <HelpOutlineOutlinedIcon
          className={`hover:cursor-pointer animate__animated  ${clickedIcon === 2 ? 'text-violet-700 animate__bounceIn' : ''}`}
        />
      </a>
      <a
        value='3'
        onClick={() => clickHandler(3)}
        href="#gallery"
        className={`animate__animated ${isClicked?'animate__fadeInRight ':'animate__fadeOutRight '} animate__faster`}
      >
        <CollectionsOutlinedIcon
          className={`hover:cursor-pointer animate__animated  ${clickedIcon === 3 ? 'text-violet-700 animate__bounceIn' : ''}`}
        />
      </a>
      <a
        value='4'
        onClick={() => clickHandler(4)}
        href="#aboutUs"
        className={`animate__animated ${isClicked?'animate__fadeInRight ':'animate__fadeOutRight '} animate__faster `}
      >
       
        <InfoOutlinedIcon
          className={`hover:cursor-pointer animate__animated  ${clickedIcon === 4 ? 'text-violet-700 animate__bounceIn' : ''}`}
        />
       
      </a>
      <a
        value='5'
        onClick={() => clickHandler(5)}
        href="#contact"
        className={`animate__animated ${isClicked?'animate__fadeInRight ':'animate__fadeOutRight '} animate__faster`}
      >
       
        <AddIcCallOutlinedIcon
          className={`hover:cursor-pointer  animate__animated  ${clickedIcon === 5 ? 'text-violet-700 animate__bounceIn' : ''}`}
        />
       
        
      </a>
    </div>
  );
}

export default SpeedDialExpansion;
