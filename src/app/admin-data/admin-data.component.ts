import { Component } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { SignupsService } from '../signup/signups.service';
import { orderClass } from '../order/order';
import { OrderDataService } from '../order/order-data.service';
import { AdminDataService } from './admin-data.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent {
  public pieData: any[] = [
    { category: 'Female', value: 0 },
    { category: 'Male', value: 0 },

  ];
  public trackdata: any[] = [];
  public categories: string[];
  m: number = 0;
  f: number = 0;
  totalcustomers: number = 0;
  constructor(private serobj: AdminDataService, private intl: IntlService, private _sign: SignupsService, private _ord: OrderDataService) {
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} `;
  }
  onMonthChange(value) {
    // console.log(value);
  }



  month: number;
  track: number[] = [];
  count: number[] = [];
  c: number = 0;
  p: number = 0;
  d: number = 0;
  totalstatus: number = 0;
  ngOnInit() {
    //let date: Date;
    this.categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
    this.serobj.getStatus().subscribe((data: any[]) => {

      this.totalstatus = data[0].Delivered + data[0].Packing;
      console.log("Total=" + this.totalstatus)

      this.d = (data[0].Delivered / this.totalstatus);
      this.p = (data[0].Packing / this.totalstatus);
      // console.log(this.m);
      this.trackdata = [{
        kind: "Delivered", share: this.d
      },
      {
        kind: "Pending", share: this.p
      }
      ]

    });
    this.serobj.getOrder().subscribe((data: any) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {

        if (data[this.c].MONTH == i + 1) {
          console.log("i=" + i);
          console.log("c=" + this.c);
          this.count[this.c] = data[i].COUNT;
          this.c++;
        }

      }
    });


    this._sign.getAllCustomer().subscribe(
      (data: any) => {
        for (let i = 0; i < data.length; i++) {
          // console.log(data[i].customer_gender);
          if (data[i].customer_gender == "Male") {
            this.m++;
          }
          else if (data[i].customer_gender == "Female") {
            this.f++;
          }
          this.totalcustomers = this.m + this.f;

        }
        this.m = ((this.m / this.totalcustomers) * 360);
        this.f = (this.f / this.totalcustomers) * 360
        // console.log(this.m);
        for (let i = 0; i < this.pieData.length; i++) {
          if (this.pieData[i].category == 'Male') {
            this.pieData[i].value = this.m;
          }
          else if (this.pieData[i].category == 'Female') {
            this.pieData[i].value = this.f;
          }
        }
      });
  }

  public autofit = true;

  public labelContent1(e: any): string {
    return e.category;
  }

}
