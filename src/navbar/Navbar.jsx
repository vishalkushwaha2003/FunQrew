import React from "react";
import { purple } from "../constant.js";

function Navbar({ val }) {
  return (
    <div
      className={`w-screen h-12 min-h-10 min-w-50 bg-gradient-to-r from-[rgba(104,35,162,0.4)] to-[rgba(225,14,14,0.0)] transition-opacity duration-[2s]`}
      style={{ opacity: val / 100, backdropFilter: 'blur(10px)' }}
    ></div>
  );
}

export default Navbar;
