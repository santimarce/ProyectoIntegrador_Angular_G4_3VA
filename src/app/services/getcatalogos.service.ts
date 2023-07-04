import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCatalogosService {

  private apiUrldias = 'http://localhost:3000/dias';
  private apiUrlparalelo = 'http://localhost:3000/paralelo'; 
  private apiUrlnivel = 'http://localhost:3000/nivel'; 
  private apiUrljornada = 'http://localhost:3000/jornada'; 
  private apiUrlcarrera = 'http://localhost:3000/carrera'; 
  private apiUrlrol = 'http://localhost:3000/rol'; 
  private apiUrlestado = 'http://localhost:3000/estado'; 
  private apiUrlrama = 'http://localhost:3000/rama'; 
  private apiUrlfacultad = 'http://localhost:3000/facultad'; 

  constructor(private http: HttpClient) {  }

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
}