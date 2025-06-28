"use client";
import React, { useState, useEffect, useRef } from 'react';
import { CarouselTData, CarouselBData } from '../data/carouselData';
import Image from 'next/image';

interface CarouselProps {
  imagesTop: CarouselTData[];
  imagesBottom: CarouselBData[];
}

const Carousel: React.FC<CarouselProps> = ({ imagesTop, imagesBottom }) => {
  const carouselTopRef = useRef<HTMLDivElement>(null);
  const carouselBottomRef = useRef<HTMLDivElement>(null);

  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetBottom, setOffsetBottom] = useState(0);

  // Duplicate images to create a seamless loop effect
  // We need enough duplicates to cover the visible area and allow for a smooth jump
  const duplicatedTImages = [...imagesTop, ...imagesTop, ...imagesTop];
  const duplicatedBImages = [...imagesBottom, ...imagesBottom, ...imagesBottom];

  useEffect(() => {
    const scrollSpeed = 0.5; // pixels per frame
    let animationFrameId: number;

    const animateScroll = () => {
      // For the top row (scrolling left)
      setOffsetTop((prevOffset) => {
        const newOffset = prevOffset - scrollSpeed;
        // If we scroll past the first set of original images, jump back to the start of the second set
        if (carouselTopRef.current && newOffset <= -carouselTopRef.current.scrollWidth / 3) {
          return 0; // Reset to the beginning of the second set
        }
        return newOffset;
      });

      // For the bottom row (scrolling right)
      setOffsetBottom((prevOffset) => {
        const newOffset = prevOffset + scrollSpeed;
        // If we scroll past the first set of original images, jump back to the start of the second set
        if (carouselBottomRef.current && newOffset >= carouselBottomRef.current.scrollWidth / 3) {
          return 0; // Reset to the beginning of the second set
        }
        return newOffset;
      });

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className='w-full overflow-hidden -mt-16'>
      {/* Top Row */}
      <div className='flex p-3' ref={carouselTopRef} style={{ transform: `translateX(${offsetTop}px)` }}>
        {duplicatedTImages.map((image, index) => (
          <div key={`top-${index}`} className='flex-shrink-0 mr-4 group'>
            <Image
              src={image.imageT}
              alt={image.caption}
              width={100}
              height={40}
              className='rounded-xl w-80 object-cover h-40 shadow-lg transition-all duration-300'
            />
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className='flex p-3' ref={carouselBottomRef} style={{ transform: `translateX(${offsetBottom}px)` }}>
        {duplicatedBImages.map((image, index) => (
          <div key={`bottom-${index}`} className='flex-shrink-0 mr-4 group'>
            <Image
              src={image.imageB}
              alt={image.caption}
              width={100}
              height={40}
              className='rounded-xl w-80 object-cover h-40 shadow-lg transition-all duration-300'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;