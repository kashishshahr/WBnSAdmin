import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { purchase } from '../purchase';

@Component({
  selector: 'app-purchaseviewmore',
  templateUrl: './purchaseviewmore.component.html',
  styleUrls: ['./purchaseviewmore.component.css']
})
export class PurchaseviewmoreComponent implements OnInit {

  id: number;
  quantity: number;
  price: number;
  date: Date;
  fk_product_id: number;
  fk_supplier_id: number;
  constructor(public dialogRef: MatDialogRef<PurchaseviewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: purchase) { }

  ngOnInit() {
    this.id = this._data.purchase_id;
    this.quantity = this._data.quantity;
    this.price = this._data.purchase_price;
    this.date = this._data.purchase_date;
    this.fk_product_id = this._data.fk_product_id;
    this.fk_supplier_id = this._data.fk_supplier_id;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
