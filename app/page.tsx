import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import { testimonialsData } from './data/testimonialsData';
import { faQsData } from './data/faqsData';
import { footerData } from './data/footerData';

const Projects = dynamic(() => import('./component/Projects'));
const Carousel = dynamic(() => import('./component/Carousel'));
const RecentWork = dynamic(() => import('./component/RecentWork'));
const Testimonials = dynamic(() => import('./component/Testimonials'));
const FAQs = dynamic(() => import('./component/FAQs'));
const Footer = dynamic(() => import("./component/Footer"));

export default function Home() {
  return (
    <div>
      <Navbar name='Clara Njeri'/>
      <div className="flex flex-col min-h-screen justify-center">
        <Hero className="flex-grow"/>
        <div className='max-w mx-auto flex-grow'>
          <Carousel />
        </div>
      </div>
      <Projects />
      <RecentWork />
      <Testimonials testimonials={testimonialsData} />
      <FAQs faqs={faQsData}/>
      <Footer contacts={footerData} />
    </div>
  );
}
