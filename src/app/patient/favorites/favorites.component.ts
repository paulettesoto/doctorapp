import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  doctors: any[] = [];
  doctor:string;
    constructor(private http: HttpClient, private route:Router, private storage: storageService){
    this.doctor='';
  }
  abrirdoctor() {
    // Limpiar localStorage
    this.route.navigate(['/newdatepatient']);

  }
  calificar(){
    this.route.navigate(['/hacercoment']);
  }
  /*doctorlist() {
    const url = 'https://doctorappbackend-wpqd.onrender.com/patientslist/listapacientes';

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('user'));

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.coments) {
          this.coments = response.coments;
          console.log(this.coments);
        } else {
          console.error('Error:', response);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }*/
}
