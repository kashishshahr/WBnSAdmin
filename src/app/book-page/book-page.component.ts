import { Component, OnInit, ViewChild } from '@angular/core';
import { bookClass } from './book';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookDataService } from './book-data.service';
import { ViewmorebookComponent } from './viewmorebook/viewmorebook.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'book_name','book_id', 'book_price', 'book_qty', 'book_description', 'actions'];
  dataSource: MatTableDataSource<bookClass>;
  deleteFlag: boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _book: BookDataService, private _route: Router, private _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  bookArr: bookClass[] = [];


  openDialog(row) {
    this._dialog.open(ViewmorebookComponent, {
      data: row
    });
  }

  onChange(item: bookClass) {
    if (this.del_arr.find(x => x == item)) {
      this.del_arr.splice(this.del_arr.indexOf(item), 1);
      if (this.del_arr.length == 0) {
        this.deleteFlag = false;
      }
    }
    else {
      this.del_arr.push(item);
      this.deleteFlag = true;
    }
    console.log(this.del_arr);
  }
  onProductListClick() {
    this._route.navigate(['/nav/productList']);
  }
  del_arr: bookClass[] = [];
  onDeleteSelectedClick() {
    this._book.deleteAllBookData(this.del_arr).subscribe(
      (data: any) => {

        console.log(this.bookArr);
        console.log(this.del_arr);

        for (let i = 0; i < this.del_arr.length; i++) {
          if (this.bookArr.find(x => x == this.del_arr[i])) {
            this.bookArr.splice(this.bookArr.indexOf(this.del_arr[i]),1);
            this.dataSource.data = this.bookArr;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          console.log(this.del_arr);
          console.log(this.bookArr);


        }

      });


  }

  ngOnInit() {
    this._book.getAllBook().subscribe(
      (data: bookClass[]) => {
        this.bookArr = data;
        this.dataSource.data = this.bookArr;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data)
      }
    );

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddClick() {
    this._route.navigate(['/nav/AddBook']);
  }
  openEdit(row) {
    this._route.navigate(['/nav/EditBook/', row.book_id]);
  }

  onDelete(item) {
    let x: number = this.bookArr.indexOf(item);
    this._book.deleteBookById(item.book_id).subscribe(
      (data: any) => {
        console.log(data)
        this.bookArr.splice(x, 1);
        this.dataSource.data = this.bookArr;
      }
    );
    this._route.navigate(['/nav/books']);
  }

}
