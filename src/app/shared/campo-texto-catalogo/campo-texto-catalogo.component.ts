import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, startWith} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-campo-texto-catalogo',
  templateUrl: './campo-texto-catalogo.component.html',
  styleUrls: ['./campo-texto-catalogo.component.css']
})
export class CampoTextoCatalogoComponent {
 myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

  filteredOptions: Observable<string[]> = new Observable<string[]>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
