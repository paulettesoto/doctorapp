import { Component } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
@Component({
  selector: 'app-hacercoment',
  templateUrl: './hacercoment.component.html',
  styleUrls: ['./hacercoment.component.css']
})
export class HacercomentComponent {
  comentar:string;
  //user:string;
  //idDoctor:string;
  constructor(private http:HttpClient, private route:Router, private storage:storageService){
   // this.user='';
   //this.idDoctor='';
   this.comentar='';
  }
  enviar(){
  //  const url = `https://doctorappbackend-wpqd.onrender.com/signUp_paciente?Nombre=${this.name}&PrimerApe=${this.lastname}&SegundoApe=${this.lastname2}&Celular=${this.phonenumber}&fecha_nac=${this.formatdate(this.fecha_nac)}&Correo=${this.email}&Contrasena=${this.password}&confirmar_contra=${this.confirmPassword}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
  // Realiza la solicitud POST
 // this.http.post(url, {headers}).subscribe(
 //   (response: any) => {
 //     console.log('Solicitud POST exitosa:', response);
      // Manejar la respuesta según tus necesidades
  //  },
  //  (error) => {
  //    console.error('Error en la solicitud POST:', error);
 //   }
// );
}
}
