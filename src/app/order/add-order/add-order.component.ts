import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderDataService } from '../order-data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private _Route:Router, private _order:OrderDataService) { }
  addOrderForm: FormGroup;

  ngOnInit() {
    this.addOrderForm=new FormGroup({
      order_amount:new FormControl(null),
      order_date:new FormControl(null),
      order_status:new FormControl(null)
    });
  }
  onAddOrder()
  {
    this._order.addOrder(this.addOrderForm.value).subscribe(
      (data:any[])=>{
        this._Route.navigate(['/nav/orders']);
      }
    )
  }


  onClick()
  {
    this._route.navigate(['/nav/orders']);
  }
}
