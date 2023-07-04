import {  Component,  OnInit,  ViewChild, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudDocenteService } from 'src/app/services/crud-docente.service';
import { Teacher, TeacherModificar } from 'src/app/models/teachermodel';
import { GetCatalogosService } from 'src/app/services/getcatalogos.service';
import { Rol, Rama, Facultad, Estado } from 'src/app/models/catalogmodel';

@Component({
  selector: 'app-modalmodifidocente',
  templateUrl: './modalmodifidocente.component.html',
  styleUrls: ['./modalmodifidocente.component.css'],
})
export class ModalmodifidocenteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalmodifidocenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private docentesService: CrudDocenteService,
    private toastr: ToastrService,
    private getCatalogos: GetCatalogosService
  ) {}
  hide = true;
  docenteForm = new FormGroup({
    cedula_docente: new FormControl('', Validators.required),
    nombre_docente: new FormControl('', Validators.required),
    apellido_docente: new FormControl('', Validators.required),
    contacto_docente: new FormControl('', Validators.required),
    email_docente: new FormControl('', [Validators.required, Validators.email]),
    contrasenia_docente: new FormControl('', Validators.required),
    idrama_docente: new FormControl(),
    idfacultad_docente: new FormControl(),
    idestado_docente: new FormControl(),
    idrol_docente: new FormControl(),
  });
  rama: Rama[] = [];
  rol: Rol[] = [];
  facultad: Facultad[] = [];
  estado: Estado[] = [];
  teacherchange: TeacherModificar = {
    nombres_docente: '',
    apellidos_docente: '',
    contacto_docente: '',
    email_docente: '',
    contrasenia_docente: '',
    id_rama: 1,
    id_facultad: 1,
    id_estado: 1,
    id_rol: 1,
  };
  // Otros campos del formulario
  @ViewChild('idramaSelect') idramaSelect!: any;
  @ViewChild('idfacultadSelect') idfacultadSelect!: any;
  @ViewChild('idestadoSelect') idestadoSelect!: any;
  @ViewChild('idrolSelect') idrolSelect!: any;

  onRamaSelectionChange(event: any): void {
    const selectedRama = this.rama.find(
      (rama) => rama.nombre_rama === event.value
    );
    if (selectedRama) {
      this.teacherchange.id_rama = selectedRama.id_rama;
    }
  }

  onFacultadSelectionChange(event: any): void {
    const selectedFacultad = this.facultad.find(
      (facultad) => facultad.nombre_facultad === event.value
    );
    if (selectedFacultad) {
      this.teacherchange.id_facultad = selectedFacultad.id_facultad;
    }
  }

  onEstadoSelectionChange(event: any): void {
    const selectedEstado = this.estado.find(
      (estado) => estado.nombre_estado === event.value
    );
    if (selectedEstado) {
      this.teacherchange.id_estado = selectedEstado.id_estado;
    }
  }

  onRolSelectionChange(event: any): void {
    const selectedRol = this.rol.find((rol) => rol.nombre_rol === event.value);
    if (selectedRol) {
      this.teacherchange.id_rol = selectedRol.id_rol;
    }
  }
  docente: Teacher = this.data.teacher;

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.getCatalogos.getRama().subscribe(
      (data) => {
        this.rama = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Rama"', error);
      }
    );
    this.getCatalogos.getRol().subscribe(
      (data) => {
        this.rol = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Rol"', error);
      }
    );
    this.getCatalogos.getFacultad().subscribe(
      (data) => {
        this.facultad = data;
      },
      (error) => {
        console.error(
          'Error al obtener los datos de la tabla "Facultad"',
          error
        );
      }
    );
    this.getCatalogos.getEstado().subscribe(
      (data) => {
        this.estado = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Estado"', error);
      }
    );
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  modificarDocente() {
    this.teacherchange.nombres_docente = this.docenteForm.controls['nombre_docente'].value ?? '';
    this.teacherchange.apellidos_docente = this.docenteForm.controls['apellido_docente'].value ?? '';
    this.teacherchange.contacto_docente = this.docenteForm.controls['contacto_docente'].value ?? '';
    this.teacherchange.email_docente = this.docenteForm.controls['email_docente'].value ?? '';
    this.teacherchange.contrasenia_docente = this.docenteForm.controls['contrasenia_docente'].value ?? '';
    console.log(this.teacherchange);
    this.docentesService.actualizarDocente(this.docente.id_docente, this.teacherchange).subscribe(
      (response: string) => {
        this.toastr.success('Docente agregado correctamente'+response, 'Éxito');
      },
      (error) => {
        this.toastr.error('Error al agregar el docente', 'Error');
      }
    );

 }
}
