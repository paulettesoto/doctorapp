import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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
  isDisabled:boolean=false;
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
  giveCalification(star:number){
    this.calificacion =star;
  }
  enviar(){
    this.isDisabled=true;
    if(!this.comentar|| !this.calificacion){
      this.isDisabled=false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan campos por llenar"
      });
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
        Swal.fire({
          icon: "success",
          text: "Comentario enviado"
        });
        // Manejar la respuesta según tus necesidades
        this.isDisabled=false;
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
        this.isDisabled=false;
      }
  );
  this.comentar = '';
  this.calificacion = 0;
}
}
}
