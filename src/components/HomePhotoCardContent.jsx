import React from 'react';
import PropTypes from 'prop-types';

export default function HomePhotoCardContent({ photo, name, designation, isVisible }) {
  return (
    <div className={` grid grid-rows-[4fr_1fr] h-[330px] w-[250px] rounded-[20px]   overflow-hidden transition-all duration-[0.6s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] shadow-[0_0_20px_4px_rgba(31,4,235,0.5)] hover:scale-105 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.2)] ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='row-span-1 flex justify-center h-[80%]  items-center mt-2 overflow-hidden'>
        <img
          src={photo}
          alt="founder photo"
          className='w-[90%] animate__animated animate__fadeInRight object-fill rounded-[20px]  h-full transition-all duration-[0.6s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]'
        />
      </div>
      <div className="row-span-1  flex flex-col justify-center items-center animate__animated animate__fadeInLeft rounded-b-[20px] p-2">
        <p className="text-white font-semibold">{name}</p>
        <p className="text-white">{designation}</p>
      </div>
    </div>
  );
}

HomePhotoCardContent.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
