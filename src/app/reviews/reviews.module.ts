import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { ReviewsComponent } from './reviews/reviews.component';
import '@cds/core/icon/register.js';
import { ClarityIcons, fastForwardIcon, rewindIcon, starIcon} from '@cds/core/icon';


ClarityIcons.addIcons(starIcon,fastForwardIcon,rewindIcon);



@NgModule({
  declarations: [
    ReviewsComponent
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
export class ReviewsModule { }
