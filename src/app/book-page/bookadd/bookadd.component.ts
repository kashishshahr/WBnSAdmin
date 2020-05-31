import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategorydataService } from 'src/app/categorypage/categorydata.service';
import { Category } from 'src/app/categorypage/category';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  constructor(private _cat: CategorydataService, private _route: Router, private _book: BookDataService) { }
  bookAddForm: FormGroup;
  catArr: Category[] = [];
  ngOnInit() {
    this.bookAddForm = new FormGroup({
      product_id: new FormControl(null),
      book_name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      product_price: new FormControl(null),
      product_qty: new FormControl(null),
      fk_cat_id: new FormControl(null),
      book_img: new FormControl(null),
      book_publication: new FormControl(null, [Validators.required]),
      standard: new FormControl(null, [Validators.required]),
      book_description: new FormControl(null, [Validators.required])
    });
    this._cat.getAllCategory().subscribe((data: Category[]) => {
      this.catArr = data;
    })
  }
  selectedfile: File = null;

  onChange(value) {
    this.selectedfile = <File>value.target.files[0];
  }

  onAddBook() {

    let fd = new FormData();
    fd.append('book_name', this.bookAddForm.value.book_name);
    fd.append('product_price', this.bookAddForm.value.product_price);
    fd.append('product_qty', this.bookAddForm.value.product_qty);
    fd.append('book_publication', this.bookAddForm.value.book_publication);
    fd.append('standard', this.bookAddForm.value.standard);
    fd.append('book_description', this.bookAddForm.value.book_description);
    fd.append('book_img', this.selectedfile, this.selectedfile.name);
    fd.append('fk_cat_id', this.bookAddForm.value.fk_cat_id)
    this._book.addBook(fd).subscribe(
      (x: any) => {
        this._route.navigate(['/nav/books']);
      }
    )
  }
  onClick() {
    this._route.navigate(['/nav/books']);
  }
}
