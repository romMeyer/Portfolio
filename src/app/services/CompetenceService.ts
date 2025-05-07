import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  private jsonUrl = './assets/competences.json'; // Chemin vers votre fichier JSON

  constructor(private http: HttpClient) { }

  getCompetences(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}