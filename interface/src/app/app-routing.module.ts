import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {   path : '' , loadChildren:
      ()=>import('./homepage/homepage.module').then(m => m.HomepageModule)  } ,

  {   path : 'results' , loadChildren:
      ()=>import('./results/results.module').then(m => m.ResultsModule)  }


] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})

export class AppRoutingModule { }
