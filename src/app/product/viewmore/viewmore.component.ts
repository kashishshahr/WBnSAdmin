import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

import { prod } from '../product';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewmoreComponent>,

    @Inject(MAT_DIALOG_DATA) public data: prod, ) { }
  product_name: string = "";
  product_img: string;
  product_desc: string;
  product_price: Number;
  product_qty: number;
  product_mfg: string;
  product_id: number;
  fk_cat_id: string;

  ngOnInit() {
    console.log(this.data);
    this.product_id = this.data.product_id;
    this.product_name = this.data.product_name;
    this.product_price = this.data.product_price;
    this.product_qty = this.data.product_qty;
    this.product_mfg = this.data.product_mfg;
    this.product_desc = this.data.product_desc;
    this.product_img = this.data.product_img;
    this.fk_cat_id = this.data.category_name;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
