import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ServicePanelComponent } from './service-panel/service-panel.component';

import '@cds/core/icon/register.js';
import { ClarityIcons, trashIcon } from '@cds/core/icon';

ClarityIcons.addIcons(trashIcon);


@NgModule({
  declarations: [
    EditProfileComponent,
    UpdatepasswordComponent,
    ServicePanelComponent
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
