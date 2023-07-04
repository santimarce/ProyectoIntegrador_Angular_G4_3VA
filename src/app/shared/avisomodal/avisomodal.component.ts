import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-avisomodal',
  templateUrl: './avisomodal.component.html',
  styleUrls: ['./avisomodal.component.css']
})
export class AvisomodalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<AvisomodalComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
