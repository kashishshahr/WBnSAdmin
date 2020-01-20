import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { OrderdeliveryDataService } from './orderdelivery-data.service';
import { orderDeliveryClass } from './orderdelivery';

@Component({
  selector: 'app-orderdelivery',
  templateUrl: './orderdelivery.component.html',
  styleUrls: ['./orderdelivery.component.css']
})
export class OrderdeliveryComponent implements OnInit {


  constructor(private _router: Router, private _orderDelivery:OrderdeliveryDataService) { this.dataSource = new MatTableDataSource(); }
  displayedColumns: string[] = ['delivery_date','comment', 'actions'];
  dataSource: MatTableDataSource<orderDeliveryClass>;
  orderDeliveryArr:orderDeliveryClass[]=[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this._orderDelivery.getAllOrder_deliveries().subscribe((data:orderDeliveryClass[])=>{
      this.dataSource.data=data;
      this.orderDeliveryArr=data;
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
