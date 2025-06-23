import { TestimonialsData as TestimonialItemType } from "../data/testimonialsData";
import Image from 'next/image';
interface TestimonialsProps {
  testimonials: TestimonialItemType[];
}

// Component name should be PascalCase and match the intended import name.npmr 
const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  // It's good practice to handle the case where testimonials might be undefined or empty
  // before trying to use its properties like .length or spread it.
  const safeTestimonials = testimonials || [];
  const duplicatedTestimonials = [...safeTestimonials, ...safeTestimonials, ...safeTestimonials];

  //Guard against empty testimonials array
  if (safeTestimonials.length === 0) {
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
      {/* Testimonials Card Items */}
      <div className='flex w-[200%] animate-marqueeTop p-3 overflow-hidden'>

        {duplicatedTestimonials.map((testimonialItem, index) => (
          <div key={`bottom-${index}`} className='flex-shrink-0 border p-6 rounded-lg hover:shadow-lg transition text-left w-64 h-40 mr-4'>

            <div className='flex flex-row justify-left items-center overflow-none gap-2'>
              <Image
                key={testimonialItem.id} 
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
        ))}
      </div>
    </div>
  );
};

// Export the component itself, not its props interface.
export default Testimonials;
