import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { storageService } from 'src/app/storage.service';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.css']
})
export class ScheduleViewComponent implements OnInit {
  name: string;
  lastname: string;
  lastname2: string;
  date: string;
  dates: any[] = [];

  ngOnInit(): void {
    this.datelist();
  }

  constructor(private http:HttpClient, private location: Location, private storage:storageService) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.date = '';
  }
  formatHora(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);

    return `${this.agregarCero(horas)}:${this.agregarCero(minutos)}`;
  }

  agregarCero(valor: number): string {
    return valor < 10 ? `0${valor}` : `${valor}`;
  }
//CURDATE()
  datelist() {
    const url = 'https://doctorappbackend-wpqd.onrender.com/dates/dates';
  
      const params = new HttpParams()
        .set('idDoctor', this.storage.getDataItem('user'))
        .set('fecha', "CURRENT_DATE()");
        ;
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
  formatdate(date:string ):string{
    const dateObj = new Date(date);

    // Obtén los componentes de la fecha (año, mes, día)
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    const day = dateObj.getDate().toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    
    // Crea la cadena de fecha en el formato deseado (YYYY/MM/DD)
    return `${year}-${month}-${day}`;
  }
  search(){

    const url = 'https://doctorappbackend-wpqd.onrender.com/dates/dates';
  
      const params = new HttpParams()
        .set('idDoctor', this.storage.getDataItem('user'))
        .set('fecha',this.formatdate(this.date));
        ;
        console.log(this.storage.getDataItem('user'));
        console.log(this.formatdate(this.date));
        this.http.get(url, { params }).subscribe(
          (response: any) => {
            console.log(response);
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
  message(paciente:any, fecha:any, hora:any, dr:any){
    const msg = `¡Hola ${paciente}! Te recuerdo tu cita el dia ${fecha} a las ${this.formatHora(hora)} con Dr. ${dr}. En caso de cancelacion o quieras reagendar tu cita, favor de contactarnos con anticipacion. Exelente dia. `;
    const url = `https://doctorappbackend-wpqd.onrender.com/sendMessage/sendMessage?phoneN=6674747377&text=${msg}`;
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

}
