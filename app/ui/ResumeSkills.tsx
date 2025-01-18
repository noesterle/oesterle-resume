import { Skill } from "@/data/types";

type SkillProps = {
    skills: Skill[]
}

export default function ResumeSkills({skills}:SkillProps) {
    return(
        <div className="py-2">
            <span className="text-2xl uppercase header">Skills</span>
            <hr/>
            <div>
                {
                    skills.map((skill: Skill, index: number)=>(
                        <div key={index} className="desc">
                            <span  className="font-bold uppercase">{skill.title} </span><span>{skill.items.join(", ")}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}