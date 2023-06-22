import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-crudalumno',
  templateUrl: './crudalumno.component.html',
  styleUrls: ['./crudalumno.component.css']
})
export class CrudalumnoComponent {
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three',
    'Four'
  ];

  //lastName

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
