import { Duration, Experience, Position } from "@/data/types";

type ExperienceProp = {
    experiences: Experience[]
}

function arrange(durations:Duration[]) {
    var joinedDurations = []
    for (let index = 0; index < durations.length; index++) {
        const duration = durations[index];
        joinedDurations.push(duration.start+"-"+duration.end)
    }
    const totalDuration = joinedDurations.join(', ')
    return totalDuration
}

export default function ResumeExperience({experiences}: ExperienceProp) {
    return(
        <div className="py-2">
            <span className="text-2xl uppercase resume-header">Employment</span>
            <hr/>
            {
                experiences.map((experience: Experience, index: number)=>(
                    <div key={experience.company}>
                        <div className="inline-block flex-auto text-xl font-bold resume-title">{experience.company}</div>
                        <div>
                            {
                                experience.positions.map((position: Position, index: number)=>(
                                    <div key={index}>
                                        <div className="flex">
                                            <span className="inline-block italic resume-desc pr-1">{position.title}</span>
                                            <span className="inline-block flex-auto resume-desc">{experience.location}</span>
                                            <span className="inline-block resume-desc">{arrange(position.duration)}</span>
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