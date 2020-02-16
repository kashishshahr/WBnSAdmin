import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderDataService } from '../order-data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { custClass } from 'src/app/customer/customer';
import { CustomerdataService } from 'src/app/customer/customerdata.service';
import { orderClass } from '../order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private _Route: Router, private _order: OrderDataService, private cust_data: CustomerdataService) { }
  addOrderForm: FormGroup;
  customer_data: custClass[] = [];

  ngOnInit() {
    this.addOrderForm = new FormGroup({
      order_amount: new FormControl(null),
      order_date: new FormControl(null),
      order_status: new FormControl(null),
      fk_customer_id: new FormControl(null)
    });

    // this.cust_data.getAllCustomer().subscribe(
    //   (data: any[]) => {
    //     this.customer_data = data;
    //     //console.log(data);
    //   }
    // );
  }
  // onAddOrder() {
  //   console.log(this.purchaseAddForm.value);
  //   this._order.addOrder(this.addOrderForm.value).subscribe(
  //     (data: orderClass[]) => {
  //       console.log(data);
  //       this._Route.navigate(['/nav/orders']);
  //     }
  //   );
  // }

  onClick() {
    this._Route.navigate(['/nav/orders']);
  }
}
