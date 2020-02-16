import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { UsersDataService } from './users-data.service';
import { Router } from '@angular/router';
import { userCLass } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userArr: userCLass[] = [];
  displayedColumns: string[] = ['user_id', 'user_email', 'user_type'];
  dataSource: MatTableDataSource<userCLass>;
  deleteFlag:boolean=false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private _user: UsersDataService, private _route: Router) {
    this.dataSource = new MatTableDataSource();
  }
  del_arr: userCLass[] = [];
  onChange(item) {
    if (this.del_arr.find(x => x == item)) {
      this.del_arr.splice(this.del_arr.indexOf(item), 1);
      if(this.del_arr.length==0)
      {
      this.deleteFlag=false;
      }
    }
    else
    {
      this.del_arr.push(item);

      this.deleteFlag=true;
    }
    // console.log(this.del_arr);
  }

  onClick() {
    // console.log(this.del_arr);
    this._user.deleteAllUserData(this.del_arr).subscribe((data) => {
      for (let i = 0; i < this.del_arr.length; i++) {
        if (this.userArr.find(x => x == this.del_arr[i])) {
          this.userArr.splice(this.userArr.indexOf(this.del_arr[i]), 1);
          this.dataSource.data = this.userArr;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    });
  }
  ngOnInit() {
    this._user.getAllUser().subscribe(
      (data: userCLass[]) => {
        // console.log(data);
        this.userArr = data;
        this.dataSource.data = data;
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

  onEmpClick() {
    this._route.navigate(['/nav/employees']);

  }
  onCustClick() {
    this._route.navigate(['/nav/customers']);
  }
  hide = true;
}
