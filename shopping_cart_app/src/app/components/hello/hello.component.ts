import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  // model
  message: string;
  constructor(){
    // controller
    this.message = "Hello All!";
  }
}
