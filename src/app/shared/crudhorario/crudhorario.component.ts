import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CuadroDialogComponent } from './cuadrodialogo.component';

@Component({
  selector: 'app-crudhorario',
  templateUrl: './crudhorario.component.html',
  styleUrls: ['./crudhorario.component.css']
})
export class CrudhorarioComponent {

  constructor(private dialog: MatDialog) { }
  @Input() fila: number = 0;
  @Input() columna: number = 0;
  @Output() celdaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  abrirModal() {
    this.celdaSeleccionada.emit({ fila: this.fila, columna: this.columna });
    console.log('Celda seleccionada: Fila ' + this.fila + ', Columna ' + this.columna);
  }
  openCrudDialog(): void {
    this.abrirModal();
    this.dialog.open(CuadroDialogComponent, {
      width: '400px',
      data: {fila: this.fila, columna: this.columna} // Puedes pasar datos al cuadro de diálogo si es necesario
    });
  }
}