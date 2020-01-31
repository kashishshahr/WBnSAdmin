import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchasedataService {

  url: string = environment.url + 'purchase/';
  constructor(private _http: HttpClient) { }

  getAllPurchase() {
    return this._http.get<purchase[]>(this.url);
  }
  deletePurchase(purchase_id) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.url + purchase_id, { headers: x });
  }
  addPurchase(item: purchase) {
    return this._http.post(this.url, item);
  }
  getPurchaseById(supplier_id: string) {
    return this._http.get(this.url + supplier_id);
  }
  updatePurchase(item: purchase) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.url + item.purchase_id, body, { headers: head1 });
  }
}
