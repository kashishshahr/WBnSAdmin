import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDataService } from './order-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { orderClass } from './order';
import { ViewmoreorderComponent } from './viewmoreorder/viewmoreorder.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private _router: Router, private _order: OrderDataService,private _dialog:MatDialog) { this.dataSource = new MatTableDataSource(); }
  displayedColumns: string[] = [ 'order_name', 'order_amount', 'order_date', 'actions'];
  dataSource: MatTableDataSource<orderClass>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  order_id: number;
  oc:number=0;
  orderArr: orderClass[] = [];
  ngOnInit() {
    this._order.getAllOrders().subscribe(
      (data: orderClass[]) => {

        this.dataSource.data = data;
        this.orderArr = data;
        // console.log(data);
        // console.log(this.prodArr)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.oc=data.length;
        // console.log(this.oc);
        console.log(this.orderArr);

      }

    );

  }
  openDialog(row) {
    this._dialog.open(ViewmoreorderComponent, {
      data: row
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onAddOrder()
  {
    this._router.navigate(['/nav/AddOrder']);
  }
  onEditOrder(item)
  {
    this._router.navigate(['/nav/EditOrder',item.order_id]);

  }
  onDelete(row) {
    console.log(row.order_id);
    let x = this.orderArr.indexOf(row)
    if ((confirm('Are YOu Sure You Wanna Delete ? '))) {
      this._order.deleteOrder(row.order_id).subscribe(
        (data: orderClass[]) => {
          this.orderArr.splice(x, 1);
          this.dataSource.data = this.orderArr;
          alert('success');
        }
      );
    }
    this._router.navigate(['/nav/orders']);
  }
}
