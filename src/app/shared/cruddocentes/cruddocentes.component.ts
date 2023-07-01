import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Teacher } from 'src/app/models/teachermodel';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModaldocenteComponent } from '../modaldocente/modaldocente.component';

@Component({
  selector: 'app-cruddocentes',
  templateUrl: './cruddocentes.component.html',
  styleUrls: ['./cruddocentes.component.css']
})
export class CruddocentesComponent {

  constructor(private dialog: MatDialog) { }

  openCrudDialog(): void {
    this.dialog.open(ModaldocenteComponent, {
      width: '400px',
      data: {} // Puedes pasar datos al cuadro de diálogo si es necesario
    });
  }
  teacher: Teacher[] = [
    {id: 'DC-09123', nombre: 'Lorena', apellido: 'Chulde', contacto: '0996603406', email: 'lchulde@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09124', nombre: 'Luis', apellido: 'Chipuxi', contacto: '0998795145', email: 'Lchipuxi@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09125', nombre: 'Diego', apellido: 'Yanez', contacto: '0999999999', email: 'dyanez@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09126', nombre: 'Mauricio', apellido: 'Guamán', contacto: '0999999999', email: 'mguaman@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09127', nombre: 'Tatiana', apellido: 'Vizcaíno', contacto: '0982327784', email: 'tvizcaino@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09128', nombre: 'Fanny', apellido: 'Sanchez', contacto: '0999999999', email: 'fsanchez@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09129', nombre: 'Yolanda', apellido: 'Moya', contacto: '0999999999', email: 'ymoya@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09130', nombre: 'Christian', apellido: 'Rodriguez', contacto: '0994624824', email: 'crodriguez@yavirac.edu.ec	', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09131', nombre: 'Andrés', apellido: 'Carvajal', contacto: '0995426293', email: 'acarvajal@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09132', nombre: 'Hernan', apellido: 'Mejía', contacto: '0999999999', email: 'cmejia@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09133', nombre: 'Freddy', apellido: 'Heredia', contacto: '0999999999', email: 'fheredia@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09134', nombre: 'Yogledis', apellido: 'Herrera', contacto: '0999999999', email: 'yherrera@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09135', nombre: 'Gustavo', apellido: 'Jaramillo', contacto: '0999999999', email: 'gjaramillo@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09136', nombre: 'Debora', apellido: 'Mera', contacto: '0999999999', email: 'dmera@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09137', nombre: 'Geovanni', apellido: 'Pazmino', contacto: '0999999999', email: 'gpazmino@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09138', nombre: 'Fanny', apellido: 'Sanchez', contacto: '0999999999', email: 'fsanchez@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09139', nombre: 'Maritza', apellido: 'Tituana', contacto: '0999999999', email: 'mtituana@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09140', nombre: 'Byron', apellido: 'Moreno', contacto: '0999999999', email: 'bmoreno@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09141', nombre: 'Andrés', apellido: 'Carvajal', contacto: '0995426293', email: 'acarvajal@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09142', nombre: 'Hernan', apellido: 'Mejía', contacto: '0999999999', email: 'cmejia@yavirac.edu.ec', contrasenia: '*****',idrama: 1, idfacultad: 1}
  ];
  displayedColumns = ['id', 'nombre', 'apellido', 'contacto', 'email', 'idrama', 'idfacultad', 'acciones'];
  dataSource = new MatTableDataSource<Teacher>(this.teacher);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}