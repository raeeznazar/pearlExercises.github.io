import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  productService: any;
  priceService: any;

  constructor() {}

  submit(product: any, price: any) {
    this.productService = product;
    this.priceService = price;
  }
}
