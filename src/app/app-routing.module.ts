import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageprincipalComponent } from "./pageprincipal/pageprincipal.component";

//doctor
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component"
import { UpdatepasswordComponent } from "./profile/updatepassword/updatepassword.component"

//patient
import { PatientpanelComponent } from './patient/patientpanel/patientpanel.component';
import { RegisterpatientComponent } from './patient/registerpatient/registerpatient.component';
import { ScheduleComponent } from './patient/schedule/schedule.component';
import { SearchspecialistComponent } from './patient/searchspecialist/searchspecialist.component';

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch: "full"},
  { path: "homepage", component: PageprincipalComponent, pathMatch: "full" },
  //doctor
  { path: "profile/editprofile", component: EditProfileComponent, pathMatch: "full" },
  { path: "updatepassword", component: UpdatepasswordComponent, pathMatch: "full" },

  //patient
  { path: "patientpanel", component: PatientpanelComponent, pathMatch: "full" },
  { path: "registerpatient", component: RegisterpatientComponent, pathMatch: "full" },
  { path: "schedule", component: ScheduleComponent, pathMatch: "full" },
  { path: "search", component: SearchspecialistComponent, pathMatch: "full" },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
