import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string;
  constructor(private httpClient:HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/users';
  }

  getAllUsers(){
    // Making an asynchronous call to the RESTFulService / Web API
    return this.httpClient.get<Array<any>>(this.url);
  }

  addUser(usr:any){
    return this.httpClient.post(this.url,JSON.stringify(usr),{headers:{'Content-Type':'application/json'}});
  }

  updateUser(usr:any){
    return this.httpClient.patch(this.url,JSON.stringify(usr),{headers:{'Content-Type':'application/json'}});
  }
}
