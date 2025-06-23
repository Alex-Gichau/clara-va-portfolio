import React from 'react';
import { CarouselTData, CarouselBData } from '../data/carouselData';
import Image from 'next/image';

interface CarouselProps {
  imagesTop: CarouselTData[];
  imagesBottom: CarouselBData[];
}

const CarouselProps: React.FC<CarouselProps> = ({ imagesTop, imagesBottom }) => {
  const duplicatedTImages = [...imagesTop, ...imagesTop, ...imagesTop]; // Duplicate images for seamless scrolling
  const duplicatedBImages = [...imagesBottom, ...imagesBottom, ...imagesBottom]; // Duplicate images for seamless scrolling

  return (
    <div className='w-full overflow-hidden -mt-16'>
      {/* Top Row */}
      <div className='flex w-[200%] animate-marqueeTop p-3'>
        {duplicatedTImages.map((imagesTop, index) => (
          <div key={`top-${index}`} className='flex-shrink-0 mr-4 group'>
            <Image key={imagesTop.id}
              src={imagesTop.imageT}
              alt={imagesTop.caption}
              width={100}
              height={40} // Adjust the height as needed
              className='rounded-xl w-80 object-cover h-40 shadow-lg transition-all duration-300'/>
            {/* <div>
              <span className='text-white font-medium'>{images.caption}</span>
            </div> */}
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className='flex w-[200%] animate-marqueeBottom p-3'>
        {duplicatedBImages.map((imagesBottom, index) => (
          <div key={`bottom-${index}`} className='flex-shrink-0 mr-4 group'>
            <Image key={imagesBottom.id}
              src={imagesBottom.imageB}
              alt={imagesBottom.caption}
              width={100}
              height={40} // Adjust the height as needed
              className='rounded-xl w-80 object-cover h-40 shadow-lg transition-all duration-300'/>

            {/* <div className='inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity -0 transition-opacity duration-300 group-hover:opacity-100'> */}
            {/* <div>
              <span className='text-white font-medium z-1 mb-0'>{images.caption}</span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselProps;
