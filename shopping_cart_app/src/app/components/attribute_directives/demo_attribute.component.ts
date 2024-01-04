import { Component } from '@angular/core';

@Component({
    selector: 'app-attribute',
    template: `
    <h1>Demo Attribute Directives!</h1>
    <div>
    <!-- <div [hidden]="!flag"> -->
        <h3 class="blue bg-green">Hello There!</h3>

        <h3 [ngClass]="['blue', 'bg-green']">Hello NgClass!</h3>
        <h3 [ngClass]="{'blue':true, 'bg-green':false}">Hello NgClass!</h3>
        <h3 [ngClass]="{'blue':false, 'red':true, 'bg-green':false}">Hello NgClass!</h3>
        <h3 [ngClass]="{'blue':false, 'red bg-green':true}">Hello NgClass!</h3>
        <h3 [ngClass]="flag == false ? 'red' : 'blue bg-green'">Hello NgClass!</h3>

        <hr />

        <h3 [ngStyle]="{'background-color':'aqua'}">Hello {{name}}!</h3>
        <h3 [ngStyle]="{'display':name ? 'block' : 'none'}">Hello {{name}}!</h3>
        <h3 [ngStyle]="{'color':name ? 'indigo' : 'green'}">Hello {{name}}!</h3>
        <h3 *ngIf="name else elseBlock">Hello {{name}}!</h3>
        <ng-template #elseBlock><h3>No name is assigned!</h3></ng-template>
    </div>
    `,
    styles:[`
    h1{
        color: indigo;
    }
    .blue{
        color: blue;
    }
    .red{
        color: red;
    }
    .bg-green{
        background-color: lightgreen;
    }
    `]
})

export class AttributeDirectiveComponent{
    /**
     * Attribute Directives - change the appearance or behaviour of an element, component or another directive
     * 
     * NgClass - Adds and removes a set of CSS classes
     * NgStyle - Adds and removes a set of HTML styles
     * NgModel - Add two-way data binding to an HTML Form Element
     */
    flag:boolean;
    name:string;
    constructor() {
        this.flag = true;
        this.name = 'Sachin';
    }
}