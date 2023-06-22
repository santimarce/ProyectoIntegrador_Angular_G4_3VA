import { Component, OnInit } from '@angular/core';
import { GetCatalogosService } from 'src/app/services/getcatalogos.service';
import { Dias, Jornada, Nivel, Carrera, Paralelo } from 'src/app/models/catalogmodel';
@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  dias: Dias[] = [];
  jornadas: Jornada[] = [];
  nivel: Nivel[] = [];
  carrera: Carrera[] = [];
  paralelo: Paralelo[] = [];
  constructor(private getCatalogService: GetCatalogosService) {}

  ngOnInit(): void {
    this.getCatalogService.getDias().subscribe(
      (data) => {
        this.dias = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Dias"', error);
      }
    );
    this.getCatalogService.getJornada().subscribe(
      (data) => {
        this.jornadas = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Jornada"', error);
      }
    );
    this.getCatalogService.getNivel().subscribe(
      (data) => {
        this.nivel = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Jornada"', error);
      }
    );
    this.getCatalogService.getCarrera().subscribe(
      (data) => {
        this.carrera = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Jornada"', error);
      }
    );
  }
}