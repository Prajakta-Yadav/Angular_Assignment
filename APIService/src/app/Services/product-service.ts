import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productsAPIResponse } from './productDataType';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  apiURL = "https://dummyjson.com/products";

  constructor(private http:HttpClient){

  }
  
  getProducts(){
    return this.http.get<productsAPIResponse>(this.apiURL)
  }
}
