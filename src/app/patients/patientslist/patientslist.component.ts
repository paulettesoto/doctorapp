import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent implements OnInit {

  constructor(private http: HttpClient, private route:Router, private storage: storageService) { }
  patients: any[] = [];
  page=1;
  pages=1;
  paged=6;
  ngOnInit(): void {
    this.patientlist();
  }
  paginador(i:number){
    let r:Number;
    this.page=this.page+i;
    r=this.page;
    if(r==0){
      this.page=1;
    }
    if(r==(this.pages+1)){
      this.page=(this.pages);
    }

  }
  patientlist() {
    const url = 'https://doctorappbackend-wpqd.onrender.com/patientslist/listapacientes';

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('user'));

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.patients) {
          this.patients = response.patients;
          this.pages=Math.ceil(this.patients.length/this.paged);
          console.log(this.patients);
        } else {
          console.error('Error:', response);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  patientdetail() {
    // Limpiar localStorage
    this.route.navigate(['/patients/patient-detail']);

  }
}
