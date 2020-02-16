import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderdetailDataService } from 'src/app/orderdetail/orderdetail-data.service';
import { orderClass } from 'src/app/order/order';
import { OrderDataService } from 'src/app/order/order-data.service';
import { orderDeliveryClass } from '../orderdelivery';
import { EmployeeDataService } from 'src/app/employee/employee-data.service';
import { empClass } from 'src/app/employee/employee';

@Component({
  selector: 'app-orderdeliveryadd',
  templateUrl: './orderdeliveryadd.component.html',
  styleUrls: ['./orderdeliveryadd.component.css']
})
export class OrderdeliveryaddComponent implements OnInit {

  orderDeliveryAddForm: FormGroup;
  order_data: orderClass[];
  employee_data: empClass[];
  order_id: number;
  constructor(private _router: Router, private _data: OrderdetailDataService, private od_data: OrderDataService, private emp_data: EmployeeDataService, private _activate_router: ActivatedRoute) { }

  ngOnInit() {
    //this.order_id = this._activate_router.snapshot.params['order_id'];
    console.log(this.order_id)
    this.orderDeliveryAddForm = new FormGroup({
      quantity: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      purchase_price: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      purchase_date: new FormControl(null),
      purchase_id: new FormControl(null),
      fk_product_id: new FormControl(null),
      fk_supplier_id: new FormControl(null)
    });

    this.od_data.getAllOrders().subscribe(
      (data: any[]) => {
        this.order_data = data;
        console.log(data);
      }
    );

    this.emp_data.getAllEmployee().subscribe(
      (data: any[]) => {
        this.employee_data = data;
        console.log(data);
      }
    );
  }
  onOrderDeliveryAdd() {
    this._data.addOrder_detail(this.orderDeliveryAddForm.value).subscribe(
      (data: orderDeliveryClass[]) => {
        console.log(data);
        this._router.navigate(['/nav/order_deliveries']);
      }
    );
  }
  OnCancel() {
    this._router.navigate(['/nav/order_deliveries']);
  }
}
