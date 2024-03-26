import { Component, OnInit } from '@angular/core';
import { employee, record } from '../app/datatype';
import { RecordsService } from '../app/services/records.service';
import { EmployeeService } from '../app/services/employee.service';
import { DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-admindefaultroute',
  standalone: true,
  imports: [DatePipe,NgStyle],
  templateUrl: './admindefaultroute.component.html',
  styleUrl: './admindefaultroute.component.css'
})
export class AdmindefaultrouteComponent implements OnInit {
    arr:employee[]=[];
    recordarr:record[]=[];
    modelrecord:record |undefined;
    checkout=false;
    workinkTime=0;
    constructor(private record: RecordsService,private empservice:EmployeeService){

    }
    ngOnInit(): void {
      this.todayrecord();
    }
    todayrecord(){
      this.record.todayrecords().subscribe((result:record[])=>{
     
        result.forEach(element => {
           this.empservice.employeebyid(element.emp_Id).subscribe((r)=>{
         this.arr?.push(r);
         this.recordarr?.push(element)
          // console.warn(element.emp_Id);
         }
           );
         });
      //   console.warn(this.arr);
      })
   
    }
    model(id:any){

    this.modelrecord=this.recordarr[id]
    if(this.modelrecord.checkout){
      this.checkout=true;
      const checkInTime = new Date(this.modelrecord.checkin);
      const currentTime = new Date(this.modelrecord.checkout);
      const diffMilliseconds = currentTime.getTime() - checkInTime.getTime();
      const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
      this.workinkTime= Number(`${diffHours}`)*10;
    }else{
      const checkInTime = new Date(this.modelrecord.checkin);
      const currentTime = new Date();
      const diffMilliseconds = currentTime.getTime() - checkInTime.getTime();
      const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
      this.workinkTime= Number(`${diffHours}`)*10;
    }
    
    }
}
