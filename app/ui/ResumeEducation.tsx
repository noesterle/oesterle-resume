import { School } from "@/data/types";

type EducationProp = {
    education: School[]
}

export default function ResumeEducation({education}: EducationProp) {
    return(
        <div className="py-2">
        <span className="text-2xl uppercase header">Education</span>
        <hr/>
        {
            education.map((school: School, index:number) => (
                <div key={index}>
                    <div className="flex">
                        <div className="inline-block flex-auto text-xl font-bold title">{school.title}</div>
                        {/* <div className="inline-block">
                            <span>{school.start} - {school.end}</span>
                        </div> */}
                    </div>
                    <div className="desc">
                        <span>{school.degree}</span>
                    </div>
                    <div className="desc">
                        <span>{school.desc}</span>
                    </div>
                </div>
            ))
        }
        </div>
    );
}