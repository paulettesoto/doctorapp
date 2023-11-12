import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: string;
  password: string;
  type: string;

  constructor() {
    this.user = '';
    this.password = '';
    this.type = '';
  }

  login() {
    console.log(this.user);
    console.log(this.password);
    console.log(this.type);
  }
}
