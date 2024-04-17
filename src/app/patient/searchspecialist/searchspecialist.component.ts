import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-searchspecialist',
  templateUrl: './searchspecialist.component.html',
  styleUrls: ['./searchspecialist.component.css']
})
export class SearchspecialistComponent {

  especialidad: string;
  doctorname: string;
  photo:string;
  data: string;
  doctors: any[] = [];

  constructor(private http: HttpClient, private route:Router, private storage: storageService) {
    this.especialidad = '';
    this.doctorname='';
    this.data='';
    this.photo = '';
  
  }
  newdate(id:any){
    this.storage.setDataItem('idDoctor',id);
  
    this.route.navigate(['/newdatepatient']);

  }
  search() {

    const url = `${environment.apiUrl}/patientdoctors/buscar_doctor`;

    const params = new HttpParams()
      .set('especialidad', this.especialidad);
      this.http.get(url, { params }).subscribe(
        (response: any) => {
          if (response && response.doctors) {
            this.doctors = response.doctors;
            console.log(response.doctors);
          } else {
            console.error('Error:', response);
            alert("Especialidad no existente");
            
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  
  }
}
