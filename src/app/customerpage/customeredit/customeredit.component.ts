import { Component, OnInit } from '@angular/core';
import { CustomerdataService } from '../customerdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.css']
})
export class CustomereditComponent implements OnInit {

  customer_id: number;
  CustomerUpdateForm: FormGroup;

  constructor(private _data: CustomerdataService, private _route: Router, private _activate_route: ActivatedRoute) { }

  ngOnInit() {
    this.customer_id = this._activate_route.snapshot.params['customer_id'];
    console.log(this.customer_id);
    this.CustomerUpdateForm = new FormGroup({
      customer_name: new FormControl(null),
      customer_mobileno: new FormControl(null),
      customer_address: new FormControl(null),
      customer_photo: new FormControl(null),
      customer_id: new FormControl(null),
      fk_user_email: new FormControl(null)

    });
    this._data.getCustomerbyid(this.customer_id.toString()).subscribe(
      (data: Customer[]) => {
        this.formDataBind(data[0]);
      }
    );
  }
  formDataBind(item: Customer) {
    console.log(item);
    this.CustomerUpdateForm.patchValue({
      customer_name: item.customer_name,
      customer_mobileno: item.customer_mobileno,
      customer_address: item.customer_address,
      customer_photo: item.customer_photo,
      customer_id: item.customer_id,
      fk_user_email: item.fk_user_email
    });
  }
  onCustomerEdit() {
    this._data.updateCustomer(this.CustomerUpdateForm.value).subscribe(
      (data: Customer) => {
        this._route.navigate(['/nav/customer']);
      }
    );
  }
}
