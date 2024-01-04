import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // here i would be having authentication logic
  // JWT token and so on
  isUserLoggedIn:boolean;
  constructor() {
    this.isUserLoggedIn = false;
  }
  canActivate():boolean{
    if(this.isUserLoggedIn){
      return true;
    }else{
      return false;
    }
  }
}
