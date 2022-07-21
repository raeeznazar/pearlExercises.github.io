import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  // formPage Model
  formPage = this.fb.group({
    product: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    qty: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  @Output() getValuesForm = new EventEmitter<{
    product: string;
    price: number;
    qty: number;
  }>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submit() {
    let productDetail = {
      product: <string>this.formPage.controls['product'].value,
      price: <number>this.formPage.controls['price'].value,
      qty: <number>this.formPage.controls['qty'].value,
    };

    if (this.formPage.valid) {
      this.getValuesForm.emit(productDetail);
    } else {
      alert('invalid form');
    }
  }
}
