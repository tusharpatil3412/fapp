import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { employee } from '../app/datatype';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(private empService:EmployeeService,private Rout:Router){}
  addEmployee(emp:employee ){
  
    console.warn(emp)
    this.empService.addEmp(emp).subscribe((result)=>{
      if(result){
        this.Rout.navigate(['/Admin/employee'])
      }
    })
  }
}
