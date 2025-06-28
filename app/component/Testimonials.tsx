"use client";
import React, { useState, useEffect, useRef } from 'react';
import { TestimonialsData as TestimonialItemType } from "../data/testimonialsData";
import Image from 'next/image';
import Skeleton from './Skeleton';

interface TestimonialsProps {
  testimonials: TestimonialItemType[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Simulate a longer loading time for testimonials

    return () => clearTimeout(timer);
  }, []);

  const safeTestimonials = testimonials || [];
  // Duplicate testimonials for a seamless loop effect
  const duplicatedTestimonials = [
    ...safeTestimonials.slice(-2), // Add last few items to the beginning
    ...safeTestimonials,
    ...safeTestimonials.slice(0, 2), // Add first few items to the end
  ];

  useEffect(() => {
    if (isLoading || safeTestimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we are at the end of the actual testimonials (before the duplicated ones)
        if (prevIndex === safeTestimonials.length - 1) {
          // Jump to the start of the duplicated testimonials (index 2 in duplicatedTestimonials)
          // This creates the seamless loop effect
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            carouselRef.current.style.transform = `translateX(-${2 * 100}%)`;
            // Force reflow to apply the non-transition immediately
            void carouselRef.current.offsetWidth;
          }
          return 2; // Index of the first actual testimonial in the duplicated array
        }
        return prevIndex + 1;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isLoading, safeTestimonials.length]);

  useEffect(() => {
    if (carouselRef.current) {
      // Apply transition for normal movement
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  if (safeTestimonials.length === 0 && !isLoading) {
    return <div className="text-center p-4">No testimonials to display.</div>;
  }

  return (
    <div className='w-full overflow-hidden text-center'>
      <h2 className='text-4xl font-bold text-gray-950 mb-2 mt-8'>
        Testimonials
      </h2>
      <p className='text-gray-600 mb-6'>
        Feedback and strive that improve every project.
      </p>
      <div className='relative w-full overflow-hidden'>
        <div
          ref={carouselRef}
          className='flex'
          style={{
            width: `${duplicatedTestimonials.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / duplicatedTestimonials.length)}%)`,
          }}
        >
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='flex-shrink-0 border p-6 rounded-lg text-left w-full md:w-1/3 h-40 mr-4'>
                <div className='flex flex-row justify-left items-center overflow-none gap-2 mb-4'>
                  <Skeleton width="2em" height="2em" className="rounded-full mr-2" />
                  <Skeleton width="60%" height="1.5em" />
                </div>
                <Skeleton width="90%" height="1em" className="mb-2" />
                <Skeleton width="80%" height="1em" />
                <Skeleton width="70%" height="1em" />
              </div>
            ))
          ) : (
            duplicatedTestimonials.map((testimonialItem, index) => (
              <div
                key={`testimonial-${testimonialItem.id}-${index}`}
                className='flex-shrink-0 border p-6 rounded-lg hover:shadow-lg transition text-left w-full md:w-1/3 h-40 mr-4'
                style={{ width: `${100 / duplicatedTestimonials.length}%` }}
              >
                <div className='flex flex-row justify-left items-center overflow-none gap-2'>
                  <Image
                    src={testimonialItem.profileImage}
                    alt={testimonialItem.name}
                    width={48}
                    height={48}
                    className='rounded-full object-cover object-top w-8 h-8 border-2 border-blue-600'
                  />
                  <h3 className='bold text-xl justify-left'><b>{testimonialItem.name}</b></h3>
                </div>
                <p className="text-gray-600 font-light line-clamp-4 text-sm leading-4 my-2">{testimonialItem.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
