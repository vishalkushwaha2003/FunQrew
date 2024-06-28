import React, { useState, useEffect } from "react";



import HomePhotoCard from "./HomePhotoCard";
import TextAnimation from "./textAnimation";

function Home() {
 

 
 
  

  return (
    <div id="home" className={`h-full w-full grid grid-cols-12 grid-rows-12   overflow-hidden bg-gradient-to-br  from-[rgba(104,35,162,0.30)] to-[rgba(104,35,162,0.91)] `}>
      <div className="col-span-5 row-span-12  flex justify-end items-center overflow-hidden p-10" >
        <HomePhotoCard className='animate__animated animate__fadeInRightBig' />
      </div> 
      <div className="col-span-7 row-span-12  flex justify-start items-center overflow-hidden p-10">
      <TextAnimation  />

      </div>
    </div>
  );
}

export default Home;
