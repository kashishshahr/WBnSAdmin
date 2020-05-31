import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchasedataService } from '../purchasedata.service';
import { purchase } from '../purchase';
import { SupplierdataService } from 'src/app/supplier/supplierdata.service';
import { supplier } from 'src/app/supplier/supplier';
import { prod } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-purchaseadd',
  templateUrl: './purchaseadd.component.html',
  styleUrls: ['./purchaseadd.component.css']
})
export class PurchaseaddComponent implements OnInit {

  purchaseAddForm: FormGroup;
  product_data: prod[];
  supplier_data: supplier[];
  constructor(private _route: Router, private _data: PurchasedataService, private pro_data: ProductService, private sup_data: SupplierdataService) { }

  ngOnInit() {
    this.purchaseAddForm = new FormGroup({
      quantity: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      purchase_price: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      purchase_date: new FormControl(null),
      purchase_id: new FormControl(null),
      fk_product_id: new FormControl(null, [Validators.required]),
      fk_supplier_id: new FormControl(null, [Validators.required])
    });

    this.pro_data.getAllProduct().subscribe(
      (data: any[]) => {
        this.product_data = data;
      }
    );

    this.sup_data.getAllSupplier().subscribe(
      (data: any[]) => {
        this.supplier_data = data;
      }
    );
  }
  onPurchaseAdd() {
    this._data.addPurchase(this.purchaseAddForm.value).subscribe(
      (data: purchase[]) => {
        this._route.navigate(['/nav/purchase']);
      }
    );
  }
  OnCancel() {
    this._route.navigate(['/nav/purchase']);
  }
}
