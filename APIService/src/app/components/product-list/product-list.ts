import { Component, signal } from '@angular/core';
import { Product } from '../../Services/productDataType';
import { Products } from '../../Services/products/products';
import { ProductService } from '../../Services/product-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
   productData = signal<Product[] | undefined> (undefined)

  constructor(private productService:ProductService){}

  ngOnInit(){
    this.productService.getProducts().subscribe((data) => {
      console.log(data.products);
      this.productData.set(data.products)
    })
  }



}
