import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CustomerComponent } from './customer/customer.component';
//import { AuthGuard } from './guard/auth.guard';
//import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
//import { UserComponent } from './user/user.component';
import { NoPagesFoundComponent } from './pages/no-pages-found/no-pages-found.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ component: HomeComponent , path: 'home' },
{ component: NoPagesFoundComponent, path: '**', },


// {component:UserComponent,path:'user',canActivate:[AuthGuard]},
// {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
];

@NgModule({
  declarations:[],
  imports: [BrowserModule, RouterModule.forRoot(routes), 
    AuthRoutingModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }