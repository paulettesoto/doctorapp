import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
@Component({
  selector: 'app-searchspecialist',
  templateUrl: './searchspecialist.component.html',
  styleUrls: ['./searchspecialist.component.css']
})
export class SearchspecialistComponent {
  //NO ESTAN LAS VARIABLES QUE SON
  especialidad: string;
  doctorname: string;
  date: string;
  photo:string;//NO SE QUE TIPO
  newdate() {
    // Limpiar localStorage
    this.route.navigate(['/newdatepatient']);

  }
  constructor(private http: HttpClient, private route:Router, private storage: storageService) {
    this. especialidad = '';
    this.doctorname='';
    this.date = '';
    this.photo = '';
  
  }
  search() {
    console.log(this. especialidad);
    console.log(this.doctorname);
    console.log(this.date);
    console.log(this.photo);
  }
}
