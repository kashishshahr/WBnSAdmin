import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartpageComponent } from '../cartpage.component';
import { stringify } from 'querystring';

@Component({
  selector: 'app-viewmorecartpage',
  templateUrl: './viewmorecartpage.component.html',
  styleUrls: ['./viewmorecartpage.component.css']
})
export class ViewmorecartpageComponent implements OnInit {

  constructor(private _dialod:MatDialogRef<ViewmorecartpageComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {

   }
   product_price:Number;
user_type:string;
  ngOnInit() {
    console.log(this.data);
    this.product_price=this.data.product_price;
this.user_type=this.data.user_type;
  }

}
