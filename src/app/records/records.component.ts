import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';
import { record } from '../datatype';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [DatePipe,NgStyle],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent implements OnInit {
  recordarr:record[]=[];
  filter=false;
  constructor(private recordS:RecordsService){}
  ngOnInit(): void {
    this.reloadrecord();
  }
  reloadrecord(){
    this.recordS.allrecords().subscribe((result)=>{
      this.recordarr=result
    })
  }
  filterOn(){
    if(this.filter){
    this.filter=false;
    }else{
      this.filter=true;
    }
    console.warn(this.filter)
  }

}
