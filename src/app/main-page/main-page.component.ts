import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  productDetails: any;

  constructor() {}

  ngOnInit() {}

  getValues(event) {
    this.productDetails = event;
    
  }
}
