import React from 'react';
import Hero from './component/Hero';
import Projects from './component/Projects';
import Navbar from './component/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar profileImage='https://7a35885a.delivery.rocketcdn.me/cdn/2020/06/UMI.v1.png' name='Clara Njeri'/>
        <Hero />
        <Projects />
        </div>
      );
}
