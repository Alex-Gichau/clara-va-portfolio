import React from 'react';

interface CarouselProps {
  images: string[];
}

const CarouselProps: React.FC<CarouselProps> = ({ images }) => {
  const duplicatedImages = [...images, ...images, ...images]; // Duplicate images for seamless scrolling

  return (
    <div className='w-full overflow-hidden py-8'>
      {/* Top Row */}
      <div className='mb-8 flex w-[200%] animate-marqueeTop'>
        {duplicatedImages.map((img, index) => (
          <div key={`top-${index}`} className='mx-4 flex-shrink-0'>
            <img
              src={img}
              alt={`Gallery ${index % images.length}`}
              className='h-40 w-64 rounded-xl object-cover shadow-lg transition-all duration-300 hover:scale-105'
            />
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex w-[200%] animate-marqueeBottom">
        {duplicatedImages.map((img, index) => (
            <div key={`bottom-${index}`} className='mx-4 flex-shrink-0'>
              <img
                src={img}
                alt={`Gallery ${index % images.length}`}
                className='h-40 w-64 rounded-xl object-cover shadow-lg transition-all duration-300 hover:scale-105'
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselProps;
