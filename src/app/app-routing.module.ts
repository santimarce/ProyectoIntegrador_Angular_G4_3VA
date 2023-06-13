import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
 // {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path:'students', component: StudentsComponent, pathMatch: 'full'},
  {path:'teachers', component: TeachersComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
