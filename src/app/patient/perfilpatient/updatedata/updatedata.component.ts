import { Component } from '@angular/core';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent {
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

  update() {
    console.log(this.email);
    console.log(this.password);
  }
}
