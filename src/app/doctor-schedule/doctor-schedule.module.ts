import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { ScheduleViewComponent } from './schedule-view/schedule-view.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';



@NgModule({
  declarations: [
    ScheduleViewComponent,
    NewAppointmentComponent
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
export class DoctorScheduleModule { }
