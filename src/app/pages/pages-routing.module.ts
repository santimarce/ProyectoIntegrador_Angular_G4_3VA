import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path:'students', component: StudentsComponent, canActivate: [authGuard]},
  { path: 'teachers', component: TeachersComponent, canActivate: [authGuard] },
  { path:'admin', component: AdminComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
