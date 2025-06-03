export interface Profil {
  nom: string;
  prenom: string;
  titre: string;
  description: string;
  email: string;
  telephone: string;
  localisation: string;
  github: string;
  technologies?: string[];
}

export interface Experience {
  poste: string;
  entreprise: string;
  periode: string;
  description: string;
  technologies?: string[];
}

export interface Formation {
  diplome: string;
  etablissement: string;
  annee: string;
  mention?: string;
}

export interface Competence {
  nom: string;
  niveau: number;
  categorie: string;
}

export interface ProjetCV{
  nom: string;
  description: string;
  technologies?: string[];
  annee: string;
}

export interface Langues {
  nom: string;
  niveau: number;
}