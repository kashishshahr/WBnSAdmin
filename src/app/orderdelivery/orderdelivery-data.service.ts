import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { orderDeliveryClass } from './orderdelivery';

@Injectable({
  providedIn: 'root'
})
export class OrderdeliveryDataService {
  private url: string = environment.url + 'order_delivery/';
  private orderDeliveryEmp: string = environment.url + 'orderDeliveryEmp/';
  private orderDeliveryNotEmp: string = environment.url + 'orderDeliveryNotEmp/';

  constructor(private _http: HttpClient) { }
  getAllOrder_deliveries() {
    return this._http.get<orderDeliveryClass[]>(this.url);
  }
  getDeliveryByEmp() {
    return this._http.get(this.orderDeliveryEmp);
  }
  getDeliveryNotByEmp() {
    return this._http.get<orderDeliveryClass[]>(this.orderDeliveryNotEmp);
  }
  deleteOrder_delivery(order_delivery_id: number) {
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.url + order_delivery_id, { headers: header });
  }
  addOrder_delivery(item) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: x });
  }
  getOrder_deliveryById(order_delivery_id: number) {
    // console.log(p_id);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.url + order_delivery_id, { headers: x });
  }
  updateOrder_delivery(item: any) {
    console.log(item.order_delivery_id)
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.url + item.order_delivery_id, body, { headers: x });
  }

}
