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
  patients2: any[] = [];
  listaunida: any[] = [];
  page=1;
  pages=1;
  paged=4;
  ngOnInit(): void {
    this.patientlist();
    //this.patientlist2();
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
  //patientlist2() {
   // const url = 'http://127.0.0.1:8000/patientslist/listapacientescuenta';

   // const params = new HttpParams()
  //    .set('idDoctor', this.storage.getDataItem('user'));

  //  this.http.get(url, { params }).subscribe(
   //   (response: any) => {
   //     if (response && response.patientsc) {
   //       this.patients2 = response.patientsc;
  //        this.pages=Math.ceil(this.patients2.length/this.paged);
  //        console.log(this.patients2);
  //      } else {
  //        console.error('Error:', response);
  //      }
  //    },
  //    (error) => {
  //      console.error('Error:', error);
  //    }
  //  );
  //}
  
  patientdetail(patient:any) {
    // Limpiar localStorage
    this.storage.setDataItem("idPaciente", patient.id);
    this.storage.setDataItem("NombrePaciente", patient.Nombre);
    this.storage.setDataItem("Apellido1Paciente", patient.PrimerApe);
    this.storage.setDataItem("Apellido2Paciente", patient.SegundoApe);
    this.route.navigate(['/patients/patient-detail']);

  }
}
