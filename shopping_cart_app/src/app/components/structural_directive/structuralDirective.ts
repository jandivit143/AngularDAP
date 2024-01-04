import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
    selector: 'app-structural',
    template: `
        <h1 class="text-danger">Fruits</h1>
        <!-- Structural Directive called as *ngIf -->
        <ul class="list-unstyled" *ngIf="canShow">
            <li *ngFor="let fruit of fruits; index as i; first as isFirst; even as isEven; odd as isOdd; last as isLast;"><span>{{i}} {{fruit}} {{isFirst}} {{isLast}} {{isEven}} {{isOdd}}</span></li>
        </ul>
        <hr />
        <ul class="list-unstyled">
            <li *ngFor="let user of users; index as i;">
                {{user.id}} {{user.name}} {{user.city}}
            </li>
        </ul>
        <hr />
        <div [ngSwitch]="dayOfTheWeek">
            <div *ngSwitchCase=0>
                <h3>Today is Sunday! You deserve a break!</h3>
            </div>
            <div *ngSwitchCase=1>
                <h3>Today is Monday, Hope you have productive week!</h3>
            </div>
            <div *ngSwitchCase=2>
                <h3>Today is Tuesday, Smash your goals!</h3>
            </div>
            <div *ngSwitchCase=3>
                <h3>Today is Wednesday, You're already half way through!</h3>
            </div>
            <div *ngSwitchCase=4>
                <h3>Today is Thursday, It's like Friday Lite!</h3>
            </div>
            <div *ngSwitchCase=5>
                <h3>Today is Friday, TGIF!</h3>
            </div>
            <div *ngSwitchCase=6>
                <h3>Today is Saturday! Let's Party!</h3>
            </div>
        </div>
    `,
    styles: []
})

export class StructuralDirectiveComponent {
    canShow: boolean;
    fruits: string[];
    users: User[];
    dayOfTheWeek: number;
    constructor() {
        this.canShow = true;
        this.fruits = ["Apple", "Mango", "Grapes", "Banana"];
        this.users = [
            { id: 100, name: "Sachin", city: "Mumbai" },
            { id: 200, name: "Rahul", city: "Bengaluru" },
            { id: 300, name: "Sourav", city: "Kolkata" },
            { id: 400, name: "Yuvi", city: "Chandigarh" },
            { id: 500, name: "Mahi", city: "Ranchi" }
        ];
        this.dayOfTheWeek = new Date().getDay();
    }
}