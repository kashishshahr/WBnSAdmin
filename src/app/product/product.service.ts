import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prod } from './product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = environment.url + 'product/';
  constructor(private _http: HttpClient) { }
  getAllProduct() {
    return this._http.get(this.url);
  }
  addProduct(item) {
    console.log(item);
    // let body = JSON.stringify(item);
    // let x = new HttpHeaders().set('Content-type', 'application/json');
    // return this._http.post(this.url, body, { headers: x });
    return this._http.post(this.url, item);
  }
  deleteProduct(p_id: number) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    //console.log(p_id);
    return this._http.delete(this.url + p_id, { headers: x });
  }
  getProductById(p_id: number) {
    // console.log(p_id);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.url + p_id, { headers: x });
  }
  updateProductData(product_id,item) {
    // console.log(item);
    // let body = JSON.stringify(item);
    // let x = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.put(this.url+product_id, item);
    // return this._http.post(this.url+item.product_id, item);
  }

  deleteAllProductData(id: prod[]) {
    let body = JSON.stringify(id);
    let head = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.post(this.url + id, body, { headers: head });
  }
}
