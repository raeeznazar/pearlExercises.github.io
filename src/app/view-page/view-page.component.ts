import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css'],
})
export class ViewPageComponent implements OnInit {
  @Input() ProductDetailsFromMain: { product: string; price: number; qty: number;  };
  products: any = [];
  allProducts: any = [];
  optionSelected = 'ALL';

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.ProductDetailsFromMain);
    if (this.ProductDetailsFromMain) {
      // this.products.push(this.ProductDetailsFromMain);
      this.allProducts.push(this.ProductDetailsFromMain)
      // this.products = this.allProducts;
      this.filterProducts('all');
    }
  }


  filterProducts(option){
    if(option == 1) {   // 1 denotes price greater than 40k
      this.optionSelected = 'greater';
      this.products = this.allProducts.filter(product => product.price>40000);
    } else if(option == 2) {  // 2 denotes price less than 20k
      this.optionSelected = 'lesser';
      this.products = this.allProducts.filter(product => product.price<20000);
    } else if(option == 'all') {
      this.optionSelected = 'ALL';
      this.products = this.allProducts;
    }
    
  }

  lesser(price){
    return price<20000;
  }
}
