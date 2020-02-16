import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { orderClass } from '../order';

@Component({
  selector: 'app-viewmoreorder',
  templateUrl: './viewmoreorder.component.html',
  styleUrls: ['./viewmoreorder.component.css']
})
export class ViewmoreorderComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ViewmoreorderComponent>,
   @Inject(MAT_DIALOG_DATA) public data:orderClass ) { }
   order_amount:number;

  ngOnInit() {
  this.order_amount=this.data.order_amount;
  }


}
