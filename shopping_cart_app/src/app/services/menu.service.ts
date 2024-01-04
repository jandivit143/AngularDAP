import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: string[];
  constructor() {
    // Here is the place where you can make RESTFul Service call and fetch the Menu Items
    this.menuItems = ['Login', 'Greet', 'Products', 'CartDetails', 'Profile', 'Users', 'SignupForm', 'ReactiveForm', 'Pipes', 'ViewChild', 'Hooks'];
  }
}
