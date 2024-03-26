import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
   menutype="default";
   AdminName="";
   empName="";
   count=0;
   activeLink: string = 'empHome';
   constructor(private route:Router){

   }
  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((result: any) => {
      if (result.url) {
        if (localStorage.getItem('LocalAdmin') && (result.url.includes('Admin' ) || result.url.includes('employee' ) )) {
         
         this.menutype = 'Admin'
          let localdata=localStorage.getItem('LocalAdmin');
          let makestr=localdata && JSON.parse(localdata);
          
         this.AdminName=makestr.username;
            }
        else if(localStorage.getItem('LocalEmp') && (result.url.includes('empHome') || result.url.includes('emprecord' ))){
          this.menutype = 'employee'
          let localdata=localStorage.getItem('LocalEmp');
          let makestr=localdata && JSON.parse(localdata);
          
         this.empName=makestr.first_Name;
       
        }
       
         else {
        
          this.menutype = 'default'
     
        }

      }
    })

}
Adminlogout(){
  localStorage.removeItem('LocalAdmin');
  this.route.navigate([''])
}
Emplogout(){
  localStorage.removeItem('LocalEmp');
  this.route.navigate(['/employee'])
}
}
