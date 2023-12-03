import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    //const spanElement: HTMLElement | null = document.getElementById('error')!;
    const url = `https://doctorappbackend-wpqd.onrender.com/login?user=${this.user}&pswrd=${this.password}`;
    this.http.get(url).subscribe(
      (response: any) => {
        // Manejar la respuesta aquí
        console.log(response); // Ver la respuesta en la consola
        const usr = response;
        if(typeof usr === 'number'){
          localStorage.setItem("user",usr.toString());
          this.route.navigate(['schedule/scheduleview']);

        }else {
         // spanElement.textContent = 'Usuario o contraseña incorrectos';
        }

        
      },
      (error) => {
        //spanElement.textContent = 'Error de sistema';
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  
}
