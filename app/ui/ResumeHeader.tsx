

export default function ResumeHeader() {
    return(
        <div>
            {/* <div>Header</div> */}
            <div className="flex">
                <div className="inline-block flex-1">Nathan Oesterle</div>
                <div className="inline-block flex-1 text-right">Software Engineer</div>
            </div>
            <hr/>
            <div className="flex">
                <div className="inline-block pr-5">Email</div>
                <div className="inline-block px-5">LinkedIn</div>
                <div className="inline-block px-5">Github</div>
            </div>
        </div>
    );
}