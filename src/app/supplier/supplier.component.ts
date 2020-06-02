import { Component, OnInit, ViewChild } from '@angular/core';
import { supplier } from './supplier';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SupplierdataService } from './supplierdata.service';
import { Router } from '@angular/router';
import { SupplierviewmoreComponent } from './supplierviewmore/supplierviewmore.component';
import { OrdertosupplierComponent } from './ordertosupplier/ordertosupplier.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplier_arr: supplier[];
  displayedColumns: string[] = ['supplier_name', 'supplier_email', 'supplier_mobileno', 'action'];
  dataSource: MatTableDataSource<supplier>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data: SupplierdataService, private _router: Router, public _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._data.getAllSupplier().subscribe(
      (data: supplier[]) => {
        console.log(data);
        this.supplier_arr = data;
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
  onDeleteSupplier(row: supplier) {
    if (confirm("do you want to delete?")) {
      this._data.deleteSupplier(row.supplier_id).subscribe(
        (data: supplier[]) => {
          this.supplier_arr.splice(this.supplier_arr.indexOf(row), 1);
          this.dataSource.data = this.supplier_arr;
        }
      );
    }
  }
  onMailClick(row: supplier) {
    this._dialog.open(OrdertosupplierComponent, {
      data: row
    });
  }
  onSupplierAdd() {
    this._router.navigate(['/nav/supplieradd']);
  }
  onViewMore(row: supplier) {
    this._dialog.open(SupplierviewmoreComponent, {
      data: row
    });
  }
  onEditSupplier(supplier_id) {
    this._router.navigate(['/nav/supplieredit', supplier_id]);
  }
}
