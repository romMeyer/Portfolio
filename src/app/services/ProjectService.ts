import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private jsonUrl = './assets/projects.json'; // Chemin vers votre fichier JSON

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}