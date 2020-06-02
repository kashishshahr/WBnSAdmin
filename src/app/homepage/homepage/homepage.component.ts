import { Component, OnInit, ViewChild } from '@angular/core';
import { HomepagesService } from '../homepages.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { ViewmoreComponent } from 'src/app/product/viewmore/viewmore.component';
import { prod } from 'src/app/product/product';
import { OrderDataService } from 'src/app/order/order-data.service';
import { orderClass } from 'src/app/order/order';
import { UsersDataService } from 'src/app/users/users-data.service';
import { userCLass } from 'src/app/users/users';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  displayedColumns: string[] = ['product_name', 'actions'];
  dataSource: MatTableDataSource<prod>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _prod: HomepagesService, private _order: OrderDataService, private _route: Router, public _dialog: MatDialog, private _user: UsersDataService) {
    this.dataSource = new MatTableDataSource();
  }
  oc: number = 0;
  poc: number = 0;
  doc: number = 0;
  i: number;
  cc: number = 0;
  orderArray: orderClass[] = [];
  prodArr: prod[] = [];

  recw: string = "50px";
  rech: number = 50;
  ngOnInit() {
    this._prod.getAllProducts().subscribe(
      (data: prod[]) => {
        this.prodArr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );

    this._order.getAllOrders().subscribe(
      (data: orderClass[]) => {
        console.log(data);
        this.orderArray = data;
        this.oc = data.length;
        for (this.i = 0; this.i < this.orderArray.length; this.i++) {
          if (this.orderArray[this.i].order_status == "Pending") {
            this.poc++;
          }
          else if (this.orderArray[this.i].order_status == "Done") {
            this.doc++;
          }
        }
      });
    this._user.getAllUser().subscribe((data: userCLass[]) => {
      for (this.i = 0; this.i < data.length; this.i++) {

        if (data[this.i].user_type == "visitor") {
          this.cc++;
        }
      }
    });
  }

  onSignUpClick() {
    this._route.navigate(['signupDisplay']);
  }

  onLoginClick() {
    this._route.navigate(['loginDisplay']);
  }
  openDialog(row) {
    this._dialog.open(ViewmoreComponent, {
      data: row
    });
  }
}
