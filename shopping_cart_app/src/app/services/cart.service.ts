import { Injectable } from '@angular/core';
import Product from '../product';
import { Subject } from 'rxjs';
import { SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[]; // Javascript Object
  
  @SessionStorage()
  myCart: string = ''; // string (JSON String)
  
  // Subject
  private cartSource = new Subject<string>();
  // Broadcaster
  cartBroadCaster = this.cartSource.asObservable();
  constructor() {
    // this.cart = new Array<Product>();
    if(this.myCart){
      // Converting JSON String to Javascript Object
      console.log('before conversion',this.myCart);
      this.cart = JSON.parse(this.myCart);
      console.log('after conversion',this.cart);
    }else{
      this.cart = new Array<Product>();
    }
  }

  addToCart(product:Product):void{
    // console.log('Product in cart',product);
    this.cart = this.cart.concat(product); // Immutable state
    // Converting Javascript Object to JSON String
    // console.log('Before conversion',this.cart);
    console.log('typeof cart',typeof this.cart);
    this.myCart = JSON.stringify(this.cart);
    // console.log('After conversion',this.myCart);
    console.log('typeof myCart',typeof this.myCart);

    // Notify all the subscribers
    this.cartSource.next(this.myCart);
  }

  getCartItems():Product[]{
    return this.cart;
  }

  removeFromCart(product:Product):void{
    this.cart = this.cart.filter(prd => prd.id != product.id); // Immutable state
    // Converting Javascript Object to JSON String
    this.myCart = JSON.stringify(this.cart);

    // Notify all the subscribers
    this.cartSource.next(this.myCart);
  }
}
