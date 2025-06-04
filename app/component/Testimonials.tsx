import React from 'react';
import { TestimonialsData } from "../data/testimonialsData";

interface TestimonialsProps {
  testimonials: TestimonialsData[];
}

const TestimonialsData: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]; // Duplicate testimonials for seamless scrolling

  return (
    <div className='w-full overflow-hidden text-center'>
      <h2 className='text-4xl font-bold text-gray-950 mb-2 mt-8'>
        Testimonials
      </h2>
      <p className='text-gray-600 mb-6'>
        What our clients say about us
      </p>
      <div className='flex w-[200%] animate-marqueeTop p-3'>
        {duplicatedTestimonials.map((testimonials, index) => (
          <div key={`bottom-${index}`} className='flex-shrink-0 border p-6 rounded-lg hover:shadow-lg transition text-left w-64 h-40 mr-4'>
            <div key={testimonials.id} className='flex flex-row justify-between items-center'>
              <img
                src={testimonials.profileImage}
                alt={testimonials.name}
                className='w-10 h-10 rounded-full'
              />
              <h3 className='bold text-2xl'>{testimonials.name}</h3>
            </div>
            <p>{testimonials.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsProps;
