import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { empClass } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['employee_name', 'actions'];
  dataSource: MatTableDataSource<empClass>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _emp:EmployeeDataService) {
    this.dataSource=new MatTableDataSource();
  }
  empArr:empClass[]=[];
  ngOnInit() {
    this._emp.getAllEmployee().subscribe(
      (data:any)=>{
this.dataSource.data=data;
this.empArr=data;
this.dataSource.paginator=this.paginator;
this.dataSource.sort = this.sort;


      }
    );

  }


}
