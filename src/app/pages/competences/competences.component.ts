import { Component } from '@angular/core';
import { CompetenceDto } from '../../core/Dto/CompetenceDto';
import { CompetencesService } from '../../services/CompetenceService';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {
  competences: CompetenceDto[] = [];

  constructor(private competencesService: CompetencesService){}

  ngOnInit(): void {
    this.competencesService.getCompetences().subscribe(data => {
      this.competences = data;
    });
    
  }

}