import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prod } from './product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = environment.url+'product/';
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
    let x = new HttpHeaders().set('Content-type', 'application/json');
    console.log(p_id);
    return this._http.delete(this.url + p_id, { headers: x });

  }
  getProductById(p_id: number) {
    console.log(p_id);
    let x = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url + p_id, { headers: x });
  }
  updateProductData(item: prod) {
    // console.log(item);
    let body = JSON.stringify(item);
    // console.log(body);
    let x = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.put(this.url + item.product_id, body, { headers: x });
  }
}