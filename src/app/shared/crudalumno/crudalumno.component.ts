import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Student } from 'src/app/models/studentmodel';

@Component({
  selector: 'app-crudalumno',
  templateUrl: './crudalumno.component.html',
  styleUrls: ['./crudalumno.component.css']
})
export class CrudalumnoComponent {
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three',
    'Four'
  ];

  //lastName

  filteredOptions: Observable<string[]> = new Observable<string[]>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
/*
function addStudent(): void{
  let currentStudent:Student = {
    id: readFromHtml("cedula_alumno"),
    nombre: readFromHtml("nombre_alumno"),
    apellido: readFromHtml("apellido_alumno"),
    fechanacimiento: undefined,
    contacto: readFromHtml("telefono_alumno"),
    direccion: readFromHtml("direccion_alumno"),
    email: readFromHtml("email_alumno"),
    contraseña: readFromHtml("contraseña_alumno"),
    idjornada: parseInt (readFromHtml("telefono_alumno")),
    idnivel: parseInt (readFromHtml("telefono_alumno")),
    idparalelo: parseInt (readFromHtml("telefono_alumno")),
    idcarrera: parseInt (readFromHtml("telefono_alumno")),
  } 
}


id: string;
    nombre: string;
    apellido: string;
    fechanacimiento: Date;
    contacto: string;
    direccion: string;
    email: string;
    contraseña: string;
    idjornada: number;
    idnivel: number;
    idparalelo: number;
    idcarrera: number;
     

    function readFromHtml(id: string):string {
      return (<HTMLInputElement> document.getElementById(id)).value;
  }*/