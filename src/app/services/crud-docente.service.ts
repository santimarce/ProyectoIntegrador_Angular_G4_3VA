import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Teacher } from '../models/teachermodel';

@Injectable({
  providedIn: 'root'
})
export class CrudDocenteService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getDocentes(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.apiUrl}/docentes`);
  }

  getDocente(id: string): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/docentes/${id}`);
  }

  crearDocente(docente: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/docentes`, docente, { responseType: 'text' as 'json' });
  }

  actualizarDocente(id: string, docente: any) {
    return this.http.put<string>(`${this.apiUrl}/docentes/${id}`, docente);
  }

  eliminarDocente(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/docentes/${id}`);
  }
}
