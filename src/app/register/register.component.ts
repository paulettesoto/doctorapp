import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string;
  lastname: string;
  lastname2: string;
  phonenumber: string;
  specialty: string;
  email: string;
  license: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.phonenumber = '';
    this.specialty = '';
    this.email = '';
    this.license = '';
    this.password = '';
    this.confirmPassword = '';
  }

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
