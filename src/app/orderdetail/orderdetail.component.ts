import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrderdetailDataService } from './orderdetail-data.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { orderDetailClass } from './orderdetail';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  constructor(private _router: Router, private _orderDetails:OrderdetailDataService)
   { this.dataSource = new MatTableDataSource(); }

  displayedColumns: string[] = ['quantity', 'actions'];
  dataSource: MatTableDataSource<orderDetailClass>;
  orderDetailArr:orderDetailClass[]=[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this._orderDetails.getAllOrder_details().subscribe((data:orderDetailClass[])=>{
      this.dataSource.data=data;
      this.orderDetailArr=data;
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
