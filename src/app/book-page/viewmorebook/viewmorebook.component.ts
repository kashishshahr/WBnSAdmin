import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bookClass } from '../book';

@Component({
  selector: 'app-viewmorebook',
  templateUrl: './viewmorebook.component.html',
  styleUrls: ['./viewmorebook.component.css']
})
export class ViewmorebookComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ViewmorebookComponent>,
    @Inject(MAT_DIALOG_DATA) public data:bookClass,) { }
  book_name:string="";
  book_img:string;
  book_description:string;
  book_price:Number;
  book_qty:number;
  book_publication:string;
standard:string;


  ngOnInit() {
    this.book_name=this.data.book_name;
    this.book_img=this.data.book_img;
    this.book_description=this.data.book_description;
    this.book_price=this.data.book_price;
    this.book_qty=this.data.book_qty;
    this.book_publication=this.data.book_publication;

this.standard=this.data.standard;

  }

}
