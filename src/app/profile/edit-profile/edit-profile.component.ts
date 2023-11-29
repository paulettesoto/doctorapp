import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent {
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
