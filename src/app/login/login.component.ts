import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { employee } from '../datatype';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  isEmplogin=false;
  constructor(private empservice:EmployeeService){}
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.isEmplog();
 }
 
  Login(data:employee){
   
   this.empservice.LoginEMP(data);
}
Signup(data:any){

}
isEmplog(){
  if ( localStorage.getItem('LocalEmp') ){
    this.isEmplogin=true;
    this.empservice.Empreload();
  }
}
}

