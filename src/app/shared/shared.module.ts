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
import { MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VistarapidaComponent } from './vistarapida/vistarapida.component';
import { GrillaComponent } from './grilla/grilla.component';
import { CruddocentesComponent } from './cruddocentes/cruddocentes.component';
import { CampoTextoCatalogoComponent } from './campo-texto-catalogo/campo-texto-catalogo.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { CrudalumnoComponent } from './crudalumno/crudalumno.component';
import { BotongrillaComponent } from './botongrilla/botongrilla.component';
import { CrudhorarioComponent } from './crudhorario/crudhorario.component';
import { CuadroDialogComponent } from './crudhorario/cuadrodialogo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModaldocenteComponent } from './modaldocente/modaldocente.component';
import { NavbardocenteComponent } from './navbardocente/navbardocente.component';
import { PagesModule } from '../pages/pages.module';
import { CambiodocenteComponent } from './cambiodocente/cambiodocente.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalmodifidocenteComponent } from './modalmodifidocente/modalmodifidocente.component';


@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    VistarapidaComponent,
    GrillaComponent,
    CruddocentesComponent,
    CampoTextoCatalogoComponent,
    NavbaradminComponent,
    CrudalumnoComponent,
    BotongrillaComponent,
    CrudhorarioComponent,
    CuadroDialogComponent,
    ModaldocenteComponent,
    NavbardocenteComponent,
    CambiodocenteComponent,
    ModalmodifidocenteComponent
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
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', // Configura la posición del toast
      preventDuplicates: true, // Evita la duplicación de toasts
      closeButton: true, // Muestra el botón de cierre en el toast
    })
  ],
  exports: [NavbarComponent,
    SidebarComponent,
    VistarapidaComponent,
    GrillaComponent,
    CampoTextoCatalogoComponent,
    NavbaradminComponent,
    CrudhorarioComponent,
    NavbardocenteComponent
  ]
})
export class SharedModule { }
