import { Component } from '@angular/core';

@Component({
    selector: 'app-hi',
    template: `
    <h1>Just to say Hi</h1>`,
    styles: [`
        h1{
            color: red;
            background-color: palegreen;
            margin: auto;
            text-align: center;
        }
    `]
})

export class HiComponent {
    constructor() { }
}