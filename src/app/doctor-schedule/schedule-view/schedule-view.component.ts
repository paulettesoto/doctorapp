import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { storageService } from 'src/app/storage.service';
import * as jsPDF from 'jspdf';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.css']
})
export class ScheduleViewComponent implements OnInit {
  currentDate: Date;
  name: string;
  lastname: string;
  lastname2: string;
  date: string;
  dates: any[] = [];
  datesR: any[] = [];
  page=1;
  pages=1;
  paged=2;

  
  paginador(i:number){
    let r:Number;
    this.page=this.page+i;
    r=this.page;
    if(r==0){
      this.page=1;
    }
    if(r==(this.pages+1)){
      this.page=(this.pages);
    }

  }
  ngOnInit(): void {
    this.datelist();
  }
  constructor(private http:HttpClient, private storage:storageService) {
    this.name = '';
    this.lastname = '';
    this.lastname2 = '';
    this.date = '';
    this.currentDate = new Date();
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
    const url = `${environment.apiUrl}/dates/dates`;
    console.log(this.formatdate(this.currentDate.toDateString()));
  
      const params = new HttpParams()
        .set('idDoctor', this.storage.getDataItem('user'))
        .set('fecha', this.formatdate(this.currentDate.toDateString()));
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

    const url = `${environment.apiUrl}/dates/dates`;
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
              this.pages=Math.ceil(this.dates.length/this.paged);
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
    const url = `${environment.apiUrl}/dates/cancelDate`;
  
      const params = new HttpParams()
        .set('idCita', id);
        ;
        this.http.delete(url, { params }).subscribe(
          (response: any) => {
            if (response && response.success) {
              console.log("Cita cancelada");
                this.search();
            } else {
              console.error('Error:', response);
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
  

  }
  message(paciente:any, fecha:any, hora:any, dr:any, idcita:any, celular:any){
    const encodeurl = encodeURI(`${environment.apiUrl}/dates/confirmAppointment?idCita=${idcita}`)
    const msg = `¡Hola ${paciente}! Te recuerdo tu cita el dia ${fecha} a las ${this.formatHora(hora)} con Dr. ${dr}. En caso de cancelacion o quieras reagendar tu cita, favor de contactarnos con anticipacion. Excelente dia. Confirma tu cita dando click al siguiente enlace ${encodeurl}`;
    const url = `${environment.apiUrl}/sendMessage/sendMessage?phoneN=${celular}&text=${msg}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
     });
    // Realiza la solicitud POST
    this.http.post(url, {headers}).subscribe(
      (response: any) => {
        console.log('Solicitud POST exitosa:', response);
        window.open(response.success, '_blank');
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }


  generatePDFWeek() {
    const url = `${environment.apiUrl}dates/reportWeek`;

    const params = new HttpParams()
    .set('idDoctor', this.storage.getDataItem('user'))
    .set('fecha', this.formatdate(this.currentDate.toDateString()));

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.dates) {
          this.datesR = response.dates;
          console.log(response.dates);

          const doc = new jsPDF.jsPDF();

          // Agregar contenido al PDF
          doc.setFontSize(18);
          doc.text('Citas de la semana', 20, 10);

          doc.setFontSize(12);
          doc.text(`Dr: ${this.storage.getDataItem("nombre")} ${this.storage.getDataItem("apellido1")} ${this.storage.getDataItem("apellido2")}`, 20, 20);

          let yPosition = 30;

          this.datesR.forEach((date: any) => {
            doc.text(`${date.fecha}  ${this.formatHora(date.hora)}` , 20, yPosition);
            yPosition += 10;
            doc.text(`${date.Nombre}   ${date.Celular}`, 20, yPosition);
            yPosition += 10; // Ajusta el espaciado según tus necesidades
            doc.text(`${date.tratamiento}  `, 20, yPosition);
            yPosition += 10; // Ajusta el espaciado según tus necesidades
          });

          // Guardar o mostrar el PDF (puedes personalizar esto según tus necesidades)
          doc.save('reporte.pdf');
        } else {
          console.error('Error:', response);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  generatePDFmonth() {
    const url = `${environment.apiUrl}/dates/reportMonth`;

    const params = new HttpParams()
    .set('idDoctor', this.storage.getDataItem('user'));

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.dates) {
          this.datesR = response.dates;
          console.log(response.dates);

          const doc = new jsPDF.jsPDF();

          // Agregar contenido al PDF
          doc.setFontSize(18);
          doc.text('Reporte mensual', 20, 10);

          doc.setFontSize(12);
          doc.text(`Dr: ${this.storage.getDataItem("nombre")} ${this.storage.getDataItem("apellido1")} ${this.storage.getDataItem("apellido2")}`, 20, 20);

          let yPosition = 30;

          this.datesR.forEach((date: any) => {
            doc.text(`${date.fecha}  ${this.formatHora(date.hora)}` , 20, yPosition);
            yPosition += 10;
            doc.text(`${date.Nombre}   ${date.Celular}`, 20, yPosition);
            yPosition += 10; // Ajusta el espaciado según tus necesidades
            doc.text(`${date.tratamiento}  ${date.confirmada} `, 20, yPosition);
            yPosition += 30; // Ajusta el espaciado según tus necesidades
          });

          // Guardar o mostrar el PDF (puedes personalizar esto según tus necesidades)
          doc.save('reporte.pdf');
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
