import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';

import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NavbarpatientComponent } from 'src/app/shared/navbarpatient/navbarpatient.component';
@Component({
  selector: 'app-registerpatient',
  templateUrl: './registerpatient.component.html',
  styleUrls: ['./registerpatient.component.css']
})
export class RegisterpatientComponent {
  name: string;
  lastname: string;
  lastname2: string;
  phonenumber: string;
  fecha_nac: string;
  email: string;
  license: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.phonenumber = '';
    this.fecha_nac = '';
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
