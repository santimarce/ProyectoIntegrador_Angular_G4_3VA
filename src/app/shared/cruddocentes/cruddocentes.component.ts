import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Teacher, TeacherModificar } from 'src/app/models/teachermodel';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModaldocenteComponent } from '../modaldocente/modaldocente.component';
import { CrudDocenteService } from 'src/app/services/crud-docente.service';
import { ModalmodifidocenteComponent } from '../modalmodifidocente/modalmodifidocente.component';

@Component({
  selector: 'app-cruddocentes',
  templateUrl: './cruddocentes.component.html',
  styleUrls: ['./cruddocentes.component.css']
})
export class CruddocentesComponent implements OnInit {

  constructor(private dialog: MatDialog, private crudDocente: CrudDocenteService) { }
  teacher: Teacher[] = [];
  teachermdf: TeacherModificar | undefined;
  displayedColumns = ['id', 'nombre', 'apellido', 'contacto', 'email', 'idrama', 'idfacultad', 'rol', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Teacher>(this.teacher);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngOnInit(): void {
    this.leerDocentes();
  }
  //   {id_docente: 'DC-09123', nombres_docente: 'Lorena', apellidos_docente: 'Chulde', contacto_docente: '0996603406', email_docente: 'lchulde@yavirac.edu.ec', contrasenia_docente: '*****',id_rama: 1, id_facultad: 1, id_rol: 1, id_estado: 1},
  //   {id_docente: 'DC-09123', nombres_docente: 'Lorena', apellidos_docente: 'Chulde', contacto_docente: '0996603406', email_docente: 'lchulde@yavirac.edu.ec', contrasenia_docente: '*****',id_rama: 1, id_facultad: 1, id_rol: 1, id_estado: 1}
  //   {id: 'DC-09125', nombre: 'Diego', apellido: 'Yanez', contacto: '0999999999', email: 'dyanez@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09126', nombre: 'Mauricio', apellido: 'Guamán', contacto: '0999999999', email: 'mguaman@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09127', nombre: 'Tatiana', apellido: 'Vizcaíno', contacto: '0982327784', email: 'tvizcaino@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09128', nombre: 'Fanny', apellido: 'Sanchez', contacto: '0999999999', email: 'fsanchez@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09129', nombre: 'Yolanda', apellido: 'Moya', contacto: '0999999999', email: 'ymoya@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09130', nombre: 'Christian', apellido: 'Rodriguez', contacto: '0994624824', email: 'crodriguez@yavirac.edu.ec	', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09131', nombre: 'Andrés', apellido: 'Carvajal', contacto: '0995426293', email: 'acarvajal@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09132', nombre: 'Hernan', apellido: 'Mejía', contacto: '0999999999', email: 'cmejia@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09133', nombre: 'Freddy', apellido: 'Heredia', contacto: '0999999999', email: 'fheredia@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09134', nombre: 'Yogledis', apellido: 'Herrera', contacto: '0999999999', email: 'yherrera@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09135', nombre: 'Gustavo', apellido: 'Jaramillo', contacto: '0999999999', email: 'gjaramillo@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09136', nombre: 'Debora', apellido: 'Mera', contacto: '0999999999', email: 'dmera@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09137', nombre: 'Geovanni', apellido: 'Pazmino', contacto: '0999999999', email: 'gpazmino@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09138', nombre: 'Fanny', apellido: 'Sanchez', contacto: '0999999999', email: 'fsanchez@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09139', nombre: 'Maritza', apellido: 'Tituana', contacto: '0999999999', email: 'mtituana@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09140', nombre: 'Byron', apellido: 'Moreno', contacto: '0999999999', email: 'bmoreno@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09141', nombre: 'Andrés', apellido: 'Carvajal', contacto: '0995426293', email: 'acarvajal@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1},
  //   {id: 'DC-09142', nombre: 'Hernan', apellido: 'Mejía', contacto: '0999999999', email: 'cmejia@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1, idrol: 1, idestado: 1}
  // ];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openCrudDialog(): void {
    const dialogRef = this.dialog.open(ModaldocenteComponent, {
      width: '400px',
      data: {} // Puedes pasar datos al cuadro de diálogo si es necesario
    });
    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar cualquier lógica después de cerrar el modal
      this.leerDocentes();
    });
  }
  leerDocentes(){
    this.crudDocente.getDocentes().subscribe(
      (data) => {
        this.teacher = data;
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Docentes"', error);
      }
    );
  }

  editarDocente(id:string, docente: Teacher) {
    const dialogRef = this.dialog.open(ModalmodifidocenteComponent, {
      width: '400px',
      data: { teacher: docente} // Puedes pasar datos al cuadro de diálogo si es necesario
    });
    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar cualquier lógica después de cerrar el modal
      this.leerDocentes();
    });
  }

  borrarDocente(id:string){
    this.crudDocente.eliminarDocente(id).subscribe(
      (response: { message: string }) => {
        this.teacher = this.teacher.filter(teacher => teacher.id_docente != id);
        console.log(response.message);
      },
      (error) => {
        console.log('Error al eliminar el docente:', error);
      }
    );
  }
}