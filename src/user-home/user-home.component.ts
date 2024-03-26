import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../app/services/employee.service';
import { EmpCheckIn, employee, record } from '../app/datatype';
import { RecordsService } from '../app/services/records.service';

import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit,OnDestroy {
  EmpName=""
  Employee: EmpCheckIn ={emp_id:0};
 
  CheckInTime:string="";
  CheckOutTime:string=""
  workingTime="";
  ischechIn=false;
  ischeckOut=false;
  intervalId: any; // Variable to hold the interval ID

  constructor(private empservice:EmployeeService,private recordService:RecordsService){
    
  }

  ngOnInit(): void {

    this.reloadUser();
   
    this.startTimer(); // Start the timer when the component initializes
    
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  reloadUser(){
  
    if (localStorage.getItem('LocalEmp') ){
         
      let localdata=localStorage.getItem('LocalEmp');
      let makestr=localdata && JSON.parse(localdata);    
      this.EmpName=makestr.first_Name;
  if (this.Employee) {
  this.Employee.emp_id=makestr.id;
  }
  this.isCheckInEmp();
}
}
 
  isCheckInEmp(){

    this.recordService.TodayEmpRecord(this.Employee.emp_id).subscribe((result:any)=>{
   console.warn(result)
   
      if(result !=null){
        this.ischechIn=true;
        
        this.CheckInTime=result[0].checkin;
      //  this.calculateWorkingTime();
      
      if( result[0].checkout!=null){
        clearInterval(this.intervalId);
        this.ischeckOut=true;
        this.CheckOutTime=result[0].checkout
        
      }
      
      this.calculateWorkingTime();
      
    }})
  }
  calculateWorkingTime() {
    
    if (this.ischechIn && !this.ischeckOut ) { // Check if user has checked in and CheckInTime is available
      
      const checkInTime = new Date(this.CheckInTime);
      const currentTime = new Date();
      const diffMilliseconds = currentTime.getTime() - checkInTime.getTime();
      const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const diffSeconds = Math.floor((diffMilliseconds % (1000 * 60)) / 1000);
      this.workingTime = `${diffHours} H ${diffMinutes} M ${diffSeconds} S`;
  
    }else{
      const checkInTime = new Date(this.CheckInTime);
      const currentTime = new Date(this.CheckOutTime);
      const diffMilliseconds = currentTime.getTime() - checkInTime.getTime();
      const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const diffSeconds = Math.floor((diffMilliseconds % (1000 * 60)) / 1000);
      this.workingTime = `${diffHours} H ${diffMinutes} M ${diffSeconds} S`;
    }
  }
  
startTimer() {

  this.intervalId = setInterval(() => {
    if(this.ischechIn){
    this.calculateWorkingTime();
    }
  }, 1000); // Call calculateWorkingTime every second (1000 milliseconds)
}

  checkIn(){

    console.warn(this.Employee.emp_id)
    if (!this.ischechIn) {
      this.empservice.EmpCheckIn(this.Employee).subscribe((result) => {
        this.ischechIn=true;
        this.isCheckInEmp();
      });
  }
}
  checkOut(){
    if(this.ischechIn){
    clearInterval(this.intervalId);
    this.empservice.EmpCheckOut(this.Employee.emp_id)?.subscribe((result)=>{
      this.ischeckOut=true;
      const currentTime = new Date();
   
      this.CheckOutTime= currentTime.toString();

    })
  }
  
  }
}
