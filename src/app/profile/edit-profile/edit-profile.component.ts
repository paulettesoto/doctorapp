import { Component,OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent {
  name: string;
  lastname: string;
  lastname2: string;
  phonenumber: string;
  email: string;
  foto:string;
  isDisabled: boolean=false;

  constructor(private storage: storageService, private http: HttpClient, private route:Router) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.phonenumber = '';
    this.email = '';
    this.foto='foto';
  }
  
  validateEmail(event: KeyboardEvent): boolean {
    const key: string = event.key;
    const currentValue: string = (event.target as HTMLInputElement).value + key;
    if(key ===" "){//no permitir espacios
      return false;
    }
    if (currentValue.length === 1) {//que el primer caracter sea solo letras
      return /[a-zA-Z]/.test(currentValue);
    }else{
      if(/^[a-zA-Z0-9._%+-@]+$/.test(currentValue)){//permitir el arroba,letras,numros y ciertos caracteres especiales
        if(((currentValue.match(/@/g) || []).length)>1){//permitir solo un arroba y cortar mas de uno
          return false;
        }else{//de otra forma dejar escribir cualquier caracter
          return true;
        }
      }
    }
    return false;
  }
  ngOnInit(): void {
  
      // Realizar acciones necesarias cuando logoutTrigger cambie
    
      this.name = this.storage.getDataItem('nombre');
      this.lastname = this.storage.getDataItem('apellido1');
      this.lastname2 = this.storage.getDataItem('apellido2');
      this.phonenumber=this.storage.getDataItem('celular');
      this.email=this.storage.getDataItem('email');
      // ... Otros procesos relacionados con la actualización de type
   
  }
  update() {
    this.isDisabled=true;
    document.body.style.cursor = 'wait';
    // Validación básica de campos
    if (!this.name || !this.lastname || !this.lastname2  || !this.phonenumber || !this.email || !this.email) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan campos por llenar"
      });
      this.isDisabled=false;
      document.body.style.cursor = 'default';  
      return;
    }else{
      const url = `${environment.apiUrl}/doctors/update?idDoctor=${this.storage.getDataItem("user")}&Nombre=${this.name}&PrimerApe=${this.lastname}&SegundoApe=${this.lastname2}&Celular=${this.phonenumber}&Correo=${this.email}&Foto=${this.foto}}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
  // Realiza la solicitud POST
      this.http.put(url, {headers}).subscribe(
        (response: any) => {
          this.isDisabled=false;
          document.body.style.cursor = 'default';      
          console.log('Datos actualizados:', response);
          Swal.fire({
            icon: "success",
            text: "Datos actualizados"
          });
          this.route.navigate(['/patients/patientslist']);
          // Manejar la respuesta si es necesario
        },
        (error) => {
          console.error('Error al actualizar datos:', error);
          // Manejar errores si es necesario
          this.isDisabled=false;
          document.body.style.cursor = 'default';      
        }
      );
  }
    }
 
}
