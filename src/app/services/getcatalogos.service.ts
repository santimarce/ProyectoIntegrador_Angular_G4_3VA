import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCatalogosService {

  private apiUrldias = 'http://localhost:3000/catalogo/dias';
  private apiUrlparalelo = 'http://localhost:3000/catalogo/paralelo';
  private apiUrlnivel = 'http://localhost:3000/catalogo/nivel';
  private apiUrljornada = 'http://localhost:3000/catalogo/jornada';
  private apiUrlcarrera = 'http://localhost:3000/catalogo/carrera';
  private apiUrlrol = 'http://localhost:3000/catalogo/rol';
  private apiUrlestado = 'http://localhost:3000/catalogo/estado';
  private apiUrlrama = 'http://localhost:3000/catalogo/rama';
  private apiUrlfacultad = 'http://localhost:3000/catalogo/facultad';
  private apiUrlasignatura = 'http://localhost:3000/asignaturas';

  constructor(private http: HttpClient) { }

  getDias(): Observable<any> {
    return this.http.get<any>(this.apiUrldias);
  }
  getParalelo(): Observable<any> {
    return this.http.get<any>(this.apiUrlparalelo);
  }
  getNivel(): Observable<any> {
    return this.http.get<any>(this.apiUrlnivel);
  }
  getJornada(): Observable<any> {
    return this.http.get<any>(this.apiUrljornada);
  }
  getCarrera(): Observable<any> {
    return this.http.get<any>(this.apiUrlcarrera);
  }
  getRol(): Observable<any> {
    return this.http.get<any>(this.apiUrlrol);
  }
  getRama(): Observable<any> {
    return this.http.get<any>(this.apiUrlrama);
  }
  getFacultad(): Observable<any> {
    return this.http.get<any>(this.apiUrlfacultad);
  }
  getEstado(): Observable<any> {
    return this.http.get<any>(this.apiUrlestado);
  }
  getAsignatura(): Observable<any> {
    return this.http.get<any>(this.apiUrlasignatura);
  }
}