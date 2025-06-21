"use client";
import { useState } from "react";
import { Faqs } from "../data/faqsData";

interface FAQsProps {
    faqs: Faqs[];
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  // Use an array of booleans to track open/closed state for each FAQ
  const [openStates, setOpenStates] = useState<boolean[]>(Array(faqs.length).fill(false));

  const toggleFAQ = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="text-center bg-gray-50 py-10">
      <h2 className="text-4xl font-bold text-gray-950 mb-2">FAQs</h2>
      <p className="text-gray-600">Frequently Asked Questions</p>
      <div className="max-w-3xl mx-auto p-8">
        {faqs.map((faqItem, index) => (
          <div key={index} className="border-b py-4 text-left">
            <button
              className="w-full flex justify-between items-center text-xl font-semibold focus:outline-none transition-all"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openStates[index]}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faqItem.question}</span>
              <span className="ml-2">{openStates[index] ? "−" : "+"}</span>
            </button>
            {openStates[index] && (
              <p
                id={`faq-answer-${index}`}
                className="text-gray-700 mt-2 transition-all"
              >
                {faqItem.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;