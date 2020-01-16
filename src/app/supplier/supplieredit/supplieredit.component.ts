import { Component, OnInit } from '@angular/core';
import { SupplierdataService } from '../supplierdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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
      supplier_name: new FormControl(null),
      supplier_mobileno: new FormControl(null),
      supplier_address: new FormControl(null),
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
