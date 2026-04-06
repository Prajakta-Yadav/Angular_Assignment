import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-products',
  imports: [ CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productData: any = signal("")

  constructor(private productService:ProductService){

  }

  ngOnInit(){
    this.productService.getProducts().subscribe((data) =>{
      console.log(data.products);
      this.productData.set(data.products)
    })
  }


}
