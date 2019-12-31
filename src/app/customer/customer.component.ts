import { Component, OnInit, ViewChild } from '@angular/core';
import { custClass } from './customer';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CustomerDataService } from './customer-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['customer_name', 'actions'];
  dataSource: MatTableDataSource<custClass>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _cust: CustomerDataService) {
    this.dataSource = new MatTableDataSource();
  }
  custArr: custClass[] = [];
  ngOnInit() {
    this._cust.getAllCustomer().subscribe(
      (data: any) => {
        this.dataSource.data = data;
        this.custArr = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
}
