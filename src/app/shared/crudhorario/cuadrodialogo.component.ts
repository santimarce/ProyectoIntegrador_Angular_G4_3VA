import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CrudDocenteService } from 'src/app/services/crud-docente.service';
import { CursoserviceService } from 'src/app/services/cursoservice.service';
import { GetCatalogosService } from 'src/app/services/getcatalogos.service';
import { Teacher } from 'src/app/models/teachermodel';
import { Asignatura } from '../../models/asignaturamodel';
import { Curso } from 'src/app/models/cursosmodel';
@Component({
  selector: 'app-cuadro-dialogo',
  templateUrl: './cuadrodialogo.component.html',
  styleUrls: ['./cuadrodialogo.component.css']
})
export class CuadroDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CuadroDialogComponent>,
    private crudDocente: CrudDocenteService,
    private crudCursos: CursoserviceService,
    private crudCatalog: GetCatalogosService) { }

  horarioForm = new FormGroup({
    Docente: new FormControl(),
    Asignatura: new FormControl(),
    Curso: new FormControl()
  });

  teacher: Teacher[] = [];
  curso: Curso[] = [];
  asignatura: Asignatura[] = [];

  options = [
    'One',
    'Two',
    'Three'
  ];

  filteredOptions!: Observable<string[]>;
  filteredDocente!: Observable<Teacher[]>;
  filteredCurso!: Observable<Curso[]>;
  filteredAsignatura!: Observable<Asignatura[]>;

  ngOnInit(): void{
    this.crudDocente.getDocentes().subscribe(
      (data) => {
        this.teacher = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Docentes"', error);
      }
    );
    this.crudCursos.getCursos().subscribe(
      (data) => {
        this.curso = data;
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Cursos"', error);
      }
    );
    this.crudCatalog.getAsignatura().subscribe(
      (data) => {
        this.asignatura = data;

      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Asignatura"', error);
      }
    );
  }  
  ngAfterViewInit(): void {
    // Esperar un ciclo de detección de cambios antes de llamar a `this.filtroDocente()`
    setTimeout(() => {
      this.filtroDocente();
      this.filtroCurso();
      this.filtroAsignatura();
    });
  }

  filtroAsignatura(){
    this.filteredAsignatura = this.horarioForm.controls['Asignatura'].valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterAsignatura(val))
    );
  }
  filtroCurso(){
    this.filteredCurso = this.horarioForm.controls['Curso'].valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterCurso(val))
    );
  }
  filtroDocente(){
    this.filteredDocente = this.horarioForm.controls['Docente'].valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterDocente(val))
    );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filterDocente(val: string): Teacher[] {
    return this.teacher.filter(option =>
      option.nombres_docente.toLowerCase().indexOf(val.toLowerCase()) === 0 ||
      option.apellidos_docente.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filterCurso(val: string): Curso[] {
    return this.curso.filter(option =>
      option.nombre_curso.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  filterAsignatura(val: string): Asignatura[] {
    return this.asignatura.filter(option =>
      option.nombre_asignatura.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}