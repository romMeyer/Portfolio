import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips'; 
import { SharedModule } from '../shared/shared.module';
import { CompetencesComponent } from './competences/competences.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    CompetencesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    SharedModule,
    MatButtonModule
  ]
})
export class PagesModule { }
