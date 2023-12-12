import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: any[] = [];
  favorite:string;
  Nombre:string;
  PrimerApe:string;
  SegundoApe:string;
  especialidad:string;
  cedula:string;
  celular:string;
    constructor(private http: HttpClient, private route:Router, private storage: storageService){
    this.favorite='';
    this.Nombre='';
    this.PrimerApe='';
    this.SegundoApe='';
    this.especialidad='';
    this.cedula='';
    this.celular='';
  }
  ngOnInit(): void {
    this.doctorlist();
  }
  abrirdoctor() {
    // Limpiar localStorage
    this.route.navigate(['/newdatepatient']);

  }
  calificar(id:any){

    this.storage.setDataItem('idDoctor',id);
    this.route.navigate(['/hacercoment']);

  }
  doctorlist() {
    const url = 'hhttp://127.0.0.1:8000/patientdoctors/favorites';

    const params = new HttpParams()
      .set('idPaciente', this.storage.getDataItem('user'));

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.favorites) {
          this.favorites = response.favorites;
          console.log(this.favorites);
        
        } else {
          console.error('Error:', response);
        }

      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
