import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable, Subscription,interval  } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit,OnDestroy{
  adminName='';
  time$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
  private sub!: Subscription;
  
   ngOnInit(): void {
    if (localStorage.getItem('LocalAdmin') ){
         
      
       let localdata=localStorage.getItem('LocalAdmin');
       let makestr=localdata && JSON.parse(localdata);
       
      this.adminName=makestr.username;
   }
   this.sub = this.time$.subscribe(currentTime => {
    currentTime; // Log the current time every second
  });
}
ngOnDestroy(): void {
  this.sub.unsubscribe();
}

}
