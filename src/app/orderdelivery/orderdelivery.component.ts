import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { OrderdeliveryDataService } from './orderdelivery-data.service';
import { orderDeliveryClass } from './orderdelivery';
import { FormGroup } from '@angular/forms';
import { OrderdetailDataService } from '../orderdetail/orderdetail-data.service';
import { orderDetailClass } from '../orderdetail/orderdetail';
import { OrderDataService } from '../order/order-data.service';
import { orderClass } from '../order/order';
import { ViewmoreorderdeliveryComponent } from './viewmoreorderdelivery/viewmoreorderdelivery.component';

@Component({
  selector: 'app-orderdelivery',
  templateUrl: './orderdelivery.component.html',
  styleUrls: ['./orderdelivery.component.css']
})
export class OrderdeliveryComponent implements OnInit {

  OrderForm: FormGroup;
  constructor(private _router: Router, private _dialog: ViewmoreorderdeliveryComponent, private _orderdata: OrderDataService, private _orderDelivery: OrderdeliveryDataService, private _orderDetail: OrderdetailDataService) {
    this.dataSource = new MatTableDataSource();
  }
  displayedColumns: string[] = ['delivery_date', 'comment', 'actions'];
  dataSource: MatTableDataSource<orderDeliveryClass>;
  orderArr: orderClass[] = [];
  orderDetailArr: orderDetailClass[] = [];
  orderDeliveryArr: orderDeliveryClass[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {

    this._orderdata.getAllOrders().subscribe(
      (data: any[]) => {

        this.dataSource.data = data;
        this.orderDeliveryArr = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    // this._orderDetail.getAllOrder_details().subscribe((data: orderDetailClass[]) => {
    //   this.dataSource.data = data;
    //   this.orderDetailArr = data;
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });

    // this._orderDelivery.getAllOrder_deliveries().subscribe((data: orderDeliveryClass[]) => {
    //   this.dataSource.data = data;
    //   this.orderDeliveryArr = data;
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }

  onOrder() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddOrder() {
    this._router.navigate(['/nav/AddOrderdelivery']);
  }

  onEditOrder(row) {
    this._router.navigate(['/nav/EditOrderdelivery', row.order_delivery_id]);
  }
  // openDialog(row) {
  //   this._dialog.open(ViewmoreorderdeliveryComponent, {
  //     data: row
  //   });
  // }
}
