import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//doctor
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageprincipalComponent } from './pageprincipal/pageprincipal.component';
import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';

//patient
import { PatientModule } from './patient/patient.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageprincipalComponent,

  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ProfileModule,
    PatientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
