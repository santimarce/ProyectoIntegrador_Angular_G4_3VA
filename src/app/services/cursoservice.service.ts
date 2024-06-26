import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/cursosmodel';

@Injectable({
  providedIn: 'root'
})
export class CursoserviceService {
  private apiUrl = 'http://localhost:3000/course';

  constructor(private http: HttpClient) {}
  
  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}`);
  }

  getCurso(id: string): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
