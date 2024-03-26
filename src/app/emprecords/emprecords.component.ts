import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';
import { daterecord, record } from '../datatype';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emprecords',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './emprecords.component.html',
  styleUrl: './emprecords.component.css'
})
export class EmprecordsComponent implements OnInit{
  
  Id=0;
  recordArr:undefined|record[]
  startDt:string ="dd-mm-yyyy";
  endDt:string="dd-mm-yyyy";
  records:daterecord= { startDt: '', endDt: '', Emp_Id: 0 };
  constructor(private recordService:RecordsService){
  
    
  }
  ngOnInit(): void {
    this.reloadUser();
    this.recordService.emprecords(this.Id).subscribe((result)=>{
     this.recordArr=result
     console.warn(this.recordArr)
    })
  }
  reloadUser(){
  
    if (localStorage.getItem('LocalEmp') ){
         
      let localdata=localStorage.getItem('LocalEmp');
      let makestr=localdata && JSON.parse(localdata);    
      this.Id=makestr.id;
    }
  }
  getrecorddate(){

    this.records.startDt=this.startDt;
    this.records.endDt=this.endDt;
    this.records.Emp_Id=this.Id;
    this.recordService.emprecordsbydate(this.records).subscribe((result)=>{
     this.recordArr=result
    })
  
  }
}
