import { Component } from '@angular/core';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {
  name: string;
  lastname: string;
  lastname2: string;
  phonenumber: string;
  age: string;
  email: string;
  date:string;
treatment:string;

  constructor() {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.phonenumber = '';
    this.age = '';
    this.email = '';
    this.date='';
    this.treatment='';
  }

  agendar() {
    console.log(this.email);
  
  }
}
