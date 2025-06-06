export interface Faqs {
  id: number;
  question: string;
  answer: string;
}  

// This interface defines the structure of a FAQ item, which includes an id, question, and answer.
export const faQsData: Faqs[] = [
  {
    id: 1,
    question: "What is the purpose of this website?",
    answer: "This website serves as a portfolio to showcase my projects and skills.",
  },
  {
    id: 2,
    question: "How can I contact you?",
    answer: "You can contact me through the contact form on the website or via email",
  },
];