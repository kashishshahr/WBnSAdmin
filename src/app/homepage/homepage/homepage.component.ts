import { Component, OnInit, ViewChild } from '@angular/core';
import { HomepagesService } from '../homepages.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

import { Router } from '@angular/router';
import { ViewmoreComponent } from 'src/app/viewmore/viewmore.component';
import { prod } from 'src/app/product/product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  displayedColumns: string[] = ['product_name','actions'];
  dataSource: MatTableDataSource<prod>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _prod:HomepagesService,private _route:Router,public _dialog:MatDialog) {
    this.dataSource=new MatTableDataSource();
   }

   prodArr:prod[]=[];
  ngOnInit() {
    this._prod.getAllProducts().subscribe(
      (data:prod[])=>{
        this.prodArr=data;
        this.dataSource.data=data;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    );
  }
  onSignUpClick()
  {
    this._route.navigate(['signupDisplay']);
  }
  onLoginClick()
  {
    this._route.navigate(['loginDisplay']);
  }
  openDialog(row)
  {
    this._dialog.open(ViewmoreComponent,{
data:row
    });
  }
}
