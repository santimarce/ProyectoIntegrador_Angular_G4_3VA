import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path:'students', component: StudentsComponent},
  { path: 'teachers', component: TeachersComponent },
  { path:'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
