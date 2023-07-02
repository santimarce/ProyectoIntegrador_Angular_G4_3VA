import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  title = 'Sistema de Gestión de horarios ITS YAVIRAC';
  opened = false;


  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}
