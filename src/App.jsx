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

      <div className="h-screen w-screen">
        <Home />
      </div>

      <div className="pt-20 pb-28 bg-violet-300">
        <WhatWeDo />
      </div>

      <Gallery />

      <div className="pt-14 pb-40 bg-violet-300">
        <AboutUs />
      </div>

      <div className="pt-14 pb-24 bg-violet-600">
        <Contact />
      </div>
    </div>
  );
};

export default App;
