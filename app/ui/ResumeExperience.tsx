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
            <span className="text-2xl uppercase">Employment</span>
            <hr/>
            {
                experiences.map((experience: Experience, index: number)=>(
                    <div key={experience.company}>
                        <div className="inline-block flex-auto text-xl font-bold">{experience.company}</div>
                        <div>
                            {
                                experience.positions.map((position: Position, index: number)=>(
                                    <div key={index}>
                                        <div className="flex">
                                            <span className="inline-block italic">{position.title}</span>
                                            <span className="inline-block flex-auto">{experience.location}</span>
                                            <div className="inline-block">
                                                <span>{arrange(position.duration)}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <ul key={index} className="list-inside list-disc text-sm text-center sm:text-left">
                                                {
                                                    position.desc.map((desc: string, indexInner: number)=>(
                                                        <li>{desc}</li>
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