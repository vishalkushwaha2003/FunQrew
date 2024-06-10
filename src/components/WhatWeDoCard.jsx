import { useEffect, useRef, useState } from "react";
import handshake from "../assets/whatwedophoto/handshake3.png";
import ads from "../assets/whatwedophoto/ads.png";
import eventmanagement from "../assets/whatwedophoto/event-management2.png";
import brand from "../assets/whatwedophoto/brand.png";
import social from "../assets/whatwedophoto/SocialMediaManagement.png";

import Tilt from "react-parallax-tilt";

const WhatWeDoCard = () => {
  const [isInView, setIsInView] = useState(false);
  const whatWeDoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect after the first trigger if you don't want repeated animations
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (whatWeDoRef.current) {
      observer.observe(whatWeDoRef.current);
    }

    return () => {
      if (whatWeDoRef.current) {
        observer.unobserve(whatWeDoRef.current);
      }
    };
  }, []);

  return (
    <div ref={whatWeDoRef} className="flex justify-around mr-12">
      <Tilt>
        <div
          className={`${
            isInView ? "animate__animated animate__rotateInDownLeft" : ""
          } hover:cursor-pointer h-[26rem] w-60 bg-[rgba(104,35,162,0.9)]  rounded-xl flex flex-col items-center hover:shadow-[#b975f1] hover:duration-500 hover:shadow-xl`}
        >
          <div
            className={`h-40 w-40 bg-[#b975f1] ${
              isInView
                ? "animate__animated animate__zoomIn animate__delay-1s"
                : ""
            }  rounded-full mt-6 shadow-gray-900 shadow-lg`}
          >
            <img
              src={ads}
              alt="Personal Relation"
              className="mx-auto mt-6 ml-[2px]"
            />
          </div>
          <div
            className={`mt-6 ${
              isInView
                ? "animate__animated animate__bounceIn animate__delay-1s"
                : ""
            } `}
          >
            <h1 className="text-xl text-white text-center">AD FILMS</h1>
            <p className="text-left ml-6 mt-2 text-white text-md font-light mr-2">
              We create impactful AD films that captivate audiences and elevate
              brands through innovative storytelling and high-quality
              production.
            </p>
          </div>
        </div>
      </Tilt>

      <Tilt>
        <div
          className={`${
            isInView ? "animate__animated animate__zoomInUp" : ""
          } hover:pointer h-[26rem] w-60 bg-[rgba(104,35,162,0.9)]  rounded-xl flex flex-col hover:cursor-pointer items-center hover:shadow-[#b975f1] hover:duration-500 hover:shadow-xl`}
        >
          <div
            className={`h-40 w-40 bg-[#b975f1] ${
              isInView
                ? "animate__animated animate__zoomIn animate__delay-1s"
                : ""
            }  rounded-full mt-6 shadow-gray-900 shadow-lg`}
          >
            <img
              src={eventmanagement}
              alt="Personal Relation"
              className="mx-auto mt-3 h-36 "
            />
          </div>
          <div
            className={`mt-6 ${
              isInView
                ? "animate__animated animate__bounceIn animate__delay-1s"
                : ""
            } `}
          >
            <h1 className="text-xl text-white text-center">EVENTS</h1>
            <p className="text-left ml-6 mt-2 text-white text-md font-light mr-2">
              We organize exceptional events, including corporate functions,
              sports events, and entertainment shows.
            </p>
          </div>
        </div>
      </Tilt>

      <Tilt>
        <div
          className={`${
            isInView ? "animate__animated animate__zoomIn" : ""
          } hover:pointer h-[26rem] w-60 bg-[rgba(104,35,162,0.9)] hover:cursor-pointer rounded-xl flex flex-col items-center hover:shadow-[#b975f1] hover:duration-500 hover:shadow-xl`}
        >
          <div
            className={`h-40 w-40 bg-[#b975f1] ${
              isInView
                ? "animate__animated animate__zoomIn animate__delay-1s"
                : ""
            }  rounded-full mt-6 shadow-gray-900 shadow-lg`}
          >
            <img
              src={handshake}
              alt="Personal Relation"
              className="h-32 mx-auto mt-3"
            />
          </div>
          <div
            className={`mt-6 ${
              isInView
                ? "animate__animated animate__bounceIn animate__delay-1s"
                : ""
            } `}
          >
            <h1 className="text-xl text-white text-center">
              PERSONAL RELATION
            </h1>
            <p className="text-left ml-6 mt-2 text-white text-md font-light mr-2">
              We offer personal branding services to help individuals craft and
              amplify their unique professional identity.
            </p>
          </div>
        </div>
      </Tilt>

      <Tilt>
        <div
          className={`${
            isInView ? "animate__animated animate__zoomInDown" : ""
          } h-[26rem] w-60 bg-[rgba(104,35,162,0.9)] rounded-xl hover:cursor-pointer flex flex-col items-center hover:shadow-[#b975f1] hover:duration-500 hover:shadow-xl`}
        >
          <div
            className={`h-40 w-40 bg-[#b975f1] ${
              isInView
                ? "animate__animated animate__zoomIn animate__delay-1s"
                : ""
            }  rounded-full mt-6 shadow-gray-900 shadow-lg`}
          >
            <img
              src={brand}
              alt="Personal Relation"
              className="mx-auto  h-32 mt-4"
            />
          </div>
          <div
            className={`mt-6 ${
              isInView
                ? "animate__animated animate__bounceIn animate__delay-1s"
                : ""
            } `}
          >
            <h1 className="text-xl text-white text-center ">BRANDING</h1>
            <p className="text-left ml-6 mt-2 text-white text-md font-light mr-2">
              We offer comprehensive branding services to create, enhance, and
              sustain a strong brand identity that resonates with your target
              audience and drives business growth.
            </p>
          </div>
        </div>
      </Tilt>

      <Tilt>
        <div
          className={`${
            isInView ? "animate__animated animate__rotateInDownRight" : ""
          } h-[26rem] w-60 bg-[rgba(104,35,162,0.9)] rounded-xl hover:cursor-pointer flex flex-col items-center  hover:shadow-[#b975f1] hover:duration-500 hover:shadow-xl`}
        >
          <div
            className={`h-40 w-40 bg-[#b975f1] ${
              isInView
                ? "animate__animated animate__zoomIn animate__delay-1s"
                : ""
            }  rounded-full mt-6 shadow-gray-900 shadow-lg`}
          >
            <img
              src={social}
              alt="Personal Relation"
              className="mx-auto  h-32 mt-4"
            />
          </div>
          <div
            className={`mt-6 ${
              isInView
                ? "animate__animated animate__bounceIn animate__delay-1s"
                : ""
            } `}
          >
            <h1 className="text-xl text-white text-center">
              SOCIAL MEDIA MANAGEMENT
            </h1>
            <p className="text-left ml-6 mt-2 text-white text-md font-light mr-2">
              We provide expert social media management to enhance your online
              presence and engage your audience effectively.
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default WhatWeDoCard;
