

export default function ResumeProjects() {
    return(
        <div>
            <span>Projects</span>
            <hr/>
            <div>
                <div>
                    <span>Selfhosting Personal Services</span>
                    <div>
                        <ul className="list-inside list-disc text-sm text-center sm:text-left">
                            <li>Determined what services would be best to host on internal network compared to a Virtual Private Server (VPS)</li>
                            <li>Found and evaluated VPS providers, balancing price, features, and location</li>
                            <li>Set up a domain and set DNS records to point to the VPS</li>
                            <li>Set up multiple desired containerized services behind a reverse proxy with TLS certificates, using Docker and Docker Compose</li>
                            <li>Set up Fail2Ban and only SSH Key starting as security measures</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span>Minecraft Hosting</span>
                    <div>
                        <ul className="list-inside list-disc text-sm text-center sm:text-left">
                            <li>Found and evaluated different hosting services</li>
                            <li>Evaluated different editions of the game engine available to run on the server</li>
                            <li>Evaluate the compatibility of Game Modifications (mods) with other mods and packs of mods</li>
                            <li>Wrote posts walking users through common problems based on common error messages</li>
                            <li>Forked a project to monitor different aspects of the server, including RAM usage, CPU usage, and the online player count</li>
                            <li>Determine when upgrades are necessary and possible based on system resource usage, reported user experience, and available funds</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span>RIT App Inventor</span>
                    <div>
                        <ul className="list-inside list-disc text-sm text-center sm:text-left">
                            <li>Worked on a team of 4 to build open source extensions for Android development on MIT App Inventor.</li>
                            <li>Built a Sound Pressure Level extension to measure the sound pressure in weighted decibels.</li>
                            <li>Building an extension to control a robot powered by Robot Operating System.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span>Donatorio</span>
                    <div>
                        <ul className="list-inside list-disc text-sm text-center sm:text-left">
                            <li>Worked on a team of 5 to create a user interface for a donation website using Python Flask.</li>
                            <li>Determined desired functionality and feature set of website and interviewed target users.</li>
                            <li>Created design requirements based on the results of the interviews.</li>
                            <li>Built a responsive website based on those requirements.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span>ERP</span>
                    <div>
                        <ul className="list-inside list-disc text-sm text-center sm:text-left">
                            <li>Worked with an entire class to create an Enterprise Resource Planner application using Python Flask.</li>
                            <li>Created API and a storage system for Human Resources, managing employment and salaries.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <span>Movie Plot Scrambler</span>
                    <div>
                        <ul className="list-inside list-disc text-sm text-center sm:text-left">
                            <li>A project that's in progress to pull a movie's information from OMDb's API and replace each word in the plot with a random synonym to obfuscate the meaning.</li>
                            <li>Written in TypeScript and HTML in Angular's framework which will be stylized with CSS with the purpose of exploring these technologies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}