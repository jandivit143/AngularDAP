import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-profile',
    template: `
        <div style="text-align: center;">
            <h1>In Child's Component!</h1>
            <h3>Profile Name:- {{profileName}}!</h3>

            <!-- One way data binding - property binding -->
            <!-- <input type="text" [value]="profileName" /> -->

            <!-- Two way data binding - ngModel -->
            <input type="text" [(ngModel)]="profileName" />

            <button type="button" class="btn btn-success" style="margin-left: 10px;" (click)="updateName();">Update</button>
        </div>
    `,
    styles:[`
        h1, h3{
            color: green;
            text-align: center;
        }
    `]
})

export class ProfileComponent {

    @Input()
    profileName:string;

    @Output()
    update:EventEmitter<string>;

    constructor() {
        this.profileName = 'Abhijith';
        this.update = new EventEmitter<string>();
    }

    updateName(){
        // Raise the update event of profile component with event data
        this.update.emit(this.profileName);
    }
}