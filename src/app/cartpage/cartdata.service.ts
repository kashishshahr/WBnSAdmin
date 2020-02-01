import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {
  url: string = environment.url + "cart/";
  constructor(private _http: HttpClient) { }

  getAllCart() {
    // console.log("in service");
    return this._http.get(this.url);
  }
  deleteCart(cart_id) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.url + cart_id, { headers: x });
  }
  addCart(item) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.post(this.url, item);
  }
}
