import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpCheckIn, employee } from '../datatype';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private route: Router) { }
  allemployee() {
    return this.http.get<employee[]>('https://localhost:7102/api/Employe');

  }
  LoginEMP(Edata: employee) {

    // console.warn(Edata)
    this.http.post('https://localhost:7102/api/Employe/login', Edata).subscribe((result) => {
      if (result) {

        localStorage.setItem('LocalEmp', JSON.stringify(result));

        this.Empreload()
      }
    })

  }
  Empreload() {
    this.route.navigate(['/empHome']);
  }
  
  employeebyid(id: number) {
    return this.http.get<employee>(`https://localhost:7102/api/Employe/${id}`)
  }
  EmpCheckIn(emp_Id:EmpCheckIn){
     
 return emp_Id && this.http.post('https://localhost:7102/api/Record',emp_Id)
  }
   EmpCheckOut(emp_Id:number){
     console.warn(emp_Id)
     if(emp_Id){
    return  this.http.post(`https://localhost:7102/api/Record/checkout?EmpId=${emp_Id}`,emp_Id);
   
     }
     return null;
}
addEmp(emp:employee){
     
  return emp && this.http.post<boolean>('https://localhost:7102/api/Employe',emp)
   }
}
