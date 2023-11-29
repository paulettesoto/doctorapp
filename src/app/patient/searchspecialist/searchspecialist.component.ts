import { Component } from '@angular/core';

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

  constructor() {
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
