import React from 'react';
import Hero from './component/Hero';
import Projects from './component/Projects';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import { carouselData } from './data/carouselData';
import RecentWork from './component/RecentWork';
import Testimonials from './component/Testimonials';
import { testimonialsData } from './data/testimonialsData ';

export default function Home() {
  return (
    <div>
      <Navbar
        profileImage='https://7a35885a.delivery.rocketcdn.me/cdn/2020/06/UMI.v1.png'
        name='Clara Njeri'
      />
      <Hero />
      <div className='max-w mx-auto'>
        <Carousel images={carouselData} />
      </div>
      <Projects />
      <RecentWork />
      <Testimonials/>
    </div>
  );
}
