import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-users',
    template: `
        <div class="container">
            <div class="text-center">
                <h1 class="text-primary">HTTP Communication</h1>
            </div>
            <h3 class="text-warning" *ngIf="message">{{message}}</h3>
            <button class="btn btn-info" (click)="insertUser();">Add User</button>
            <table class="table table-striped" style="margin:20px;">
                <thead style="text-align: center;">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <tr *ngFor="let user of users;">
                        <td><p>{{user.id}}</p></td>
                        <td><p>{{user.name}}</p></td>
                        <td><p>{{user.username}}</p></td>
                        <td><p>{{user.email}}</p></td>
                        <td><button type="button" class="btn btn-primary" (click)="updateUser(user);">Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class UsersComponent implements OnInit, OnDestroy {
    message:string;
    users?:Array<any>;
    get_Sub?:Subscription;
    constructor(private usersService:UsersService) {
        this.message = 'Loading data, please wait.....'
    }

    ngOnInit() {
        this.get_Sub = this.usersService.getAllUsers().subscribe({
            next: (resData) => {
                this.users = [...resData];
                // console.log('the users are',this.users);
                // console.log('JSON.stringify',JSON.stringify(this.users));
                this.message = '';
            },
            error: (err: HttpErrorResponse) => {
                this.message = err.message;
            }
        });
    }

    insertUser(){
        let usr = {
            name: 'Sachin',
            username: 'Sachin T',
            email: 'sachin@cricket.com'
        }
        this.usersService.addUser(usr).subscribe(res => {
            console.log(res);
            alert(JSON.stringify(res));
        });
        // this.usersService.addUser(usr).subscribe({
        //     next: (resData) => {
        //         console.log('the resData is',resData);
        //         alert(JSON.stringify(resData));
        //     },
        //     error: (err: HttpErrorResponse) => {
        //         this.message = err.message;
        //     }
        // });
    }

    updateUser(usr:any){
        console.log('user is',usr);
        usr.name = 'Sachin';
        usr.username = 'Sachin T';
        usr.email = 'sachin@gmail.com';
        this.usersService.updateUser(usr).subscribe(res => {
            console.log(res);
            alert(JSON.stringify(res));
        })
    }

    ngOnDestroy(): void {
        // Free all the resources here before component is unmounted
        // Unsubscribing to the observable
        console.log('Freeing all the resources!');
        this.get_Sub?.unsubscribe();
    }
}