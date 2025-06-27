"use client";
import React, { useState, useEffect } from 'react';
import { FiActivity, FiBook, FiGlobe } from "react-icons/fi";
import Skeleton from './Skeleton';

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    icon: <FiBook />,
    desc: 'My Virtual Assistant'
  },
  {
    id: 2,
    title: 'E-commerce',
    icon: <FiActivity />,
    desc: 'Online Store Management'
  },
  {
    id: 3,
    title: 'Online Store',
    icon: <FiGlobe />,
    desc: 'Online Store Management'
  }
];

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="text-center bg-gray-50 py-10">
      <h2 className="text-4xl font-bold text-gray-950 mb-2">Projects</h2>
      <p className="text-gray-600">Here are some of the projects I have worked on.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 mx-auto max-w-7xl">
        {isLoading ? (
          // Skeleton loading state
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="border p-6 rounded-lg text-left">
              <div className="flex flex-row justify-between items-center mb-4">
                <Skeleton width="60%" height="2em" />
                <Skeleton width="3em" height="3em" className="rounded-full" />
              </div>
              <Skeleton width="90%" height="1em" className="mb-2" />
              <Skeleton width="70%" height="1em" />
            </div>
          ))
        ) : (
          // Actual content
          projects.map((project) => (
            <div key={project.id} className="border p-6 rounded-lg hover:shadow-lg transition text-left">
              <div className="flex flex-row justify-between items-center">
                <h3 className="bold text-2xl">{project.title}</h3>
                <p className="text-6xl">{project.icon}</p>
              </div>
              <p>{project.desc}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
