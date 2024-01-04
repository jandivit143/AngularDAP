import { Component, Input } from '@angular/core';
import Product from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'addtocart',
    template: `
        <button class="btn btn-info" type="button" (click)="addProduct();">Add To Cart</button>
    `,
    //providers:[CartService]
})

export class AddToCartComponent {
    // @Input decorator in child component or directive signifies that
    // the property can receive its value from its parent component.
    @Input()
    selectedProduct: Product;
    constructor(private cartService:CartService) {
        this.selectedProduct = {} as Product;
    }

    addProduct(){
        console.log('Adding product to the cart is',this.selectedProduct);
        this.cartService.addToCart(this.selectedProduct);
    }
}