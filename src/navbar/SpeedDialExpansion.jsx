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
    <div className="w-screen absolute  pt-[1vw] flex justify-evenly items-center h-12 sm:h-14 md:h-16 lg:h-20">
      <div
        className='text-white flex justify-center items-end gap-3 sm:gap-5 md:gap-6 lg:gap-10 ml-16 sm:ml-24 md:ml-24 lg:ml-40 '
      >
        <a
          value="1"
          onClick={() => clickHandler(1)}
          href="#home"
          className={`flex flex-col items-center hover:scale-125 animate__animated ${
            isClicked ? "animate__fadeInRight" : "animate__fadeOutRight"
          } animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
        >
          <OtherHousesOutlinedIcon
            className={`hover:cursor-pointer animate__animated  ${
              clickedIcon === 1 ? "text-violet-800 animate__bounceIn" : ""
            }`}
          />
          <div
            className={`animate__animated ${
              clickedIcon === 1 ? "text-violet-800 animate__rubberBand" : ""
            } text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            Home
          </div>
        </a>
        <a
          value="2"
          onClick={() => clickHandler(2)}
          href="#whatWeDo"
          className={`flex flex-col items-center animate__animated ${
            isClicked ? "animate__fadeInRight" : "animate__fadeOutRight"
          } animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
        >
          <HelpOutlineOutlinedIcon
            className={`hover:cursor-pointer animate__animated  ${
              clickedIcon === 2 ? "text-violet-800 animate__bounceIn" : ""
            }`}
          />
          <div
            className={`animate__animated ${
              clickedIcon === 2 ? "text-violet-800 animate__rubberBand" : ""
            } text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            What We Do
          </div>
        </a>
        <a
          value="3"
          onClick={() => clickHandler(3)}
          href="#gallery"
          className={`flex flex-col items-center animate__animated ${
            isClicked ? "animate__fadeInRight" : "animate__fadeOutRight"
          } animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
        >
          <CollectionsOutlinedIcon
            className={`hover:cursor-pointer animate__animated  ${
              clickedIcon === 3 ? "text-violet-800 animate__bounceIn" : ""
            }`}
          />
          <div
            className={`animate__animated ${
              clickedIcon === 3 ? "text-violet-800 animate__rubberBand" : ""
            } text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            Gallery
          </div>
        </a>
        <a
          value="4"
          onClick={() => clickHandler(4)}
          href="#aboutUs"
          className={`flex flex-col items-center animate__animated ${
            isClicked ? "animate__fadeInRight" : "animate__fadeOutRight"
          } animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
        >
          <InfoOutlinedIcon
            className={`hover:cursor-pointer animate__animated  ${
              clickedIcon === 4 ? "text-violet-800 animate__bounceIn" : ""
            }`}
          />
          <div
            className={`animate__animated ${
              clickedIcon === 4 ? "text-violet-800 animate__rubberBand" : ""
            } text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            About Us
          </div>
        </a>
        <a
          value="5"
          onClick={() => clickHandler(5)}
          href="#contact"
          className={`flex flex-col items-center justify-center animate__animated ${
            isClicked ? "animate__fadeInRight" : "animate__fadeOutRight"
          } animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
        >
          <AddIcCallOutlinedIcon
            className={`hover:cursor-pointer animate__animated  ${
              clickedIcon === 5 ? "text-violet-800 animate__bounceIn" : ""
            }`}
          />
          <div
            className={`animate__animated ${
              clickedIcon === 5 ? "text-violet-800 animate__rubberBand" : ""
            } text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            Contact
          </div>
        </a>
      </div>
    </div>
  );
}

export default SpeedDialExpansion;
