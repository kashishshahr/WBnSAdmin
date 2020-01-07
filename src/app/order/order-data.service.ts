import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { orderClass } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
private url:string=environment.url+'orders/';
  constructor(private _http:HttpClient) { }
  getAllOrders()
  {
    return this._http.get(this.url);
  }
  deleteOrder(order_id:number)
  {
    let header=new HttpHeaders().set(environment.header1,environment.header2);
    return this._http.delete(this.url+order_id,{headers:header});
  }
  addOrder(item)
  {let x = new HttpHeaders().set(environment.header1,environment.header2);
    let body=JSON.stringify(item);

    return this._http.post(this.url,body,{headers:x});
  }
  getOrderById(order_id: number) {
    // console.log(p_id);
     let x = new HttpHeaders().set(environment.header1,environment.header2);
     return this._http.get(this.url + order_id, { headers: x });
   }
   updateOrderData(item: orderClass) {
     // console.log(item);
     let body = JSON.stringify(item);
     // console.log(body);
     let x = new HttpHeaders().set(environment.header1,environment.header2);
     return this._http.put(this.url + item.order_id, body, { headers: x });
   }

}
