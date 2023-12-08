import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pageprincipal',
  templateUrl: './pageprincipal.component.html',
  styleUrls: ['./pageprincipal.component.css']
})
export class PageprincipalComponent {
  constructor(private router: Router){
    
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
