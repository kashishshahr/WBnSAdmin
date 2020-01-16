import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from '../customer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-viewmorecustmore',
  templateUrl: './viewmorecustmore.component.html',
  styleUrls: ['./viewmorecustmore.component.css']
})
export class ViewmorecustmoreComponent implements OnInit {

  name: string;
  mobileno: number;
  address: string;
  gender: string;
  photo: string;

  constructor(public dialogRef: MatDialogRef<ViewmorecustmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: Customer) { }

  ngOnInit() {

    this.name = this._data.customer_name;
    this.mobileno = this._data.customer_mobileno;
    this.address = this._data.customer_address;
    this.photo = this._data.customer_photo;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
