import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';

import * as jsPDF from 'jspdf';



@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent {
  
  clinicalRecords: any[] = [];
  idDoctor:string;
  comentar:string;
  constructor(private http:HttpClient, private route:Router,private storage:storageService){
  this.idDoctor='';
  this.comentar='';
  
  }


  generatePDF() {
    
    // Crear una instancia de jsPDF
    const doc = new jsPDF.jsPDF();
  
    // Agregar contenido al PDF
    doc.text('Mi Reporte PDF', 10, 10);
   
    // Guardar o mostrar el PDF (puedes personalizar esto según tus necesidades)
    doc.text('AIUDA',15,15);
    doc.save('reporte.pdf');
  }
  


  ngOnInit(): void {
    this.storage.getDataItem('idDoctor');
    this.preguntas();
   }
  preguntas() {

    const url = 'https://doctorappbackend-wpqd.onrender.com/clinicalRecords/clinicalRecords';

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('idDoctor'));
      this.http.get(url, { params }).subscribe(
        (response: any) => {
          if (response && response.clinicalRecords) {
            this.clinicalRecords = response.clinicalRecords;
            console.log(response.clinicalRecords);
          } else {
            console.error('Error:', response);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  
  }

  

}
