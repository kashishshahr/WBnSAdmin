import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { orderClass } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  private url: string = environment.url + 'order/';
  constructor(private _http: HttpClient) { }
  getAllOrders() {
    return this._http.get<orderClass[]>(this.url);
  }
  getOrderById(order_id: number) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.url + order_id, { headers: x });
  }
  updateOrderData(item: orderClass) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.url + item.order_id, body, { headers: x });
  }

}
