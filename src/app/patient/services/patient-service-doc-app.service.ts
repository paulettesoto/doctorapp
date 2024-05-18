import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientServiceDocAppService {

  constructor(private http:HttpClient) { }
  private url=environment.apiUrl;
  SearchDoctor(data:any):Observable<any>{
    return this.http.get<any>(this.url+'/patientdoctors/buscar_doctor?especialidad='+data);
  }

}
