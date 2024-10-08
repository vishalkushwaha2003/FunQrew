/* eslint-disable no-unused-vars */
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

import Tilt from "react-parallax-tilt";
import { useState, useRef, useEffect } from "react";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    width: "300px",
    color: "black",
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(126 34 206)", // Use theme's primary color
    },
  },
  "& .MuiInputLabel-root": {
    color: "black",
    fontSize: "15px",
    margin: "-5px 0px",

    "&.Mui-focused": {
      color: "rgb(126 34 206)",
      margin: "0px ", // Use theme's primary color
    },
  },
}));

const ContactCard = () => {
  const [isInView, setIsInView] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className="relative flex flex-col-reverse md:flex-row justify-center"
    >
      <div className=" w-[20rem] h-[30rem] md:w-[45rem] md:h-[30rem] bg-purple-200 text-black mx-auto mt-10 rounded-lg md:rounded-none">
        <div className="text-center mt-8 md:ml-64">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
        </div>

        <div className="md:ml-64 text-center mt-10">
          <div className="mt-4">
            <CustomTextField
              id="name"
              label="Your Name"
              variant="outlined"
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            />
          </div>

          <div className="mt-6">
            <CustomTextField
              id="email"
              label="Your Email"
              variant="outlined"
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            />
          </div>

          <div className="mt-6">
            <CustomTextField
              id="message"
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className=" mx-auto md:mx-0 md:absolute md:top-6 md:left-72">
        <Tilt>
          <div
            className={`h-[24rem] w-[19rem] bg-purple-700 ${
              isInView ? "animate__animated animate__flipInY" : ""
            } hover:shadow-[#b975f1] hover:duration-500 hover:shadow-xl text-white`}
          >
            <div className="flex justify-center mt-8">
              <h1 className="text-3xl font-bold pt-4">Contact Us</h1>
            </div>

            <div className="mt-8 mx-4">
              <div className="flex">
                <div className="mr-2">
                  <LocationOnIcon fontSize="medium" />
                </div>
                <p className="text-base">
                  12A03, Kalypso Court Tower 3, Jaypee Greens Wishtown Sector
                  128, Noida, 201304
                </p>
              </div>

              <div className="flex mt-6">
                <div className="mr-2">
                  <PhoneIcon fontSize="medium" />
                </div>
                <p className="text-base">+91 98704 80191</p>
              </div>

              <div className="flex mt-6">
                <div className="mr-2">
                  <WhatsAppIcon fontSize="medium" />
                </div>
                <p className="text-base">+91 98704 80191</p>
              </div>

              <div className="flex mt-6">
                <div className="mr-2">
                  <EmailIcon fontSize="medium" />
                </div>
                <p className="text-base">Srivastavasunny035@gmail.com</p>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default ContactCard;
