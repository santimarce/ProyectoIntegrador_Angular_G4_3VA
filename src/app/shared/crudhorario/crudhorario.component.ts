import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CuadroDialogComponent } from './cuadrodialogo.component';

@Component({
  selector: 'app-crudhorario',
  templateUrl: './crudhorario.component.html',
  styleUrls: ['./crudhorario.component.css']
})
export class CrudhorarioComponent {

  constructor(private dialog: MatDialog) { }

  openCrudDialog(): void {
    this.dialog.open(CuadroDialogComponent, {
      width: '400px',
      data: {} // Puedes pasar datos al cuadro de diálogo si es necesario
    });
  }
}