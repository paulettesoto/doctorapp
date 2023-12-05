import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.css']
})
export class ScheduleViewComponent {
  name: string;
  lastname: string;
  lastname2: string;
  date: string;


  constructor() {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.date = '';
   
  }

  search() {
  
  }
}
