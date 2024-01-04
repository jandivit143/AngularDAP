import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-welcome',
    template: `
        <h1 style="margin: 30px;">Welcome <span class="display-6 text-danger">{{userName}}!</span></h1>
    `
})

export class WelcomeComponent {
    userName:string;
    constructor(private loginService:LoginService) {
        // Subscribing to the broadcaster
        this.loginService.loginBroadCaster.subscribe(res => {
            this.userName = res;
        })
        this.userName = this.loginService.getUserName();
    }
}