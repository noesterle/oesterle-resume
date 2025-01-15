

export default function ResumeHeader() {
    return(
        <div className="py-2">
            {/* <div>Header</div> */}
            <div className="flex">
                <div className="inline-block flex-1 uppercase text-4xl">Nathan Oesterle</div>
                <div className="inline-block flex-1 align-text-bottom text-right uppercase justify-end text-2xl">
                    <p className="align-text-bottom text-right justify-end text-2xl">
                        Software Engineer
                    </p>
                </div>
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