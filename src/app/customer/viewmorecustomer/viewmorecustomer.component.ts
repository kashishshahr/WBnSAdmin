import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { custClass } from '../customer';

@Component({
  selector: 'app-viewmorecustomer',
  templateUrl: './viewmorecustomer.component.html',
  styleUrls: ['./viewmorecustomer.component.css']
})
export class ViewmorecustomerComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ViewmorecustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: custClass) { }
  customer_name: string = "";
  customer_mobileno: number;
  customer_address: string = "";
  customer_photo: String = "";
  customer_gender: String = "";
  fk_user_email: string = "";
  imgPath = 'http://localhost:3000/';

  ngOnInit() {
    this.customer_name = this.data.customer_name;
    this.customer_address = this.data.customer_address;
    this.customer_mobileno = this.data.customer_mobileno;
    this.fk_user_email = this.data.fk_user_email;
    this.customer_photo = this.data.customer_photo;
    this.customer_gender=this.data.customer_gender;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
