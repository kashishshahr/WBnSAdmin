import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartpageComponent } from '../cartpage.component';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewmorecartpage',
  templateUrl: './viewmorecartpage.component.html',
  styleUrls: ['./viewmorecartpage.component.css']
})
export class ViewmorecartpageComponent implements OnInit {

  constructor(private _dialod: MatDialogRef<ViewmorecartpageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _router: Router) {

  }
  product_price: Number;
  user_type: string;
  ngOnInit() {
    console.log(this.data);
    this.product_price = this.data.product_price;
    this.user_type = this.data.user_type;
  }
  onCancel() {
    this._dialod.close();
  }
}
