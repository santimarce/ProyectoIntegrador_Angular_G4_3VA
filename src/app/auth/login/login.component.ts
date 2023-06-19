import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor (private fb:FormBuilder){}
  ngOnInit(): void {
    this.myForm= this.createMyForm();
  }
  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:[],
      password:[]
    });
  }
  public submitFormulario(){
    alert('Se va a enviar el formulario');
    console.log(this.myForm.value);
  }
}
