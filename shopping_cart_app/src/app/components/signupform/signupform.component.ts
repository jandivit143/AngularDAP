import { Component } from '@angular/core';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {
  user = {
    name: 'Sachin',
    phone: '9876543210',
    address: 'India',
    email: 'sachin@cricket.com'
  }

  postForm(data:any){
    alert('Form submitted:- ' + JSON.stringify(data));
  }

  setValues(){
    this.user.name = 'Rahul';
    this.user.phone = '9844567321';
    this.user.address = 'Dubai';
    this.user.email = 'rahul@cricket.com';
  }
}
