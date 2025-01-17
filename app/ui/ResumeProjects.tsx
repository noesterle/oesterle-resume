import { Project } from "@/data/types";

type ProjectsProp = {
    projects: Project[]
}

export default function ResumeProjects({projects}: ProjectsProp) {
    return(
        <div className="py-2">
            <span className="text-2xl uppercase">Projects</span>
            <hr/>
            <div>
                {
                    projects.map((project: Project, index: number)=>(
                        <div key={index}>
                            <span className="text-xl">{project.title}</span>
                            <div>
                                <ul className="list-inside list-disc text-sm text-center sm:text-left">
                                    {project.desc.map((line: string, index: number)=>(
                                        <li>{line}</li>
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