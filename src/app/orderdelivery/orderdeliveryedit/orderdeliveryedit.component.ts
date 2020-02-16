import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from 'src/app/employee/employee-data.service';
import { OrderdeliveryDataService } from '../orderdelivery-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { empClass } from 'src/app/employee/employee';
import { orderDeliveryClass } from '../orderdelivery';

@Component({
  selector: 'app-orderdeliveryedit',
  templateUrl: './orderdeliveryedit.component.html',
  styleUrls: ['./orderdeliveryedit.component.css']
})
export class OrderdeliveryeditComponent implements OnInit {

  orderEditForm: FormGroup;
  order_delivery_id: number;
  employee_data: empClass[] = [];
  constructor(private _router: Router, private _data: OrderdeliveryDataService, private emp_data: EmployeeDataService, private _activate_router: ActivatedRoute) { }

  ngOnInit() {
    this.order_delivery_id = this._activate_router.snapshot.params['order_delivery_id'];

    this.orderEditForm = new FormGroup({
      delivery_date: new FormControl(null),
      fk_employee_id: new FormControl(null),
      comment: new FormControl(null),
      order_delivery_id: new FormControl(null),
      fk_order_id: new FormControl(null)
    });

    this.emp_data.getAllEmployee().subscribe(
      (data: any[]) => {
        this.employee_data = data;
      }
    );

    this._data.getOrder_deliveryById(this.order_delivery_id).subscribe(
      (data: any) => {
        console.log(data)
        this.editOrderFormDataBind(data[0]);
      });
  }
  editOrderFormDataBind(item: any) {
    console.log(item)
    this.orderEditForm.patchValue({
      delivery_date: item.delivery_date,
      fk_employee_id: item.fk_employee_id,
      comment: item.comment,
      order_delivery_id: item.order_delivery_id,
      fk_order_id: item.fk_order_id,
    });
  }
  onOrderEdit() {
    this._data.updateOrder_delivery(this.orderEditForm.value).subscribe(
      (data: orderDeliveryClass) => {
        console.log(data)
        this._router.navigate(['/nav/orders']);
      }
    );
  }
  OnCancel() {
    this._router.navigate(['/nav/orders']);
  }
}
