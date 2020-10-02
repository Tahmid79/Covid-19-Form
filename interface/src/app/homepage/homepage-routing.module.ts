import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import {FeedbackComponent} from './feedback/feedback.component';

const routes: Routes = [

  {  path : '' , component : HomeComponent  } ,
  {  path : 'second' , component : SecondComponent  } ,
  {  path : 'third' , component : ThirdComponent  } ,
  {  path : 'feedback' , component: FeedbackComponent }

] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomepageRoutingModule { }
