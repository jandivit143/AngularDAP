import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdmin:boolean;
  constructor() {
    this.isAdmin = false;
  }
  canActivateChild():boolean{
    if(this.isAdmin){
      return true;
    }else{
      return false;
    }
  }
}
