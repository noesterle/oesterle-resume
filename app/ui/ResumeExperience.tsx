

export default function ResumeExperience() {
    return(
        <div className="py-2">
            <span>Employment</span>
            <hr/>
            <div className="flex">
                <div className="inline-block flex-auto">Avidia Bank</div>
                <div className="inline-block">
                    <span>Aug 2020 - Present</span>
                </div>
            </div>
            <div>
                <span>Application Developer</span>
                <span>Hudson, MA</span>
            </div>
            <div>
                <ul className="list-inside list-disc text-sm text-center sm:text-left">
                    <li>Designed, implemented, documented, and maintained Mulesoft microservices using Dataweave and Java to act as wrappers for API endpoints from external services to provide a more uniform experience when using 3rd party services</li>
                    <li>Wrote documentation and example code used to onboard new partners to our API and assisted partners with implementation issues</li>
                    <li>Designed, implemented, documented, and maintained a Mulesoft application to manage automated Billpay with virtual credit cards funded by deposit accounts</li>
                    <li>Implemented automated Gitlab CI/CD pipelines to automatically build, test, scan for security issues, and deploy into multiple environments</li>
                    <li>Replaced a third party tool that compared employee information with customer and account information to flag potential fraud with an internal Python Pandas script as licensing costs were increasing dramatically, leading to discovering the third party tool as comparing address phonetically instead of by string contents which increased the quality of generated reports</li>
                    <li>Designed, implemented, and documented Excel Macros to assist the risk department investigating and reporting fraudulent transactions as well as producing end of year reports, handling hours of work with the click of a button</li>
                    <li>Designed and deployed a central location for documentation that pulls documentation from numerous Gitlab repositories to view as one website or document, for both users and developers alike</li>
                    <li>Designed, implemented, documented, and maintained microservices to ingest textfiles in various flat-file formats to add data to Salesforce to help Customer Service team members assist customers</li>
                </ul>
            </div>
            <div className="flex">
                <div className="inline-block flex-auto">Entropix LLC</div>
                <div className="inline-block">
                    <span>May 2018 - Aug. 2019</span>
                </div>
            </div>
            <div>
                <span>Engineering Co-op</span>
                <span>Victor, NY</span>
            </div>
            <div>
                <ul className="list-inside list-disc text-sm text-center sm:text-left">
                    <li>Worked on various pieces of software to track and demodulate high frequency signals and display info to the user, including a Java plugin that communicated to a Python server.</li>
                    <li>Created and edited Java based user interfaces with JformDesigner.</li>
                    <li>Added master/slave functionality so separate instances of the server can work for each other.</li>
                    <li>Added ability to show how signals are tracked over time.</li>
                    <li>Ported antenna software written in C between CPU architectures for hardware upgrades.</li>
                </ul>
            </div>
            <div className="flex">
                <div className="inline-block flex-auto">General Dynamics Mission Systems</div>
                <div className="inline-block">
                    <span>June 2017 - Aug. 2017, June 2016 - Dec. 2016</span>
                </div>
            </div>
            <div>
                <span>Software Developer Co-op</span>
                <span>Pittsfield, MA</span>
            </div>
            <div>
                <ul className="list-inside list-disc text-sm text-center sm:text-left">
                    <li>Worked in a team of 6 creating a testbed and trainer for military bases, focusing on simulating security cameras, known as the Video Interface, over an HTTP connection.</li>
                    <li>Created a Software Test Plan in Rational DOORS for the Video Interface and Panel Emulator.</li>
                    <li>Integrated the security camera simulation with third party software to view the video stream.</li>
                    <li>Helped rewrite the log display and logging subsystem in the User Interface subsystem.</li>
                </ul>
            </div>
        </div>
    );
}