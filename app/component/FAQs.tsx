"use client";
import React, { useState, useEffect } from "react";
import { Faqs } from "../data/faqsData";
import Skeleton from './Skeleton';

interface FAQsProps {
    faqs: Faqs[];
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  const [openStates, setOpenStates] = useState<boolean[]>(Array(faqs.length).fill(false));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index: number) => {
    if (isLoading) return; // Prevent toggling while loading
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
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="border-b py-4 text-left">
              <div className="w-full flex justify-between items-center">
                <Skeleton width="80%" height="1.5em" />
                <Skeleton width="1.5em" height="1.5em" className="rounded-full" />
              </div>
              <Skeleton width="95%" height="1em" className="mt-2" />
            </div>
          ))
        ) : (
          faqs.map((faqItem, index) => (
            <div key={index} className="border-b py-4 text-left">
              <button
                className="w-full flex justify-between items-center text-xl text-gray-700 font-semibold focus:outline-none transition duration-200"
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
          ))
        )}
      </div>
    </section>
  );
};

export default FAQs;
