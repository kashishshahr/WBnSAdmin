import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { IntlService } from '@progress/kendo-angular-intl';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { SignupsService } from '../signup/signups.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent {
    public pieData: any[] = [
      { category: 'Female', value: 50 },
      { category: 'Male', value: 60 },

    ];

  constructor(private intl: IntlService, private _sign: SignupsService) {
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} `;
  }
  onMonthChange(value) {
    console.log(value);
  }

  m: number = 0;
  f: number = 0;
  totalcustomers: number = 0;
  ngOnInit() {
    this._sign.getAllCustomer().subscribe(
      (data: any) => {
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].customer_gender);
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
        console.log(this.m);
        for (let i = 0; i < this.pieData.length; i++) {
          if (this.pieData[i].category == 'Male') {
            this.pieData[i].value = this.m;
          }
          else if (this.pieData[i].category == 'Female') {
            this.pieData[i].value = this.f;
          }
        }
      }
    );

  }
}
