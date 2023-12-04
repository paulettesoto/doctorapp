import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent {
  name: string;
  lastname: string;
  lastname2: string;
  treatment: string;
  treatment_end: string;
  image: string; //no se que tipo


  constructor() {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.treatment = '';
    this.treatment_end = '';
    this.image = '';
 
  }

  subir() {
 
  }
}
