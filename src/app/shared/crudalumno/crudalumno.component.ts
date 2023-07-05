import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/studentmodel';
import { AvisomodalComponent } from '../avisomodal/avisomodal.component';
import { MatDialog } from '@angular/material/dialog';
import { Carrera, Jornada, Paralelo, Nivel } from '../../models/catalogmodel';
import { GetCatalogosService } from 'src/app/services/getcatalogos.service';
import { CrudAlumnoService } from 'src/app/services/crud-alumno.service';

@Component({
  selector: 'app-crudalumno',
  templateUrl: './crudalumno.component.html',
  styleUrls: ['./crudalumno.component.css'],
})
export class CrudalumnoComponent {
  constructor(
    private dialog: MatDialog,
    private getCatalogos: GetCatalogosService,
    private crudAlumno: CrudAlumnoService,
    private toastr: ToastrService
  ) {}
  alumnoForm = new FormGroup({
    cedula_alumno: new FormControl('', Validators.required),
    nombre_alumno: new FormControl('', Validators.required),
    apellido_alumno: new FormControl('', Validators.required),
    fechaNacimiento_alumno: new FormControl('', Validators.required),
    direccion_alumno: new FormControl('', Validators.required),
    telefono_alumno: new FormControl('', Validators.required),
    email_alumno: new FormControl('', [Validators.required, Validators.email]),
    contrasenia_alumno: new FormControl('', Validators.required),
    id_jornada: new FormControl(),
    id_nivel: new FormControl(),
    id_paralelo: new FormControl(),
    id_carrera: new FormControl(),
  });
  jornada: Jornada[] = [];
  nivel: Nivel[] = [];
  paralelo: Paralelo[] = [];
  carrera: Carrera[] = [];
  alumnos: Student[] = [];
  alumno: Student = {
    id_alumno: '',
    nombres_alumno: '',
    apellidos_alumno: '',
    fechanacimiento_alumno: null,
    contacto_alumno: '',
    direccion_alumno: '',
    email_alumno: '',
    contrasenia_alumno: '',
    id_jornada: 0,
    id_nivel: 0,
    id_paralelo: 0,
    id_carrera: 0,
  };

  @ViewChild('idjornadaSelect') idjornadaSelect!: any;
  @ViewChild('idNivelSelect') idNivelSelect!: any;
  @ViewChild('idParaleloSelect') idParaleloSelect!: any;
  @ViewChild('idCarreraSelect') idCarreraSelect!: any;

  onJornadaSelectionChange(event: any): void {
    const selectedJornada = this.jornada.find(
      (jornada) => jornada.nombre_jornada === event.value
    );
    if (selectedJornada) {
      this.alumno.id_jornada = selectedJornada.id_jornada;
    }
  }

  onNivelSelectionChange(event: any): void {
    const selectedNivel = this.nivel.find(
      (nivel) => nivel.nombre_nivel === event.value
    );
    if (selectedNivel) {
      this.alumno.id_nivel = selectedNivel.id_nivel;
    }
  }

  onParaleloSelectionChange(event: any): void {
    const selectedParalelo = this.paralelo.find(
      (paralelo) => paralelo.nombre_paralelo === event.value
    );
    if (selectedParalelo) {
      this.alumno.id_paralelo = selectedParalelo.id_paralelo;
    }
  }

  onCarreraSelectionChange(event: any): void {
    const selectedCarrera = this.carrera.find(
      (carrera) => carrera.nombre_carrera === event.value
    );
    if (selectedCarrera) {
      this.alumno.id_carrera = selectedCarrera.id_carrera;
    }
  }

  onFechaNacimientoChange(fechaNacimiento: any) {
    if (!fechaNacimiento.value) {
      this.alumno.fechanacimiento_alumno = new Date();
    } else {
      this.alumno.fechanacimiento_alumno = new Date(fechaNacimiento.value);
    }
  }

  ngOnInit() {
    this.getCatalogos.getJornada().subscribe(
      (data) => {
        this.jornada = data;
      },
      (error) => {
        console.error(
          'Error al obtener los datos de la tabla "Jornada"',
          error
        );
      }
    );
    this.getCatalogos.getNivel().subscribe(
      (data) => {
        this.nivel = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Nivel"', error);
      }
    );
    this.getCatalogos.getParalelo().subscribe(
      (data) => {
        this.paralelo = data;
      },
      (error) => {
        console.error(
          'Error al obtener los datos de la tabla "Paralelo"',
          error
        );
      }
    );
    this.getCatalogos.getCarrera().subscribe(
      (data) => {
        this.carrera = data;
      },
      (error) => {
        console.error(
          'Error al obtener los datos de la tabla "Carrera"',
          error
        );
      }
    );
  }

  public crearAlumno() {
    if (this.alumnoForm.valid) {
      this.alumno.id_alumno =
        this.alumnoForm.controls['cedula_alumno'].value ?? '';
      this.alumno.nombres_alumno =
        this.alumnoForm.controls['nombre_alumno'].value ?? '';
      this.alumno.apellidos_alumno =
        this.alumnoForm.controls['apellido_alumno'].value ?? '';
      this.alumno.contacto_alumno =
        this.alumnoForm.controls['telefono_alumno'].value ?? '';
      this.alumno.direccion_alumno =
        this.alumnoForm.controls['direccion_alumno'].value ?? '';
      this.alumno.email_alumno =
        this.alumnoForm.controls['email_alumno'].value ?? '';
      this.alumno.contrasenia_alumno =
        this.alumnoForm.controls['contrasenia_alumno'].value ?? '';
        console.log(this.alumno);
      this.crudAlumno.crearAlumno(this.alumno).subscribe(
        (response: string) => {
          this.openAviso('Alumno agregado correctamente');
          this.toastr.success('Alumno agregado correctamente', 'Éxito');
        },
        (error) => {
          this.openAviso('Error al agregar el alumno');
          this.toastr.error('Error al agregar el alumno', 'Error');
        }
      );
    } else {
      console.log(this.alumno);
      this.openAviso('Por favor, complete todos los campos');
    }
  }

  openAviso(mensaje: string): void {
    this.dialog.open(AvisomodalComponent, {
      data: {
        mensaje: mensaje,
      },
    });
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
*/
