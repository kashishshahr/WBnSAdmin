import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { orderClass } from '../order';
import { orderDetailClass } from 'src/app/orderdetail/orderdetail';
import { orderDeliveryClass } from 'src/app/orderdelivery/orderdelivery';

@Component({
  selector: 'app-viewmoreorder',
  templateUrl: './viewmoreorder.component.html',
  styleUrls: ['./viewmoreorder.component.css']
})
export class ViewmoreorderComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ViewmoreorderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  customer_name: string;
  employee_name: string;
  product_name: string;
  product_price: number;
  product_qty: number;
  order_amount: number;
  order_status: string;
  order_date: Date;

  ngOnInit() {
    console.log(this.data)
    this.customer_name = this.data.customer_name;
    this.employee_name = this.data.employee_name;
    this.product_name = this.data.product_name;
    this.product_price = this.data.product_price;
    this.product_qty = this.data.product_qty;
    this.order_amount = this.data.order_amount;
    this.order_status = this.data.order_status;
    this.order_date = this.data.order_date;
  }
  onCancel(){
    this.dialogRef.close();
  }
}
