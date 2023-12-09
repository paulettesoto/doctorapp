import { Component } from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  currentpassword: string = '';
  confirmpassword: string = '';
  newpassword: string = '';

  constructor(private storage: storageService, private http: HttpClient) {}

  updatepass() {
    // Validación básica de campos
    if (!this.currentpassword || !this.confirmpassword || !this.newpassword) {
      console.error('Todos los campos deben ser completados');
      return;
    }else{
      const url = `https://doctorappbackend-wpqd.onrender.com/doctors/updatePswrd?idDoctor=${this.storage.getDataItem("user")}&Contrasena=${this.currentpassword}&ContrasenaNueva=${this.newpassword}&verif_contra=${this.confirmpassword}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
  // Realiza la solicitud POST
      this.http.put(url, {headers}).subscribe(
        (response: any) => {
          console.log('Contraseña actualizada:', response);
          // Manejar la respuesta si es necesario
        },
        (error) => {
          console.error('Error al actualizar contraseña:', error);
          // Manejar errores si es necesario
        }
      );
  }
    }

    
}