import { Component, OnInit , ElementRef , AfterViewInit } from '@angular/core';
import {SampleService} from '../../services/sample.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {




  constructor(private service : SampleService , private router : Router , private _elementRef : ElementRef) {

  }


  ngOnInit(): void {

    this.service.getHomeItems().subscribe(data =>{

      [this.age , this.checked , this.temp] = data ;

    });

  }


  ngAfterViewInit(): void {

    this.setCheckbox() ;

  }


  fields = ['Male' , 'Female'] ;

  checked = '' ;

  age : number ;
  temp : number ;

   s1 = false ;

  gnd(event){

    this.checked = event.target.value ;

  }

  next(){
    this.service.setHomeItems(   [this.age , this.checked , this.temp] ) ;

    this.router.navigate(['second']) ;

  }

  validate(){

    let res = this.check() ;

    if(res){
      this.next() ;
    }else{
      this.s1 =  false ;
      alert('Please enter valid data') ;
    }

  }

  check(){

    let c1 = this.age >0  && this.age<=120 ;
    let c2 = this.checked==='Male' ||  this.checked==='Female' ;
    let c3 = this.temp>=90  &&   this.temp <=110 ;

    return (c1 && c2 && c3) ;

  }

  setCheckbox(){

    let mch = this._elementRef.nativeElement.querySelector(`#Male`);
    let fch = this._elementRef.nativeElement.querySelector(`#Female`);


    if(this.checked==='Male'){
      mch.checked = true ;
    }

    else if(this.checked==='Female'){
      fch.checked = true ;
    }
  }




}

