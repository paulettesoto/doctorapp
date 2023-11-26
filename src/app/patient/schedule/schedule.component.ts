import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  date: string;
  doctorname: string;
  patient: string;
  treatment: string;
  doctoraddress: string;
  doctorspecialty: string;
  hourdate: string;
 

  constructor() {
    this.date = '';
    this.doctorname = '';
    this.patient = '';
    this.treatment = '';
    this.doctoraddress = '';
    this.doctorspecialty = '';
    this.hourdate = '';
   
  }

  agendar() {
    console.log(this.doctorname);
    console.log(this.date);
    console.log(this.patient);
    console.log(this.treatment);
    console.log(this.doctoraddress);
    console.log(this.doctorspecialty); 
    console.log(this.hourdate);
  }
}
