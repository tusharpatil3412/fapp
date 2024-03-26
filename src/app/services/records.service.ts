import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { daterecord, record } from '../datatype';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor( private http:HttpClient,private emp:EmployeeService) { }
  todayrecords(){
  return   this.http.get<record[]>("https://localhost:7102/api/Record/Today");
  }
  TodayEmpRecord(emp_Id:number){
  return this.http.get<record>(`https://localhost:7102/api/Record/TodayByEmpId/${emp_Id}`);
   
  }
  emprecords(emp_Id:number){
    return this.http.get<record[]>(`https://localhost:7102/api/Record/ByEmpId/${emp_Id}`)
  }
  // emprecordsbydate(record:daterecord){
  //   console.warn(record)
  //   return this.http.post<record[]>("https://localhost:7102/api/Record/recordsByRange",record)
  // }
  emprecordsbydate(record:daterecord){
    console.warn(record)
    return this.http.get<record[]>(`https://localhost:7102/api/Record/getRecordsByRange?empid=${record.Emp_Id}&startdt=${record.startDt}&enddt=${record.endDt}`)
  }
  allrecords(){
    return this.http.get<record[]>("https://localhost:7102/api/Record");
  }
}
