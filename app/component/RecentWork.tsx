"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiEye, FiPenTool, FiCalendar } from 'react-icons/fi';
import Skeleton from './Skeleton';
import Modal from './Modal'; // Import the new Modal component

interface WorkItem {
  id: number;
  title: string;
  image: string;
  desc: string;
  projectUrl: string;
  projectYear: string;
  work: string;
}

const recentWork: WorkItem[] = [
  {
    id: 1,
    title: 'Customer Service Rep.',
    image: '/SNL.jpg',
    desc: 'When I started at CCI Kenya, I had no prior experience in customer service—but through dedication and curiosity, I’ve grown into one of the top-performing agents. I handle a high volume of customer calls daily, listen empathetically, and offer timely, effective solutions. I make it a point to stay up to date on products and services and always work with integrity, calm, and professionalism—even under pressure.',
    projectUrl: 'https://google.com',
    projectYear: 'Feb 2023 – Present',
    work: 'CCI Kenya',
  },
  {
    id: 2,
    title: 'Social Media Manager',
    image: '/SNL.jpg',
    desc: 'At JIF Media, I collect and interpret data to uncover insights and guide better decision-making. I pull information from various sources, identify patterns, and offer solutions to enhance outcomes. In my social media role, I engage directly with followers, respond to feedback professionally, and contribute to building a positive brand image.',
    projectUrl: 'https://google.com',
    projectYear: 'May \'23 – Present',
    work: 'JIF Media',
  },
  {
    id: 3,
    title: 'Sales Agent',
    image: '/SNL.jpg',
    desc: 'I cultivated strong client relationships through thoughtful, consistent communication. I kept our Salesforce records updated and accurate, and I used persuasive communication to close high-value sales, all while presenting a professional image that reflected the company’s brand.',
    projectUrl: 'https://google.com',
    projectYear: 'Nov \'22 – Jan \'23',
    work: 'Shine Trendy',
  },
  {
    id: 4,
    title: 'HR Intern',
    image: '/SNL.jpg',
    desc: 'During my internship, I supported core HR processes—screening applications, maintaining organized records, and ensuring prompt data entry. I collaborated effectively with both colleagues and applicants, and I took pride in completing projects to a high standard within tight timeframes.',
    projectUrl: 'https://google.com',
    projectYear: 'Aug \'22 – Oct \'22',
    work: 'NHIF Thika',
  },
];

export default function RecentWork() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (work: WorkItem) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className='w-full overflow-hidden text-center'>
      <h2 className='text-4xl font-bold text-gray-950 mb-2 mt-8'>
        Work Experience
      </h2>
      <p className='text-gray-600 mb-4'>
        Here are some of the organizations I have worked with and the roles I have held.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-5 mx-auto max-w-5xl'>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className='grid grid-cols-1 md:grid-cols-2 p-3 rounded-lg transition border border-gray-200'
            >
              <div
                className='rounded-xl relative overflow-hidden'
                style={{ width: '100%', height: '120px' }}
              >
                <Skeleton width="100%" height="100%" className="rounded-xl" />
              </div>

              <div className='text-left grid grid-rows-2 align-center items-center p-2'>
                <div className="flex justify-between items-center mb-2">
                  <Skeleton width="70%" height="1.5em" />
                  <Skeleton width="2em" height="2em" className="rounded-full" />
                </div>
                <Skeleton width="90%" height="1em" className="mb-1" />
                <Skeleton width="80%" height="1em" />
              </div>
            </div>
          ))
        ) : (
          recentWork.map((work) => (
            <div
              key={work.id}
              className='grid grid-cols-1 md:grid-cols-2 p-3 rounded-lg transition border border-gray-200'
            >
              <div
                className='rounded-xl relative overflow-hidden'
                style={{ width: '100%', height: '120px' }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className='object-cover rounded-2xl'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>

              <div className='text-left grid grid-rows-2 align-center items-center p-2'>
                <h3 className='text-md font-semibold flex'>
                  {work.title}
                  <button
                    onClick={() => openModal(work)}
                    className='hover:cursor-pointer relative bg-black hover:bg-blue-600 text-white h-auto rounded-full flex p-1 transition duration-200 ml-auto text-sm'
                  >
                    <FiEye />
                  </button>
                </h3>
                <p className='text-gray-500 text-xs flex items-center justify-left gap-1.5'>
                  <FiCalendar />
                  {work.projectYear}
                  <FiPenTool />
                  {work.work}
                </p>
                <p className='text-gray-600 line-clamp-3 tracking-tight text-xs leading-4'>
                  {work.desc}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedWork && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">{selectedWork.title}</h2>
          <p className="text-gray-700 mb-4">{selectedWork.desc}</p>
          <p className="text-gray-500 text-sm">Year: {selectedWork.projectYear}</p>
          <p className="text-gray-500 text-sm">Company: {selectedWork.work}</p>
          {selectedWork.projectUrl && (
            <a
              href={selectedWork.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-4 block"
            >
              View Project
            </a>
          )}
        </Modal>
      )}
    </div>
  );
}