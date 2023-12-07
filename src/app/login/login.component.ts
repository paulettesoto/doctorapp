import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: string;
  password: string;
  type: string;

  constructor(private http:HttpClient, private route:Router) {
    this.user = '';
    this.password = '';
    this.type = '';

  }


  login() {
    console.log(this.user);
    console.log(this.password);
    console.log(this.type);
    let url = '';
    const params = new HttpParams()
      .set('user', this.user)
      .set('pswrd', this.password);

      if (this.type === 'doctor') {
        url = 'https://doctorappbackend-wpqd.onrender.com/login';
        localStorage.setItem("prefix", "Dr.");
        localStorage.setItem("type", "1");
      }else if (this.type === 'patient') {
        url = 'https://doctorappbackend-wpqd.onrender.com/login_paciente';
        localStorage.setItem("prefix", "¡Hola!");
        localStorage.setItem("type", "2");
      }
    
    this.http.get(url, { params }).subscribe(
      (response: any) => {
        console.log(response);

        if (response && response.id){
          const usr = response.id;
          const nombre = response.Nombre;
          const apellido1 = response.PrimerApe;
          const apellido2 = response.SegundoApe;

          localStorage.setItem("user", usr.toString());
          localStorage.setItem("nombre", nombre.toString());
          localStorage.setItem("apellido1", apellido1.toString());
          localStorage.setItem("apellido2", apellido2.toString());


          if (this.type === 'doctor') {
            this.route.navigate(['/schedule/scheduleview']);

          }else if (this.type === 'patient') {

            this.route.navigate(['/patient/patientpanel']);
          }

        } else {
          // Manejar el caso en el que el usuario no es un número
        }
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  
}
