import { Component } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string;
  lastname: string;
  lastname2: string;
  phonenumber: string;
  fecha_nac: string;
  specialty: string;
  email: string;
  cedula:string;
  password: string;
  confirmPassword: string;
  foto:string;
  hoja:string;

  constructor(private http:HttpClient, private route:Router, private storage:storageService) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.phonenumber = '';
    this.fecha_nac = '';
    this.specialty='';
    this.email = '';
    this.cedula='';
    this.password = '';
    this.confirmPassword = '';
    this.foto='fotodoctor';
    this.hoja='hojadoctor';
  }
 
  register(){
    if ( this.confirmPassword !== this.password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden"
      });
      return;
    }else if(!this.name||!this.lastname||!this.lastname2||!this.phonenumber||!this.specialty||!this.fecha_nac||!this.email||!this.cedula||!this.password||!this.confirmPassword){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan campos por llenar"
      });
    }
    else{

   
      const url = `${environment.apiUrl}/signUp?Nombre=${this.name}&PrimerApe=${this.lastname}&SegundoApe=${this.lastname2}&Celular=${this.phonenumber}&Especialidad=${this.specialty}&Correo=${this.email}&Cedula=${this.cedula}&HojaDoctor=${this.hoja}&Contrasena=${this.password}&Foto=${this.foto}`;
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
          text: "Usuario registrado"
        });
        this.route.navigate(['/login']);
        // Manejar la respuesta según tus necesidades
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }
  }
  formatdate(date:string ):string{
    const dateObj = new Date(date);

    // Obtén los componentes de la fecha (año, mes, día)
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    const day = dateObj.getDate().toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    
    // Crea la cadena de fecha en el formato deseado (YYYY/MM/DD)
    return `${year}-${month}-${day}`;
  }
  formatHora(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);

    return `${this.agregarCero(horas)}:${this.agregarCero(minutos)}`;
  }

  agregarCero(valor: number): string {
    return valor < 10 ? `0${valor}` : `${valor}`;
  }
}
