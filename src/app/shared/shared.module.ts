import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarpatientComponent } from './navbarpatient/navbarpatient.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NavbarpatientComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    NavbarpatientComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
