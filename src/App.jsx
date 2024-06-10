import AboutUs from "./components/AboutUs.jsx";
import Home from "./components/Home.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./navbar/Navbar.jsx";

const App = () => {
  return (
    <div className="relative  ">
      <Navbar />
      <div className="mt-[1200px]"></div>
      <h1 className="animate__animated animate__bounce">An animated element</h1>
      <Home />
      <div className="mt-[1200px]"></div>
      <WhatWeDo />
      <div className="mt-[1200px]"></div>
      <Gallery />
      <div className="mt-[1200px]"></div>
      <AboutUs />
      <div className="mt-[1200px]"></div>
      <Contact />
      <div className="mt-[1200px]"></div>
    </div>
  );
};

export default App;
