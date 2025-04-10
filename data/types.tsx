export interface ReactChildren {
    children: React.ReactNode
  }
  
  export type Resume = {
    resume: {
        name: Name;
        jobTitle: JobTitle;
        summary: Name;
        contact: Contact[];
        skills: Skill[];
        education: School[];
        employment: Experience[];
        projects: Project[];
    }
  }
  
  export type Name = string;
  export type JobTitle = string;
  export type Summary = string;
  
  export type Contact = {
    title: string;
    icon: string;
    link: string;
  }
  
  export type Link = {
    title: string;
    link: string;
  }
  
  export type Skill = {
    title: string;
    items: string[];
  }
  
  export type School = {
    title: string;
    degree: string;
    desc: string[];
  }
  
  export type Accomplishment = string;
  
  export type Experience = {
    company: string;
    location: string;
    positions: Position[];
  }
  
  export type Position = {
    title: string;
    duration: Duration[];
    desc: string[];
  }

  export type Duration = {
    start: string;
    end: string;
  }
  
  export type Project = {
    title: string;
    desc: string[];
  }