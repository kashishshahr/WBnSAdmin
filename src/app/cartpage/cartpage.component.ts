import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { cart } from './cart';
import { CartdataService } from './cartdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart_arr: cart[];
  displayedColumns: string[] = ['fk_user_email', 'fk_product_id', 'action'];
  dataSource: MatTableDataSource<cart>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data: CartdataService, private router: Router, public _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._data.getAllCart().subscribe(
      (data: cart[]) => {
        this.cart_arr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDelete(row: cart) {
    if (confirm("do you want to delete?")) {
      this._data.deleteCart(row.cart_id).subscribe(
        (data: cart) => {
          this.cart_arr.splice(this.cart_arr.indexOf(row), 1);
          this.dataSource.data = this.cart_arr;
        }
      );
    }
  }
  onCartAdd() {
    this.router.navigate(['/nav/cartadd']);
  }
}
