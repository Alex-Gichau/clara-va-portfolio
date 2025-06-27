"use client";
import React, { useState, useEffect } from 'react';
import { TestimonialsData as TestimonialItemType } from "../data/testimonialsData";
import Image from 'next/image';
import Skeleton from './Skeleton';

interface TestimonialsProps {
  testimonials: TestimonialItemType[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Simulate a longer loading time for testimonials

    return () => clearTimeout(timer);
  }, []);

  const safeTestimonials = testimonials || [];
  const duplicatedTestimonials = [...safeTestimonials, ...safeTestimonials, ...safeTestimonials];

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
      <div className='flex w-[200%] animate-marqueeTop p-3 overflow-hidden'>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className='flex-shrink-0 border p-6 rounded-lg text-left w-64 h-40 mr-4'>
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
            <div key={`testimonial-${testimonialItem.id}-${index}`} className='flex-shrink-0 border p-6 rounded-lg hover:shadow-lg transition text-left w-64 h-40 mr-4'>
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
  );
};

export default Testimonials;