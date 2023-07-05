import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudDocenteService } from 'src/app/services/crud-docente.service';

@Component({
  selector: 'app-cuadro-dialogo',
  templateUrl: './cuadrodialogo.component.html',
  styleUrls: ['./cuadrodialogo.component.css']
})
export class CuadroDialogComponent {

  constructor(public dialogRef: MatDialogRef<CuadroDialogComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}