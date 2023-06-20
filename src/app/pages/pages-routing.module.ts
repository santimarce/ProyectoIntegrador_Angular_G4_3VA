import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },

  { path:'admin', component: AdminComponent},
  { path:'estudiante',
    children:[
      {
        path:'student',
        loadChildren: () => import('./students/students.module').then(m=> m.StudentsModule)
      }]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
