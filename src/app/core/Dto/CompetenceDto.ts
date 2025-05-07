export interface CompetenceDto{
    id: number;
    title: string;
    sousCompetence: SousCompetenceDto[];
}

export interface SousCompetenceDto{
    title: string;
    description: string;
}