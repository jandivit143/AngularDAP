import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-productdetails',
    template: `
        <div>
            <h3>Product Details!</h3>
            <div *ngFor="let product of products">
                <div *ngIf="product.id === productId">
                    Id: <span>{{product.id}}</span><br />
                    Name: <span>{{product.name}}</span><br />
                    Price: <span>{{product.price}}</span><br />
                    Category: <span>{{product.category}}</span><br />
                    <img [src]="product.imgPath" class="img-fluid" />
                </div>
            </div>
        </div>
    `,
    styles:[`
        img{
            width: 200px;
            height: 200px;
        }
        h3, span{
            color: navy;
            width: auto;
            margin: 20px;
        }
        div{
            font-weight: bold;
            font-style: italic;
        }
    `]
})

export class ProductDetailsComponent implements OnInit {
    products:Product[];
    productId:number;
    constructor(private productsService:ProductsService,
        private activatedRoute:ActivatedRoute) {
        this.productId = 0;
        this.products = this.productsService.products;
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(parameters => {
            this.productId = parseInt(parameters['id']);
        });
    }
}