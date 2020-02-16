import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ListArr:any;
  // displayedColumns: string[] = ['user_id', 'user_email', 'user_type'];
  // dataSource: MatTableDataSource<userCLass>;
  // deleteFlag:boolean=false;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private _route: Router) {
    // this.dataSource = new MatTableDataSource();
  }
  // del_arr: userCLass[] = [];
  // onChange(item) {
  //   if (this.del_arr.find(x => x == item)) {
  //     this.del_arr.splice(this.del_arr.indexOf(item), 1);
  //     if(this.del_arr.length==0)
  //     {
  //     this.deleteFlag=false;
  //     }
  //   }
  //   else
  //   {
  //     this.del_arr.push(item);

  //     this.deleteFlag=true;
  //   }
  //   // console.log(this.del_arr);
  // }

  // onClick() {
  //   // console.log(this.del_arr);
  //   this._user.deleteAllUserData(this.del_arr).subscribe((data) => {
  //     for (let i = 0; i < this.del_arr.length; i++) {
  //       if (this.userArr.find(x => x == this.del_arr[i])) {
  //         this.userArr.splice(this.userArr.indexOf(this.del_arr[i]), 1);
  //         this.dataSource.data = this.userArr;
  //         this.dataSource.paginator = this.paginator;
  //         this.dataSource.sort = this.sort;
  //       }
  //     }
  //   });
  // }
  ngOnInit() {
    // this._user.getAllUser().subscribe(
    //   (data: userCLass[]) => {
    //     // console.log(data);
    //     this.userArr = data;
    //     this.dataSource.data = data;
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   }
    // );
  }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  onBookClick(){
    this._route.navigate(['/nav/books']);

  }
  onStationeryClick() {
    this._route.navigate(['/nav/products']);
  }
  // hide = true;
}
