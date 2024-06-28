import React from 'react';
import PropTypes from 'prop-types';

export default function HomePhotoCardContent({ photo, name, designation, isVisible }) {
  return (
    <div className={`card ${isVisible ? 'visible' : 'hidden'} `}>
      <div className='flex items-center justify-center'>
      <img
        src={photo}
        alt="founder photo"
        className='animate__animated animate__backInRight rounded-[20px] '
      />
      </div>
      <div className="card__content">
        <p className="card__title">{name}</p>
        <p className="card__description">{designation}</p>
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
