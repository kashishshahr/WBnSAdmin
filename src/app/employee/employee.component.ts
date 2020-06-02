import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { empClass } from './employee';
import { ViewmoreemployeeComponent } from './viewmoreemployee/viewmoreemployee.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['employee_id', 'employee_name', 'employee_gender', 'actions'];
  dataSource: MatTableDataSource<empClass>;
  deleteFlag: boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _route: Router, private _emp: EmployeeDataService, private _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog(row) {
    this._dialog.open(ViewmoreemployeeComponent, {
      data: row
    });
  }
  empArr: empClass[] = [];
  del_arr: empClass[] = [];
  onChange(item: empClass) {
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
    // console.log(this.del_arr);
  }

  onClick() {
    // console.log(this.del_arr);
    this._emp.deleteAllEmployeeData(this.del_arr).subscribe(
      (data: any) => {
        for (let i = 0; i < this.del_arr.length; i++) {
          if (this.empArr.find(x => x == this.del_arr[i])) {
            this.empArr.splice(this.empArr.indexOf(this.del_arr[i]), 1);
            this.dataSource.data = this.empArr;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }
      });
  }

  ngOnInit() {
    this._emp.getAllEmployee().subscribe(
      (data: empClass[]) => {
        this.dataSource.data = data;
        this.empArr = data;
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
  onAddEmpClick() {
    this._route.navigate(['/nav/AddEmp'])
  }
  onDelete(item) {
    if (confirm("do you want to delete?")) {
      let x = this.empArr.indexOf(item);
      this._emp.deleteEmployee(item.employee_id).subscribe(
        (data: any) => {
          this.empArr.splice(x, 1);
          this.dataSource.data = this.empArr;
          this._route.navigate(['/nav/employees']);

        });
    }
  }
  onUsersClick() {
    this._route.navigate(['/nav/users']);
  }
  onEdit(item) {
    this._route.navigate(['/nav/EditEmployee', item.employee_id]);
  }
}
