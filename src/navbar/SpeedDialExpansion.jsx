import React, { useState, useEffect } from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box } from "@mui/material";

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
    <div className="w-screen absolute pt-[1vw] flex justify-evenly items-center h-12 sm:h-14 md:h-16 lg:h-20">
      <div className="text-white flex justify-center items-end gap-3 sm:gap-5 md:gap-6 lg:gap-10 ml-16 sm:ml-24 md:ml-24 lg:ml-40">
        {[
          { icon: OtherHousesOutlinedIcon, label: "Home", href: "#home", value: 1 },
          { icon: HelpOutlineOutlinedIcon, label: "What We Do", href: "#whatWeDo", value: 2 },
          { icon: CollectionsOutlinedIcon, label: "Gallery", href: "#gallery", value: 3 },
          { icon: InfoOutlinedIcon, label: "About Us", href: "#aboutUs", value: 4 },
          { icon: AddIcCallOutlinedIcon, label: "Contact", href: "#contact", value: 5 },
        ].map(({ icon: Icon, label, href, value }) => (
          <a
            key={value}
            onClick={() => clickHandler(value)}
            href={href}
            className={`flex flex-col items-center animate__animated ${
              isClicked ? "animate__fadeInRight" : "animate__fadeOutRight"
            } animate__faster hover:text-violet-500 transition-transform transform hover:scale-110`}
          >
            <Box
              component={Icon}
              sx={{
                fontSize: {
                  xs: 'small', // Small size for extra small screens
                  sm: 'medium', // Medium size for small screens
                  md: 'large', // Large size for medium screens
                  lg: 'x-large', // Extra large size for large screens
                },
                cursor: 'pointer',
                color: clickedIcon === value ? 'rgb(107 33 168)' : 'inherit', // Tailwind color class for text-violet-800
                '&:hover': {
                  color: 'rgb(139 92 246)', // Tailwind color class for text-violet-500
                },
                ...(clickedIcon === value && {
                  animation: 'bounceIn 1s',
                }),
              }}
            />
            <div
              className={`animate__animated ${
                clickedIcon === value ? "text-violet-800 animate__rubberBand" : ""
              } text-xs sm:text-xs md:sm lg:text-base xl:text-lg`}
            >
              {label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SpeedDialExpansion;
