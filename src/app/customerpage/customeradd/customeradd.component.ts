import { Component, OnInit } from '@angular/core';
import { CustomerdataService } from '../customerdata.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  customerAddForm: FormGroup;
  constructor(private _data: CustomerdataService, private _route: Router) { }

  ngOnInit() {
    this.customerAddForm = new FormGroup({
      customer_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      customer_mobileno: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      customer_address: new FormControl(null),
      customer_photo: new FormControl(null),
      fk_user_email: new FormControl(null)
    });
  }
  onCancelClick() {
    this._route.navigate(['/nav/customer']);
  }
  onCustomerAdd() {
    console.log(this.customerAddForm.value);
    this._data.addCustomer(this.customerAddForm.value).subscribe(
      (data: any[]) => {
        console.log(data);
        this._route.navigate(['/nav/customer']);
      }
    );
  }
}
