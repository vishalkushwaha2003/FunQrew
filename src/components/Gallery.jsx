import React from 'react'
import g1 from'../assets/galleryPhoto/g1.jpg'
import g2 from'../assets/galleryPhoto/g2.jpg'
import g3 from'../assets/galleryPhoto/g3.jpg'
import g4 from'../assets/galleryPhoto/g4.jpg'
import g5 from'../assets/galleryPhoto/g5.jpg'
import g6 from'../assets/galleryPhoto/g6.jpg'
import g7 from'../assets/galleryPhoto/g7.jpg'
import g8 from'../assets/galleryPhoto/g8.jpg'
import g9 from'../assets/galleryPhoto/g9.jpg'
import g10 from'../assets/galleryPhoto/g10.jpg'
import g11 from'../assets/galleryPhoto/g11.jpg'
import g12 from'../assets/galleryPhoto/g12.jpg'
import g13 from'../assets/galleryPhoto/g13.jpg'
import g14 from'../assets/galleryPhoto/g14.jpg'
import g15 from'../assets/galleryPhoto/g15.jpg'
import g16 from'../assets/galleryPhoto/g16.jpg'
import g17 from'../assets/galleryPhoto/g17.jpg'
import g18 from'../assets/galleryPhoto/g18.jpg'
import g19 from'../assets/galleryPhoto/g19.jpg'
import g20 from'../assets/galleryPhoto/g20.jpg'
import g21 from'../assets/galleryPhoto/g21.jpg'
import g22 from'../assets/galleryPhoto/g22.jpg'
import g23 from'../assets/galleryPhoto/g23.jpg'
import g24 from'../assets/galleryPhoto/g24.jpg'
import g25 from'../assets/galleryPhoto/g25.jpg'
import g26 from'../assets/galleryPhoto/g26.jpg'

function Gallery() {
  return (
   <div id='gallery'>
      <div className="bg-white dark:bg-gray-800 h-screen  py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

               
            </div>

            
        </div>

        <div className="grid grid-cols-2  gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            
             {/* g1 */}
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g1} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>


            {/* g2 */}
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={g2} loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </div>
            

            {/* g3 */}
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={g3} loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </div>
         




          {/* g4 */}
            <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:row-span-2 md:h-[656px]">
                <img src={g4} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </div>




            

         {/* g5 */}
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g5} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>

              {/* g6 */}
            <div
                className="group relative  flex h-48  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:row-span-2 md:h-[656px] animate__animated animate__fadeInLeft">
                <img src={g6} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>

             {/* g7 */}


          <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g7} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>




              {/* g8 */}
              <div
                className="group relative flex h-48  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[656px] md:row-span-2 animate__animated animate__fadeInLeft">
                <img src={g8} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>

             {/* g9 */}


          <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g9} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>

             {/* g10 */}


          <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g10} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>


             {/* g11 */}


          <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 animate__animated animate__fadeInLeft">
                <img src={g11} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>

            
             {/* g12 */}


          <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g12} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>

            {/* g13 */}


          <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[656px] md:row-span-2 animate__animated animate__fadeInLeft">
                <img src={g13} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>



           {/* g14 */}


           <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g14} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>



             {/* g15 */}


          <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g15} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>



        {/* g16 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 md:col-span-2 animate__animated animate__fadeInLeft">
                <img src={g16} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>



             {/* g17 */}


          <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g17} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>




        {/* g18 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 animate__animated animate__fadeInLeft">
                <img src={g18} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>





        {/* g19 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[656px] md:row-span-2 animate__animated animate__fadeInLeft">
                <img src={g19} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>


             {/* g20 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 md:col-span-2 animate__animated animate__fadeInLeft">
                <img src={g20} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>

             {/* g21 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  animate__animated animate__fadeInLeft">
                <img src={g21} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>



             {/* g22 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  animate__animated animate__fadeInLeft">
                <img src={g22} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>



             {/* g23 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  animate__animated animate__fadeInLeft">
                <img src={g23} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>




               {/* g24 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  animate__animated animate__fadeInLeft">
                <img src={g24} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>





              {/* g25 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  animate__animated animate__fadeInLeft">
                <img src={g25} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>






              {/* g26 */}


        <div
                className="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  animate__animated animate__fadeInLeft">
                <img src={g26} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </div>


           
        </div>
    </div>
</div>
   </div>
  )
}

export default Gallery
