import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { MatIconModule} from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { EstudianteComponent } from './estudiante/estudiante.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,

    NopagesfoundComponent,
    AdminComponent,
    EstudianteComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class PagesModule { }
