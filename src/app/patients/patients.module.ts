import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { PatientslistComponent } from './patientslist/patientslist.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { ClinicalRecordsComponent } from './clinical-records/clinical-records.component';



@NgModule({
  declarations: [
    PatientslistComponent,
    PatientDetailComponent,
    ClinicalRecordsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    SharedModule
  ]
})
export class PatientsModule { }
