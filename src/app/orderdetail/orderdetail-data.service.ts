import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { orderDetailClass } from './orderdetail';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailDataService {
  private url: string = environment.url + 'order_detail/';
  private orderDetail: string = environment.url + 'orderDetails/';
  private orderDelivery: string = environment.url + 'orderDelivery/';

  constructor(private _http: HttpClient) { }
  getAllOrder_details(order_id) {
    return this._http.get(this.url + order_id);
  }
  getOrderDetailsByOrderId(order_id) {
    return this._http.get(this.orderDetail + order_id);
  }
  getOrderDeliveryByOrderId(order_id) {
    return this._http.get(this.orderDelivery + order_id);
  }
  getOrder_detailById(order_detail_id: number) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.url + order_detail_id, { headers: x });
  }

}
