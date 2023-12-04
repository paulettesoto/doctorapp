import { Component } from '@angular/core';

@Component({
  selector: 'app-date-scheduler',
  templateUrl: './date-scheduler.component.html',
  styleUrls: ['./date-scheduler.component.css']
})
export class DateSchedulerComponent {
  name: string;
  lastname: string;
  lastname2: string;
  date: string;
hour:string;

  constructor() {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.date = '';
   this.hour='';
  }

  search() {
  
  }
  agregar() {
  
  }
}
