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
     
      <WhatWeDo />
      <Gallery />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default App;
