import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  currentpassword: string;
  confirmpassword: string;
  newpassword: string;

  constructor() {
    this. currentpassword = '';
    this.confirmpassword = '';
    this.newpassword = '';
  }
  updatepass() {
    console.log(this. currentpassword);
    console.log(this.confirmpassword);
    console.log(this.newpassword);
  }
}
