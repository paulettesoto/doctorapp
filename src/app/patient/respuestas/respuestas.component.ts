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
export class RespuestasComponent implements OnInit {
  clinicalRecordsAnswers:any[] = [];
  clinicalRecords: any[] = [];
  idDoctor:string;
  comentar:string;
  nombre:string;
  apellido1:string;
  apellido2:string;
    constructor(private http:HttpClient, private route:Router,private storage:storageService){
    this.idDoctor='';
    this.comentar='';
    this.nombre = this.storage.getDataItem('nombre');
    this.apellido1 = this.storage.getDataItem('apellido1');
    this.apellido2 = this.storage.getDataItem('apellido2');
  
  }


  generatePDF() {
    const url = 'https://doctorappbackend-wpqd.onrender.com/clinicalRecords-answers/clinicalRecords-answers';

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('idDoctor'))
      .set('idPaciente', this.storage.getDataItem('user'));

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.clinicalRecordsAnswers) {
          this.clinicalRecordsAnswers = response.clinicalRecordsAnswers;
          console.log(response.clinicalRecordsAnswers);

          const doc = new jsPDF.jsPDF();

          // Agregar contenido al PDF
          doc.setFontSize(18);
          doc.text('Reporte de Historial Clínico', 20, 10);

          doc.setFontSize(12);
          doc.text(`Paciente: ${this.nombre} ${this.apellido1} ${this.apellido2}`, 20, 20);

          let yPosition = 30;

          this.clinicalRecordsAnswers.forEach((recordA: any) => {
            doc.text(`${recordA.pregunta}`, 20, yPosition);
            yPosition += 10;
            doc.text(`${recordA.respuesta}`, 20, yPosition);
            yPosition += 15; // Ajusta el espaciado según tus necesidades
          });

          // Guardar o mostrar el PDF (puedes personalizar esto según tus necesidades)
          doc.save('reporte.pdf');
        } else {
          console.error('Error:', response);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
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

  enviarRespuestas() {
    this.clinicalRecords.forEach((record: any) => {
    const url = `https://doctorappbackend-wpqd.onrender.com/clinicalRecords-answers/addAnswer?idQ=${record.id}&idDoctor=${this.storage.getDataItem('idDoctor')}&Ans=${record.respuesta}&idPaciente=${this.storage.getDataItem('user')}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
      // Realiza la solicitud POST
        this.http.post(url, {headers}).subscribe(
          (response: any) => {
        console.log('Solicitud POST exitosa:', response);
        // Manejar la respuesta según tus necesidades
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  });
}
}
