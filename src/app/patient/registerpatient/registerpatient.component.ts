import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';

import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NavbarpatientComponent } from 'src/app/shared/navbarpatient/navbarpatient.component';

import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
import { environment
  
 } from 'src/environments/environment';
import Swal from 'sweetalert2';
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

  isDisabled: boolean = false;
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
    this.isDisabled =true;
    document.body.style.cursor = 'wait';
    if( (!this.name|| !this.lastname || !this.lastname2 || !this.phonenumber || !this.fecha_nac || !this.email|| !this.password)|| !this.confirmPassword){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan campos por llenar"
      });
      this.isDisabled = false;
      document.body.style.cursor = 'default';
    }else if(this.password!=this.confirmPassword){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Contraseñas no coinciden"
      });
      this.isDisabled = false;
      document.body.style.cursor = 'default';
    }else{
      const url = `${environment.apiUrl}/signUp_paciente?Nombre=${this.name}&PrimerApe=${this.lastname}&SegundoApe=${this.lastname2}&Celular=${this.phonenumber}&fecha_nac=${this.formatdate(this.fecha_nac)}&Correo=${this.email}&Contrasena=${this.password}&confirmar_contra=${this.confirmPassword}`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'accept': 'application/json'
       });
    // Realiza la solicitud POST
    this.http.post(url, {headers}).subscribe(
      (response: any) => {
        document.body.style.cursor = 'default';
        console.log('Solicitud POST exitosa:', response);
        Swal.fire({
          icon: "success",
          text: "Registro exitoso"
        });
        this.route.navigate(['/login'])
        // Manejar la respuesta según tus necesidades
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
        document.body.style.cursor = 'default';
        this.isDisabled = false;

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
