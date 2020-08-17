import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDataService } from './order-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { orderClass } from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private _router: Router, private _order: OrderDataService, private _dialog: MatDialog) { this.dataSource = new MatTableDataSource(); }
  displayedColumns: string[] = ['order_id', 'customer_name', 'order_amount', 'order_date', 'shipping_address', 'order_notes','payment_type', 'order_status', 'actions'];
  dataSource: MatTableDataSource<orderClass>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  order_id: number;
  orderArr: orderClass[] = [];

  ngOnInit() {
    this._order.getAllOrders().subscribe(
      (data: any[]) => {
        this.dataSource.data = data;
        this.orderArr = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );

  }
  openDialog(row) {
    this._router.navigate(['/nav/order_details', row.order_id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onEditOrder(item) {
    this._router.navigate(['/nav/EditOrder', item.order_id]);
  }

}
