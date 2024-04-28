import { Component } from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  currentpassword: string = '';
  confirmpassword: string = '';
  newpassword: string = '';
  isDisabled: boolean = false;
  constructor(private storage: storageService, private http: HttpClient, private route:Router) {}

  updatepass() {
    this.isDisabled=true;
    document.body.style.cursor = 'wait';
    // Validación básica de campos
    if (!this.currentpassword || !this.confirmpassword || !this.newpassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan campos por llenar"
      });
      this.isDisabled=false;
      document.body.style.cursor = 'default';  
      return;
    }else if(this.newpassword!=this.confirmpassword){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No coinciden las contraseñas"
      });
    }
    else{
      const url = `${environment.apiUrl}/doctors/updatePswrd?idDoctor=${this.storage.getDataItem("user")}&Contrasena=${this.currentpassword}&ContrasenaNueva=${this.newpassword}&verif_contra=${this.confirmpassword}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
  // Realiza la solicitud POST
      this.http.put(url, {headers}).subscribe(
        (response: any) => {
          this.isDisabled=false;
          document.body.style.cursor = 'default';      
          console.log('Contraseña actualizada:', response);
          Swal.fire({
            icon: "success",
            text: "Contraseña actualizada"
          });
          this.route.navigate(['/patients/patientslist']);
          // Manejar la respuesta si es necesario
        },
        (error) => {
          console.error('Error al actualizar contraseña:', error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Contraseña incorrecta"
          });
          this.isDisabled=false;
          document.body.style.cursor = 'default';      
          // Manejar errores si es necesario
        }
      );
  }
    }

    
}