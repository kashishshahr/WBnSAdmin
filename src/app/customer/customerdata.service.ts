import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { custClass } from './customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerdataService {
  url: string = environment.url + "customer/";
  constructor(private _http: HttpClient) { }
  getAllCustomer() {
   // console.log(this.url);
    return this._http.get(this.url);
  }
  deleteCustomer(customer_id) {
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.url + customer_id, { headers: header });
  }
  addCustomer(item: FormData) {
    return this._http.post(this.url, item);
  }
  getCustomerbyid(customer_id: string) {
    return this._http.get(this.url + customer_id);
  }
  updateCustomer(item: custClass) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.url + item.customer_id, body, { headers: head1 });
  }
}
