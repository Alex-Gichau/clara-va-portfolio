import React from 'react';
import Hero from './component/Hero';
import Projects from './component/Projects';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import { carouselData } from './data/carouselData';
import RecentWork from './component/RecentWork';
import Testimonials from './component/Testimonials';
import { testimonialsData } from './data/testimonialsData';
import FAQs from './component/FAQs';
import { faQsData } from './data/faqsData';
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
      <Navbar
        profileImage='https://placehold.co/400'
        name='Clara Njeri'
      />
      <Hero />
      <div className='max-w mx-auto'>
        <Carousel images={carouselData} />
      </div>
      <Projects />
      <RecentWork />
      <Testimonials testimonials={testimonialsData} />
      <FAQs faqs={faQsData}/>
      <Footer/>
    </div>
  );
}
