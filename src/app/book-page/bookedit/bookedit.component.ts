import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { bookClass } from '../book';
import { environment } from 'src/environments/environment';
import { CategorydataService } from 'src/app/categorypage/categorydata.service';
import { Category } from 'src/app/categorypage/category';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {
  constructor(private _catData: CategorydataService, private _router: Router, private _act: ActivatedRoute, private _book: BookDataService) { }
  book_id: number;
  book_img: String = "";
  img1: string = '';
  CategoryDataArr: Category[] = [];
  EditBookForm: FormGroup;
  bookurl: string = null;
  ngOnInit() {

    this.book_id = this._act.snapshot.params['book_id'];
    this.EditBookForm = new FormGroup({

      book_name: new FormControl(null, [Validators.required]),
      book_price: new FormControl(null),
      book_qty: new FormControl(null),

      book_img: new FormControl(null),
      book_publication: new FormControl(null),
      standard: new FormControl(null),
      book_description: new FormControl(null),
      fk_cat_id: new FormControl(null),
    });

    this._catData.getAllCategory().subscribe(
      (data: Category[]) => {
        this.CategoryDataArr = data;
      }
    );

    this._book.getBookById(this.book_id).subscribe(
      (data: bookClass) => {
        this.editbookFormDataBind(data[0]);
        // console.log(data);
      }
    );
  }

  editbookFormDataBind(item: bookClass) {
    this.img1 = item.book_img;
    this.bookurl = environment.url + item.book_img;
    this.EditBookForm.patchValue({
      book_name: item.book_name,
      book_price: item.book_price,
      book_qty: item.book_qty,
      book_img: item.book_img,
      book_publication: item.book_publication,
      standard: item.standard,
      book_description: item.book_description,
      fk_cat_id: item.fk_cat_id,
    });
  }
  onSubmit() {
    console.log(this.EditBookForm.value);
    let fd = new FormData();
    fd.append('book_name', this.EditBookForm.value.book_name);
    fd.append('book_price', this.EditBookForm.value.book_price);
    fd.append('book_qty', this.EditBookForm.value.book_qty);
    if (this.selectedfile != null)
    {
      fd.append('pic', this.selectedfile, this.selectedfile.name);
    }
    else
    {
      fd.append('pic', this.EditBookForm.get('book_img').value);
    }
    fd.append('book_publication', this.EditBookForm.value.book_publication);
    fd.append('standard', this.EditBookForm.value.standard);
    fd.append('book_description', this.EditBookForm.value.book_description);
    fd.append('fk_cat_id', this.EditBookForm.value.fk_cat_id);
    this._book.updateBookData(this.book_id, fd).subscribe(
      (data: bookClass) => {
        // alert("SUCCESSSS");
        console.log(data);
        this._router.navigate(['/nav/books']);

      }
    );

  }
  selectedfile: File = null;

  onChange(value) {
    this.selectedfile = <File>value.target.files[0];
  }
  onCancel() {
    this._router.navigate(["/nav/books"]);
  }

}
