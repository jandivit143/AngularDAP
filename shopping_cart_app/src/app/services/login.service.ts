import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usrName:string;
  
  // Subject
  private loginSource = new Subject<string>();
  // Broadcaster
  loginBroadCaster = this.loginSource.asObservable();

  constructor() {
    this.usrName = '';
  }

  addUserName(usrNm:string){
    this.usrName = usrNm;
    
    // Notify to all the subscribers
    this.loginSource.next(this.usrName);
  }

  getUserName(){
    return this.usrName;
  }
}
