import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderdetailDataService } from './orderdetail-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { orderDetailClass } from './orderdetail';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  constructor(private _router: Router, private _orderDetails: OrderdetailDataService, private _act: ActivatedRoute) { this.dataSource = new MatTableDataSource(); }

  displayedColumns: string[] = ['order_id', 'customer_name', 'order_amount', 'order_date', 'order_status'];
  displayedColumns1: string[] = ['product_name', 'quantity', 'product_price'];
  displayedColumns2: string[] = ['delivery_date', 'employee_name', 'employee_mobileno', 'comment'];
  dataSource: MatTableDataSource<orderDetailClass>;

  orderDetailArr: any[] = [];
  orderDetailByIdArr: any[] = [];
  orderDeliveryByIdArr: any[] = [];
  arr: orderDetailClass[];
  order_id: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.order_id = this._act.snapshot.params['order_id'];
    console.log(this.order_id)
    this._orderDetails.getAllOrder_details(this.order_id).subscribe(
      (data: any) => {
        console.log(data)
        //this.dataSource.data = data;
        this.orderDetailArr = data;
        // this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    this._orderDetails.getOrderDetailsByOrderId(this.order_id).subscribe(
      (data1: any) => {

        this.dataSource.data = data1;
        this.orderDetailByIdArr = data1;
        // this.dataSource1.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    this._orderDetails.getOrderDeliveryByOrderId(this.order_id).subscribe(
      (data2: any) => {

        this.dataSource.data = data2;
        this.orderDeliveryByIdArr = data2;
        // this.dataSource1.paginator = this.paginator;
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

}
