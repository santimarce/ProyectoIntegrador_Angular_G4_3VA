import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    StudentsComponent,
    TeachersComponent,
    NopagesfoundComponent,
    AdminComponent
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    TeachersComponent,
    StudentsComponent,
    PagesComponent
  ]
})
export class PagesModule { }
