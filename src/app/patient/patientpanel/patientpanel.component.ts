import { Component,OnInit } from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';



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
  
    const url = 'https://doctorappbackend-wpqd.onrender.com/patientdates/dates';

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
    const url = 'https://doctorappbackend-wpqd.onrender.com/dates/cancelDate';
  
      const params = new HttpParams()
        .set('idCita', id);
        ;
        this.http.delete(url, { params }).subscribe(
          (response: any) => {
            if (response && response.success) {
              console.log("Cita cancelada");
<<<<<<< HEAD
              alert("Cita cancelada");
              window.location.reload();
=======
              this.mostrar();
>>>>>>> 98bd01df633cd3f3db20f790f836aabed0cd5b3b
            } else {
              console.error('Error:', response);
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
 

  }
  newappointment(){
    this.route.navigate(['/search']);
  }
}
