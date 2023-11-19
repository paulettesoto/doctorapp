import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import {PageprincipalComponent } from "./pageprincipal/pageprincipal.component";
//import {PatientregisterComponent} from "./patient/patientregister/patientregister.component";

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch: "full"},
  { path: "pageprincipal", component: PageprincipalComponent, pathMatch: "full" },
  //{ path: "patient/register", component: PatientregisterComponent, pathMatch: "full" },
  //{ path: "patient/register", component: PatRegisterComponent, pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
