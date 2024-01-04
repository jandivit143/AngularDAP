import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    template: `
        <br />
        <!-- <h3>Login Component string interpolation!</h3>
        Enter Username:- <input type="text" value="{{name}}" /><br />
        Enter Password:- <input type="password" value="{{password}}" /><br />
        <button type="button" (click)="login();">Login</button><br /> -->

        <!-- <h3>Login Component property binding with event handling!</h3>
        Enter Username:- <input type="text" [value]="name" #inputNM (change)="updateName(inputNM.value)" /><br />
        Enter Password:- <input type="password" [value]="password" /><br />
        <button type="button" (click)="login();">Login</button><br /> -->

        <!-- <h3>Login Component - Two Way Data Binding Syntax!</h3> -->
        <div class="text-center">
            <h3>Login Component</h3>
            Enter Username:- <input type="text" [(ngModel)]="name" /><br />
            Enter Password:- <input type="password" [(ngModel)]="password" /><br />
            <button type="button" class="btn btn-primary" style="margin-top: 5px;" (click)="login();">Login</button><br />
        </div>
        <br />
        <!-- <shared-sharedcomp></shared-sharedcomp> -->
    `
})

export class LoginComponent {
    name:string;
    password:string;
    constructor(private loginService:LoginService,
        private router:Router,
        private authService:AuthService,
        private adminService:AdminService) {
        this.name = 'Sachin';
        this.password = 'admin';
    }

    login(){
        console.log('User ' + this.name + ' logged in!');
        this.loginService.addUserName(this.name);

        // Navigate to the Products - Imperative code for navigation
        this.router.navigate(['/products']);
        this.authService.isUserLoggedIn = true;
        if(this.name == 'Abhijith'){
            this.adminService.isAdmin = true;
        }else{
            this.adminService.isAdmin = false;
        }
    }

    updateName(usrName:string){
        console.log('Inside updateName!');
        this.name = usrName;
    }
}