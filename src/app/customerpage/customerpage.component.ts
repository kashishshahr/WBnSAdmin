import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Customer } from './customer';
import { CustomerdataService } from './customerdata.service';
import { Router } from '@angular/router';
import { ViewmorecustmoreComponent } from './viewmorecustmore/viewmorecustmore.component';
import { CustomeraddComponent } from './customeradd/customeradd.component';

@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent implements OnInit {
  customer_arr: Customer[];
  cusarr: Customer[];
  displayedColumns: string[] = ['customer_name', 'customer_mobileno', 'action'];
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data: CustomerdataService, private _router: Router, public _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._data.getAllCustomer().subscribe(
      (data: Customer[]) => {
        console.log(data);
        this.customer_arr = data;
        console.log(this.customer_arr);
        this.dataSource.data = this.customer_arr;
        this.dataSource.paginator = this.paginator;
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
  onDelete(row: Customer) {
    if (confirm("do you want to delete?")) {
      this._data.deleteCustomer(row.customer_id).subscribe(
        (data: Customer[]) => {
          this.customer_arr.splice(this.customer_arr.indexOf(row), 1);
          this.dataSource.data = this.customer_arr;
        }
      );
    }
  }
  onCustomerAdd() {
    this._router.navigate(['/nav/customeradd']);
  }
  onViewMore(row: Customer) {
    this._dialog.open(ViewmorecustmoreComponent, {
      data: row
    });
  }
  onEditCustomer(customer_id) {
    // console.log(row)
    this._router.navigate(['/nav/customeredit', customer_id]);
  }

}
