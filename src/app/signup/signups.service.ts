import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { custClass } from '../customer/customer';
@Injectable({
  providedIn: 'root'
})
export class SignupsService {
  private url: string = environment.url + "user/";
  private cust_url: string = environment.url + "customer/";
  constructor(private _http: HttpClient) { }
  signUp(obj) {
    console.log(obj);
    let body = JSON.stringify(obj);
    let x = new HttpHeaders().set(environment.header1, environment.header2);

    return this._http.post(this.url, body, { headers: x });
  }
  customerAdd(item) {
    console.log(item);
    // let body = JSON.stringify(item);
    // let x = new HttpHeaders().set('Content-type', 'application/json');
    // return this._http.post(this.url, body, { headers: x });
    return this._http.post(this.cust_url, item);
  }

  getAllCustomer() {
    return this._http.get(this.cust_url);
  }
  deleteCustomer(c_id) {
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.cust_url + c_id, { headers: header });
  }

  getCustomerById(c_id) {
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.cust_url + c_id, { headers: header });
  }
  updateCustomer(obj) {
    let body = JSON.stringify(obj);
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.cust_url + obj.customer_id, body, { headers: header });
  }

  deleteAllCustomerData(id: custClass[]) {
    let body = JSON.stringify(id);
    let head = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.post(this.cust_url + id, body, { headers: head });
  }
}
