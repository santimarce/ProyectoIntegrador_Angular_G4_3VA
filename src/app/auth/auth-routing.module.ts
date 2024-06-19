import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NopagesfoundComponent } from '../pages/nopagesfound/nopagesfound.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from '../pages/admin/admin.component';
import { StudentsComponent } from '../pages/students/students.component';
import { TeachersComponent } from '../pages/teachers/teachers.component';
import { TeacherGuard } from './teacher.guard';
import { AdminGuard } from './admin.guard';
import { StudentGuard } from './student.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard, AuthGuard] },
  { path: 'student', component: StudentsComponent, canActivate: [StudentGuard, AuthGuard] },
  { path: 'teacher', component: TeachersComponent, canActivate: [TeacherGuard, AuthGuard] },
  { path: '**', component: NopagesfoundComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
