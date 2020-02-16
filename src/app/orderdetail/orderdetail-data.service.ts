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
  deleteOrder_detail(order_detail_id: number) {
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.url + order_detail_id, { headers: header });
  }
  addOrder_detail(item) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: x });
  }
  getOrder_detailById(order_detail_id: number) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.url + order_detail_id, { headers: x });
  }
  updateOrder_detail(item: orderDetailClass) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.url + item.order_detail_id, body, { headers: x });
  }


}
