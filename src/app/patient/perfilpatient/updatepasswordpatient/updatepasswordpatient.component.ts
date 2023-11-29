import { Component } from '@angular/core';

@Component({
  selector: 'app-updatepasswordpatient',
  templateUrl: './updatepasswordpatient.component.html',
  styleUrls: ['./updatepasswordpatient.component.css']
})
export class UpdatepasswordpatientComponent {
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
