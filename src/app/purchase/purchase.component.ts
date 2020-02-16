import { Component, OnInit, ViewChild } from '@angular/core';
import { purchase } from './purchase';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PurchasedataService } from './purchasedata.service';
import { PurchaseviewmoreComponent } from './purchaseviewmore/purchaseviewmore.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchase_arr: purchase[];

  displayedColumns: string[] = ['purchase_price', 'product_name', 'supplier_name', 'action'];
  dataSource: MatTableDataSource<purchase>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data: PurchasedataService, private _router: Router, public _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this._data.getAllPurchase().subscribe(
      (data: purchase[]) => {
        this.purchase_arr = data;
        this.dataSource.data = this.purchase_arr;
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
  onDeletePurchase(row: purchase) {
    if (confirm("do you want to delete?")) {
      this._data.deletePurchase(row.purchase_id).subscribe(
        (data: purchase[]) => {
          this.purchase_arr.splice(this.purchase_arr.indexOf(row), 1);
          this.dataSource.data = this.purchase_arr;
        }
      );
    }
  }
  onPurchaseAdd() {
    this._router.navigate(['/nav/purchaseadd']);
  }
  onViewMore(row: purchase) {
    this._dialog.open(PurchaseviewmoreComponent, {
      data: row
    });
  }
  onEditPurchase(purchase_id) {
    this._router.navigate(['/nav/purchaseedit', purchase_id]);
  }

}
