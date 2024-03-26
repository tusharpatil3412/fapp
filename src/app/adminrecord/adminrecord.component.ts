import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordsService } from '../services/records.service';
import { daterecord, record } from '../datatype';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminrecord',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './adminrecord.component.html',
  styleUrl: './adminrecord.component.css'
})
export class AdminrecordComponent implements OnInit {
  recordArr:record[]=[];
  startDt:string ="dd-mm-yyyy";
  endDt:string="dd-mm-yyyy";
  records:daterecord= { startDt: '', endDt: '', Emp_Id: 0 };
constructor(private activeid:ActivatedRoute,private recordS:RecordsService){}
ngOnInit(): void {
  this.reloadrecord();
}
reloadrecord(){
  let v=this.activeid.snapshot.paramMap.get('id');

  this.recordS.emprecords(Number(v)).subscribe((result)=>{
    this.recordArr=result;
  });
 
}
getrecorddate(){

  this.records.startDt=this.startDt;
  this.records.endDt=this.endDt;

  this.records.Emp_Id=Number(this.activeid.snapshot.paramMap.get('id'));
  console.warn(this.records)
  this.recordS.emprecordsbydate(this.records).subscribe((result)=>{
   this.recordArr=result
  })

}
}
