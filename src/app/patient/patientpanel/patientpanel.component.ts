import { Component } from '@angular/core';

@Component({
  selector: 'app-patientpanel',
  templateUrl: './patientpanel.component.html',
  styleUrls: ['./patientpanel.component.css']
})
export class PatientpanelComponent {
  especialidad: string;
  doctorname: string;
  date: string;
  photo:string;//NO SE QUE TIPO

  constructor() {
    this. especialidad = '';
    this.doctorname='';
    this.date = '';
    this.photo = '';
  
  }
  newdate() {
    console.log(this. especialidad);
    console.log(this.doctorname);
    console.log(this.date);
    console.log(this.photo);
  }
}
