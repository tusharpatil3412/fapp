import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state :RouterStateSnapshot) => {
  const router=inject(Router);
  const token=localStorage.getItem('LocalAdmin');
  if(token){
    return true;
  }
  else{
    router.navigate(['']);
    return false
  }
};
export const empAuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state :RouterStateSnapshot) => {
  const router=inject(Router);
  const token=localStorage.getItem('LocalEmp');
  if(token){
    return true;
  }
  else{
    router.navigate(['']);
    return false
  }
};
