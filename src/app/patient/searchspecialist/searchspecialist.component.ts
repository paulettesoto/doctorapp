import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { storageService } from 'src/app/storage.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { PatientServiceDocAppService } from '../services/patient-service-doc-app.service';

@Component({
  selector: 'app-searchspecialist',
  templateUrl: './searchspecialist.component.html',
  styleUrls: ['./searchspecialist.component.css']
})
export class SearchspecialistComponent {

  especialidad: any;
  doctorname: string;
  photo:string;
  data: string;
  doctors: any[] = [];
  isdropdown:any;

  constructor(private patientService:PatientServiceDocAppService , private route:Router, private storage: storageService) {
    this.especialidad = '';
    this.doctorname='';
    this.data='';
    this.photo = '';
  }
  Especiality=[
    {name:'Ginecologia',value:'Ginecologia'},
    {name:'General',value:'General'},
    {name:'Odontologia',value:'Odontologia'},
    {name:'Familiar',value:'Familiar'},
    {name:'Interna',value:'Interna'},
    {name:'Endocrinologia',value:'Endocrinologia'},
    {name:'Pediatria',value:'Pediatria'},
    {name:'Ginecobstetricia',value:'Ginecobstetricia'},
    {name:'Cirugia',value:'Cirugia'},
    {name:'Psiquiatra',value:'Psiquiatra'},
    {name:'Cardiologia',value:'Cardiologia'}
  ]
  newdate(id:any){
    this.storage.setDataItem('idDoctor',id);

    this.route.navigate(['/newdatepatient']);

  }
  search() {
    console.log(this.especialidad.value);

    // const url = `${environment.apiUrl}/patientdoctors/buscar_doctor`;
    this.patientService.SearchDoctor(this.especialidad.value).subscribe(res=>{
      if(res!=null){
        this.doctors= res.doctors;
      }else{
        Swal.fire({
          icon:'error',
          title:'Error',
          text:'No hay un doctor con esta especialidad'
        })
      }
    })
  }
}
