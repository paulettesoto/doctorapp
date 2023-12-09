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
  constructor(private http: HttpClient, private route:Router, private storage: storageService){

  }
  abrirdoctor() {
    // Limpiar localStorage
    this.route.navigate(['/newdatepatient']);

  }
  calificar(){
    this.route.navigate(['/hacercoment']);
  }
}
