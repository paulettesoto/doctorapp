import { Component, OnInit } from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-service-panel',
  templateUrl: './service-panel.component.html',
  styleUrls: ['./service-panel.component.css']
})
export class ServicePanelComponent implements OnInit {
 
  treatment: string;
  precio: string;
  question:string;
  treatments: any[] = [];
  questions: any[] = [];

  constructor(private storage:storageService, private http:HttpClient) {
    this.treatment = '';
    this.precio='';
    this.question='';
    
  }

  ngOnInit(): void {
    this.treatmentlist();
    this.questionslist();
  }
  add_treatments() {
    const url = `https://doctorappbackend-wpqd.onrender.com/treatments/addTreatment?tratamiento=${this.treatment}&idDoctor=${this.storage.getDataItem("user")}&costo=${this.precio}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
  // Realiza la solicitud POST
  this.http.post(url, {headers}).subscribe(
    (response: any) => {
      console.log('Solicitud POST exitosa:', response);
      this.treatmentlist();
      // Manejar la respuesta según tus necesidades
    },
    (error) => {
      console.error('Error en la solicitud POST:', error);
    }
  );
  }

  add_question() {
    const url = `https://doctorappbackend-wpqd.onrender.com/clinicalRecords/addQuestion?pregunta=${this.question}&idDoctor=${this.storage.getDataItem("user")}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
  // Realiza la solicitud POST
  this.http.post(url, {headers}).subscribe(
    (response: any) => {
      console.log('Solicitud POST exitosa:', response);
      // Manejar la respuesta según tus necesidades
 
     this.questionslist();
    },
    (error) => {
      console.error('Error en la solicitud POST:', error);
    }
  );
  }

  treatmentlist(){
    const url = 'https://doctorappbackend-wpqd.onrender.com/treatments/treatments';
  
      const params = new HttpParams()
        .set('idDoctor', this.storage.getDataItem('user'));
  
      this.http.get(url, { params }).subscribe(
        (response: any) => {
          if (response && response.treatments) {
            this.treatments = response.treatments;
            console.log(this.treatments);
          } else {
            console.error('Error:', response);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }

    deletetreatment(id:any){
      const url = 'https://doctorappbackend-wpqd.onrender.com/treatments/deleteTreatment';
  
      const params = new HttpParams()
        .set('idTratamiento', id);
        ;
        this.http.delete(url, { params }).subscribe(
          (response: any) => {
            if (response && response.success) {
              console.log("Tratamiento eliminado");
              this.treatmentlist();
            } else {
              console.error('Error:', response);
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
    }

    questionslist(){
      const url = 'https://doctorappbackend-wpqd.onrender.com/clinicalRecords/clinicalRecords';
    
        const params = new HttpParams()
          .set('idDoctor', this.storage.getDataItem('user'));
    
        this.http.get(url, { params }).subscribe(
          (response: any) => {
            if (response && response.clinicalRecords) {
              this.questions = response.clinicalRecords;
              console.log(this.questions);
            } else {
              console.error('Error:', response);
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      }

      deletequestion(id:any){
        const url = 'https://doctorappbackend-wpqd.onrender.com/clinicalRecords/deleteQuestion';
  
      const params = new HttpParams()
        .set('idHistoriaClinica', id);
        ;
        this.http.delete(url, { params }).subscribe(
          (response: any) => {
            if (response && response.success) {
              console.log("pregunta eliminada");
              this.questionslist();
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

