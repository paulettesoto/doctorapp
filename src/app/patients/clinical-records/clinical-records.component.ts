import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { storageService } from 'src/app/storage.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import * as jsPDF from 'jspdf';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clinical-records',
  templateUrl: './clinical-records.component.html',
  styleUrls: ['./clinical-records.component.css']
})
export class ClinicalRecordsComponent implements OnInit {
  clinicalRecordsAnswers:any[] = [];
  clinicalRecords: any[] = [];
  nombre:string;
  apellido1:string;
  apellido2:string;
  idPacient:string;
  flag:number;
  constructor(private http:HttpClient, private storage:storageService,private route:Router){
    this.idPacient=this.storage.getDataItem("idPaciente");
    this.nombre=this.storage.getDataItem("NombrePaciente");
    this.apellido1=this.storage.getDataItem("Apellido1Paciente");
    this.apellido2= this.storage.getDataItem("Apellido2Paciente");
    this.flag=0;

  }
 
  ngOnInit(): void {
    this.preguntas();
  }
  preguntas() {

    const url = `${environment.apiUrl}/clinicalRecords/clinicalRecords`;

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('user'));
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
    const url = `${environment.apiUrl}/clinicalRecords-answers/addAnswer?idQ=${record.id}&idDoctor=${this.storage.getDataItem('user')}&Ans=${record.respuesta}&idPaciente=${this.idPacient}&cuenta=${0}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
      // Realiza la solicitud POST
        this.http.post(url, {headers}).subscribe(
          (response: any) => {
            this.flag=1;
        // Manejar la respuesta según tus necesidades
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  });
    alert("Respuestas enviadas");
    this.route.navigate(['/patients/patientslist']);
  
}

generatePDF() {
  const url = `${environment.apiUrl}/clinicalRecords-answers/clinicalRecords-answers`;

  const params = new HttpParams()
    .set('idDoctor', this.storage.getDataItem('user'))
    .set('idPaciente', this.idPacient)
    .set('cuenta', 0);

  this.http.get(url, { params }).subscribe(
    (response: any) => {
      if (response && response.clinicalRecordsAnswers) {
        this.clinicalRecordsAnswers = response.clinicalRecordsAnswers;
        console.log(response.clinicalRecordsAnswers);

        const doc = new jsPDF.jsPDF();

        // Agregar contenido al PDF
        doc.setFont('Arial');
       
        
        doc.setFontSize(15);
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

 
}
