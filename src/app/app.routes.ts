import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    {path: 'projets', component: ProjectsComponent},
    {path: 'projets/:id', component: ProjectDetailsComponent},
    {path: 'profil', component: HomeComponent},

    {path: "404", component: NotFoundComponent},


    {path: '', redirectTo: 'profil', pathMatch: 'full'},
    {path: '**', redirectTo: '404'},
];
