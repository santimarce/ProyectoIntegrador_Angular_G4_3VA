import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent {
  title = 'Sistema de Gestión de Horarios ITS YAVIRAC';
  condition: string = "default"; 
  changeCondition(name:string) {
    this.condition = name;
  }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
