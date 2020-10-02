import { Component, OnInit } from '@angular/core' ;
import {Router} from '@angular/router'  ;
import {SampleService} from '../../services/sample.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private service : SampleService , private router : Router) {

  }

  ngOnInit(): void {

    this.service.getSymp2().subscribe(data=>{
      this.symptoms2 = data ;
    });

    this.service.getScore().subscribe(data =>{
      this.score = data ;
    });

    this.service.getResult().subscribe(data =>{
        this.result = data ;
    });

  }

  symptoms2 = [

  ]   ;

  s1 = false ;

  setSymp2(event, label){

    let arr = this.symptoms2 ;

    for(let symp of arr){
      if(symp.label===label){
        symp.isChecked = !symp.isChecked ;
      }
    }

    this.symptoms2 = arr ;

    this.service.setSymp2(this.symptoms2) ;
    this.service.totalScore() ;


  }

  getSymp2(){
    let str = '' ;

    for(let symp of this.symptoms2){
      if(symp.isChecked===true){
        str = str + ' ' + symp.label ;
      }
    }

    return str ;

  }


  back(){
    this.router.navigate(['second']) ;
  }

  next(){
    this.router.navigate(['feedback']) ;
  }

  score ;

  result ;

}
