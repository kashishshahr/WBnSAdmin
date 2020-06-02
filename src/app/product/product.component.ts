import { Component, OnInit, ViewChild } from '@angular/core';
import { prod } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['product_id', 'product_name', 'product_price', 'product_qty', 'actions'];
  dataSource: MatTableDataSource<prod>;
  deleteFlag: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _prod: ProductService, private _route: Router, public _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  prodArr: prod[] = [];
  prod_table: prod[] = [];
  ngOnInit() {
    this._prod.getAllProduct().subscribe(
      (data: prod[]) => {
        this.dataSource.data = data;
        this.prodArr = data;
        // console.log(this.prodArr)
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
        if (this.prodArr.find(x => x == this.del_arr[i])) {
          this.prodArr.splice(this.prodArr.indexOf(this.del_arr[i]), 1);
          this.dataSource.data = this.prodArr;
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
      let x: number = this.prodArr.indexOf(item);
      this._prod.deleteProduct(item.product_id).subscribe(
        (data: any) => {
          this.prodArr.splice(x, 1);
          this.dataSource.data = this.prodArr;
        }
      );
      this._route.navigate(['/nav/products']);
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

