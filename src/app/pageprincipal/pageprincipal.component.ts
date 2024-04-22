import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { storageService } from '../storage.service';

@Component({
  selector: 'app-pageprincipal',
  templateUrl: './pageprincipal.component.html',
  styleUrls: ['./pageprincipal.component.css']
})
export class PageprincipalComponent implements OnInit {
  constructor(private router: Router, private storage: storageService){}
  ngOnInit(): void {
    // Limpiar localStorage
    this.storage.clearAllDataItems();
  }
  click(){
    this.router.navigate(['login'])
  }
  click_regis(){
    this.router.navigate(['register'])
  }
  click_regispac(){
    this.router.navigate(['registerpatient'])
  }
}
