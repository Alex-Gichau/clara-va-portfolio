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
      if (!carouselTopRef.current || !carouselBottomRef.current) return;

      const singleSetWidthTop = carouselTopRef.current.scrollWidth / 3;
      const singleSetWidthBottom = carouselBottomRef.current.scrollWidth / 3;

      // Top Row (scrolling left)
      setOffsetTop((prevOffset) => {
        let newOffset = prevOffset - scrollSpeed;
        if (newOffset <= -singleSetWidthTop) {
          // Jump back without transition
          carouselTopRef.current!.style.transition = 'none';
          newOffset = 0; // Reset to the start of the second set
        } else {
          // Apply transition for smooth movement
          carouselTopRef.current!.style.transition = 'transform 0.05s linear';
        }
        return newOffset;
      });

      // Bottom Row (scrolling right)
      setOffsetBottom((prevOffset) => {
        let newOffset = prevOffset + scrollSpeed;
        if (newOffset >= singleSetWidthBottom) {
          // Jump back without transition
          carouselBottomRef.current!.style.transition = 'none';
          newOffset = 0; // Reset to the start of the second set
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
