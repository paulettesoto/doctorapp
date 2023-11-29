import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageprincipalComponent } from "./pageprincipal/pageprincipal.component";


//doctor
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component"
import { UpdatepasswordComponent } from "./profile/updatepassword/updatepassword.component"
import { NewAppointmentComponent } from './doctor-schedule/new-appointment/new-appointment.component';
import { ScheduleViewComponent } from './doctor-schedule/schedule-view/schedule-view.component';
import { PatientsModule } from './patients/patients.module';
import { ReviewsComponent } from './reviews/reviews/reviews.component';


//patient
import { PatientpanelComponent } from './patient/patientpanel/patientpanel.component';
import { RegisterpatientComponent } from './patient/registerpatient/registerpatient.component';
import { ScheduleComponent } from './patient/schedule/schedule.component';
import { SearchspecialistComponent } from './patient/searchspecialist/searchspecialist.component';
import { PatientslistComponent } from './patients/patientslist/patientslist.component';
import { UpdatedataComponent } from './patient/perfilpatient/updatedata/updatedata.component';
import { UpdatepasswordpatientComponent } from './patient/perfilpatient/updatepasswordpatient/updatepasswordpatient.component';
import { FavoritesComponent } from './patient/favorites/favorites.component';


const routes: Routes = [
  //{ path: "", component: AppComponent, pathMatch: "full" },
  { path: "", component: PageprincipalComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch: "full"},
  
  //doctor
  { path: "profile/editprofile", component: EditProfileComponent, pathMatch: "full" },
  { path: "profile/updatepassword", component: UpdatepasswordComponent, pathMatch: "full" },
  { path: "schedule/newappointment", component: NewAppointmentComponent, pathMatch: "full" },
  { path: "schedule/scheduleview", component: ScheduleViewComponent, pathMatch: "full" },
  { path: "patientslist", component: PatientslistComponent, pathMatch: "full" },
  { path: "reviews", component: ReviewsComponent, pathMatch: "full" },

  //patient
  { path: "patient/patientpanel", component: PatientpanelComponent, pathMatch: "full" },
  { path: "registerpatient", component: RegisterpatientComponent, pathMatch: "full" },
  { path: "schedule", component: ScheduleComponent, pathMatch: "full" },
  { path: "search", component: SearchspecialistComponent, pathMatch: "full" },
  { path: "perfilpatient/updatedata", component: UpdatedataComponent, pathMatch: "full" },
  { path: "perfilpatient/updatepasswordpatient", component: UpdatepasswordComponent, pathMatch: "full" },
  { path: "favorites", component: FavoritesComponent, pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
