import { School } from "@/data/types";

type EducationProp = {
    education: School[]
}

export default function ResumeEducation({education}: EducationProp) {
    return(
        <div className="py-2">
        <span className="text-2xl uppercase">Education</span>
        <hr/>
        {
            education.map((school: School, index:number) => (
                <div key={index}>
                    <div className="flex">
                        <div className="inline-block flex-auto text-xl font-bold">{school.title}</div>
                        {/* <div className="inline-block">
                            <span>{school.start} - {school.end}</span>
                        </div> */}
                    </div>
                    <div>
                        <span>{school.degree}</span>
                    </div>
                    <div>
                        <span>{school.desc}</span>
                    </div>
                </div>
            ))
        }
        </div>
    );
}