import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VistarapidaComponent } from './vistarapida/vistarapida.component';
import { GrillaComponent } from './grilla/grilla.component';
import { CruddocentesComponent } from './cruddocentes/cruddocentes.component';



@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    VistarapidaComponent,
    GrillaComponent,
    CruddocentesComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [NavbarComponent,
    SidebarComponent,
    VistarapidaComponent,
    GrillaComponent]
})
export class SharedModule { }
