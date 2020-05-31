import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { supplier } from '../supplier';

@Component({
  selector: 'app-supplierviewmore',
  templateUrl: './supplierviewmore.component.html',
  styleUrls: ['./supplierviewmore.component.css']
})
export class SupplierviewmoreComponent implements OnInit {

  id: number;
  name: string;
  mobileno: number;
  address: string;
  desc: string;
  email: string;

  constructor(public dialogRef: MatDialogRef<SupplierviewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: supplier) { }

  ngOnInit() {
    this.id = this._data.supplier_id;
    this.name = this._data.supplier_name;
    this.email = this._data.supplier_email;
    this.mobileno = this._data.supplier_mobileno;
    this.address = this._data.supplier_address;
    this.desc = this._data.supplier_desc;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
