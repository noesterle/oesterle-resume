import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import PageWrapper from "./PageWrapper";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeSkills from "./ResumeSkills";
import ResumeProjects from "./ResumeProjects";
import ResumeHeader from "./ResumeHeader";
import ResumeSummary from "./ResumeSummary";


export default function Resume() {
    return(
        <PageWrapper>
            <ResumeHeader/>
            <LeftPanel>
                <ResumeSummary></ResumeSummary>
                <ResumeEducation></ResumeEducation>
                <ResumeProjects></ResumeProjects>
            </LeftPanel>
            <RightPanel>
                <ResumeSkills></ResumeSkills>
                <ResumeExperience></ResumeExperience>
            </RightPanel>
        </PageWrapper>
    );
}