import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import PageWrapper from "./PageWrapper";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeSkills from "./ResumeSkills";
import ResumeProjects from "./ResumeProjects";
import ResumeHeader from "./ResumeHeader";
import ResumeSummary from "./ResumeSummary";

type ResumeProps = {
    resume: ResumeType
}

export default function Resume({ resume }: ResumeProps) {
    const {
        name,
        jobtitle,
        contact,
        summary,
        education,
        projects,
        skills,
        employment
    } = resume.resume
    return(
        <PageWrapper>
            <ResumeHeader name={name} jobtitle={jobtitle} contacts={contact}/>
            <div className="flex">
            <LeftPanel>
                <ResumeSummary summary={summary}></ResumeSummary>
                <ResumeEducation education={education}></ResumeEducation>
                <ResumeProjects projects={projects}></ResumeProjects>
            </LeftPanel>
            <RightPanel>
                <ResumeSkills skills={skills}></ResumeSkills>
                <ResumeExperience experiences={employment}></ResumeExperience>
            </RightPanel>
            </div>
        </PageWrapper>
    );
}