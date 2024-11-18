import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectsComponent } from './projects/projects.component';
import { TitleComponent } from '../shared/title/title.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips'; 

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TitleComponent,    
    MatToolbarModule,
    MatListModule,
    MatChipsModule
  ]
})
export class PagesModule { }
