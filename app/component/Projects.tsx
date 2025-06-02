// import { useEffect, useState } from "react";

// interface Projects {
//     id: number;
//     title: string;
//     desc: string
// }

const projects = [{
    id: 1,
    title: 'Portfolio',
    desc: 'My Virtual Assistant'
}, {
    id: 2,
    title: 'E-commerce',
    desc: 'Online Store Management'

}]

export default function Projects() {
    // const [projects, setProjects] = useState<Projects[]>([]);

    // useEffect(() => {
    //     // Fetch projects data from the API endpoint
    //     fetch('/api/projects')
    //         .then((res) => res.json())
    //         .then(setProjects);
        
    // }, []);

    return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {projects.map((project) => (
                    <div key={project.id} className="border p-6 rounded-lg hover:shadow-lg transition">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                    </div>
                ))}
            </div>
    );
}