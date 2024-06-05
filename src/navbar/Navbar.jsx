import React from "react";
import {purple}  from "../constant.js";

function Navbar({ val }) {
   
  return (
    <div
      className={`w-[100vw] h-12 min-h-10 bg-gradient-to-r from-[rgba(104,35,162,1)] to-[rgba(225,14,14,0.0)] transition-opacity duration-[2s]`}
      style={{ opacity: val / 100 }}
    ></div>
  );
}

export default Navbar;
