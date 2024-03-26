import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { admin } from '../datatype';
import { AdminService } from '../services/admin.service';
import { BehaviorSubject } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
   
   account=false;
  constructor(private adminservice:AdminService){

  }
  ngOnInit(): void {
    if(localStorage.getItem('LocalAdmin')){
      this.adminservice.adminReload();
    }
  }
  
  openLogin(){
    this.account=true;
  }

  openSignup(){
    this.account=false;
  }
  Signup(data:admin){
      this.adminservice.adminsignup(data)
  }
  Login(data:admin){
       this.adminservice.adminLogin(data)
      
}
}
