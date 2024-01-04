import { Component } from '@angular/core';
import Product from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cartdetails',
    template: `
        <h1 align="center">Cart Details</h1>
        <div class="container">
            <table border="3px solid black" align="center" class="table" style="width: 299px;" align="center">
                <thead style="text-align: center; background-color: peachpuff; font-weight: bold;">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Product Image</th>
                    <th>Category</th>
                    <th>Action</th>
                </thead>
                <tbody style="text-align: center;">
                    <tr *ngFor="let product of cartProducts">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>Rs. {{product.price}} /-</td>
                        <td><img [src]="product.imgPath" [alt]="product.name" /></td>
                        <td>{{product.category}}</td>
                        <td><button type="button" class="btn btn-danger" (click)="removeProduct(product);">Remove</button></td>
                    </tr>
                </tbody>
            </table>
            <!-- <button type="button" (click)="getData();">Get Data</button> -->
        </div>
    `,
    styles:[`
        img{
            width: auto;
            height: 130px;
        }
    `],
    //providers:[CartService]
})

export class CartDetailsComponent {
    cartProducts:Product[] = [];
    constructor(private cartService:CartService) {
        this.cartService.cartBroadCaster.subscribe(res => {
            this.cartProducts = JSON.parse(res);
        })
        this.cartProducts = this.cartService.getCartItems();
    }
    
    // getData(){
    //     this.cartProducts = this.cartService.getCartItems();
    // }

    removeProduct(product:Product){
        this.cartService.removeFromCart(product);
        // this.cartService.cartBroadCaster.subscribe(res => {
        //     this.cartProducts = this.cartService
        // })
    }
}