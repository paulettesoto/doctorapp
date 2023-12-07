import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'doctorapp';
  type: string | null = null;


  ngOnInit() {
    // Obtener el valor del Local Storage
    this.type = localStorage.getItem('type');
    

  }
}
