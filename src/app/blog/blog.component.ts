import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewmoreComponent } from '../product/viewmore/viewmore.component';
import { blog } from '../blog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit  {
  displayedColumns: string[] = [ 'blog_head','blog_photo','blog_quote', 'blog_paragraph', 'blog_paragraph2','actions'];
  dataSource: MatTableDataSource<blog>;
  deleteFlag: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _blog: BlogService, private _route: Router) {
    this.dataSource = new MatTableDataSource();
  }

  blogArr: blog[] = [];
  blog_table: blog[] = [];
  ngOnInit() {
    this._blog.getAllblog().subscribe(
      (data: blog[]) => {
        this.dataSource.data = data;
        this.blogArr = data;
        // console.log(this.prodArr)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  del_arr: blog[] = [];
  onChange(item: blog) {
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
  onAddClick() {
    this._route.navigate(['/nav/AddBlog']);
  }
  openEdit(row) {
    this._route.navigate(['/nav/EditBlog/', row.blog_id]);
  }
  onDelete(item) {
    if (confirm("do you want to delete?")) {
      let x: number = this.blogArr.indexOf(item);
      this._blog.deleteblog(item.blog_id).subscribe(
        (data: any) => {
          this.blogArr.splice(x, 1);
          this.dataSource.data = this.blogArr;
        }
      );
      this._route.navigate(['/nav/blog']);
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
