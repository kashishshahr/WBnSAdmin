import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SignupsService } from 'src/app/signup/signups.service';
import { custClass } from '../customer';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  constructor(private _route: Router, private _act: ActivatedRoute, private _cust: SignupsService) { }
  EditCustomerForm: FormGroup;
  customer_id: number;
  ngOnInit() {
    this.customer_id = this._act.snapshot.params['customer_id'];
    this.EditCustomerForm = new FormGroup({
      customer_id: new FormControl,
      customer_name: new FormControl(null, [Validators.required]),
      customer_mobileno: new FormControl(null),
      customer_address: new FormControl(null),
      fk_user_email: new FormControl(null)
    });
    this._cust.getCustomerById(this.customer_id).subscribe((data: custClass[]) => {
      this.editCustomerFormDataBind(data[0]);

    });
  }
  editCustomerFormDataBind(item: custClass) {
    this.EditCustomerForm.patchValue({
      customer_id: item.customer_id,
      customer_name: item.customer_name,
      customer_address: item.customer_address,
      customer_mobileno: item.customer_mobileno,
      fk_user_email: item.fk_user_email
    });
  }
  onEditSubmit() {
    this._cust.updateCustomer(this.EditCustomerForm.value).subscribe((data: any) => {
      this._route.navigate(['/nav/customers']);
    });
  }
  onCancel() {
    this._route.navigate(['/nav/customers']);
  }
}
