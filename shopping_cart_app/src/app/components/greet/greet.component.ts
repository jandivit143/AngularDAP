import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  greetMsg: string;
  isDisabled: boolean;
  constructor(){
    this.greetMsg = "Welcome to Zensar!";
    this.isDisabled = false;
  }
}
