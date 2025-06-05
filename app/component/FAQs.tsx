import React from 'react';
// Assuming FAQsData from faqsData.ts is an array of FAQ items,
// and FAQItemType represents the type of a single FAQ item.
// You might need to export this type from '../data/faqsData.ts'
// or define it here if it's simple. For consistency with Testimonials.tsx:
import { FAQsData } from '../data/faqsData'; // If FAQsData is the type for a single item
// If FAQsData is the array itself, and its type is, e.g., FAQ[], then import FAQ.

interface FAQsProps { // Renamed for clarity and convention
    faq : FAQsData[]; // Use the imported/defined type for a single FAQ item
}

const FAQs: React.FC<FAQsProps> = ({ faq }) => { // Component now accepts props
  return (
    <section className="text-center bg-gray-50 py-10">
      <h2 className="text-4xl font-bold text-gray-950 mb-2">FAQs</h2>
      <p className="text-gray-600">Frequently Asked Questions</p>
      <div className="max-w-3xl mx-auto p-8">
        {faq.map((faqItem, index) => ( // Use the 'faq' prop passed to the component
          <div key={index} className="border-b py-4">
            <h3 className="text-xl font-semibold">{faqItem.question}</h3>
            <p className="text-gray-700 mt-2">{faqItem.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;