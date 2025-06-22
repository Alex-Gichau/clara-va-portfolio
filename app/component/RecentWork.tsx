import Image from "next/image";
import { FiEye } from "react-icons/fi";

const recentWork = [
  {
    id: 1,
    title: 'Portfolio',
    image: '/../../public/SNL.jpg',
    desc: 'My Virtual AssistantMy Virtual AssistantMy Virtual AssistantMy Virtual AssistantMy Virtual AssistantMy Virtual Assistant',
    project: 'https://google.com'
  },
  {
    id: 2,
    title: 'E-commerce',
    image: 'https://placehold.co/600x300',
    desc: 'Online Store ManagementOnline Store ManagementOnline Store ManagementOnline Store ManagementOnline Store Management',
    project: 'https://google.com'
  },
  {
    id: 3,
    title: 'Online Store',
    image: 'https://placehold.co/600x300',
    desc: 'Online Store ManagementOnline Store ManagementOnline Store ManagementOnline Store ManagementOnline Store Management',
    project: 'https://google.com'
  },
];

export default function RecentWork() {
  return (
    <div className='w-full overflow-hidden text-center'>
      <h2 className='text-4xl font-bold text-gray-950 mb-2 mt-8'>Recent Work</h2>
      <p className='text-gray-600 mb-6'>
        Here are some of the recent projects I have worked on.
      </p>
      <div className='grid grid-cols-2 gap-3 p-8 mx-auto max-w-5xl'>
        {recentWork.map((recentWork) => (
          // Left side with the image
          <div key={recentWork.id} className='grid grid-cols-2 p-3 rounded-lg hover:shadow-lg transition '>
            <div className="border rounded-xl ">
              <a href="#" className="hover:cursor-pointer bg-black hover:bg-gray-700 text-white w-fit z-5 h-auto rounded-full flex items-center justify-right p-2 m-2 transition-duration-200"><FiEye/></a>
              <Image src={recentWork.image} className="h-10 object-cover rounded-2xl bg-pink-200" alt={recentWork.title} fill />
            </div>

            {/* Right side with the text */}
            <div className="text-left grid grid-rows-2 align-center items-center pl-2">
              <h3 className='text-2xl font-semibold border h-fit'>{recentWork.title}</h3>
              <p className='text-gray-600 line-clamp-3 border '>{recentWork.desc}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
