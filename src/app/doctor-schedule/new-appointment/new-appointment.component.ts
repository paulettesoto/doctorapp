import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  name: string;
  lastname: string;
  lastname2: string;
  phonenumber: string;
  age: string;
  email: string;
  date:string;
  datebirth:string;
  treatment:string;
  availableDates: any[] = [];
  selectedHour: number | null = null;

  constructor(private http:HttpClient, private route:Router) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.phonenumber = '';
    this.age = '';
    this.email = '';
    this.date='';
    this.datebirth='';
    this.treatment='';
  }
  
  ngOnInit(): void {

  }
  
  disponibles() {
    const dateObj = new Date(this.date);

    // Obtén los componentes de la fecha (año, mes, día)
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    const day = dateObj.getDate().toString().padStart(2, '0'); // Ajusta para que siempre tenga dos dígitos
    
    // Crea la cadena de fecha en el formato deseado (YYYY/MM/DD)
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate)
    const url = 'https://doctorappbackend-wpqd.onrender.com/schedules/availableDates';

    const params = new HttpParams()
      .set('idDoctor', localStorage.getItem('user') || "")
      .set('fecha',formattedDate );
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
      this.selectedHour = null;
    } else {
      //selecciona la nueva hora
      this.selectedHour = date.hora;
    }
  }
  getButtonClass(date: any): string {
    return this.selectedHour === date.hora ? 'btn btn-primary' : 'btn btn-outline';
  }

  agendar(){
    const url = 'https://doctorappbackend-wpqd.onrender.com//setDate';

  // Configura los parámetros para la solicitud POST
  const params = {
    celular: this.phonenumber,
    correo: this.email,
    Nombre: this.name,
    PrimerApe: this.lastname,
    SegundoApe: this.lastname2,
    idTratamiento: this.treatment,
    idDoctor: localStorage.getItem('user') || "",
    edad: this.age,
    fechanac: this.datebirth,
    fecha: this.date,
    hora: this.selectedHour,
    idPaciente: '1'
  };

  // Realiza la solicitud POST
  this.http.post(url, params).subscribe(
    (response: any) => {
      console.log('Solicitud POST exitosa:', response);
      // Manejar la respuesta según tus necesidades
    },
    (error) => {
      console.error('Error en la solicitud POST:', error);
      // Manejar el error según tus necesidades
    }
  );

  }

}
