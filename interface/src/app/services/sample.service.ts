import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

import { isDevMode } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SampleService {

  constructor(private http : HttpClient) {

      this.home_init() ;
      this.symptoms1_init() ;
      this.symptoms2_init() ;
      this.score_init() ;
      this.result_init() ;

  }

  reset_variables(){

    this.home_init() ;
    this.symptoms1_init() ;
    this.symptoms2_init() ;
    this.score_init() ;
    this.result_init() ;

  }

  negative = 'Negative' ;
  positive = 'Positive' ;

  //Items required in homepage
  public home_items : BehaviorSubject<[...any]> ;
  //      [age, gender, temperature]

  home_init(){
    let age :number ;
    let gender : string ;
    let temp : number ;

    this.home_items =  new BehaviorSubject([age , gender , temp ]) ;
  }

  getHomeItems(){
    return this.home_items.asObservable() ;
  }

  setHomeItems(values){
    return this.home_items.next(values) ;
  }

  //First Symptoms
  symptoms1 : BehaviorSubject<[...any]> ;
  //[{label : string , isChecked : boolean}]

  symptoms1_init(){

    let sp =  [

      { label : 'Breathing Problems' , isChecked : false  }  ,
      { label : 'Dry Cough' , isChecked : false } ,
      { label : 'Sore Throat' , isChecked : false } ,
      { label : 'Weakness' , isChecked : false } ,
      { label : 'Runny Nose' , isChecked : false  }  ,

    ]   ;

    this.symptoms1 =  new BehaviorSubject(sp) ;

  }

  getSymp1(){
    return this.symptoms1.asObservable() ;
  }

  setSymp1(values){
    return this.symptoms1.next(values) ;
  }


  //Second Symptoms

  symptoms2 : BehaviorSubject<[...any]> ;
  //[{label : string , isChecked : boolean}]

  symptoms2_init(){

    let sp = [

      { label : 'Abdominal pain' , isChecked : false  }  ,
      { label : 'Vomiting' , isChecked : false  }  ,
      { label : 'Diarrhea' , isChecked : false  }  ,
      { label : 'Chest pain or pressure' , isChecked : false  }  ,
      { label : 'Muscle pain' , isChecked : false  }  ,
      { label : 'Loss of taste Or smell' , isChecked : false  }  ,
      { label : 'Rash on skin or discoloration of fingers or toes' , isChecked : false  }  ,
      { label : 'Loss of speech or movement' , isChecked : false  }  ,

    ]   ;

    this.symptoms2 =  new BehaviorSubject(sp) ;

  }



  getSymp2(){
    return this.symptoms2.asObservable() ;
  }

  setSymp2(values){
    return this.symptoms2.next(values) ;
  }


  //Score for the assessment

  score : BehaviorSubject<number> ;

  score_init(){
    this.score  = new BehaviorSubject(0) ;
  }

  getScore(){
    this.totalScore() ;
    return this.score.asObservable() ;
  }

  setScore(value){
    return this.score.next(value) ;
  }


  //Final result
  result : BehaviorSubject<string> ;

  result_init(){
    this.result = new BehaviorSubject('') ;
  }

  getResult(){
    this.res_cal() ;
    return this.result.asObservable() ;
  }

  setResult(res){
    return this.result.next(res)  ;
  }



  //Get all the records
  getSamples(){

    let site =''  ;

    if(isDevMode()){

      site =  'http://localhost:3000/samples' + '/all' ;

    }else{

      site = 'samples/all'  ;

    }

    console.log(site) ;

    return this.http.get(site) ;
  }

  postSample() {

   let age=0 , gender='Male', temperature = 97 , score = 0 , result = 'Negative' ;

   this.getHomeItems().subscribe(data =>{
     [age, gender, temperature] = data ;
   });


   this.getScore().subscribe(data => score = data ) ;
   this.getResult().subscribe(data  =>  result = data) ;


    let bd = {
      age ,
      gender ,
      temperature ,
      score ,
      result

    } ;

    console.log(bd) ;

    let site =''  ;

    if(isDevMode()){

      site =  'http://localhost:3000/samples' + '/new' ;

    }else{

      site = 'samples/new'  ;

    }

    return this.http.post(site , bd ) ;

  }



  //Scores

  score1()  {

    let sc1 = 0 ;

    this.getHomeItems().subscribe(data =>{

      if(data[2]){

            if(data[2] > 100.9){
              sc1 = 2 ;
            }else{
              sc1 =   0 ;
            }

      }else{
        sc1 = 0 ;
      }

    }) ;

    return sc1 ;

  }

  score2(){

    let sc2 =0 ;

    this.getSymp1().subscribe(data => {

      let tr = data.filter(el => el.isChecked ) ;

      let len = tr.length ;

      if(len===0)
        sc2=0 ;

      else if(len===1){
        sc2 = 3 ;
      }
      else if(len>1){
        sc2 = (len-1) + 3 ;
      }


  });

    return sc2 ;


  }

  score3(){

    let sc3 = 0 ;

    this.getSymp2().subscribe(data => {

      let tr = data.filter(el => el.isChecked ) ;

      let len = tr.length ;

      if(len===0)
        sc3 = 0 ;

      else
        sc3 =  len * 2 ;

    });

    return sc3 ;


  }

  totalScore(){

    let s1 = this.score1() ;
    let s2 = this.score2() ;
    let s3 = this.score3() ;

    let total = s1 + s2 + s3 ;

    console.log('Total = ' + total) ;



    this.setScore(total) ;


  }

  //Calculate Result
  res_cal(){

    let res = '' ;

    let pos = this.positive ;
    let neg = this.negative ;

    this.getScore().subscribe(data =>{

      let score = data ;

      if(score<5){
        res = neg ;
      }

      else if(score>=5){
        res = pos ;
      }

    });

    this.setResult(res) ;

  }


}
