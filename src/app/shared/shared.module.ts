import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VistarapidaComponent } from './vistarapida/vistarapida.component';
import { GrillaComponent } from './grilla/grilla.component';
import { CruddocentesComponent } from './cruddocentes/cruddocentes.component';
import { CampoTextoCatalogoComponent } from './campo-texto-catalogo/campo-texto-catalogo.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';



@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    VistarapidaComponent,
    GrillaComponent,
    CruddocentesComponent,
    CampoTextoCatalogoComponent,
    NavbaradminComponent
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
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent,
    SidebarComponent,
    VistarapidaComponent,
    GrillaComponent,
    CampoTextoCatalogoComponent,
    NavbaradminComponent]
})
export class SharedModule { }
