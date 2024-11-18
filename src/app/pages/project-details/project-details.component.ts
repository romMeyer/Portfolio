import { Component } from '@angular/core';
import { ProjectDetailDto } from '../../core/Dto/ProjectDto';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  project!: ProjectDetailDto;
  projectId: number = 0;
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {  
    this.route.params.subscribe(params => {
      this.projectId = +params["id"];       
    });
    console.log("this.projectId " , this.projectId)
    if (this.projectId == 2){
      console.log("HAAAAAAZEAZE")
    }
    switch(this.projectId){
      case 1: {
        this.project = {id: 1, 
          title: 'Projet A79', 
          description: 'This is the description for card 1.', 
          image: "assets/projets/projetA79.png", 
          roleItems: ["Entrainement de l'IA", "Paramètrage des controlleurs", "Retours de performances sur autoroutes"],
          technologies: ["YOLO", "Linux", "SSH"],
          results: []

        };
        break;
      }
      case 2: {
        this.project = {id: 2, 
          title: 'Projet Cerema', 
          description: 'En tant que prestataire, j’ai participé à un projet de tierce maintenance applicative (TMA) pour le CEREMA. L’objectif principal était de garantir la disponibilité, la performance et l’évolutivité des applications utilisées par cet organisme public stratégique.', 
          image: "assets/projets/projetCerema.png",
          roleItems: ["Analyse et résolution des anomalies signalées par les utilisateurs.", "Développement de nouvelles fonctionnalités selon les besoins du CEREMA.", "Amélioration continue des performances et de la sécurité des applications." , "Rédaction de documentations techniques pour faciliter la transmission des connaissances."],
          technologies: ["Java", "SpringBoot", "Angular", "Postgres", "Docker", "Git"],
          results: []
        };
        console.log("HAHAA")
        break;
      }
      
      default:{
        this.project = {id: 3, title: '...', 
          description: 'This is the description for card 3.', 
          image: './assets/projets/card3.jpg', 
          roleItems: [],
          technologies: ["...", "..."],
          results: ["..."]
        };
        break;
      }
    }

  }
}
