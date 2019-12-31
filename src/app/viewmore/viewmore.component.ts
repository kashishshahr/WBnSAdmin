import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { inject } from '@angular/core/testing';
import { prod } from '../product';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ViewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data:prod,) { }
  product_name:string="";
  product_img:File;
  product_desc:Text;


  ngOnInit() {
    this.product_name=this.data.product_name;
    this.product_img=this.data.product_img;
    this.product_desc=this.data.product_desc;
  }

}
