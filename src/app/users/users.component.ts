import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { UsersDataService } from './users-data.service';
import { Router } from '@angular/router';
import { userCLass } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['user_email','user_type', 'actions'];
  dataSource: MatTableDataSource<userCLass>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private _emp: UsersDataService, private _route: Router) {
    this.dataSource = new MatTableDataSource();
  }

  userArr: userCLass[] = [];
  ngOnInit() {
    this._emp.getAllEmployee().subscribe(
      (data: any) => {
        // console.log(data);
        this.dataSource.data = data;
        this.userArr = data;
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
  onAddEmpClick()
  {
this._route.navigate(['/nav/AddEmp'])
  }
  onEmpClick()
  {
    this._route.navigate(['/nav/employees']);

  }
  onCustClick()
  {
    this._route.navigate(['/nav/customers']);
  }
  hide= true;
}
