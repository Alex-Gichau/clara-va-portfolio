export interface Faq {
  id: number;
  question: string;
  answer: string;
}  

export const FAQsData: Faq[] = [
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