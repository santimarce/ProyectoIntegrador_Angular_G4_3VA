import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Student } from '../models/studentmodel';

@Injectable({
  providedIn: 'root'
})
export class CrudAlumnoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/alumnos`);
  }

  getAlumno(id: string): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/alumnos/${id}`);
  }

  crearAlumno(alumno: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/alumnos`, alumno, { responseType: 'text' as 'json' });
  }

}
