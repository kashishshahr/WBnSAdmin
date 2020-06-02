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
  fk_user_email: string = "";

  ngOnInit() {
    this.customer_name = this.data.customer_name;
    this.customer_address = this.data.customer_address;
    this.customer_mobileno = this.data.customer_mobileno;
    this.fk_user_email = this.data.fk_user_email;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
