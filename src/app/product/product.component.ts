import { Component, OnInit, ViewChild } from '@angular/core';
import { prod } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ViewmoreComponent } from '../viewmore/viewmore.component';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['product_name', 'actions'];
  dataSource: MatTableDataSource<prod>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _prod: ProductService, private _route: Router, public _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  prodArr: prod[] = [];
  prod_table:prod[]=[];
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
  onSignUpClick() {
    this._route.navigate(['/nav/signupDisplay']);
  }

  openDialog(row) {
    this._dialog.open(ViewmoreComponent, {
      data: row
    });
  }
  onAddClick() {
    this._route.navigate(['/nav/AddProduct']);
  }

  onDelete(item) {
    let x: number = this.prodArr.indexOf(item);
    this._prod.deleteProduct(item.product_id).subscribe(
      (data: any) => {
        console.log(data)
        this.prodArr.splice(x, 1);
        this.dataSource.data=this.prodArr;
      }
    );
    this._route.navigate(['/nav/products']);
  }
  // constructor(private _Router: Router, private _proddata: ProductService) { }
  // flag: boolean = false;
  // proarr: prod[] = [];

  // ngOnInit() {
  //   this._proddata.getAllProduct().subscribe(
  //     (data: prod[]) => {
  //       this.proarr = data;
  //     }
  //   );
  // }
  // onCancel() {
  //   this.flag = false;
  // }
  // onEdit(item) {
  //   // this._Router.navigate(['editproduct',item.p_id]);
  //   this._Router.navigate(['editproduct', item.p_id]);

  // }

  // onDisplay() {
  //   this._Router.navigate(['addProduct']);
  // }
  // onAdd(t1: number, t2: string, t3: number, t4: number, t5: number,t6:File) {
  //   let x: prod = new prod(t1, t2, t3, t4, t5,t6);
  //   this._proddata.addProduct(x).subscribe(
  //     (data: any) => {
  //       this.proarr.push(x);
  //     }
  //   ); this.flag = false;
  // }
  // onDelete(item) {
  //   let x: number = this.proarr.indexOf(item);
  //   this._proddata.deleteProduct(item.p_id).subscribe(
  //     (data: any) => {
  //       this.proarr.splice(x, 1);
  //     }
  //   );
  // }
}
