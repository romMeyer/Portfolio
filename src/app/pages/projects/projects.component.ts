import { Component } from '@angular/core';
import { ProjectDto } from '../../core/Dto/ProjectDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: ProjectDto[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.projects.push({id: 1, title: 'Projet A79', description: 'This is the description for card 1.', image: "assets/projets/projetA79.png"});
    this.projects.push({id: 2, title: 'Projet Cerema', description: 'This is the description for card 2.', image: "assets/projets/projetCerema.png"});
    this.projects.push({id: 3, title: '...', description: 'This is the description for card 3.', image: './assets/projets/card3.jpg'});
    
  }

  
  showProjectDetails(id: number){
    this.router.navigate(["projets/", id])

  }
}