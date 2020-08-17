import { Component, OnInit } from '@angular/core';
import { SupplierdataService } from '../supplierdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { supplier } from '../supplier';

@Component({
  selector: 'app-supplieredit',
  templateUrl: './supplieredit.component.html',
  styleUrls: ['./supplieredit.component.css']
})
export class SuppliereditComponent implements OnInit {


  supplier_id: number;
  SupplierUpdateForm: FormGroup;

  constructor(private _data: SupplierdataService, private _route: Router, private _activate_route: ActivatedRoute) { }

  ngOnInit() {
    this.supplier_id = this._activate_route.snapshot.params['supplier_id'];
    this.SupplierUpdateForm = new FormGroup({
      supplier_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[0-9a-zA-Z ]*')]),
      supplier_email: new FormControl(null, [Validators.required, Validators.email]),
      supplier_mobileno: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      supplier_address: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      supplier_desc: new FormControl(null),
      supplier_id: new FormControl(null)
    });
    this._data.getSupplierById(this.supplier_id.toString()).subscribe(
      (data: supplier[]) => {
        this.formDataBind(data[0]);
      }
    );
  }
  formDataBind(item: supplier) {
    this.SupplierUpdateForm.patchValue({
      supplier_name: item.supplier_name,
      supplier_email: item.supplier_email,
      supplier_mobileno: item.supplier_mobileno,
      supplier_address: item.supplier_address,
      supplier_desc: item.supplier_desc,
      supplier_id: item.supplier_id
    });
  }
  onSupplierEdit() {
    this._data.updateSupplier(this.SupplierUpdateForm.value).subscribe(
      (data: supplier) => {
        this._route.navigate(['/nav/supplier']);
      }
    );
  }
  onCancel() {
    this._route.navigate(['/nav/supplier']);
  }
}
