import React from "react";
import HomeBgParticles from "./HomeBgParticles";
import f1 from '../assets/homePhoto/founder1.png';
import f2 from '../assets/homePhoto/founder2.png';
import f3 from '../assets/homePhoto/founder3.png';

function Home() {
  return (
    <div id="home" className="relative w-full h-screen bg-gradient-to-br from-[rgba(147,65,214,0.51)] to-[rgba(58,12,97,0.91)] overflow-hidden">
      <div className="slideshow-container">
        <img src={f1} alt="founder1" className="slideshow-image" />
        <img src={f2} alt="founder2" className="slideshow-image" />
        <img src={f3} alt="founder3" className="slideshow-image" />
      </div>
      <HomeBgParticles />
    </div>
  );
}

export default Home;
