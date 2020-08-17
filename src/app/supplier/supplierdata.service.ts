import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierdataService {
  url: string = environment.url + 'supplier/';
  constructor(private _http: HttpClient) { }
  getAllSupplier() {
    return this._http.get(this.url);
  }
  deleteSupplier(supplier_id) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.url + supplier_id, { headers: x });
  }
  addSupplier(item: supplier) {
    return this._http.post(this.url, item);
  }
  getSupplierById(supplier_id: string) {
    return this._http.get(this.url + supplier_id);
  }
  updateSupplier(item: supplier) {
    console.log(item);

    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.url + item.supplier_id, body, { headers: head1 });
  }
}
