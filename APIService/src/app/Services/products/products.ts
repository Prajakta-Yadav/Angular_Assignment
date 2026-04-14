import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../productDataType';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productData = signal<Product[] | undefined> (undefined)

  constructor(private productService:ProductService){

  }

  ngOnInit(){
    this.productService.getProducts().subscribe((data) =>{
      console.log(data.products);
      this.productData.set(data.products)
    })
  }


}
