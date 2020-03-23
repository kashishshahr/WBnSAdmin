import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderdetailDataService } from './orderdetail-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { orderDetailClass } from './orderdetail';
import { orderDeliveryClass } from '../orderdelivery/orderdelivery';
import { orderClass } from '../order/order';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  constructor(private _router: Router, private _orderDetails: OrderdetailDataService, private _act: ActivatedRoute) {
    this.dataSource = new MatTableDataSource();
    this.dataSource1 = new MatTableDataSource();
    this.dataSource2 = new MatTableDataSource();
  }

  displayedColumns: string[] = ['order_id', 'customer_name', 'order_amount', 'order_date', 'order_status'];
  displayedColumns1: string[] = ['product_name', 'quantity', 'product_price'];
  displayedColumns2: string[] = ['delivery_date', 'employee_name', 'employee_mobileno', 'comment'];
  dataSource: MatTableDataSource<orderClass>;
  dataSource1: MatTableDataSource<orderDetailClass>;
  dataSource2: MatTableDataSource<orderDeliveryClass>;

  order_id: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.order_id = this._act.snapshot.params['order_id'];
    this._orderDetails.getAllOrder_details(this.order_id).subscribe(
      (data: orderClass[]) => {
        this.dataSource.data = data;
      }
    );
    this._orderDetails.getOrderDetailsByOrderId(this.order_id).subscribe(
      (data1: any) => {
        this.dataSource1.data = data1;
      }
    );
    this._orderDetails.getOrderDeliveryByOrderId(this.order_id).subscribe(
      (data2: any) => {
        this.dataSource2.data = data2;
      }
    );
  }

  onStatusUpdate(row) {
    this._router.navigate(['/nav/EditOrder', row.order_id]);
  }

  onClick() {
    this._router.navigate(['/nav/orders']);
  }
}
