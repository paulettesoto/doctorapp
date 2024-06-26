import { Component , OnInit} from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent {
  name: string;
  lastname: string;
  lastname2: string;
  phonenumber: string;
  fecha_nac: string;
  email: string;
  formatofecha:string;
  isDisabled: boolean = false;
  constructor(private storage: storageService, private http: HttpClient) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.phonenumber = '';
    this.fecha_nac='';
    this.email = '';
    this. formatofecha='';
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
  
    // Realizar acciones neces
    this.name = this.storage.getDataItem('nombre');
    this.lastname = this.storage.getDataItem('apellido1');
    this.lastname2 = this.storage.getDataItem('apellido2');
    this.phonenumber=this.storage.getDataItem('celular');
    this.email=this.storage.getDataItem('email');
    
    const dateObj = new Date(this.storage.getDataItem('fecha_nac'));

    // Obtén los componentes de la fecha (año, mes, día)
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    const day = dateObj.getDate().toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    
    // Crea la cadena de fecha en el formato deseado (YYYY/MM/DD)
    this.formatofecha= `${month}-${day}-${year}`;
    this.fecha_nac=this.formatofecha;
    // ... Otros procesos relacionados con la actualización de type
    console.log(this.storage.getDataItem("user"));
      console.log(this.name);
      console.log(this.lastname);
      console.log(this.lastname2);
      console.log(this.phonenumber);
      console.log(this.fecha_nac);
      console.log(this.email);
 
}
  formatdate(fecha_nac:string ):string{
    const dateObj = new Date(fecha_nac);

    // Obtén los componentes de la fecha (año, mes, día)
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    const day = dateObj.getDate().toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    
    // Crea la cadena de fecha en el formato deseado (YYYY/MM/DD)
    return `${year}-${month}-${day}`;
  }
  update() {
   // Validación básica de campos
   this.isDisabled=true;
   document.body.style.cursor = 'wait';
   if (!this.name || !this.lastname || !this.lastname2|| !this.phonenumber || !this.fecha_nac|| !this.email) {
    console.error('Todos los campos deben ser completados');
    Swal.fire({
      icon: "error",
      text: "Todos los campos deben ser completados"
    });
   
    this.isDisabled = false;
    document.body.style.cursor = 'default';
    return;
  }else{
    const url = `${environment.apiUrl}/patient/update_paciente?idPaciente=${this.storage.getDataItem("user")}&Nombre=${this.name}&PrimerApe=${this.lastname}&SegundoApe=${this.lastname2}&Celular=${this.phonenumber}&fecha_nac=${this.formatdate(this.fecha_nac)}&Correo=${this.email}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     
    });
  // Realiza la solicitud POST
      this.http.put(url, {headers}).subscribe(
        (response: any) => {
          document.body.style.cursor = 'default';
          Swal.fire({
            icon: "success",
            text: "Datos actualizados"
          });
          // Manejar la respuesta si es necesario
        },
        (error) => {
          console.error('Error al actualizar datos:', error);
          // Manejar errores si es necesario
          this.isDisabled = false;
        }
      );
      
  }
  }
 
}

