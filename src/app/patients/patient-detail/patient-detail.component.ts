import { Component , OnInit} from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit{
  resps: any[] = [];
  treatments: any[] = [];
  name: string;
  lastname: string;
  lastname2: string;
  treatment:string;
  image: string; //no se que tipo
  fileInput:string;

  constructor(private http:HttpClient, private storage:storageService, private route:Router) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.image = '';
    this.treatment='';
    this.fileInput='';
 
  }
  ngOnInit(): void {
    this.name = this.storage.getDataItem("NombrePaciente");
    this.lastname = this.storage.getDataItem("Apellido1Paciente");
    this.lastname2 = this.storage.getDataItem("Apellido2Paciente");
    this.tratamientos();
  }
  

  clinicalrecords(){
    
    this.route.navigate(['/patients/patientdetail/clinical-records']);
  }
  tratamientos() {

    const url = `${environment.apiUrl}/treatments/treatments`;

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('user'));
      this.http.get(url, { params }).subscribe(
        (response: any) => {
          if (response && response.treatments) {
            this.treatments = response.treatments;
            console.log(response.treatments);
          } else {
            console.error('Error:', response);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const Nombre = this.name; // Reemplaza con los valores reales
    const primerape = this.lastname;
    const segundoape = this.lastname2;
    const tratamiento = this.treatment;
  
    const formData = new FormData();
    formData.append('Nombre', Nombre);
    formData.append('primerape', primerape);
    formData.append('segundoape', segundoape);
    formData.append('tratamiento', tratamiento);
    formData.append('image', file, file.name);
  
  const url = `${environment.apiUrl}/uploadImages/image`;
  this.http.post(`${url}`, formData)
    .subscribe(response => {
      Swal.fire({
        icon: "success",
        text: "Archivo subido exitosamente"
      });
     this.fileInput='';
    }, error => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al subir el archivo",
      });
      console.error('Detalles del error:', error.error); 
    });
  }
  
  
}
