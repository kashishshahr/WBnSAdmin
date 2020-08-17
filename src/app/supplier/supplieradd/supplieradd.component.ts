import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierdataService } from '../supplierdata.service';

@Component({
  selector: 'app-supplieradd',
  templateUrl: './supplieradd.component.html',
  styleUrls: ['./supplieradd.component.css']
})
export class SupplieraddComponent implements OnInit {
  supplierAddForm: FormGroup;
  constructor(private _route: Router, private _data: SupplierdataService) { }

  ngOnInit() {
    this.supplierAddForm = new FormGroup({
      supplier_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      supplier_email: new FormControl(null, [Validators.required, Validators.email]),
      supplier_mobileno: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      supplier_address: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      supplier_desc: new FormControl(null)
    });
  }
  onSupplierAdd() {
    this._data.addSupplier(this.supplierAddForm.value).subscribe(
      (data: any[]) => {
        this._route.navigate(['/nav/supplier']);
      }
    );
  }
  OnCncel() {
    this._route.navigate(['/nav/supplier']);
  }
}
