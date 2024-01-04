import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>Counter Child Component!</h1>
        <h3>{{counter}}</h3>
    `
})

export class CounterComponent {
    counter:number;
    constructor() {
        this.counter = 0;
    }
    increment(){
        this.counter++;
    }
    decrement(){
        this.counter--;
    }
}