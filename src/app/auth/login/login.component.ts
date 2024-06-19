import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Módulo de Gestión de horarios ITS YAVIRAC';
  opened = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user_id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { user_id, password } = this.loginForm.value;
      this.userService.login(user_id, password).subscribe(
        data => {
          console.log('Login exitoso', data);
          localStorage.setItem('token', data.access_token);
          const decodedToken: any = jwtDecode(data.access_token);
          const decoded_userid = decodedToken.user_id;
          if (decoded_userid) {
            this.userService.userInformation(user_id).subscribe(
              (user: User) => {
                localStorage.setItem('user', user.user_id);
                localStorage.setItem('rol', user.rol.id_rol.toString());
                this.handleUserRole(user);
              },
              (error) => {
                console.error('Error fetching user information', error);
              }
            );
          }
          //this.router.navigate(['/admin']);
        },
        error => {
          console.error('Error en el login', error);
        }
      );
    } else {
      console.error('Error en el login desde fuera');
    }
  }

  handleUserRole(user: User): void {
    if (user.rol && user.rol.id_rol) {
      if (user.rol.id_rol === 1) {
        this.router.navigate(['/admin']);
      } else if (user.rol.id_rol === 2) {
        this.router.navigate(['/teacher']);
      }
    } else {
      this.router.navigate(['/student']);
    }
  }
}
