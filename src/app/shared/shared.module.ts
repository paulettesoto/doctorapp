import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarpatientComponent } from './navbarpatient/navbarpatient.component';
import '@cds/core/icon/register.js';
import { ClarityIcons, usersIcon,calendarIcon,worldIcon,userIcon,logoutIcon } from '@cds/core/icon';

ClarityIcons.addIcons(usersIcon);
ClarityIcons.addIcons(calendarIcon);
ClarityIcons.addIcons(worldIcon);
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(logoutIcon);

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
    FormsModule,
    AppRoutingModule
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
