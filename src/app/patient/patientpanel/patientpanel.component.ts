import { Component,OnInit } from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-patientpanel',
  templateUrl: './patientpanel.component.html',
  styleUrls: ['./patientpanel.component.css']
})
export class PatientpanelComponent implements OnInit {
  dateslist: any[] = [];
  especialidad: string;
  doctorname: string;

  photo:string;//NO SE QUE TIPO

  constructor(private storage: storageService, private http: HttpClient, private route:Router,) {
    this. especialidad = '';
    this.doctorname='';
    
    this.photo = '';

  
  }
  historial(iddocpanel:any){
    this.storage.setDataItem('idDoctor',iddocpanel);
    this.route.navigate(['/respuestas']);
  }
  ngOnInit(){
    this.mostrar();
  }
  formatHora(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);

    return `${this.agregarCero(horas)}:${this.agregarCero(minutos)}`;
  }
  agregarCero(valor: number): string {
    return valor < 10 ? `0${valor}` : `${valor}`;
  }
  mostrar() {
  
    const url = `${environment.apiUrl}/patientdates/dates`;

    const params = new HttpParams()
      .set('idPaciente', this.storage.getDataItem('user'));
      this.http.get(url, { params }).subscribe(
        (response: any) => {
          if (response && response.dates) {
            this.dateslist = response.dates;
            console.log(response.dates);
          } else {
            console.error('Error:', response);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  
  }
//esto me lo traje del doc
  canceldate(id: any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Realmente quieres cancelar esta cita?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cancelar cita',
      cancelButtonText: 'No, mantener cita'
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `${environment.apiUrl}/dates/cancelDate`;
      
          const params = new HttpParams()
            .set('idCita', id);
            ;
            this.http.delete(url, { params }).subscribe(
              (response: any) => {
                if (response && response.success) {
                  Swal.fire({
                    icon: "success",
                    text: "Cita cancelada"
                  });
                //this.route.navigate(['/patient/patientpanel']);

                window.location.reload();
                } else {
                  console.error('Error:', response);
                  
                }
              },
              (error) => {
                console.error('Error:', error);
              }
            );
        }
      });
    
  }
  newappointment(){
    this.route.navigate(['/search']);
  }
}
