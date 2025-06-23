import Image from 'next/image';
import { FiEye, FiClock, FiCalendar } from 'react-icons/fi';

const recentWork = [
  {
    id: 1,
    title: 'Portfolio',
    image: '/../../public/SNL.jpg',
    desc: 'My Virtual AssistantMy Virtual AssistantMy Virtual AssistantMy Virtual AssistantMy Virtual AssistantMy Virtual Assistant',
    projectUrl: 'https://google.com',
    projectYear: '2022 - 2025',
    work: 'Contract',
  },
  {
    id: 2,
    title: 'E-commerce',
    image: '/../../public/SNL.jpg',
    desc: 'Online Store ManagementOnline Store ManagementOnline Store ManagementOnline Store ManagementOnline Store Management',
    projectUrl: 'https://google.com',
    projectYear: '2022 - 2025',
    work: 'Contract',
  },
  {
    id: 3,
    title: 'Online Store',
    image: '/../../public/SNL.jpg',
    desc: 'Online Store ManagementOnline Store ManagementOnline Store ManagementOnline Store ManagementOnline Store Management',
    projectUrl: 'https://google.com',
    projectYear: '2022 - 2025',
    work: 'Contract',
  },
  {
    id: 4,
    title: 'Online Store',
    image: '/../../public/SNL.jpg',
    desc: 'Online Store ManagementOnline Store ManagementOnline Store ManagementOnline Store ManagementOnline Store Management',
    projectUrl: 'https://google.com',
    projectYear: '2022 - 2025',
    work: 'Contract',
  },
];

export default function RecentWork() {
  return (
    <div className='w-full overflow-hidden text-center'>
      <h2 className='text-4xl font-bold text-gray-950 mb-2 mt-8'>
        Recent Work
      </h2>
      <p className='text-gray-600 mb-6'>
        Here are some of the recent projects I have worked on.
      </p>
      <div className='grid grid-cols-2 gap-3 p-5 mx-auto max-w-5xl'>
        {recentWork.map((recentWork) => (
          // Left side with the image
          <div
            key={recentWork.id}
            className='grid grid-cols-2 p-3 rounded-lg transition border border-gray-200'
          >
            <div
              className='border rounded-xl relative overflow-hidden'
              style={{ width: '100%', height: '120px' }}
            >
              <Image
                src={recentWork.image}
                alt={recentWork.title}
                fill
                className='object-cover rounded-2xl'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' 
                
              />
            </div>

            {/* Right side with the text */}
            <div className='text-left grid grid-rows-2 align-center items-center p-2'>
              <h3 className='text-2xl font-semibold h-fit flex'>
                {recentWork.title}
                <a
                  href='#'
                  className='hover:cursor-pointer relative bg-black hover:bg-blue-600 text-white h-auto rounded-full flex p-1 transition duration-200 ml-auto text-md'
                >
                  <FiEye />
                </a>
              </h3>
              <p className='text-gray-500 text-xs flex items-center justify-left gap-2'>
                <FiCalendar />
                {recentWork.projectYear}
                <FiClock />
                {recentWork.work}
              </p>
              <p className='text-gray-600 line-clamp-3 tracking-tight text-xs leading-4'>
                {recentWork.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
