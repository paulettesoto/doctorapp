import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Route,Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
@Component({
  selector: 'app-newdatpatient',
  templateUrl: './newdatpatient.component.html',
  styleUrls: ['./newdatpatient.component.css']
})

export class NewdatpatientComponent implements OnInit{

  date:string;

  treatment:string;
  availableDates: any[] = [];
  selectedHour: number;
  treatments: any[] = [];

  constructor(private http:HttpClient, private route:Router, private storage:storageService) {
    
    this.date='';
   
    this.treatment='';
    this.selectedHour=0;
  }
  
  ngOnInit(): void {
    this.tratamientos();
  }
  
  disponibles() {
    const url = 'https://doctorappbackend-wpqd.onrender.com/schedules/availableDates';

    const params = new HttpParams()
      .set('idDoctor', this.storage.getDataItem('user'))
      .set('fecha',this.formatdate(this.date) );
      this.http.get(url, { params }).subscribe(
        (response: any) => {
          if (response && response.availableDates) {
            this.availableDates = response.availableDates;
            console.log(this.availableDates);
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
  formatHora(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);

    return `${this.agregarCero(horas)}:${this.agregarCero(minutos)}`;
  }

  agregarCero(valor: number): string {
    return valor < 10 ? `0${valor}` : `${valor}`;
  }
  onSelect(date: any): void {
    if (this.selectedHour === date.hora) {
      // Si vuelves a seleccionar la misma hora
      this.selectedHour = 0;
    } else {
      //selecciona la nueva hora
      this.selectedHour = date.hora;
    }
  }
  getButtonClass(date: any): string {
    return this.selectedHour === date.hora ? 'btn btn-primary' : 'btn btn-outline';
  }

  tratamientos() {

    const url = 'https://doctorappbackend-wpqd.onrender.com/treatments/treatments';

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
  agendar(){
   // const url = `https://doctorappbackend-wpqd.onrender.com/dates/setDate?celular=${this.phonenumber}&correo=${this.email}&Nombre=${this.name}&PrimerApe=${this.lastname}&SegundoApe=${this.lastname2}&idTratamiento=${this.treatment}&idDoctor=${this.storage.getDataItem('user')}&edad=${this.age}&fechanac=${this.formatdate(this.datebirth)}&fecha=${this.formatdate(this.date)}&hora=${String(this.formatHora(this.selectedHour))}&idPaciente=1`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
  // Realiza la solicitud POST
 // this.http.post(url, {headers}).subscribe(
  //  (response: any) => {
  //    console.log('Solicitud POST exitosa:', response);
      // Manejar la respuesta según tus necesidades
 //   },
  //  (error) => {
//      console.error('Error en la solicitud POST:', error);
    }
 // );

  }
//}
