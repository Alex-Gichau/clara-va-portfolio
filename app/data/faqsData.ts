export interface Faqs {
  id: number;
  question: string;
  answer: string;
}  

// This interface defines the structure of a FAQ item, which includes an id, question, and answer.
export const faQsData: Faqs[] = [
  {
    id: 1,
    question: "What inspires you most about working in customer service and HR?",
    answer: "I’m driven by the impact a single conversation can have—whether it's solving a problem for a frustrated customer or helping a candidate take the next step in their career. I love being the calm in the storm and the bridge between people and solutions.",
  },
  {
    id: 2,
    question: "How did you grow from having zero experience in customer service to becoming a top agent at CCI Kenya?",
    answer: "Curiosity, commitment, and a growth mindset. I embraced every challenge as a learning opportunity, absorbed feedback like a sponge, and stayed disciplined in building both technical and emotional intelligence.",
  },
  {
    id: 3,
    question: "How do you combine data analytics with people skills?",
    answer: "I see data as a story waiting to be told. I use analytics to uncover insights and pair that with emotional intelligence to drive decisions that actually make a difference—for teams, customers, and the brand.",
  },
  {
    id: 4,
    question: "What’s your secret to managing multiple roles so effectively?",
    answer: "Strong time management, a clear sense of priorities, and genuine love for the work. Whether I’m analyzing data, scheduling social posts, or supporting HR tasks, I treat each role with focus and purpose.",
  },
  {
    id: 5,
    question: "What does success look like for you in any role?",
    answer: "It’s a mix of growth, impact, and trust. If I’ve learned something new, made a positive contribution, and earned the confidence of my team or clients—I consider that a win.",
  }
];