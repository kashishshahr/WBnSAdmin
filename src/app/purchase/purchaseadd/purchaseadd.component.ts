import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchasedataService } from '../purchasedata.service';

@Component({
  selector: 'app-purchaseadd',
  templateUrl: './purchaseadd.component.html',
  styleUrls: ['./purchaseadd.component.css']
})
export class PurchaseaddComponent implements OnInit {

  purchaseAddForm: FormGroup;
  constructor(private _route: Router, private _data: PurchasedataService) { }

  ngOnInit() {
    this.purchaseAddForm = new FormGroup({
      quantity: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      purchase_price: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      purchase_date: new FormControl(null),
      purchase_id: new FormControl(null),
      fk_product_id: new FormControl(),
      fk_supplier_id: new FormControl()
    });
  }
  onPurchaseAdd() {
    this._data.addPurchase(this.purchaseAddForm.value).subscribe(
      (data: any[]) => {
        console.log(data);
        this._route.navigate(['/nav/purchase']);
      }
    );
  }
  OnCncel() {
    this._route.navigate(['/nav/purchase']);
  }
}
