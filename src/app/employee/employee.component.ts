import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { empClass } from './employee';
import { ViewmoreemployeeComponent } from './viewmoreemployee/viewmoreemployee.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['employee_name', 'employee_gender', 'actions'];
  dataSource: MatTableDataSource<empClass>;

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
  ngOnInit() {
    this._emp.getAllEmployee().subscribe(
      (data: any) => {
        this.dataSource.data = data;
        this.empArr = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  onDelete(item) {
    let x = this.empArr.indexOf(item);
    this._emp.deleteEmployee(item.employee_id).subscribe(
      (data: any) => {
        alert('deleted');
        this.empArr.splice(x, 1);
        this.dataSource.data = this.empArr;
        this._route.navigate(['/nav/employees']);

      });
  }
  onClick()
  {
    this._route.navigate(['/nav/users']);
  }
  onEdit(item)
  {
    this._route.navigate(['/nav/EditEmployee',item.employee_id]);
  }
}
