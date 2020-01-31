import { Component, OnInit, ViewChild } from '@angular/core';
import { CategorydataService } from './categorydata.service';
import { Router } from '@angular/router';
import { Category } from './category';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit {
  category_arr: Category[];
  displayedColumns: string[] = ['category_name', 'action'];
  dataSource: MatTableDataSource<Category>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data: CategorydataService, private _route: Router, private router: Router, public _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._data.getAllCategory().subscribe(
      (data: Category[]) => {
        this.category_arr = data;
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
  onDelete(row) {
    console.log(row)
    if (confirm("do you want to delete?")) {
      this._data.deleteCategory(row.category_id).subscribe(
        (data: Category[]) => {
          console.log(data)
          this.category_arr.splice(this.category_arr.indexOf(row), 1);
          this.dataSource.data = this.category_arr;
        }
      );
    }
  }
  onCartAdd() {
    this._route.navigate(['/nav/categoryadd']);
  }
  onCategoryEdit(category_id) {
    this._route.navigate(['/nav/categoryedit', category_id]);
  }
}
