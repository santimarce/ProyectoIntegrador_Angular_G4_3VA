import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modaldocente',
  templateUrl: './modaldocente.component.html',
  styleUrls: ['./modaldocente.component.css']
})
export class ModaldocenteComponent {
  
  constructor(public dialogRef: MatDialogRef<ModaldocenteComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
