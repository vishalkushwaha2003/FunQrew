import React from 'react';
import g1 from '../assets/galleryPhoto/g1.jpg';
import g2 from '../assets/galleryPhoto/g2.jpg';
import g3 from '../assets/galleryPhoto/g3.jpg';
import g4 from '../assets/galleryPhoto/g4.jpg';
import g5 from '../assets/galleryPhoto/g5.jpg';
import g6 from '../assets/galleryPhoto/g6.jpg';
import g7 from '../assets/galleryPhoto/g7.jpg';
import g8 from '../assets/galleryPhoto/g8.jpg';
import g9 from '../assets/galleryPhoto/g9.jpg';
import g10 from '../assets/galleryPhoto/g10.jpg';
import g11 from '../assets/galleryPhoto/g11.jpg';
import g12 from '../assets/galleryPhoto/g12.jpg';
import g13 from '../assets/galleryPhoto/g13.jpg';
import g14 from '../assets/galleryPhoto/g14.jpg';
import g15 from '../assets/galleryPhoto/g15.jpg';
import g16 from '../assets/galleryPhoto/g16.jpg';
import g17 from '../assets/galleryPhoto/g17.jpg';
import g18 from '../assets/galleryPhoto/g18.jpg';
import g19 from '../assets/galleryPhoto/g19.jpg';
import g20 from '../assets/galleryPhoto/g20.jpg';
import g21 from '../assets/galleryPhoto/g21.jpg';
import g22 from '../assets/galleryPhoto/g22.jpg';
import g23 from '../assets/galleryPhoto/g23.jpg';
import g24 from '../assets/galleryPhoto/g24.jpg';
import g25 from '../assets/galleryPhoto/g25.jpg';
import g26 from '../assets/galleryPhoto/g26.jpg';

const images = [
  { src: g1, label: 'VR', span: 'h-48 md:h-80' },
  { src: g2, label: 'Tech', span: 'h-48 md:col-span-2 md:h-80' },
  { src: g3, label: 'Dev', span: 'h-48 md:col-span-2 md:h-80' },
  { src: g4, label: 'Retro', span: 'h-48 md:row-span-2 md:h-[656px]' },
  { src: g5, label: 'VR', span: 'h-48 md:h-80' },
  { src: g6, label: 'VR', span: 'h-48 md:row-span-2 md:h-[656px]' },
  { src: g7, label: 'VR', span: 'h-48 md:h-80' },
  { src: g8, label: 'VR', span: 'h-48 md:h-[660px] md:row-span-2' },
  { src: g9, label: 'VR', span: 'h-48 md:h-80' },
  { src: g10, label: 'VR', span: 'h-48 md:h-80' },
  { src: g11, label: 'VR', span: 'h-48 md:col-span-2 md:h-80' },
  { src: g12, label: 'VR', span: 'h-48 md:h-80' },
  { src: g13, label: 'VR', span: 'h-48 md:h-[660px] md:row-span-2' },
  { src: g14, label: 'VR', span: 'h-48 md:h-80' },
  { src: g15, label: 'VR', span: 'h-48 md:h-80' },
  { src: g16, label: 'VR', span: 'h-48 md:col-span-2 md:h-80' },
  { src: g17, label: 'VR', span: 'h-48 md:h-80' },
  { src: g18, label: 'VR', span: 'h-48 md:h-80' },
  { src: g19, label: 'VR', span: 'h-48 md:h-[660px] md:row-span-2' },
  { src: g20, label: 'VR', span: 'h-48 md:col-span-2 md:h-80' },
  { src: g21, label: 'VR', span: 'h-48 md:h-80' },
  { src: g22, label: 'VR', span: 'h-48 md:h-80' },
  { src: g23, label: 'VR', span: 'h-48 md:h-80' },
  { src: g24, label: 'VR', span: 'h-48 md:h-80' },
  { src: g25, label: 'VR', span: 'h-48 md:h-80' },
  { src: g26, label: 'VR', span: 'h-48 md:h-80' },
];

function Gallery() {
  return (
    <div id='gallery'>
      <div className="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {images.map((image, index) => (
              <div key={index} className={`group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${image.span}`}>
                <img src={image.src} alt={`Gallery image ${index + 1}`} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{image.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
