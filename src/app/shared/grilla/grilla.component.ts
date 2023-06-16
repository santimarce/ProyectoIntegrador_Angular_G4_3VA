import { Component, OnInit } from '@angular/core';
import { GetDiasService } from 'src/app/services/getdias.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  dias: any[] = [];

  constructor(private getdiasService: GetDiasService) {}

  ngOnInit(): void {
    this.getdiasService.getDias().subscribe(
      (data) => {
        this.dias = data;
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla "Dias"', error);
      }
    );
  }
}
