import { Component , OnInit} from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit{
  resps: any[] = [];
  name: string;
  lastname: string;
  lastname2: string;
  treatment:string;
  image: string; //no se que tipo


  constructor(private http:HttpClient, private storage:storageService) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.image = '';
    this.treatment='';
 
  }
  ngOnInit(): void {
    this.name = this.storage.getDataItem("NombrePaciente");
    this.lastname = this.storage.getDataItem("Apellido1Paciente");
    this.lastname2 = this.storage.getDataItem("Apellido2Paciente");
  }
  

  xx() {
    const url = `http://127.0.0.1:8000/uploadImages/image?Nombre=${this.name}&primerape=${this.lastname}&segundoape=${this.lastname2}&tratamiento=${this.lastname2}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
  // Realiza la solicitud POST
  this.http.post(url, {headers}).subscribe(
    (response: any) => {
      console.log('Solicitud POST exitosa:', response);
      // Manejar la respuesta según tus necesidades
    },
    (error) => {
      console.error('Error en la solicitud POST:', error);
    }
  );
 
  }

  subir(fileInput: any): void {
    const file: File = fileInput.files[0];
    if (file) {
      // Construir la URL con parámetros de consulta
      const url = `http://127.0.0.1:8000/uploadImages/image?Nombre=${this.name}&primerape=${this.lastname}&segundoape=${this.lastname2}&tratamiento=${this.lastname2}`;
    
      // Construir el formulario y agregar la imagen
      const formData = new FormData();
      formData.append('image', file);
      formData.append('Nombre', this.name);
      formData.append('primerape', this.lastname);
      formData.append('segundoape', this.lastname2);
      formData.append('tratamiento', this.lastname2);

      // Configurar los encabezados (no es necesario Content-Type para FormData)
      const headers = new HttpHeaders();

      // Realizar la solicitud POST
      this.http.post(url, formData, { headers }).subscribe(
        (response: any) => {
          console.log('Solicitud POST exitosa:', response);
          // Manejar la respuesta según tus necesidades
        },
        (error) => {
          console.error('Error en la solicitud POST:', error);
        }
      );
    }
  
}
  
}
