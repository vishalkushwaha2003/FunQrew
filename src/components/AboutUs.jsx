import { useEffect, useRef, useState } from "react";
import about1 from "../assets/aboutPhoto/about1.jpg";
import about2 from "../assets/aboutPhoto/about2.jpg";

import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";

function AboutUs() {
  const [isInView, setIsInView] = useState(false);
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Optional: Disconnect observer after first trigger to avoid repeated animations
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  return (
    <div id="aboutUs">
      <div ref={aboutUsRef}>
        <div className="relative">
          <div>
            <h1 className="text-5xl text-center mt-32 font-bold">ABOUT US</h1>

            <div className="flex ml-20 mt-24 ">
              <div className="w-1/2 ml-10  md:mt-[30rem] lg:mt-0">
                <div className="relative mb-7 -ml-6 md:ml-0">
                  <div
                    className={`text-2xl flex font-semibold ${
                      isInView ? "animate__animated animate__bounceIn" : ""
                    }`}
                  >
                    <div className="w-14 h-14 left-[-12px] top-0 absolute bg-[rgba(104,35,162,0.7)] rounded-full flex items-center justify-center">
                      <div
                        className={`${
                          isInView
                            ? "animate__animated animate__bounceInDown"
                            : ""
                        }`}
                      >
                        <MilitaryTechOutlinedIcon fontSize="large" />
                      </div>
                    </div>
                    <div className="ml-14 -mr-10 md:mr-0 text-[20px]">
                      Award-Winning Creative Minds and Media Experts
                    </div>
                  </div>
                  <p
                    className={`ml-2 md:ml-14 mt-2 w-[15rem] sm:w-[23rem] text-lg md:w-[34rem] ${
                      isInView ? "animate__animated animate__fadeIn" : ""
                    }`}
                  >
                    We are a bunch of mad guys, not easy to handle. A motley
                    group of national award-winning creative filmmakers from the
                    Film & Television Institute of India Pune, visualisers and
                    top communication professionals from the media &
                    entertainment industry.
                  </p>
                </div>

                <div className="relative -ml-6 md:ml-0">
                  <div
                    className={`text-2xl flex font-semibold ${
                      isInView ? "animate__animated animate__bounceIn" : ""
                    }`}
                  >
                    <div className="w-14 h-14 left-[-12px] top-0 absolute bg-[rgba(104,35,162,0.7)] rounded-full flex items-center justify-center">
                      <div
                        className={`${
                          isInView
                            ? "animate__animated animate__bounceInDown"
                            : ""
                        }`}
                      >
                        <MovieCreationOutlinedIcon fontSize="large" />
                      </div>
                    </div>
                    <div className="ml-14 -mr-10 md:mr-0 text-[20px]">
                      Innovative and Immersive Storytelling
                    </div>
                  </div>
                  <p
                    className={`ml-2 md:ml-14 mt-2 w-[15rem] sm:w-[23rem] text-lg md:w-[34rem] ${
                      isInView ? "animate__animated animate__fadeIn" : ""
                    }`}
                  >
                    As the way we are, we would narrate your dream and story
                    through various communication tools that includes films,
                    AVs, music digital media, print, outdoor, interpersonal
                    communication through live arts and many more innovative
                    solutions that go beyond the normal, in a manner, that is
                    not only aesthetically pleasing and immersive but is
                    technically brilliant as well. We are here to challenge the
                    established norms.
                  </p>
                </div>
              </div>

              <div className="hidden md:block">
                <img
                  className={`absolute right-40 h-64 rounded-md ${
                    isInView ? "animate__animated animate__backInUp" : ""
                  }`}
                  src={about2}
                  alt="Videography"
                />

                <div
                  className={`absolute top-64 right-72 border-violet-300 border-4 rounded-md ${
                    isInView ? "animate__animated animate__backInDown" : ""
                  }`}
                >
                  <img
                    className="h-64 w-full rounded-md"
                    src={about1}
                    alt="Photography"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
