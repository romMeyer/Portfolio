import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private jsonUrl = './assets/cv.json'; 
  
  constructor(private http: HttpClient) { }

  getCv(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}