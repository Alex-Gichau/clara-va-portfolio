import { FiActivity, FiBook, FiGlobe } from "react-icons/fi"

const projects = [{
    id: 1,
    title: 'Portfolio',
    icon: <FiBook />,
    desc: 'My Virtual Assistant'
}, {
    id: 2,
    title: 'E-commerce',
    icon: <FiActivity />,
    desc: 'Online Store Management'
}, {
    id: 2,
    title: 'Online Store',
    icon: <FiGlobe />,
    desc: 'Online Store Management'

}]

export default function Projects() {

    return (
        <section className="text-center bg-gray-50 py-10">
            <h2 className="text-4xl font-bold text-gray-950 mb-2">Projects</h2>
            <p className="text-gray-600">Here are some of the projects I have worked on.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 mx-auto max-w-7xl">
                {projects.map((project) => (
                    <div key={project.id} className="border p-6 rounded-lg hover:shadow-lg transition text-left">
                        <div className="flex flex-row justify-between items-center"><h3 className="bold text-2xl">{project.title}</h3>
                        <p className="text-6xl">{project.icon}</p>
                        </div>
                        <p>{project.desc}</p>
                    </div>
                ))}
            </div>
            </section>
    );
}