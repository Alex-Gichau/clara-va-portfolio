import React from 'react';
import { CarouselData } from '../data/carouselData';
import Image from 'next/image';

interface CarouselProps {
  images: CarouselData[];
}

const CarouselProps: React.FC<CarouselProps> = ({ images }) => {
  const duplicatedImages = [...images, ...images, ...images]; // Duplicate images for seamless scrolling

  return (
    <div className='w-full overflow-hidden'>
      {/* Top Row */}
      <div className='flex w-[200%] animate-marqueeTop p-3'>
        {duplicatedImages.map((images, index) => (
          <div key={`bottom-${index}`} className='flex-shrink-0'>
            <Image key={images.id}
              src={images.image}
              alt={images.caption}
              className='rounded-xl object-cover shadow-lg transition-all duration-300' fill/>
            <div>
              <span className='text-white font-medium'>{images.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className='flex w-[200%] animate-marqueeBottom p-3'>
        {duplicatedImages.map((images, index) => (
          <div key={`bottom-${index}`} className='flex-shrink-0'>
            <Image key={images.id} src={images.image} alt={images.caption} fill
              className='h-40 z-0 w-64 rounded-xl object-cover shadow-lg transition-all duration-300 hover:scale-105'
            />

            {/* <div className='inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity -0 transition-opacity duration-300 group-hover:opacity-100'> */}
            <div>
              <span className='text-white font-medium z-1 mb-0'>{images.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselProps;
