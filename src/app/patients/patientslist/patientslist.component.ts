import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent implements OnInit {

  constructor(private http: HttpClient, private route:Router) { }
  patients: any[] = [];

  ngOnInit(): void {
    this.patientlist();
  }

  patientlist() {
    const url = 'https://doctorappbackend-wpqd.onrender.com/patientslist/listapacientes';

    const params = new HttpParams()
      .set('idDoctor', localStorage.getItem('user') || "");

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.patients) {
          this.patients = response.patients;
          console.log(this.patients);
        } else {
          console.error('Invalid response format:', response);
        }
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }
  patientdetail() {
    // Limpiar localStorage
    this.route.navigate(['/patients/patient-detail']);

  }
}
