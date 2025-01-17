import {Name, Contact, JobTitle} from "@/data/types"
import Link from "next/link";


type HeaderProps = {
    name: Name;
    jobtitle: JobTitle;
    contacts: Contact[];
}

export default function ResumeHeader({ name, jobtitle, contacts }: HeaderProps) {
    return(
        <div className="py-2">
            {/* <div>Header</div> */}
            <div className="flex">
                <div className="inline-block flex-1 uppercase text-4xl">{name}</div>
                <div className="inline-block flex-1 align-text-bottom text-right uppercase justify-end text-2xl">
                    <p className="align-text-bottom text-right justify-end text-2xl">
                        {jobtitle}
                    </p>
                </div>
            </div>
            <hr/>
            <div className="flex">
                {
                    contacts.map((contact: Contact, index: number) => (
                        <Link className="inline-block pr-10" href={contact.link} target="_blank">{contact.title}</Link>
                    ))
                }
            </div>
        </div>
    );
}