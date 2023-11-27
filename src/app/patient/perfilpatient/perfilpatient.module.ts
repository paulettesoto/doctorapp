import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatepasswordpatientComponent } from './updatepasswordpatient/updatepasswordpatient.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UpdatepasswordpatientComponent,
    FavoritesComponent,
    UpdatedataComponent
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
export class PerfilpatientModule { }
