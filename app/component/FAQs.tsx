import { Faqs } from "../data/faqsData"; // Must be the same as interface in faqsData.ts

interface FAQsProps { // Renamed for clarity and convention
    faqs : Faqs[]; // Use the imported/defined type for a single FAQ item
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => { // Component now accepts props
  return (
    <section className="text-center bg-gray-50 py-10">
      <h2 className="text-4xl font-bold text-gray-950 mb-2">FAQs</h2>
      <p className="text-gray-600">Frequently Asked Questions</p>
      <div className="max-w-3xl mx-auto p-8">
        {faqs.map((faqItem, index) => ( // Use the 'faq' prop passed to the component
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