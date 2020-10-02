import { Component, OnInit } from '@angular/core' ;
import {Router} from '@angular/router';
import {SampleService} from '../../services/sample.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {

  constructor(private service : SampleService , private router : Router ) {

  }

  ngOnInit(): void {

    this.service.getSymp1().subscribe(data =>{
      //console.log(data) ;
      this.symptoms1 = data ;

    });

  }

  symptoms1 = [] ;


  s1 = false ;


  back(){
    this.service.setSymp1(this.symptoms1) ;

    this.router.navigate(['']) ;
  }

  next(){
    this.service.setSymp1(this.symptoms1) ;

    this.router.navigate(['third']) ;

  }




  setSymp1(event , label){

    var s1 = this.symptoms1 ;

    for(let symp of s1){
      if(symp.label===label){
        symp.isChecked = !symp.isChecked  ;
      }
    }

    this.symptoms1 = s1 ;
    //console.log(this.symptoms1) ;
    //console.log(event.target.value) ;

    this.service.setSymp1(this.symptoms1) ;


  }

  getSymp1(){
    var str = '' ;

    this.symptoms1.map(symp =>{

      if(symp.isChecked===true){
        str += ' ' + symp.label
      }

    });

    return str ;


  }




}
