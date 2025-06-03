export interface CompetenceDto{
    title: string;
    sousCompetence: SousCompetenceDto[];
    icon: string;
}

export interface SousCompetenceDto{
    title: string;
    description: string;
}