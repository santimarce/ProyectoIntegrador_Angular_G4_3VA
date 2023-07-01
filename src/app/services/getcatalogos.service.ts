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
}