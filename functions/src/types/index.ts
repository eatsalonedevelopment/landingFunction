
export type LinkType = {
    name: string;
    url: string;
    imageUrl?: string,
    type: string
}

// stackOverflow = 0,
//   github = 1,
//   linkedIn = 2,
//   upwork = 3

export type MyInfoDataType = {
    id: string,
    name: {
        first: string,
        middle: string,
        last: string,
    },
    aboutMeImageUrl: string,
    portfolioImageUrl: string,
    aboutMe: {
        p1: string,
        p2: string
        p3: string
    },
    cvUrl: string,
    socialLinks: LinkType[],
    experienceYear: string,
}

type Contributors = {
    name: string
    githubLink: LinkType
    portfolioWebsite: LinkType;
};

export enum ProjectStatus {
    completed = "completed",
    suspended = "suspended",
    inProgress = "inProgress",
}
// This is a small project build with react and firebase, design to showcase my skills and what I have accomplish over the years.
export type ProjectDataType = {
    id: string,
    imageUrl: string;
    name: string;
    description: string;
    technologies: Array<string>;
    projectStatus: ProjectStatus;
    owner: string;
    role: string;
    images: string[],
    projectLinks?: {
        githubLink: LinkType
        production: LinkType
    },
    contributors?: Array<Contributors>;
};


export type RolesType = {
    FullStack: "Full Stack",
    FrontendOnly: "Frontend Only",
    BackendOnly: "Backend Only",
    CrossPlatform: "Cross Platform",
}
export type CapabilityDataType = {
    id: string,
    image: string;
    type: CapabilityType;
    title: string;
    description: string;
    experienceLevel: number;
};

export enum CapabilityType {
    language = "Language",
    tool = "Tool",
    framework = "Framework",
    design = "Design",
    database = "Database",
}
export type CompaniesDetailsType = {
    id: string,
    logoUrl: string,
    description: string,
    role: string,
    name: string,
    currentlyWorking: boolean,
    websiteUrl: string,
    // techStandards: number// from 0 to 100, startups- unicorn 
    location: string,
    region: string,
}

// southAmerica
// africa
// europe
// asia
// australia
// northAmerica

export type WorkExperienceDataType = {
    southAmerica: {
        companies: CompaniesDetailsType[]
    },
    africa: {
        companies: CompaniesDetailsType[]
    },
    europe: {
        companies: CompaniesDetailsType[]
    },
    asia: {
        companies: CompaniesDetailsType[]
    },
    australia: {
        companies: CompaniesDetailsType[]
    },
    northAmerica: {
        companies: CompaniesDetailsType[]
    },
}


