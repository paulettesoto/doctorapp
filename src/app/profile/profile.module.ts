import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";

import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule
  ]
})
export class ProfileModule { }
