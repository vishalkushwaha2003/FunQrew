import React, { useState, useEffect } from "react";

function TextAnimation() {
  const names = ["Ankit Srivastava", "Mr. Alok Srivastava", "Lucky Arush"];
  const designations = [
    "FunQrew",
    "Honorary Patron",
    "Creative Director",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 9500); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [names.length]);

  return (
    <div className="text-[rgba(58,12,97,0.91)]">
      <div
        key={currentIndex} // Add a key that changes with currentIndex
        className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl mb-4 animate__animated sm:animate__fadeInLeft animate__fadeInDown animate__slow text-shadow font-bold"
      >
        {names[currentIndex]}
      </div>
      <div
        key={currentIndex + names.length} // Ensure a unique key for the second element
        className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl animate__animated sm:animate__fadeInLeft animate__fadeInDown animate__slow text-shadow"
      >
        {designations[currentIndex]}
      </div>
    </div>
  );
}

export default TextAnimation;

// import React, { useState, useEffect } from 'react';

// function TypeWriter() {
//   const words = ['Ankit Srivastva Founder of FunQrew','Mr. Alok Srivastava Honorary Patron','Lucky Arush With 5 years of experience at Kuku FM', "Rising Entrepreneur and Influencer", "ROLBOL Community Involvement","BiggBoss Season 13 : Cleared three rounds for entry","President of the ROLBOL community of Gorakhpur chapter","Excellent actor and a talented comedian","Team management ability"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const typingTimeout = setTimeout(() => {
//       const currentWord = words[currentWordIndex];
//       const textLength = currentText.length;

//       if (!isDeleting) {
//         setCurrentText(currentWord.substring(0, textLength + 1));
//       } else {
//         setCurrentText(currentWord.substring(0, textLength - 1));
//       }

//       if (!isDeleting && currentText === currentWord) {
//         setTimeout(() => setIsDeleting(true), 2000); // Delay before starting to delete
//       } else if (isDeleting && currentText === '') {
//         setIsDeleting(false);
//         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//       }
//     }, 100);

//     return () => clearTimeout(typingTimeout);
//   }, [currentText, currentWordIndex, isDeleting, words]);

//   return (
//     <div className="flex  justify-center items-center">
//       <h2 className="text-[3vw] text-[rgba(58,12,97,0.91)] text-shadow font-bold">{currentText}</h2>
//     </div>
//   );
// }

// export default TypeWriter;
