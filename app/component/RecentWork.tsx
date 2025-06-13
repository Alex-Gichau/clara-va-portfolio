import Image from "next/image";

const recentWork = [
  {
    id: 1,
    title: 'Portfolio',
    image : 'https://placehold.co/600x300',
    desc: 'My Virtual Assistant',
  },
  {
    id: 2,
    title: 'E-commerce',
    image : 'https://placehold.co/600x300',
    desc: 'Online Store Management',
  },
  {
    id: 3,
    title: 'Online Store',
    image : 'https://placehold.co/600x300',
    desc: 'Online Store Management',
  },
];

export default function RecentWork() {
  return (
    <div className='w-full overflow-hidden text-center'>
      <h2 className='text-4xl font-bold text-gray-950 mb-2 mt-8'>Recent Work</h2>
      <p className='text-gray-600 mb-6'>
        Here are some of the recent projects I have worked on.
      </p>
      <div className='grid gap-3 p-8 mx-auto max-w-5xl'>
        {recentWork.map((recentWork) => (
          <div key={recentWork.id} className=' grid grid-cols-2 border p-6 rounded-lg hover:shadow-lg transition'>
            <div>
                <p className='text-10xl'><Image src={recentWork.image} className="w-100 h-50 object-cover rounded-2xl" alt={recentWork.title} fill/></p>
            </div>
            <div className="text-left grid grid-rows-2 align-center">
            <h3 className='text-2xl font-semibold mb-0'>{recentWork.title}</h3>
            <p className='text-gray-600 h-10 mt-0 align-top'>{recentWork.desc}</p>
            <a href="" className="">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
