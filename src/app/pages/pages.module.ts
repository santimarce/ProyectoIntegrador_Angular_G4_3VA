import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    StudentsComponent,
    TeachersComponent,
    NopagesfoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
