import { Component, OnInit, ViewChild } from '@angular/core';
import { custClass } from './customer';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewmorecustomerComponent } from './viewmorecustomer/viewmorecustomer.component';
import { SignupsService } from '../signup/signups.service';
import { Router } from '@angular/router';
import { UsersDataService } from '../users/users-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['customer_id', 'customer_name', 'actions'];
  dataSource: MatTableDataSource<custClass>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _route: Router, private _dialog: MatDialog, private _sign: SignupsService, private _user: UsersDataService) {
    this.dataSource = new MatTableDataSource();
  }
  custArr: custClass[] = [];
  del_arr: custClass[] = [];
  deleteFlag: boolean = false;
  onChange(item) {
    if (this.del_arr.find(x => x == item)) {
      this.del_arr.splice(this.del_arr.indexOf(item), 1);
      if (this.del_arr.length == 0) {
        this.deleteFlag = false;
      }
    }
    else {
      this.del_arr.push(item);
      this.deleteFlag = true;
    }
  }

  onClick() {
    this._sign.deleteAllCustomerData(this.del_arr).subscribe((data) => {
      for (let i = 0; i < this.del_arr.length; i++) {
        if (this.custArr.find(x => x == this.del_arr[i])) {
          this.custArr.splice(this.custArr.indexOf(this.del_arr[i]), 1);
          this.dataSource.data = this.custArr;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    });
  }

  m: number = 0;
  f: number = 0;

  ngOnInit() {
    this._sign.getAllCustomer().subscribe(
      (data: any) => {

        for (let i = 0; i < data.length; i++) {

          if (data[i].customer_gender == "Male") {
            this.m++;
          }
          else if (data[i].customer_gender == "Female") {
            this.f++;
          }
        }

        this.dataSource.data = data;
        this.custArr = data;
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

  onAddCustClick() {
    this._route.navigate(['/nav/signupDisplay']);
  }
  //viewmore
  openDialog(row) {
    console.log(row);
    this._dialog.open(ViewmorecustomerComponent, {
      data: row
    });
  }

  onDelete(item) {
    if (confirm("do you want to delete?")) {
      let x = this.custArr.indexOf(item);
      this._sign.deleteCustomer(item.customer_id).subscribe(
        (data: any) => {
          alert('deleted');
          this.custArr.splice(x, 1);

          this._user.DeleteUserByEmail(item.fk_user_email).subscribe((data: any) => {
            console.log(data);
            alert('success on DELITING USER');
          });
          this.dataSource.data = this.custArr;
          this._route.navigate(['/nav/customers']);

        });
    }
  }

  openEdit(item) {

    this._route.navigate(['/nav/EditCustomer', item.customer_id]);
  }

  onUsersClick() {
    this._route.navigate(['/nav/users']);
  }
}

