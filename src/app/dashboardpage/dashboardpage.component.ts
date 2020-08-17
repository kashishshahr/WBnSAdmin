import { Component, ViewChild } from '@angular/core';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { TopProducts } from '../top_products';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { map, throttleTime } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { chartClass } from '../chart';

declare var require: any;
var now = new Date();
class model {
  constructor(public kind: string, public share: number) { }
}
@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})

export class DashboardpageComponent {
  topProductarr: TopProducts[] = [];
  dataSource: MatTableDataSource<TopProducts>;
  displayedColumns: string[] = ['fk_pro_id', 'pro_name', 'total'];
  //arr: number[] = [];

  count = [];
  c: number[] = [];
  type = ['Customer', 'Visitors'];
  public monthOrderCount: chartClass[] = [];
  public orderData: any[] = [];
  public months: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  startyr: number = 2020;
  public DonutData: any[] = [];
  currentYear = now.getFullYear();
  selectedYear: number = 2020;
  yaerArray = [];
  customerCount: number;
  TodaysCOH: number;
  feedbackCount: number;
  TodaysOrder: number;
  public data: model[] = [];
  public pieData: any[] = [];
  public labelContent(e: any): string {
    return e.category;
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public serobj: DashboardService, private intl: IntlService) {
    this.labelContent1 = this.labelContent1.bind(this);
    this.dataSource = new MatTableDataSource();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {

    this.serobj.getOrder(this.selectedYear).subscribe((data2: any[]) => {
      this.monthOrderCount = data2;
      // console.log(this.monthOrderCount);

      for (let j = 0; j < data2.length; j++) {
        this.orderData[this.monthOrderCount[j].MONTH - 1] = this.monthOrderCount[j].COUNT;
      }
      console.log(this.orderData);
    });

    this.serobj.getTotalCutomer().subscribe(
      (dataCustomerCount: any) => {
        // console.log(dataCustomerCount);
        this.customerCount = dataCustomerCount[0].Total_Customers;
      }
    );

    this.serobj.getTodaysOrderCount().subscribe(
      (dataTodaysOrderCount: any) => {
        // console.log(dataCustomerCount);
        this.TodaysOrder = dataTodaysOrderCount[0].Today_Orders;
      }
    );



    this.serobj.getAllSimpleCustomer().subscribe((data1: any[]) => {
      this.count = data1;
      console.log(this.count);
      for (let i = 0; i < data1.length; i++) {
        this.c.push(this.count[i].customers);
        this.c.push(this.count[i].visitors);

        console.log(this.c);
      }
    });
    this.serobj.getStatus().subscribe((data3: any[]) => {
      this.DonutData = data3;
      console.log(this.DonutData);
      for (let i = 0; i < data3.length; i++) {
        this.pieData = [
          { category: 'Delivered', value: this.DonutData[i].Delivered },
          { category: 'Processing', value: this.DonutData[i].Processing },
        ];
      }
    });

    this.serobj.getTopProducts().subscribe(
      (data4: TopProducts[]) => {
        console.log(data4);
        this.topProductarr = data4;
        this.dataSource.data = this.topProductarr;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    );
    // console.log(this.selectedYear);
  }
  onYearChange(value) {
    this.serobj.getOrder(value).subscribe((data2: any[]) => {
      this.monthOrderCount = data2;
      for (let j = 0; j < data2.length; j++) {
        this.orderData[this.monthOrderCount[j].MONTH - 1] = this.monthOrderCount[j].COUNT;
      }
      console.log(this.orderData);
    });

  }
  public labelContent1(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} value: ${this.intl.formatNumber(args.dataItem.value, '')}`;
  }
  // public onYearChange(): void {


  // }
}
