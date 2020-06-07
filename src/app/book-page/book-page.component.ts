import { Component, OnInit, ViewChild } from '@angular/core';
import { bookClass } from './book';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookDataService } from './book-data.service';
import { ViewmorebookComponent } from './viewmorebook/viewmorebook.component';
import { ProductService } from '../product/product.service';
import { prod } from '../product/product';
import { ViewmoreComponent } from '../product/viewmore/viewmore.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  displayedColumns: string[] = ['product_id', 'product_name', 'product_price', 'product_qty', 'actions'];
  dataSource: MatTableDataSource<prod>;
  deleteFlag: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _prod: ProductService, private _route: Router, public _dialog: MatDialog, private _book: BookDataService) {
    this.dataSource = new MatTableDataSource();
  }

  bookArr: prod[] = [];
  prod_table: prod[] = [];
  ngOnInit() {
    this._book.getAllBook().subscribe(
      (data: prod[]) => {
        console.log(data)

        this.dataSource.data = data;
        this.bookArr = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  onProductListClick() {
    this._route.navigate(['/nav/productList']);
  }
  del_arr: prod[] = [];
  onChange(item: prod) {
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
  }

  onClick() {
    this._prod.deleteAllProductData(this.del_arr).subscribe((data: any) => {
      for (let i = 0; i < this.del_arr.length; i++) {
        if (this.bookArr.find(x => x == this.del_arr[i])) {
          this.bookArr.splice(this.bookArr.indexOf(this.del_arr[i]), 1);
          this.dataSource.data = this.bookArr;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    });
  }

  openDialog(row) {
    this._dialog.open(ViewmoreComponent, {
      data: row
    });
  }
  onAddClick() {
    this._route.navigate(['/nav/AddProduct']);
  }
  openEdit(row) {
    this._route.navigate(['/nav/EditProduct/', row.product_id]);
  }
  onDelete(item) {
    if (confirm("do you want to delete?")) {
      let x: number = this.bookArr.indexOf(item);
      this._prod.deleteProduct(item.product_id).subscribe(
        (data: any) => {
          console.log(data);
          this.bookArr.splice(x, 1);
          this.dataSource.data = this.bookArr;
        }
      );
      this._route.navigate(['/nav/books']);
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

