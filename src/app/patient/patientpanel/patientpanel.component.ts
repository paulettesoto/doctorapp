import { Component,OnInit } from '@angular/core';
import { storageService } from 'src/app/storage.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';



@Component({
  selector: 'app-patientpanel',
  templateUrl: './patientpanel.component.html',
  styleUrls: ['./patientpanel.component.css']
})
export class PatientpanelComponent implements OnInit {
  dates: any[] = [];
  especialidad: string;
  doctorname: string;
  date: string;
  photo:string;//NO SE QUE TIPO

  constructor(private storage: storageService, private http: HttpClient) {
    this. especialidad = '';
    this.doctorname='';
    this.date = '';
    this.photo = '';

  
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
            this.dates = response.dates;
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
}
