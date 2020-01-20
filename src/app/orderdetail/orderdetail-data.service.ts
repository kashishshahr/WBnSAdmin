import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { orderDetailClass } from './orderdetail';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailDataService {
  private url:string=environment.url+'order_detail/';

  constructor(private _http:HttpClient) { }
  getAllOrder_details()
  {
    return this._http.get(this.url);
  }

  deleteOrder_detail(order_detail_id:number)
  {
    let header=new HttpHeaders().set(environment.header1,environment.header2);
    return this._http.delete(this.url+order_detail_id,{headers:header});
  }
  addOrder_detail(item)
  {let x = new HttpHeaders().set(environment.header1,environment.header2);
    let body=JSON.stringify(item);

    return this._http.post(this.url,body,{headers:x});
  }
  getOrder_detailById(order_detail_id: number) {
    // console.log(p_id);
     let x = new HttpHeaders().set(environment.header1,environment.header2);
     return this._http.get(this.url + order_detail_id, { headers: x });
   }
   updateOrder_detail(item: orderDetailClass) {
     // console.log(item);
     let body = JSON.stringify(item);
     // console.log(body);
     let x = new HttpHeaders().set(environment.header1,environment.header2);
     return this._http.put(this.url + item.order_detail_id, body, { headers: x });
   }


}
