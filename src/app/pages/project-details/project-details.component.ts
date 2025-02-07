import { Component } from '@angular/core';
import { ProjectDetailDto } from '../../core/Dto/ProjectDto';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/ProjectService';



@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  project!: ProjectDetailDto;
  projectId: number = 0;
  
  constructor(private route: ActivatedRoute, private projectsService: ProjectsService){}

  ngOnInit(): void {  
    this.route.params.subscribe(params => {
      this.projectId = +params["id"];       
    });
    console.log("this.projectId " , this.projectId)

    this.projectsService.getProjects().subscribe(data => {
      this.project = data.projectDetails[this.projectId-1];
    });
    
  }
}
