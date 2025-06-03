import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/CvService';
import { Profil, Experience, Formation, ProjetCV, Competence, Langues } from '../../core/Dto/HomeDto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private cvService: CvService){}

  profil!: Profil;
  experiences: Experience[] = [];
  formations: Formation[] = [];
  projets: ProjetCV[] = [];
  competences: Competence[] = [];
  langues: Langues[] = [];
  interets: string[] = [];

  ngOnInit(): void {
    this.cvService.getCv().subscribe(data => {
      this.profil = data.profil;
      this.experiences = data.experiences;
      this.formations = data.formations;
      this.projets = data.projetsCV;
      this.competences = data.competences;
      this.langues = data.langues;
      this.interets = data.interets;
    });
  }
 

  getCompetencesCategories(): string[] {
    return [...new Set(this.competences.map(comp => comp.categorie))];
  }

  getCompetencesByCategory(categorie: string): Competence[] {
    return this.competences.filter(comp => comp.categorie === categorie);
  }

  getNiveauText(niveau: number): string {
    if (niveau >= 85) return 'Expert';
    if (niveau >= 70) return 'Avancé';
    if (niveau >= 50) return 'Intermédiaire';
    return 'Débutant';
  }

}
