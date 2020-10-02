import { NgModule } from '@angular/core'  ;
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module' ;
import { HomeComponent } from './home/home.component' ;
import {FormsModule} from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [HomeComponent, SecondComponent, ThirdComponent, FeedbackComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule
  ]
})

export class HomepageModule { }
