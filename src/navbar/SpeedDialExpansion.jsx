import React, { useState, useEffect } from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function SpeedDialExpansion() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClick = (e) => {};

  return (
    <div
      onClick={handleClick}
      className={`absolute bg-transparent flex flex-row  space-x-[10vw] top-3 left-[20vw] ${
        isOpen ? "open" : ""
      }`}
    >
      {" "}
      <a href="#home">
        <OtherHousesOutlinedIcon className="hover:cursor-pointer" />
      </a>
      <a href="#whatWeDo">
        <HelpOutlineOutlinedIcon className="hover:cursor-pointer" />
      </a>
      <a href="#gallery">
        <CollectionsOutlinedIcon className="hover:cursor-pointer" />
      </a>
      <a href="#aboutUs">
        <InfoOutlinedIcon className="hover:cursor-pointer" />
      </a>
      <a href="#contact">
        <AddIcCallOutlinedIcon className="hover:cursor-pointer" />
      </a>
    </div>
  );
}

export default SpeedDialExpansion;
