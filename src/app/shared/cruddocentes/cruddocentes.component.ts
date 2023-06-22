import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import { Teacher } from 'src/app/models/teachermodel';

@Component({
  selector: 'app-cruddocentes',
  templateUrl: './cruddocentes.component.html',
  styleUrls: ['./cruddocentes.component.css']
})
export class CruddocentesComponent {

  teacher: Teacher[] = [
    {id: 'DC-09123', nombre: 'Juanita', apellido: 'Perez', contacto: '0999999999', email: 'xdd@gmail.com', contrasenia: '*****',idrama: 1, idfacultad: 1},
    {id: 'DC-09123', nombre: 'Juanita', apellido: 'Perez', contacto: '0999999999', email: 'xdd@gmail.com', contrasenia: '*****',idrama: 1, idfacultad: 1}
  ];
  displayedColumns = ['id', 'nombre', 'apellido', 'contacto', 'email', 'idrama', 'idfacultad'];
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