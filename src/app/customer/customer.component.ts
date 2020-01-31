import { Component, OnInit, ViewChild } from '@angular/core';
import { custClass } from './customer';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ViewmorecustomerComponent } from './viewmorecustomer/viewmorecustomer.component';
import { SignupsService } from '../signup/signups.service';
import { Router } from '@angular/router';

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

  constructor(private _route:Router, private _dialog:MatDialog,private _sign:SignupsService) {
    this.dataSource = new MatTableDataSource();
  }
  custArr: custClass[] = [];
  ngOnInit() {
    this._sign.getAllCustomer().subscribe(
      (data: any) => {
        this.dataSource.data = data;
        this.custArr = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  openDialog(row) {
    this._dialog.open(ViewmorecustomerComponent, {
      data: row
    });
  }
  onDelete(item)
  {

    let x = this.custArr.indexOf(item);
    this._sign.deleteCustomer(item.customer_id).subscribe(
      (data: any) => {
        alert('deleted');
        this.custArr.splice(x, 1);
        this.dataSource.data = this.custArr;
        this._route.navigate(['/nav/customers']);

      });
  }
  openEdit(item)
  {
    this._route.navigate(['/nav/EditCustomer',item.customer_id]);
  }

  onClick()
  {
    this._route.navigate(['/nav/users']);
  }
  }

