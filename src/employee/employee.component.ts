import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../app/services/employee.service';
import { employee } from '../app/datatype';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
 emp:undefined |employee[];
constructor(private empservice:EmployeeService){

}
  ngOnInit(): void {
    this.emplist();
  }
  emplist(){
    this.empservice.allemployee().subscribe((result)=>{
      this.emp=result;
  
    })
  }
}
