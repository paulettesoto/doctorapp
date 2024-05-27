import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageprincipalComponent } from "./pageprincipal/pageprincipal.component";
import { AuthGuard } from './auth-guard.service';

//doctor
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component"
import { UpdatepasswordComponent } from "./profile/updatepassword/updatepassword.component"
import { NewAppointmentComponent } from './doctor-schedule/new-appointment/new-appointment.component';
import { ScheduleViewComponent } from './doctor-schedule/schedule-view/schedule-view.component';
import { PatientslistComponent } from './patients/patientslist/patientslist.component';
import { ReviewsComponent } from './reviews/reviews/reviews.component';
import { DateSchedulerComponent } from './doctor-schedule/date-scheduler/date-scheduler.component';
import { ClinicalRecordsComponent } from './patients/clinical-records/clinical-records.component';
import { PatientDetailComponent } from './patients/patient-detail/patient-detail.component';
import { ServicePanelComponent } from './profile/service-panel/service-panel.component';
import { StatsComponent } from './profile/stats/stats.component';
//patient
import { PatientpanelComponent } from './patient/patientpanel/patientpanel.component';
import { RegisterpatientComponent } from './patient/registerpatient/registerpatient.component';
import { SearchspecialistComponent } from './patient/searchspecialist/searchspecialist.component';
import { UpdatedataComponent } from './patient/perfilpatient/updatedata/updatedata.component';
import { UpdatepasswordpatientComponent } from './patient/perfilpatient/updatepasswordpatient/updatepasswordpatient.component';
import { FavoritesComponent } from './patient/favorites/favorites.component';
import { NewdatpatientComponent } from './patient/newdatpatient/newdatpatient.component';
import { HacercomentComponent } from './patient/hacercoment/hacercoment.component';
import {RespuestasComponent} from './patient/respuestas/respuestas.component';

const routes: Routes = [
  //{ path: "", component: AppComponent },
  { path: "", component: PageprincipalComponent },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  
  //doctor
  { path: "profile/editprofile", component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: "profile/updatepassword", component: UpdatepasswordComponent , canActivate: [AuthGuard]},
  { path: "schedule/newappointment", component: NewAppointmentComponent , canActivate: [AuthGuard]},
  { path: "schedule/scheduleview", component: ScheduleViewComponent , canActivate: [AuthGuard]},
  { path: "patients/patientslist", component: PatientslistComponent , canActivate: [AuthGuard]},
  { path: "reviews", component: ReviewsComponent , canActivate: [AuthGuard]},
  { path: "schedule/date-scheduler", component: DateSchedulerComponent , canActivate: [AuthGuard]},
  { path: "patients/patientdetail/clinical-records", component: ClinicalRecordsComponent , canActivate: [AuthGuard]},
  { path: "patients/patient-detail", component: PatientDetailComponent , canActivate: [AuthGuard]},
  { path: "profile/service-panel", component: ServicePanelComponent , canActivate: [AuthGuard]},
  { path: "profile/stats", component: StatsComponent , canActivate: [AuthGuard]},


  //patient
  { path: "patient/patientpanel", component: PatientpanelComponent , canActivate: [AuthGuard]},
  { path: "registerpatient", component: RegisterpatientComponent},
  { path: "search", component: SearchspecialistComponent , canActivate: [AuthGuard]},
  { path: "perfilpatient/updatedata", component: UpdatedataComponent , canActivate: [AuthGuard]},
  { path: "perfilpatient/updatepasswordpatient", component: UpdatepasswordpatientComponent , canActivate: [AuthGuard]},
  { path: "favorites", component: FavoritesComponent , canActivate: [AuthGuard]},
  { path: "newdatepatient", component: NewdatpatientComponent , canActivate: [AuthGuard] },
  { path: "hacercoment",component:HacercomentComponent,pathMatch: "full" , canActivate: [AuthGuard]},
  { path: "respuestas", component:RespuestasComponent,pathMatch: "full" , canActivate: [AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
