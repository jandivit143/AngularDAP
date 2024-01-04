import { Component, OnDestroy } from '@angular/core';
import Product from 'src/app/product';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy {
  //Model
  products:Product[];
  isAdmin:boolean;
  constructor(private productsService: ProductsService,
    private authService:AuthService,
    private adminService:AdminService){
    this.products = this.productsService.products;
    this.isAdmin = true;
  }

  showDetails(product:Product){
    alert(product.category+' '+product.name+' '+product.price);
  }

  // doSearch(event:Event){
  //   let searchStr:string = (event.target as HTMLInputElement).value;
  //   let prodNames:string[] = [];
  //   for(let i in this.products){
  //     if(this.products[i].name.toLowerCase().startsWith(searchStr.toLowerCase())){
  //       prodNames.push(this.products[i].name);
  //     }
  //   }
  //   alert(prodNames);
  // }

  // using template reference variable - #
  doSearch(searchStr:string){
    console.log("searchStr " + searchStr);
    let prodNames:string[] = [];
    for(let i in this.products){
      if(this.products[i].name.toLowerCase().startsWith(searchStr.toLowerCase())){
        prodNames.push(this.products[i].name);
      }
    }
    alert(prodNames);
  }

  ngOnDestroy(): void {
      this.authService.isUserLoggedIn = false;
      this.adminService.isAdmin = false;
  }
}
