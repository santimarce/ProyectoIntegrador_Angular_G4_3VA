import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CustomerComponent } from './customer/customer.component';
//import { AuthGuard } from './guard/auth.guard';
//import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
//import { UserComponent } from './user/user.component';

const routes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
// { path: '**', component: NoPagesFoundComponent },

// {component:HomeComponent,path:'',canActivate:[AuthGuard]},
// {component:UserComponent,path:'user',canActivate:[AuthGuard]},
// {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
];

@NgModule({
  declarations:[],
  imports: [BrowserModule, RouterModule.forRoot(routes), 
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }