import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipes',
    template: `
        <div style="text-align: center; margin: 30px;">
            <h1 class="display-3 text-info">Demo Pipes!</h1>
            <!-- <h2 class="text-success">{{name}}</h2>
            <h2 class="text-success">{{name | lowercase}}</h2>
            <h2 class="text-success">{{name | uppercase}}</h2>
            <h2 class="text-success">{{name | titlecase}}</h2> -->

            <!-- <h2 class="text-warning">{{num}}</h2>
            <h2 class="text-warning">{{num | number}}</h2>
            <h2 class="text-warning">{{num | number:'1.1-2'}}</h2>
            <h2 class="text-warning">{{num | number:'1.4-6'}}</h2> -->

            <!-- <h2 class="text-danger">{{no}}</h2>
            <h2 class="text-danger">{{no | percent}}</h2>
            <h2 class="text-danger">{{no | percent:'3.1-2'}}</h2> -->

            <!-- <h2 class="text-danger">{{person}}</h2>
            <h2 class="text-danger">{{person | json}}</h2> -->

            <!-- <h2 class="text-info">{{today}}</h2>
            <h2 class="text-info">{{today | date}}</h2>
            <h2 class="text-info">{{today | date:'shortTime'}}</h2>
            <h2 class="text-info">{{today | date:'fullDate'}}</h2>
            <h2 class="text-info">{{today | date:'fullDate' | uppercase}}</h2>
            <h2 class="text-info">{{today | date:'long'}}</h2>
            <h2 class="text-info">{{today | date:'dd-MM-yyyy hh:mm:ss'}}</h2>
            <h2 class="text-info">{{today | date:'dd-MMM-yyyy hh:mm:ss'}}</h2>
            <h2 class="text-info">{{today | date:'MMM-dd-yyyy hh:mm:ss'}}</h2> -->

            <h2 class="text-danger">flag: {{flag}}</h2>
            <h2 class="text-danger">{{today | date:format}}</h2>
            <div class="myTesting">
                <button class="btn btn-success" (click)="toggleButton();">{{!flag}}</button>
                <button class="btn btn-info" (click)="toggleButton();">{{flag ? 'Show Short Date!':'Show Full Date!'}}</button>
                <!-- Here we are using custom pipe caption! -->
                <button class="btn btn-warning" (click)="toggleButton();">{{flag | caption}}</button>

                <div>
                    <label for="">Search Name, which starts with</label>
                    <input type="text" class="form-control" [(ngModel)]="by">
                </div>

                <ul class="list-group" *ngIf="people">
                    <li class="list-group-item text-warning bg-black"
                    *ngFor="let person of people | filter: by">
                        {{person}}
                    </li>
                </ul>
            </div>
        </div>
    `,
    styles:[`
        .myTesting > button{
            margin: 5px;
        }

        input[type=text]{
            width:400px;
            height:auto;
            background-color:palegreen;
        }
    `]
})

export class DemoPipesComponent implements OnInit {
    name:string;
    num:number;
    no:number;
    person:{id:number,name:string,address:{city:string,pin:number}};
    today:Date;
    flag:boolean;
    people:string[];
    by:string;
    constructor() {
        this.name = 'saChin tenDULkaR';
        this.num = Math.PI;
        this.no = 0.5434;
        this.person = {id:101,name:'Abhijith',address:{city:'Hyderabad',pin:500050}};
        this.today = new Date();
        this.flag = true;
        this.people = ['Amit','Pramod','Priyanka', 'Chetan', 'Rajini', 'Ramdas', 'Dhiraj', 'Manasi', 'Chandrashekar', 'Pallavi'];
        this.by ='';
    }

    get format(){
        return this.flag && 'fullDate' || 'shortDate';
    }

    toggleButton(){
        this.flag = !this.flag;
    }

    ngOnInit() { }
}