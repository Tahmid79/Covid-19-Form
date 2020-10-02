import { Component, OnInit } from '@angular/core';
import {SampleService} from '../../services/sample.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(private service : SampleService) { }

  ngOnInit(): void {
    this.service.getSamples().subscribe(data =>{
      this.records = data ;
    })
  }

  records : any = [] ;


}
