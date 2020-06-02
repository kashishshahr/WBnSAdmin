import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PurchasedataService } from '../purchasedata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { purchase } from '../purchase';
import { SupplierdataService } from 'src/app/supplier/supplierdata.service';
import { prod } from 'src/app/product/product';
import { supplier } from 'src/app/supplier/supplier';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-purchaseedit',
  templateUrl: './purchaseedit.component.html',
  styleUrls: ['./purchaseedit.component.css']
})
export class PurchaseeditComponent implements OnInit {

  purchase_id: number;
  product_data: prod[];
  supplier_data: supplier[];
  purchaseEditForm: FormGroup;
  constructor(private _data: PurchasedataService, private _route: Router,
    private _activate_route: ActivatedRoute, private pro_data: ProductService, private sup_data: SupplierdataService) { }

  ngOnInit() {
    this.purchase_id = this._activate_route.snapshot.params['purchase_id'];
    this.purchaseEditForm = new FormGroup({
      quantity: new FormControl(null),
      purchase_price: new FormControl(null),
      purchase_date: new FormControl(null),
      purchase_id: new FormControl(null),
      fk_product_id: new FormControl(null),
      fk_supplier_id: new FormControl(null)

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

    this._data.getPurchaseById(this.purchase_id.toString()).subscribe(
      (data: purchase[]) => {
        this.formDataBind(data[0]);
      }
    );
  }
  formDataBind(item: purchase) {
    this.purchaseEditForm.patchValue({
      quantity: item.quantity,
      purchase_price: item.purchase_price,
      purchase_date: item.purchase_date,
      purchase_id: item.purchase_id,
      fk_product_id: item.fk_product_id,
      fk_supplier_id: item.fk_supplier_id
    });
  }
  onPurchaseEdit() {
    this._data.updatePurchase(this.purchaseEditForm.value).subscribe(
      (data: purchase) => {
        this._route.navigate(['/nav/purchase']);
      }
    );
  }
  OnCncel() {
    this._route.navigate(['/nav/purchase']);
  }
}
