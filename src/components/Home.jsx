import React, { useState, useEffect } from "react";
import HomeBgParticles from "./HomeBgParticles";
import f1 from '../assets/homePhoto/founder1.png';
import f2 from '../assets/homePhoto/founder2.png';
import f3 from '../assets/homePhoto/founder3.png';
import TypeWriter from "./textAnimation";
import WordHeadingAnimation from "./WordHeadingAnimation";
import HomePhotoCard from "./HomePhotoCard";

function Home() {
  const colors = [
    "from-[rgba(104,35,162,0.30)] to-[rgba(104,35,162,0.91)]",
    "from-[rgba(88,28,135,0.30)] to-[rgba(88,28,135,0.91)]",
    "from-[rgba(104,35,162,0.30)] to-[rgba(104,35,162,0.91)]",
  ];

  const images = [f1, f2, f3];

  const [gradientIndex, setGradientIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setGradientIndex(prevIndex =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      );
    }, 12000); // Change images every 12 seconds

    return () => clearInterval(interval);
  }, []);

  const currentGradient = colors[gradientIndex];
  const currentImage = images[currentImageIndex];

  return (
    <div id="home" className={`relative w-full h-screen transition-all duration-[12000ms] ease-in-out overflow-hidden bg-gradient-to-br  from-[rgba(104,35,162,0.30)] to-[rgba(104,35,162,0.91)] flex items-center justify-center`}>
      <div className="relative" style={{ marginRight: '100px' }}>
        <HomePhotoCard />
      </div> 
      <TypeWriter />
    </div>
  );
}

export default Home;
