import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDataService } from './order-data.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { orderClass } from './order';
import { ViewmoreorderComponent } from './viewmoreorder/viewmoreorder.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private _router: Router, private _order: OrderDataService, private _dialog: MatDialog) { this.dataSource = new MatTableDataSource(); }
  displayedColumns: string[] = ['order_id', 'customer_name', 'order_amount', 'order_date', 'order_status', 'actions'];
  dataSource: MatTableDataSource<orderClass>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  order_id: number;
  orderArr: orderClass[] = [];

  ngOnInit() {
    this._order.getAllOrders().subscribe(
      (data: any[]) => {
        console.log(data);
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
