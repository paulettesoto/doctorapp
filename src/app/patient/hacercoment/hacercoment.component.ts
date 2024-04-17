import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hacercoment',
  templateUrl: './hacercoment.component.html',
  styleUrls: ['./hacercoment.component.css']
})
export class HacercomentComponent {
  comentar:string;
  calificacion:number;
  idDoctor:string; //CHECAR. NO ESTA BIEN. SOLO FALTA TRAERME ESTE DATO
  //user:string;
  //idDoctor:string;
  constructor(private http:HttpClient, private route:Router, private storage:storageService){
   // this.user='';
   //this.idDoctor='';
   this.comentar='';
   this.calificacion=0;
   this.idDoctor='';
  }
  ngOnInit(): void {
   this.storage.getDataItem('idDoctor');

  }
  
  enviar(){
    if(!this.comentar|| !this.calificacion){
      alert("Faltan campos por llenar");
    }else{
      const url = `${environment.apiUrl}/patientcomments/comentarios_paciente?comentario=${this.comentar}&calificacion=${this.calificacion}&idDoctor=${this.storage.getDataItem('idDoctor')}`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'accept': 'application/json'
       });
    // Realiza la solicitud POST
  this.http.post(url, {headers}).subscribe(
      (response: any) => {
        console.log('Solicitud POST exitosa:', response);
        alert("Comentario enviado");
        // Manejar la respuesta según tus necesidades
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
  );
  this.comentar = '';
  this.calificacion = 0;
}
}
}
