import { Component, OnInit } from '@angular/core';
import JustProduct from 'src/app/justproduct';

@Component({
    selector: 'app-hooks',
    template: `
        <div style="text-align: center;">
            <h1>Parent Hook Component!</h1>
            <!-- Input for string -->
            <input type="text" (blur)="handleData($event);">

            <!-- Simple form for JustProduct -->
            <h3>Simple Form!</h3>
            <p>Product Name: <input type="text" [(ngModel)]="name" /></p>
            <p>Product Price: <input type="number" [(ngModel)]="price" /></p>
            <p>Product Countrymade:
                <select name="cars" id="cars" [(ngModel)]="countryMade">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="finland">Finland</option>
                </select>
            </p>
            <p><button type="button" (click)="updateProduct();">Update Product!</button></p>

            <!-- <app-hook-child [parentData]="data"></app-hook-child> -->
            <app-hook-child [parentData]="data" [product]="product"></app-hook-child>
        </div>
    `
})

export class HooksComponent implements OnInit {
    data:string;
    name:string='';
    price:number=0;
    countryMade:string='India';
    product:JustProduct = new JustProduct();
    constructor() {
        this.data ='';
    }

    ngOnInit() { }

    handleData(evt:any){
        this.data = evt.target.value;
    }

    updateProduct(){
        // this.product.name = this.name;
        // this.product.price = this.price;

        // ngOnChanges for change detection
        /**During change detection, when angular checks component's input properties for change, it uses ===
         * for dirty checking.
         * For arrays/objects, this means the reference only are dirty checked. Since the product object
         * reference is not changing ngOnChanges will not be called.
         * 
         * 2 solutions
         *      1. Assign a new array to product whenever you make any changes to the array contents. Then
         *      ngOnChanges will be called, because reference is getting changed.
         *      2. ngDoCheck
         *          Detect and act upon changes that angular can't or won't detect on its own.
         *          Called during every change detection run, immediately after ngOnChanges and ngOnInit().
         */

        // 1st solution is here
        // this.product = new JustProduct();
        // this.product.name = this.name;
        // this.product.price = this.price;
        // this.product.countryMade = this.countryMade.toUpperCase();

        // 2nd solution is here
        // created ngDoCheck hook in HookChildComponent(we can go for this approach for forms which uses object properties which will have multiple inputs)
        this.product.name = this.name;
        this.product.price = this.price;
        this.product.countryMade = this.countryMade.toUpperCase();
    }
}