export interface ProjectDto{
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface ProjectDetailDto{
    id: number;
    title: string;
    description: string;
    image: string;
    roleItems: string[];
    technologies: string[];
    results: string[];
    information: ProjectInformation[];


}

export interface ProjectInformation{
    title: string;
    content?: string;
    content2?: string;
    image?: string;
    image2?: string;
    class?: string;
    size?: string;
}