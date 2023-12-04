import { Component } from '@angular/core';

@Component({
  selector: 'app-service-panel',
  templateUrl: './service-panel.component.html',
  styleUrls: ['./service-panel.component.css']
})
export class ServicePanelComponent {
 
  treatment: string;
precio: string;
question:string;

  constructor() {
    this.treatment = '';
   this.precio='';
 this.question='';
  }

  add_treatments() {
 
  }
  add_question() {
 
  }
}
