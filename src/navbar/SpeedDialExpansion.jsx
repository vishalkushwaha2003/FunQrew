import React, { useState, useEffect } from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function SpeedDialExpansion({ isClicked }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedIcon, setClickedIcon] = useState(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const clickHandler = (value) => {
    setClickedIcon(value);
  };

  return (
    <div
      className={`absolute text-white flex flex-row items-center space-x-[6vw] top-[1.5vw] right-[20vw] ${
        isOpen ? "open" : ""
      }`}
    >
      <a
        value='1'
        onClick={() => clickHandler(1)}
        href="#home"
        className={`flex flex-col items-center hover:scale-125 animate__animated ${isClicked ? 'animate__fadeInRight' : 'animate__fadeOutRight'} animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
      >
        <OtherHousesOutlinedIcon
          className={`hover:cursor-pointer animate__animated ${clickedIcon === 1 ? 'text-violet-800 animate__bounceIn' : ''}`}
        />
        <div className={`animate__animated ${clickedIcon === 1 ? 'text-violet-800 animate__rubberBand' : ''} text-sm `}>Home</div>
      </a>
      <a
        value='2'
        onClick={() => clickHandler(2)}
        href="#whatWeDo"
        className={`flex flex-col items-center animate__animated ${isClicked ? 'animate__fadeInRight' : 'animate__fadeOutRight'} animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
      >
        <HelpOutlineOutlinedIcon
          className={`hover:cursor-pointer animate__animated ${clickedIcon === 2 ? 'text-violet-800 animate__bounceIn' : ''}`}
        />
        <div className={`animate__animated ${clickedIcon === 2 ? 'text-violet-800 animate__rubberBand' : ''} text-sm`}>What We Do</div>
      </a>
      <a
        value='3'
        onClick={() => clickHandler(3)}
        href="#gallery"
        className={`flex flex-col items-center animate__animated ${isClicked ? 'animate__fadeInRight' : 'animate__fadeOutRight'} animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
      >
        <CollectionsOutlinedIcon
          className={`hover:cursor-pointer animate__animated ${clickedIcon === 3 ? 'text-violet-800 animate__bounceIn' : ''}`}
        />
        <div className={`animate__animated ${clickedIcon === 3? 'text-violet-800 animate__rubberBand' : ''} text-sm`}>Gallery</div>
      </a>
      <a
        value='4'
        onClick={() => clickHandler(4)}
        href="#aboutUs"
        className={`flex flex-col items-center animate__animated ${isClicked ? 'animate__fadeInRight' : 'animate__fadeOutRight'} animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
      >
        <InfoOutlinedIcon
          className={`hover:cursor-pointer animate__animated ${clickedIcon === 4 ? 'text-violet-800 animate__bounceIn' : ''}`}
        />
        <div className={`animate__animated ${clickedIcon === 4 ? 'text-violet-800 animate__rubberBand' : ''} text-sm`}>About Us</div>
      </a>
      <a
        value='5'
        onClick={() => clickHandler(5)}
        href="#contact"
        className={`flex flex-col items-center justify-center animate__animated ${isClicked ? 'animate__fadeInRight' : 'animate__fadeOutRight'} animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
      >
        <AddIcCallOutlinedIcon
          className={`hover:cursor-pointer animate__animated ${clickedIcon === 5 ? 'text-violet-800 animate__bounceIn' : ''}`}
        />
        <div className={`animate__animated ${clickedIcon === 5 ? 'text-violet-800 animate__rubberBand' : ''} text-sm`}>Contact</div>
      </a>
    </div>
  );
}

export default SpeedDialExpansion;
