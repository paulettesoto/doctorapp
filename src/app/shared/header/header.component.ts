import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombre: string = "";
  apellido1: string = "";
  apellido2: string = "";
  prefix: string = "";

  constructor(private route:Router) {  }

  ngOnInit(): void {
    this.prefix = localStorage.getItem('prefix') || "";
    this.nombre = localStorage.getItem('nombre') || "";
    this.apellido1 = localStorage.getItem('apellido1') || "";
    this.apellido2 = localStorage.getItem('apellido2') || "";
  }
  logout() {
    // Limpiar localStorage
    localStorage.clear();
    this.route.navigate(['/login']);

  }
}
