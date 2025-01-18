import { Project } from "@/data/types";

type ProjectsProp = {
    projects: Project[]
}

export default function ResumeProjects({projects}: ProjectsProp) {
    return(
        <div className="py-2">
            <span className="text-2xl uppercase header">Projects</span>
            <hr/>
            <div>
                {
                    projects.map((project: Project, index: number)=>(
                        <div key={index}>
                            <span className="title">{project.title}</span>
                            <div>
                                <ul key={index} className="list-inside list-disc text-sm text-center sm:text-left desc">
                                    {project.desc.map((line: string, indexDesc: number)=>(
                                        <li key={indexDesc}>{line}</li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}