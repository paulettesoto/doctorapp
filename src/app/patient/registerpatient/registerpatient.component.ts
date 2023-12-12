import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';

import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NavbarpatientComponent } from 'src/app/shared/navbarpatient/navbarpatient.component';

import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
@Component({
  selector: 'app-registerpatient',
  templateUrl: './registerpatient.component.html',
  styleUrls: ['./registerpatient.component.css']
})
export class RegisterpatientComponent {
  name: string;
  lastname: string;
  lastname2: string;
  phonenumber: string;
  fecha_nac: string;
  email: string;
 
  password: string;
  confirmPassword: string;

  constructor(private http:HttpClient, private route:Router, private storage:storageService) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.phonenumber = '';
    this.fecha_nac = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  register(){
    if( (!this.name|| !this.lastname || !this.lastname2 || !this.phonenumber || !this.fecha_nac || !this.email|| !this.password)|| !this.confirmPassword){
      alert("Campos vacios");
    }else if(this.password!=this.confirmPassword){
      alert("Contraseñas no coinciden");
    }else{
      const url = `http://127.0.0.1:8000/signUp_paciente?Nombre=${this.name}&PrimerApe=${this.lastname}&SegundoApe=${this.lastname2}&Celular=${this.phonenumber}&fecha_nac=${this.formatdate(this.fecha_nac)}&Correo=${this.email}&Contrasena=${this.password}&confirmar_contra=${this.confirmPassword}`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'accept': 'application/json'
       });
    // Realiza la solicitud POST
    this.http.post(url, {headers}).subscribe(
      (response: any) => {
        console.log('Solicitud POST exitosa:', response);
        alert("Registro exitoso");
        this.route.navigate(['/login'])
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
