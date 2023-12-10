import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Route,Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
@Component({
  selector: 'app-newdatpatient',
  templateUrl: './newdatpatient.component.html',
  styleUrls: ['./newdatpatient.component.css']
})

export class NewdatpatientComponent implements OnInit{

  date:string;

  treatment:string;
  availableDates: any[] = [];
  selectedHour: number;
  treatments: any[] = [];

  constructor(private http:HttpClient, private route:Router, private storage:storageService) {
    
    this.date='';
   
    this.treatment='';
    this.selectedHour=0;
  }
    ngOnInit(): void {
   
  }
  agendar(){}
 disponibles(){}

  }
//}
