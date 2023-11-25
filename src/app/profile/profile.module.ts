import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EditProfileComponent,
    UpdatepasswordComponent
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
export class ProfileModule { }
