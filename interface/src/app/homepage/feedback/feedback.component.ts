import { Component, OnInit } from '@angular/core';
import {SampleService} from '../../services/sample.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})


export class FeedbackComponent implements OnInit {

  constructor(private service : SampleService) {

  }

  ngOnInit(): void {

    this.service.getResult().subscribe(data =>{
      this.result = data ;
    }) ;

    this.service.getScore().subscribe(data =>{
      this.score = data ;
    }) ;



  }

  score ;
  result ;

  phones = ['01998451' ,  '01286456' , '01398496'] ;


  adv1 = 'There is a minor possibility for the patient to be affected by Covid-19 although it is highly unlikely.' +
    ' The patient is requested to self-isolate and contact a doctor for advice.' ;

  adv2 = "Possible suspected case of Covid-19. The patient is requested to self-isolate and seek advice from a doctor." ;

  adv3 = "High likelihood of being affected by Covid-19. The patient is requested to self-isolate and immediately seek help from a doctor." ;

  adv4 = "The patient is nearly confirmed to be affected by Covid-19. The patient is highly advised to self-isolate , seek a doctor immediately and be admitted to a hospital." ;


  btn  =  true ;

  getAdvice(){

    let [a1,a2,a3,a4] = [this.adv1 , this.adv2 , this.adv3 , this.adv4] ;
    let sc = this.score ;

    if(sc<5){
      return a1 ;
    }

    else if(sc===5){
      return a2 ;
    }

    else if(sc>5 && sc<=7){
      return a3 ;
    }

    else if(sc>7){
      return a4 ;
    }


  }


  post(){

    this.service.postSample().subscribe({
      next : value => {

        console.log(value) ;
        this.btn = false ;

        this.service.reset_variables() ;

        //setTimeout(()=>{} , 200) ;
        //alert('Successful' ) ;

      }  ,

      error : err => {

        alert('Error') ;
        console.log(err) ;

      }



    })

  }


}
