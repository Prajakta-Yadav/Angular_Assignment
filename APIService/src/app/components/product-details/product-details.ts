import { Component, signal } from '@angular/core';
import { Product } from '../../Services/productDataType';
import { ProductService } from '../../Services/product-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

   productData = signal<Product | undefined> (undefined)

   constructor(private route:ActivatedRoute,  private productService:ProductService){}


  

  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe((data) =>{
      console.log(data.products);
      data.products.filter((item)=>{
        if(item.id.toString() == productId){
          console.log(item);
          this.productData.set(item); 
        }
      })
    })
  }


}
