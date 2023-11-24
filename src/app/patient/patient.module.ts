import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterpatientComponent } from './registerpatient/registerpatient.component';

import { SharedModule } from '../shared/shared.module';
import { PatientpanelComponent } from './patientpanel/patientpanel.component';
import { SearchspecialistComponent } from './searchspecialist/searchspecialist.component';
import { ScheduleComponent } from './schedule/schedule.component';
@NgModule({
  declarations: [
    RegisterpatientComponent,
    PatientpanelComponent,
    SearchspecialistComponent,
    ScheduleComponent,
  ],
  imports: [
    CommonModule
   
  ]
})
export class PatientModule { }
