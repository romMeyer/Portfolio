export interface ProjectDto{
    id: number;
    title: String;
    description: String;
    image: String;
}

export interface ProjectDetailDto{
    id: number;
    title: String;
    description: String;
    image: String;
    roleItems: String[];
    technologies: String[];
    results: String[];

}