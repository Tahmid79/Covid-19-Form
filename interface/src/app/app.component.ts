import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interface';


  disclaimer= "This Covid-19 self-assessment is for software development purpose only and may not" +
    " yield actual results. The data provided here will not be disclosed anywhere." ;

}
