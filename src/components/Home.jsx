import React, { useState, useEffect } from "react";
import HomeBgParticles from "./HomeBgParticles";
import f1 from '../assets/homePhoto/founder1.png';
import f2 from '../assets/homePhoto/founder2.png';
import f3 from '../assets/homePhoto/founder3.png';
import TypeWriter from "./textAnimation";
import WordHeadingAnimation from "./WordHeadingAnimation";

function Home() {
  const colors = [
    "from-[rgba(147,65,214,0.51)] to-[rgba(58,12,97,0.91)]",
    "from-[rgba(255,105,180,0.51)] to-[rgba(255,20,147,0.91)]",
    "from-[rgba(50,205,50,0.51)] to-[rgba(255,215,0,0.91)]",
    "from-[rgba(30,144,255,0.51)] to-[rgba(0,191,255,0.91)]"
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
    }, 6000); // Change images every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentGradient = colors[gradientIndex];
  const currentImage = images[currentImageIndex];

  return (
    <div id="home" className={`relative w-full h-screen bg-gradient-to-br ${currentGradient} transition-colors duration-2000 ease-in-out overflow-hidden`}>
      <div className="absolute h-20 left-28 w-[600px] bottom-52">
        <TypeWriter />
      </div>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`founder${index + 1}`}
            className={`${
              index === currentImageIndex
                ? "animate__animated animate__bounceIn"
                : "hidden"
            }`}
          />
        ))}
      </div>
      <HomeBgParticles />
    </div>
  );
}

export default Home;
