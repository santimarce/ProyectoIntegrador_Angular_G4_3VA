import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes:Routes=[
  { path:'students',component: StudentListComponent},
  { path:'studentCreate', component:StudentCreateComponent},
  { path:'studentEdit/:id', component:StudentEditComponent},
  { path:'studentDetails/id', component:StudentDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
