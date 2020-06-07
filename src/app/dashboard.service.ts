import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientXsrfModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public url: string = environment.url + 'dashboard/';
  public urlStatus: string = environment.url + 'DashboardTrackingStatus/';
  public barurl: string = environment.url + 'dashboardCustomerData/';
  public TopProducturl: string = environment.url + 'TopSellingProducts/';
  public TotalCutomerCounturl: string = environment.url + 'TotalCustomer/';

  public TodaysOrderCounturl: string = environment.url + 'TodaysOrders/';



  constructor(public _http: HttpClient) { }
  getAllSimpleCustomer() {
    return this._http.get(this.barurl);
  }
  getOrder(selectedYear: number) {
    return this._http.get(this.url + selectedYear);
  }
  getStatus() {
    return this._http.get(this.urlStatus);
  }
  getTopProducts() {
    return this._http.get(this.TopProducturl);
  }
  getTotalCutomer() {
    return this._http.get(this.TotalCutomerCounturl);
  }
  getTodaysOrderCount() {
    return this._http.get(this.TodaysOrderCounturl);
  }
}
