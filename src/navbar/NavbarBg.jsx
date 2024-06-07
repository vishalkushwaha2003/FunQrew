import React from "react";
import { purple } from "../constant.js";

function Navbar({valChange }) {
  return (
    <div
      className={`w-[100%] absolute h-20 min-h-10 min-w-50 bg-gradient-to-r from-[rgba(104,35,162,0)] to-[rgba(104,35,162,0.4)] transition-opacity duration-[1s]`}
      style={{ opacity: valChange / 100, backdropFilter: 'blur(7px)' }}
    ></div>
  );
}

export default Navbar;
