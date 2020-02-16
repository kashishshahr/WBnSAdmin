import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CategorydataService } from 'src/app/categorypage/categorydata.service';
import { Category } from 'src/app/categorypage/category';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  constructor(private _cat:CategorydataService,private _route:Router,private _book:BookDataService) { }
bookAddForm:FormGroup;
catArr:Category[]=[];
  ngOnInit()
  {
    this.bookAddForm=new FormGroup({
    book_id:new FormControl(null),
    book_name:new FormControl("A"),
    book_price:new FormControl(3),
    book_qty:new FormControl(5),
    fk_cat_id:new FormControl(null),
    book_img:new FormControl(null),
    book_publication:new FormControl("abc"),
    standard:new FormControl("2nd"),
    book_description:new FormControl("abc")
    });
    this._cat.getAllCategory().subscribe((data:Category[])=>
      {
      this.catArr=data;
    })
  }
  selectedfile:File=null;

  onChange(value){
    this.selectedfile=<File>value.target.files[0];
  }

  onAddBook()
  {

    let fd=new FormData();
    fd.append('book_name',this.bookAddForm.value.book_name);
    fd.append('book_price',this.bookAddForm.value.book_price);
    fd.append('book_qty',this.bookAddForm.value.book_qty);
    fd.append('book_publication',this.bookAddForm.value.book_publication);
    fd.append('standard',this.bookAddForm.value.standard);
    fd.append('book_description',this.bookAddForm.value.book_description);
    fd.append('book_img',this.selectedfile,this.selectedfile.name);
    fd.append('fk_cat_id',this.bookAddForm.value.fk_cat_id)
    this._book.addBook(fd).subscribe(
      (x:any)=>{
        this._route.navigate(['/nav/books']);
      }
    )
  }
  onClick()
  {
    this._route.navigate(['/nav/books']);
  }
}
