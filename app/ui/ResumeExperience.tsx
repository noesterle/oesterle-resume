import { Duration, Experience, Position } from "@/data/types";

type ExperienceProp = {
    experiences: Experience[]
}

export default function ResumeExperience({experiences}: ExperienceProp) {
    return(
        <div className="py-2">
            <span className="text-2xl uppercase resume-header">Employment</span>
            <hr/>
            {
                experiences.map((experience: Experience)=>(
                    <div key={experience.company}>
                        <div className="inline-block flex-auto text-xl font-bold resume-title">{experience.company}</div>
                        <div>
                            {
                                experience.positions.map((position: Position, index: number)=>(
                                    <div key={index}>
                                        <div className="flex">
                                            <span className="inline-block italic resume-desc pr-1">{position.title}</span>
                                            <span className="inline-block flex-auto resume-desc">{experience.location}</span>
                                            <div className="flex flex-col">
                                            {
                                                position.duration.map((dur: Duration, index: number)=>(
                                                    <span key={index} className="inline-block resume-desc">{dur.start}-{dur.end}</span>
                                                ))
                                            }
                                            </div>
                                        </div>
                                        <div>
                                            <ul key={index} className="list-inside list-disc text-sm text-center sm:text-left">
                                                {
                                                    position.desc.map((desc: string, indexDesc: number)=>(
                                                        <li className="resume-desc" key={indexDesc}>{desc}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}