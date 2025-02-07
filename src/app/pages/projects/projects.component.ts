import { Component } from '@angular/core';
import { ProjectDto } from '../../core/Dto/ProjectDto';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/ProjectService';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: ProjectDto[] = [];

  constructor(private router: Router, private projectsService: ProjectsService){}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data.projects;
    });
    
  }

  
  showProjectDetails(id: number){
    this.router.navigate(["projets/", id])

  }
}