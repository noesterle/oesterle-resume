import {Name, Contact, JobTitle} from "@/data/types"
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type HeaderProps = {
    name: Name;
    jobTitle: JobTitle;
    contacts: Contact[];
}

function getIcon(type: string, index: number) {
    let obj = <></>
    switch (type) {
        case 'MdEmail':
            obj = <MdEmail className="inline-block pr-2 fill-black size-6" key={'icon'+index} />
            break;
        case 'FaGithub':
            obj = <FaGithub className="inline-block pr-2 fill-black size-6" key={'icon'+index} />
            break;
        case 'FaLinkedin':
            obj = <FaLinkedin className="inline-block pr-2 fill-black size-6" key={'icon'+index} />
            break;
        default:
            break;
    }
    return obj
}

export default function ResumeHeader({ name, jobTitle, contacts }: HeaderProps) {
    return(
        <div className="py-2">
            {/* <div>Header</div> */}
            <div className="flex" key="name">
                <div className="inline-block flex-1 uppercase text-4xl">{name}</div>
                <div className="inline-block flex-1 uppercase justify-end text-2xl relative">
                    <p className="text-2xl absolute bottom-0 right-0">
                        {jobTitle}
                    </p>
                </div>
            </div>
            <hr/>
            <div className="flex text-foreground" key="contact">
                {
                    contacts.map((contact: Contact, index: number) => (
                        <div key={index}>
                        {getIcon(contact.icon, index)}
                        <Link key={"link"+index} className="inline-block pr-10" href={contact.link} target="_blank">{contact.title}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}