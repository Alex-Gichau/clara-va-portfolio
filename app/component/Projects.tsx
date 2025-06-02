import { useEffect, useState } from "react";

interface Project {
    id: number;
    title: string;
    desc: string
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Fetch projects data from the API endpoint
        fetch('/api/projects')
            .then((res) => res.json())
            .then(setProjects);
        
    }, []);

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