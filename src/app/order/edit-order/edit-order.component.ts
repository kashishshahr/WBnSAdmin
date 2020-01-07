import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderDataService } from '../order-data.service';
import { orderClass } from '../order';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private _order:OrderDataService, private _route:Router,private _Act:ActivatedRoute) { }
  EditOrderForm:FormGroup;
  order_id:number;
  ngOnInit() {
    this.order_id=this._Act.snapshot.params['order_id'];
    console.log(this.order_id);
    this.EditOrderForm=new FormGroup({
      order_id:new FormControl,
      order_amount:new FormControl(null),
      order_date:new FormControl(null),
      order_status:new FormControl(null),
    });
    this._order.getOrderById(this.order_id).subscribe(
      (data:any)=>{
        this.editOrderFormDataBind(data[0]);
    });
  }
  editOrderFormDataBind(item:orderClass)
  {
this.EditOrderForm.patchValue({
  order_id:item.order_id,
  order_amount:item.order_amount,
  order_date:item.order_date,
  order_status:item.order_status
});
  }
  onSubmit()
  {
    this._order.updateOrderData(this.EditOrderForm.value).subscribe(
      (data:orderClass[])=>{
        this._route.navigate(['/nav/orders']);
      }
    )
  }
  onCancel()
  {
  this._route.navigate(['/nav/orders']);
  }
}
