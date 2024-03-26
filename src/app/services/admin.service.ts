import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from '../datatype';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdminLogin = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private rout: Router) { }
  
  adminsignup(Adata: admin) {
    this.http.post('https://localhost:7102/api/Admin', Adata, { observe: 'response' }).subscribe((result) => {
      if (result && result.body) {

        localStorage.setItem('LocalAdmin', JSON.stringify(result.body));
        this.isAdminLogin.next(true)
        this.rout.navigate(['/Admin']);
      }

    })

  }
  adminLogin(Adata:admin){
    this.http.post('https://localhost:7102/api/Admin/login',Adata,{observe:'response'}).subscribe((result)=>{
      if (result && result.body) {

        localStorage.setItem('LocalAdmin', JSON.stringify(result.body));
        this.isAdminLogin.next(true);
      this.adminReload();
    }
    });
  }
  adminReload() {
    this.rout.navigate(['/Admin']);
  }
}
