import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  constructor(private http:HttpClient) {
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
        .set('idDoctor', localStorage.getItem('user') || "")
        .set('fecha', "CURDATE()");
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
  search(){
    const dateObj = new Date(this.date);

    // Obtén los componentes de la fecha (año, mes, día)
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    const day = dateObj.getDate().toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    
    // Crea la cadena de fecha en el formato deseado (YYYY/MM/DD)
    const formattedDate = `${year}-${month}-${day}`;

    const url = 'https://doctorappbackend-wpqd.onrender.com/dates/dates';
  
      const params = new HttpParams()
        .set('idDoctor', localStorage.getItem('user') || "")
        .set('fecha', formattedDate);
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
}
