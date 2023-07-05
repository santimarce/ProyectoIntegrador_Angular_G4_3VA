import { Component, OnInit, ViewChild } from '@angular/core';
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
  niveles: Nivel[] = [];
  carreras: Carrera[] = [];
  paralelos: Paralelo[] = [];
  jornada: Jornada = {id_jornada:0,nombre_jornada:''};
  nivel: Nivel = {id_nivel:0,nombre_nivel:''};
  carrera: Carrera = {id_carrera:0,nombre_carrera:''};
  paralelo: Paralelo = {id_paralelo:0,nombre_paralelo:''};
  maniana: string[] = ["07:00 - 07:59", "08:00 - 08:59", "09:00 - 09:59", "10:00 - 10:59", "11:00 - 11:59"];
  tarde: string[] = ["12:00 - 12:59", "13:00 - 13:59", "14:00 - 14:59", "15:00 - 15:59", "16:00 - 16:59"];
  noche: string[] = ["17:00 - 17:59", "18:00 - 18:59", "19:00 - 19:59", "20:00 - 20:59", "21:00 - 21:59"];
  celdaSeleccionada: any = null;
  constructor(private getCatalogService: GetCatalogosService) {}
  @ViewChild('idjornadaSelect') idjornadaSelect!: any;
  @ViewChild('idNivelSelect') idNivelSelect!: any;
  @ViewChild('idParaleloSelect') idParaleloSelect!: any;
  @ViewChild('idCarreraSelect') idCarreraSelect!: any;

  onJornadaSelectionChange(event: any): void {
    const selectedJornada = this.jornadas.find(
      (jornada) => jornada.nombre_jornada === event.value
    );
    if (selectedJornada) {
      this.jornada = selectedJornada;
    }
  }

  onNivelSelectionChange(event: any): void {
    const selectedNivel = this.niveles.find(
      (nivel) => nivel.nombre_nivel === event.value
    );
    if (selectedNivel) {
      this.nivel = selectedNivel;
    }
  }

  onParaleloSelectionChange(event: any): void {
    const selectedParalelo = this.paralelos.find(
      (paralelo) => paralelo.nombre_paralelo === event.value
    );
    if (selectedParalelo) {
      this.paralelo = selectedParalelo;
    }
  }

  onCarreraSelectionChange(event: any): void {
    const selectedCarrera = this.carreras.find(
      (carrera) => carrera.nombre_carrera === event.value
    );
    if (selectedCarrera) {
      this.carrera = selectedCarrera;
    }
  }
  abrirModal(coordenadas: any) {
    const fila = coordenadas.fila;
    const columna = coordenadas.columna;
    // Lógica para abrir el modal o realizar otras acciones
  }
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
        this.niveles = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Nivel"', error);
      }
    );
    this.getCatalogService.getCarrera().subscribe(
      (data) => {
        this.carreras = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Carrera"', error);
      }
    );
  }
}