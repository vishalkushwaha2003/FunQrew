import handshake from "../assets/whatwedophoto/handshake3.png";
import ads from "../assets/whatwedophoto/ads.png";

const WhatWeDoCard = () => {
  return (
    <div className="flex justify-around mr-12">
      <div className=" animate__animated animate__rotateInDownLeft   hover:cursor-pointer h-[26rem] w-60  bg-[rgba(104,35,162,0.9)] rounded-xl flex flex-col items-center">
        <div className="h-40 w-40 bg-[#b975f1] rounded-full mt-6 shadow-gray-900 shadow-lg">
          <img
            src={ads}
            alt="Personal Relation"
            className=" mx-auto mt-6 ml-[2px]"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-xl text-white  text-center">AD FILMS</h1>
          <p className=" text-left ml-6 mt-2 text-white text-md font-light mr-2">
            We create impactful AD films that captivate audiences and elevate
            brands through innovative storytelling and high-quality production.
          </p>
        </div>
      </div>

      <div className=" animate__animated animate__zoomInUp hover:pointer h-[26rem] w-60  bg-[rgba(104,35,162,0.9)] rounded-xl flex flex-col items-center">
        <div className="h-40 w-40 bg-[#b975f1] rounded-full mt-6 shadow-gray-900 shadow-lg">
          <img
            src={ads}
            alt="Personal Relation"
            className=" mx-auto mt-6 ml-[2px]"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-xl text-white  text-center">EVENTS</h1>
          <p className=" text-left ml-6 mt-2 text-white text-md font-light mr-2">
            We organize exceptional events, including corporate functions,
            sports events, and entertainment shows.
          </p>
        </div>
      </div>

      <div className=" animate__animated animate__zoomIn hover:pointer  h-[26rem] w-60  bg-[rgba(104,35,162,0.9)] rounded-xl flex flex-col items-center">
        <div className="h-40 w-40 bg-[#b975f1] rounded-full mt-6 shadow-gray-900 shadow-lg">
          <img
            src={handshake}
            alt="Personal Relation"
            className="h-32 mx-auto mt-3"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-xl text-white  text-center">PERSONAL RELATION</h1>
          <p className=" text-left ml-6 mt-2 text-white text-md font-light mr-2">
            We offer personal branding services to help individuals craft and
            amplify their unique professional identity.
          </p>
        </div>
      </div>

      <div className=" animate__animated animate__zoomInDown  h-[26rem] w-60  bg-[rgba(104,35,162,0.9)] rounded-xl flex flex-col items-center">
        <div className="h-40 w-40 bg-[#b975f1] rounded-full mt-6 shadow-gray-900 shadow-lg">
          <img
            src={ads}
            alt="Personal Relation"
            className=" mx-auto mt-6 ml-[2px]"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-xl text-white  text-center">BRANDING</h1>
          <p className=" text-left ml-6 mt-2 text-white text-md font-light mr-2">
            We offer comprehensive branding services to create, enhance, and
            sustain a strong brand identity that resonates with your target
            audience and drives business growth.
          </p>
        </div>
      </div>

      <div className=" animate__animated animate__rotateInDownRight  h-[26rem] w-60  bg-[rgba(104,35,162,0.9)] rounded-xl flex flex-col items-center">
        <div className="h-40 w-40 bg-[#b975f1] rounded-full mt-6 shadow-gray-900 shadow-lg">
          <img
            src={ads}
            alt="Personal Relation"
            className=" mx-auto mt-6 ml-[2px]"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-xl text-white  text-center">
            SOCIAL MEDIA MANAGEMENT
          </h1>
          <p className=" text-left ml-6 mt-2 text-white text-md font-light mr-2">
            We provide expert social media management to enhance your online
            presence and engage your audience effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
